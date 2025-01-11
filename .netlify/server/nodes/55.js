export const index = 55;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/features/layout-picker/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/55.DcIAPyCd.js",
	"_app/immutable/chunks/55.SldU9h2-.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
