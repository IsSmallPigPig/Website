export const index = 45;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/docs/customize-settings/advanced/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/45.C134m87G.js",
	"_app/immutable/chunks/45.D0XKX4t9.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/InfoBar.DUbNEjwi.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
];
export const stylesheets = [
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
];
export const fonts = [];
