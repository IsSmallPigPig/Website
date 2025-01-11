import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Files is now available on WinGet",
	description: "Files is back on WinGet!",
	thumbnail: "/blog-resources/now-on-winget/Hero.png",
	date: "11/30/2024",
	author: "Lamparter",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-1oi2d69">I’m excited to announce that Files is now available again on WinGet! After a couple years, we’re pleased to bring back this popular installation method for Files.</p> <h3 id="files-and-winget" data-svelte-h="svelte-1lidqps">Files and WinGet</h3> <p data-svelte-h="svelte-x9bp9y">The return of Files to WinGet signifies our continued commitment to providing users with the best experience, allowing them to install and manage their apps the way they desire.</p> <h3 id="how-to-install-files-via-winget" data-svelte-h="svelte-slt1ap">How to install Files via WinGet</h3> <p data-svelte-h="svelte-1x8rpwg">The app is available on WinGet with the following package names:</p> <ul data-svelte-h="svelte-opyp9d"><li><strong>Stable version</strong>: <code>FilesCommunity.Files</code></li> <li><strong>Preview version</strong>: <code>FilesCommunity.FilesPreview</code></li></ul> <p data-svelte-h="svelte-mlma9b">To install Files using WinGet, open your terminal and run the following command:</p> <pre class="language-sh"><!-- HTML_TAG_START -->${`<code class="language-sh">winget <span class="token function">install</span> FilesCommunity.Files</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-s7kxw5">This command will download and install the latest version of Files, making it ready to use on your system.</p> <hr> <h2 id="support-files" data-svelte-h="svelte-1qiis65">Support Files</h2> <p data-svelte-h="svelte-1uus8xb">If you enjoy using Files, please consider purchasing Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or supporting us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a>. Your support is greatly appreciated but entirely optional.</p>`;
});
export { Page as default, metadata };
