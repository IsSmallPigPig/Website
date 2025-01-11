export const index = 56;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/features/tabs/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/56.ByapW46x.js",
	"_app/immutable/chunks/56.DBX_nXQR.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
