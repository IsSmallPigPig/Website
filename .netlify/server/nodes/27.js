export const index = 27;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-4/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/27.CNi7CuxM.js",
	"_app/immutable/chunks/27.B4RZC5qA.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
