import {
	c as create_ssr_component,
	v as validate_component,
} from "../../../../../chunks/ssr.js";
/* empty css                                                                 */
import { I as InfoBar } from "../../../../../chunks/InfoBar.js";
const metadata = { title: "Advanced" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="export-settings" data-svelte-h="svelte-1q7bxql">Export settings</h2> <p data-svelte-h="svelte-1r4zffp">Located on the advanced settings page, this will prompt you to choose a location to export the settings to.</p> ${validate_component(
		InfoBar,
		"InfoBar",
	).$$render(
		$$result,
		{ severity: "information" },
		{},
		{
			default: () => {
				return `Although the exported archive includes a file called &quot;filetags&quot;, it doesn&#39;t actually contain a list of tagged files. This file only contains the guids that get embedded into the metadata of tagged items.`;
			},
		},
	)} <h2 id="import-settings" data-svelte-h="svelte-mppu3n">Import settings</h2> <p data-svelte-h="svelte-161jooy">Prompts to import an archive file containing exported settings.</p> <h2 id="edit-settings-file" data-svelte-h="svelte-7e78y4">Edit settings file</h2> <p data-svelte-h="svelte-6jxvey">Opens the settings file in the default text editor. Before editing the settings file, you’ll need to close Files by right-clicking the icon in the system tray and clicking on “Quit”.</p> <h2 id="open-files-on-windows-startup" data-svelte-h="svelte-g7xsue">Open Files on Windows startup</h2> <p data-svelte-h="svelte-12xove">Creates task to start Files when logging into Windows.</p> <h2 id="leave-app-running-in-the-background" data-svelte-h="svelte-cdfq0b">Leave app running in the background</h2> <p data-svelte-h="svelte-1x9weld">This option will keep Files running in the background even when the window is closed. This helps reduce the startup but it may cause Files to use more system resources.</p> <h2 id="experimental-feature-flags" data-svelte-h="svelte-lkb8jq">Experimental feature flags</h2> <h3 id="set-files-as-the-default-file-manager" data-svelte-h="svelte-1o04790">Set Files as the default file manager</h3> <p data-svelte-h="svelte-3pdgc8">Windows doesn’t have an official method for changing the default file manager. In order to still provide this option, we developed a workaround that intercepts calls to launch File Explorer and redirect the call to Files instead. This workaround has some limitations but it works for most scenarios including the <code>win</code> + <code>e</code> shortcut.</p> ${validate_component(
		InfoBar,
		"InfoBar",
	).$$render(
		$$result,
		{ severity: "caution" },
		{},
		{
			default: () => {
				return `This option involves modifying the system registry and while it&#39;s been tested and improved over time, the Files team takes no responsibility if something goes wrong. If you decide to proceed, we recommend creating a backup of the system registry beforehand.`;
			},
		},
	)} <br> <p data-svelte-h="svelte-iaox9k"><img src="/docs-resources/Settings-Dialog-Advanced.png" alt="Settings dialog"></p>`;
});
export { Page as default, metadata };
