export const index = 34;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-7-7/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/34.MELxsVyT.js",
	"_app/immutable/chunks/34.B8wvESxU.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
