export const index = 40;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/docs/contributing/building-from-source/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/40.Dz2rGgz4.js",
	"_app/immutable/chunks/40.DYXghaIO.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
