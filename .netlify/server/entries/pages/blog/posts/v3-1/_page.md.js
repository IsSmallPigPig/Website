import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing Files v3.1",
	description:
		"System tray icon, open minimized on startup, Smart Extract, prioritize files when sorting, and a new drag & drop gesture.",
	thumbnail: "/blog-resources/v3-1/Hero.png",
	date: "1/8/2024",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-e8msrx">We’re excited to announce that starting today, Files v3.1 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a> to help support the project.</p> <p data-svelte-h="svelte-1kz3e4x"><strong>TL;DR:</strong> Files v3.1 adds an icon to the system tray, support for opening a minimized window on startup, smart extract, an option to prioritize files when sorting, group files by day, and more. Continue reading to learn more about these changes.</p> <h2 id="whats-new-in-v31" data-svelte-h="svelte-psktfa">What’s new in v3.1</h2> <h3 id="system-tray-icon" data-svelte-h="svelte-1m8shgy">System tray icon</h3> <p data-svelte-h="svelte-1r2gdln">With the recently added option to keep Files open in the background, a popular request has been to add an icon to the system tray. Besides for indicating when there is an open process, right clicking the icon provides a shortcut to the documentation site and a way to fully close the background process.</p> <figure data-svelte-h="svelte-1e343mj"><img src="/blog-resources/v3-1/SystemTray.png" alt="System tray icon"></figure> <h3 id="open-minimized-on-windows-startup" data-svelte-h="svelte-f0ckve">Open minimized on Windows Startup</h3> <p data-svelte-h="svelte-1678i6q">Enabling the option to “Open Files on Windows Startup” and the option to “Keep Files running in the background” will now open Files in the background when starting Windows.</p> <h3 id="extract-archives-with-smart-extract" data-svelte-h="svelte-1xg9szh">Extract archives with “Smart Extract”</h3> <p data-svelte-h="svelte-deghsi">Smart Extract is a new feature that will automatically choose the extraction mode based on the archive contents. If the archive contains a single file or folder, Smart Extract will extract the archive to the current directory, otherwise if there are multiple items, they will be extracted to a new folder. Smart Extract can be accessed via the <code>ctrl</code> + <code>shift</code> + <code>e</code> shortcut as well as the right click context menu.</p> <figure data-svelte-h="svelte-10tm6qa"><img src="/blog-resources/v3-1/SmartExtract.png" alt="Smart Extract"></figure> <h3 id="prioritize-files-when-sorting" data-svelte-h="svelte-llfmeb">Prioritize files when sorting</h3> <p data-svelte-h="svelte-83uhnn">We added an option to prioritize files when sorting. Enabling this option will sort files and folders separately with files being placed at the top of the list. This feature is an addition to the existing options to “sort folders first” and “sort files and folders together”.</p> <figure data-svelte-h="svelte-rwxkpx"><img src="/blog-resources/v3-1/SortFilesFirst.png" alt="Prioritize files when sorting"></figure> <h3 id="drag-and-drop-to-open-folders-in-a-new-tab" data-svelte-h="svelte-1j4cuhj">Drag and drop to open folders in a new tab</h3> <p data-svelte-h="svelte-3cmb20">Dragging &amp; dropping a folder on the title bar will now open the folder in a new tab. This gesture also works with multiple folders, dragging multiple folders will open each folder in its own tab.</p> <figure data-svelte-h="svelte-1p6iraz"><img src="/blog-resources/v3-1/OpenInNewTab.png" alt="Open folders in new tab"></figure> <h2 id="changes-and-improvements" data-svelte-h="svelte-zx5w86">Changes and Improvements</h2> <ul data-svelte-h="svelte-loan6m"><li>Added a prompt when trying to apply tags on non NTFS drives</li> <li>Improved the animation when expanding/collapsing sidebar sections</li> <li>Increased the number of suggestion in the search dropdown to 10 items</li> <li>Opening libraries in the columns view will treat them as root</li> <li>Added a 2gb splitting option when compressing files</li> <li>Added support for displaying recently entered paths</li> <li>Added an option to group items by day</li> <li>Added support for hiding compression options from the context menu</li> <li>Added an out-of-proc WinRT server for long-running background tasks</li> <li>Fixed an issue where third party licenses weren’t displayed</li> <li>Fixed crash that could occur when manipulating invalid images</li> <li>Fixed issue where options in the conflicts dialog would sometimes change when scrolling</li> <li>Fixed crash that could occur when failing to connect to GitHub</li> <li>Fixed the date in the file name when pasting clipboard content</li> <li>Fixed an issue where the selection would sometimes get reset in the rename text box</li> <li>Fixed an issue where resizing the window would reload the preview pane</li> <li>Fixed crash when navigating up in the column layout</li> <li>Fixed issue where “Reopen closed tab” was always disabled when right-clicking on tabs</li> <li>Fixed crash that could occur when trying to open Git settings</li> <li>Fixed issue where text was cut off in Tags flyout</li> <li>Fixed issue where the column headers weren’t always “sticky”</li> <li>Fixed issue where it wouldn’t work to open Files if a previous instance crashed</li> <li>Fixed exception that would sometimes occur when sharing items</li> <li>Fixed NullReferenceException when renaming files</li> <li>Fixed NullReferenceException in ColumnShellPage.NavigateToPath</li> <li>Fixed issue where batch files were opened as system</li> <li>Fixed the taskbar behavior in full screen mode</li> <li>Fixed COMException when removing focus from the path bar</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1hrads6">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
