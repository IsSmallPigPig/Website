export const index = 52;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/features/ftp/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/52.BOdnO_Nj.js",
	"_app/immutable/chunks/52.CZ13liMc.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
