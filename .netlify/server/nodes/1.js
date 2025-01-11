export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/_error.svelte.js"))
		.default);
export const imports = [
	"_app/immutable/nodes/1.D4-6YalU.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/i18n.Ba0U4HkE.js",
	"_app/immutable/chunks/entry.c6zL84CZ.js",
	"_app/immutable/chunks/control.CYgJF_JY.js",
	"_app/immutable/chunks/Metadata.wnn24fc9.js",
];
export const stylesheets = [
	"_app/immutable/assets/1.BmD8erwF.css",
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
	"_app/immutable/assets/i18n.B5U6Xca4.css",
];
export const fonts = [];
