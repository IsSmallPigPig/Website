export const index = 10;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import(
			"../entries/pages/blog/posts/announcing-files-v2-5-10/_page.md.js"
		)
	).default);
export const imports = [
	"_app/immutable/nodes/10.BMRbsxiB.js",
	"_app/immutable/chunks/10.B0X2wRr2.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
];
export const stylesheets = [];
export const fonts = [];
