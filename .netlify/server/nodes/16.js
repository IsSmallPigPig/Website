export const index = 16;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/introducing-v2-4-preview/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/16.BwHGgIMz.js",
	"_app/immutable/chunks/16.BLzTZupC.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
