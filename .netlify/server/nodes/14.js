export const index = 14;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/introducing-files-v2-3/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/14.V2WdOdFT.js",
	"_app/immutable/chunks/14.CV5rzNmO.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
