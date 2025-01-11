export const index = 46;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/docs/customize-settings/appearance/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/46.DLTOP-2f.js",
	"_app/immutable/chunks/46.Bu6EcUCB.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/InfoBar.DUbNEjwi.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
];
export const stylesheets = [
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
];
export const fonts = [];
