export const index = 20;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/preview-on-store/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/20.R588h_7j.js",
	"_app/immutable/chunks/20.VDz5W5Az.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
