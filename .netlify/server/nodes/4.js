import * as universal from "../entries/pages/_page.ts.js";

export const index = 4;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/_page.svelte.js"))
		.default);
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = [
	"_app/immutable/nodes/4.D0ecQVdH.js",
	"_app/immutable/chunks/links.5U1dMIVO.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/PageSection.9Es2A9IF.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
	"_app/immutable/chunks/i18n.Ba0U4HkE.js",
	"_app/immutable/chunks/entry.c6zL84CZ.js",
	"_app/immutable/chunks/control.CYgJF_JY.js",
	"_app/immutable/chunks/Button.DvPHpbQ4.js",
	"_app/immutable/chunks/HeaderChip.07BkBja-.js",
	"_app/immutable/chunks/each.LXqkuPC2.js",
	"_app/immutable/chunks/utils.B2a0cVJR.js",
	"_app/immutable/chunks/TextBlock.7-F4P1Fu.js",
	"_app/immutable/chunks/index.g5YcAAdQ.js",
	"_app/immutable/chunks/Metadata.wnn24fc9.js",
];
export const stylesheets = [
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
	"_app/immutable/assets/Footer.LQNE50gP.css",
	"_app/immutable/assets/i18n.B5U6Xca4.css",
];
export const fonts = [];
