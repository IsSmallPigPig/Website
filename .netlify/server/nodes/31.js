export const index = 31;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/v3-7/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/31.YDJwuMUp.js",
	"_app/immutable/chunks/31.Ct0cWb27.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
