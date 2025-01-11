export const index = 19;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/now-on-winget/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/19.DM-mRsXE.js",
	"_app/immutable/chunks/19.8MDcYWLK.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
