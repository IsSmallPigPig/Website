export const index = 28;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-4-1/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/28.CFE2PTxF.js",
	"_app/immutable/chunks/28.Bj3B4gcV.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
