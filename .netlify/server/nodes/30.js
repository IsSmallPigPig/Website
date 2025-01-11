export const index = 30;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-6/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/30.Dr1dr10A.js",
	"_app/immutable/chunks/30.BwTvj4fO.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
