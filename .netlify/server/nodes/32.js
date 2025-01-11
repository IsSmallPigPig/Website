export const index = 32;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-7-11/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/32.vsjB6N8J.js",
	"_app/immutable/chunks/32.C30zPXyS.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
