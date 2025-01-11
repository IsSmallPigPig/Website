export const index = 35;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-8/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/35.bZx9EtnA.js",
	"_app/immutable/chunks/35.CSpOyA6V.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
