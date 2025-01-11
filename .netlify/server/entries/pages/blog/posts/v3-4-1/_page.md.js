import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files v3.4.1",
	description:
		"Support for displaying network drives on the sidebar, and general improvements to stability.",
	thumbnail: "/blog-resources/v3-4-1/Hero.png",
	date: "5/14/2024",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-1ls780j">Files v3.4.1 is now available for download, this release contains bug fixes and improvements to enhance your file browsing experience. If you already have Files, the toolbar will display a notification to install the update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a> to help support the project.</p> <h2 id="changes-in-v341" data-svelte-h="svelte-1sd5hw0">Changes in v3.4.1</h2> <ul data-svelte-h="svelte-5oa31j"><li>Added support for displaying all network folders on the sidebar</li> <li>Added support for SeerPro’s “Track selected file” setting</li> <li>Added toolbar button to play mkv files</li> <li>Added support for setting tif files as the Background Image</li> <li>Updated the wording of the “Files is running as admin” prompt</li> <li>Fixed an issue where the app wouldn’t run as admin</li> <li>Fixed crash when connecting some removable drives</li> <li>Fixed an issue where the string for “Actions” wasn’t localize in the Settings menu</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1hrads6">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
