import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files v3.7.7",
	description: "Fixed support for QuickLook.",
	thumbnail: "/blog-resources/v3-4-1/Hero.png",
	date: "9/16/2024",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-oll7dm">We’re excited to announce that Files v3.7.7 is now available! 🎉 Existing users will receive an update notification in the top right corner of the app, while new users can get started for free from our <a href="/download/">download page</a>. Additionally, you can help support the project by purchasing Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsoring us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a>. Your support is greatly appreciated but entirely optional.</p> <h2 id="changes-in-v377" data-svelte-h="svelte-6cjx8w">Changes in v3.7.7</h2> <ul data-svelte-h="svelte-c2xyx"><li>Updated translations for better localization.</li> <li>Fixed QuickLook support.</li> <li>Fixed InvalidOperationException in GetSystemFilePropertiesAsync.</li> <li>Fixed InvalidOperationException in FileTagsContextMenu.</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1hrads6">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
