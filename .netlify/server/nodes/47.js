export const index = 47;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/docs/customize-settings/files-and-folders/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/47.xuDo3fyW.js",
	"_app/immutable/chunks/47.YqY4Wqyc.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
