export const index = 42;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/contributing/translating/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/42.l0gLXy7c.js",
	"_app/immutable/chunks/42.MESUyzbA.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
