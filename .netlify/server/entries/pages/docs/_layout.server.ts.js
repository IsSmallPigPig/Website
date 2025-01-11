import { a as docsPages, d as docsTree } from "../../../chunks/docsTree.js";
const load = async ({ url, route }) => {
	return {
		pagePath: url.pathname,
		currentPage: docsPages.find(
			p => p.path === route.id.substring(route.id.indexOf("/", 2)),
		) ?? { title: "Overview", path: "" },
		docs: docsTree,
		docsPages,
	};
};
export { load };
