import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files, version 2.5.20",
	description:
		"Push Git commits to remote repositories, splash screen, updated icons, support for ownCloud.",
	thumbnail: "/blog-resources/files2-5-20/HeroImage.jpg",
	date: "7/20/2023",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-1n2jxkr">We’re excited to announce that version 2.5.20 is now available. If you already have Files, you’ll get a notification in the app to update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> as a way to support the project.</p> <p data-svelte-h="svelte-h45uou"><strong>TL;DR:</strong> This update adds support for pushing Git commits, an improved startup experience, updated toolbar and status icons, support for editing tags from the Details pane, and more. Continue reading to learn more about these changes.</p> <h2 id="whats-new-in-v2520" data-svelte-h="svelte-1wcu4sm">What’s new in v2.5.20</h2> <h3 id="push-git-commits-to-remote-repositories" data-svelte-h="svelte-1sbdou1">Push Git commits to remote repositories</h3> <p data-svelte-h="svelte-qstamz">To further improve our integration with Git, we’re excited to be adding support for pushing commits to remote repos. The Status Bar will display you how many local and remote commits you have, and you can click on it to access the sync, pull, and push options. We hope this feature makes it easier for you to collaborate with other developers and keep your code up to date.</p> <figure data-svelte-h="svelte-1od422j"><img src="/blog-resources/files2-5-20/GitPush.png" alt="Push commits to remote repos."></figure> <h3 id="improvements-to-the-startup-experience" data-svelte-h="svelte-1x8w5wc">Improvements to the startup experience</h3> <p data-svelte-h="svelte-1nafcxm">Startup performance is one of our highest priorities and something we’re working on improving. We’d like the progress to be faster but unfortunately there are some limitations in the WinAppSdk framework. We hope these limitations will be resolved in future versions of WinAppSdk, but in the meantime, we’ve been working on a lot of smaller optimizations that we hope will add up over time. We’re also adding a splash screen when the app is opened to indicate that the app is loading.</p> <figure data-svelte-h="svelte-8k3tp"><img src="/blog-resources/files2-5-20/SplashScreen.png" alt="Splash screen."></figure> <h3 id="redesigned-layout-icons" data-svelte-h="svelte-41srx6">Redesigned layout icons</h3> <p data-svelte-h="svelte-15bmbxg">We redesigned the icons in the layout flyout to be more consistent with the design language in Files. Additionally, the icon on the toolbar now changes to match the selected layout.</p> <figure data-svelte-h="svelte-1o9fzx7"><img src="/blog-resources/files2-5-20/ToolbarIcon.png" alt="Toolbar icon."></figure> <h3 id="edit-tags-and-open-properties-from-the-details-pane" data-svelte-h="svelte-pemy3w">Edit tags and open Properties from the Details Pane</h3> <ul data-svelte-h="svelte-gu60gy"><li>Added support for editing file tags from the Details Pane</li> <li>Added a button to open the Properties window from the Details Pane</li> <li>Updated font styles to better utilize the space</li></ul> <figure data-svelte-h="svelte-1ricsc6"><img src="/blog-resources/files2-5-20/EditTags.png" alt="Details Pane."></figure> <h3 id="added-support-for-owncloud" data-svelte-h="svelte-oc1j6j">Added support for ownCloud</h3> <p data-svelte-h="svelte-p5x6mx">Files will now detect and display ownCloud in the sidebar when the ownCloud client is installed.</p> <h3 id="change-the-behavior-of-actions-using-modifier-keys" data-svelte-h="svelte-dpm7rz">Change the behavior of actions using modifier keys</h3> <p data-svelte-h="svelte-xr8a4y">Holding down modifier keys when pressing on certain toolbar buttons will now change to behavior. For example, holding down <code>shift</code> while pressing the <code>delete</code> button on the toolbar will permanently delete the selected items.</p> <h3 id="added-a-path-column-when-viewing-search-results-in-the-details-layout" data-svelte-h="svelte-10l54ah">Added a path column when viewing search results in the Details layout</h3> <p data-svelte-h="svelte-1kxem7x">We added a path column to the Details layout when viewing the results of a search. This feature also enables you to also sort and group the search results by path.</p> <h3 id="added-size-on-disk-property-to-the-properties-window" data-svelte-h="svelte-1nre07v">Added “Size on disk” property to the Properties window</h3> <p data-svelte-h="svelte-ndz95q">We added a “Size on disk” property when viewing the properties of cloud folders.</p> <h3 id="added-support-for-opening-all-tagged-items-from-the-tags-widget" data-svelte-h="svelte-11083p8">Added support for opening all tagged items from the Tags widget</h3> <p data-svelte-h="svelte-18cxi04">We added a button to the Tags widget for opening all the items with that tag.</p> <h2 id="changes-and-improvements" data-svelte-h="svelte-zx5w86">Changes and Improvements</h2> <h3 id="status-bar-design" data-svelte-h="svelte-654zai">Status Bar design</h3> <p data-svelte-h="svelte-ttpc4u">We added lines to divide the different sections in the Status Bar.</p> <h3 id="readme-files-are-no-longer-automatically-selected" data-svelte-h="svelte-xmhmg8">Readme files are no longer automatically selected</h3> <p data-svelte-h="svelte-1sqjv3j">Opening a folder with a <code>readme.md</code> file will no longer select the readme file.</p> <h3 id="improved-quality-of-the-icons-in-the-pinned-favorites-section" data-svelte-h="svelte-1ht39h">Improved quality of the icons in the pinned favorites section</h3> <p data-svelte-h="svelte-3y6mus">We made several enhancements to improve the quality of icons in the pinned favorites section.</p> <h3 id="updated-the-tag-icon-used-throughout-the-app" data-svelte-h="svelte-4wczt">Updated the Tag icon used throughout the app</h3> <p data-svelte-h="svelte-daxduh">The tag icon in the sidebar, right click context menu, and Tags widget was updated to have better contrast.</p> <h3 id="updated-the-toolbar-icons" data-svelte-h="svelte-1iekw49">Updated the Toolbar icons</h3> <p data-svelte-h="svelte-ojw0oa">We updated a number of toolbars icons, we also updated the icons for the cloud status, and Git status columns in the Details layout.</p> <h3 id="updated-the-datagrid-in-the-details-layout" data-svelte-h="svelte-ww2n4k">Updated the DataGrid in the Details layout</h3> <p data-svelte-h="svelte-1d2gf7o">We redesigned the DataGrid headers in the Details layout to better match the design language in Windows 11.</p> <h3 id="increased-the-maximum-volume-label-length-to-128-characters-for-udf-images" data-svelte-h="svelte-1pr9evr">Increased the maximum volume label length to 128 characters for UDF images</h3> <p data-svelte-h="svelte-1udp9mj">Based on user feedback, we increased the maximum volume label length to 128 characters for UDF images.</p> <h2 id="bug-fixes" data-svelte-h="svelte-raeaxr">Bug Fixes</h2> <ul data-svelte-h="svelte-3gyayv"><li>Fixed issue where part of the path in properties was incorrectly localized</li> <li>Fixed crash that would occur when navigating to Home from the Column layout</li> <li>Fixed issue where <code>%temp%</code> and <code>%tmp%</code> were not replaced with the correct path when entered from the Address Bar</li> <li>Fixed crash that would occur when trying to display tags</li> <li>Fixed crash that would occur when copying a files path</li> <li>Fixed issue where the options to Sort and Group by original folder were disabled in Recycle Bin</li> <li>Fixed alignment issues on the Status Bar</li> <li>Fixed issue where the System version of VS Code wasn’t detected</li> <li>Fixed issue where long tag names weren’t trimmed</li> <li>Fixed issue where checking out a Git branch would sometimes crash the app</li> <li>Fixed crash that would occur when pressing Ctrl+E on the Home page</li> <li>Fixed issue where the columns were misaligned in Recycle Bin</li> <li>Fixed issue where Status Center didn’t update when archives were finished being extracted</li> <li>Fixed crash that would occur when enabling the Tags widget</li> <li>Fixed issue where “Open in new window” followed the startup settings</li> <li>Fixed high contrast support in the Properties window</li> <li>Fixed issue where folder names were sometimes not localized in the Details Pane</li> <li>Fixed issue where long strings in the Details Pane were cropped</li> <li>Fixed an issue that sometimes prevented dropping dragged items</li> <li>Fixed crash that would occur when an Inf file installation timed out</li> <li>Fixed an issue where it didn’t work to open password protected archives</li> <li>Fixed issue where some options were missing in the Google Drive context menu</li> <li>Fixed issue that prevented using dual pane in the Column layout</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1r1a9qf">Download Files from our <a href="/download/">download page</a>.</p>`;
});
export { Page as default, metadata };
