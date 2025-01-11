export const index = 21;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/ten-things/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/21.BhEIbXLJ.js",
	"_app/immutable/chunks/21.CSsdWgWn.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
