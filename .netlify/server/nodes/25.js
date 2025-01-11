export const index = 25;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-2-2/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/25.D_nkJcza.js",
	"_app/immutable/chunks/25.VLRoK5IS.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
