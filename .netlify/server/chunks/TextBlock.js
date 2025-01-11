import {
	c as create_ssr_component,
	i as compute_rest_props,
	f as spread,
	d as escape,
	h as escape_object,
	b as add_attribute,
} from "./ssr.js";
import { i as is_void } from "./names.js";
/* empty css                                             */
const css = {
	code: ".text-block.svelte-zxj483{color:currentColor;display:inline-block;margin:0;padding:0}.text-block.type-display.svelte-zxj483,.text-block.type-subtitle.svelte-zxj483,.text-block.type-title.svelte-zxj483,.text-block.type-title-large.svelte-zxj483{font-family:var(--fds-font-family-display);font-weight:600}.text-block.type-body.svelte-zxj483,.text-block.type-body-large.svelte-zxj483,.text-block.type-body-strong.svelte-zxj483{font-family:var(--fds-font-family-text)}.text-block.type-caption.svelte-zxj483{font-family:var(--fds-font-family-small);font-size:var(--fds-caption-font-size);font-weight:400;line-height:16px}.text-block.type-body.svelte-zxj483,.text-block.type-body-large.svelte-zxj483,.text-block.type-body-strong.svelte-zxj483{font-size:var(--fds-body-font-size);font-weight:400;line-height:20px}.text-block.type-body-strong.svelte-zxj483{font-weight:600}.text-block.type-body-large.svelte-zxj483{font-size:var(--fds-body-large-font-size);line-height:24px}.text-block.type-subtitle.svelte-zxj483{font-size:var(--fds-subtitle-font-size);line-height:28px}.text-block.type-title.svelte-zxj483{font-size:var(--fds-title-font-size);line-height:36px}.text-block.type-title-large.svelte-zxj483{font-size:var(--fds-title-large-font-size);line-height:52px}.text-block.type-display.svelte-zxj483{font-size:var(--fds-display-font-size);line-height:92px}",
	map: `{"version":3,"file":"TextBlock.svelte","sources":["TextBlock.svelte"],"sourcesContent":["<script >/** Determines which preset text style should be used. */\\r\\nexport let variant = \\"body\\";\\r\\n/** Overrides the default HTML tag of the block's element with your own tag. */\\r\\nexport let tag = undefined;\\r\\n/** Specifies a custom class name for the text block */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the text's element. */\\r\\nexport let element = null;\\r\\nconst map = {\\r\\n    caption: {\\r\\n        tag: \\"span\\",\\r\\n        name: \\"caption\\"\\r\\n    },\\r\\n    body: {\\r\\n        tag: \\"span\\",\\r\\n        name: \\"body\\"\\r\\n    },\\r\\n    bodyStrong: {\\r\\n        tag: \\"h5\\",\\r\\n        name: \\"body-strong\\"\\r\\n    },\\r\\n    bodyLarge: {\\r\\n        tag: \\"h5\\",\\r\\n        name: \\"body-large\\"\\r\\n    },\\r\\n    subtitle: {\\r\\n        tag: \\"h4\\",\\r\\n        name: \\"subtitle\\"\\r\\n    },\\r\\n    title: {\\r\\n        tag: \\"h3\\",\\r\\n        name: \\"title\\"\\r\\n    },\\r\\n    titleLarge: {\\r\\n        tag: \\"h2\\",\\r\\n        name: \\"title-large\\"\\r\\n    },\\r\\n    display: {\\r\\n        tag: \\"h1\\",\\r\\n        name: \\"display\\"\\r\\n    }\\r\\n};\\r\\n<\/script>\\n\\n<svelte:element\\n\\tthis={tag ? tag : map[variant].tag}\\n\\tclass=\\"text-block type-{map[variant].name} {className}\\"\\n\\tbind:this={element}\\n\\t{...$$restProps}\\n>\\n\\t<slot />\\n</svelte:element>\\n\\n<style >.text-block{color:currentColor;display:inline-block;margin:0;padding:0}.text-block.type-display,.text-block.type-subtitle,.text-block.type-title,.text-block.type-title-large{font-family:var(--fds-font-family-display);font-weight:600}.text-block.type-body,.text-block.type-body-large,.text-block.type-body-strong{font-family:var(--fds-font-family-text)}.text-block.type-caption{font-family:var(--fds-font-family-small);font-size:var(--fds-caption-font-size);font-weight:400;line-height:16px}.text-block.type-body,.text-block.type-body-large,.text-block.type-body-strong{font-size:var(--fds-body-font-size);font-weight:400;line-height:20px}.text-block.type-body-strong{font-weight:600}.text-block.type-body-large{font-size:var(--fds-body-large-font-size);line-height:24px}.text-block.type-subtitle{font-size:var(--fds-subtitle-font-size);line-height:28px}.text-block.type-title{font-size:var(--fds-title-font-size);line-height:36px}.text-block.type-title-large{font-size:var(--fds-title-large-font-size);line-height:52px}.text-block.type-display{font-size:var(--fds-display-font-size);line-height:92px}</style>\\n"],"names":[],"mappings":"AAsDQ,yBAAW,CAAC,MAAM,YAAY,CAAC,QAAQ,YAAY,CAAC,OAAO,CAAC,CAAC,QAAQ,CAAC,CAAC,WAAW,2BAAa,CAAC,WAAW,4BAAc,CAAC,WAAW,yBAAW,CAAC,WAAW,+BAAiB,CAAC,YAAY,IAAI,yBAAyB,CAAC,CAAC,YAAY,GAAG,CAAC,WAAW,wBAAU,CAAC,WAAW,8BAAgB,CAAC,WAAW,+BAAiB,CAAC,YAAY,IAAI,sBAAsB,CAAC,CAAC,WAAW,2BAAa,CAAC,YAAY,IAAI,uBAAuB,CAAC,CAAC,UAAU,IAAI,uBAAuB,CAAC,CAAC,YAAY,GAAG,CAAC,YAAY,IAAI,CAAC,WAAW,wBAAU,CAAC,WAAW,8BAAgB,CAAC,WAAW,+BAAiB,CAAC,UAAU,IAAI,oBAAoB,CAAC,CAAC,YAAY,GAAG,CAAC,YAAY,IAAI,CAAC,WAAW,+BAAiB,CAAC,YAAY,GAAG,CAAC,WAAW,8BAAgB,CAAC,UAAU,IAAI,0BAA0B,CAAC,CAAC,YAAY,IAAI,CAAC,WAAW,4BAAc,CAAC,UAAU,IAAI,wBAAwB,CAAC,CAAC,YAAY,IAAI,CAAC,WAAW,yBAAW,CAAC,UAAU,IAAI,qBAAqB,CAAC,CAAC,YAAY,IAAI,CAAC,WAAW,+BAAiB,CAAC,UAAU,IAAI,2BAA2B,CAAC,CAAC,YAAY,IAAI,CAAC,WAAW,2BAAa,CAAC,UAAU,IAAI,uBAAuB,CAAC,CAAC,YAAY,IAAI"}`,
};
const TextBlock = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"variant",
			"tag",
			"class",
			"element",
		]);
		let { variant = "body" } = $$props;
		let { tag = void 0 } = $$props;
		let { class: className = "" } = $$props;
		let { element = null } = $$props;
		const map = {
			caption: { tag: "span", name: "caption" },
			body: { tag: "span", name: "body" },
			bodyStrong: { tag: "h5", name: "body-strong" },
			bodyLarge: { tag: "h5", name: "body-large" },
			subtitle: { tag: "h4", name: "subtitle" },
			title: { tag: "h3", name: "title" },
			titleLarge: { tag: "h2", name: "title-large" },
			display: { tag: "h1", name: "display" },
		};
		if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
			$$bindings.variant(variant);
		if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
			$$bindings.tag(tag);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if ($$props.element === void 0 && $$bindings.element && element !== void 0)
			$$bindings.element(element);
		$$result.css.add(css);
		return `${(tag$1 => {
			return tag$1
				? `<${tag ? tag : map[variant].tag}${spread(
						[
							{
								class:
									"text-block type-" +
									escape(map[variant].name, true) +
									" " +
									escape(className, true),
							},
							escape_object($$restProps),
						],
						{ classes: "svelte-zxj483" },
					)}${add_attribute("this", element, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``} `}${is_void(tag$1) ? "" : `</${tag$1}>`}`
				: "";
		})(tag ? tag : map[variant].tag)}`;
	},
);
export { TextBlock as T };
