export const index = 37;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-8-5/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/37.Bo1PxJkm.js",
	"_app/immutable/chunks/37.BHQqMtKc.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
