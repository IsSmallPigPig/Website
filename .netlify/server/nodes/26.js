export const index = 26;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-3/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/26.Bqb71Wl3.js",
	"_app/immutable/chunks/26.D8iFGHsS.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
