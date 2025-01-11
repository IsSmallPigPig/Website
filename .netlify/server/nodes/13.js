export const index = 13;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/introducing-files-v2-1/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/13.Co0qzFG4.js",
	"_app/immutable/chunks/13.BXbmZfnQ.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
