export const index = 24;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-2/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/24.CLKLP3C_.js",
	"_app/immutable/chunks/24.BosbQxHl.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
