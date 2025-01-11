import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = { title: "Multitask with tabs" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-1thxcle">The tabs feature in the Files app allows you to work on multiple folders simultaneously without cluttering your desktop with multiple windows. You can easily switch between different folders by clicking on the corresponding tab.</p> <h2 id="how-to-add-a-new-tab" data-svelte-h="svelte-123sisx">How to add a new tab</h2> <p data-svelte-h="svelte-10imq8i">Adding a tab is easy. You can either click the plus button on the title bar or use the <code>ctrl</code> + <code>t</code> shortcut. Both methods will open a new tab with the home page.</p> <h2 id="open-folders-in-a-new-tab" data-svelte-h="svelte-18ps4np">Open folders in a new tab</h2> <p data-svelte-h="svelte-yguff3">There are a couple of ways to open folders in a new tab. If your mouse has a middle button, you can middle click the folder to open it in a new tab. Otherwise, you can right-click the folder (or multiple folders) and select the option to “open in new tab”. Another option which can be useful for touch is to drag folders to the plus button on the title bar. For the sidebar, you can open items in a new tab by holding down the <code>ctrl</code> key while clicking the item, or alternatively, you can use the right-click menu.</p> <h2 id="tab-tear-off" data-svelte-h="svelte-1mi8x7c">Tab tear off</h2> <p data-svelte-h="svelte-1ghoo8f">In addition to reordering tabs, you can tear off a tab to create a new window. You can also move tags between windows with drag &amp; drop.</p> <h2 id="drag-files-between-tabs" data-svelte-h="svelte-1qch34t">Drag files between tabs</h2> <p data-svelte-h="svelte-jreqgs">Dragging items between tabs is pretty easy. Simply drag the items and hover the mouse over the relevant tab. The app will automatically switch tabs, allowing you to drop the files in the desired location.</p> <h2 id="shortcuts-for-interacting-with-tabs" data-svelte-h="svelte-10ea8ow">Shortcuts for interacting with tabs</h2> <p data-svelte-h="svelte-1gvts9y">There are several ways to interact with tabs in Files. Here are some useful shortcuts:</p> <ul data-svelte-h="svelte-1rgw0mx"><li><code>ctrl</code> + <code>t</code>: Add a new tab.</li> <li><code>ctrl</code> + <code>tab</code>: Switch to the next tab.</li> <li><code>ctrl</code> + <code>shift</code> + <code>tab</code>: Switch to the previous tab.</li> <li><code>ctrl</code> + <code>number</code>: Switch to the tab corresponding to the number. For example, <code>ctrl</code> + <code>3</code> will switch to the third tab.</li> <li><code>ctrl</code> + <code>w</code>: Close the current tab. If there is only one tab, the shortcut will close the window.</li> <li><code>ctrl</code> + <code>shift</code> + <code>w</code>: Restore recently closed tab.</li> <li><code>ctrl</code> + <code>shift</code> + <code>k</code>: Duplicate the current tab.</li></ul>`;
});
export { Page as default, metadata };
