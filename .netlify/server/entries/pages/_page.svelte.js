import {
	c as create_ssr_component,
	i as compute_rest_props,
	k as get_current_component,
	f as spread,
	d as escape,
	h as escape_object,
	b as add_attribute,
	n as compute_slots,
	g as escape_attribute_value,
	v as validate_component,
	a as subscribe,
	o as add_styles,
	e as each,
	m as missing_component,
	p as is_promise,
	q as noop,
} from "../../chunks/ssr.js";
import { P as PageSection } from "../../chunks/PageSection.js";
import { d as defaultI18nValues } from "../../chunks/i18n.js";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                        */
import { H as HeaderChip } from "../../chunks/HeaderChip.js";
import { $ as $format } from "../../chunks/runtime.js";
/* empty css                                                */
import { e as externalLink, a as entries } from "../../chunks/utils.js";
import { T as TextBlock } from "../../chunks/TextBlock.js";
import { c as createEventForwarder } from "../../chunks/internal2.js";
import "../../chunks/index.js";
import { l as links } from "../../chunks/links.js";
import { M as Metadata } from "../../chunks/Metadata.js";
const css$9 = {
	code: ".tooltip.svelte-gc7m6k{align-items:center;background-clip:padding-box;background-color:var(--fds-solid-background-quarternary);border:1px solid var(--fds-surface-stroke-flyout);border-radius:var(--fds-control-corner-radius);box-shadow:var(--fds-tooltip-shadow);box-sizing:border-box;display:inline-flex;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;inline-size:-webkit-max-content;inline-size:-moz-max-content;inline-size:max-content;justify-content:center;line-height:20px;max-inline-size:320px;padding-block:5px 7px;padding-inline:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",
	map: '{"version":3,"file":"TooltipSurface.svelte","sources":["TooltipSurface.svelte"],"sourcesContent":["<script >import { createEventForwarder } from \\"../internal\\";\\r\\nimport { get_current_component } from \\"svelte/internal\\";\\r\\n/** Specifies a custom class name for the surface. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the surface element. */\\r\\nexport let element = null;\\r\\nconst forwardEvents = createEventForwarder(get_current_component());\\r\\n</script>\\n\\n<div\\n\\tclass=\\"tooltip {className}\\"\\n\\trole=\\"tooltip\\"\\n\\tuse:forwardEvents\\n\\tbind:this={element}\\n\\t{...$$restProps}\\n>\\n\\t<slot />\\n</div>\\n\\n<style >.tooltip{align-items:center;background-clip:padding-box;background-color:var(--fds-solid-background-quarternary);border:1px solid var(--fds-surface-stroke-flyout);border-radius:var(--fds-control-corner-radius);box-shadow:var(--fds-tooltip-shadow);box-sizing:border-box;display:inline-flex;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;inline-size:-webkit-max-content;inline-size:-moz-max-content;inline-size:max-content;justify-content:center;line-height:20px;max-inline-size:320px;padding-block:5px 7px;padding-inline:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}</style>\\n"],"names":[],"mappings":"AAoBQ,sBAAQ,CAAC,YAAY,MAAM,CAAC,gBAAgB,WAAW,CAAC,iBAAiB,IAAI,kCAAkC,CAAC,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,IAAI,2BAA2B,CAAC,CAAC,cAAc,IAAI,2BAA2B,CAAC,CAAC,WAAW,IAAI,oBAAoB,CAAC,CAAC,WAAW,UAAU,CAAC,QAAQ,WAAW,CAAC,YAAY,IAAI,sBAAsB,CAAC,CAAC,UAAU,IAAI,oBAAoB,CAAC,CAAC,YAAY,GAAG,CAAC,YAAY,mBAAmB,CAAC,YAAY,gBAAgB,CAAC,YAAY,WAAW,CAAC,gBAAgB,MAAM,CAAC,YAAY,IAAI,CAAC,gBAAgB,KAAK,CAAC,cAAc,GAAG,CAAC,GAAG,CAAC,eAAe,GAAG,CAAC,oBAAoB,IAAI,CAAC,iBAAiB,IAAI,CAAC,gBAAgB,IAAI,CAAC,YAAY,IAAI"}',
};
const TooltipSurface = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, ["class", "element"]);
		let { class: className = "" } = $$props;
		let { element = null } = $$props;
		createEventForwarder(get_current_component());
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if ($$props.element === void 0 && $$bindings.element && element !== void 0)
			$$bindings.element(element);
		$$result.css.add(css$9);
		return `<div${spread(
			[
				{
					class: "tooltip " + escape(className, true),
				},
				{ role: "tooltip" },
				escape_object($$restProps),
			],
			{ classes: "svelte-gc7m6k" },
		)}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
	},
);
const css$8 = {
	code: ".person-picture.svelte-p3ps28{align-items:center;background-clip:padding-box;background-color:var(--fds-control-alt-fill-quarternary);block-size:100%;border:1px solid var(--fds-card-stroke-default);border-radius:50%;box-sizing:border-box;display:flex;flex:0 0 auto;font-family:var(--fds-font-family-display);font-size:calc(var(--fds-person-picture-size)*.41667);font-weight:600;inline-size:100%;justify-content:center;overflow:hidden;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.person-picture-container.svelte-p3ps28{block-size:var(--fds-person-picture-size);display:flex;inline-size:var(--fds-person-picture-size);position:relative}.person-picture-badge.svelte-p3ps28{align-items:flex-end;block-size:100%;display:flex;flex-direction:column;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}",
	map: '{"version":3,"file":"PersonPicture.svelte","sources":["PersonPicture.svelte"],"sourcesContent":["<script >/** The size of the picture in pixels. */\\r\\nexport let size = 72;\\r\\n/** Source URL used for the picture. */\\r\\nexport let src = undefined;\\r\\n/** Defines the alt text used if an `src` attribute is specified. Also used as fallback text if no `src` or slot text is provided. */\\r\\nexport let alt = undefined;\\r\\n/** Specifies a custom class name for the inner picture. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the inner picture element. */\\r\\nexport let element = null;\\r\\n/** Obtains a bound DOM reference to the outer picture container. */\\r\\nexport let containerElement = null;\\r\\nlet error = false;\\r\\n$: if (src)\\r\\n    error = false;\\r\\n</script>\\n\\n<div\\n\\tclass=\\"person-picture-container\\"\\n\\tstyle=\\"--fds-person-picture-size: {size}px\\"\\n\\tbind:this={containerElement}\\n>\\n\\t{#if src && !error}\\n\\t\\t<img\\n\\t\\t\\tbind:this={element}\\n\\t\\t\\ton:error={() => (error = true)}\\n\\t\\t\\tclass=\\"person-picture {className}\\"\\n\\t\\t\\twidth={size}\\n\\t\\t\\theight={size}\\n\\t\\t\\t{src}\\n\\t\\t\\t{alt}\\n\\t\\t\\t{...$$restProps}\\n\\t\\t/>\\n\\t{:else}\\n\\t\\t<div bind:this={element} class=\\"person-picture {className}\\" {...$$restProps}>\\n\\t\\t\\t<slot>\\n\\t\\t\\t\\t{alt\\n\\t\\t\\t\\t\\t?.split(\\" \\")\\n\\t\\t\\t\\t\\t.map(i => i.charAt(0))\\n\\t\\t\\t\\t\\t.join(\\"\\")\\n\\t\\t\\t\\t\\t.toUpperCase() ?? \\"\\"}\\n\\t\\t\\t</slot>\\n\\t\\t</div>\\n\\t{/if}\\n\\t{#if $$slots.badge}\\n\\t\\t<span class=\\"person-picture-badge\\">\\n\\t\\t\\t<slot name=\\"badge\\" />\\n\\t\\t</span>\\n\\t{/if}\\n</div>\\n\\n<style >.person-picture{align-items:center;background-clip:padding-box;background-color:var(--fds-control-alt-fill-quarternary);block-size:100%;border:1px solid var(--fds-card-stroke-default);border-radius:50%;box-sizing:border-box;display:flex;flex:0 0 auto;font-family:var(--fds-font-family-display);font-size:calc(var(--fds-person-picture-size)*.41667);font-weight:600;inline-size:100%;justify-content:center;overflow:hidden;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.person-picture-container{block-size:var(--fds-person-picture-size);display:flex;inline-size:var(--fds-person-picture-size);position:relative}.person-picture-badge{align-items:flex-end;block-size:100%;display:flex;flex-direction:column;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}</style>\\n"],"names":[],"mappings":"AAoDQ,6BAAe,CAAC,YAAY,MAAM,CAAC,gBAAgB,WAAW,CAAC,iBAAiB,IAAI,kCAAkC,CAAC,CAAC,WAAW,IAAI,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,IAAI,yBAAyB,CAAC,CAAC,cAAc,GAAG,CAAC,WAAW,UAAU,CAAC,QAAQ,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,YAAY,IAAI,yBAAyB,CAAC,CAAC,UAAU,KAAK,IAAI,yBAAyB,CAAC,CAAC,MAAM,CAAC,CAAC,YAAY,GAAG,CAAC,YAAY,IAAI,CAAC,gBAAgB,MAAM,CAAC,SAAS,MAAM,CAAC,WAAW,MAAM,CAAC,oBAAoB,IAAI,CAAC,iBAAiB,IAAI,CAAC,gBAAgB,IAAI,CAAC,YAAY,IAAI,CAAC,uCAAyB,CAAC,WAAW,IAAI,yBAAyB,CAAC,CAAC,QAAQ,IAAI,CAAC,YAAY,IAAI,yBAAyB,CAAC,CAAC,SAAS,QAAQ,CAAC,mCAAqB,CAAC,YAAY,QAAQ,CAAC,WAAW,IAAI,CAAC,QAAQ,IAAI,CAAC,eAAe,MAAM,CAAC,YAAY,IAAI,CAAC,kBAAkB,CAAC,CAAC,mBAAmB,CAAC,CAAC,SAAS,QAAQ"}',
};
const PersonPicture = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"size",
			"src",
			"alt",
			"class",
			"element",
			"containerElement",
		]);
		let $$slots = compute_slots(slots);
		let { size = 72 } = $$props;
		let { src = void 0 } = $$props;
		let { alt = void 0 } = $$props;
		let { class: className = "" } = $$props;
		let { element = null } = $$props;
		let { containerElement = null } = $$props;
		let error = false;
		if ($$props.size === void 0 && $$bindings.size && size !== void 0)
			$$bindings.size(size);
		if ($$props.src === void 0 && $$bindings.src && src !== void 0)
			$$bindings.src(src);
		if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
			$$bindings.alt(alt);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if ($$props.element === void 0 && $$bindings.element && element !== void 0)
			$$bindings.element(element);
		if (
			$$props.containerElement === void 0 &&
			$$bindings.containerElement &&
			containerElement !== void 0
		)
			$$bindings.containerElement(containerElement);
		$$result.css.add(css$8);
		{
			if (src) error = false;
		}
		return `<div class="person-picture-container svelte-p3ps28" style="${"--fds-person-picture-size: " + escape(size, true) + "px"}"${add_attribute("this", containerElement, 0)}>${
			src && !error
				? `<img${spread(
						[
							{
								class: "person-picture " + escape(className, true),
							},
							{ width: escape_attribute_value(size) },
							{ height: escape_attribute_value(size) },
							{ src: escape_attribute_value(src) },
							{ alt: escape_attribute_value(alt) },
							escape_object($$restProps),
						],
						{ classes: "svelte-p3ps28" },
					)}${add_attribute("this", element, 0)}>`
				: `<div${spread(
						[
							{
								class: "person-picture " + escape(className, true),
							},
							escape_object($$restProps),
						],
						{ classes: "svelte-p3ps28" },
					)}${add_attribute("this", element, 0)}>${
						slots.default
							? slots.default({})
							: ` ${escape(
									alt
										?.split(" ")
										.map(i => i.charAt(0))
										.join("")
										.toUpperCase() ?? "",
								)} `
					}</div>`
		} ${$$slots.badge ? `<span class="person-picture-badge svelte-p3ps28">${slots.badge ? slots.badge({}) : ``}</span>` : ``} </div>`;
	},
);
const css$7 = {
	code: ".tooltip-wrapper.svelte-e2a5n0{display:block;position:relative}.tooltip-anchor.svelte-e2a5n0{pointer-events:none;position:absolute;z-index:100}.tooltip-anchor.placement-top.svelte-e2a5n0{bottom:calc(100% + var(--fds-tooltip-offset))}.tooltip-anchor.placement-bottom.svelte-e2a5n0{top:calc(100% + var(--fds-tooltip-offset))}.tooltip-anchor.placement-left.svelte-e2a5n0{right:calc(100% + var(--fds-tooltip-offset))}.tooltip-anchor.placement-right.svelte-e2a5n0{left:calc(100% + var(--fds-tooltip-offset))}.tooltip-anchor.placement-bottom.alignment-start.svelte-e2a5n0,.tooltip-anchor.placement-top.alignment-start.svelte-e2a5n0{inset-inline-start:0}.tooltip-anchor.placement-bottom.alignment-end.svelte-e2a5n0,.tooltip-anchor.placement-top.alignment-end.svelte-e2a5n0{inset-inline-end:0}.tooltip-anchor.placement-bottom.alignment-center.svelte-e2a5n0,.tooltip-anchor.placement-top.alignment-center.svelte-e2a5n0{inset-inline-start:50%;transform:translateX(-50%)}.tooltip-anchor.placement-left.alignment-start.svelte-e2a5n0,.tooltip-anchor.placement-right.alignment-start.svelte-e2a5n0{inset-block-start:0}.tooltip-anchor.placement-left.alignment-end.svelte-e2a5n0,.tooltip-anchor.placement-right.alignment-end.svelte-e2a5n0{inset-block-end:0}.tooltip-anchor.placement-left.alignment-center.svelte-e2a5n0,.tooltip-anchor.placement-right.alignment-center.svelte-e2a5n0{inset-block-start:50%;transform:translateY(-50%)}.tooltip-anchor.placement-auto.svelte-e2a5n0{transform:translateY(-100%)}.tooltip-anchor.placement-auto.alignment-center.svelte-e2a5n0{transform:translate(-50%,-100%)}.tooltip-anchor.placement-auto.alignment-end.svelte-e2a5n0{transform:translate(-100%,-100%)}",
	map: `{"version":3,"file":"TooltipWrapper.svelte","sources":["TooltipWrapper.svelte"],"sourcesContent":["<script >import { onMount } from \\"svelte\\";\\r\\nimport { fade } from \\"svelte/transition\\";\\r\\nimport { getCSSDuration } from \\"../internal\\";\\r\\nimport TooltipSurface from \\"./TooltipSurface.svelte\\";\\r\\n/** Specifies the tooltip's text content. */\\r\\nexport let text = \\"\\";\\r\\n/** Distance of the tooltip from the alignment axis in pixels. */\\r\\nexport let offset = 24;\\r\\n/** Direction that the tooltip will appear from. */\\r\\nexport let placement = \\"auto\\";\\r\\n/** Alignment of the tooltip along the placement target's given axis. */\\r\\nexport let alignment = \\"center\\";\\r\\n/** Allows the tooltip to follow the user's cursor if \`placement\` is set to \`auto\`. */\\r\\nexport let followCursor = false;\\r\\n/** Prevents the tooltip from disappearing after cursor leaves bounds. */\\r\\nexport let persistent = false;\\r\\n/** Determines if the tooltip is visible or not. */\\r\\nexport let visible = false;\\r\\n/** Initial delay time for the tooltip to become visible in millseconds. */\\r\\nexport let delay = 1000;\\r\\n/** Obtains a bound reference to the tooltip surface element. */\\r\\nexport let tooltipElement = null;\\r\\n/** Obtains a bound reference to the tooltip's positioning anchor element. */\\r\\nexport let anchorElement = null;\\r\\n/** Obtains a bound reference to the tooltip's content wrapper element. */\\r\\nexport let wrapperElement = null;\\r\\nlet mounted = false;\\r\\nlet tooltipDurationTimeout;\\r\\nlet currentPosition = {\\r\\n    x: 0,\\r\\n    y: 0\\r\\n};\\r\\nlet mousePosition = {\\r\\n    x: 0,\\r\\n    y: 0\\r\\n};\\r\\nonMount(() => (mounted = true));\\r\\nfunction updateMousePosition({ clientX, clientY }) {\\r\\n    mousePosition.x = clientX;\\r\\n    mousePosition.y = clientY;\\r\\n}\\r\\nfunction updateTooltipPositionAuto(wrapperPosition) {\\r\\n    const { left, top } = wrapperPosition;\\r\\n    currentPosition.x = mousePosition.x - left;\\r\\n    currentPosition.y = mousePosition.y - top;\\r\\n}\\r\\nfunction mountTooltip() {\\r\\n    tooltipDurationTimeout = setTimeout(() => {\\r\\n        if (placement === \\"auto\\" && wrapperElement)\\r\\n            updateTooltipPositionAuto(wrapperElement.getBoundingClientRect());\\r\\n        visible = true;\\r\\n    }, delay);\\r\\n}\\r\\nfunction destroyTooltip() {\\r\\n    clearTimeout(tooltipDurationTimeout);\\r\\n    if (!persistent)\\r\\n        visible = false;\\r\\n}\\r\\n<\/script>\\n\\n<svelte:window on:scroll={destroyTooltip} />\\n\\n<div\\n\\tclass=\\"tooltip-wrapper\\"\\n\\ttitle={mounted ? undefined : text}\\n\\tbind:this={wrapperElement}\\n\\ton:mouseenter={mountTooltip}\\n\\ton:mouseleave={destroyTooltip}\\n\\ton:mousemove={updateMousePosition}\\n\\ton:mousemove={() =>\\n\\t\\tplacement === \\"auto\\" &&\\n\\t\\tfollowCursor &&\\n\\t\\tupdateTooltipPositionAuto(wrapperElement.getBoundingClientRect())}\\n>\\n\\t<slot />\\n\\n\\t{#if visible}\\n\\t\\t<div\\n\\t\\t\\tbind:this={anchorElement}\\n\\t\\t\\tin:fade|local={{ duration: getCSSDuration(\\"--fds-control-fast-duration\\") }}\\n\\t\\t\\tclass=\\"tooltip-anchor placement-{placement} alignment-{alignment}\\"\\n\\t\\t\\tstyle=\\"{placement === 'auto'\\n\\t\\t\\t\\t? \`top: calc(\${currentPosition.y}px - var(--fds-tooltip-offset));\\n\\t\\t\\t\\t   left: \${currentPosition.x}px;\`\\n\\t\\t\\t\\t: ''} --fds-tooltip-offset: {offset}px\\"\\n\\t\\t>\\n\\t\\t\\t<TooltipSurface bind:element={tooltipElement} {...$$restProps}>\\n\\t\\t\\t\\t{text}\\n\\t\\t\\t\\t<slot name=\\"tooltip\\" />\\n\\t\\t\\t</TooltipSurface>\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style >.tooltip-wrapper{display:block;position:relative}.tooltip-anchor{pointer-events:none;position:absolute;z-index:100}.tooltip-anchor.placement-top{bottom:calc(100% + var(--fds-tooltip-offset))}.tooltip-anchor.placement-bottom{top:calc(100% + var(--fds-tooltip-offset))}.tooltip-anchor.placement-left{right:calc(100% + var(--fds-tooltip-offset))}.tooltip-anchor.placement-right{left:calc(100% + var(--fds-tooltip-offset))}.tooltip-anchor.placement-bottom.alignment-start,.tooltip-anchor.placement-top.alignment-start{inset-inline-start:0}.tooltip-anchor.placement-bottom.alignment-end,.tooltip-anchor.placement-top.alignment-end{inset-inline-end:0}.tooltip-anchor.placement-bottom.alignment-center,.tooltip-anchor.placement-top.alignment-center{inset-inline-start:50%;transform:translateX(-50%)}.tooltip-anchor.placement-left.alignment-start,.tooltip-anchor.placement-right.alignment-start{inset-block-start:0}.tooltip-anchor.placement-left.alignment-end,.tooltip-anchor.placement-right.alignment-end{inset-block-end:0}.tooltip-anchor.placement-left.alignment-center,.tooltip-anchor.placement-right.alignment-center{inset-block-start:50%;transform:translateY(-50%)}.tooltip-anchor.placement-auto{transform:translateY(-100%)}.tooltip-anchor.placement-auto.alignment-center{transform:translate(-50%,-100%)}.tooltip-anchor.placement-auto.alignment-end{transform:translate(-100%,-100%)}</style>\\n"],"names":[],"mappings":"AA8FQ,8BAAgB,CAAC,QAAQ,KAAK,CAAC,SAAS,QAAQ,CAAC,6BAAe,CAAC,eAAe,IAAI,CAAC,SAAS,QAAQ,CAAC,QAAQ,GAAG,CAAC,eAAe,4BAAc,CAAC,OAAO,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,oBAAoB,CAAC,CAAC,CAAC,eAAe,+BAAiB,CAAC,IAAI,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,oBAAoB,CAAC,CAAC,CAAC,eAAe,6BAAe,CAAC,MAAM,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,oBAAoB,CAAC,CAAC,CAAC,eAAe,8BAAgB,CAAC,KAAK,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,oBAAoB,CAAC,CAAC,CAAC,eAAe,iBAAiB,8BAAgB,CAAC,eAAe,cAAc,8BAAgB,CAAC,mBAAmB,CAAC,CAAC,eAAe,iBAAiB,4BAAc,CAAC,eAAe,cAAc,4BAAc,CAAC,iBAAiB,CAAC,CAAC,eAAe,iBAAiB,+BAAiB,CAAC,eAAe,cAAc,+BAAiB,CAAC,mBAAmB,GAAG,CAAC,UAAU,WAAW,IAAI,CAAC,CAAC,eAAe,eAAe,8BAAgB,CAAC,eAAe,gBAAgB,8BAAgB,CAAC,kBAAkB,CAAC,CAAC,eAAe,eAAe,4BAAc,CAAC,eAAe,gBAAgB,4BAAc,CAAC,gBAAgB,CAAC,CAAC,eAAe,eAAe,+BAAiB,CAAC,eAAe,gBAAgB,+BAAiB,CAAC,kBAAkB,GAAG,CAAC,UAAU,WAAW,IAAI,CAAC,CAAC,eAAe,6BAAe,CAAC,UAAU,WAAW,KAAK,CAAC,CAAC,eAAe,eAAe,+BAAiB,CAAC,UAAU,UAAU,IAAI,CAAC,KAAK,CAAC,CAAC,eAAe,eAAe,4BAAc,CAAC,UAAU,UAAU,KAAK,CAAC,KAAK,CAAC"}`,
};
const TooltipWrapper = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"text",
			"offset",
			"placement",
			"alignment",
			"followCursor",
			"persistent",
			"visible",
			"delay",
			"tooltipElement",
			"anchorElement",
			"wrapperElement",
		]);
		let { text = "" } = $$props;
		let { offset = 24 } = $$props;
		let { placement = "auto" } = $$props;
		let { alignment = "center" } = $$props;
		let { followCursor = false } = $$props;
		let { persistent = false } = $$props;
		let { visible = false } = $$props;
		let { delay = 1e3 } = $$props;
		let { tooltipElement = null } = $$props;
		let { anchorElement = null } = $$props;
		let { wrapperElement = null } = $$props;
		let currentPosition = { x: 0, y: 0 };
		if ($$props.text === void 0 && $$bindings.text && text !== void 0)
			$$bindings.text(text);
		if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
			$$bindings.offset(offset);
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
		if (
			$$props.followCursor === void 0 &&
			$$bindings.followCursor &&
			followCursor !== void 0
		)
			$$bindings.followCursor(followCursor);
		if (
			$$props.persistent === void 0 &&
			$$bindings.persistent &&
			persistent !== void 0
		)
			$$bindings.persistent(persistent);
		if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
			$$bindings.visible(visible);
		if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
			$$bindings.delay(delay);
		if (
			$$props.tooltipElement === void 0 &&
			$$bindings.tooltipElement &&
			tooltipElement !== void 0
		)
			$$bindings.tooltipElement(tooltipElement);
		if (
			$$props.anchorElement === void 0 &&
			$$bindings.anchorElement &&
			anchorElement !== void 0
		)
			$$bindings.anchorElement(anchorElement);
		if (
			$$props.wrapperElement === void 0 &&
			$$bindings.wrapperElement &&
			wrapperElement !== void 0
		)
			$$bindings.wrapperElement(wrapperElement);
		$$result.css.add(css$7);
		let $$settled;
		let $$rendered;
		let previous_head = $$result.head;
		do {
			$$settled = true;
			$$result.head = previous_head;
			$$rendered = ` <div class="tooltip-wrapper svelte-e2a5n0"${add_attribute("title", text, 0)}${add_attribute("this", wrapperElement, 0)}>${slots.default ? slots.default({}) : ``} ${
				visible
					? `<div class="${"tooltip-anchor placement-" + escape(placement, true) + " alignment-" + escape(alignment, true) + " svelte-e2a5n0"}" style="${
							escape(
								placement === "auto"
									? `top: calc(${currentPosition.y}px - var(--fds-tooltip-offset));
				   left: ${currentPosition.x}px;`
									: "",
								true,
							) +
							" --fds-tooltip-offset: " +
							escape(offset, true) +
							"px"
						}"${add_attribute("this", anchorElement, 0)}>${validate_component(
							TooltipSurface,
							"TooltipSurface",
						).$$render(
							$$result,
							Object.assign({}, $$restProps, { element: tooltipElement }),
							{
								element: $$value => {
									tooltipElement = $$value;
									$$settled = false;
								},
							},
							{
								default: () => {
									return `${escape(text)} ${slots.tooltip ? slots.tooltip({}) : ``}`;
								},
							},
						)}</div>`
					: ``
			} </div>`;
		} while (!$$settled);
		return $$rendered;
	},
);
const css$6 = {
	code: ".contributor.svelte-1wkxshk.svelte-1wkxshk{display:inline-flex;align-items:center;gap:1rem;min-inline-size:150px;padding:1rem;border:1px solid var(--fds-card-stroke-default);border-radius:var(--fds-control-corner-radius);background-color:var(--fds-solid-background-tertiary);box-shadow:var(--fds-flyout-shadow);text-decoration:none;transition:var(--fds-control-normal-duration) ease;user-select:none;-webkit-user-drag:none}.contributor.svelte-1wkxshk.svelte-1wkxshk:hover{box-shadow:var(--fds-active-window-shadow);transform:translateY(-2px)}.info.svelte-1wkxshk.svelte-1wkxshk{color:var(--fds-text-tertiary);font-size:1.2rem;font-weight:normal;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.info.svelte-1wkxshk h5.svelte-1wkxshk{margin:0;color:var(--fds-text-primary);font-size:var(--fds-body-font-size);font-weight:600;text-overflow:ellipsis;overflow:hidden}",
	map: `{"version":3,"file":"Contributor.svelte","sources":["Contributor.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { externalLink } from \\"$lib\\";\\nimport { PersonPicture } from \\"fluent-svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nexport let html_url = undefined;\\nexport let avatar_url = undefined;\\nexport let type = \\"User\\";\\nexport let login = \\"Unknown\\";\\nexport let contributions = 0;\\n<\/script>\\r\\n\\r\\n{#if type === \\"User\\"}\\r\\n\\t<a tabindex=\\"-1\\" class=\\"contributor\\" href={html_url} {...externalLink}>\\r\\n\\t\\t<PersonPicture\\r\\n\\t\\t\\tsrc={avatar_url}\\r\\n\\t\\t\\tsize={32}\\r\\n\\t\\t\\talt=\\"{login}'s avatar\\"\\r\\n\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t/>\\r\\n\\t\\t<div class=\\"info\\">\\r\\n\\t\\t\\t<h5>{login}</h5>\\r\\n\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t{$_(\\"home.community.contributions\\", {\\r\\n\\t\\t\\t\\t\\tvalues: { amount: contributions, FilesName: \\"Files\\" },\\r\\n\\t\\t\\t\\t})}\\r\\n\\t\\t\\t</span>\\r\\n\\t\\t</div>\\r\\n\\t</a>\\r\\n{/if}\\r\\n\\r\\n<style lang=\\"scss\\">.contributor {\\n  display: inline-flex;\\n  align-items: center;\\n  gap: 1rem;\\n  min-inline-size: 150px;\\n  padding: 1rem;\\n  border: 1px solid var(--fds-card-stroke-default);\\n  border-radius: var(--fds-control-corner-radius);\\n  background-color: var(--fds-solid-background-tertiary);\\n  box-shadow: var(--fds-flyout-shadow);\\n  text-decoration: none;\\n  transition: var(--fds-control-normal-duration) ease;\\n  user-select: none;\\n  -webkit-user-drag: none;\\n}\\n.contributor:hover {\\n  box-shadow: var(--fds-active-window-shadow);\\n  transform: translateY(-2px);\\n}\\n\\n.info {\\n  color: var(--fds-text-tertiary);\\n  font-size: 1.2rem;\\n  font-weight: normal;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  overflow: hidden;\\n}\\n.info h5 {\\n  margin: 0;\\n  color: var(--fds-text-primary);\\n  font-size: var(--fds-body-font-size);\\n  font-weight: 600;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n}</style>\\r\\n"],"names":[],"mappings":"AA6BmB,0CAAa,CAC9B,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,yBAAyB,CAAC,CAChD,aAAa,CAAE,IAAI,2BAA2B,CAAC,CAC/C,gBAAgB,CAAE,IAAI,+BAA+B,CAAC,CACtD,UAAU,CAAE,IAAI,mBAAmB,CAAC,CACpC,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,IAAI,6BAA6B,CAAC,CAAC,IAAI,CACnD,WAAW,CAAE,IAAI,CACjB,iBAAiB,CAAE,IACrB,CACA,0CAAY,MAAO,CACjB,UAAU,CAAE,IAAI,0BAA0B,CAAC,CAC3C,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,mCAAM,CACJ,KAAK,CAAE,IAAI,mBAAmB,CAAC,CAC/B,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,QAAQ,CACvB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MACZ,CACA,oBAAK,CAAC,iBAAG,CACP,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAC9B,SAAS,CAAE,IAAI,oBAAoB,CAAC,CACpC,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,QAAQ,CACvB,QAAQ,CAAE,MACZ"}`,
};
const Contributor = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $_, $$unsubscribe__;
		$$unsubscribe__ = subscribe($format, value => ($_ = value));
		let { html_url = void 0 } = $$props;
		let { avatar_url = void 0 } = $$props;
		let { type = "User" } = $$props;
		let { login = "Unknown" } = $$props;
		let { contributions = 0 } = $$props;
		if (
			$$props.html_url === void 0 &&
			$$bindings.html_url &&
			html_url !== void 0
		)
			$$bindings.html_url(html_url);
		if (
			$$props.avatar_url === void 0 &&
			$$bindings.avatar_url &&
			avatar_url !== void 0
		)
			$$bindings.avatar_url(avatar_url);
		if ($$props.type === void 0 && $$bindings.type && type !== void 0)
			$$bindings.type(type);
		if ($$props.login === void 0 && $$bindings.login && login !== void 0)
			$$bindings.login(login);
		if (
			$$props.contributions === void 0 &&
			$$bindings.contributions &&
			contributions !== void 0
		)
			$$bindings.contributions(contributions);
		$$result.css.add(css$6);
		$$unsubscribe__();
		return `${
			type === "User"
				? `<a${spread(
						[
							{ tabindex: "-1" },
							{ class: "contributor" },
							{ href: escape_attribute_value(html_url) },
							escape_object(externalLink),
						],
						{ classes: "svelte-1wkxshk" },
					)}>${validate_component(PersonPicture, "PersonPicture").$$render(
						$$result,
						{
							src: avatar_url,
							size: 32,
							alt: login + "'s avatar",
							loading: "lazy",
						},
						{},
						{},
					)} <div class="info svelte-1wkxshk"><h5 class="svelte-1wkxshk">${escape(login)}</h5> <span>${escape(
						$_("home.community.contributions", {
							values: {
								amount: contributions,
								FilesName: "Files",
							},
						}),
					)}</span></div></a>`
				: ``
		}`;
	},
);
const Question_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 4C9.236 4 7 6.236 7 9a.75.75 0 0 0 1.5 0c0-1.936 1.564-3.5 3.5-3.5s3.5 1.564 3.5 3.5c0 .852-.222 1.42-.529 1.86c-.324.463-.767.823-1.302 1.232l-.138.105c-1.01.768-2.281 1.734-2.281 3.803v.25a.75.75 0 0 0 1.5 0V16c0-1.317.714-1.863 1.785-2.682l.046-.035c.527-.403 1.147-.887 1.62-1.564c.49-.701.799-1.57.799-2.719c0-2.764-2.236-5-5-5m0 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const css$5 = {
	code: ".feature-card.svelte-1yiedrm.svelte-1yiedrm{display:flex;flex-direction:column;gap:16px;position:relative;padding:24px;border-radius:var(--fds-control-corner-radius);background-color:var(--fds-solid-background-tertiary);box-shadow:0 0 0 1px var(--fds-card-stroke-default);text-align:start;transition:var(--fds-control-normal-duration) ease;cursor:default;break-inside:avoid-column;backface-visibility:hidden;border:none;outline:2px solid transparent}.feature-card.svelte-1yiedrm.svelte-1yiedrm:hover{box-shadow:var(--fds-card-shadow), 0 0 0 1px var(--fds-card-stroke-default);outline-color:var(--fds-accent-default)}.feature-card.svelte-1yiedrm .fluent-icon{inline-size:24px;block-size:auto;fill:currentColor;color:var(--fds-accent-default)}.feature-card.svelte-1yiedrm h3.svelte-1yiedrm{margin:0;color:var(--fds-text-primary);font-size:1.8rem;font-weight:600}.feature-card.svelte-1yiedrm p.svelte-1yiedrm{margin:0;color:var(--fds-text-tertiary);font-size:1.4rem;font-weight:400}",
	map: '{"version":3,"file":"FeatureCard.svelte","sources":["FeatureCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { _ } from \\"svelte-i18n\\";\\nimport { defaultI18nValues } from \\"$lib\\";\\nimport Question from \\"~icons/fluent/question-24-regular\\";\\nexport let description = \\"\\";\\n</script>\\r\\n\\r\\n<article class=\\"feature-card\\" {...$$restProps}>\\r\\n\\t<slot name=\\"icon\\">\\r\\n\\t\\t<Question />\\r\\n\\t</slot>\\r\\n\\t<h3>\\r\\n\\t\\t<slot>{$_(\\"home.features.unknown\\", defaultI18nValues)}</slot>\\r\\n\\t</h3>\\r\\n\\t<p>{description}</p>\\r\\n</article>\\r\\n\\r\\n<style lang=\\"scss\\">.feature-card {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n  position: relative;\\n  padding: 24px;\\n  border-radius: var(--fds-control-corner-radius);\\n  background-color: var(--fds-solid-background-tertiary);\\n  box-shadow: 0 0 0 1px var(--fds-card-stroke-default);\\n  text-align: start;\\n  transition: var(--fds-control-normal-duration) ease;\\n  cursor: default;\\n  break-inside: avoid-column;\\n  backface-visibility: hidden;\\n  border: none;\\n  outline: 2px solid transparent;\\n}\\n.feature-card:hover {\\n  box-shadow: var(--fds-card-shadow), 0 0 0 1px var(--fds-card-stroke-default);\\n  outline-color: var(--fds-accent-default);\\n}\\n.feature-card :global(.fluent-icon) {\\n  inline-size: 24px;\\n  block-size: auto;\\n  fill: currentColor;\\n  color: var(--fds-accent-default);\\n}\\n.feature-card h3 {\\n  margin: 0;\\n  color: var(--fds-text-primary);\\n  font-size: 1.8rem;\\n  font-weight: 600;\\n}\\n.feature-card p {\\n  margin: 0;\\n  color: var(--fds-text-tertiary);\\n  font-size: 1.4rem;\\n  font-weight: 400;\\n}</style>\\r\\n"],"names":[],"mappings":"AAgBmB,2CAAc,CAC/B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,2BAA2B,CAAC,CAC/C,gBAAgB,CAAE,IAAI,+BAA+B,CAAC,CACtD,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,yBAAyB,CAAC,CACpD,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,IAAI,6BAA6B,CAAC,CAAC,IAAI,CACnD,MAAM,CAAE,OAAO,CACf,YAAY,CAAE,YAAY,CAC1B,mBAAmB,CAAE,MAAM,CAC3B,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,WACrB,CACA,2CAAa,MAAO,CAClB,UAAU,CAAE,IAAI,iBAAiB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,yBAAyB,CAAC,CAC5E,aAAa,CAAE,IAAI,oBAAoB,CACzC,CACA,4BAAa,CAAS,YAAc,CAClC,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,IAAI,CAAE,YAAY,CAClB,KAAK,CAAE,IAAI,oBAAoB,CACjC,CACA,4BAAa,CAAC,iBAAG,CACf,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAC9B,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACf,CACA,4BAAa,CAAC,gBAAE,CACd,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,mBAAmB,CAAC,CAC/B,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACf"}',
};
const FeatureCard = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, ["description"]);
		let $_, $$unsubscribe__;
		$$unsubscribe__ = subscribe($format, value => ($_ = value));
		let { description = "" } = $$props;
		if (
			$$props.description === void 0 &&
			$$bindings.description &&
			description !== void 0
		)
			$$bindings.description(description);
		$$result.css.add(css$5);
		$$unsubscribe__();
		return `<article${spread([{ class: "feature-card" }, escape_object($$restProps)], { classes: "svelte-1yiedrm" })}>${slots.icon ? slots.icon({}) : ` ${validate_component(Question_24_regular, "Question").$$render($$result, {}, {}, {})} `} <h3 class="svelte-1yiedrm">${slots.default ? slots.default({}) : `${escape($_("home.features.unknown", defaultI18nValues))}`}</h3> <p class="svelte-1yiedrm">${escape(description)}</p> </article>`;
	},
);
const css$4 = {
	code: ".color-swatch{margin:0;appearance:none}.color-swatch.type-standard{inline-size:72px;block-size:72px;border-radius:var(--fds-control-corner-radius);overflow:hidden}.color-swatch.type-standard:checked{border-radius:calc(var(--fds-control-corner-radius) + 2px);box-shadow:inset 0 0 0 2px var(--fds-accent-default), inset 0 0 0 3px var(--fds-solid-background-base)}.color-swatch.type-standard:focus-visible{box-shadow:inset 0 0 0 2px var(--fds-accent-default), inset 0 0 0 3px var(--fds-solid-background-base), 0 0 0 1px var(--fds-solid-background-base), 0 0 0 3px var(--fds-focus-stroke-outer) !important}.color-swatch.type-round{inline-size:36px;block-size:36px;border-radius:36px}.color-swatch.type-round:checked{box-shadow:0 0 0 1px var(--fds-solid-background-base), 0 0 0 3px var(--fds-focus-stroke-outer)}",
	map: '{"version":3,"file":"ColorSwatch.svelte","sources":["ColorSwatch.svelte"],"sourcesContent":["<script lang=\\"ts\\">import {} from \\"$data/features\\";\\nimport { Tooltip } from \\"fluent-svelte\\";\\nexport let type = \\"standard\\";\\nexport let colorName = { name: \\"Black\\", color: \\"#000\\" };\\nexport let value = undefined;\\nexport let group = [];\\nlet className = \\"\\";\\nexport { className as class };\\n</script>\\r\\n\\r\\n<Tooltip text={colorName.name}>\\r\\n\\t<input\\r\\n\\t\\t{...$$restProps}\\r\\n\\t\\tbind:group\\r\\n\\t\\tclass=\\"color-swatch {className || ``}\\"\\r\\n\\t\\tclass:type-round={type === \\"round\\"}\\r\\n\\t\\tclass:type-standard={type === \\"standard\\"}\\r\\n\\t\\ton:change\\r\\n\\t\\ton:click\\r\\n\\t\\tstyle:background-color={colorName.color}\\r\\n\\t\\ttype=\\"radio\\"\\r\\n\\t\\t{value}\\r\\n\\t/>\\r\\n</Tooltip>\\r\\n\\r\\n<style lang=\\"scss\\">:global(.color-swatch) {\\n  margin: 0;\\n  appearance: none;\\n}\\n:global(.color-swatch.type-standard) {\\n  inline-size: 72px;\\n  block-size: 72px;\\n  border-radius: var(--fds-control-corner-radius);\\n  overflow: hidden;\\n}\\n:global(.color-swatch.type-standard:checked) {\\n  border-radius: calc(var(--fds-control-corner-radius) + 2px);\\n  box-shadow: inset 0 0 0 2px var(--fds-accent-default), inset 0 0 0 3px var(--fds-solid-background-base);\\n}\\n:global(.color-swatch.type-standard:focus-visible) {\\n  box-shadow: inset 0 0 0 2px var(--fds-accent-default), inset 0 0 0 3px var(--fds-solid-background-base), 0 0 0 1px var(--fds-solid-background-base), 0 0 0 3px var(--fds-focus-stroke-outer) !important;\\n}\\n:global(.color-swatch.type-round) {\\n  inline-size: 36px;\\n  block-size: 36px;\\n  border-radius: 36px;\\n}\\n:global(.color-swatch.type-round:checked) {\\n  box-shadow: 0 0 0 1px var(--fds-solid-background-base), 0 0 0 3px var(--fds-focus-stroke-outer);\\n}</style>\\r\\n"],"names":[],"mappings":"AAyB2B,aAAe,CACxC,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IACd,CACQ,2BAA6B,CACnC,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAAI,2BAA2B,CAAC,CAC/C,QAAQ,CAAE,MACZ,CACQ,mCAAqC,CAC3C,aAAa,CAAE,KAAK,IAAI,2BAA2B,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3D,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,oBAAoB,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,2BAA2B,CACxG,CACQ,yCAA2C,CACjD,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,oBAAoB,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,2BAA2B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,2BAA2B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,wBAAwB,CAAC,CAAC,UAC/L,CACQ,wBAA0B,CAChC,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB,CACQ,gCAAkC,CACxC,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,2BAA2B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,wBAAwB,CAChG"}',
};
const ColorSwatch = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"type",
			"colorName",
			"value",
			"group",
			"class",
		]);
		let { type = "standard" } = $$props;
		let { colorName = { name: "Black", color: "#000" } } = $$props;
		let { value = void 0 } = $$props;
		let { group = [] } = $$props;
		let { class: className = "" } = $$props;
		if ($$props.type === void 0 && $$bindings.type && type !== void 0)
			$$bindings.type(type);
		if (
			$$props.colorName === void 0 &&
			$$bindings.colorName &&
			colorName !== void 0
		)
			$$bindings.colorName(colorName);
		if ($$props.value === void 0 && $$bindings.value && value !== void 0)
			$$bindings.value(value);
		if ($$props.group === void 0 && $$bindings.group && group !== void 0)
			$$bindings.group(group);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		$$result.css.add(css$4);
		return `${validate_component(TooltipWrapper, "Tooltip").$$render(
			$$result,
			{ text: colorName.name },
			{},
			{
				default: () => {
					return `<input${spread(
						[
							escape_object($$restProps),
							{
								class: "color-swatch " + escape(className || ``, true),
							},
							{ type: "radio" },
							{ value: escape_attribute_value(value) },
						],
						{
							classes:
								(type === "round" ? "type-round" : "") +
								" " +
								(type === "standard" ? "type-standard" : ""),
							styles: { "background-color": colorName.color },
						},
					)}${value === group ? add_attribute("checked", true, 1) : ""}>`;
				},
			},
		)}`;
	},
);
const css$3 = {
	code: "#design-section .page-section-inner{display:flex;flex-direction:column;align-items:center;text-align:center;overflow:hidden}.design-image.svelte-eia2lf{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;inline-size:80vw;block-size:100%;margin-block-start:120px;text-align:center}.files-screenshot.svelte-eia2lf,.files-wallpaper.svelte-eia2lf{block-size:auto;user-select:none;-webkit-user-drag:none}.files-screenshot.svelte-eia2lf{position:absolute;inset-block-start:-48px;inset-inline-end:0;inset-inline-start:0;z-index:1;inline-size:70%;max-inline-size:1024px;margin:0 auto;border:1px solid var(--fds-surface-stroke-default);border-radius:calc(var(--fds-overlay-corner-radius) / 1.25);background-color:hsl(var(--mica-tint), var(--mica-tint-opacity));box-shadow:var(--fds-dialog-shadow);transition:50ms linear transform;backdrop-filter:blur(60px) saturate(150%)}@media screen and (width > 2048px){.files-screenshot.svelte-eia2lf{border-radius:var(--fds-overlay-corner-radius)}}.files-wallpaper.svelte-eia2lf{position:relative;inline-size:90%;max-inline-size:1440px;border:1px solid var(--fds-card-stroke-default);border-radius:calc(var(--fds-overlay-corner-radius) * 1.5)}@media screen and (width < 1024px){.design-image.svelte-eia2lf,.files-wallpaper.svelte-eia2lf{inline-size:100%}.files-screenshot.svelte-eia2lf{inset-block-start:0}}@media screen and (width < 768px){.design-image.svelte-eia2lf{margin-block-start:48px}.files-screenshot.svelte-eia2lf{inset-block-start:32px;inset-inline-start:-2.5%;inline-size:105%;transform:none !important}.files-wallpaper.svelte-eia2lf{inline-size:180%;block-size:80vw;border-radius:0;object-fit:cover;object-position:bottom}}",
	map: '{"version":3,"file":"DesignSection.svelte","sources":["DesignSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { defaultI18nValues, HeaderChip, PageSection } from \\"$lib\\";\\nimport { Button } from \\"fluent-svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet scrollPositionY;\\n</script>\\r\\n\\r\\n<svelte:body on:scroll={() => (scrollPositionY = document.body.scrollTop)} />\\r\\n\\r\\n<PageSection id=\\"design-section\\">\\r\\n\\t<HeaderChip>{$_(\\"home.design.chip\\", defaultI18nValues)}</HeaderChip>\\r\\n\\t<h2>{$_(\\"home.design.title\\", defaultI18nValues)}</h2>\\r\\n\\t<p>{$_(\\"home.design.description\\", defaultI18nValues)}</p>\\r\\n\\t<div class=\\"buttons-spacer\\">\\r\\n\\t\\t<Button href=\\"/download/\\" variant=\\"accent\\">\\r\\n\\t\\t\\t{$_(\\"home.design.download\\", defaultI18nValues)}\\r\\n\\t\\t</Button>\\r\\n\\t\\t<Button variant=\\"hyperlink\\" href=\\"/docs/\\">\\r\\n\\t\\t\\t{$_(\\"home.design.learn_more\\", defaultI18nValues)}\\r\\n\\t\\t</Button>\\r\\n\\t</div>\\r\\n\\t<div class=\\"design-image\\">\\r\\n\\t\\t<picture>\\r\\n\\t\\t\\t<source\\r\\n\\t\\t\\t\\tmedia=\\"(prefers-color-scheme: dark)\\"\\r\\n\\t\\t\\t\\tsrcset=\\"/screenshots/folder-list-dark.png\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<source\\r\\n\\t\\t\\t\\tmedia=\\"(prefers-color-scheme: light)\\"\\r\\n\\t\\t\\t\\tsrcset=\\"/screenshots/folder-list-light.png\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\talt=\\"Files folder list screenshot\\"\\r\\n\\t\\t\\t\\tclass=\\"files-screenshot\\"\\r\\n\\t\\t\\t\\theight=\\"768\\"\\r\\n\\t\\t\\t\\tsrc=\\"/screenshots/folder-list-light.png\\"\\r\\n\\t\\t\\t\\tstyle:transform=\\"translateY({Math.floor(scrollPositionY / +20)}px)\\"\\r\\n\\t\\t\\t\\twidth=\\"1024\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t</picture>\\r\\n\\t\\t<picture>\\r\\n\\t\\t\\t<source\\r\\n\\t\\t\\t\\tmedia=\\"(prefers-color-scheme: dark)\\"\\r\\n\\t\\t\\t\\tsrcset=\\"/screenshots/win11-dark.jpg\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<source\\r\\n\\t\\t\\t\\tmedia=\\"(prefers-color-scheme: light)\\"\\r\\n\\t\\t\\t\\tsrcset=\\"/screenshots/win11-light.jpg\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\talt=\\"Windows 11 wallpaper\\"\\r\\n\\t\\t\\t\\tclass=\\"files-wallpaper\\"\\r\\n\\t\\t\\t\\theight=\\"900\\"\\r\\n\\t\\t\\t\\tsrc=\\"/screenshots/win11-light.jpg\\"\\r\\n\\t\\t\\t\\twidth=\\"1440\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t</picture>\\r\\n\\t</div>\\r\\n</PageSection>\\r\\n\\r\\n<style lang=\\"scss\\">:global(#design-section .page-section-inner) {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: center;\\n  overflow: hidden;\\n}\\n\\n.design-image {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n  inline-size: 80vw;\\n  block-size: 100%;\\n  margin-block-start: 120px;\\n  text-align: center;\\n}\\n\\n.files-screenshot, .files-wallpaper {\\n  block-size: auto;\\n  user-select: none;\\n  -webkit-user-drag: none;\\n}\\n.files-screenshot {\\n  position: absolute;\\n  inset-block-start: -48px;\\n  inset-inline-end: 0;\\n  inset-inline-start: 0;\\n  z-index: 1;\\n  inline-size: 70%;\\n  max-inline-size: 1024px;\\n  margin: 0 auto;\\n  border: 1px solid var(--fds-surface-stroke-default);\\n  border-radius: calc(var(--fds-overlay-corner-radius) / 1.25);\\n  background-color: hsl(var(--mica-tint), var(--mica-tint-opacity));\\n  box-shadow: var(--fds-dialog-shadow);\\n  transition: 50ms linear transform;\\n  backdrop-filter: blur(60px) saturate(150%);\\n}\\n@media screen and (width > 2048px) {\\n  .files-screenshot {\\n    border-radius: var(--fds-overlay-corner-radius);\\n  }\\n}\\n.files-wallpaper {\\n  position: relative;\\n  inline-size: 90%;\\n  max-inline-size: 1440px;\\n  border: 1px solid var(--fds-card-stroke-default);\\n  border-radius: calc(var(--fds-overlay-corner-radius) * 1.5);\\n}\\n\\n@media screen and (width < 1024px) {\\n  .design-image,\\n.files-wallpaper {\\n    inline-size: 100%;\\n  }\\n  .files-screenshot {\\n    inset-block-start: 0;\\n  }\\n}\\n@media screen and (width < 768px) {\\n  .design-image {\\n    margin-block-start: 48px;\\n  }\\n  .files-screenshot {\\n    inset-block-start: 32px;\\n    inset-inline-start: -2.5%;\\n    inline-size: 105%;\\n    transform: none !important;\\n  }\\n  .files-wallpaper {\\n    inline-size: 180%;\\n    block-size: 80vw;\\n    border-radius: 0;\\n    object-fit: cover;\\n    object-position: bottom;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"AA2D2B,mCAAqC,CAC9D,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,MACZ,CAEA,2BAAc,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,kBAAkB,CAAE,KAAK,CACzB,UAAU,CAAE,MACd,CAEA,+BAAiB,CAAE,8BAAiB,CAClC,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,CACjB,iBAAiB,CAAE,IACrB,CACA,+BAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,iBAAiB,CAAE,KAAK,CACxB,gBAAgB,CAAE,CAAC,CACnB,kBAAkB,CAAE,CAAC,CACrB,OAAO,CAAE,CAAC,CACV,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,4BAA4B,CAAC,CACnD,aAAa,CAAE,KAAK,IAAI,2BAA2B,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5D,gBAAgB,CAAE,IAAI,IAAI,WAAW,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC,CACjE,UAAU,CAAE,IAAI,mBAAmB,CAAC,CACpC,UAAU,CAAE,IAAI,CAAC,MAAM,CAAC,SAAS,CACjC,eAAe,CAAE,KAAK,IAAI,CAAC,CAAC,SAAS,IAAI,CAC3C,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,MAAM,CAAE,CACjC,+BAAkB,CAChB,aAAa,CAAE,IAAI,2BAA2B,CAChD,CACF,CACA,8BAAiB,CACf,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,yBAAyB,CAAC,CAChD,aAAa,CAAE,KAAK,IAAI,2BAA2B,CAAC,CAAC,CAAC,CAAC,GAAG,CAC5D,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,MAAM,CAAE,CACjC,2BAAa,CACf,8BAAiB,CACb,WAAW,CAAE,IACf,CACA,+BAAkB,CAChB,iBAAiB,CAAE,CACrB,CACF,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,KAAK,CAAE,CAChC,2BAAc,CACZ,kBAAkB,CAAE,IACtB,CACA,+BAAkB,CAChB,iBAAiB,CAAE,IAAI,CACvB,kBAAkB,CAAE,KAAK,CACzB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,CAAC,UAClB,CACA,8BAAiB,CACf,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,CAAC,CAChB,UAAU,CAAE,KAAK,CACjB,eAAe,CAAE,MACnB,CACF"}',
};
const DesignSection = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $_, $$unsubscribe__;
		$$unsubscribe__ = subscribe($format, value => ($_ = value));
		let scrollPositionY;
		$$result.css.add(css$3);
		$$unsubscribe__();
		return ` ${validate_component(PageSection, "PageSection").$$render(
			$$result,
			{ id: "design-section" },
			{},
			{
				default: () => {
					return `${validate_component(HeaderChip, "HeaderChip").$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${escape($_("home.design.chip", defaultI18nValues))}`;
							},
						},
					)} <h2>${escape($_("home.design.title", defaultI18nValues))}</h2> <p>${escape($_("home.design.description", defaultI18nValues))}</p> <div class="buttons-spacer">${validate_component(
						Button,
						"Button",
					).$$render(
						$$result,
						{ href: "/download/", variant: "accent" },
						{},
						{
							default: () => {
								return `${escape($_("home.design.download", defaultI18nValues))}`;
							},
						},
					)} ${validate_component(Button, "Button").$$render(
						$$result,
						{ variant: "hyperlink", href: "/docs/" },
						{},
						{
							default: () => {
								return `${escape($_("home.design.learn_more", defaultI18nValues))}`;
							},
						},
					)}</div> <div class="design-image svelte-eia2lf"><picture><source media="(prefers-color-scheme: dark)" srcset="/screenshots/folder-list-dark.png"> <source media="(prefers-color-scheme: light)" srcset="/screenshots/folder-list-light.png"> <img alt="Files folder list screenshot" class="files-screenshot svelte-eia2lf" height="768" src="/screenshots/folder-list-light.png" width="1024"${add_styles(
						{
							transform: `translateY(${Math.floor(scrollPositionY / 20)}px)`,
						},
					)}></picture> <picture data-svelte-h="svelte-v0w8cn"><source media="(prefers-color-scheme: dark)" srcset="/screenshots/win11-dark.jpg"> <source media="(prefers-color-scheme: light)" srcset="/screenshots/win11-light.jpg"> <img alt="Windows 11 wallpaper" class="files-wallpaper svelte-eia2lf" height="900" src="/screenshots/win11-light.jpg" width="1440"></picture></div>`;
				},
			},
		)}`;
	},
);
const Cloud_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 5.5a4.5 4.5 0 0 0-4.495 4.285a.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h11a3 3 0 1 0 0-6h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 5.5M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Eye_20_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 20 20" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M3.26 11.602C3.942 8.327 6.793 6 10 6s6.057 2.327 6.74 5.602a.5.5 0 0 0 .98-.204C16.943 7.673 13.693 5 10 5s-6.943 2.673-7.72 6.398a.5.5 0 0 0 .98.204M10 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-2.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Folder_zip_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M3.5 8V6.25c0-.966.784-1.75 1.75-1.75h2.879a.75.75 0 0 1 .53.22l1.53 1.53l-1.53 1.53a.75.75 0 0 1-.53.22zm1.75-5A3.25 3.25 0 0 0 2 6.25v11.5A3.25 3.25 0 0 0 5.25 21h13.5A3.25 3.25 0 0 0 22 17.75v-9a3.25 3.25 0 0 0-3.25-3.25h-7.19L9.72 3.659A2.25 2.25 0 0 0 8.129 3zm8.25 4v3.25c0 .414.336.75.75.75H15v2h-.25a.75.75 0 0 0 0 1.5H15V16h-.25a.75.75 0 0 0 0 1.5H15v2H5.25a1.75 1.75 0 0 1-1.75-1.75V9.5h4.629a2.25 2.25 0 0 0 1.59-.659L11.562 7zm3 12.5V16h.25a.75.75 0 0 0 0-1.5h-.25V11h.75a.75.75 0 0 0 .75-.75V7h.75c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75zm0-12.5v2.5H15V7z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Panel_left_28_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 28 28" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M5.754 4a3.75 3.75 0 0 0-3.75 3.75v11.5A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H9v16H5.754a2.25 2.25 0 0 1-2.25-2.25zM10.5 21.5v-16h11.75a2.25 2.25 0 0 1 2.25 2.25v11.5a2.25 2.25 0 0 1-2.25 2.25z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Tab_desktop_20_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 20 20" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M2.997 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5zm13 .5v-.5a1.5 1.5 0 0 0-1.5-1.5h-5.5v1.5a.5.5 0 0 0 .5.5zm-8-2h-2.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7h-6.5a1.5 1.5 0 0 1-1.5-1.5z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Tag_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-8.5 8.503a3.255 3.255 0 0 1-4.597.001L3.489 16.06a3.25 3.25 0 0 1-.004-4.596l8.5-8.51a3.25 3.25 0 0 1 2.3-.953zm0 1.5h-5.466c-.464 0-.91.185-1.238.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0l8.5-8.503a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75M17 5.502a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Branch_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M4 5.5a3.5 3.5 0 1 1 4.489 3.358a5.5 5.5 0 0 0 5.261 3.892h.33a3.501 3.501 0 0 1 6.92.75a3.5 3.5 0 0 1-6.92.75h-.33a6.99 6.99 0 0 1-5.5-2.67v3.5A3.501 3.501 0 0 1 7.5 22a3.5 3.5 0 0 1-.75-6.92V8.92A3.5 3.5 0 0 1 4 5.5m3.5-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 13a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8-3a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Number_symbol_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M10.987 2.89a.75.75 0 1 0-1.474-.28L8.494 7.999L3.75 8a.75.75 0 1 0 0 1.5l4.46-.002l-.946 5l-4.514.002a.75.75 0 0 0 0 1.5l4.23-.002l-.967 5.116a.75.75 0 1 0 1.474.278l1.02-5.395l5.474-.002l-.968 5.119a.75.75 0 1 0 1.474.278l1.021-5.398l4.742-.002a.75.75 0 1 0 0-1.5l-4.458.002l.946-5l4.512-.002a.75.75 0 1 0 0-1.5l-4.229.002l.966-5.104a.75.75 0 0 0-1.474-.28l-1.018 5.385l-5.474.002zm-1.25 6.608l5.474-.003l-.946 5l-5.474.002z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Diamond_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M2.659 13.593a2.25 2.25 0 0 1 0-3.182l7.752-7.752a2.25 2.25 0 0 1 3.182 0l7.751 7.752a2.25 2.25 0 0 1 0 3.182l-7.751 7.751a2.25 2.25 0 0 1-3.182 0zm1.06-2.122a.75.75 0 0 0 0 1.06l7.752 7.753a.75.75 0 0 0 1.06 0l7.753-7.752a.75.75 0 0 0 0-1.06L12.532 3.72a.75.75 0 0 0-1.06 0z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Panel_right_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M22 7.25A3.25 3.25 0 0 0 18.75 4H5.25A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75zM14.5 5.5v13H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75zm1.5 0h2.75c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H16z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Keyboard_24_regular = create_ssr_component(
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
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M19.745 5a2.25 2.25 0 0 1 2.25 2.25v9.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 16.755V7.25A2.25 2.25 0 0 1 4.25 5zm0 1.5H4.25a.75.75 0 0 0-.75.75v9.505c0 .414.336.75.75.75h15.495a.75.75 0 0 0 .75-.75V7.25a.75.75 0 0 0-.75-.75m-12.995 8h10.5a.75.75 0 0 1 .102 1.493L17.25 16H6.75a.75.75 0 0 1-.102-1.493zh10.5zM16.5 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-5.995 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M6 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2m2.995 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const css$2 = {
	code: "#features-section{background-color:var(--fds-solid-background-base)}#features-section .page-section-inner{display:grid;grid-template-columns:repeat(auto-fill, 1fr);gap:48px}.feature-cards-container.svelte-1mm33zu{--column-count:3;display:grid;grid-template-columns:repeat(var(--column-count), 1fr);gap:8px}@media screen and (width < 1164px){.feature-cards-container.svelte-1mm33zu{grid-template-columns:auto}}@media screen and (width < 924px){#features-section .page-section-inner{grid-template-columns:auto}}",
	map: '{"version":3,"file":"FeaturesSection.svelte","sources":["FeaturesSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { _ } from \\"svelte-i18n\\";\\nimport { defaultI18nValues, entries, FeatureCard, HeaderChip, PageSection, } from \\"$lib\\";\\nimport Cloud from \\"~icons/fluent/cloud-24-regular\\";\\nimport EyeVisible from \\"~icons/fluent/eye-20-regular\\";\\nimport Archive from \\"~icons/fluent/folder-zip-24-regular\\";\\nimport Columns from \\"~icons/fluent/panel-left-28-regular\\";\\nimport TabDesktop from \\"~icons/fluent/tab-desktop-20-regular\\";\\nimport Tag from \\"~icons/fluent/tag-24-regular\\";\\nimport Branch from \\"~icons/fluent/branch-24-regular\\";\\nimport Hash from \\"~icons/fluent/number-symbol-24-regular\\";\\nimport Diamond from \\"~icons/fluent/diamond-24-regular\\";\\nimport PanelRight from \\"~icons/fluent/panel-right-24-regular\\";\\nimport Keyboard from \\"~icons/fluent/Keyboard-24-regular\\";\\nexport const featureCards = {\\n    tabs: {\\n        title: $_(\\"home.features.tabs.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.tabs.description\\", defaultI18nValues),\\n        icon: TabDesktop,\\n    },\\n    dualPane: {\\n        title: $_(\\"home.features.dual-pane.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.dual-pane.description\\", defaultI18nValues),\\n        icon: PanelRight,\\n    },\\n    tags: {\\n        title: $_(\\"home.features.tags.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.tags.description\\", defaultI18nValues),\\n        icon: Tag,\\n    },\\n    columns: {\\n        title: $_(\\"home.features.columns.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.columns.description\\", defaultI18nValues),\\n        icon: Columns,\\n    },\\n    archives: {\\n        title: $_(\\"home.features.archives.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.archives.description\\", defaultI18nValues),\\n        icon: Archive,\\n    },\\n    cloud: {\\n        title: $_(\\"home.features.cloud.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.cloud.description\\", defaultI18nValues),\\n        icon: Cloud,\\n    },\\n    preview: {\\n        title: $_(\\"home.features.preview.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.preview.description\\", defaultI18nValues),\\n        icon: PanelRight,\\n    },\\n    popupPreview: {\\n        title: $_(\\"home.features.popup-preview.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.popup-preview.description\\", defaultI18nValues),\\n        icon: EyeVisible,\\n    },\\n    git: {\\n        title: $_(\\"home.features.git.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.git.description\\", defaultI18nValues),\\n        icon: Branch,\\n    },\\n    hashes: {\\n        title: $_(\\"home.features.hashes.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.hashes.description\\", defaultI18nValues),\\n        icon: Hash,\\n    },\\n    command: {\\n        title: $_(\\"home.features.command-palette.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.command-palette.description\\", defaultI18nValues),\\n        icon: Diamond,\\n    },\\n    keyboard: {\\n        title: $_(\\"home.features.remap-key-bindings.title\\", defaultI18nValues),\\n        description: $_(\\"home.features.remap-key-bindings.description\\", defaultI18nValues),\\n        icon: Keyboard,\\n    },\\n};\\n</script>\\r\\n\\r\\n<PageSection id=\\"features-section\\">\\r\\n\\t<div class=\\"features-section-right\\">\\r\\n\\t\\t<HeaderChip>{$_(\\"home.features.chip\\")}</HeaderChip>\\r\\n\\t\\t<h2>{$_(\\"home.features.title\\")}</h2>\\r\\n\\t\\t<p>{$_(\\"home.features.description\\", defaultI18nValues)}</p>\\r\\n\\t\\t<hr />\\r\\n\\t\\t<div class=\\"feature-cards-container\\">\\r\\n\\t\\t\\t{#each entries(featureCards) as [id, feature] (id)}\\r\\n\\t\\t\\t\\t<FeatureCard description={feature.description}>\\r\\n\\t\\t\\t\\t\\t<svelte:component this={feature.icon} slot=\\"icon\\" />\\r\\n\\t\\t\\t\\t\\t{feature.title}\\r\\n\\t\\t\\t\\t</FeatureCard>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</PageSection>\\r\\n\\r\\n<style lang=\\"scss\\">:global(#features-section) {\\n  background-color: var(--fds-solid-background-base);\\n}\\n:global(#features-section) :global(.page-section-inner) {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, 1fr);\\n  gap: 48px;\\n}\\n\\n.feature-cards-container {\\n  --column-count: 3;\\n  display: grid;\\n  grid-template-columns: repeat(var(--column-count), 1fr);\\n  gap: 8px;\\n}\\n@media screen and (width < 1164px) {\\n  .feature-cards-container {\\n    grid-template-columns: auto;\\n  }\\n}\\n\\n@media screen and (width < 924px) {\\n  :global(#features-section .page-section-inner) {\\n    grid-template-columns: auto;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"AA8F2B,iBAAmB,CAC5C,gBAAgB,CAAE,IAAI,2BAA2B,CACnD,CACQ,iBAAkB,CAAS,mBAAqB,CACtD,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,GAAG,CAAC,CAC7C,GAAG,CAAE,IACP,CAEA,uCAAyB,CACvB,cAAc,CAAE,CAAC,CACjB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,IAAI,cAAc,CAAC,CAAC,CAAC,GAAG,CAAC,CACvD,GAAG,CAAE,GACP,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,MAAM,CAAE,CACjC,uCAAyB,CACvB,qBAAqB,CAAE,IACzB,CACF,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,KAAK,CAAE,CACxB,qCAAuC,CAC7C,qBAAqB,CAAE,IACzB,CACF"}',
};
const FeaturesSection = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $_, $$unsubscribe__;
		$$unsubscribe__ = subscribe($format, value => ($_ = value));
		const featureCards = {
			tabs: {
				title: $_("home.features.tabs.title", defaultI18nValues),
				description: $_("home.features.tabs.description", defaultI18nValues),
				icon: Tab_desktop_20_regular,
			},
			dualPane: {
				title: $_("home.features.dual-pane.title", defaultI18nValues),
				description: $_(
					"home.features.dual-pane.description",
					defaultI18nValues,
				),
				icon: Panel_right_24_regular,
			},
			tags: {
				title: $_("home.features.tags.title", defaultI18nValues),
				description: $_("home.features.tags.description", defaultI18nValues),
				icon: Tag_24_regular,
			},
			columns: {
				title: $_("home.features.columns.title", defaultI18nValues),
				description: $_("home.features.columns.description", defaultI18nValues),
				icon: Panel_left_28_regular,
			},
			archives: {
				title: $_("home.features.archives.title", defaultI18nValues),
				description: $_(
					"home.features.archives.description",
					defaultI18nValues,
				),
				icon: Folder_zip_24_regular,
			},
			cloud: {
				title: $_("home.features.cloud.title", defaultI18nValues),
				description: $_("home.features.cloud.description", defaultI18nValues),
				icon: Cloud_24_regular,
			},
			preview: {
				title: $_("home.features.preview.title", defaultI18nValues),
				description: $_("home.features.preview.description", defaultI18nValues),
				icon: Panel_right_24_regular,
			},
			popupPreview: {
				title: $_("home.features.popup-preview.title", defaultI18nValues),
				description: $_(
					"home.features.popup-preview.description",
					defaultI18nValues,
				),
				icon: Eye_20_regular,
			},
			git: {
				title: $_("home.features.git.title", defaultI18nValues),
				description: $_("home.features.git.description", defaultI18nValues),
				icon: Branch_24_regular,
			},
			hashes: {
				title: $_("home.features.hashes.title", defaultI18nValues),
				description: $_("home.features.hashes.description", defaultI18nValues),
				icon: Number_symbol_24_regular,
			},
			command: {
				title: $_("home.features.command-palette.title", defaultI18nValues),
				description: $_(
					"home.features.command-palette.description",
					defaultI18nValues,
				),
				icon: Diamond_24_regular,
			},
			keyboard: {
				title: $_("home.features.remap-key-bindings.title", defaultI18nValues),
				description: $_(
					"home.features.remap-key-bindings.description",
					defaultI18nValues,
				),
				icon: Keyboard_24_regular,
			},
		};
		if (
			$$props.featureCards === void 0 &&
			$$bindings.featureCards &&
			featureCards !== void 0
		)
			$$bindings.featureCards(featureCards);
		$$result.css.add(css$2);
		$$unsubscribe__();
		return `${validate_component(PageSection, "PageSection").$$render(
			$$result,
			{ id: "features-section" },
			{},
			{
				default: () => {
					return `<div class="features-section-right">${validate_component(
						HeaderChip,
						"HeaderChip",
					).$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${escape($_("home.features.chip"))}`;
							},
						},
					)} <h2>${escape($_("home.features.title"))}</h2> <p>${escape($_("home.features.description", defaultI18nValues))}</p> <hr> <div class="feature-cards-container svelte-1mm33zu">${each(
						entries(featureCards),
						([id, feature]) => {
							return `${validate_component(FeatureCard, "FeatureCard").$$render(
								$$result,
								{ description: feature.description },
								{},
								{
									icon: () => {
										return `${validate_component(feature.icon || missing_component, "svelte:component").$$render($$result, { slot: "icon" }, {}, {})}`;
									},
									default: () => {
										return `${escape(feature.title)} `;
									},
								},
							)}`;
						},
					)}</div></div>`;
				},
			},
		)}`;
	},
);
const css$1 = {
	code: `#themes-section{border-radius:0 0 var(--fds-overlay-corner-radius) var(--fds-overlay-corner-radius);background-color:var(--fds-card-background-secondary);overflow:hidden;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}#themes-section .page-section-inner{display:flex;align-items:center;min-block-size:600px}#themes-section::before{content:"";position:absolute;inset-block-start:-50%;inset-inline-start:-50%;inline-size:200vw;block-size:200vw;background-image:linear-gradient(90deg, transparent 10%, var(--dots-color, var(--fds-control-stroke-secondary)) 100%);transform:rotate(30deg);mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='10' fill='%23000' /%3E%3C/svg%3E") center/18px}#themes-section:not(.theme-1){background-color:var(--fds-solid-background-base);--dots-color:var(--fds-subtle-fill-tertiary)}#themes-section:not(.theme-1) ::selection{background-color:var(--fds-accent-default)}#themes-section.theme-2{--fds-focus-stroke-outer:white;--fds-accent-default:hsl(160, 58%, 52%);--fds-accent-secondary:hsl(160, 47%, 62%);--fds-accent-tertiary:hsl(160, 50%, 40%);--fds-accent-text-primary:var(--fds-accent-default);--fds-accent-text-tertiary:var(--fds-accent-secondary);--fds-text-primary:var(--fds-accent-default);--fds-text-tertiary:hsl(221, 16%, 70%);--fds-text-secondary:hsl(221, 16%, 70%);--fds-subtle-fill-secondary:hsl(222, 16%, 25%);--fds-subtle-fill-tertiary:hsl(220, 16%, 22%);--fds-solid-background-base:hsl(220, 15%, 20%);--fds-solid-background-quarternary:var(--fds-subtle-fill-secondary);--dots-color:hsl(221, 16%, 30%)}#themes-section.theme-3{--fds-focus-stroke-outer:white;--fds-accent-default:hsl(261, 43%, 45%);--fds-accent-secondary:hsl(260, 44%, 55%);--fds-accent-tertiary:var(--fds-accent-secondary);--fds-accent-text-primary:var(--fds-text-tertiary);--fds-accent-text-tertiary:var(--fds-accent-secondary);--fds-text-on-accent-primary:white;--fds-text-on-accent-secondary:hsl(white, 0.6);--fds-text-primary:white;--fds-text-secondary:hsl(260, 43%, 73%);--fds-text-tertiary:var(--fds-text-secondary);--fds-subtle-fill-secondary:hsl(253, 27%, 20%);--fds-subtle-fill-tertiary:hsl(253, 24%, 15%);--fds-solid-background-base:hsl(256, 22%, 10%);--fds-solid-background-quarternary:var(--fds-subtle-fill-tertiary);--dots-color:hsl(253, 27%, 20%)}#themes-section.theme-4{--fds-focus-stroke-outer:black;--fds-accent-default:white;--fds-accent-secondary:hsl(0, 0%, 100%, 0.8);--fds-accent-tertiary:hsl(0, 0%, 100%, 0.6);--fds-accent-text-primary:var(--fds-text-tertiary);--fds-accent-text-tertiary:var(--fds-accent-text-primary);--fds-text-on-accent-primary:black;--fds-text-on-accent-secondary:var(--fds-text-on-accent-primary);--fds-text-primary:black;--fds-text-tertiary:hsl(44, 100%, 10%);--fds-text-secondary:var(--fds-text-primary);--fds-subtle-fill-secondary:white;--fds-subtle-fill-tertiary:hsl(black, 0.1);--fds-solid-background-base:hsl(43, 100%, 50%);--fds-solid-background-quarternary:hsl(43, 100%, 75%);--dots-color:hsl(0, 0%, 0%, 0.2)}#themes-section.theme-4 .hyperlink-button{--fds-subtle-fill-secondary:hsl(0, 0%, 0%, 0.05)}#themes-section.theme-5{--fds-focus-stroke-outer:white;--fds-accent-default:hsl(46, 42%, 88%);--fds-accent-secondary:hsl(44, 87%, 94%);--fds-accent-tertiary:hsl(46, 40%, 85%);--fds-accent-text-primary:var(--fds-text-tertiary);--fds-accent-text-tertiary:var(--fds-accent-secondary);--fds-text-on-accent-primary:hsl(194, 14%, 40%);--fds-text-on-accent-secondary:hsl(196, 13%, 45%);--fds-text-primary:hsl(44, 87%, 94%);--fds-text-tertiary:hsl(180, 7%, 60%);--fds-text-secondary:hsl(186, 8%, 55%);--fds-subtle-fill-secondary:hsl(192, 81%, 14%);--fds-subtle-fill-tertiary:hsl(192, 79%, 15%);--fds-solid-background-base:hsl(192, 100%, 11%);--fds-solid-background-quarternary:var(--fds-accent-secondary);--dots-color:var(--fds-subtle-fill-tertiary)}#themes-section.theme-6{--fds-focus-stroke-outer:black;--fds-accent-default:hsl(193, 43%, 67%);--fds-accent-secondary:hsl(193, 43%, 63%);--fds-accent-tertiary:hsl(193, 43%, 59%);--fds-accent-text-primary:var(--fds-text-tertiary);--fds-accent-text-tertiary:var(--fds-text-secondary);--fds-text-on-accent-primary:var(--fds-text-primary);--fds-text-on-accent-secondary:var(--fds-text-tertiary);--fds-text-primary:hsl(220, 16%, 22%);--fds-text-secondary:var(--fds-text-primary);--fds-text-tertiary:hsl(220, 16%, 36%);--fds-subtle-fill-secondary:var(--fds-accent-default);--fds-subtle-fill-tertiary:hsl(219, 27%, 80%);--fds-solid-background-base:hsl(219, 28%, 88%);--fds-solid-background-quarternary:hsl(222, 16%, 28%);--dots-color:hsl(220, 16%, 65%)}#themes-section.theme-6 .hyperlink-button{--fds-subtle-fill-secondary:hsl(217, 27%, 85%)}#themes-section .buttons-spacer .button.style-hyperlink{color:var(--fds-accent-text-primary)}.scroll-anchor.svelte-1e47rly.svelte-1e47rly.svelte-1e47rly{position:absolute;inset-block-start:0;inset-inline-start:0;visibility:hidden;inline-size:0;block-size:100%;pointer-events:none}.component-showcase.svelte-1e47rly.svelte-1e47rly.svelte-1e47rly{display:flex;gap:16px;position:absolute;inset-block-start:-100px;inset-inline-end:-100px;transform:rotate(30deg)}@media(width < 1224px){.component-showcase.svelte-1e47rly.svelte-1e47rly.svelte-1e47rly{inset-block-start:-100px;inset-inline-end:-156px}}@media(width < 920px){.component-showcase.svelte-1e47rly.svelte-1e47rly.svelte-1e47rly{display:none}}.component-showcase.svelte-1e47rly .column.svelte-1e47rly.svelte-1e47rly{display:flex;flex-direction:column;gap:16px}.component-showcase.svelte-1e47rly .column.svelte-1e47rly>div.svelte-1e47rly{display:flex;gap:16px}.component-showcase.svelte-1e47rly .column.left.svelte-1e47rly.svelte-1e47rly{align-items:flex-end}@media screen and (width < 1224px){.component-showcase.svelte-1e47rly .column .drive.svelte-1e47rly.svelte-1e47rly,.component-showcase.svelte-1e47rly .column .properties.svelte-1e47rly.svelte-1e47rly{display:none}.component-showcase.svelte-1e47rly .column .card.svelte-1e47rly.svelte-1e47rly{order:-1}}.component-showcase.svelte-1e47rly img.svelte-1e47rly.svelte-1e47rly,.component-showcase.svelte-1e47rly .card.svelte-1e47rly.svelte-1e47rly{border-radius:var(--fds-overlay-corner-radius);box-shadow:var(--fds-flyout-shadow);transform:scale(0.9);opacity:0}.component-showcase.svelte-1e47rly .card.svelte-1e47rly.svelte-1e47rly{inline-size:100%;background-color:var(--fds-solid-background-quarternary)}@keyframes svelte-1e47rly-showcase-item{0%{opacity:0}50%{opacity:1}100%{transform:scale(1);opacity:1}}.component-showcase.visible.svelte-1e47rly.svelte-1e47rly.svelte-1e47rly{--initial-delay:300ms}.component-showcase.visible.svelte-1e47rly img.svelte-1e47rly.svelte-1e47rly,.component-showcase.visible.svelte-1e47rly .card.svelte-1e47rly.svelte-1e47rly{animation:svelte-1e47rly-showcase-item var(--fds-control-normal-duration) var(--fds-control-fast-out-slow-in-easing) forwards var(--initial-delay)}.component-showcase.visible.svelte-1e47rly .layout.svelte-1e47rly.svelte-1e47rly{animation-delay:calc(var(--initial-delay) + 200ms)}.component-showcase.visible.svelte-1e47rly .card.svelte-1e47rly.svelte-1e47rly:last-child{animation-delay:calc(var(--initial-delay) + 275ms)}.component-showcase.visible.svelte-1e47rly .card.svelte-1e47rly.svelte-1e47rly:first-child{animation-delay:calc(var(--initial-delay) + 350ms)}.component-showcase.visible.svelte-1e47rly .properties.svelte-1e47rly.svelte-1e47rly{animation-delay:calc(var(--initial-delay) + 425ms)}.component-showcase.visible.svelte-1e47rly .tabs.svelte-1e47rly.svelte-1e47rly{animation-delay:calc(var(--initial-delay) + 500ms)}.component-showcase.visible.svelte-1e47rly .drive.svelte-1e47rly.svelte-1e47rly{animation-delay:calc(var(--initial-delay) + 575ms)}.themes-section-content.svelte-1e47rly.svelte-1e47rly.svelte-1e47rly{display:flex;flex-direction:column;align-items:start;inline-size:52%;min-inline-size:478px}.themes-section-content.svelte-1e47rly p.svelte-1e47rly.svelte-1e47rly{color:var(--fds-text-tertiary)}.themes-section-content.svelte-1e47rly h2{color:var(--fds-text-primary);font-size:5rem}@media screen and (width < 832px){.themes-section-content.svelte-1e47rly.svelte-1e47rly.svelte-1e47rly{inline-size:100%;min-inline-size:unset}}.theme-chooser.svelte-1e47rly.svelte-1e47rly.svelte-1e47rly{display:grid;grid-template-columns:auto auto auto;gap:12px;inline-size:fit-content;margin-block-end:24px}`,
	map: `{"version":3,"file":"ThemesSection.svelte","sources":["ThemesSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { ColorSwatch, defaultI18nValues, HeaderChip, PageSection, } from \\"$lib\\";\\nimport { Button, TextBlock } from \\"fluent-svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { error } from \\"@sveltejs/kit\\";\\nlet systemTheme = \\"light\\";\\nlet currentTheme = 0;\\nlet scrollPositionY = 0;\\nlet innerHeight = 0;\\nlet visible = true;\\nlet noInitialDelay = false;\\nlet anchor;\\nconst themeColors = [\\n    {\\n        name: $_(\\"home.themes.grey_blue\\", defaultI18nValues),\\n        color: \\"var(--fds-solid-background-tertiary)\\",\\n    },\\n    {\\n        name: $_(\\"home.themes.grey_green\\", defaultI18nValues),\\n        color: \\"hsl(219, 15%, 30%)\\",\\n    },\\n    {\\n        name: $_(\\"home.themes.purple\\", defaultI18nValues),\\n        color: \\"hsl(261, 43%, 45%)\\",\\n    },\\n    {\\n        name: $_(\\"home.themes.yellow_white\\", defaultI18nValues),\\n        color: \\"hsl(43, 100%, 50%)\\",\\n    },\\n    {\\n        name: $_(\\"home.themes.white_teal\\", defaultI18nValues),\\n        color: \\"hsl(192, 81%, 14%)\\",\\n    },\\n    {\\n        name: $_(\\"home.themes.sky_blue\\", defaultI18nValues),\\n        color: \\"hsl(193, 43%, 67%)\\",\\n    },\\n];\\n$: themeSrc = currentTheme > 0 ? \`theme-\${currentTheme + 1}\` : systemTheme;\\n// Essentially determines if the user has seen the top 1/4th of the themes section or not\\n$: if (anchor &&\\n    anchor.getBoundingClientRect().top +\\n        anchor.offsetHeight / 4 +\\n        scrollPositionY <\\n        scrollPositionY + innerHeight)\\n    visible = true;\\nonMount(() => {\\n    const handleThemeChange = (e) => {\\n        systemTheme = e.matches ? \\"dark\\" : \\"light\\";\\n    };\\n    visible = false; // We want SSR to have these visible by default, so we'll just do this.\\n    systemTheme = window?.matchMedia(\\"(prefers-color-scheme: dark)\\")?.matches\\n        ? \\"dark\\"\\n        : \\"light\\";\\n    window\\n        .matchMedia(\\"(prefers-color-scheme: dark)\\")\\n        .addEventListener(\\"change\\", handleThemeChange);\\n    return () => window\\n        .matchMedia(\\"(prefers-color-scheme: dark)\\")\\n        .removeEventListener(\\"change\\", handleThemeChange);\\n});\\n<\/script>\\r\\n\\r\\n<svelte:window bind:innerHeight />\\r\\n<svelte:body on:scroll={() => (scrollPositionY = document.body.scrollTop)} />\\r\\n\\r\\n<PageSection class=\\"theme-{currentTheme + 1}\\" id=\\"themes-section\\">\\r\\n\\t<div bind:this={anchor} class=\\"scroll-anchor\\" />\\r\\n\\t<div class=\\"themes-section-content\\">\\r\\n\\t\\t<HeaderChip>{$_(\\"home.themes.chip\\", defaultI18nValues)}</HeaderChip>\\r\\n\\t\\t<TextBlock variant=\\"titleLarge\\"\\r\\n\\t\\t\\t>{$_(\\"home.themes.title\\", defaultI18nValues)}</TextBlock\\r\\n\\t\\t>\\r\\n\\t\\t<p>{$_(\\"home.themes.description\\", defaultI18nValues)}</p>\\r\\n\\t\\t<div class=\\"theme-chooser\\">\\r\\n\\t\\t\\t{#each themeColors as color, i}\\r\\n\\t\\t\\t\\t<ColorSwatch\\r\\n\\t\\t\\t\\t\\tbind:group={currentTheme}\\r\\n\\t\\t\\t\\t\\tvalue={i}\\r\\n\\t\\t\\t\\t\\tcolorName={color}\\r\\n\\t\\t\\t\\t\\taria-label={$_(\\"home.themes.select_theme\\", {\\r\\n\\t\\t\\t\\t\\t\\tvalues: { index: i + 1 },\\r\\n\\t\\t\\t\\t\\t})}\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"buttons-spacer\\">\\r\\n\\t\\t\\t<Button href=\\"/docs/customize-settings/appearance/\\" variant=\\"accent\\">\\r\\n\\t\\t\\t\\t{$_(\\"home.design.learn_more\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\t<div\\r\\n\\t\\tclass=\\"component-showcase\\"\\r\\n\\t\\tclass:no-initial-delay={noInitialDelay}\\r\\n\\t\\tclass:visible\\r\\n\\t>\\r\\n\\t\\t<div class=\\"column left\\">\\r\\n\\t\\t\\t<div class=\\"card\\" style:block-size=\\"72px\\" />\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\talt=\\"Properties dialog\\"\\r\\n\\t\\t\\t\\tclass=\\"properties\\"\\r\\n\\t\\t\\t\\theight=\\"583\\"\\r\\n\\t\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t\\t\\tsrc=\\"/ui/exported/properties-{themeSrc}.svg\\"\\r\\n\\t\\t\\t\\twidth=\\"413\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\talt=\\"Drive button\\"\\r\\n\\t\\t\\t\\t\\tclass=\\"drive\\"\\r\\n\\t\\t\\t\\t\\theight=\\"280\\"\\r\\n\\t\\t\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t\\t\\t\\tsrc=\\"/ui/exported/drive-{themeSrc}.svg\\"\\r\\n\\t\\t\\t\\t\\twidth=\\"88\\"\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\talt=\\"Tabs flyout\\"\\r\\n\\t\\t\\t\\t\\tclass=\\"tabs\\"\\r\\n\\t\\t\\t\\t\\theight=\\"233\\"\\r\\n\\t\\t\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t\\t\\t\\tsrc=\\"/ui/exported/tabs-{themeSrc}.svg\\"\\r\\n\\t\\t\\t\\t\\twidth=\\"309\\"\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"column right\\">\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\talt=\\"Calendar flyout\\"\\r\\n\\t\\t\\t\\tclass=\\"calendar\\"\\r\\n\\t\\t\\t\\theight=\\"348\\"\\r\\n\\t\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t\\t\\tsrc=\\"/ui/exported/calendar-{themeSrc}.svg\\"\\r\\n\\t\\t\\t\\twidth=\\"300\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\talt=\\"Layout flyout\\"\\r\\n\\t\\t\\t\\tclass=\\"layout\\"\\r\\n\\t\\t\\t\\theight=\\"270\\"\\r\\n\\t\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t\\t\\tsrc=\\"/ui/exported/layout-{themeSrc}.svg\\"\\r\\n\\t\\t\\t\\twidth=\\"270\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<div class=\\"card\\" style:block-size=\\"128px\\" />\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</PageSection>\\r\\n\\r\\n<style lang=\\"scss\\">:global(#themes-section) {\\n  border-radius: 0 0 var(--fds-overlay-corner-radius) var(--fds-overlay-corner-radius);\\n  background-color: var(--fds-card-background-secondary);\\n  overflow: hidden;\\n  transition-property: all;\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  transition-duration: 150ms;\\n}\\n:global(#themes-section) :global(.page-section-inner) {\\n  display: flex;\\n  align-items: center;\\n  min-block-size: 600px;\\n}\\n:global(#themes-section::before) {\\n  content: \\"\\";\\n  position: absolute;\\n  inset-block-start: -50%;\\n  inset-inline-start: -50%;\\n  inline-size: 200vw;\\n  block-size: 200vw;\\n  background-image: linear-gradient(90deg, transparent 10%, var(--dots-color, var(--fds-control-stroke-secondary)) 100%);\\n  transform: rotate(30deg);\\n  mask: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='10' fill='%23000' /%3E%3C/svg%3E\\") center/18px;\\n}\\n:global(#themes-section:not(.theme-1)) {\\n  background-color: var(--fds-solid-background-base);\\n  --dots-color: var(--fds-subtle-fill-tertiary);\\n}\\n:global(#themes-section:not(.theme-1)) :global(::selection) {\\n  background-color: var(--fds-accent-default);\\n}\\n:global(#themes-section.theme-2) {\\n  --fds-focus-stroke-outer: white;\\n  --fds-accent-default: hsl(160, 58%, 52%);\\n  --fds-accent-secondary: hsl(160, 47%, 62%);\\n  --fds-accent-tertiary: hsl(160, 50%, 40%);\\n  --fds-accent-text-primary: var(--fds-accent-default);\\n  --fds-accent-text-tertiary: var(--fds-accent-secondary);\\n  --fds-text-primary: var(--fds-accent-default);\\n  --fds-text-tertiary: hsl(221, 16%, 70%);\\n  --fds-text-secondary: hsl(221, 16%, 70%);\\n  --fds-subtle-fill-secondary: hsl(222, 16%, 25%);\\n  --fds-subtle-fill-tertiary: hsl(220, 16%, 22%);\\n  --fds-solid-background-base: hsl(220, 15%, 20%);\\n  --fds-solid-background-quarternary: var(--fds-subtle-fill-secondary);\\n  --dots-color: hsl(221, 16%, 30%);\\n}\\n:global(#themes-section.theme-3) {\\n  --fds-focus-stroke-outer: white;\\n  --fds-accent-default: hsl(261, 43%, 45%);\\n  --fds-accent-secondary: hsl(260, 44%, 55%);\\n  --fds-accent-tertiary: var(--fds-accent-secondary);\\n  --fds-accent-text-primary: var(--fds-text-tertiary);\\n  --fds-accent-text-tertiary: var(--fds-accent-secondary);\\n  --fds-text-on-accent-primary: white;\\n  --fds-text-on-accent-secondary: hsl(white, 0.6);\\n  --fds-text-primary: white;\\n  --fds-text-secondary: hsl(260, 43%, 73%);\\n  --fds-text-tertiary: var(--fds-text-secondary);\\n  --fds-subtle-fill-secondary: hsl(253, 27%, 20%);\\n  --fds-subtle-fill-tertiary: hsl(253, 24%, 15%);\\n  --fds-solid-background-base: hsl(256, 22%, 10%);\\n  --fds-solid-background-quarternary: var(--fds-subtle-fill-tertiary);\\n  --dots-color: hsl(253, 27%, 20%);\\n}\\n:global(#themes-section.theme-4) {\\n  --fds-focus-stroke-outer: black;\\n  --fds-accent-default: white;\\n  --fds-accent-secondary: hsl(0, 0%, 100%, 0.8);\\n  --fds-accent-tertiary: hsl(0, 0%, 100%, 0.6);\\n  --fds-accent-text-primary: var(--fds-text-tertiary);\\n  --fds-accent-text-tertiary: var(--fds-accent-text-primary);\\n  --fds-text-on-accent-primary: black;\\n  --fds-text-on-accent-secondary: var(--fds-text-on-accent-primary);\\n  --fds-text-primary: black;\\n  --fds-text-tertiary: hsl(44, 100%, 10%);\\n  --fds-text-secondary: var(--fds-text-primary);\\n  --fds-subtle-fill-secondary: white;\\n  --fds-subtle-fill-tertiary: hsl(black, 0.1);\\n  --fds-solid-background-base: hsl(43, 100%, 50%);\\n  --fds-solid-background-quarternary: hsl(43, 100%, 75%);\\n  --dots-color: hsl(0, 0%, 0%, 0.2);\\n}\\n:global(#themes-section.theme-4) :global(.hyperlink-button) {\\n  --fds-subtle-fill-secondary: hsl(0, 0%, 0%, 0.05);\\n}\\n:global(#themes-section.theme-5) {\\n  --fds-focus-stroke-outer: white;\\n  --fds-accent-default: hsl(46, 42%, 88%);\\n  --fds-accent-secondary: hsl(44, 87%, 94%);\\n  --fds-accent-tertiary: hsl(46, 40%, 85%);\\n  --fds-accent-text-primary: var(--fds-text-tertiary);\\n  --fds-accent-text-tertiary: var(--fds-accent-secondary);\\n  --fds-text-on-accent-primary: hsl(194, 14%, 40%);\\n  --fds-text-on-accent-secondary: hsl(196, 13%, 45%);\\n  --fds-text-primary: hsl(44, 87%, 94%);\\n  --fds-text-tertiary: hsl(180, 7%, 60%);\\n  --fds-text-secondary: hsl(186, 8%, 55%);\\n  --fds-subtle-fill-secondary: hsl(192, 81%, 14%);\\n  --fds-subtle-fill-tertiary: hsl(192, 79%, 15%);\\n  --fds-solid-background-base: hsl(192, 100%, 11%);\\n  --fds-solid-background-quarternary: var(--fds-accent-secondary);\\n  --dots-color: var(--fds-subtle-fill-tertiary);\\n}\\n:global(#themes-section.theme-6) {\\n  --fds-focus-stroke-outer: black;\\n  --fds-accent-default: hsl(193, 43%, 67%);\\n  --fds-accent-secondary: hsl(193, 43%, 63%);\\n  --fds-accent-tertiary: hsl(193, 43%, 59%);\\n  --fds-accent-text-primary: var(--fds-text-tertiary);\\n  --fds-accent-text-tertiary: var(--fds-text-secondary);\\n  --fds-text-on-accent-primary: var(--fds-text-primary);\\n  --fds-text-on-accent-secondary: var(--fds-text-tertiary);\\n  --fds-text-primary: hsl(220, 16%, 22%);\\n  --fds-text-secondary: var(--fds-text-primary);\\n  --fds-text-tertiary: hsl(220, 16%, 36%);\\n  --fds-subtle-fill-secondary: var(--fds-accent-default);\\n  --fds-subtle-fill-tertiary: hsl(219, 27%, 80%);\\n  --fds-solid-background-base: hsl(219, 28%, 88%);\\n  --fds-solid-background-quarternary: hsl(222, 16%, 28%);\\n  --dots-color: hsl(220, 16%, 65%);\\n}\\n:global(#themes-section.theme-6) :global(.hyperlink-button) {\\n  --fds-subtle-fill-secondary: hsl(217, 27%, 85%);\\n}\\n:global(#themes-section) :global(.buttons-spacer) :global(.button.style-hyperlink) {\\n  color: var(--fds-accent-text-primary);\\n}\\n\\n.scroll-anchor {\\n  position: absolute;\\n  inset-block-start: 0;\\n  inset-inline-start: 0;\\n  visibility: hidden;\\n  inline-size: 0;\\n  block-size: 100%;\\n  pointer-events: none;\\n}\\n\\n.component-showcase {\\n  display: flex;\\n  gap: 16px;\\n  position: absolute;\\n  inset-block-start: -100px;\\n  inset-inline-end: -100px;\\n  transform: rotate(30deg);\\n}\\n@media (width < 1224px) {\\n  .component-showcase {\\n    inset-block-start: -100px;\\n    inset-inline-end: -156px;\\n  }\\n}\\n@media (width < 920px) {\\n  .component-showcase {\\n    display: none;\\n  }\\n}\\n.component-showcase .column {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n}\\n.component-showcase .column > div {\\n  display: flex;\\n  gap: 16px;\\n}\\n.component-showcase .column.left {\\n  align-items: flex-end;\\n}\\n@media screen and (width < 1224px) {\\n  .component-showcase .column .drive,\\n.component-showcase .column .properties {\\n    display: none;\\n  }\\n  .component-showcase .column .card {\\n    order: -1;\\n  }\\n}\\n.component-showcase img,\\n.component-showcase .card {\\n  border-radius: var(--fds-overlay-corner-radius);\\n  box-shadow: var(--fds-flyout-shadow);\\n  transform: scale(0.9);\\n  opacity: 0;\\n}\\n.component-showcase .card {\\n  inline-size: 100%;\\n  background-color: var(--fds-solid-background-quarternary);\\n}\\n@keyframes showcase-item {\\n  0% {\\n    opacity: 0;\\n  }\\n  50% {\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: scale(1);\\n    opacity: 1;\\n  }\\n}\\n.component-showcase.visible {\\n  --initial-delay: 300ms;\\n}\\n.component-showcase.visible img,\\n.component-showcase.visible .card {\\n  animation: showcase-item var(--fds-control-normal-duration) var(--fds-control-fast-out-slow-in-easing) forwards var(--initial-delay);\\n}\\n.component-showcase.visible .layout {\\n  animation-delay: calc(var(--initial-delay) + 200ms);\\n}\\n.component-showcase.visible .card:last-child {\\n  animation-delay: calc(var(--initial-delay) + 275ms);\\n}\\n.component-showcase.visible .card:first-child {\\n  animation-delay: calc(var(--initial-delay) + 350ms);\\n}\\n.component-showcase.visible .properties {\\n  animation-delay: calc(var(--initial-delay) + 425ms);\\n}\\n.component-showcase.visible .tabs {\\n  animation-delay: calc(var(--initial-delay) + 500ms);\\n}\\n.component-showcase.visible .drive {\\n  animation-delay: calc(var(--initial-delay) + 575ms);\\n}\\n\\n.themes-section-content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  inline-size: 52%;\\n  min-inline-size: 478px;\\n}\\n.themes-section-content p {\\n  color: var(--fds-text-tertiary);\\n}\\n.themes-section-content :global(h2) {\\n  color: var(--fds-text-primary);\\n  font-size: 5rem;\\n}\\n@media screen and (width < 832px) {\\n  .themes-section-content {\\n    inline-size: 100%;\\n    min-inline-size: unset;\\n  }\\n}\\n\\n.theme-chooser {\\n  display: grid;\\n  grid-template-columns: auto auto auto;\\n  gap: 12px;\\n  inline-size: fit-content;\\n  margin-block-end: 24px;\\n}</style>\\r\\n"],"names":[],"mappings":"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"}`,
};
const ThemesSection = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let themeSrc;
		let $_, $$unsubscribe__;
		$$unsubscribe__ = subscribe($format, value => ($_ = value));
		let systemTheme = "light";
		let currentTheme = 0;
		let anchor;
		const themeColors = [
			{
				name: $_("home.themes.grey_blue", defaultI18nValues),
				color: "var(--fds-solid-background-tertiary)",
			},
			{
				name: $_("home.themes.grey_green", defaultI18nValues),
				color: "hsl(219, 15%, 30%)",
			},
			{
				name: $_("home.themes.purple", defaultI18nValues),
				color: "hsl(261, 43%, 45%)",
			},
			{
				name: $_("home.themes.yellow_white", defaultI18nValues),
				color: "hsl(43, 100%, 50%)",
			},
			{
				name: $_("home.themes.white_teal", defaultI18nValues),
				color: "hsl(192, 81%, 14%)",
			},
			{
				name: $_("home.themes.sky_blue", defaultI18nValues),
				color: "hsl(193, 43%, 67%)",
			},
		];
		$$result.css.add(css$1);
		let $$settled;
		let $$rendered;
		let previous_head = $$result.head;
		do {
			$$settled = true;
			$$result.head = previous_head;
			themeSrc = currentTheme > 0 ? `theme-${currentTheme + 1}` : systemTheme;
			$$rendered = `  ${validate_component(PageSection, "PageSection").$$render(
				$$result,
				{
					class: "theme-" + (currentTheme + 1),
					id: "themes-section",
				},
				{},
				{
					default: () => {
						return `<div class="scroll-anchor svelte-1e47rly"${add_attribute("this", anchor, 0)}></div> <div class="themes-section-content svelte-1e47rly">${validate_component(
							HeaderChip,
							"HeaderChip",
						).$$render(
							$$result,
							{},
							{},
							{
								default: () => {
									return `${escape($_("home.themes.chip", defaultI18nValues))}`;
								},
							},
						)} ${validate_component(TextBlock, "TextBlock").$$render(
							$$result,
							{ variant: "titleLarge" },
							{},
							{
								default: () => {
									return `${escape($_("home.themes.title", defaultI18nValues))}`;
								},
							},
						)} <p class="svelte-1e47rly">${escape($_("home.themes.description", defaultI18nValues))}</p> <div class="theme-chooser svelte-1e47rly">${each(
							themeColors,
							(color, i) => {
								return `${validate_component(
									ColorSwatch,
									"ColorSwatch",
								).$$render(
									$$result,
									{
										value: i,
										colorName: color,
										"aria-label": $_("home.themes.select_theme", {
											values: { index: i + 1 },
										}),
										group: currentTheme,
									},
									{
										group: $$value => {
											currentTheme = $$value;
											$$settled = false;
										},
									},
									{},
								)}`;
							},
						)}</div> <div class="buttons-spacer">${validate_component(
							Button,
							"Button",
						).$$render(
							$$result,
							{
								href: "/docs/customize-settings/appearance/",
								variant: "accent",
							},
							{},
							{
								default: () => {
									return `${escape($_("home.design.learn_more", defaultI18nValues))}`;
								},
							},
						)}</div></div> <div class="${[
							"component-showcase svelte-1e47rly",
							" visible",
						]
							.join(" ")
							.trim()}"><div class="column left svelte-1e47rly"><div class="card svelte-1e47rly"${add_styles({ "block-size": `72px` })}></div> <img alt="Properties dialog" class="properties svelte-1e47rly" height="583" loading="lazy" src="${"/ui/exported/properties-" + escape(themeSrc, true) + ".svg"}" width="413"> <div class="svelte-1e47rly"><img alt="Drive button" class="drive svelte-1e47rly" height="280" loading="lazy" src="${"/ui/exported/drive-" + escape(themeSrc, true) + ".svg"}" width="88"> <img alt="Tabs flyout" class="tabs svelte-1e47rly" height="233" loading="lazy" src="${"/ui/exported/tabs-" + escape(themeSrc, true) + ".svg"}" width="309"></div></div> <div class="column right svelte-1e47rly"><img alt="Calendar flyout" class="calendar svelte-1e47rly" height="348" loading="lazy" src="${"/ui/exported/calendar-" + escape(themeSrc, true) + ".svg"}" width="300"> <img alt="Layout flyout" class="layout svelte-1e47rly" height="270" loading="lazy" src="${"/ui/exported/layout-" + escape(themeSrc, true) + ".svg"}" width="270"> <div class="card svelte-1e47rly"${add_styles({ "block-size": `128px` })}></div></div></div>`;
					},
				},
			)}`;
		} while (!$$settled);
		$$unsubscribe__();
		return $$rendered;
	},
);
const css = {
	code: '@keyframes svelte-eixuog-rotate-background{from{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}#community-section .buttons-spacer{justify-content:center}#community-section .buttons-spacer .button.style-hyperlink{color:var(--fds-accent-text-primary)}.community-section-text.svelte-eixuog.svelte-eixuog{text-align:center;--fds-solid-background-base:hsl(0, 0%, 95%);--fds-text-primary:hsl(0, 0%, 13%);--fds-text-secondary:hsl(0, 0%, 16%);--fds-text-tertiary:var(--fds-text-secondary);--fds-subtle-fill-secondary:hsl(0, 0%, 0%, 0.095);--fds-subtle-fill-tertiary:hsl(0, 0%, 0%, 0.024);--fds-subtle-fill-disabled:transparent;--fds-accent-text-primary:hsl(var(--fds-accent-dark-3));--fds-accent-text-tertiary:hsl(var(--fds-accent-dark-2))}.community-section-text.svelte-eixuog p.svelte-eixuog{margin-inline:auto}.community-section-card.svelte-eixuog.svelte-eixuog{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;z-index:0;inline-size:100%;max-inline-size:2048px;min-block-size:600px;padding:72px 48px;border-radius:var(--fds-overlay-corner-radius);background-color:#f9f9f9;box-shadow:0 2.74416px 2.74416px hsla(0deg, 0%, 0%, 0.03), 0 5.48831px 5.48831px hsla(0deg, 0%, 0%, 0.04), 0 13.7208px 10.9766px hsla(0deg, 0%, 0%, 0.05), 0 20.5812px 20.5812px hsla(0deg, 0%, 0%, 0.06), 0 41.1623px 41.1623px hsla(0deg, 0%, 0%, 0.07), 0 96.0454px 89.1851px hsla(0deg, 0%, 0%, 0.09);overflow:hidden}.community-section-card.svelte-eixuog .rainbow-background.svelte-eixuog{position:absolute;inset-block-start:0;inset-inline-start:0;z-index:-1;inline-size:100%;block-size:100%;border-radius:var(--fds-overlay-corner-radius);animation:svelte-eixuog-rotate-background 15s infinite linear;background-color:hsl(282deg, 23%, 78%);background-image:radial-gradient(at 68% 34%, hsl(233deg, 72%, 73%) 0, transparent 43%), radial-gradient(at 51% 0%, hsl(254deg, 79%, 75%) 0, transparent 57%), radial-gradient(at 80% 2%, hsl(274deg, 88%, 72%) 0, transparent 41%), radial-gradient(at 96% 100%, hsl(254deg, 89%, 65%) 0, transparent 47%), radial-gradient(at 1% 84%, hsl(233deg, 72%, 73%) 0, transparent 41%), radial-gradient(at 19% 100%, hsl(262deg, 73%, 70%) 0, transparent 44%), radial-gradient(at 46% 100%, hsl(254deg, 79%, 75%) 0, transparent 49%), radial-gradient(at 92% 72%, hsl(282deg, 24%, 79%) 0, transparent 43%);background-size:150% 150%}@keyframes svelte-eixuog-contributors-left{to{transform:translateX(50%)}}@keyframes svelte-eixuog-contributors-right{to{transform:translateX(-50%)}}.contributors-container.svelte-eixuog.svelte-eixuog{position:relative;inline-size:100vw;max-inline-size:2800px;margin-block-end:-128px;padding:64px 0 128px 0;overflow:hidden}.contributors-container.svelte-eixuog.svelte-eixuog::before,.contributors-container.svelte-eixuog.svelte-eixuog::after{position:absolute;z-index:1;inline-size:96px;block-size:100%}@media screen and (width > 2800px){.contributors-container.svelte-eixuog.svelte-eixuog::before,.contributors-container.svelte-eixuog.svelte-eixuog::after{content:""}}.contributors-container.svelte-eixuog.svelte-eixuog::before{inset-inline-start:0;background-image:linear-gradient(90deg, var(--fds-solid-background-secondary), transparent)}.contributors-container.svelte-eixuog.svelte-eixuog::after{inset-inline-end:0;background:linear-gradient(90deg, transparent, var(--fds-solid-background-tertiary))}.contributors-row.svelte-eixuog.svelte-eixuog{position:relative;margin-block-end:12px;white-space:nowrap}.contributors-row.svelte-eixuog .contributor{margin-inline-end:12px}.contributors-row.svelte-eixuog.svelte-eixuog:nth-child(even){inset-inline-start:24px;float:left;animation:svelte-eixuog-contributors-right 80s linear infinite alternate}.contributors-row.svelte-eixuog.svelte-eixuog:nth-child(odd){inset-inline-start:-24px;float:right;animation:svelte-eixuog-contributors-left 80s linear infinite alternate}.contributors-row.svelte-eixuog.svelte-eixuog:last-child{margin:0;animation-delay:2s}@media screen and (width < 768px){.community-section-card.svelte-eixuog.svelte-eixuog{padding:24px}.community-section-card.svelte-eixuog h2.svelte-eixuog{font-size:3.2rem}}',
	map: '{"version":3,"file":"CommunitySection.svelte","sources":["CommunitySection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { links } from \\"$data/links\\";\\nimport { Contributor, defaultI18nValues, HeaderChip, PageSection, } from \\"$lib\\";\\nimport { Button } from \\"fluent-svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport Profile from \\"~icons/fluent/person-32-filled?raw\\";\\nexport let contributors;\\n</script>\\r\\n\\r\\n<PageSection id=\\"community-section\\">\\r\\n\\t<div class=\\"community-section-card\\">\\r\\n\\t\\t<div class=\\"community-section-text\\">\\r\\n\\t\\t\\t<HeaderChip>{$_(\\"home.community.chip\\", defaultI18nValues)}</HeaderChip>\\r\\n\\t\\t\\t<h2>{$_(\\"home.community.title\\", defaultI18nValues)}</h2>\\r\\n\\t\\t\\t<p>{$_(\\"home.community.description\\", defaultI18nValues)}</p>\\r\\n\\t\\t\\t<div class=\\"buttons-spacer\\">\\r\\n\\t\\t\\t\\t<Button variant=\\"hyperlink\\" href=\\"https://discord.gg/{links.discord}\\">\\r\\n\\t\\t\\t\\t\\t{$_(\\"home.community.discord\\", defaultI18nValues)}\\r\\n\\t\\t\\t\\t</Button>\\r\\n\\t\\t\\t\\t<Button variant=\\"hyperlink\\" href=\\"/docs/contributing/code-style\\">\\r\\n\\t\\t\\t\\t\\t{$_(\\"home.community.docs\\", defaultI18nValues)}\\r\\n\\t\\t\\t\\t</Button>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"contributors-container\\">\\r\\n\\t\\t\\t{#each contributors as rowPromise, i}\\r\\n\\t\\t\\t\\t<div class=\\"contributors-row\\">\\r\\n\\t\\t\\t\\t\\t{#await rowPromise then row}\\r\\n\\t\\t\\t\\t\\t\\t{#each row.sort(() => Math.random() - 0.5) as { html_url, avatar_url, login, contributions, type }}\\r\\n\\t\\t\\t\\t\\t\\t\\t<Contributor\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{html_url}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{avatar_url}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{login}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{contributions}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{type}\\r\\n\\t\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t{:catch}\\r\\n\\t\\t\\t\\t\\t\\t{#each Array(35) as _}\\r\\n\\t\\t\\t\\t\\t\\t\\t<Contributor\\r\\n\\t\\t\\t\\t\\t\\t\\t\\thtml_url=\\"https://github.com/yaira2\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tavatar_url=\\"data:image/svg+xml;{encodeURIComponent(Profile)}\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tcontributions={0}\\r\\n\\t\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t{/await}\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"rainbow-background\\" />\\r\\n\\t</div>\\r\\n</PageSection>\\r\\n\\r\\n<style lang=\\"scss\\">@keyframes rotate-background {\\n  from {\\n    background-position: 0 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  to {\\n    background-position: 0 50%;\\n  }\\n}\\n:global(#community-section .buttons-spacer) {\\n  justify-content: center;\\n}\\n:global(#community-section .buttons-spacer) :global(.button.style-hyperlink) {\\n  color: var(--fds-accent-text-primary);\\n}\\n\\n.community-section-text {\\n  text-align: center;\\n  --fds-solid-background-base: hsl(0, 0%, 95%);\\n  --fds-text-primary: hsl(0, 0%, 13%);\\n  --fds-text-secondary: hsl(0, 0%, 16%);\\n  --fds-text-tertiary: var(--fds-text-secondary);\\n  --fds-subtle-fill-secondary: hsl(0, 0%, 0%, 0.095);\\n  --fds-subtle-fill-tertiary: hsl(0, 0%, 0%, 0.024);\\n  --fds-subtle-fill-disabled: transparent;\\n  --fds-accent-text-primary: hsl(var(--fds-accent-dark-3));\\n  --fds-accent-text-tertiary: hsl(var(--fds-accent-dark-2));\\n}\\n.community-section-text p {\\n  margin-inline: auto;\\n}\\n.community-section-card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n  z-index: 0;\\n  inline-size: 100%;\\n  max-inline-size: 2048px;\\n  min-block-size: 600px;\\n  padding: 72px 48px;\\n  border-radius: var(--fds-overlay-corner-radius);\\n  background-color: #f9f9f9;\\n  box-shadow: 0 2.74416px 2.74416px hsla(0deg, 0%, 0%, 0.03), 0 5.48831px 5.48831px hsla(0deg, 0%, 0%, 0.04), 0 13.7208px 10.9766px hsla(0deg, 0%, 0%, 0.05), 0 20.5812px 20.5812px hsla(0deg, 0%, 0%, 0.06), 0 41.1623px 41.1623px hsla(0deg, 0%, 0%, 0.07), 0 96.0454px 89.1851px hsla(0deg, 0%, 0%, 0.09);\\n  overflow: hidden;\\n}\\n.community-section-card .rainbow-background {\\n  position: absolute;\\n  inset-block-start: 0;\\n  inset-inline-start: 0;\\n  z-index: -1;\\n  inline-size: 100%;\\n  block-size: 100%;\\n  border-radius: var(--fds-overlay-corner-radius);\\n  animation: rotate-background 15s infinite linear;\\n  background-color: hsl(282deg, 23%, 78%);\\n  background-image: radial-gradient(at 68% 34%, hsl(233deg, 72%, 73%) 0, transparent 43%), radial-gradient(at 51% 0%, hsl(254deg, 79%, 75%) 0, transparent 57%), radial-gradient(at 80% 2%, hsl(274deg, 88%, 72%) 0, transparent 41%), radial-gradient(at 96% 100%, hsl(254deg, 89%, 65%) 0, transparent 47%), radial-gradient(at 1% 84%, hsl(233deg, 72%, 73%) 0, transparent 41%), radial-gradient(at 19% 100%, hsl(262deg, 73%, 70%) 0, transparent 44%), radial-gradient(at 46% 100%, hsl(254deg, 79%, 75%) 0, transparent 49%), radial-gradient(at 92% 72%, hsl(282deg, 24%, 79%) 0, transparent 43%);\\n  background-size: 150% 150%;\\n}\\n\\n@keyframes contributors-left {\\n  to {\\n    transform: translateX(50%);\\n  }\\n}\\n@keyframes contributors-right {\\n  to {\\n    transform: translateX(-50%);\\n  }\\n}\\n.contributors-container {\\n  position: relative;\\n  inline-size: 100vw;\\n  max-inline-size: 2800px;\\n  margin-block-end: -128px;\\n  padding: 64px 0 128px 0;\\n  overflow: hidden;\\n}\\n.contributors-container::before, .contributors-container::after {\\n  position: absolute;\\n  z-index: 1;\\n  inline-size: 96px;\\n  block-size: 100%;\\n}\\n@media screen and (width > 2800px) {\\n  .contributors-container::before, .contributors-container::after {\\n    content: \\"\\";\\n  }\\n}\\n.contributors-container::before {\\n  inset-inline-start: 0;\\n  background-image: linear-gradient(90deg, var(--fds-solid-background-secondary), transparent);\\n}\\n.contributors-container::after {\\n  inset-inline-end: 0;\\n  background: linear-gradient(90deg, transparent, var(--fds-solid-background-tertiary));\\n}\\n.contributors-row {\\n  position: relative;\\n  margin-block-end: 12px;\\n  white-space: nowrap;\\n}\\n.contributors-row :global(.contributor) {\\n  margin-inline-end: 12px;\\n}\\n.contributors-row:nth-child(even) {\\n  inset-inline-start: 24px;\\n  float: left;\\n  animation: contributors-right 80s linear infinite alternate;\\n}\\n.contributors-row:nth-child(odd) {\\n  inset-inline-start: -24px;\\n  float: right;\\n  animation: contributors-left 80s linear infinite alternate;\\n}\\n.contributors-row:last-child {\\n  margin: 0;\\n  animation-delay: 2s;\\n}\\n\\n@media screen and (width < 768px) {\\n  .community-section-card {\\n    padding: 24px;\\n  }\\n  .community-section-card h2 {\\n    font-size: 3.2rem;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"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"}',
};
const CommunitySection = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $_, $$unsubscribe__;
		$$unsubscribe__ = subscribe($format, value => ($_ = value));
		let { contributors } = $$props;
		if (
			$$props.contributors === void 0 &&
			$$bindings.contributors &&
			contributors !== void 0
		)
			$$bindings.contributors(contributors);
		$$result.css.add(css);
		$$unsubscribe__();
		return `${validate_component(PageSection, "PageSection").$$render(
			$$result,
			{ id: "community-section" },
			{},
			{
				default: () => {
					return `<div class="community-section-card svelte-eixuog"><div class="community-section-text svelte-eixuog">${validate_component(
						HeaderChip,
						"HeaderChip",
					).$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${escape($_("home.community.chip", defaultI18nValues))}`;
							},
						},
					)} <h2 class="svelte-eixuog">${escape($_("home.community.title", defaultI18nValues))}</h2> <p class="svelte-eixuog">${escape($_("home.community.description", defaultI18nValues))}</p> <div class="buttons-spacer">${validate_component(
						Button,
						"Button",
					).$$render(
						$$result,
						{
							variant: "hyperlink",
							href: "https://discord.gg/" + links.discord,
						},
						{},
						{
							default: () => {
								return `${escape($_("home.community.discord", defaultI18nValues))}`;
							},
						},
					)} ${validate_component(Button, "Button").$$render(
						$$result,
						{
							variant: "hyperlink",
							href: "/docs/contributing/code-style",
						},
						{},
						{
							default: () => {
								return `${escape($_("home.community.docs", defaultI18nValues))}`;
							},
						},
					)}</div></div> <div class="contributors-container svelte-eixuog">${each(
						contributors,
						(rowPromise, i) => {
							return `<div class="contributors-row svelte-eixuog">${(function (
								__value,
							) {
								if (is_promise(__value)) {
									__value.then(null, noop);
									return ``;
								}
								return (function (row) {
									return ` ${each(
										row.sort(() => Math.random() - 0.5),
										({ html_url, avatar_url, login, contributions, type }) => {
											return `${validate_component(
												Contributor,
												"Contributor",
											).$$render(
												$$result,
												{
													html_url,
													avatar_url,
													login,
													contributions,
													type,
												},
												{},
												{},
											)}`;
										},
									)} `;
								})(__value);
							})(rowPromise)} </div>`;
						},
					)}</div> <div class="rainbow-background svelte-eixuog"></div></div>`;
				},
			},
		)}`;
	},
);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let contributors;
	let $_, $$unsubscribe__;
	$$unsubscribe__ = subscribe($format, value => ($_ = value));
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0)
		$$bindings.data(data);
	({ contributors } = data);
	$$unsubscribe__();
	return `${validate_component(Metadata, "Metadata").$$render(
		$$result,
		{
			title: $_("metadata.home", defaultI18nValues),
		},
		{},
		{},
	)} ${validate_component(DesignSection, "DesignSection").$$render($$result, {}, {}, {})} ${validate_component(FeaturesSection, "FeaturesSection").$$render($$result, {}, {}, {})} ${validate_component(ThemesSection, "ThemesSection").$$render($$result, {}, {}, {})} ${validate_component(CommunitySection, "CommunitySection").$$render($$result, { contributors }, {}, {})}`;
});
export { Page as default };
