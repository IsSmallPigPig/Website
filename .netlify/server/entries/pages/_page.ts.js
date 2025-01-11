import { l as links } from "../../chunks/links.js";
const load = async ({ fetch }) => {
	const githubContribData = page =>
		`https://api.github.com/repos/${links.github.owner}/${links.github.repo}/contributors?per_page=25&page=${page}`;
	const data = [1, 2, 3]
		.map(async page => {
			const data2 = await fetch(githubContribData(page));
			if (!data2.ok) throw Error("No data could be fetched from promise");
			return await data2.json();
		})
		.flat();
	return {
		contributors: data,
	};
};
export { load };
