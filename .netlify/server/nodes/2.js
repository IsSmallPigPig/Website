import * as universal from "../entries/pages/blog/posts/_layout.ts.js";

export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/_layout.svelte.js")
	).default);
export { universal };
export const universal_id = "src/routes/blog/posts/+layout.ts";
export const imports = [
	"_app/immutable/nodes/2.CEZ783er.js",
	"_app/immutable/chunks/49.BZwvlIsL.js",
	"_app/immutable/chunks/index.g5YcAAdQ.js",
	"_app/immutable/chunks/control.CYgJF_JY.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
	"_app/immutable/chunks/i18n.Ba0U4HkE.js",
	"_app/immutable/chunks/entry.c6zL84CZ.js",
	"_app/immutable/chunks/IconButton.BU4lXNwk.js",
	"_app/immutable/chunks/TextBlock.7-F4P1Fu.js",
	"_app/immutable/chunks/Metadata.wnn24fc9.js",
	"_app/immutable/chunks/utils.B2a0cVJR.js",
];
export const stylesheets = [
	"_app/immutable/assets/2.DXTUx9qf.css",
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
	"_app/immutable/assets/i18n.B5U6Xca4.css",
];
export const fonts = [];
