export const index = 9;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/announcing-files-v2-5/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/9.DECLvNNF.js",
	"_app/immutable/chunks/9.C_NhtNgQ.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
