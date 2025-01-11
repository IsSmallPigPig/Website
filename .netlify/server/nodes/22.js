export const index = 22;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/22.C9OAHIiD.js",
	"_app/immutable/chunks/22.CewIHCR1.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
