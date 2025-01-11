import {
	c as create_ssr_component,
	i as compute_rest_props,
	b as add_attribute,
	f as spread,
	d as escape,
	h as escape_object,
	j as createEventDispatcher,
	s as setContext,
	v as validate_component,
	k as get_current_component,
	l as getContext,
	g as escape_attribute_value,
	n as compute_slots,
	a as subscribe,
	o as add_styles,
} from "../../../../chunks/ssr.js";
import { d as defaultI18nValues, p as page } from "../../../../chunks/i18n.js";
/* empty css                                                              */
import { I as IconButton } from "../../../../chunks/IconButton.js";
import {
	u as uid,
	c as createEventForwarder,
} from "../../../../chunks/internal2.js";
import { T as TextBlock } from "../../../../chunks/TextBlock.js";
import { $ as $format } from "../../../../chunks/runtime.js";
import { M as Metadata } from "../../../../chunks/Metadata.js";
import { e as externalLink } from "../../../../chunks/utils.js";
/*!
 * tabbable 5.3.3
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var candidateSelectors = [
	"input",
	"select",
	"textarea",
	"a[href]",
	"button",
	"[tabindex]:not(slot)",
	"audio[controls]",
	"video[controls]",
	'[contenteditable]:not([contenteditable="false"])',
	"details>summary:first-of-type",
	"details",
];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement
	? function () {}
	: Element.prototype.matches ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
var getRootNode =
	!NoElement && Element.prototype.getRootNode
		? function (element) {
				return element.getRootNode();
			}
		: function (element) {
				return element.ownerDocument;
			};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
	var candidates = Array.prototype.slice.apply(
		el.querySelectorAll(candidateSelector),
	);
	if (includeContainer && matches.call(el, candidateSelector)) {
		candidates.unshift(el);
	}
	candidates = candidates.filter(filter);
	return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(
	elements,
	includeContainer,
	options,
) {
	var candidates = [];
	var elementsToCheck = Array.from(elements);
	while (elementsToCheck.length) {
		var element = elementsToCheck.shift();
		if (element.tagName === "SLOT") {
			var assigned = element.assignedElements();
			var content = assigned.length ? assigned : element.children;
			var nestedCandidates = getCandidatesIteratively2(content, true, options);
			if (options.flatten) {
				candidates.push.apply(candidates, nestedCandidates);
			} else {
				candidates.push({
					scope: element,
					candidates: nestedCandidates,
				});
			}
		} else {
			var validCandidate = matches.call(element, candidateSelector);
			if (
				validCandidate &&
				options.filter(element) &&
				(includeContainer || !elements.includes(element))
			) {
				candidates.push(element);
			}
			var shadowRoot =
				element.shadowRoot || // check for an undisclosed shadow
				(typeof options.getShadowRoot === "function" &&
					options.getShadowRoot(element));
			var validShadowRoot =
				!options.shadowRootFilter || options.shadowRootFilter(element);
			if (shadowRoot && validShadowRoot) {
				var _nestedCandidates = getCandidatesIteratively2(
					shadowRoot === true ? element.children : shadowRoot.children,
					true,
					options,
				);
				if (options.flatten) {
					candidates.push.apply(candidates, _nestedCandidates);
				} else {
					candidates.push({
						scope: element,
						candidates: _nestedCandidates,
					});
				}
			} else {
				elementsToCheck.unshift.apply(elementsToCheck, element.children);
			}
		}
	}
	return candidates;
};
var getTabindex = function getTabindex2(node, isScope) {
	if (node.tabIndex < 0) {
		if (
			(isScope ||
				/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) ||
				node.isContentEditable) &&
			isNaN(parseInt(node.getAttribute("tabindex"), 10))
		) {
			return 0;
		}
	}
	return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
	return a.tabIndex === b.tabIndex
		? a.documentOrder - b.documentOrder
		: a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
	return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
	return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
	var r =
		node.tagName === "DETAILS" &&
		Array.prototype.slice.apply(node.children).some(function (child) {
			return child.tagName === "SUMMARY";
		});
	return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
	for (var i = 0; i < nodes.length; i++) {
		if (nodes[i].checked && nodes[i].form === form) {
			return nodes[i];
		}
	}
};
var isTabbableRadio = function isTabbableRadio2(node) {
	if (!node.name) {
		return true;
	}
	var radioScope = node.form || getRootNode(node);
	var queryRadios = function queryRadios2(name) {
		return radioScope.querySelectorAll(
			'input[type="radio"][name="' + name + '"]',
		);
	};
	var radioSet;
	if (
		typeof window !== "undefined" &&
		typeof window.CSS !== "undefined" &&
		typeof window.CSS.escape === "function"
	) {
		radioSet = queryRadios(window.CSS.escape(node.name));
	} else {
		try {
			radioSet = queryRadios(node.name);
		} catch (err) {
			console.error(
				"Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
				err.message,
			);
			return false;
		}
	}
	var checked = getCheckedRadio(radioSet, node.form);
	return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
	return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
	return isRadio(node) && !isTabbableRadio(node);
};
var isZeroArea = function isZeroArea2(node) {
	var _node$getBoundingClie = node.getBoundingClientRect(),
		width = _node$getBoundingClie.width,
		height = _node$getBoundingClie.height;
	return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
	var displayCheck = _ref.displayCheck,
		getShadowRoot = _ref.getShadowRoot;
	if (getComputedStyle(node).visibility === "hidden") {
		return true;
	}
	var isDirectSummary = matches.call(node, "details>summary:first-of-type");
	var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
	if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
		return true;
	}
	var nodeRootHost = getRootNode(node).host;
	var nodeIsAttached =
		(nodeRootHost === null || nodeRootHost === void 0
			? void 0
			: nodeRootHost.ownerDocument.contains(nodeRootHost)) ||
		node.ownerDocument.contains(node);
	if (!displayCheck || displayCheck === "full") {
		if (typeof getShadowRoot === "function") {
			var originalNode = node;
			while (node) {
				var parentElement = node.parentElement;
				var rootNode = getRootNode(node);
				if (
					parentElement &&
					!parentElement.shadowRoot &&
					getShadowRoot(parentElement) === true
				) {
					return isZeroArea(node);
				} else if (node.assignedSlot) {
					node = node.assignedSlot;
				} else if (!parentElement && rootNode !== node.ownerDocument) {
					node = rootNode.host;
				} else {
					node = parentElement;
				}
			}
			node = originalNode;
		}
		if (nodeIsAttached) {
			return !node.getClientRects().length;
		}
	} else if (displayCheck === "non-zero-area") {
		return isZeroArea(node);
	}
	return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
		var parentNode = node.parentElement;
		while (parentNode) {
			if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
				for (var i = 0; i < parentNode.children.length; i++) {
					var child = parentNode.children.item(i);
					if (child.tagName === "LEGEND") {
						return matches.call(parentNode, "fieldset[disabled] *")
							? true
							: !child.contains(node);
					}
				}
				return true;
			}
			parentNode = parentNode.parentElement;
		}
	}
	return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(
	options,
	node,
) {
	if (
		node.disabled ||
		isHiddenInput(node) ||
		isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
		isDetailsWithSummary(node) ||
		isDisabledFromFieldset(node)
	) {
		return false;
	}
	return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(
	options,
	node,
) {
	if (
		isNonTabbableRadio(node) ||
		getTabindex(node) < 0 ||
		!isNodeMatchingSelectorFocusable(options, node)
	) {
		return false;
	}
	return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(
	shadowHostNode,
) {
	var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
	if (isNaN(tabIndex) || tabIndex >= 0) {
		return true;
	}
	return false;
};
var sortByOrder = function sortByOrder2(candidates) {
	var regularTabbables = [];
	var orderedTabbables = [];
	candidates.forEach(function (item, i) {
		var isScope = !!item.scope;
		var element = isScope ? item.scope : item;
		var candidateTabindex = getTabindex(element, isScope);
		var elements = isScope ? sortByOrder2(item.candidates) : element;
		if (candidateTabindex === 0) {
			isScope
				? regularTabbables.push.apply(regularTabbables, elements)
				: regularTabbables.push(element);
		} else {
			orderedTabbables.push({
				documentOrder: i,
				tabIndex: candidateTabindex,
				item,
				isScope,
				content: elements,
			});
		}
	});
	return orderedTabbables
		.sort(sortOrderedTabbables)
		.reduce(function (acc, sortable) {
			sortable.isScope
				? acc.push.apply(acc, sortable.content)
				: acc.push(sortable.content);
			return acc;
		}, [])
		.concat(regularTabbables);
};
var tabbable = function tabbable2(el, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot) {
		candidates = getCandidatesIteratively([el], options.includeContainer, {
			filter: isNodeMatchingSelectorTabbable.bind(null, options),
			flatten: false,
			getShadowRoot: options.getShadowRoot,
			shadowRootFilter: isValidShadowRootTabbable,
		});
	} else {
		candidates = getCandidates(
			el,
			options.includeContainer,
			isNodeMatchingSelectorTabbable.bind(null, options),
		);
	}
	return sortByOrder(candidates);
};
const css$3 = {
	code: "@-webkit-keyframes svelte-1qibxfp-menu-open{0%{transform:translateY(var(--fds-menu-flyout-transition-offset,-50%))}to{transform:none}}@keyframes svelte-1qibxfp-menu-open{0%{transform:translateY(var(--fds-menu-flyout-transition-offset,-50%))}to{transform:none}}@-webkit-keyframes svelte-1qibxfp-menu-shadow{0%{box-shadow:none}to{box-shadow:var(--fds-flyout-shadow)}}@keyframes svelte-1qibxfp-menu-shadow{0%{box-shadow:none}to{box-shadow:var(--fds-flyout-shadow)}}.menu-flyout.svelte-1qibxfp{-webkit-animation:svelte-1qibxfp-menu-open var(--fds-control-normal-duration) var(--fds-control-fast-out-slow-in-easing),svelte-1qibxfp-menu-shadow var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing) var(--fds-control-normal-duration) forwards;animation:svelte-1qibxfp-menu-open var(--fds-control-normal-duration) var(--fds-control-fast-out-slow-in-easing),svelte-1qibxfp-menu-shadow var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing) var(--fds-control-normal-duration) forwards;background-clip:padding-box;background-color:var(--fds-solid-background-quarternary);border:1px solid var(--fds-surface-stroke-flyout);border-radius:var(--fds-overlay-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);display:flex;flex-direction:column;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;line-height:20px;margin:0;max-block-size:100vh;max-inline-size:100%;min-inline-size:120px;padding:0;padding-block:2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu-flyout-surface-container.svelte-1qibxfp{overflow:hidden}",
	map: '{"version":3,"file":"MenuFlyoutSurface.svelte","sources":["MenuFlyoutSurface.svelte"],"sourcesContent":["<script >/** Specifies a custom class name for the surface. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the surface element. */\\r\\nexport let element = null;\\r\\nlet animationComplete = false;\\r\\n</script>\\n\\n<div\\n\\tclass=\\"menu-flyout-surface-container\\"\\n\\tstyle={animationComplete ? \\"overflow: visible;\\" : undefined}\\n>\\n\\t<ul\\n\\t\\ton:animationend|once={() => (animationComplete = true)}\\n\\t\\tclass=\\"menu-flyout {className}\\"\\n\\t\\tbind:this={element}\\n\\t\\t{...$$restProps}\\n\\t>\\n\\t\\t<slot />\\n\\t</ul>\\n</div>\\n\\n<style >@-webkit-keyframes menu-open{0%{transform:translateY(var(--fds-menu-flyout-transition-offset,-50%))}to{transform:none}}@keyframes menu-open{0%{transform:translateY(var(--fds-menu-flyout-transition-offset,-50%))}to{transform:none}}@-webkit-keyframes menu-shadow{0%{box-shadow:none}to{box-shadow:var(--fds-flyout-shadow)}}@keyframes menu-shadow{0%{box-shadow:none}to{box-shadow:var(--fds-flyout-shadow)}}.menu-flyout{-webkit-animation:menu-open var(--fds-control-normal-duration) var(--fds-control-fast-out-slow-in-easing),menu-shadow var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing) var(--fds-control-normal-duration) forwards;animation:menu-open var(--fds-control-normal-duration) var(--fds-control-fast-out-slow-in-easing),menu-shadow var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing) var(--fds-control-normal-duration) forwards;background-clip:padding-box;background-color:var(--fds-solid-background-quarternary);border:1px solid var(--fds-surface-stroke-flyout);border-radius:var(--fds-overlay-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);display:flex;flex-direction:column;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;line-height:20px;margin:0;max-block-size:100vh;max-inline-size:100%;min-inline-size:120px;padding:0;padding-block:2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu-flyout-surface-container{overflow:hidden}</style>\\n"],"names":[],"mappings":"AAsBQ,mBAAmB,wBAAS,CAAC,EAAE,CAAC,UAAU,WAAW,IAAI,mCAAmC,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,UAAU,IAAI,CAAC,CAAC,WAAW,wBAAS,CAAC,EAAE,CAAC,UAAU,WAAW,IAAI,mCAAmC,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,UAAU,IAAI,CAAC,CAAC,mBAAmB,0BAAW,CAAC,EAAE,CAAC,WAAW,IAAI,CAAC,EAAE,CAAC,WAAW,IAAI,mBAAmB,CAAC,CAAC,CAAC,WAAW,0BAAW,CAAC,EAAE,CAAC,WAAW,IAAI,CAAC,EAAE,CAAC,WAAW,IAAI,mBAAmB,CAAC,CAAC,CAAC,2BAAY,CAAC,kBAAkB,wBAAS,CAAC,IAAI,6BAA6B,CAAC,CAAC,IAAI,qCAAqC,CAAC,CAAC,0BAAW,CAAC,IAAI,2BAA2B,CAAC,CAAC,IAAI,qCAAqC,CAAC,CAAC,IAAI,6BAA6B,CAAC,CAAC,QAAQ,CAAC,UAAU,wBAAS,CAAC,IAAI,6BAA6B,CAAC,CAAC,IAAI,qCAAqC,CAAC,CAAC,0BAAW,CAAC,IAAI,2BAA2B,CAAC,CAAC,IAAI,qCAAqC,CAAC,CAAC,IAAI,6BAA6B,CAAC,CAAC,QAAQ,CAAC,gBAAgB,WAAW,CAAC,iBAAiB,IAAI,kCAAkC,CAAC,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,IAAI,2BAA2B,CAAC,CAAC,cAAc,IAAI,2BAA2B,CAAC,CAAC,WAAW,UAAU,CAAC,MAAM,IAAI,kBAAkB,CAAC,CAAC,QAAQ,IAAI,CAAC,eAAe,MAAM,CAAC,YAAY,IAAI,sBAAsB,CAAC,CAAC,UAAU,IAAI,oBAAoB,CAAC,CAAC,YAAY,GAAG,CAAC,YAAY,IAAI,CAAC,OAAO,CAAC,CAAC,eAAe,KAAK,CAAC,gBAAgB,IAAI,CAAC,gBAAgB,KAAK,CAAC,QAAQ,CAAC,CAAC,cAAc,GAAG,CAAC,oBAAoB,IAAI,CAAC,iBAAiB,IAAI,CAAC,gBAAgB,IAAI,CAAC,YAAY,IAAI,CAAC,6CAA8B,CAAC,SAAS,MAAM"}',
};
const MenuFlyoutSurface = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, ["class", "element"]);
		let { class: className = "" } = $$props;
		let { element = null } = $$props;
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if ($$props.element === void 0 && $$bindings.element && element !== void 0)
			$$bindings.element(element);
		$$result.css.add(css$3);
		return `<div class="menu-flyout-surface-container svelte-1qibxfp"${add_attribute("style", void 0, 0)}><ul${spread(
			[
				{
					class: "menu-flyout " + escape(className, true),
				},
				escape_object($$restProps),
			],
			{ classes: "svelte-1qibxfp" },
		)}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</ul> </div>`;
	},
);
const css$2 = {
	code: ".menu-flyout-wrapper.svelte-as1gqa{display:inline-block;height:auto;position:relative}.menu-flyout-backdrop.svelte-as1gqa{height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.menu-flyout-anchor.svelte-as1gqa{position:absolute;z-index:10000}.menu-flyout-anchor.placement-top.svelte-as1gqa{--fds-menu-flyout-transition-offset:50%;bottom:calc(100% + var(--fds-menu-flyout-offset))}.menu-flyout-anchor.placement-bottom.svelte-as1gqa{top:calc(100% + var(--fds-menu-flyout-offset))}.menu-flyout-anchor.placement-left.svelte-as1gqa{right:calc(100% + var(--fds-menu-flyout-offset))}.menu-flyout-anchor.placement-right.svelte-as1gqa{left:calc(100% + var(--fds-menu-flyout-offset))}.menu-flyout-anchor.placement-bottom.alignment-start.svelte-as1gqa,.menu-flyout-anchor.placement-top.alignment-start.svelte-as1gqa{inset-inline-start:0}.menu-flyout-anchor.placement-bottom.alignment-end.svelte-as1gqa,.menu-flyout-anchor.placement-top.alignment-end.svelte-as1gqa{inset-inline-end:0}.menu-flyout-anchor.placement-bottom.alignment-center.svelte-as1gqa,.menu-flyout-anchor.placement-top.alignment-center.svelte-as1gqa{inset-inline-start:50%;transform:translateX(-50%)}.menu-flyout-anchor.placement-left.alignment-start.svelte-as1gqa,.menu-flyout-anchor.placement-right.alignment-start.svelte-as1gqa{inset-block-start:0}.menu-flyout-anchor.placement-left.alignment-end.svelte-as1gqa,.menu-flyout-anchor.placement-right.alignment-end.svelte-as1gqa{inset-block-end:0}.menu-flyout-anchor.placement-left.alignment-center.svelte-as1gqa,.menu-flyout-anchor.placement-right.alignment-center.svelte-as1gqa{inset-block-start:50%;transform:translateY(-50%)}",
	map: '{"version":3,"file":"MenuFlyoutWrapper.svelte","sources":["MenuFlyoutWrapper.svelte"],"sourcesContent":["<script >import { tabbable } from \\"tabbable\\";\\r\\nimport { createEventDispatcher, setContext } from \\"svelte\\";\\r\\nimport { arrowNavigation, uid } from \\"../internal\\";\\r\\nimport MenuFlyoutSurface from \\"./MenuFlyoutSurface.svelte\\";\\r\\n/** Determines the flyout\'s visibility. */\\r\\nexport let open = false;\\r\\n/** Determines if the flyout can be closed using conventional user interaction. */\\r\\nexport let closable = true;\\r\\n/** Controls if the flyout will be closed when clicking a standard variant item. Only applies if `closable` is set to `true`. */\\r\\nexport let closeOnSelect = true;\\r\\n/** Direction that the flyout will be opened from. */\\r\\nexport let placement = \\"top\\";\\r\\n/** Alignment of the menu along the clickable target\'s given axis. */\\r\\nexport let alignment = \\"center\\";\\r\\n/** Distance of the flyout from the control button in pixels. */\\r\\nexport let offset = 4;\\r\\n/** Specifies a custom class name for the flyout. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the content wrapper element. */\\r\\nexport let wrapperElement = null;\\r\\n/** Obtains a bound DOM reference to the menu\'s positioning anchor element. */\\r\\nexport let anchorElement = null;\\r\\n/** Obtains a bound DOM reference to the inner menu element. */\\r\\nexport let menuElement = null;\\r\\n/** Obtains a bound DOM reference to the menu backdrop, which is present while the menu is `open`. */\\r\\nexport let backdropElement = null;\\r\\nconst dispatch = createEventDispatcher();\\r\\nconst menuId = uid(\\"fds-menu-flyout-anchor-\\");\\r\\nlet menu = null;\\r\\nlet previousFocus = null;\\r\\n$: dispatch(open ? \\"open\\" : \\"close\\");\\r\\n$: if (menu && tabbable(menuElement).length > 0)\\r\\n    tabbable(menuElement)[0].focus();\\r\\nfunction handleEscapeKey({ key }) {\\r\\n    if (key === \\"Escape\\" && closable)\\r\\n        open = false;\\r\\n    previousFocus === null || previousFocus === void 0 ? void 0 : previousFocus.focus();\\r\\n}\\r\\nfunction toggleFlyout() {\\r\\n    previousFocus = document.activeElement;\\r\\n    open = !open;\\r\\n}\\r\\nfunction closeFlyout() {\\r\\n    if (closable)\\r\\n        open = false;\\r\\n}\\r\\nsetContext(\\"closeFlyout\\", event => {\\r\\n    dispatch(\\"select\\");\\r\\n    if (closeOnSelect && closable) {\\r\\n        event.stopPropagation();\\r\\n        open = false;\\r\\n    }\\r\\n});\\r\\n</script>\\n\\n<svelte:window on:keydown={handleEscapeKey} />\\n\\n<div\\n\\tclass=\\"menu-flyout-wrapper {className}\\"\\n\\taria-expanded={open}\\n\\taria-haspopup={open}\\n\\taria-controls={menuId}\\n\\ton:click={toggleFlyout}\\n\\tbind:this={wrapperElement}\\n>\\n\\t<slot />\\n\\t{#if open}\\n\\t\\t<div\\n\\t\\t\\tid={menuId}\\n\\t\\t\\tclass=\\"menu-flyout-anchor placement-{placement} alignment-{alignment}\\"\\n\\t\\t\\tstyle=\\"--fds-menu-flyout-offset: {offset}px;\\"\\n\\t\\t\\ttabindex=\\"-1\\"\\n\\t\\t\\tbind:this={anchorElement}\\n\\t\\t\\tuse:arrowNavigation={{ preventTab: true }}\\n\\t\\t\\ton:click={e => e.stopPropagation()}\\n\\t\\t>\\n\\t\\t\\t<MenuFlyoutSurface bind:element={menuElement} bind:this={menu} {...$$restProps}>\\n\\t\\t\\t\\t<slot name=\\"flyout\\" />\\n\\t\\t\\t</MenuFlyoutSurface>\\n\\t\\t</div>\\n\\t\\t<div\\n\\t\\t\\tclass=\\"menu-flyout-backdrop\\"\\n\\t\\t\\tbind:this={backdropElement}\\n\\t\\t\\ton:click={e => e.stopPropagation()}\\n\\t\\t\\ton:mousedown={closeFlyout}\\n\\t\\t/>\\n\\t{/if}\\n</div>\\n\\n<style >.menu-flyout-wrapper{display:inline-block;height:auto;position:relative}.menu-flyout-backdrop{height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.menu-flyout-anchor{position:absolute;z-index:10000}.menu-flyout-anchor.placement-top{--fds-menu-flyout-transition-offset:50%;bottom:calc(100% + var(--fds-menu-flyout-offset))}.menu-flyout-anchor.placement-bottom{top:calc(100% + var(--fds-menu-flyout-offset))}.menu-flyout-anchor.placement-left{right:calc(100% + var(--fds-menu-flyout-offset))}.menu-flyout-anchor.placement-right{left:calc(100% + var(--fds-menu-flyout-offset))}.menu-flyout-anchor.placement-bottom.alignment-start,.menu-flyout-anchor.placement-top.alignment-start{inset-inline-start:0}.menu-flyout-anchor.placement-bottom.alignment-end,.menu-flyout-anchor.placement-top.alignment-end{inset-inline-end:0}.menu-flyout-anchor.placement-bottom.alignment-center,.menu-flyout-anchor.placement-top.alignment-center{inset-inline-start:50%;transform:translateX(-50%)}.menu-flyout-anchor.placement-left.alignment-start,.menu-flyout-anchor.placement-right.alignment-start{inset-block-start:0}.menu-flyout-anchor.placement-left.alignment-end,.menu-flyout-anchor.placement-right.alignment-end{inset-block-end:0}.menu-flyout-anchor.placement-left.alignment-center,.menu-flyout-anchor.placement-right.alignment-center{inset-block-start:50%;transform:translateY(-50%)}</style>\\n"],"names":[],"mappings":"AA0FQ,kCAAoB,CAAC,QAAQ,YAAY,CAAC,OAAO,IAAI,CAAC,SAAS,QAAQ,CAAC,mCAAqB,CAAC,OAAO,IAAI,CAAC,KAAK,CAAC,CAAC,SAAS,KAAK,CAAC,IAAI,CAAC,CAAC,MAAM,IAAI,CAAC,QAAQ,IAAI,CAAC,iCAAmB,CAAC,SAAS,QAAQ,CAAC,QAAQ,KAAK,CAAC,mBAAmB,4BAAc,CAAC,oCAAoC,GAAG,CAAC,OAAO,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,wBAAwB,CAAC,CAAC,CAAC,mBAAmB,+BAAiB,CAAC,IAAI,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,wBAAwB,CAAC,CAAC,CAAC,mBAAmB,6BAAe,CAAC,MAAM,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,wBAAwB,CAAC,CAAC,CAAC,mBAAmB,8BAAgB,CAAC,KAAK,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,wBAAwB,CAAC,CAAC,CAAC,mBAAmB,iBAAiB,8BAAgB,CAAC,mBAAmB,cAAc,8BAAgB,CAAC,mBAAmB,CAAC,CAAC,mBAAmB,iBAAiB,4BAAc,CAAC,mBAAmB,cAAc,4BAAc,CAAC,iBAAiB,CAAC,CAAC,mBAAmB,iBAAiB,+BAAiB,CAAC,mBAAmB,cAAc,+BAAiB,CAAC,mBAAmB,GAAG,CAAC,UAAU,WAAW,IAAI,CAAC,CAAC,mBAAmB,eAAe,8BAAgB,CAAC,mBAAmB,gBAAgB,8BAAgB,CAAC,kBAAkB,CAAC,CAAC,mBAAmB,eAAe,4BAAc,CAAC,mBAAmB,gBAAgB,4BAAc,CAAC,gBAAgB,CAAC,CAAC,mBAAmB,eAAe,+BAAiB,CAAC,mBAAmB,gBAAgB,+BAAiB,CAAC,kBAAkB,GAAG,CAAC,UAAU,WAAW,IAAI,CAAC"}',
};
const MenuFlyoutWrapper = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"open",
			"closable",
			"closeOnSelect",
			"placement",
			"alignment",
			"offset",
			"class",
			"wrapperElement",
			"anchorElement",
			"menuElement",
			"backdropElement",
		]);
		let { open = false } = $$props;
		let { closable = true } = $$props;
		let { closeOnSelect = true } = $$props;
		let { placement = "top" } = $$props;
		let { alignment = "center" } = $$props;
		let { offset = 4 } = $$props;
		let { class: className = "" } = $$props;
		let { wrapperElement = null } = $$props;
		let { anchorElement = null } = $$props;
		let { menuElement = null } = $$props;
		let { backdropElement = null } = $$props;
		const dispatch = createEventDispatcher();
		const menuId = uid("fds-menu-flyout-anchor-");
		let menu = null;
		setContext("closeFlyout", event => {
			dispatch("select");
			if (closeOnSelect && closable) {
				event.stopPropagation();
				open = false;
			}
		});
		if ($$props.open === void 0 && $$bindings.open && open !== void 0)
			$$bindings.open(open);
		if (
			$$props.closable === void 0 &&
			$$bindings.closable &&
			closable !== void 0
		)
			$$bindings.closable(closable);
		if (
			$$props.closeOnSelect === void 0 &&
			$$bindings.closeOnSelect &&
			closeOnSelect !== void 0
		)
			$$bindings.closeOnSelect(closeOnSelect);
		if (
			$$props.placement === void 0 &&
			$$bindings.placement &&
			placement !== void 0
		)
			$$bindings.placement(placement);
		if (
			$$props.alignment === void 0 &&
			$$bindings.alignment &&
			alignment !== void 0
		)
			$$bindings.alignment(alignment);
		if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
			$$bindings.offset(offset);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if (
			$$props.wrapperElement === void 0 &&
			$$bindings.wrapperElement &&
			wrapperElement !== void 0
		)
			$$bindings.wrapperElement(wrapperElement);
		if (
			$$props.anchorElement === void 0 &&
			$$bindings.anchorElement &&
			anchorElement !== void 0
		)
			$$bindings.anchorElement(anchorElement);
		if (
			$$props.menuElement === void 0 &&
			$$bindings.menuElement &&
			menuElement !== void 0
		)
			$$bindings.menuElement(menuElement);
		if (
			$$props.backdropElement === void 0 &&
			$$bindings.backdropElement &&
			backdropElement !== void 0
		)
			$$bindings.backdropElement(backdropElement);
		$$result.css.add(css$2);
		let $$settled;
		let $$rendered;
		let previous_head = $$result.head;
		do {
			$$settled = true;
			$$result.head = previous_head;
			{
				dispatch(open ? "open" : "close");
			}
			{
				if (menu && tabbable(menuElement).length > 0)
					tabbable(menuElement)[0].focus();
			}
			$$rendered = ` <div class="${"menu-flyout-wrapper " + escape(className, true) + " svelte-as1gqa"}"${add_attribute("aria-expanded", open, 0)}${add_attribute("aria-haspopup", open, 0)}${add_attribute("aria-controls", menuId, 0)}${add_attribute("this", wrapperElement, 0)}>${slots.default ? slots.default({}) : ``} ${
				open
					? `<div${add_attribute("id", menuId, 0)} class="${"menu-flyout-anchor placement-" + escape(placement, true) + " alignment-" + escape(alignment, true) + " svelte-as1gqa"}" style="${"--fds-menu-flyout-offset: " + escape(offset, true) + "px;"}" tabindex="-1"${add_attribute("this", anchorElement, 0)}>${validate_component(
							MenuFlyoutSurface,
							"MenuFlyoutSurface",
						).$$render(
							$$result,
							Object.assign(
								{},
								$$restProps,
								{ element: menuElement },
								{ this: menu },
							),
							{
								element: $$value => {
									menuElement = $$value;
									$$settled = false;
								},
								this: $$value => {
									menu = $$value;
									$$settled = false;
								},
							},
							{
								default: () => {
									return `${slots.flyout ? slots.flyout({}) : ``}`;
								},
							},
						)}</div> <div class="menu-flyout-backdrop svelte-as1gqa"${add_attribute("this", backdropElement, 0)}></div>`
					: ``
			} </div>`;
		} while (!$$settled);
		return $$rendered;
	},
);
const css$1 = {
	code: '.menu-flyout-item.svelte-s7v067.svelte-s7v067{align-items:center;background-color:var(--fds-subtle-fill-transparent);block-size:28px;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);cursor:default;display:flex;flex:0 0 auto;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;inline-size:calc(100% - 8px);line-height:20px;margin:2px 4px;outline:none;padding-inline:12px;position:relative;text-decoration:none;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.menu-flyout-item.svelte-s7v067.svelte-s7v067:before{background-color:var(--fds-accent-default);block-size:0;border-radius:3px;content:"";inline-size:3px;inset-inline-start:0;opacity:0;position:absolute;transition:transform var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing)}.menu-flyout-item.svelte-s7v067.svelte-s7v067:focus-visible{box-shadow:var(--fds-focus-stroke)}.menu-flyout-item.selected.svelte-s7v067.svelte-s7v067,.menu-flyout-item.svelte-s7v067.svelte-s7v067:hover,.menu-flyout-item[aria-expanded=true].svelte-s7v067.svelte-s7v067{background-color:var(--fds-subtle-fill-secondary)}.menu-flyout-item.checked.svelte-s7v067 .menu-flyout-item-bullet,.menu-flyout-item.checked.svelte-s7v067 .menu-flyout-item-checkmark{visibility:visible}.menu-flyout-item.svelte-s7v067.svelte-s7v067:active{background-color:var(--fds-subtle-fill-tertiary)}.menu-flyout-item.svelte-s7v067.svelte-s7v067:active:before{transform:scaleY(.625)}.menu-flyout-item.disabled.svelte-s7v067.svelte-s7v067{background-color:var(--fds-subtle-fill-transparent);color:var(--fds-text-disabled);pointer-events:none}.menu-flyout-item.disabled.selected.svelte-s7v067.svelte-s7v067{background-color:var(--fds-subtle-fill-secondary)}.menu-flyout-item.disabled.selected.svelte-s7v067.svelte-s7v067:before{background-color:var(--fds-accent-disabled)}.menu-flyout-item.disabled.svelte-s7v067>.menu-flyout-item-hint{color:var(--fds-text-disabled)}.menu-flyout-item.selected.svelte-s7v067.svelte-s7v067:before{block-size:16px;opacity:1}.menu-flyout-item.indented.svelte-s7v067.svelte-s7v067{-webkit-padding-start:40px;padding-inline-start:40px}.menu-flyout-item-bullet.svelte-s7v067.svelte-s7v067,.menu-flyout-item-checkmark.svelte-s7v067.svelte-s7v067{visibility:hidden}.menu-flyout-item.svelte-s7v067 .menu-flyout-item-arrow.svelte-s7v067{-webkit-margin-end:0;-webkit-margin-start:auto;-webkit-padding-start:24px;block-size:12px;box-sizing:content-box;inline-size:12px;margin-inline-end:0;margin-inline-start:auto;padding-inline-start:24px}.menu-flyout-item-checkmark.svelte-s7v067.svelte-s7v067{-webkit-margin-start:2px;-webkit-margin-end:14px;align-items:center;block-size:12px;display:flex;inline-size:12px;justify-content:center;margin-inline-end:14px;margin-inline-start:2px}.menu-flyout-item-bullet.svelte-s7v067.svelte-s7v067{-webkit-margin-start:6px;-webkit-margin-end:18px;background-color:currentColor;block-size:4px;border-radius:4px;inline-size:4px;margin-inline-end:18px;margin-inline-start:6px}.menu-flyout-item-input-label.svelte-s7v067.svelte-s7v067{display:contents}.menu-flyout-item.svelte-s7v067>svg{fill:currentColor;-webkit-margin-end:12px;block-size:auto;inline-size:16px;margin-inline-end:12px}.menu-flyout-item.svelte-s7v067>.menu-flyout-item-hint{color:var(--fds-text-secondary);flex:1 1 auto;overflow:hidden;padding-left:24px;text-align:end;text-overflow:ellipsis}.menu-flyout-submenu-anchor.svelte-s7v067.svelte-s7v067{--fds-menu-flyout-transition-offset:-50%;inset-block-start:0;inset-inline-start:100%;position:absolute;z-index:10000}',
	map: '{"version":3,"file":"MenuFlyoutItem.svelte","sources":["MenuFlyoutItem.svelte"],"sourcesContent":["<script >import { createEventDispatcher, getContext } from \\"svelte\\";\\r\\nimport { get_current_component } from \\"svelte/internal\\";\\r\\nimport { arrowNavigation, uid, createEventForwarder } from \\"../internal\\";\\r\\nimport { tabbable } from \\"tabbable\\";\\r\\nimport MenuFlyoutSurface from \\"../MenuFlyout/MenuFlyoutSurface.svelte\\";\\r\\nimport TextBlock from \\"../TextBlock/TextBlock.svelte\\";\\r\\n/** Specifies an input type for the item. */\\r\\nexport let variant = \\"standard\\";\\r\\n/** Marks the item as having a cascading submenu attached to it, and makes the `flyout` slot available. */\\r\\nexport let cascading = false;\\r\\n/** Secondary hint text displayed to the right of the item. Useful for displaying keyboard accelerators. */\\r\\nexport let hint = undefined;\\r\\n/** Specifies if the item should be styled as selected by the user. */\\r\\nexport let selected = false;\\r\\n/** Marks a radio or toggle variant item as checked. */\\r\\nexport let checked = false;\\r\\n/** Indents the left padding of the item making it\'s text inline with the added icons of other items. */\\r\\nexport let indented = false;\\r\\n/** Specifies a radio input group that the item should be bound to. Only valid if `variant` is set to `radio`. */\\r\\nexport let group = [];\\r\\n/** Specifies a form input value attribute if `variant` is set to `toggle` or `radio`. */\\r\\nexport let value = undefined;\\r\\n/** Controls whether the item is intended for user interaction, and styles it accordingly. */\\r\\nexport let disabled = false;\\r\\n/** The current visibility state of a cascading submenu. Only valid is `cascading` is true. */\\r\\nexport let open = false;\\r\\n/** INTERNAL USE ONLY: Communicates to the wrapped <svelte:self /> instance that the item variant should not be recursively rendered. */\\r\\nexport let __depth = false;\\r\\n/** Specifies a custom class name for the item. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the item\'s main container. */\\r\\nexport let element = null;\\r\\n/** Obtains a bound DOM reference to the item\'s input element, which is present if `variant` is set to `toggle` or `radio`. */\\r\\nexport let inputElement = null;\\r\\n/** Obtains a bound DOM reference to the item\'s outer label, which is present if `variant` is set to `toggle` or `radio`. */\\r\\nexport let inputLabelElement = null;\\r\\n/** Obtains a bound DOM reference to the item\'s submenu anchor element, which is present if the item is cascading and the submenu is visible. */\\r\\nexport let subMenuAnchorElement = null;\\r\\n/** Obtains a bound DOM reference to the inner submenumenu element, which is present if the item is cascading and the submenu is visible. */\\r\\nexport let subMenuElement = null;\\r\\nconst forwardEvents = createEventForwarder(get_current_component());\\r\\nconst dispatch = createEventDispatcher();\\r\\nconst closeFlyout = getContext(\\"closeFlyout\\");\\r\\nconst menuId = uid(\\"fds-menu-flyout-submenu-\\");\\r\\nlet menu = null;\\r\\nlet subMenuQueue = {\\r\\n    open: false,\\r\\n    close: false\\r\\n};\\r\\n$: dispatch(open ? \\"open\\" : \\"close\\");\\r\\n$: if (open && menu && tabbable(subMenuElement).length > 0)\\r\\n    tabbable(subMenuElement)[0].focus();\\r\\nfunction close(event) {\\r\\n    setTimeout(() => {\\r\\n        if (!cascading && closeFlyout)\\r\\n            closeFlyout(event);\\r\\n    });\\r\\n}\\r\\nfunction handleKeyDown(event) {\\r\\n    const { key, target } = event;\\r\\n    if (key === \\"Enter\\" || key === \\" \\") {\\r\\n        event.preventDefault();\\r\\n        target.click();\\r\\n    }\\r\\n    if (cascading) {\\r\\n        if (key === \\"ArrowRight\\") {\\r\\n            event.stopPropagation();\\r\\n            open = true;\\r\\n        }\\r\\n        else if (open && key === \\"ArrowLeft\\") {\\r\\n            event.stopPropagation();\\r\\n            open = false;\\r\\n            element.focus();\\r\\n        }\\r\\n    }\\r\\n}\\r\\nfunction handleMouseEnter() {\\r\\n    subMenuQueue.close = false;\\r\\n    subMenuQueue.open = true;\\r\\n    setTimeout(() => {\\r\\n        if (subMenuQueue.open)\\r\\n            open = true;\\r\\n    }, 500);\\r\\n}\\r\\nfunction handleMouseLeave() {\\r\\n    subMenuQueue.close = true;\\r\\n    subMenuQueue.open = false;\\r\\n    setTimeout(() => {\\r\\n        if (subMenuQueue.close)\\r\\n            open = false;\\r\\n    }, 500);\\r\\n}\\r\\n</script>\\n\\n{#if variant === \\"standard\\" || __depth}\\n\\t<li\\n\\t\\ttabindex={disabled ? -1 : 0}\\n\\t\\trole=\\"menuitem\\"\\n\\t\\taria-expanded={$$slots.flyout && !disabled && open}\\n\\t\\taria-haspopup={$$slots.flyout && !disabled && open}\\n\\t\\taria-controls={$$slots.flyout && !disabled && menuId}\\n\\t\\taria-selected={selected || checked}\\n\\t\\tclass=\\"menu-flyout-item type-{variant} {className}\\"\\n\\t\\tclass:cascading\\n\\t\\tclass:selected\\n\\t\\tclass:checked\\n\\t\\tclass:disabled\\n\\t\\tclass:indented\\n\\t\\tuse:forwardEvents\\n\\t\\tbind:this={element}\\n\\t\\ton:click={close}\\n\\t\\ton:mouseenter={handleMouseEnter}\\n\\t\\ton:mouseleave={handleMouseLeave}\\n\\t\\ton:keydown={handleKeyDown}\\n\\t\\t{...$$restProps}\\n\\t>\\n\\t\\t<slot name=\\"icon\\" />\\n\\t\\t<slot />\\n\\t\\t{#if hint}\\n\\t\\t\\t<TextBlock class=\\"menu-flyout-item-hint\\" variant=\\"caption\\">{hint}</TextBlock>\\n\\t\\t{/if}\\n\\t\\t{#if cascading}\\n\\t\\t\\t<svg\\n\\t\\t\\t\\tclass=\\"menu-flyout-item-arrow\\"\\n\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\twidth=\\"12\\"\\n\\t\\t\\t\\theight=\\"12\\"\\n\\t\\t\\t\\tviewBox=\\"0 0 12 12\\"\\n\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\td=\\"M4.64645 2.14645C4.45118 2.34171 4.45118 2.65829 4.64645 2.85355L7.79289 6L4.64645 9.14645C4.45118 9.34171 4.45118 9.65829 4.64645 9.85355C4.84171 10.0488 5.15829 10.0488 5.35355 9.85355L8.85355 6.35355C9.04882 6.15829 9.04882 5.84171 8.85355 5.64645L5.35355 2.14645C5.15829 1.95118 4.84171 1.95118 4.64645 2.14645Z\\"\\n\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</svg>\\n\\t\\t\\t{#if open && $$slots.flyout && !disabled}\\n\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\tuse:arrowNavigation={{ preventTab: true, stopPropagation: true }}\\n\\t\\t\\t\\t\\tbind:this={subMenuAnchorElement}\\n\\t\\t\\t\\t\\tid={menuId}\\n\\t\\t\\t\\t\\tclass=\\"menu-flyout-submenu-anchor\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<MenuFlyoutSurface bind:element={subMenuElement} bind:this={menu}>\\n\\t\\t\\t\\t\\t\\t<slot name=\\"flyout\\" />\\n\\t\\t\\t\\t\\t</MenuFlyoutSurface>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t{/if}\\n\\t</li>\\n{:else if variant === \\"radio\\" || variant === \\"toggle\\"}\\n\\t<!-- svelte-ignore a11y-label-has-associated-control -->\\n\\t<label bind:this={inputLabelElement} class=\\"menu-flyout-item-input-label\\">\\n\\t\\t<svelte:self\\n\\t\\t\\tchecked={checked || group === value}\\n\\t\\t\\t{selected}\\n\\t\\t\\t{variant}\\n\\t\\t\\t{indented}\\n\\t\\t\\t{group}\\n\\t\\t\\t{disabled}\\n\\t\\t\\t__depth\\n\\t\\t>\\n\\t\\t\\t<slot name=\\"icon\\" slot=\\"icon\\" />\\n\\t\\t\\t<div class=\\"menu-flyout-item-{variant === \'radio\' ? \'bullet\' : \'checkmark\'}\\">\\n\\t\\t\\t\\t{#if variant === \\"toggle\\"}\\n\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\twidth=\\"12\\"\\n\\t\\t\\t\\t\\t\\theight=\\"12\\"\\n\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 12 12\\"\\n\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\td=\\"M9.85355 3.14645C10.0488 3.34171 10.0488 3.65829 9.85355 3.85355L5.35355 8.35355C5.15829 8.54882 4.84171 8.54882 4.64645 8.35355L2.64645 6.35355C2.45118 6.15829 2.45118 5.84171 2.64645 5.64645C2.84171 5.45118 3.15829 5.45118 3.35355 5.64645L5 7.29289L9.14645 3.14645C9.34171 2.95118 9.65829 2.95118 9.85355 3.14645Z\\"\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t\\t<slot />\\n\\t\\t</svelte:self>\\n\\n\\t\\t{#if variant === \\"radio\\"}\\n\\t\\t\\t<input\\n\\t\\t\\t\\ttype=\\"radio\\"\\n\\t\\t\\t\\thidden\\n\\t\\t\\t\\ton:change\\n\\t\\t\\t\\ton:input\\n\\t\\t\\t\\ton:beforeinput\\n\\t\\t\\t\\tbind:group\\n\\t\\t\\t\\tbind:this={inputElement}\\n\\t\\t\\t\\t{value}\\n\\t\\t\\t\\t{checked}\\n\\t\\t\\t\\t{disabled}\\n\\t\\t\\t/>\\n\\t\\t{:else}\\n\\t\\t\\t<input\\n\\t\\t\\t\\ttype=\\"checkbox\\"\\n\\t\\t\\t\\thidden\\n\\t\\t\\t\\ton:change\\n\\t\\t\\t\\ton:input\\n\\t\\t\\t\\ton:beforeinput\\n\\t\\t\\t\\tbind:this={inputElement}\\n\\t\\t\\t\\tbind:group\\n\\t\\t\\t\\tbind:checked\\n\\t\\t\\t\\tbind:value\\n\\t\\t\\t\\t{disabled}\\n\\t\\t\\t/>\\n\\t\\t{/if}\\n\\t</label>\\n{/if}\\n\\n<style >.menu-flyout-item{align-items:center;background-color:var(--fds-subtle-fill-transparent);block-size:28px;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);cursor:default;display:flex;flex:0 0 auto;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;inline-size:calc(100% - 8px);line-height:20px;margin:2px 4px;outline:none;padding-inline:12px;position:relative;text-decoration:none;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.menu-flyout-item:before{background-color:var(--fds-accent-default);block-size:0;border-radius:3px;content:\\"\\";inline-size:3px;inset-inline-start:0;opacity:0;position:absolute;transition:transform var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing)}.menu-flyout-item:focus-visible{box-shadow:var(--fds-focus-stroke)}.menu-flyout-item.selected,.menu-flyout-item:hover,.menu-flyout-item[aria-expanded=true]{background-color:var(--fds-subtle-fill-secondary)}.menu-flyout-item.checked :global(.menu-flyout-item-bullet),.menu-flyout-item.checked :global(.menu-flyout-item-checkmark){visibility:visible}.menu-flyout-item:active{background-color:var(--fds-subtle-fill-tertiary)}.menu-flyout-item:active:before{transform:scaleY(.625)}.menu-flyout-item.disabled{background-color:var(--fds-subtle-fill-transparent);color:var(--fds-text-disabled);pointer-events:none}.menu-flyout-item.disabled.selected{background-color:var(--fds-subtle-fill-secondary)}.menu-flyout-item.disabled.selected:before{background-color:var(--fds-accent-disabled)}.menu-flyout-item.disabled>:global(.menu-flyout-item-hint){color:var(--fds-text-disabled)}.menu-flyout-item.selected:before{block-size:16px;opacity:1}.menu-flyout-item.indented{-webkit-padding-start:40px;padding-inline-start:40px}.menu-flyout-item-bullet,.menu-flyout-item-checkmark{visibility:hidden}.menu-flyout-item .menu-flyout-item-arrow{-webkit-margin-end:0;-webkit-margin-start:auto;-webkit-padding-start:24px;block-size:12px;box-sizing:content-box;inline-size:12px;margin-inline-end:0;margin-inline-start:auto;padding-inline-start:24px}.menu-flyout-item-checkmark{-webkit-margin-start:2px;-webkit-margin-end:14px;align-items:center;block-size:12px;display:flex;inline-size:12px;justify-content:center;margin-inline-end:14px;margin-inline-start:2px}.menu-flyout-item-bullet{-webkit-margin-start:6px;-webkit-margin-end:18px;background-color:currentColor;block-size:4px;border-radius:4px;inline-size:4px;margin-inline-end:18px;margin-inline-start:6px}.menu-flyout-item-input-label{display:contents}.menu-flyout-item>:global(svg){fill:currentColor;-webkit-margin-end:12px;block-size:auto;inline-size:16px;margin-inline-end:12px}.menu-flyout-item>:global(.menu-flyout-item-hint){color:var(--fds-text-secondary);flex:1 1 auto;overflow:hidden;padding-left:24px;text-align:end;text-overflow:ellipsis}.menu-flyout-submenu-anchor{--fds-menu-flyout-transition-offset:-50%;inset-block-start:0;inset-inline-start:100%;position:absolute;z-index:10000}</style>\\n"],"names":[],"mappings":"AAoNQ,6CAAiB,CAAC,YAAY,MAAM,CAAC,iBAAiB,IAAI,6BAA6B,CAAC,CAAC,WAAW,IAAI,CAAC,cAAc,IAAI,2BAA2B,CAAC,CAAC,WAAW,UAAU,CAAC,MAAM,IAAI,kBAAkB,CAAC,CAAC,OAAO,OAAO,CAAC,QAAQ,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,YAAY,IAAI,sBAAsB,CAAC,CAAC,UAAU,IAAI,oBAAoB,CAAC,CAAC,YAAY,GAAG,CAAC,YAAY,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,IAAI,CAAC,OAAO,GAAG,CAAC,GAAG,CAAC,QAAQ,IAAI,CAAC,eAAe,IAAI,CAAC,SAAS,QAAQ,CAAC,gBAAgB,IAAI,CAAC,cAAc,QAAQ,CAAC,oBAAoB,IAAI,CAAC,iBAAiB,IAAI,CAAC,gBAAgB,IAAI,CAAC,YAAY,IAAI,CAAC,YAAY,MAAM,CAAC,6CAAiB,OAAO,CAAC,iBAAiB,IAAI,oBAAoB,CAAC,CAAC,WAAW,CAAC,CAAC,cAAc,GAAG,CAAC,QAAQ,EAAE,CAAC,YAAY,GAAG,CAAC,mBAAmB,CAAC,CAAC,QAAQ,CAAC,CAAC,SAAS,QAAQ,CAAC,WAAW,SAAS,CAAC,IAAI,2BAA2B,CAAC,CAAC,IAAI,qCAAqC,CAAC,CAAC,6CAAiB,cAAc,CAAC,WAAW,IAAI,kBAAkB,CAAC,CAAC,iBAAiB,qCAAS,CAAC,6CAAiB,MAAM,CAAC,iBAAiB,CAAC,aAAa,CAAC,IAAI,6BAAC,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,iBAAiB,sBAAQ,CAAS,wBAAyB,CAAC,iBAAiB,sBAAQ,CAAS,2BAA4B,CAAC,WAAW,OAAO,CAAC,6CAAiB,OAAO,CAAC,iBAAiB,IAAI,0BAA0B,CAAC,CAAC,6CAAiB,OAAO,OAAO,CAAC,UAAU,OAAO,IAAI,CAAC,CAAC,iBAAiB,qCAAS,CAAC,iBAAiB,IAAI,6BAA6B,CAAC,CAAC,MAAM,IAAI,mBAAmB,CAAC,CAAC,eAAe,IAAI,CAAC,iBAAiB,SAAS,qCAAS,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,iBAAiB,SAAS,qCAAS,OAAO,CAAC,iBAAiB,IAAI,qBAAqB,CAAC,CAAC,iBAAiB,uBAAS,CAAS,sBAAuB,CAAC,MAAM,IAAI,mBAAmB,CAAC,CAAC,iBAAiB,qCAAS,OAAO,CAAC,WAAW,IAAI,CAAC,QAAQ,CAAC,CAAC,iBAAiB,qCAAS,CAAC,sBAAsB,IAAI,CAAC,qBAAqB,IAAI,CAAC,oDAAwB,CAAC,uDAA2B,CAAC,WAAW,MAAM,CAAC,+BAAiB,CAAC,qCAAuB,CAAC,mBAAmB,CAAC,CAAC,qBAAqB,IAAI,CAAC,sBAAsB,IAAI,CAAC,WAAW,IAAI,CAAC,WAAW,WAAW,CAAC,YAAY,IAAI,CAAC,kBAAkB,CAAC,CAAC,oBAAoB,IAAI,CAAC,qBAAqB,IAAI,CAAC,uDAA2B,CAAC,qBAAqB,GAAG,CAAC,mBAAmB,IAAI,CAAC,YAAY,MAAM,CAAC,WAAW,IAAI,CAAC,QAAQ,IAAI,CAAC,YAAY,IAAI,CAAC,gBAAgB,MAAM,CAAC,kBAAkB,IAAI,CAAC,oBAAoB,GAAG,CAAC,oDAAwB,CAAC,qBAAqB,GAAG,CAAC,mBAAmB,IAAI,CAAC,iBAAiB,YAAY,CAAC,WAAW,GAAG,CAAC,cAAc,GAAG,CAAC,YAAY,GAAG,CAAC,kBAAkB,IAAI,CAAC,oBAAoB,GAAG,CAAC,yDAA6B,CAAC,QAAQ,QAAQ,CAAC,+BAAiB,CAAS,GAAI,CAAC,KAAK,YAAY,CAAC,mBAAmB,IAAI,CAAC,WAAW,IAAI,CAAC,YAAY,IAAI,CAAC,kBAAkB,IAAI,CAAC,+BAAiB,CAAS,sBAAuB,CAAC,MAAM,IAAI,oBAAoB,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,SAAS,MAAM,CAAC,aAAa,IAAI,CAAC,WAAW,GAAG,CAAC,cAAc,QAAQ,CAAC,uDAA2B,CAAC,oCAAoC,IAAI,CAAC,kBAAkB,CAAC,CAAC,mBAAmB,IAAI,CAAC,SAAS,QAAQ,CAAC,QAAQ,KAAK"}',
};
const MenuFlyoutItem = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"variant",
			"cascading",
			"hint",
			"selected",
			"checked",
			"indented",
			"group",
			"value",
			"disabled",
			"open",
			"__depth",
			"class",
			"element",
			"inputElement",
			"inputLabelElement",
			"subMenuAnchorElement",
			"subMenuElement",
		]);
		let $$slots = compute_slots(slots);
		let { variant = "standard" } = $$props;
		let { cascading = false } = $$props;
		let { hint = void 0 } = $$props;
		let { selected = false } = $$props;
		let { checked = false } = $$props;
		let { indented = false } = $$props;
		let { group = [] } = $$props;
		let { value = void 0 } = $$props;
		let { disabled = false } = $$props;
		let { open = false } = $$props;
		let { __depth = false } = $$props;
		let { class: className = "" } = $$props;
		let { element = null } = $$props;
		let { inputElement = null } = $$props;
		let { inputLabelElement = null } = $$props;
		let { subMenuAnchorElement = null } = $$props;
		let { subMenuElement = null } = $$props;
		createEventForwarder(get_current_component());
		const dispatch = createEventDispatcher();
		getContext("closeFlyout");
		const menuId = uid("fds-menu-flyout-submenu-");
		let menu = null;
		if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
			$$bindings.variant(variant);
		if (
			$$props.cascading === void 0 &&
			$$bindings.cascading &&
			cascading !== void 0
		)
			$$bindings.cascading(cascading);
		if ($$props.hint === void 0 && $$bindings.hint && hint !== void 0)
			$$bindings.hint(hint);
		if (
			$$props.selected === void 0 &&
			$$bindings.selected &&
			selected !== void 0
		)
			$$bindings.selected(selected);
		if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
			$$bindings.checked(checked);
		if (
			$$props.indented === void 0 &&
			$$bindings.indented &&
			indented !== void 0
		)
			$$bindings.indented(indented);
		if ($$props.group === void 0 && $$bindings.group && group !== void 0)
			$$bindings.group(group);
		if ($$props.value === void 0 && $$bindings.value && value !== void 0)
			$$bindings.value(value);
		if (
			$$props.disabled === void 0 &&
			$$bindings.disabled &&
			disabled !== void 0
		)
			$$bindings.disabled(disabled);
		if ($$props.open === void 0 && $$bindings.open && open !== void 0)
			$$bindings.open(open);
		if ($$props.__depth === void 0 && $$bindings.__depth && __depth !== void 0)
			$$bindings.__depth(__depth);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if ($$props.element === void 0 && $$bindings.element && element !== void 0)
			$$bindings.element(element);
		if (
			$$props.inputElement === void 0 &&
			$$bindings.inputElement &&
			inputElement !== void 0
		)
			$$bindings.inputElement(inputElement);
		if (
			$$props.inputLabelElement === void 0 &&
			$$bindings.inputLabelElement &&
			inputLabelElement !== void 0
		)
			$$bindings.inputLabelElement(inputLabelElement);
		if (
			$$props.subMenuAnchorElement === void 0 &&
			$$bindings.subMenuAnchorElement &&
			subMenuAnchorElement !== void 0
		)
			$$bindings.subMenuAnchorElement(subMenuAnchorElement);
		if (
			$$props.subMenuElement === void 0 &&
			$$bindings.subMenuElement &&
			subMenuElement !== void 0
		)
			$$bindings.subMenuElement(subMenuElement);
		$$result.css.add(css$1);
		let $$settled;
		let $$rendered;
		let previous_head = $$result.head;
		do {
			$$settled = true;
			$$result.head = previous_head;
			{
				dispatch(open ? "open" : "close");
			}
			{
				if (open && menu && tabbable(subMenuElement).length > 0)
					tabbable(subMenuElement)[0].focus();
			}
			$$rendered = `${
				variant === "standard" || __depth
					? `<li${spread(
							[
								{
									tabindex: escape_attribute_value(disabled ? -1 : 0),
								},
								{ role: "menuitem" },
								{
									"aria-expanded": escape_attribute_value(
										$$slots.flyout && !disabled && open,
									),
								},
								{
									"aria-haspopup": escape_attribute_value(
										$$slots.flyout && !disabled && open,
									),
								},
								{
									"aria-controls": escape_attribute_value(
										$$slots.flyout && !disabled && menuId,
									),
								},
								{
									"aria-selected": escape_attribute_value(selected || checked),
								},
								{
									class:
										"menu-flyout-item type-" +
										escape(variant, true) +
										" " +
										escape(className, true),
								},
								escape_object($$restProps),
							],
							{
								classes:
									(cascading ? "cascading" : "") +
									" " +
									(selected ? "selected" : "") +
									" " +
									(checked ? "checked" : "") +
									" " +
									(disabled ? "disabled" : "") +
									" " +
									(indented ? "indented" : "") +
									" svelte-s7v067",
							},
						)}${add_attribute("this", element, 0)}>${slots.icon ? slots.icon({}) : ``} ${slots.default ? slots.default({}) : ``} ${
							hint
								? `${validate_component(TextBlock, "TextBlock").$$render(
										$$result,
										{
											class: "menu-flyout-item-hint",
											variant: "caption",
										},
										{},
										{
											default: () => {
												return `${escape(hint)}`;
											},
										},
									)}`
								: ``
						} ${
							cascading
								? `<svg class="menu-flyout-item-arrow svelte-s7v067" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.64645 2.14645C4.45118 2.34171 4.45118 2.65829 4.64645 2.85355L7.79289 6L4.64645 9.14645C4.45118 9.34171 4.45118 9.65829 4.64645 9.85355C4.84171 10.0488 5.15829 10.0488 5.35355 9.85355L8.85355 6.35355C9.04882 6.15829 9.04882 5.84171 8.85355 5.64645L5.35355 2.14645C5.15829 1.95118 4.84171 1.95118 4.64645 2.14645Z" fill="currentColor"></path></svg> ${
										open && $$slots.flyout && !disabled
											? `<div${add_attribute("id", menuId, 0)} class="menu-flyout-submenu-anchor svelte-s7v067"${add_attribute("this", subMenuAnchorElement, 0)}>${validate_component(
													MenuFlyoutSurface,
													"MenuFlyoutSurface",
												).$$render(
													$$result,
													{ element: subMenuElement, this: menu },
													{
														element: $$value => {
															subMenuElement = $$value;
															$$settled = false;
														},
														this: $$value => {
															menu = $$value;
															$$settled = false;
														},
													},
													{
														default: () => {
															return `${slots.flyout ? slots.flyout({}) : ``}`;
														},
													},
												)}</div>`
											: ``
									}`
								: ``
						}</li>`
					: `${
							variant === "radio" || variant === "toggle"
								? ` <label class="menu-flyout-item-input-label svelte-s7v067"${add_attribute("this", inputLabelElement, 0)}>${validate_component(
										MenuFlyoutItem,
										"svelte:self",
									).$$render(
										$$result,
										{
											checked: checked || group === value,
											selected,
											variant,
											indented,
											group,
											disabled,
											__depth: true,
										},
										{},
										{
											icon: () => {
												return `${slots.icon ? slots.icon({ slot: "icon" }) : ``}`;
											},
											default: () => {
												return `<div class="${"menu-flyout-item-" + escape(variant === "radio" ? "bullet" : "checkmark", true) + " svelte-s7v067"}">${variant === "toggle" ? `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.85355 3.14645C10.0488 3.34171 10.0488 3.65829 9.85355 3.85355L5.35355 8.35355C5.15829 8.54882 4.84171 8.54882 4.64645 8.35355L2.64645 6.35355C2.45118 6.15829 2.45118 5.84171 2.64645 5.64645C2.84171 5.45118 3.15829 5.45118 3.35355 5.64645L5 7.29289L9.14645 3.14645C9.34171 2.95118 9.65829 2.95118 9.85355 3.14645Z" fill="currentColor"></path></svg>` : ``}</div> ${slots.default ? slots.default({}) : ``}`;
											},
										},
									)} ${variant === "radio" ? `<input type="radio" hidden${add_attribute("value", value, 0)} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}${value === group ? add_attribute("checked", true, 1) : ""}${add_attribute("this", inputElement, 0)}>` : `<input type="checkbox" hidden ${disabled ? "disabled" : ""}${add_attribute("this", inputElement, 0)}${add_attribute("checked", checked, 1)}${add_attribute("value", value, 0)}>`}</label>`
								: ``
						}`
			}`;
		} while (!$$settled);
		return $$rendered;
	},
);
const Share_24_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M6.747 4h3.464a.75.75 0 0 1 .102 1.493l-.102.007H6.747a2.25 2.25 0 0 0-2.245 2.095l-.005.155v9.5a2.25 2.25 0 0 0 2.096 2.244l.154.006h9.5a2.25 2.25 0 0 0 2.246-2.096l.005-.154v-.498a.75.75 0 0 1 1.493-.102l.007.102v.498a3.75 3.75 0 0 1-3.551 3.744l-.2.006h-9.5a3.75 3.75 0 0 1-3.745-3.551l-.005-.2v-9.5a3.75 3.75 0 0 1 3.55-3.744zh3.464zm7.754 2.52V3.75a.75.75 0 0 1 1.187-.61l.082.068l5.995 5.75c.28.269.305.7.076.998l-.076.085l-5.995 5.752a.75.75 0 0 1-1.262-.435l-.007-.107v-2.725l-.343.03c-2.4.25-4.7 1.331-6.915 3.26c-.52.453-1.322.025-1.237-.658c.665-5.32 3.447-8.251 8.196-8.619zV3.75zm1.5-1.012V7.25a.75.75 0 0 1-.75.75c-3.873 0-6.274 1.676-7.311 5.157l-.08.278l.353-.237C10.449 11.737 12.799 11 15.25 11a.75.75 0 0 1 .743.649l.007.101v1.743L20.162 9.5z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Arrow_left_24_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a1 1 0 0 0-.3.58a.8.8 0 0 0 .001.289a1 1 0 0 0 .3.579z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const css = {
	code: ".blog-post.svelte-1ung9cz.svelte-1ung9cz{display:flex;flex-direction:column;align-items:center;padding:48px;margin-inline:auto;max-inline-size:100%}.blog-post.svelte-1ung9cz article.svelte-1ung9cz{max-inline-size:768px}.blog-post.svelte-1ung9cz .markdown-body.svelte-1ung9cz{font-size:1.6rem;line-height:2.6rem}.back-button{color:var(--fds-text-tertiary)}.post-title.svelte-1ung9cz.svelte-1ung9cz{display:flex;align-items:center;gap:12px;margin-inline-start:-48px}.post-title.svelte-1ung9cz h1.svelte-1ung9cz{margin:0;font-size:3.6rem;font-weight:600}@media screen and (width < 1024px){.post-title.svelte-1ung9cz.svelte-1ung9cz{align-items:flex-start;flex-direction:column;margin:0}}.post-info.svelte-1ung9cz.svelte-1ung9cz{display:flex;align-items:center;gap:12px;margin-block-end:24px;padding:18px 0;border-block-end:1px solid var(--fds-divider-stroke-default);background-color:var(--fds-solid-background-secondary);color:var(--fds-text-tertiary)}.post-info.svelte-1ung9cz img.svelte-1ung9cz{inline-size:32px;block-size:32px;border:1px solid var(--fds-card-stroke-default);border-radius:50%}.post-info.svelte-1ung9cz .menu-flyout{min-inline-size:120px}.post-info.svelte-1ung9cz .menu-flyout-container{margin-inline-start:auto}.post-info.svelte-1ung9cz .menu-flyout-item :any-link{text-decoration:none;color:currentColor;min-inline-size:100%}.post-thumbnail.svelte-1ung9cz.svelte-1ung9cz{width:100%;max-inline-size:100%;margin-block-end:48px;border:1px solid var(--fds-card-stroke-default);border-radius:var(--fds-overlay-corner-radius)}",
	map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { defaultI18nValues, externalLink, Metadata } from \\"$lib\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport Share from \\"~icons/fluent/share-24-regular\\";\\nimport ArrowLeft from \\"~icons/fluent/arrow-left-24-regular\\";\\nimport Open from \\"~icons/fluent/open-24-regular\\";\\nimport { IconButton, MenuFlyout, MenuFlyoutItem } from \\"fluent-svelte\\";\\nimport { page } from \\"$app/stores\\";\\nexport let data;\\n$: ({ title, thumbnail, author, description, date, slug } = data);\\n$: pageTitle = title;\\nlet minimal = false;\\nonMount(() => {\\n    const params = new URLSearchParams(window.location.search);\\n    minimal = params.has(\\"minimal\\");\\n});\\n</script>\\r\\n\\r\\n<Metadata\\r\\n\\ttitle={pageTitle\\r\\n\\t\\t? $_(\\"metadata.blog_page\\", {\\r\\n\\t\\t\\t\\tvalues: { title: pageTitle, ...defaultI18nValues.values },\\r\\n\\t\\t\\t})\\r\\n\\t\\t: $_(\\"metadata.blog_home\\", defaultI18nValues)}\\r\\n\\timage={thumbnail}\\r\\n\\t{description}\\r\\n/>\\r\\n\\r\\n<section class=\\"blog-post\\">\\r\\n\\t<article>\\r\\n\\t\\t<div class=\\"post-title\\">\\r\\n\\t\\t\\t{#if !minimal}\\r\\n\\t\\t\\t\\t<IconButton\\r\\n\\t\\t\\t\\t\\t--icon-color=\\"var(--text-color-secondary)\\"\\r\\n\\t\\t\\t\\t\\taria-label=\\"Back to Blog\\"\\r\\n\\t\\t\\t\\t\\tclass=\\"back-button\\"\\r\\n\\t\\t\\t\\t\\thref=\\"/blog\\"\\r\\n\\t\\t\\t\\t\\ttitle=\\"Back to Blog\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<ArrowLeft />\\r\\n\\t\\t\\t\\t</IconButton>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t\\t{#if minimal}\\r\\n\\t\\t\\t\\t<IconButton\\r\\n\\t\\t\\t\\t\\t--icon-color=\\"var(--text-color-secondary)\\"\\r\\n\\t\\t\\t\\t\\taria-label=\\"View full post\\"\\r\\n\\t\\t\\t\\t\\tclass=\\"back-button\\"\\r\\n\\t\\t\\t\\t\\thref={window.location.href.replace(\\"?minimal\\", \\"\\")}\\r\\n\\t\\t\\t\\t\\ttitle=\\"View full post\\"\\r\\n\\t\\t\\t\\t\\ton:click={() =>\\r\\n\\t\\t\\t\\t\\t\\t(window.location.href = window.location.href.replace(\\r\\n\\t\\t\\t\\t\\t\\t\\t\\"?minimal\\",\\r\\n\\t\\t\\t\\t\\t\\t\\t\\"\\",\\r\\n\\t\\t\\t\\t\\t\\t))}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<Open />\\r\\n\\t\\t\\t\\t</IconButton>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t\\t<h1 style:view-transition-name=\\"post-title-{slug}\\">{title}</h1>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"post-info\\">\\r\\n\\t\\t\\t<img alt=\\"{author} avatar\\" src=\\"https://github.com/{author}.png\\" />\\r\\n\\t\\t\\t<a class=\\"hyperlink\\" href=\\"https://github.com/{author}\\" {...externalLink}\\r\\n\\t\\t\\t\\t>@{author}</a\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t<span>•</span>\\r\\n\\t\\t\\t{new Date(date.replace(/-/g, \\"/\\").replace(/T.+/, \\"\\")).toLocaleDateString(\\r\\n\\t\\t\\t\\t\\"en-US\\",\\r\\n\\t\\t\\t\\t{\\r\\n\\t\\t\\t\\t\\tyear: \\"numeric\\",\\r\\n\\t\\t\\t\\t\\tday: \\"numeric\\",\\r\\n\\t\\t\\t\\t\\tmonth: \\"short\\",\\r\\n\\t\\t\\t\\t},\\r\\n\\t\\t\\t)}\\r\\n\\t\\t\\t{#if !minimal}\\r\\n\\t\\t\\t\\t<MenuFlyout placement=\\"bottom\\">\\r\\n\\t\\t\\t\\t\\t<IconButton\\r\\n\\t\\t\\t\\t\\t\\tsize={20}\\r\\n\\t\\t\\t\\t\\t\\taria-label=\\"Share\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"share-button\\"\\r\\n\\t\\t\\t\\t\\t\\ttitle=\\"Share\\"\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t<Share />\\r\\n\\t\\t\\t\\t\\t</IconButton>\\r\\n\\t\\t\\t\\t\\t<svelte:fragment slot=\\"flyout\\">\\r\\n\\t\\t\\t\\t\\t\\t<MenuFlyoutItem\\r\\n\\t\\t\\t\\t\\t\\t\\ton:click={() =>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tnavigator.share({\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttitle,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\turl: $page.url.href,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t})}\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"blog.share.default\\", defaultI18nValues)}\\r\\n\\t\\t\\t\\t\\t\\t</MenuFlyoutItem>\\r\\n\\t\\t\\t\\t\\t\\t<MenuFlyoutItem\\r\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => navigator.clipboard.writeText($page.url.href)}\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"blog.share.url\\", defaultI18nValues)}\\r\\n\\t\\t\\t\\t\\t\\t</MenuFlyoutItem>\\r\\n\\t\\t\\t\\t\\t\\t<MenuFlyoutItem>\\r\\n\\t\\t\\t\\t\\t\\t\\t<a\\r\\n\\t\\t\\t\\t\\t\\t\\t\\thref=\\"https://twitter.com/intent/tweet?text={encodeURIComponent(\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t$page.url.href,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t)}\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"blog.share.tweet\\", defaultI18nValues)}\\r\\n\\t\\t\\t\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\t\\t\\t</MenuFlyoutItem>\\r\\n\\t\\t\\t\\t\\t\\t<MenuFlyoutItem>\\r\\n\\t\\t\\t\\t\\t\\t\\t<a\\r\\n\\t\\t\\t\\t\\t\\t\\t\\thref=\\"https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t$page.url.href,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t)}\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"blog.share.facebook\\", defaultI18nValues)}\\r\\n\\t\\t\\t\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\t\\t\\t</MenuFlyoutItem>\\r\\n\\t\\t\\t\\t\\t\\t<MenuFlyoutItem>\\r\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"/blog/feed.rss\\" {...externalLink}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"blog.share.rss\\", defaultI18nValues)}</a\\r\\n\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t</MenuFlyoutItem>\\r\\n\\t\\t\\t\\t\\t</svelte:fragment>\\r\\n\\t\\t\\t\\t</MenuFlyout>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t</div>\\r\\n\\t\\t{#if thumbnail}\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\tclass=\\"post-thumbnail\\"\\r\\n\\t\\t\\t\\tsrc={thumbnail}\\r\\n\\t\\t\\t\\talt=\\"Thumbnail\\"\\r\\n\\t\\t\\t\\tstyle:view-transition-name=\\"post-thumbnail-{slug}\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t{/if}\\r\\n\\t\\t<div class=\\"markdown-body\\">\\r\\n\\t\\t\\t<slot />\\r\\n\\t\\t</div>\\r\\n\\t</article>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.blog-post {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 48px;\\n  margin-inline: auto;\\n  max-inline-size: 100%;\\n}\\n.blog-post article {\\n  max-inline-size: 768px;\\n}\\n.blog-post .markdown-body {\\n  font-size: 1.6rem;\\n  line-height: 2.6rem;\\n}\\n\\n:global(.back-button) {\\n  color: var(--fds-text-tertiary);\\n}\\n\\n.post-title {\\n  display: flex;\\n  align-items: center;\\n  gap: 12px;\\n  margin-inline-start: -48px;\\n}\\n.post-title h1 {\\n  margin: 0;\\n  font-size: 3.6rem;\\n  font-weight: 600;\\n}\\n@media screen and (width < 1024px) {\\n  .post-title {\\n    align-items: flex-start;\\n    flex-direction: column;\\n    margin: 0;\\n  }\\n}\\n.post-info {\\n  display: flex;\\n  align-items: center;\\n  gap: 12px;\\n  margin-block-end: 24px;\\n  padding: 18px 0;\\n  border-block-end: 1px solid var(--fds-divider-stroke-default);\\n  background-color: var(--fds-solid-background-secondary);\\n  color: var(--fds-text-tertiary);\\n}\\n.post-info img {\\n  inline-size: 32px;\\n  block-size: 32px;\\n  border: 1px solid var(--fds-card-stroke-default);\\n  border-radius: 50%;\\n}\\n.post-info :global(.menu-flyout) {\\n  min-inline-size: 120px;\\n}\\n.post-info :global(.menu-flyout-container) {\\n  margin-inline-start: auto;\\n}\\n.post-info :global(.menu-flyout-item) :global(:any-link) {\\n  text-decoration: none;\\n  color: currentColor;\\n  min-inline-size: 100%;\\n}\\n.post-thumbnail {\\n  width: 100%;\\n  max-inline-size: 100%;\\n  margin-block-end: 48px;\\n  border: 1px solid var(--fds-card-stroke-default);\\n  border-radius: var(--fds-overlay-corner-radius);\\n}</style>\\r\\n"],"names":[],"mappings":"AA8ImB,wCAAW,CAC5B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,eAAe,CAAE,IACnB,CACA,yBAAU,CAAC,sBAAQ,CACjB,eAAe,CAAE,KACnB,CACA,yBAAU,CAAC,6BAAe,CACxB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,MACf,CAEQ,YAAc,CACpB,KAAK,CAAE,IAAI,mBAAmB,CAChC,CAEA,yCAAY,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,mBAAmB,CAAE,KACvB,CACA,0BAAW,CAAC,iBAAG,CACb,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACf,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,MAAM,CAAE,CACjC,yCAAY,CACV,WAAW,CAAE,UAAU,CACvB,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,CACV,CACF,CACA,wCAAW,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,gBAAgB,CAAE,IAAI,CACtB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,gBAAgB,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,4BAA4B,CAAC,CAC7D,gBAAgB,CAAE,IAAI,gCAAgC,CAAC,CACvD,KAAK,CAAE,IAAI,mBAAmB,CAChC,CACA,yBAAU,CAAC,kBAAI,CACb,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,yBAAyB,CAAC,CAChD,aAAa,CAAE,GACjB,CACA,yBAAU,CAAS,YAAc,CAC/B,eAAe,CAAE,KACnB,CACA,yBAAU,CAAS,sBAAwB,CACzC,mBAAmB,CAAE,IACvB,CACA,yBAAU,CAAS,iBAAkB,CAAS,SAAW,CACvD,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,YAAY,CACnB,eAAe,CAAE,IACnB,CACA,6CAAgB,CACd,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,IAAI,CACrB,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,yBAAyB,CAAC,CAChD,aAAa,CAAE,IAAI,2BAA2B,CAChD"}',
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let title;
	let thumbnail;
	let author;
	let description;
	let date;
	let slug;
	let pageTitle;
	let $_, $$unsubscribe__;
	let $page, $$unsubscribe_page;
	$$unsubscribe__ = subscribe($format, value => ($_ = value));
	$$unsubscribe_page = subscribe(page, value => ($page = value));
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0)
		$$bindings.data(data);
	$$result.css.add(css);
	({ title, thumbnail, author, description, date, slug } = data);
	pageTitle = title;
	$$unsubscribe__();
	$$unsubscribe_page();
	return `${validate_component(Metadata, "Metadata").$$render(
		$$result,
		{
			title: pageTitle
				? $_("metadata.blog_page", {
						values: {
							title: pageTitle,
							...defaultI18nValues.values,
						},
					})
				: $_("metadata.blog_home", defaultI18nValues),
			image: thumbnail,
			description,
		},
		{},
		{},
	)} <section class="blog-post svelte-1ung9cz"><article class="svelte-1ung9cz"><div class="post-title svelte-1ung9cz">${`<div style="display: contents; --icon-color:var(--text-color-secondary);">${validate_component(
		IconButton,
		"IconButton",
	).$$render(
		$$result,
		{
			"aria-label": "Back to Blog",
			class: "back-button",
			href: "/blog",
			title: "Back to Blog",
		},
		{},
		{
			default: () => {
				return `${validate_component(Arrow_left_24_regular, "ArrowLeft").$$render($$result, {}, {}, {})}`;
			},
		},
	)}</div>`} ${``} <h1 class="svelte-1ung9cz"${add_styles({
		"view-transition-name": `post-title-${slug}`,
	})}>${escape(title)}</h1></div> <div class="post-info svelte-1ung9cz"><img alt="${escape(author, true) + " avatar"}" src="${"https://github.com/" + escape(author, true) + ".png"}" class="svelte-1ung9cz"> <a${spread(
		[
			{ class: "hyperlink" },
			{
				href: "https://github.com/" + escape(author, true),
			},
			escape_object(externalLink),
		],
		{ classes: "svelte-1ung9cz" },
	)}>@${escape(author)}</a> <span data-svelte-h="svelte-7hh8jk">•</span> ${escape(
		new Date(date.replace(/-/g, "/").replace(/T.+/, "")).toLocaleDateString(
			"en-US",
			{
				year: "numeric",
				day: "numeric",
				month: "short",
			},
		),
	)} ${`${validate_component(MenuFlyoutWrapper, "MenuFlyout").$$render(
		$$result,
		{ placement: "bottom" },
		{},
		{
			flyout: () => {
				return `${validate_component(MenuFlyoutItem, "MenuFlyoutItem").$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${escape($_("blog.share.default", defaultI18nValues))}`;
						},
					},
				)} ${validate_component(MenuFlyoutItem, "MenuFlyoutItem").$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${escape($_("blog.share.url", defaultI18nValues))}`;
						},
					},
				)} ${validate_component(MenuFlyoutItem, "MenuFlyoutItem").$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `<a${spread(
								[
									{
										href:
											"https://twitter.com/intent/tweet?text=" +
											escape(encodeURIComponent($page.url.href), true),
									},
									escape_object(externalLink),
								],
								{ classes: "svelte-1ung9cz" },
							)}>${escape($_("blog.share.tweet", defaultI18nValues))}</a>`;
						},
					},
				)} ${validate_component(MenuFlyoutItem, "MenuFlyoutItem").$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `<a${spread(
								[
									{
										href:
											"https://www.facebook.com/sharer/sharer.php?u=" +
											escape(encodeURIComponent($page.url.href), true),
									},
									escape_object(externalLink),
								],
								{ classes: "svelte-1ung9cz" },
							)}>${escape($_("blog.share.facebook", defaultI18nValues))}</a>`;
						},
					},
				)} ${validate_component(MenuFlyoutItem, "MenuFlyoutItem").$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `<a${spread([{ href: "/blog/feed.rss" }, escape_object(externalLink)], { classes: "svelte-1ung9cz" })}>${escape($_("blog.share.rss", defaultI18nValues))}</a>`;
						},
					},
				)} `;
			},
			default: () => {
				return `${validate_component(IconButton, "IconButton").$$render(
					$$result,
					{
						size: 20,
						"aria-label": "Share",
						class: "share-button",
						title: "Share",
					},
					{},
					{
						default: () => {
							return `${validate_component(Share_24_regular, "Share").$$render($$result, {}, {}, {})}`;
						},
					},
				)}`;
			},
		},
	)}`}</div> ${
		thumbnail
			? `<img class="post-thumbnail svelte-1ung9cz"${add_attribute("src", thumbnail, 0)} alt="Thumbnail"${add_styles(
					{
						"view-transition-name": `post-thumbnail-${slug}`,
					},
				)}>`
			: ``
	} <div class="markdown-body svelte-1ung9cz">${slots.default ? slots.default({}) : ``}</div></article> </section>`;
});
export { Layout as default };
