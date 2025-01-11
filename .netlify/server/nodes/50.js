export const index = 50;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/features/cloud-drives/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/50.CGUNSLLr.js",
	"_app/immutable/chunks/50.w8nSYSdA.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/InfoBar.DUbNEjwi.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
];
export const stylesheets = [
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
];
export const fonts = [];
