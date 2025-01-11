export const index = 48;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/customize-settings/layout/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/48.D-HnKkkf.js",
	"_app/immutable/chunks/48.UODuRn_E.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
