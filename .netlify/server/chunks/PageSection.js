import {
	c as create_ssr_component,
	i as compute_rest_props,
	f as spread,
	h as escape_object,
	d as escape,
	n as compute_slots,
} from "./ssr.js";
import "./i18n.js";
const css = {
	code: ".page-section.svelte-1kih78c{position:relative;z-index:1}.page-section.svelte-1kih78c h1,.page-section.svelte-1kih78c h2,.page-section.svelte-1kih78c h3{margin:0;color:var(--fds-text-primary);font-weight:600}.page-section.svelte-1kih78c h1{font-size:7.2rem}.page-section.svelte-1kih78c h2{font-size:4.8rem}.page-section.svelte-1kih78c h3{font-size:3.2rem}.page-section.svelte-1kih78c p{max-inline-size:65ch;margin-block:12px 24px;color:var(--fds-text-secondary);font-size:1.6rem;font-weight:400;line-height:1.65}@media(prefers-color-scheme: dark){.page-section.svelte-1kih78c p{color:var(--fds-text-tertiary)}}.page-section.svelte-1kih78c hr{margin:0 0 24px;border:none;border-block-start:1px solid var(--fds-divider-stroke-default)}.page-section.svelte-1kih78c .buttons-spacer{display:inline-flex;flex-wrap:wrap;gap:8px}.page-section-inner.svelte-1kih78c{position:relative;inline-size:100%;max-inline-size:2048px;block-size:100%;margin:0 auto;padding:72px}@media screen and (width < 648px){.page-section-inner.svelte-1kih78c{padding:36px}}",
	map: `{"version":3,"file":"PageSection.svelte","sources":["PageSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let type = undefined;\\nlet className = \\"\\";\\nexport { className as class };\\n<\/script>\\r\\n\\r\\n<!-- go complain to https://github.com/sveltejs/svelte/pull/5481 -->\\r\\n{#if type === \\"header\\"}\\r\\n\\t<header {...$$restProps} class=\\"page-section{' ' + className || ''}\\">\\r\\n\\t\\t<slot name=\\"outer\\" />\\r\\n\\t\\t{#if $$slots.default}\\r\\n\\t\\t\\t<div class=\\"page-section-inner\\">\\r\\n\\t\\t\\t\\t<slot />\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t</header>\\r\\n{:else if type === \\"footer\\"}\\r\\n\\t<footer {...$$restProps} class=\\"page-section{' ' + className || ''}\\">\\r\\n\\t\\t<slot name=\\"outer\\" />\\r\\n\\t\\t{#if $$slots.default}\\r\\n\\t\\t\\t<div class=\\"page-section-inner\\">\\r\\n\\t\\t\\t\\t<slot />\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t</footer>\\r\\n{:else}\\r\\n\\t<section {...$$restProps} class=\\"page-section{' ' + className || ''}\\">\\r\\n\\t\\t<slot name=\\"outer\\" />\\r\\n\\t\\t{#if $$slots.default}\\r\\n\\t\\t\\t<div class=\\"page-section-inner\\">\\r\\n\\t\\t\\t\\t<slot />\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t</section>\\r\\n{/if}\\r\\n\\r\\n<style lang=\\"scss\\">.page-section {\\n  position: relative;\\n  z-index: 1;\\n}\\n.page-section :global(h1),\\n.page-section :global(h2),\\n.page-section :global(h3) {\\n  margin: 0;\\n  color: var(--fds-text-primary);\\n  font-weight: 600;\\n}\\n.page-section :global(h1) {\\n  font-size: 7.2rem;\\n}\\n.page-section :global(h2) {\\n  font-size: 4.8rem;\\n}\\n.page-section :global(h3) {\\n  font-size: 3.2rem;\\n}\\n.page-section :global(p) {\\n  max-inline-size: 65ch;\\n  margin-block: 12px 24px;\\n  color: var(--fds-text-secondary);\\n  font-size: 1.6rem;\\n  font-weight: 400;\\n  line-height: 1.65;\\n}\\n@media (prefers-color-scheme: dark) {\\n  .page-section :global(p) {\\n    color: var(--fds-text-tertiary);\\n  }\\n}\\n.page-section :global(hr) {\\n  margin: 0 0 24px;\\n  border: none;\\n  border-block-start: 1px solid var(--fds-divider-stroke-default);\\n}\\n.page-section :global(.buttons-spacer) {\\n  display: inline-flex;\\n  flex-wrap: wrap;\\n  gap: 8px;\\n}\\n.page-section-inner {\\n  position: relative;\\n  inline-size: 100%;\\n  max-inline-size: 2048px;\\n  block-size: 100%;\\n  margin: 0 auto;\\n  padding: 72px;\\n}\\n@media screen and (width < 648px) {\\n  .page-section-inner {\\n    padding: 36px;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"AAmCmB,4BAAc,CAC/B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CACX,CACA,4BAAa,CAAS,EAAG,CACzB,4BAAa,CAAS,EAAG,CACzB,4BAAa,CAAS,EAAI,CACxB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAC9B,WAAW,CAAE,GACf,CACA,4BAAa,CAAS,EAAI,CACxB,SAAS,CAAE,MACb,CACA,4BAAa,CAAS,EAAI,CACxB,SAAS,CAAE,MACb,CACA,4BAAa,CAAS,EAAI,CACxB,SAAS,CAAE,MACb,CACA,4BAAa,CAAS,CAAG,CACvB,eAAe,CAAE,IAAI,CACrB,YAAY,CAAE,IAAI,CAAC,IAAI,CACvB,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACf,CACA,MAAO,uBAAuB,IAAI,CAAE,CAClC,4BAAa,CAAS,CAAG,CACvB,KAAK,CAAE,IAAI,mBAAmB,CAChC,CACF,CACA,4BAAa,CAAS,EAAI,CACxB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,kBAAkB,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,4BAA4B,CAChE,CACA,4BAAa,CAAS,eAAiB,CACrC,OAAO,CAAE,WAAW,CACpB,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GACP,CACA,kCAAoB,CAClB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IACX,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,KAAK,CAAE,CAChC,kCAAoB,CAClB,OAAO,CAAE,IACX,CACF"}`,
};
const PageSection = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, ["type", "class"]);
		let $$slots = compute_slots(slots);
		let { type = void 0 } = $$props;
		let { class: className = "" } = $$props;
		if ($$props.type === void 0 && $$bindings.type && type !== void 0)
			$$bindings.type(type);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		$$result.css.add(css);
		return ` ${
			type === "header"
				? `<header${spread(
						[
							escape_object($$restProps),
							{
								class: "page-section" + escape(" " + className || "", true),
							},
						],
						{ classes: "svelte-1kih78c" },
					)}>${slots.outer ? slots.outer({}) : ``} ${$$slots.default ? `<div class="page-section-inner svelte-1kih78c">${slots.default ? slots.default({}) : ``}</div>` : ``}</header>`
				: `${
						type === "footer"
							? `<footer${spread(
									[
										escape_object($$restProps),
										{
											class:
												"page-section" + escape(" " + className || "", true),
										},
									],
									{ classes: "svelte-1kih78c" },
								)}>${slots.outer ? slots.outer({}) : ``} ${$$slots.default ? `<div class="page-section-inner svelte-1kih78c">${slots.default ? slots.default({}) : ``}</div>` : ``}</footer>`
							: `<section${spread(
									[
										escape_object($$restProps),
										{
											class:
												"page-section" + escape(" " + className || "", true),
										},
									],
									{ classes: "svelte-1kih78c" },
								)}>${slots.outer ? slots.outer({}) : ``} ${$$slots.default ? `<div class="page-section-inner svelte-1kih78c">${slots.default ? slots.default({}) : ``}</div>` : ``}</section>`
					}`
		}`;
	},
);
export { PageSection as P };
