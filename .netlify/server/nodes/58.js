export const index = 58;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/install/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/58.DdIxRugf.js",
	"_app/immutable/chunks/58.EyUwfnuB.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/Button.DvPHpbQ4.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
	"_app/immutable/chunks/InfoBar.DUbNEjwi.js",
];
export const stylesheets = [
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
];
export const fonts = [];
