export const index = 51;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/features/folder-config/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/51.DrY4bT43.js",
	"_app/immutable/chunks/51.C63-3Z1j.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
