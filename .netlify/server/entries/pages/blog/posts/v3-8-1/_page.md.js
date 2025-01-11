import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files Preview v3.8.1",
	description:
		"Announcing Files Preview v3.8.1 for users of the preview version.",
	thumbnail: "/blog-resources/v3-8-1/Hero.png",
	date: "12/5/2024",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-q0wu6t">Today we are releasing <strong>Files Preview v3.8.1</strong> for users of the <a href="/download/">preview</a> version.</p> <h2 id="changes" data-svelte-h="svelte-1aj9kk0">Changes</h2> <h3 id="details-pane" data-svelte-h="svelte-10wq2q3">Details Pane</h3> <ul data-svelte-h="svelte-n1aagx"><li>Added storage information when viewing drive details in the Details Pane.</li></ul> <figure data-svelte-h="svelte-1rlsl6y"><img src="/blog-resources/v3-8-1/DriveDetails.png" alt="Drive storage details in the Details Pane"></figure> <h3 id="shortcut-files" data-svelte-h="svelte-2jgr85">Shortcut files</h3> <ul data-svelte-h="svelte-k25cmb"><li>Added support for assigning a custom name when creating a new shortcut.</li></ul> <figure data-svelte-h="svelte-nv2pt1"><img src="/blog-resources/v3-8-1/ShortcutDialog.png" alt="Create shortcut dialog"></figure> <h3 id="properties-window" data-svelte-h="svelte-1bqbcy7">Properties window</h3> <ul data-svelte-h="svelte-qec9cm"><li>Added support for changing the ‘compress’ attribute from the properties window.</li></ul> <figure data-svelte-h="svelte-mb1g0q"><img src="/blog-resources/v3-8-1/CompressAttribute.png" alt="Properties window"></figure> <h3 id="taskbar" data-svelte-h="svelte-egq76s">Taskbar</h3> <ul data-svelte-h="svelte-1d2qfur"><li>Removed the number of open tabs from being displayed in the Windows Taskbar.</li></ul> <h3 id="archives" data-svelte-h="svelte-19m01jg">Archives</h3> <ul data-svelte-h="svelte-z5uphh"><li>Added support for setting Files as the default app on Windows for opening <code>gz</code> archives.</li></ul> <h3 id="drag--drop" data-svelte-h="svelte-6zheds">Drag &amp; drop</h3> <ul data-svelte-h="svelte-18nv2xr"><li>Improved the behavior so that Files is no longer brought to the foreground when dragging items to another application.</li></ul> <h3 id="details-layout" data-svelte-h="svelte-13693dn">Details Layout</h3> <ul data-svelte-h="svelte-wyy9d8"><li>Modifying which columns are enabled in the Settings will now automatically update existing tabs. Previously, this setting only applied to tabs opened after the change.</li></ul> <h3 id="release-notes" data-svelte-h="svelte-1tpnh67">Release Notes</h3> <ul data-svelte-h="svelte-wuzyh2"><li>The Release Notes dialog was updated to display changelogs directly from the Files website.</li> <li>Added a new <a href="/docs/customize-settings/actions/">action</a> to open the Release Notes dialog. Previously, the dialog was only accessible during the session immediately following an update.</li></ul> <h2 id="fixes" data-svelte-h="svelte-1bikm6w">Fixes</h2> <h3 id="address-bar" data-svelte-h="svelte-1ysrpdd">Address Bar</h3> <ul data-svelte-h="svelte-16ijx62"><li>Fixed an issue where the address bar flyouts sometimes displayed duplicate items.</li></ul> <h3 id="tabs" data-svelte-h="svelte-1cw0o70">Tabs</h3> <ul data-svelte-h="svelte-u1l4sy"><li>Fixed an issue where tabs weren’t placed in the correct order when dragged from other windows.</li></ul> <h3 id="actions" data-svelte-h="svelte-eo9bei">Actions</h3> <ul data-svelte-h="svelte-1ozf9bp"><li>Fixed an issue with the ‘Run with PowerShell’ action not working for files with spaces in their names.</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1a5paqw">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on <a href="https://discord.gg/files" rel="nofollow">Discord</a> and on <a href="https://github.com/files-community/Files/" rel="nofollow">GitHub</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1g6h7dd">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2/" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
