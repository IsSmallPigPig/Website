export const index = 11;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/announcing-files-v2-5-20/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/11.B_piG6tJ.js",
	"_app/immutable/chunks/11.A8eNlaMA.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
