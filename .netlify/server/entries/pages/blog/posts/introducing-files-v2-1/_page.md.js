import {
	c as create_ssr_component,
	b as add_attribute,
} from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Introducing Files v2.1",
	description:
		"Today, we're pleased to announce that Files v2.1 is now available. We focused on improving the performance and behavior of existing features in this update to make it even easier for you to use the app.",
	thumbnail: "/blog-resources/filesv2-1/HeroImage.jpg",
	date: "2022-1-11",
	author: "yaira2",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-1b1du97">Today, we’re pleased to announce
that <a${add_attribute("href", "https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-1", 0)}>Files v2.1</a>
is now available. We focused on improving the performance and behavior of existing features in this update to make it
even easier for you to use the app.</p> <h2 id="setting-files-as-the-default-file-manager" data-svelte-h="svelte-3kyt3s">Setting Files as the default file manager</h2> <p data-svelte-h="svelte-1636e1i">We recently added an experimental option to set Files as the default file manager. This option is still experimental but
we improved the reliability based on your feedback and it’s stable enough for regular use. If you’re already using this
option, we recommend turning it off and back on again in order to take advantage of the latest improvements.</p> <h2 id="whats-changed" data-svelte-h="svelte-1ikiwde">What’s Changed</h2> <ul data-svelte-h="svelte-uavs94"><li>Redesigned the settings dialog</li> <li>Redesigned the properties window</li></ul> <figure class="margin-bottom" data-svelte-h="svelte-5ehpis"><img src="/blog-resources/filesv2-1/PropertiesDialog.jpg" alt="A screenshot of the redesigned properties window in Files v2.1."> <figcaption>The redesigned properties window</figcaption></figure> <ul data-svelte-h="svelte-1834udw"><li>Added a hotkey for playing audio and video in the preview pane</li> <li>Added a toolbar button to empty recycle bin</li> <li>Set window title to be the same as the selected tab name</li> <li>Added compatibility options to the properties dialog</li> <li>Added Native ARM64 Support</li> <li>Improved keyboard navigation in the column layout</li> <li>Improved keyboard navigation in the details layout</li> <li>Added support for symbolic file links</li> <li>Added keyboard shortcut (Ctrl+H) to show/hide hidden files</li> <li>Removed delay when loading sidebar items and other services on startup</li> <li>Show network shortcuts on the sidebar</li> <li>Added clear all button to ongoing tasks flyout</li> <li>Mousewheel click opens a new tab at selected path</li> <li>Added experimental option to show folder sizes</li> <li>Added support for collapsing widgets on the homepage</li> <li>Added subtle listview animation</li> <li>Added option to open Files on Windows Startup</li> <li>Added support for Next Cloud</li> <li>Added support for Yandex.Disk</li> <li>Open recycle bin &amp; this pc shortcuts in Files when it’s set as the default file manager</li></ul> <h2 id="bug-fixes" data-svelte-h="svelte-raeaxr">Bug Fixes</h2> <ul data-svelte-h="svelte-oz7i6i"><li>Fixed properties window not closing when clicking the OK button</li> <li>Fixed a crash that would occur when dropping a shortcut over an executable</li> <li>Fixed an issue with copying shortcuts</li> <li>Fixed an issue where the option to reset the default file explorer would sometimes fail</li> <li>Fixed an issue where changing the sort option would create a hidden file</li> <li>Fixed an issue where grouping by date might include files from previous week</li> <li>Fixed an issue where restoring items from recycle bin would remove the file extension</li> <li>Fixed an issue causing the file tags list to be serialized incorrectly</li> <li>Fixed an issue where the file extension would sometimes be removed when renaming an item</li></ul> <h2 id="feedback" data-svelte-h="svelte-1bvg59y">Feedback</h2> <p data-svelte-h="svelte-1srb8nq">Files thrives off community feedback because it helps shape the features we work on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.</p> <p data-svelte-h="svelte-36yzpi">– Yair</p> <p data-svelte-h="svelte-1cuhbg1">Download from
the <a${add_attribute("href", "https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-1", 0)}>Microsoft Store</a>
|| See Files on <a href="https://github.com/files-community/Files" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
