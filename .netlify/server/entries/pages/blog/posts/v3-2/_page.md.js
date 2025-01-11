import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files v3.2",
	description:
		"List View layout, edit album covers, higher quality thumbnails.",
	thumbnail: "/blog-resources/v3-2/Hero.png",
	date: "2/12/2024",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-tfqlxs">We’re excited to announce that starting today, Files v3.2 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a> to help support the project.</p> <p data-svelte-h="svelte-kw48hc"><strong>TL;DR:</strong> Files v3.2 adds a List View layout, support for editing album covers from the properties window, higher quality thumbnails, and more. Continue reading to learn more about these changes.</p> <h2 id="whats-new-in-v32" data-svelte-h="svelte-v1dz7e">What’s new in v3.2</h2> <h3 id="browse-large-folders-with-confidence" data-svelte-h="svelte-jgkvfc">Browse large folders with confidence</h3> <p data-svelte-h="svelte-b9yfv4">We know how frustrating it can be when Files crashes or freezes while browsing large folders. That’s why we’ve made significant improvements to enhance stability. Our team has worked hard to reduce crashes when browsing large folders and when adding and deleting items. We believe these improvements will make your experience smoother and more enjoyable.</p> <h3 id="display-more-items-with-list-view" data-svelte-h="svelte-1iwebl9">Display more items with List View</h3> <p data-svelte-h="svelte-bmf5p8">List View is a new layout option that lets you display more items while taking up less space. It only shows the icons and file names of your items, without any extra details. This is perfect for when you want to quickly scan through a large number of files or folders. To use List View, click on the layout icon on the toolbar and choose List View from the flyout menu.</p> <figure data-svelte-h="svelte-1pd0eq3"><img src="/blog-resources/v3-2/ListView.png" alt="List View layout"></figure> <h3 id="customize-your-album-covers" data-svelte-h="svelte-6s6eqt">Customize your album covers</h3> <p data-svelte-h="svelte-1a8yv4x">You can now change the album covers on media files directly from Files. This is a great way to personalize your music collection and make it easier to find your favorite albums. To do this, right-click on any media file and choose Properties. Click on the preview of the current cover and select a new image when prompted.</p> <figure data-svelte-h="svelte-1kg5ofm"><img src="/blog-resources/v3-2/AlbumCovers.png" alt="Album cover preview"></figure> <h3 id="enhanced-thumbnails-for-your-files" data-svelte-h="svelte-or6e90">Enhanced thumbnails for your files</h3> <p data-svelte-h="svelte-1v6xczl">We’ve enhanced the resolution and contrast of our thumbnail previews to make them more visually appealing and easy to identify. We also fixed a bug where thumbnails would sometimes fail to load in OneDrive.</p> <figure data-svelte-h="svelte-1jqc8m5"><img src="/blog-resources/v3-2/ThumbnailsOne.png" alt="Thumbnail comparison"></figure> <figure data-svelte-h="svelte-9x7e1n"><img src="/blog-resources/v3-2/ThumbnailsTwo.png" alt="Thumbnail comparison"></figure> <h2 id="changes-and-improvements" data-svelte-h="svelte-zx5w86">Changes and Improvements</h2> <ul data-svelte-h="svelte-9yn8ic"><li>Added options to hide the built-in items from the right click context menu</li> <li>Added an option to disable auto scroll when navigating up the file tree</li> <li>Updated the search query to include unindexed items by default</li> <li>Creating a new file now adds it to the Recent Files list</li> <li>Creating a shortcut will now use the naming preferences from File Explorer</li> <li>Clicking a tag in the Details Pane will now start a search for other tagged items</li> <li>Added support for setting jfif files as the desktop &amp; lockscreen background</li> <li>Improved the performance when launching Files in the background at Windows startup</li> <li>Improved support for high contrast themes</li> <li>Updated the cloud status icon in the Columns View</li> <li>Added support for pinning executable shortcuts to the Start Menu</li> <li>Fixed issue where updating the default layout wouldn’t refresh open tabs</li> <li>Fixed issue where renaming a tag wouldn’t save the new name</li> <li>Fixed issue where certain changes in the Properties Window couldn’t be canceled</li> <li>Fixed issue where switching from Details to Tiles would sometimes result in blurry icons</li> <li>Fixed issue where thumbnails would sometimes fail to load for OneDrive items</li> <li>Fixed issue where folder thumbnails wouldn’t display a preview of the contents</li> <li>Fixed issue where the Properties window was missing its icon</li> <li>Fixed issue where search results would sometimes use the Columns View</li> <li>Fixed issue where opening tags from the sidebar would default to the Details View</li> <li>Fixed issue where renaming items on a search page wouldn’t update the file list</li> <li>Fixed issue where the privacy policy link was broken</li> <li>Fixed issue where OneDrive files would automatically download</li> <li>Fixed issue where pinned applications were executed in <code>%windir%\\System32</code></li> <li>Fixed issue where smart extraction didn’t work correctly for a single folder</li> <li>Fixed issue where the path bar didn’t use localized name for system folders</li> <li>Fixed issue where directly opening a library would invoke explorer.exe</li> <li>Fixed environment variables expansion for shortcuts</li> <li>Fixed issue where folders sizes weren’t calculated when opening Properties from the sidebar</li> <li>Fixed issue where modified date was missing from the Properties window</li> <li>Fixed issue where it didn’t work to target files when creating new shortcuts</li> <li>Fixed issue where exiting from the system tray icon didn’t save the open tabs</li> <li>Fixed issue where a new tab would open when trying to open a new window</li> <li>Fixed issue where batch files couldn’t be previewed inside archives</li> <li>Fixed issue where installing multiple fonts would trigger multiple UAC prompts</li> <li>Fixed issue where refocusing Details View would sometimes scroll</li> <li>Fixed crash that would occur when displaying a large number of items at the same time</li> <li>Fixed crash that would occur when items were added from an external app</li> <li>Fixed crash that would occur when opening Properties for certain items in the Recent Files list</li> <li>Fixed crash that would occur when the app failed to update</li> <li>Fixed crash that would occur when renaming items in the Grid View layout</li> <li>Fixed crash that would occur when selecting the address bar via <code>Shift</code> + <code>Tab</code></li> <li>Fixed crash that would occur when Git path contained an emoji</li> <li>Fixed crash that could occur when dragging in grouped grid layout</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1hrads6">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
