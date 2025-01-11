import {
	c as create_ssr_component,
	b as add_attribute,
} from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Introducing Files v2.0.33",
	description:
		"Today, we're pleased to announce that Files v2.0.33 is now available for users on Windows 10 and Windows 11.",
	thumbnail: "/blog-resources/filesv2/FilesV2Banner.jpg",
	date: "2021-11-04T00:00:00.000Z",
	author: "yaira2",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-13ipxsd">Today, we’re pleased to announce
that <a${add_attribute("href", "https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-0-33", 0)}>Files v2.0.33</a>
is now available for users on Windows 10 and Windows 11. We’ve been listing to your feedback, and it’s clear that you
expect better performance out of Files. There is still a lot of work to be done, but we’re excited to share that we made
several improvements to the performance when loading directories, and we hope these changes make a positive impact in
the user experience.</p> <h2 id="new-features" data-svelte-h="svelte-ceo46h">New Features</h2> <ul data-svelte-h="svelte-19g5cai"><li>Added <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> shortcut to copy file path</li> <li>Added an option to set Files as the default file manage</li> <li>Show file operation progress on taskbar &amp; continue operations when minimized</li> <li>Added individual options for amount of clicks to open files and folders</li> <li>Added group by path option for libraries</li> <li>Respect default app for zip files</li> <li>Use proper tab name on the home page</li> <li>Added caching to load thumbnails faster</li> <li>Added options to import/export settings</li> <li>Improved reliability of the search experience</li> <li>Added support for choosing custom icons</li></ul> <h2 id="bug-fixes" data-svelte-h="svelte-raeaxr">Bug Fixes</h2> <ul data-svelte-h="svelte-hqgmz7"><li>Fixed a crash that would occur when going up from a network root path</li> <li>Fixed an issue where the edit tags &amp; edit terminals buttons weren’t working</li> <li>Fixed an issue where the OneDrive sync status wasn’t updating</li> <li>Fixed issue where preview pane would be shown unexpectedly when quickly selecting then unselecting a file</li> <li>Fixed drag and drop from 7zip</li> <li>Fixed keyboard shortcuts not working in the column layout</li> <li>Fixed an issue where the context menu had the wrong height</li> <li>Switch quicklook preview on selection change</li> <li>Fixed an issue where env variables didn’t refresh when launching terminal</li></ul> <h2 id="feedback" data-svelte-h="svelte-1bvg59y">Feedback</h2> <p data-svelte-h="svelte-1srb8nq">Files thrives off community feedback because it helps shape the features we work on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.</p> <p data-svelte-h="svelte-36yzpi">– Yair</p> <p data-svelte-h="svelte-18y13d7">Download from
the <a${add_attribute("href", "https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-0-33", 0)}>Microsoft Store</a>
|| See Files on <a href="https://github.com/files-community/Files" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
