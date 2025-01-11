import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files v3.6",
	description: `Enhance your productivity with Dual Pane's arrangement options, the new "Actions" menu, personalized folder backgrounds, and significant performance improvements.`,
	thumbnail: "/blog-resources/v3-6/Hero.png",
	date: "8/6/2024",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-1x9q02s">We’re excited to announce that starting today, Files v3.6 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a> to help support the project.</p> <p data-svelte-h="svelte-wb4hbw"><strong>TL;DR:</strong> The latest update, Files v3.6, introduces support for changing the pane arrangement in Dual Pane mode, a new “Actions” menu, custom background images for folders, improved performance, and more. Continue reading to learn more about these enhancements.</p> <h2 id="whats-new-in-v36" data-svelte-h="svelte-3ktl6i">What’s new in v3.6</h2> <h3 id="added-support-for-changing-the-pane-orientation-in-dual-pane-mode" data-svelte-h="svelte-18rfc6e">Added support for changing the pane orientation in Dual Pane mode</h3> <p data-svelte-h="svelte-tiepcl">When adding a second pane, you now have the option to choose its orientation. Additionally, when Dual Pane is already in use, you can adjust the pane arrangement to suit your preferences.</p> <figure data-svelte-h="svelte-185rmob"><img src="/blog-resources/v3-6/VerticalArrangedPane.png" alt="Vertical pane orientation in Dual Pane mode"></figure> <h3 id="added-an-actions-menu-to-the-title-bar" data-svelte-h="svelte-5qlm9g">Added an “Actions” menu to the title bar</h3> <p data-svelte-h="svelte-bs8joe">We’ve added a new “Actions” menu in the title bar. This menu provides options to open a new window, toggle compact overlay, and manage panes in Dual Pane mode.</p> <figure data-svelte-h="svelte-1xd0jcv"><img src="/blog-resources/v3-6/TabActions.png" alt="Tab Actions flyout menu"></figure> <h3 id="customize-folder-locations-with-unique-background-images" data-svelte-h="svelte-17d8zks">Customize folder locations with unique background images</h3> <p data-svelte-h="svelte-5z26op">We’re excited to introduce support for customizing locations with unique background images. By assigning images to different paths, you can quickly identify and access your work, personal, and project directories. Additionally, you can adjust the image opacity and alignment to suit your preferences, ensuring a personalized expereince. You can learn how to get started with folder backgrounds on our <a href="/docs/features/folder-config">documentation page</a>.</p> <figure data-svelte-h="svelte-uhutew"><img src="/blog-resources/v3-6/BackgroundImage.png" alt="Custom background image"></figure> <h3 id="new-localizations-added" data-svelte-h="svelte-43xg0g">New localizations added</h3> <p data-svelte-h="svelte-1wthv52">We’ve expanded our language support to now include Malay.  Our localizations are largely maintained by our dedicated community members. If you’d like to get involved, we invite you to join us on Crowdin <a href="https://crowdin.com/project/files-app" rel="nofollow">https://crowdin.com/project/files-app</a>.</p> <h3 id="optimized-sorting-performance-when-loading-large-folders" data-svelte-h="svelte-1fjaqs6">Optimized sorting performance when loading large folders</h3> <p data-svelte-h="svelte-1lgqw3f">Thanks to optimizations in the sorting code, large folders should now load faster. In our own tests, we observed a 167% increase in performance when loading 40,000 items. Please note that performance can vary based on factors such as device specifications and other running processes.</p> <h2 id="changes-and-improvements" data-svelte-h="svelte-zx5w86">Changes and Improvements</h2> <ul data-svelte-h="svelte-w90g2u"><li>Moved the sidebar toggle button to the address toolbar</li> <li>Added a keyboard shortcut to toggle the toolbar visibility <code>Ctrl+Shift+B</code></li> <li>Added a keyboard shortcut to move focus between panes in Dual Pane mode <code>Ctrl+Shift+Right</code></li> <li>Added support for clicking links when previewing markdown files</li> <li>Added an action to toggle the dot files setting</li> <li>Fixed an issue where the tab title was empty when opening a folder in a new tab</li> <li>Fixed an issue where dragging or opening multiple items would use the wrong sort mode</li> <li>Fixed an issue where Run with PowerShell didn’t display a window</li> <li>Fixed an issue where the Home Page was opened when Files was launched with custom args</li> <li>Fixed an issue where changing the layout size didn’t work when adaptive layout was enabled</li> <li>Fixed an issue where quick search filtering wasn’t cleared when navigating to another folder</li> <li>Fixed an issue where non-cached windows sometimes had the wrong theme</li> <li>Fixed an issue where settings weren’t exported in the correct format</li> <li>Fixed an issue where double tap to rename was too sensitive</li> <li>Fixed an issue where hover to open was too sensitive</li> <li>Fixed an issue where the cursor wasn’t inline when resizing columns in the Details View</li> <li>Fixed an issue where online files were downloaded when loading tooltips</li> <li>Fixed an issue where navigation button had the wrong foreground in the disabled state</li> <li>Fixed an issue where arguments weren’t passed when running shortcuts as admin</li> <li>Fixed an issue with compressing and extracting archives on ARM64 devices</li> <li>Fixed an issue where a warning about WSL would display on startup</li> <li>Fixed the position of the “New item” flyout</li> <li>Fixed a crash that would sometimes occur when updating Files</li> <li>Fixed a crash that would occur when entering invalid parameters via command line</li> <li>Fixed crash that would sometimes occur when adding items to the jumplist</li> <li>Fixed ArgumentNullException in DefaultSettingsSerializer.ReadFromFile</li> <li>Fixed ArgumentNullException in SortingHelper.OrderFileList</li> <li>Fixed ArgumentException in PinnedFoldersManager</li> <li>Fixed ArgumentException in PathNormalization.NormalizePath</li> <li>Fixed TypeInitializationException in UIHelpers</li> <li>Fixed DirectoryNotFoundException when pinning items to the start menu</li> <li>Fixed FileNotFoundException in Recycle Bin watcher</li> <li>Fixed NullReferenceException in DriveItem.LoadThumbnailAsync</li> <li>Fixed NullReferenceException in SystemTrayIcon.OnQuitClicked</li> <li>Fixed NullReferenceException in RecycleBinLocationItem.RefreshSpaceUsed</li> <li>Fixed NullReferenceException in DrivesWidgetViewModel.NavigateToPath</li> <li>Fixed InvalidOperationException in SideloadUpdateService.CheckForUpdatesAsync</li> <li>Fixed COMException in MainWindow.EnsureWindowIsInitialized</li> <li>Fixed COMException in SidebarItem.ItemGrid_Drop</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1hrads6">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
