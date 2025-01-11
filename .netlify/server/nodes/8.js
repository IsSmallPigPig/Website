export const index = 8;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/announcing-files-v2-4-40/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/8.CxfkhlSw.js",
	"_app/immutable/chunks/8.BYV4f2TL.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
