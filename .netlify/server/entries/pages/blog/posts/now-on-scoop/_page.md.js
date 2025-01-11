import {
	c as create_ssr_component,
	v as validate_component,
} from "../../../../../chunks/ssr.js";
/* empty css                                                                 */
import { I as InfoBar } from "../../../../../chunks/InfoBar.js";
const metadata = {
	title: "Introducing Scoop installation for Files",
	description:
		"Files is now available on Scoop! We are thrilled to announce that Files can now be easily installed via Scoop.",
	thumbnail: "/blog-resources/now-on-scoop/Hero.png",
	date: "11/10/2024",
	author: "Lamparter",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-1jvnygz">Hello Files Community!</p> <p data-svelte-h="svelte-zoh7vg">I am thrilled to share some exciting news with you. As part of the ongoing efforts to make Files more accessible, the team has introduced Scoop as an additional method to install Files on your device. 🚀</p> <h3 id="why-scoop" data-svelte-h="svelte-15e3hru">Why Scoop?</h3> <p data-svelte-h="svelte-ydhxtd">Scoop is a popular package manager for Windows that allows you to install and manage software directly from the command line. It simplifies the installation process and ensures that you always have the latest version of your favourite apps.
By adding Scoop to the app’s list of installation methods, the aim is to provide you with more flexibility and convenience.</p> <h2 id="how-to-install-files-via-scoop" data-svelte-h="svelte-14i5i8x">How to install Files via Scoop</h2> ${validate_component(
		InfoBar,
		"InfoBar",
	).$$render(
		$$result,
		{ severity: "information" },
		{},
		{
			default: () => {
				return `Please note that while we accommodate Scoop due to popular request, it&#39;s not officially endorsed by our team. We advise users to research Scoop to confirm it meets your individual standards and requirements.`;
			},
		},
	)} <p data-svelte-h="svelte-of7akr">Installing Files via Scoop is straightforward:</p> <ol><li data-svelte-h="svelte-1a49ikl"><p><strong>Open PowerShell</strong>: Launch PowerShell with administrative privileges.</p></li> <li><p data-svelte-h="svelte-18b0qh6"><strong>Install Scoop</strong>: If you haven’t already installed Scoop, you can do so by running the following command:</p> <pre class="language-powershell"><!-- HTML_TAG_START -->${`<code class="language-powershell"><span class="token function">Set-ExecutionPolicy</span> <span class="token operator">-</span>ExecutionPolicy RemoteSigned <span class="token operator">-</span>Scope CurrentUser
<span class="token function">Invoke-RestMethod</span> <span class="token operator">-</span>Uri https:<span class="token operator">/</span><span class="token operator">/</span>get<span class="token punctuation">.</span>scoop<span class="token punctuation">.</span>sh <span class="token punctuation">|</span> <span class="token function">Invoke-Expression</span></code>`}<!-- HTML_TAG_END --></pre></li> <li><p data-svelte-h="svelte-oj7j19"><strong>Install Files</strong>: Once Scoop is installed, you can install Files by running:</p> <pre class="language-powershell"><!-- HTML_TAG_START -->${`<code class="language-powershell">scoop install nonportable/files-np</code>`}<!-- HTML_TAG_END --></pre></li></ol> <p data-svelte-h="svelte-1686dq8">And that’s it! Files should be installed and ready to use. 🎉</p> <p data-svelte-h="svelte-2heqip">We hope you find the option to install Files via Scoop useful. Happy file managing! 🙂</p> <hr> <h2 id="support-files" data-svelte-h="svelte-1qiis65">Support Files</h2> <p data-svelte-h="svelte-1uus8xb">If you enjoy using Files, please consider purchasing Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or supporting us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a>. Your support is greatly appreciated but entirely optional.</p>`;
});
export { Page as default, metadata };
