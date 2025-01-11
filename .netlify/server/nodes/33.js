export const index = 33;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-7-6/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/33.iQRbUYgb.js",
	"_app/immutable/chunks/33.D0AfYKuq.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
