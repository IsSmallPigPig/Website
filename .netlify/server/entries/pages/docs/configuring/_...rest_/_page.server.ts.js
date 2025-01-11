import { r as redirect } from "../../../../../chunks/index.js";
const load = ({ params }) => {
	redirect(301, `/docs/customize-settings/${params.rest ?? ""}`);
};
export { load };
