export const index = 12;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/introducing-files-v2-0-33/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/12.CGvuNQ6t.js",
	"_app/immutable/chunks/12.C5A5iImo.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
