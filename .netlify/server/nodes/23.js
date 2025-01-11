export const index = 23;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-1/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/23.C2adf1B6.js",
	"_app/immutable/chunks/23.DrpfFFd1.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
