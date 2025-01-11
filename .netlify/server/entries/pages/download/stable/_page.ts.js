import { r as redirect } from "../../../../chunks/index.js";
const load = async () => {
	throw redirect(301, "/download");
};
export { load };
