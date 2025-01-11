export const index = 41;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/contributing/code-style/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/41.L9jAPG7q.js",
	"_app/immutable/chunks/41.WElgEStu.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
