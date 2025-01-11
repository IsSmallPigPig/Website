import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files v3.5",
	description:
		"Enjoy an updated design, network drive widget, enhanced dual-pane functionality, and improvements to crash analytics.",
	thumbnail: "/blog-resources/v3-5/Hero.png",
	date: "6/24/2024",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-19d1m1t">We’re excited to announce that starting today, Files v3.5 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a> to help support the project.</p> <p data-svelte-h="svelte-5vziyt"><strong>TL;DR:</strong> The latest update, Files v3.5, introduces a refreshed design, a new widget for network drives, improved multitasking with dual-pane enhancements, and better crash reports to help us improve stability, among others. Continue reading to learn more about these enhancements.</p> <h2 id="whats-new-in-v35" data-svelte-h="svelte-11icoji">What’s new in v3.5</h2> <h3 id="updated-the-design-with-rounded-corners" data-svelte-h="svelte-bpv6wj">Updated the design with rounded corners</h3> <p data-svelte-h="svelte-1nerwyq">We’ve enhanced Files aesthetics by applying rounded corners to additional UI surfaces, including the toolbar, content area, and preview pane. This refinement improves the overall consistency and visual flow throughout the app.</p> <figure data-svelte-h="svelte-1lt6omd"><img src="/blog-resources/v3-5/UpdatedDesign.png" alt="Updated design with rounded corners"></figure> <p data-svelte-h="svelte-8z7cdj">Additionally, Dual Pane mode now features a more pronounced shadow on the active pane and expanded spacing between panes. These enhancements ensure that the active pane is more visually prominent.</p> <figure data-svelte-h="svelte-ots5o9"><img src="/blog-resources/v3-5/UpdatedDualPaneDesign.png" alt="Updated design for Dual Pane"></figure> <h3 id="view-dimensions-when-hovering-over-images" data-svelte-h="svelte-164axnn">View dimensions when hovering over images</h3> <p data-svelte-h="svelte-1k6hq4r">When you hover over images, a tooltip will now conveniently show the dimensions. This enhancement greatly improves user experience by providing quick and easy access to size information.</p> <figure data-svelte-h="svelte-15jw88i"><img src="/blog-resources/v3-5/ImageSizeTooltip.png" alt="Images tooltip"></figure> <h3 id="open-batch-files-in-notepad-directly-from-the-toolbar" data-svelte-h="svelte-ti1hhe">Open batch files in Notepad directly from the toolbar</h3> <p data-svelte-h="svelte-1spctl2">Upon selecting a batch (.bat) file, the toolbar will now present an Edit in Notepad option, streamlining the process of modifying your batch files directly without the need to dig through context menus.</p> <figure data-svelte-h="svelte-1xc2xf1"><img src="/blog-resources/v3-5/EditInNotepad.png" alt="Edit in notepad toolbar button"></figure> <h3 id="explore-network-locations-on-the-home-page" data-svelte-h="svelte-m1u5o">Explore network locations on the Home Page</h3> <p data-svelte-h="svelte-1u24">We added a “Network Locations” widget on the home page. This feature is designed to help you navigate and organize network locations with greater efficiency.</p> <figure data-svelte-h="svelte-9ohjvt"><img src="/blog-resources/v3-5/NetworkLocations.png" alt="Home page widget for network locations"></figure> <h3 id="added-support-for-closing-the-left-pane-in-dual-pane-mode" data-svelte-h="svelte-97sx50">Added support for closing the left pane in Dual Pane mode</h3> <p data-svelte-h="svelte-gpcxy9">We’ve added the ability to close the left pane in Dual Pane mode, overcoming previous technical limitations that only allowed closing the right pane. This improvements provides a more versatile and user-friendly experience.</p> <h3 id="onedrive-sync-status-indicator" data-svelte-h="svelte-ykjtw7">OneDrive sync status indicator</h3> <p data-svelte-h="svelte-11vuvcg">Experience enhanced clarity when you hover over a file in OneDrive locations. The sync icon will now display a tooltip detailing the file’s current sync status, offering a more direct and informative snapshot of your data synchronization.</p> <h3 id="view-duration-for-selected-video-files" data-svelte-h="svelte-140c0hx">View duration for selected video files</h3> <p data-svelte-h="svelte-1uuhr86">When selecting multiple video files, the Details Pane will now display the total duration.</p> <h3 id="new-localizations-added" data-svelte-h="svelte-43xg0g">New localizations added</h3> <p data-svelte-h="svelte-od1sec">We’ve expanded our language support to now include Belarusian.  Our localizations are largely maintained by our dedicated community members. If you’d like to get involved, we invite you to join us on Crowdin <a href="https://crowdin.com/project/files-app" rel="nofollow">https://crowdin.com/project/files-app</a>.</p> <h3 id="improvements-to-crash-reporting-and-metrics" data-svelte-h="svelte-8opsu7">Improvements to crash reporting and metrics</h3> <p data-svelte-h="svelte-1fosudt">While enhancements in performance and stability typically occur behind the scenes, we often get a lot of questions about our work in this area and we wanted to share some highlights.</p> <ul data-svelte-h="svelte-4uvth4"><li>We’ve adopted Sentry for more robust crash reporting (shoutout to Sentry for their support of open-source projects), and we aim to extend its use to monitor performance metrics, ensuring Files gets faster with each update.</li> <li>Our main challenge with startup speed has been the absence of Native AOT in WinAppSdk. Fortunately, Microsoft is working to address this, and we hope to integrate these advancements later in the year.</li> <li>We recently started a new effort to eliminate unnecessary dependencies and streamline app resources, effectively shrinking the app’s footprint on your device.</li></ul> <h2 id="changes-and-improvements" data-svelte-h="svelte-zx5w86">Changes and Improvements</h2> <ul data-svelte-h="svelte-ywrbhr"><li>Added an action to switch focus between panes</li> <li>Added an “Edit in notepad” option to the right click context menu</li> <li>Added a setting to configure the “Open in ide” button on the status bar</li> <li>Added support for “Thin acrylic” system backdrop</li> <li>Added support for running AHK files as admin</li> <li>Added support for hiding the toolbar</li> <li>Opening the log location will now close the Settings Dialog when Files is the default file manager</li> <li>Fixed crash that would occur when two paths were entered from the command line</li> <li>Fixed crash that would occur when ungrouping from zoomed out view</li> <li>Fixed an issue where a resize cursor was incorrectly shown at titlebar edges when Files was maximized</li> <li>Fixed an issue where empty folders could not be compressed into an archive</li> <li>Fixed an issue where it didn’t work to switch between panes using a touch screen</li> <li>Fixed an issue where text on the Actions page wasn’t responsive on smaller screens</li> <li>Fixed an issue where the focus was changed when quickly switching between tabs</li> <li>Fixed an issue with launching programs from the Address Bar</li> <li>Fixed an issue where search results would stop loading after switching between tabs</li> <li>Fixed an issue where the Toolbar didn’t display properly in High Contrast</li> <li>Fixed an issue in Column View where the chevron didn’t support High Contrast</li> <li>Fixed an issue where the Files logo was displayed incorrectly in High Contrast</li> <li>Fixed an issue where the app could crash when changing the theme</li> <li>Fixed an issue where entering certain commands into the Address Bar would change the format</li> <li>Fixed an issue with Nutstore cloud drive detection</li> <li>Fixed an issue where certain keys couldn’t be mapped to Actions</li> <li>Fixed an issue where setting the desktop wallpaper didn’t work on multiple monitors</li> <li>Fixed an issue where changing icons didn’t work when admin access was required</li> <li>Fixed an issue with deleting items from zip files</li> <li>Fixed a potential crash when trying to locate the Libraries folder</li> <li>Fixed a potential crash when clicking items in the Quick Access widget</li> <li>Fixed a potential crash from occuring when deleting items</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1hrads6">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
