export const index = 36;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-8-1/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/36.DVK8bJkf.js",
	"_app/immutable/chunks/36.CUKtjT1V.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
