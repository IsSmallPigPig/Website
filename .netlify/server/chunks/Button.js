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
	code: ".button.svelte-1ulhukx{align-items:center;border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;cursor:default;display:inline-flex;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;justify-content:center;line-height:20px;outline:none;padding-block:4px 6px;padding-inline:11px;position:relative;text-decoration:none;transition:var(--fds-control-faster-duration) ease background;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.button.svelte-1ulhukx:focus-visible{box-shadow:var(--fds-focus-stroke)}.button.style-standard.svelte-1ulhukx{background-clip:padding-box;background-color:var(--fds-control-fill-default);border:1px solid;border-color:var(--fds-control-border-default);color:var(--fds-text-primary)}.button.style-standard.svelte-1ulhukx:hover{background-color:var(--fds-control-fill-secondary)}.button.style-standard.svelte-1ulhukx:active{background-color:var(--fds-control-fill-tertiary);border-color:var(--fds-control-stroke-default);color:var(--fds-text-secondary)}.button.style-standard.disabled.svelte-1ulhukx{background-color:var(--fds-control-fill-disabled);border-color:var(--fds-control-stroke-default);color:var(--fds-text-disabled)}.button.style-accent.svelte-1ulhukx{background-color:var(--fds-accent-default);border:1px solid var(--fds-control-stroke-on-accent-default);border-bottom-color:var(--fds-control-stroke-on-accent-secondary);color:var(--fds-text-on-accent-primary);transition:var(--fds-control-faster-duration) ease border-color}.button.style-accent.svelte-1ulhukx:hover{background-color:var(--fds-accent-secondary)}.button.style-accent.svelte-1ulhukx:active{background-color:var(--fds-accent-tertiary);border-color:transparent;color:var(--fds-text-on-accent-secondary)}.button.style-accent.disabled.svelte-1ulhukx{background-color:var(--fds-accent-disabled);border-color:transparent;color:var(--fds-text-on-accent-disabled)}.button.style-hyperlink.svelte-1ulhukx{background-color:var(--fds-subtle-fill-transparent);color:var(--fds-accent-text-primary);cursor:pointer}.button.style-hyperlink.svelte-1ulhukx:hover{background-color:var(--fds-subtle-fill-secondary)}.button.style-hyperlink.svelte-1ulhukx:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-accent-text-tertiary)}.button.style-hyperlink.disabled.svelte-1ulhukx{color:var(--fds-accent-text-disabled)}.button.disabled.svelte-1ulhukx{pointer-events:none}",
	map: '{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script >import { get_current_component } from \\"svelte/internal\\";\\r\\nimport { createEventForwarder } from \\"../internal\\";\\r\\n/** @restProps {button | a} */\\r\\n/** Specifies the visual styling of the button. */\\r\\nexport let variant = \\"standard\\";\\r\\n/** Sets an href value and converts the button element into an anchor/ */\\r\\nexport let href = \\"\\";\\r\\n/** Controls whether the button is intended for user interaction, and styles it accordingly. */\\r\\nexport let disabled = false;\\r\\n/** Specifies a custom class name for the button. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the button or anchor element. */\\r\\nexport let element = null;\\r\\nconst forwardEvents = createEventForwarder(get_current_component());\\r\\n</script>\\n\\n<!--\\n@component\\nA button gives the user a way to trigger an immediate action. Some buttons are specialized for particular tasks, such as navigation, repeated actions, or presenting menus. [Docs](https://fluent-svelte.vercel.app/docs/components/button)\\n- Usage:\\n    ```tsx\\n    <Button>Click me!</Button>\\n    ```\\n-->\\n<svelte:element\\n\\tthis={href && !disabled ? \\"a\\" : \\"button\\"}\\n\\tuse:forwardEvents\\n\\tbind:this={element}\\n\\trole={href && !disabled ? \\"button\\" : undefined}\\n\\thref={href && !disabled ? href : undefined}\\n\\tclass=\\"button style-{variant} {className}\\"\\n\\tclass:disabled\\n\\t{...$$restProps}\\n>\\n\\t<slot />\\n</svelte:element>\\n\\n<style >.button{align-items:center;border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;cursor:default;display:inline-flex;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;justify-content:center;line-height:20px;outline:none;padding-block:4px 6px;padding-inline:11px;position:relative;text-decoration:none;transition:var(--fds-control-faster-duration) ease background;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.button:focus-visible{box-shadow:var(--fds-focus-stroke)}.button.style-standard{background-clip:padding-box;background-color:var(--fds-control-fill-default);border:1px solid;border-color:var(--fds-control-border-default);color:var(--fds-text-primary)}.button.style-standard:hover{background-color:var(--fds-control-fill-secondary)}.button.style-standard:active{background-color:var(--fds-control-fill-tertiary);border-color:var(--fds-control-stroke-default);color:var(--fds-text-secondary)}.button.style-standard.disabled{background-color:var(--fds-control-fill-disabled);border-color:var(--fds-control-stroke-default);color:var(--fds-text-disabled)}.button.style-accent{background-color:var(--fds-accent-default);border:1px solid var(--fds-control-stroke-on-accent-default);border-bottom-color:var(--fds-control-stroke-on-accent-secondary);color:var(--fds-text-on-accent-primary);transition:var(--fds-control-faster-duration) ease border-color}.button.style-accent:hover{background-color:var(--fds-accent-secondary)}.button.style-accent:active{background-color:var(--fds-accent-tertiary);border-color:transparent;color:var(--fds-text-on-accent-secondary)}.button.style-accent.disabled{background-color:var(--fds-accent-disabled);border-color:transparent;color:var(--fds-text-on-accent-disabled)}.button.style-hyperlink{background-color:var(--fds-subtle-fill-transparent);color:var(--fds-accent-text-primary);cursor:pointer}.button.style-hyperlink:hover{background-color:var(--fds-subtle-fill-secondary)}.button.style-hyperlink:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-accent-text-tertiary)}.button.style-hyperlink.disabled{color:var(--fds-accent-text-disabled)}.button.disabled{pointer-events:none}</style>\\n"],"names":[],"mappings":"AAsCQ,sBAAO,CAAC,YAAY,MAAM,CAAC,OAAO,IAAI,CAAC,cAAc,IAAI,2BAA2B,CAAC,CAAC,WAAW,UAAU,CAAC,OAAO,OAAO,CAAC,QAAQ,WAAW,CAAC,YAAY,IAAI,sBAAsB,CAAC,CAAC,UAAU,IAAI,oBAAoB,CAAC,CAAC,YAAY,GAAG,CAAC,gBAAgB,MAAM,CAAC,YAAY,IAAI,CAAC,QAAQ,IAAI,CAAC,cAAc,GAAG,CAAC,GAAG,CAAC,eAAe,IAAI,CAAC,SAAS,QAAQ,CAAC,gBAAgB,IAAI,CAAC,WAAW,IAAI,6BAA6B,CAAC,CAAC,IAAI,CAAC,UAAU,CAAC,oBAAoB,IAAI,CAAC,iBAAiB,IAAI,CAAC,gBAAgB,IAAI,CAAC,YAAY,IAAI,CAAC,sBAAO,cAAc,CAAC,WAAW,IAAI,kBAAkB,CAAC,CAAC,OAAO,8BAAe,CAAC,gBAAgB,WAAW,CAAC,iBAAiB,IAAI,0BAA0B,CAAC,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,aAAa,IAAI,4BAA4B,CAAC,CAAC,MAAM,IAAI,kBAAkB,CAAC,CAAC,OAAO,8BAAe,MAAM,CAAC,iBAAiB,IAAI,4BAA4B,CAAC,CAAC,OAAO,8BAAe,OAAO,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,aAAa,IAAI,4BAA4B,CAAC,CAAC,MAAM,IAAI,oBAAoB,CAAC,CAAC,OAAO,eAAe,wBAAS,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,aAAa,IAAI,4BAA4B,CAAC,CAAC,MAAM,IAAI,mBAAmB,CAAC,CAAC,OAAO,4BAAa,CAAC,iBAAiB,IAAI,oBAAoB,CAAC,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,IAAI,sCAAsC,CAAC,CAAC,oBAAoB,IAAI,wCAAwC,CAAC,CAAC,MAAM,IAAI,4BAA4B,CAAC,CAAC,WAAW,IAAI,6BAA6B,CAAC,CAAC,IAAI,CAAC,YAAY,CAAC,OAAO,4BAAa,MAAM,CAAC,iBAAiB,IAAI,sBAAsB,CAAC,CAAC,OAAO,4BAAa,OAAO,CAAC,iBAAiB,IAAI,qBAAqB,CAAC,CAAC,aAAa,WAAW,CAAC,MAAM,IAAI,8BAA8B,CAAC,CAAC,OAAO,aAAa,wBAAS,CAAC,iBAAiB,IAAI,qBAAqB,CAAC,CAAC,aAAa,WAAW,CAAC,MAAM,IAAI,6BAA6B,CAAC,CAAC,OAAO,+BAAgB,CAAC,iBAAiB,IAAI,6BAA6B,CAAC,CAAC,MAAM,IAAI,yBAAyB,CAAC,CAAC,OAAO,OAAO,CAAC,OAAO,+BAAgB,MAAM,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,OAAO,+BAAgB,OAAO,CAAC,iBAAiB,IAAI,0BAA0B,CAAC,CAAC,MAAM,IAAI,0BAA0B,CAAC,CAAC,OAAO,gBAAgB,wBAAS,CAAC,MAAM,IAAI,0BAA0B,CAAC,CAAC,OAAO,wBAAS,CAAC,eAAe,IAAI"}',
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"variant",
		"href",
		"disabled",
		"class",
		"element",
	]);
	let { variant = "standard" } = $$props;
	let { href = "" } = $$props;
	let { disabled = false } = $$props;
	let { class: className = "" } = $$props;
	let { element = null } = $$props;
	createEventForwarder(get_current_component());
	if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
		$$bindings.variant(variant);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0)
		$$bindings.href(href);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
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
							class:
								"button style-" +
								escape(variant, true) +
								" " +
								escape(className, true),
						},
						escape_object($$restProps),
					],
					{
						classes: (disabled ? "disabled" : "") + " svelte-1ulhukx",
					},
				)}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``} `}${is_void(tag) ? "" : `</${tag}>`}`
			: "";
	})(href && !disabled ? "a" : "button")}`;
});
export { Button as B };
