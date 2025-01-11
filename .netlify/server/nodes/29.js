export const index = 29;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-5/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/29.DbkqC8S9.js",
	"_app/immutable/chunks/29.Tr-SD_yN.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
