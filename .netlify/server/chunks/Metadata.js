import {
	c as create_ssr_component,
	a as subscribe,
	d as escape,
	b as add_attribute,
} from "./ssr.js";
import { p as page, d as defaultI18nValues } from "./i18n.js";
import { $ as $format } from "./runtime.js";
/* empty css                                             */
const Metadata = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let imageFile;
		let $_, $$unsubscribe__;
		let $page, $$unsubscribe_page;
		$$unsubscribe__ = subscribe($format, value => ($_ = value));
		$$unsubscribe_page = subscribe(page, value => ($page = value));
		let { title = $_("metadata.name") } = $$props;
		let { description = $_("metadata.description", defaultI18nValues) } =
			$$props;
		let { image = "" } = $$props;
		if ($$props.title === void 0 && $$bindings.title && title !== void 0)
			$$bindings.title(title);
		if (
			$$props.description === void 0 &&
			$$bindings.description &&
			description !== void 0
		)
			$$bindings.description(description);
		if ($$props.image === void 0 && $$bindings.image && image !== void 0)
			$$bindings.image(image);
		imageFile = image.startsWith("/")
			? image
			: `/branding/banner${image === "" ? "" : "-" + image}.png`;
		$$unsubscribe__();
		$$unsubscribe_page();
		return `${(($$result.head += `<!-- HEAD_svelte-1xpjdgd_START -->${(($$result.title = `<title>${escape(title)}</title>`), "")}<meta${add_attribute("content", title, 0)} name="og:title"><meta${add_attribute("content", title, 0)} name="twitter:title"><meta${add_attribute("content", imageFile, 0)} name="og:image"><meta content="${"https://" + escape($page.url.host, true) + escape(imageFile, true)}" name="twitter:image"><meta${add_attribute("content", description, 0)} name="description"><meta${add_attribute("content", description, 0)} name="og:description"><meta${add_attribute("content", description, 0)} name="twitter:description"><!-- HEAD_svelte-1xpjdgd_END -->`), "")}`;
	},
);
export { Metadata as M };
