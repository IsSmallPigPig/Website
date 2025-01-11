export const index = 18;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/blog/posts/now-on-scoop/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/18.niRP0HxY.js",
	"_app/immutable/chunks/18.C_olq1RM.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/InfoBar.DUbNEjwi.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
];
export const stylesheets = [
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
];
export const fonts = [];
