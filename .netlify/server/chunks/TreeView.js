import {
	c as create_ssr_component,
	i as compute_rest_props,
	k as get_current_component,
	j as createEventDispatcher,
	f as spread,
	g as escape_attribute_value,
	d as escape,
	h as escape_object,
	b as add_attribute,
	v as validate_component,
	a as subscribe,
	e as each,
	m as missing_component,
} from "./ssr.js";
import { p as page } from "./i18n.js";
/* empty css                                             */
import { c as createEventForwarder } from "./internal2.js";
import { T as TextBlock } from "./TextBlock.js";
const css$1 = {
	code: '.list-item.svelte-1ye4o7x{align-items:center;background-color:var(--fds-subtle-fill-transparent);block-size:34px;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);cursor:default;display:flex;flex:0 0 auto;inline-size:calc(100% - 10px);margin:3px 5px;outline:none;padding-inline:12px;position:relative;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.list-item.svelte-1ye4o7x:before{background-color:var(--fds-accent-default);block-size:16px;border-radius:3px;content:"";inline-size:3px;inset-inline-start:0;opacity:0;position:absolute;transform:scaleY(0);transition:transform var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing)}.list-item.selected.svelte-1ye4o7x:before{opacity:1;transform:scaleY(1)}.list-item.svelte-1ye4o7x:focus-visible{box-shadow:var(--fds-focus-stroke)}.list-item.selected.svelte-1ye4o7x,.list-item.svelte-1ye4o7x:hover{background-color:var(--fds-subtle-fill-secondary)}.list-item.svelte-1ye4o7x:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-secondary)}.list-item.svelte-1ye4o7x:active:before{transform:scaleY(.625)}.list-item.disabled.svelte-1ye4o7x{background-color:var(--fds-subtle-fill-transparent);color:var(--fds-text-disabled);pointer-events:none}.list-item.disabled.selected.svelte-1ye4o7x{background-color:var(--fds-subtle-fill-secondary)}.list-item.disabled.selected.svelte-1ye4o7x:before{background-color:var(--fds-accent-disabled)}.list-item.svelte-1ye4o7x>svg{fill:currentColor;-webkit-margin-end:16px;block-size:auto;inline-size:16px;margin-inline-end:16px}',
	map: '{"version":3,"file":"ListItem.svelte","sources":["ListItem.svelte"],"sourcesContent":["<script >import { createEventDispatcher } from \\"svelte\\";\\r\\nimport { get_current_component } from \\"svelte/internal\\";\\r\\nimport { createEventForwarder } from \\"../internal\\";\\r\\nimport TextBlock from \\"../TextBlock/TextBlock.svelte\\";\\r\\n/** @restProps {button | a} */\\r\\n/** Controls whether the item is selected or not. */\\r\\nexport let selected = false;\\r\\n/** Controls whether the item is intended for user interaction, and styles it accordingly. */\\r\\nexport let disabled = false;\\r\\n/** Sets an href value and converts the list element into an anchor. */\\r\\nexport let href = \\"\\";\\r\\n/** Specifies an ARIA role for the item. */\\r\\nexport let role = \\"listitem\\";\\r\\n/** Specifies a custom class name for the item. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the item\'s element. */\\r\\nexport let element = null;\\r\\nconst forwardEvents = createEventForwarder(get_current_component(), [\\"select\\"]);\\r\\nconst dispatch = createEventDispatcher();\\r\\n$: if (selected)\\r\\n    dispatch(\\"select\\");\\r\\nfunction handleKeyDown({ key, target }) {\\r\\n    if (key === \\"Enter\\")\\r\\n        target.click();\\r\\n}\\r\\n</script>\\n\\n<!--\\n@component\\nList Items display data stacked vertically in a single column. List Items work better for items that have text as a focal point, and for collections that are meant to be read top to bottom (i.e. alphabetically ordered). A few common use cases for List Items include lists of messages and search results. [Docs](https://fluent-svelte.vercel.app/docs/components/listitem)\\n- Usage:\\n    ```tsx\\n    <ListItem>Text</ListItem>\\n    ```\\n-->\\n{#if href && !disabled}\\n\\t<a\\n\\t\\tuse:forwardEvents\\n\\t\\ton:keydown={handleKeyDown}\\n\\t\\tbind:this={element}\\n\\t\\ttabindex={disabled ? -1 : 0}\\n\\t\\taria-selected={selected}\\n\\t\\tclass=\\"list-item {className}\\"\\n\\t\\tclass:selected\\n\\t\\tclass:disabled\\n\\t\\t{href}\\n\\t\\t{role}\\n\\t\\t{...$$restProps}\\n\\t>\\n\\t\\t<slot name=\\"icon\\" />\\n\\t\\t<TextBlock>\\n\\t\\t\\t<slot />\\n\\t\\t</TextBlock>\\n\\t</a>\\n{:else}\\n\\t<li\\n\\t\\tuse:forwardEvents\\n\\t\\ton:keydown={handleKeyDown}\\n\\t\\tbind:this={element}\\n\\t\\ttabindex={disabled ? -1 : 0}\\n\\t\\taria-selected={selected}\\n\\t\\tclass=\\"list-item {className}\\"\\n\\t\\tclass:selected\\n\\t\\tclass:disabled\\n\\t\\t{href}\\n\\t\\t{role}\\n\\t\\t{...$$restProps}\\n\\t>\\n\\t\\t<slot name=\\"icon\\" />\\n\\t\\t<TextBlock>\\n\\t\\t\\t<slot />\\n\\t\\t</TextBlock>\\n\\t</li>\\n{/if}\\n\\n<style >.list-item{align-items:center;background-color:var(--fds-subtle-fill-transparent);block-size:34px;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);cursor:default;display:flex;flex:0 0 auto;inline-size:calc(100% - 10px);margin:3px 5px;outline:none;padding-inline:12px;position:relative;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.list-item:before{background-color:var(--fds-accent-default);block-size:16px;border-radius:3px;content:\\"\\";inline-size:3px;inset-inline-start:0;opacity:0;position:absolute;transform:scaleY(0);transition:transform var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing)}.list-item.selected:before{opacity:1;transform:scaleY(1)}.list-item:focus-visible{box-shadow:var(--fds-focus-stroke)}.list-item.selected,.list-item:hover{background-color:var(--fds-subtle-fill-secondary)}.list-item:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-secondary)}.list-item:active:before{transform:scaleY(.625)}.list-item.disabled{background-color:var(--fds-subtle-fill-transparent);color:var(--fds-text-disabled);pointer-events:none}.list-item.disabled.selected{background-color:var(--fds-subtle-fill-secondary)}.list-item.disabled.selected:before{background-color:var(--fds-accent-disabled)}.list-item>:global(svg){fill:currentColor;-webkit-margin-end:16px;block-size:auto;inline-size:16px;margin-inline-end:16px}</style>\\n"],"names":[],"mappings":"AA4EQ,yBAAU,CAAC,YAAY,MAAM,CAAC,iBAAiB,IAAI,6BAA6B,CAAC,CAAC,WAAW,IAAI,CAAC,cAAc,IAAI,2BAA2B,CAAC,CAAC,WAAW,UAAU,CAAC,MAAM,IAAI,kBAAkB,CAAC,CAAC,OAAO,OAAO,CAAC,QAAQ,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,YAAY,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,GAAG,CAAC,GAAG,CAAC,QAAQ,IAAI,CAAC,eAAe,IAAI,CAAC,SAAS,QAAQ,CAAC,gBAAgB,IAAI,CAAC,oBAAoB,IAAI,CAAC,iBAAiB,IAAI,CAAC,gBAAgB,IAAI,CAAC,YAAY,IAAI,CAAC,yBAAU,OAAO,CAAC,iBAAiB,IAAI,oBAAoB,CAAC,CAAC,WAAW,IAAI,CAAC,cAAc,GAAG,CAAC,QAAQ,EAAE,CAAC,YAAY,GAAG,CAAC,mBAAmB,CAAC,CAAC,QAAQ,CAAC,CAAC,SAAS,QAAQ,CAAC,UAAU,OAAO,CAAC,CAAC,CAAC,WAAW,SAAS,CAAC,IAAI,2BAA2B,CAAC,CAAC,IAAI,qCAAqC,CAAC,CAAC,UAAU,wBAAS,OAAO,CAAC,QAAQ,CAAC,CAAC,UAAU,OAAO,CAAC,CAAC,CAAC,yBAAU,cAAc,CAAC,WAAW,IAAI,kBAAkB,CAAC,CAAC,UAAU,wBAAS,CAAC,yBAAU,MAAM,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,yBAAU,OAAO,CAAC,iBAAiB,IAAI,0BAA0B,CAAC,CAAC,MAAM,IAAI,oBAAoB,CAAC,CAAC,yBAAU,OAAO,OAAO,CAAC,UAAU,OAAO,IAAI,CAAC,CAAC,UAAU,wBAAS,CAAC,iBAAiB,IAAI,6BAA6B,CAAC,CAAC,MAAM,IAAI,mBAAmB,CAAC,CAAC,eAAe,IAAI,CAAC,UAAU,SAAS,wBAAS,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,UAAU,SAAS,wBAAS,OAAO,CAAC,iBAAiB,IAAI,qBAAqB,CAAC,CAAC,yBAAU,CAAS,GAAI,CAAC,KAAK,YAAY,CAAC,mBAAmB,IAAI,CAAC,WAAW,IAAI,CAAC,YAAY,IAAI,CAAC,kBAAkB,IAAI"}',
};
const ListItem = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"selected",
			"disabled",
			"href",
			"role",
			"class",
			"element",
		]);
		let { selected = false } = $$props;
		let { disabled = false } = $$props;
		let { href = "" } = $$props;
		let { role = "listitem" } = $$props;
		let { class: className = "" } = $$props;
		let { element = null } = $$props;
		createEventForwarder(get_current_component(), ["select"]);
		const dispatch = createEventDispatcher();
		if (
			$$props.selected === void 0 &&
			$$bindings.selected &&
			selected !== void 0
		)
			$$bindings.selected(selected);
		if (
			$$props.disabled === void 0 &&
			$$bindings.disabled &&
			disabled !== void 0
		)
			$$bindings.disabled(disabled);
		if ($$props.href === void 0 && $$bindings.href && href !== void 0)
			$$bindings.href(href);
		if ($$props.role === void 0 && $$bindings.role && role !== void 0)
			$$bindings.role(role);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if ($$props.element === void 0 && $$bindings.element && element !== void 0)
			$$bindings.element(element);
		$$result.css.add(css$1);
		{
			if (selected) dispatch("select");
		}
		return ` ${
			href && !disabled
				? `<a${spread(
						[
							{
								tabindex: escape_attribute_value(disabled ? -1 : 0),
							},
							{
								"aria-selected": escape_attribute_value(selected),
							},
							{
								class: "list-item " + escape(className, true),
							},
							{ href: escape_attribute_value(href) },
							{ role: escape_attribute_value(role) },
							escape_object($$restProps),
						],
						{
							classes:
								(selected ? "selected" : "") +
								" " +
								(disabled ? "disabled" : "") +
								" svelte-1ye4o7x",
						},
					)}${add_attribute("this", element, 0)}>${slots.icon ? slots.icon({}) : ``} ${validate_component(
						TextBlock,
						"TextBlock",
					).$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${slots.default ? slots.default({}) : ``}`;
							},
						},
					)}</a>`
				: `<li${spread(
						[
							{
								tabindex: escape_attribute_value(disabled ? -1 : 0),
							},
							{
								"aria-selected": escape_attribute_value(selected),
							},
							{
								class: "list-item " + escape(className, true),
							},
							{ href: escape_attribute_value(href) },
							{ role: escape_attribute_value(role) },
							escape_object($$restProps),
						],
						{
							classes:
								(selected ? "selected" : "") +
								" " +
								(disabled ? "disabled" : "") +
								" svelte-1ye4o7x",
						},
					)}${add_attribute("this", element, 0)}>${slots.icon ? slots.icon({}) : ``} ${validate_component(
						TextBlock,
						"TextBlock",
					).$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${slots.default ? slots.default({}) : ``}`;
							},
						},
					)}</li>`
		}`;
	},
);
const Chevron_down_16_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 16 16" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M3.146 5.646a.5.5 0 0 1 .708 0L8 9.793l4.146-4.147a.5.5 0 0 1 .708.708l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 0 1 0-.708"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const css = {
	code: ".tree-view.svelte-12ag9ss .subtree.svelte-12ag9ss .list-item span{display:flex;justify-content:space-between;align-items:center;inline-size:100%}.tree-view.svelte-12ag9ss .subtree.svelte-12ag9ss .list-item span .expander-icon{display:flex;align-items:center;transition:transform var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing);transform-origin:center}.tree-view.svelte-12ag9ss .subtree.svelte-12ag9ss .list-item span .expander-icon.expanded{transform:rotate(180deg)}.tree-view.svelte-12ag9ss .subtree.svelte-12ag9ss .list-item span .expander-icon svg{inline-size:14px;block-size:auto;fill:currentColor}@media screen and (width >= 648px){.tree-view.initial.svelte-12ag9ss.svelte-12ag9ss{block-size:calc(100vh - 58px)}}.subtree-items.svelte-12ag9ss.svelte-12ag9ss{padding-inline-start:24px}",
	map: '{"version":3,"file":"TreeView.svelte","sources":["TreeView.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { slide } from \\"svelte/transition\\";\\nimport { circOut } from \\"svelte/easing\\";\\nimport { page } from \\"$app/stores\\";\\nimport ChevronDown from \\"~icons/fluent/chevron-down-16-regular\\";\\nimport { ListItem } from \\"fluent-svelte\\";\\nimport { getCSSDuration } from \\"fluent-svelte/internal\\";\\nexport let tree = [];\\nexport let initial = true;\\nlet treeViewState;\\nonMount(() => {\\n    // Check localStorage for an existing treeViewState\\n    // If none exists, use a blank object string\\n    treeViewState = JSON.parse(localStorage.getItem(\\"treeViewState\\") ?? \\"{}\\");\\n});\\n// Function for expanding/collapsing docs categories\\nconst toggleExpansion = (event, name) => {\\n    event.stopPropagation();\\n    // Modify treeViewState to have the opposite of the previous entry for the category\\n    treeViewState[name] = !treeViewState[name];\\n    // Update value in localStorage for persistence\\n    localStorage.setItem(\\"treeViewState\\", JSON.stringify(treeViewState));\\n};\\n</script>\\r\\n\\r\\n<div class=\\"tree-view scroller\\" class:initial>\\r\\n\\t{#each tree as tree}\\r\\n\\t\\t{@const { title, path, icon } = tree}\\r\\n\\t\\t{#if \\"pages\\" in tree}\\r\\n\\t\\t\\t{@const pages = tree.pages}\\r\\n\\t\\t\\t<div class=\\"subtree\\" class:expanded={!treeViewState?.[title]}>\\r\\n\\t\\t\\t\\t<ListItem on:click={e => toggleExpansion(e, title)}>\\r\\n\\t\\t\\t\\t\\t<svelte:fragment slot=\\"icon\\">\\r\\n\\t\\t\\t\\t\\t\\t{#if icon}\\r\\n\\t\\t\\t\\t\\t\\t\\t<svelte:component this={icon} />\\r\\n\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t</svelte:fragment>\\r\\n\\t\\t\\t\\t\\t<span class=\\"tree-view-item\\">{title}</span>\\r\\n\\t\\t\\t\\t\\t<div class=\\"expander-icon\\" class:expanded={!treeViewState?.[title]}>\\r\\n\\t\\t\\t\\t\\t\\t<ChevronDown />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</ListItem>\\r\\n\\t\\t\\t\\t{#if !treeViewState?.[title]}\\r\\n\\t\\t\\t\\t\\t<div\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"subtree-items\\"\\r\\n\\t\\t\\t\\t\\t\\ttransition:slide={{\\r\\n\\t\\t\\t\\t\\t\\t\\tduration: getCSSDuration(\\"--fds-control-fast-duration\\"),\\r\\n\\t\\t\\t\\t\\t\\t\\teasing: circOut,\\r\\n\\t\\t\\t\\t\\t\\t}}\\r\\n\\t\\t\\t\\t\\t\\tclass:expanded={!treeViewState?.[title]}\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t<svelte:self tree={pages} initial={false} />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{:else}\\r\\n\\t\\t\\t<ListItem\\r\\n\\t\\t\\t\\ton:click\\r\\n\\t\\t\\t\\tselected={`/docs${path}` === $page.url.pathname}\\r\\n\\t\\t\\t\\thref=\\"/docs{path}\\"\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t<svelte:fragment slot=\\"icon\\">\\r\\n\\t\\t\\t\\t\\t{#if icon}\\r\\n\\t\\t\\t\\t\\t\\t<svelte:component this={icon} />\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t</svelte:fragment>\\r\\n\\t\\t\\t\\t{title}\\r\\n\\t\\t\\t</ListItem>\\r\\n\\t\\t{/if}\\r\\n\\t{/each}\\r\\n</div>\\r\\n\\r\\n<style lang=\\"scss\\">.tree-view .subtree :global(.list-item) :global(span) {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  inline-size: 100%;\\n}\\n.tree-view .subtree :global(.list-item) :global(span) :global(.expander-icon) {\\n  display: flex;\\n  align-items: center;\\n  transition: transform var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing);\\n  transform-origin: center;\\n}\\n.tree-view .subtree :global(.list-item) :global(span) :global(.expander-icon.expanded) {\\n  transform: rotate(180deg);\\n}\\n.tree-view .subtree :global(.list-item) :global(span) :global(.expander-icon) :global(svg) {\\n  inline-size: 14px;\\n  block-size: auto;\\n  fill: currentColor;\\n}\\n@media screen and (width >= 648px) {\\n  .tree-view.initial {\\n    block-size: calc(100vh - 58px);\\n  }\\n}\\n\\n.subtree-items {\\n  padding-inline-start: 24px;\\n}</style>\\r\\n"],"names":[],"mappings":"AAwEmB,yBAAU,CAAC,uBAAQ,CAAS,UAAW,CAAS,IAAM,CACvE,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IACf,CACA,yBAAU,CAAC,uBAAQ,CAAS,UAAW,CAAS,IAAK,CAAS,cAAgB,CAC5E,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,SAAS,CAAC,IAAI,2BAA2B,CAAC,CAAC,IAAI,qCAAqC,CAAC,CACjG,gBAAgB,CAAE,MACpB,CACA,yBAAU,CAAC,uBAAQ,CAAS,UAAW,CAAS,IAAK,CAAS,uBAAyB,CACrF,SAAS,CAAE,OAAO,MAAM,CAC1B,CACA,yBAAU,CAAC,uBAAQ,CAAS,UAAW,CAAS,IAAK,CAAS,cAAe,CAAS,GAAK,CACzF,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,IAAI,CAAE,YACR,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,EAAE,CAAC,KAAK,CAAE,CACjC,UAAU,sCAAS,CACjB,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAC/B,CACF,CAEA,4CAAe,CACb,oBAAoB,CAAE,IACxB"}',
};
const TreeView = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $page, $$unsubscribe_page;
		$$unsubscribe_page = subscribe(page, value => ($page = value));
		let { tree = [] } = $$props;
		let { initial = true } = $$props;
		if ($$props.tree === void 0 && $$bindings.tree && tree !== void 0)
			$$bindings.tree(tree);
		if ($$props.initial === void 0 && $$bindings.initial && initial !== void 0)
			$$bindings.initial(initial);
		$$result.css.add(css);
		$$unsubscribe_page();
		return `<div class="${["tree-view scroller svelte-12ag9ss", initial ? "initial" : ""].join(" ").trim()}">${each(
			tree,
			tree2 => {
				let { title, path, icon } = tree2;
				return ` ${
					"pages" in tree2
						? (() => {
								let pages = tree2.pages;
								return ` <div class="${["subtree svelte-12ag9ss", "expanded"].join(" ").trim()}">${validate_component(
									ListItem,
									"ListItem",
								).$$render(
									$$result,
									{},
									{},
									{
										icon: () => {
											return `${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``} `;
										},
										default: () => {
											return `<span class="tree-view-item">${escape(title)}</span> <div class="${["expander-icon", "expanded"].join(" ").trim()}">${validate_component(Chevron_down_16_regular, "ChevronDown").$$render($$result, {}, {}, {})}</div> `;
										},
									},
								)} ${`<div class="${["subtree-items svelte-12ag9ss", "expanded"]
									.join(" ")
									.trim()}">${validate_component(TreeView, "svelte:self").$$render($$result, { tree: pages, initial: false }, {}, {})} </div>`} </div>`;
							})()
						: `${validate_component(ListItem, "ListItem").$$render(
								$$result,
								{
									selected: `/docs${path}` === $page.url.pathname,
									href: "/docs" + path,
								},
								{},
								{
									icon: () => {
										return `${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``} `;
									},
									default: () => {
										return `${escape(title)} `;
									},
								},
							)}`
				}`;
			},
		)} </div>`;
	},
);
export { ListItem as L, TreeView as T };
