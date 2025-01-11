import {
	c as create_ssr_component,
	i as compute_rest_props,
	k as get_current_component,
	f as spread,
	g as escape_attribute_value,
	d as escape,
	h as escape_object,
	b as add_attribute,
} from "./ssr.js";
import { i as is_void } from "./names.js";
import { c as createEventForwarder } from "./internal2.js";
/* empty css                                             */
const css = {
	code: ".icon-button.svelte-1iys5lx{align-items:center;background-color:var(--fds-subtle-fill-transparent);border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);display:inline-flex;justify-content:center;min-block-size:30px;min-inline-size:30px;outline:none;padding:8px}.icon-button.svelte-1iys5lx:focus-visible{box-shadow:var(--fds-focus-stroke)}.icon-button.svelte-1iys5lx:hover{background-color:var(--fds-subtle-fill-secondary)}.icon-button.svelte-1iys5lx:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-secondary)}.icon-button.svelte-1iys5lx:disabled{background-color:var(--fds-subtle-fill-disabled);color:var(--fds-text-disabled)}.icon-button.svelte-1iys5lx svg{fill:currentColor;block-size:auto;inline-size:16px}",
	map: '{"version":3,"file":"IconButton.svelte","sources":["IconButton.svelte"],"sourcesContent":["<script >import { get_current_component } from \\"svelte/internal\\";\\r\\nimport { createEventForwarder } from \\"../internal\\";\\r\\n/** @restProps {button | a} */\\r\\n/** Sets an href value and converts the button element into an anchor. */\\r\\nexport let href = \\"\\";\\r\\n/** Controls whether the button is intended for user interaction, and styles it accordingly. */\\r\\nexport let disabled = false;\\r\\n/** Specifies a custom class name for the button. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the button or anchor element. */\\r\\nexport let element = null;\\r\\nconst forwardEvents = createEventForwarder(get_current_component());\\r\\n</script>\\n\\n<!--\\n@component\\nAn Icon Button is a clickable control that triggers an immediate action. Unlike the Button control, it serves the purpose of encapsulating an icon glyph as it’s content. [Docs](https://fluent-svelte.vercel.app/docs/components/iconbutton)\\n- Usage:\\n    ```tsx\\n    <IconButton>\\n        <svg width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n            <path d=\\"M8 14A6 6 0 108 2a6 6 0 000 12zm0-1A5 5 0 118 3a5 5 0 010 10z\\" />\\n        </svg>\\n    </IconButton>\\n    ```\\n-->\\n<svelte:element\\n\\tthis={href && !disabled ? \\"a\\" : \\"button\\"}\\n\\tuse:forwardEvents\\n\\tbind:this={element}\\n\\trole={href && !disabled ? \\"button\\" : undefined}\\n\\thref={href && !disabled ? href : undefined}\\n\\tclass=\\"icon-button {className}\\"\\n\\tclass:disabled\\n\\t{...$$restProps}\\n>\\n\\t<slot />\\n</svelte:element>\\n\\n<style >.icon-button{align-items:center;background-color:var(--fds-subtle-fill-transparent);border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);display:inline-flex;justify-content:center;min-block-size:30px;min-inline-size:30px;outline:none;padding:8px}.icon-button:focus-visible{box-shadow:var(--fds-focus-stroke)}.icon-button:hover{background-color:var(--fds-subtle-fill-secondary)}.icon-button:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-secondary)}.icon-button:disabled{background-color:var(--fds-subtle-fill-disabled);color:var(--fds-text-disabled)}.icon-button :global(svg){fill:currentColor;block-size:auto;inline-size:16px}</style>\\n"],"names":[],"mappings":"AAwCQ,2BAAY,CAAC,YAAY,MAAM,CAAC,iBAAiB,IAAI,6BAA6B,CAAC,CAAC,OAAO,IAAI,CAAC,cAAc,IAAI,2BAA2B,CAAC,CAAC,WAAW,UAAU,CAAC,MAAM,IAAI,kBAAkB,CAAC,CAAC,QAAQ,WAAW,CAAC,gBAAgB,MAAM,CAAC,eAAe,IAAI,CAAC,gBAAgB,IAAI,CAAC,QAAQ,IAAI,CAAC,QAAQ,GAAG,CAAC,2BAAY,cAAc,CAAC,WAAW,IAAI,kBAAkB,CAAC,CAAC,2BAAY,MAAM,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,2BAAY,OAAO,CAAC,iBAAiB,IAAI,0BAA0B,CAAC,CAAC,MAAM,IAAI,oBAAoB,CAAC,CAAC,2BAAY,SAAS,CAAC,iBAAiB,IAAI,0BAA0B,CAAC,CAAC,MAAM,IAAI,mBAAmB,CAAC,CAAC,2BAAY,CAAS,GAAI,CAAC,KAAK,YAAY,CAAC,WAAW,IAAI,CAAC,YAAY,IAAI"}',
};
const IconButton = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"href",
			"disabled",
			"class",
			"element",
		]);
		let { href = "" } = $$props;
		let { disabled = false } = $$props;
		let { class: className = "" } = $$props;
		let { element = null } = $$props;
		createEventForwarder(get_current_component());
		if ($$props.href === void 0 && $$bindings.href && href !== void 0)
			$$bindings.href(href);
		if (
			$$props.disabled === void 0 &&
			$$bindings.disabled &&
			disabled !== void 0
		)
			$$bindings.disabled(disabled);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if ($$props.element === void 0 && $$bindings.element && element !== void 0)
			$$bindings.element(element);
		$$result.css.add(css);
		return ` ${(tag => {
			return tag
				? `<${href && !disabled ? "a" : "button"}${spread(
						[
							{
								role: escape_attribute_value(
									href && !disabled ? "button" : void 0,
								),
							},
							{
								href: escape_attribute_value(href && !disabled ? href : void 0),
							},
							{
								class: "icon-button " + escape(className, true),
							},
							escape_object($$restProps),
						],
						{
							classes: (disabled ? "disabled" : "") + " svelte-1iys5lx",
						},
					)}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``} `}${is_void(tag) ? "" : `</${tag}>`}`
				: "";
		})(href && !disabled ? "a" : "button")}`;
	},
);
export { IconButton as I };
