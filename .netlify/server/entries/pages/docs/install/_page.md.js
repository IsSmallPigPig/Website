import {
	c as create_ssr_component,
	v as validate_component,
} from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                              */
import { I as InfoBar } from "../../../../chunks/InfoBar.js";
const metadata = { title: "Install" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="install-and-get-started-with-files" data-svelte-h="svelte-rf3xv3">Install and get started with Files</h2> ${validate_component(
		Button,
		"Button",
	).$$render(
		$$result,
		{ href: "/download/", variant: "accent" },
		{},
		{
			default: () => {
				return `Install Files`;
			},
		},
	)} <p data-svelte-h="svelte-11s33xy">Files is a community-driven project that depends on your support to grow and improve. Please consider purchasing Files through the Microsoft Store or supporting us on GitHub if you use the classic installer.</p> <p data-svelte-h="svelte-ib1l2b">You can also use the preview version alongside the stable release to get early access to new features and improvements.</p> ${validate_component(
		InfoBar,
		"InfoBar",
	).$$render(
		$$result,
		{ title: "Note", severity: "information" },
		{},
		{
			default: () => {
				return `The Windows Update and Delivery Optimization services will need to be enabled in order for the installation to work. Modified versions of Windows or running &quot;debloat&quot; scripts/programs are often missing these components and aren&#39;t supported.`;
			},
		},
	)} <h3 id="powershell" data-svelte-h="svelte-86xlm0">PowerShell</h3> <ol data-svelte-h="svelte-1k03m1n"><li>Open PowerShell as administrator.</li> <li>Run this command <code>Add-AppxPackage -AppInstallerFile https://cdn.files.community/files/stable/Files.Package.appinstaller</code>.</li></ol> <h3 id="winget" data-svelte-h="svelte-wdofl0">Winget</h3> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">winget install -e --id FilesCommunity.Files</code>`}<!-- HTML_TAG_END --></pre> <h3 id="chocolatey" data-svelte-h="svelte-1bylvxg">Chocolatey</h3> <p data-svelte-h="svelte-11e29mh">The <a href="https://community.chocolatey.org/packages/files" rel="nofollow">Chocolatey</a> package is maintained by a third party.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">choco install files</code>`}<!-- HTML_TAG_END --></pre> <h3 id="scoop" data-svelte-h="svelte-zo82as">Scoop</h3> <p data-svelte-h="svelte-d144hb">The <a href="https://scoop.sh" rel="nofollow">Scoop</a> package is maintained by a third party.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">scoop install nonportable/files-np</code>`}<!-- HTML_TAG_END --></pre> <h2 id="keep-files-up-to-date" data-svelte-h="svelte-vd5g9o">Keep Files up to date</h2> <p data-svelte-h="svelte-1xgekav">Files will automatically check for updates whenever the app is opened and an indicator will be displayed on the toolbar if an update is available. You can also manually check for updates from the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or by downloading the sideload <a href="/download/">installer</a>.</p> ${validate_component(
		InfoBar,
		"InfoBar",
	).$$render(
		$$result,
		{ title: "Note", severity: "information" },
		{},
		{
			default: () => {
				return `Installing an update will automatically restart Files so make sure to save your work before starting an update.`;
			},
		},
	)} <h3 id="steps-required-for-the-classic-installer-version-after-3212024" data-svelte-h="svelte-qi1z1h">Steps required for the “classic installer” version after 3/21/2024</h3> <p data-svelte-h="svelte-m2uw1p">Starting 3/21/2024, users of the sideload version (aka classic installer) will need to reinstall Files in order to continue receiving automatic updates. This is a one time requirement due to changes in the code signing certificate.</p> ${validate_component(
		InfoBar,
		"InfoBar",
	).$$render(
		$$result,
		{ title: "Note", severity: "information" },
		{},
		{
			default: () => {
				return `This is not required for the Store version of Files.`;
			},
		},
	)} <ol data-svelte-h="svelte-1d2ffw0"><li>Export your settings by going to <code>Settings &gt; Advanced &gt; Export</code>.</li> <li>Uninstall Files and restart Windows</li> <li><a href="/download/">Reinstall</a> Files.</li> <li>Import your settings from <code>Settings &gt; Advanced &gt; Import</code>.</li></ol> <h2 id="troubleshooting" data-svelte-h="svelte-9h7932">Troubleshooting</h2> <h3 id="cannot-open-app-package" data-svelte-h="svelte-18wsqcp">Cannot open app package</h3> <p data-svelte-h="svelte-1s60nz0">If you see a “Cannot open app package” message when you try to open Files, it means that your device needs an update for the AppInstaller component. You can update it from the Microsoft Store app on your device, or by downloading and running this <a href="https://learn.microsoft.com/en-us/windows/msix/app-installer/install-update-app-installer" rel="nofollow">installer</a>.</p> <h3 id="updates" data-svelte-h="svelte-15lh750">Updates</h3> <p data-svelte-h="svelte-qf08vl">If you encounter any problems or errors while updating Files, you can try the following solutions:</p> <ol data-svelte-h="svelte-1si9dzk"><li>Make sure you have a stable internet connection and enough disk space for the update.</li> <li>Restart your computer and try to update Files again.</li></ol> <h3 id="windows-cannot-install-package-because-a-different-package-with-the-same-name-is-already-installed" data-svelte-h="svelte-8lhbo">Windows cannot install package because a different package with the same name is already installed</h3> <p data-svelte-h="svelte-1j7ta9u">If you get this error code, you’ll need to uninstall and <a href="/download/">reinstall</a> Files. You can also export/import the settings file to keep your existing settings.</p>`;
});
export { Page as default, metadata };
