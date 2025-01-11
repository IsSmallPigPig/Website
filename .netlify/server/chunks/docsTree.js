import { metadata as metadata$3 } from "../entries/pages/docs/_page.md.js";
import { metadata as metadata$4 } from "../entries/pages/docs/contributing/building-from-source/_page.md.js";
import { metadata as metadata$5 } from "../entries/pages/docs/contributing/code-style/_page.md.js";
import { metadata as metadata$6 } from "../entries/pages/docs/contributing/translating/_page.md.js";
import { metadata as metadata$7 } from "../entries/pages/docs/contributing/updates/_page.md.js";
import { metadata as metadata$8 } from "../entries/pages/docs/customize-settings/actions/_page.md.js";
import { metadata as metadata$9 } from "../entries/pages/docs/customize-settings/advanced/_page.md.js";
import { metadata as metadata$a } from "../entries/pages/docs/customize-settings/appearance/_page.md.js";
import { metadata as metadata$b } from "../entries/pages/docs/customize-settings/files-and-folders/_page.md.js";
import { metadata as metadata$c } from "../entries/pages/docs/customize-settings/layout/_page.md.js";
import { metadata as metadata$d } from "../entries/pages/docs/features/cloud-drives/_page.md.js";
import { metadata as metadata$e } from "../entries/pages/docs/features/folder-config/_page.md.js";
import { metadata as metadata$f } from "../entries/pages/docs/features/ftp/_page.md.js";
import { metadata as metadata$g } from "../entries/pages/docs/features/git/_page.md.js";
import { metadata as metadata$h } from "../entries/pages/docs/features/integrations/_page.md.js";
import { metadata as metadata$i } from "../entries/pages/docs/features/layout-picker/_page.md.js";
import { metadata as metadata$j } from "../entries/pages/docs/features/tabs/_page.md.js";
import { metadata as metadata$k } from "../entries/pages/docs/features/tags/_page.md.js";
import { metadata as metadata$l } from "../entries/pages/docs/install/_page.md.js";
import { e as error } from "./index.js";
const metadata$2 = { title: "Contributing to Files" };
const metadata$1 = { title: "Customize settings" };
const metadata = { title: "Features" };
const PATH_TRIM = /(?:\.\.\/routes\/docs)((\/[\w-]+)+)\//;
const getPages = () => {
	const rawPages = /* @__PURE__ */ Object.assign({
		"../routes/docs/+page.md": metadata$3,
		"../routes/docs/contributing/building-from-source/+page.md": metadata$4,
		"../routes/docs/contributing/code-style/+page.md": metadata$5,
		"../routes/docs/contributing/translating/+page.md": metadata$6,
		"../routes/docs/contributing/updates/+page.md": metadata$7,
		"../routes/docs/customize-settings/actions/+page.md": metadata$8,
		"../routes/docs/customize-settings/advanced/+page.md": metadata$9,
		"../routes/docs/customize-settings/appearance/+page.md": metadata$a,
		"../routes/docs/customize-settings/files-and-folders/+page.md": metadata$b,
		"../routes/docs/customize-settings/layout/+page.md": metadata$c,
		"../routes/docs/features/cloud-drives/+page.md": metadata$d,
		"../routes/docs/features/folder-config/+page.md": metadata$e,
		"../routes/docs/features/ftp/+page.md": metadata$f,
		"../routes/docs/features/git/+page.md": metadata$g,
		"../routes/docs/features/integrations/+page.md": metadata$h,
		"../routes/docs/features/layout-picker/+page.md": metadata$i,
		"../routes/docs/features/tabs/+page.md": metadata$j,
		"../routes/docs/features/tags/+page.md": metadata$k,
		"../routes/docs/install/+page.md": metadata$l,
	});
	return Object.entries(rawPages).map(([path, node]) => {
		return {
			title: node.title,
			path: path.match(PATH_TRIM)?.[1] ?? "",
		};
	});
};
const getTree = pages => {
	const rawCategories = /* @__PURE__ */ Object.assign({
		"../routes/docs/contributing/category.md": metadata$2,
		"../routes/docs/customize-settings/category.md": metadata$1,
		"../routes/docs/features/category.md": metadata,
	});
	const categories = Object.entries(rawCategories).map(([path, node]) => {
		const docsPath = path.match(PATH_TRIM)?.[1];
		if (!docsPath) error(500, `this is an invalid docs page path: ${path}`);
		return {
			pages: pages.filter(page => page.path.startsWith(docsPath)),
			path: docsPath,
			...node,
		};
	});
	const topLevelPages = /* @__PURE__ */ Object.assign({
		"../routes/docs/+page.md": metadata$3,
		"../routes/docs/install/+page.md": metadata$l,
	});
	const topLevelData = Object.entries(topLevelPages).map(([path, data]) => {
		const docsPath = path.match(PATH_TRIM)?.[1] ?? "";
		return {
			path: docsPath,
			...data,
		};
	});
	return [...topLevelData, ...categories];
};
const docsPages = getPages();
const docsTree = getTree(docsPages);
export { docsPages as a, docsTree as d };
