export const index = 15;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/introducing-files-v2-4/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/15.CnYQSC81.js",
	"_app/immutable/chunks/15.sf-OAx4Z.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
