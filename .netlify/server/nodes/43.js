export const index = 43;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/contributing/updates/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/43.DJmMtIfR.js",
	"_app/immutable/chunks/43.Diy8Vii0.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
