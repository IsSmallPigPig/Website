import { l as locales } from "./index3.js";
import { c as $locale, u as unwrapFunctionStore } from "./runtime.js";
import { d as derived } from "./index2.js";
const handle = ({ event, resolve }) => {
	const $locale$1 = derived($locale, $locale2 => () => $locale2);
	const localeKey = unwrapFunctionStore($locale$1)() ?? "en";
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				.replace("%lang%", localeKey)
				.replace("%dir%", locales[localeKey].dir),
	});
};
export { handle };
