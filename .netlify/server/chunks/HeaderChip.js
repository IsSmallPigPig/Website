import { c as create_ssr_component } from "./ssr.js";
import "./i18n.js";
const css = {
	code: ".header-chip.svelte-1rykaiv{display:inline-flex;margin-block-end:8px;padding:4px 16px;border-radius:50px;background-color:var(--fds-subtle-fill-secondary);color:var(--fds-text-secondary);font-size:var(--fds-body-font-size);font-weight:600;line-height:18px;user-select:none}",
	map: '{"version":3,"file":"HeaderChip.svelte","sources":["HeaderChip.svelte"],"sourcesContent":["<span class=\\"header-chip\\">\\r\\n\\t<slot />\\r\\n</span>\\r\\n\\r\\n<style lang=\\"scss\\">.header-chip {\\n  display: inline-flex;\\n  margin-block-end: 8px;\\n  padding: 4px 16px;\\n  border-radius: 50px;\\n  background-color: var(--fds-subtle-fill-secondary);\\n  color: var(--fds-text-secondary);\\n  font-size: var(--fds-body-font-size);\\n  font-weight: 600;\\n  line-height: 18px;\\n  user-select: none;\\n}</style>\\r\\n"],"names":[],"mappings":"AAImB,2BAAa,CAC9B,OAAO,CAAE,WAAW,CACpB,gBAAgB,CAAE,GAAG,CACrB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,IAAI,2BAA2B,CAAC,CAClD,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,SAAS,CAAE,IAAI,oBAAoB,CAAC,CACpC,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,IACf"}',
};
const HeaderChip = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		$$result.css.add(css);
		return `<span class="header-chip svelte-1rykaiv">${slots.default ? slots.default({}) : ``} </span>`;
	},
);
export { HeaderChip as H };
