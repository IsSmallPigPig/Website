import {
	c as create_ssr_component,
	v as validate_component,
} from "../../../chunks/ssr.js";
import "../../../chunks/i18n.js";
/* empty css                                                           */
import "../../../chunks/runtime.js";
import { M as Metadata } from "../../../chunks/Metadata.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Metadata, "Metadata").$$render($$result, { title: "Files • Themes", image: "themes" }, {}, {})}

todo`;
});
export { Page as default };
