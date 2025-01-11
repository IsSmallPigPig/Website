export const index = 62;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/privacy/_page.md.js"))
		.default);
export const imports = [
	"_app/immutable/nodes/62.DV1o-XHV.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = ["_app/immutable/assets/62.DlC2VYVi.css"];
export const fonts = [];
