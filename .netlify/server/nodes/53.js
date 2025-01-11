export const index = 53;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import("../entries/pages/docs/features/git/_page.md.js")
	).default);
export const imports = [
	"_app/immutable/nodes/53.Sj5sXahI.js",
	"_app/immutable/chunks/53.CF89bnGm.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
