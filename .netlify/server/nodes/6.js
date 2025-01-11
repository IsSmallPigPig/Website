export const index = 6;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/announcing-files-v2/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/6.BlbW7Ppi.js",
	"_app/immutable/chunks/6.DVzAWPqx.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
