const externalLink = {
	target: "_blank",
	rel: "noreferrer noopener",
};
const isUrlContainPath = (url, path) =>
	url === path ||
	(url.split("/").length > 1 &&
		path.split("/").length > 1 &&
		url.startsWith(path) &&
		!(path === "" || path === "/")) ||
	(path === "/" && url === "");
const entries = obj => Object.entries(obj);
export { entries as a, externalLink as e, isUrlContainPath as i };
