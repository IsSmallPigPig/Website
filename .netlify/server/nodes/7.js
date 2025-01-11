export const index = 7;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/announcing-files-v2-4-30/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/7.B8whHThc.js",
	"_app/immutable/chunks/7.iQKr12Bo.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
