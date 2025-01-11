import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
	const v = glob[path];
	if (v) {
		return typeof v === "function" ? v() : Promise.resolve(v);
	}
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
			reject.bind(
				null,
				new Error(
					"Unknown variable dynamic import: " +
						path +
						(path.split("/").length !== segs
							? ". Note that variables only represent file names one level deep."
							: ""),
				),
			),
		);
	});
};
const load = async ({ route }) => {
	const slug = route.id.replace("/blog/posts/", "") ?? null;
	try {
		return {
			slug,
			...(
				await __variableDynamicImportRuntimeHelper(
					/* @__PURE__ */ Object.assign({
						"./announcing-files-v2-4-30/+page.md": () =>
							import("./announcing-files-v2-4-30/_page.md.js"),
						"./announcing-files-v2-4-40/+page.md": () =>
							import("./announcing-files-v2-4-40/_page.md.js"),
						"./announcing-files-v2-5-10/+page.md": () =>
							import("./announcing-files-v2-5-10/_page.md.js"),
						"./announcing-files-v2-5-20/+page.md": () =>
							import("./announcing-files-v2-5-20/_page.md.js"),
						"./announcing-files-v2-5/+page.md": () =>
							import("./announcing-files-v2-5/_page.md.js"),
						"./announcing-files-v2/+page.md": () =>
							import("./announcing-files-v2/_page.md.js"),
						"./introducing-files-v2-0-33/+page.md": () =>
							import("./introducing-files-v2-0-33/_page.md.js"),
						"./introducing-files-v2-1/+page.md": () =>
							import("./introducing-files-v2-1/_page.md.js"),
						"./introducing-files-v2-3/+page.md": () =>
							import("./introducing-files-v2-3/_page.md.js"),
						"./introducing-files-v2-4/+page.md": () =>
							import("./introducing-files-v2-4/_page.md.js"),
						"./introducing-v2-4-preview/+page.md": () =>
							import("./introducing-v2-4-preview/_page.md.js"),
						"./listary-integration/+page.md": () =>
							import("./listary-integration/_page.md.js"),
						"./now-on-scoop/+page.md": () =>
							import("./now-on-scoop/_page.md.js"),
						"./now-on-winget/+page.md": () =>
							import("./now-on-winget/_page.md.js"),
						"./preview-on-store/+page.md": () =>
							import("./preview-on-store/_page.md.js"),
						"./ten-things/+page.md": () => import("./ten-things/_page.md.js"),
						"./v3-1/+page.md": () => import("./v3-1/_page.md.js"),
						"./v3-2-2/+page.md": () => import("./v3-2-2/_page.md.js"),
						"./v3-2/+page.md": () => import("./v3-2/_page.md.js"),
						"./v3-3/+page.md": () => import("./v3-3/_page.md.js"),
						"./v3-4-1/+page.md": () => import("./v3-4-1/_page.md.js"),
						"./v3-4/+page.md": () => import("./v3-4/_page.md.js"),
						"./v3-5/+page.md": () => import("./v3-5/_page.md.js"),
						"./v3-6/+page.md": () => import("./v3-6/_page.md.js"),
						"./v3-7-11/+page.md": () => import("./v3-7-11/_page.md.js"),
						"./v3-7-6/+page.md": () => import("./v3-7-6/_page.md.js"),
						"./v3-7-7/+page.md": () => import("./v3-7-7/_page.md.js"),
						"./v3-7/+page.md": () => import("./v3-7/_page.md.js"),
						"./v3-8-1/+page.md": () => import("./v3-8-1/_page.md.js"),
						"./v3-8-5/+page.md": () => import("./v3-8-5/_page.md.js"),
						"./v3-8/+page.md": () => import("./v3-8/_page.md.js"),
						"./v3/+page.md": () => import("./v3/_page.md.js"),
					}),
					`./${slug}/+page.md`,
					3,
				)
			).metadata,
		};
	} catch {
		throw error(404, "No such blog post was found!");
	}
};
export { load };
