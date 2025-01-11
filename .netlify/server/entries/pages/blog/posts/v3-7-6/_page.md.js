import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files v3.7.6",
	description:
		"Discover the latest improvements in Files v3.7.6, including improved toolbar settings, the ability to open more than 10 files simultaneously, and several important fixes.",
	thumbnail: "/blog-resources/v3-4-1/Hero.png",
	date: "9/13/2024",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-1xyqbgp">We’re excited to announce that Files v3.7.6 is now available! 🎉 Existing users will receive an update notification in the top right corner of the app, while new users can get started for free from our <a href="/download/">download page</a>. Additionally, you can help support the project by purchasing Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsoring us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a>. Your support is greatly appreciated but entirely optional.</p> <h2 id="changes-in-v376" data-svelte-h="svelte-n8ptcq">Changes in v3.7.6</h2> <ul data-svelte-h="svelte-7ue974"><li>Enhanced the user experience for toolbar settings.</li> <li>Removed the restriction on opening more than 10 files simultaneously.</li> <li>Updated translations for better localization.</li> <li>Resolved a NullReferenceException caused by EnableRaisingEvents.</li> <li>Addressed an OverflowException in UpdateSelectionSize.</li> <li>Fixed a NullReferenceException related to ShellFileOperations2.</li> <li>Fixed a crash when opening folders with invalid Git configurations.</li> <li>Fixed a crash that occurred when closing the main window.</li> <li>Fixed a crash that occurred when the Windows Event Log service wasn’t running.</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1hrads6">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
