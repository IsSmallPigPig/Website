import { d as docsTree, a as docsPages } from "../../chunks/docsTree.js";
import { w as waitLocale } from "../../chunks/runtime.js";
import { i as i18n } from "../../chunks/index3.js";
const load = () => {
	i18n();
	waitLocale();
	return {
		docs: docsTree,
		docsPages,
	};
};
const prerender = false;
export { load, prerender };
