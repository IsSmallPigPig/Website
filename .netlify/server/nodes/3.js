import * as server from "../entries/pages/docs/_layout.server.ts.js";

export const index = 3;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/docs/_layout.svelte.js"))
		.default);
export { server };
export const server_id = "src/routes/docs/+layout.server.ts";
export const imports = [
	"_app/immutable/nodes/3.DQ2zM-fP.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/each.LXqkuPC2.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
	"_app/immutable/chunks/entry.c6zL84CZ.js",
	"_app/immutable/chunks/control.CYgJF_JY.js",
	"_app/immutable/chunks/i18n.Ba0U4HkE.js",
	"_app/immutable/chunks/links.5U1dMIVO.js",
	"_app/immutable/chunks/TreeView.RE-U3aVW.js",
	"_app/immutable/chunks/TextBlock.7-F4P1Fu.js",
	"_app/immutable/chunks/Button.DvPHpbQ4.js",
	"_app/immutable/chunks/Metadata.wnn24fc9.js",
	"_app/immutable/chunks/utils.B2a0cVJR.js",
];
export const stylesheets = [
	"_app/immutable/assets/3.CizGb9ct.css",
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
	"_app/immutable/assets/i18n.B5U6Xca4.css",
];
export const fonts = [];
