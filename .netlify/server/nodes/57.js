export const index = 57;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/features/tags/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/57.udqvupPC.js",
	"_app/immutable/chunks/57.Bzt1v4Pd.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
