import {
	c as create_ssr_component,
	b as add_attribute,
} from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Taking an early look at the next generation of Files",
	description:
		"We're excited to give you the first look at what we're working on for the next version of Files (v2.4).",
	thumbnail: "/blog-resources/introducing-v2-4-preview/HeroImage.jpg",
	date: "2022-11-15T00:00:00.000Z",
	author: "files-community",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-xs7esc">A couple of months ago, we announced our plans for the next generation of Files and we wanted to take this opportunity to share our progress on the transition from UWP to WinAppSdk. We’re already seeing the benefits of this transition with faster build times, easier access to APIs and improved performance when navigating between directories. These noticeable improvements are just the start, there a lot additional ways for us to optimize and improve performance. Over the coming months, you can expect us to work on improving startup time and to reduce the amount of system resources being used when the app is open.</p> <h2 id="preview-the-next-version-of-files" data-svelte-h="svelte-14qwnl1">Preview the next version of Files</h2> <p data-svelte-h="svelte-tmm387">In keeping with the spirit of open source, preview builds are currently available with the latest changes and they can be <a href="https://www.files.community/download/preview" rel="nofollow">downloaded</a> from our website. Preview builds can be installed and used alongside the stable version. Please note that preview builds may have issues or bugs and should be used at your own discretion. We look forward to hearing your feedback and bug reports on GitHub, early feedback leads to a better and more reliable stable release.</p> <p data-svelte-h="svelte-pv8z1b">Here are some notable changes and improvements that are currently in the preview version</p> <ul data-svelte-h="svelte-otb9ip"><li>Added an option to double click to open folders in the column layout</li> <li>Reorganized the options in the settings dialog to make them easier to find</li> <li>Added support for extracting multiple archives at same time</li> <li>Added support for extracting password encrypted archives</li> <li>Added an option to compress items</li> <li>Added an extract button to the toolbar thats displayed when archives are open in the current tab</li> <li>Hovering over a drive in the sidebar displays a rich tooltip with information about the drive and storage details</li> <li>Added an option to automatically select files and folders when hovering over them</li> <li>Fixed an issue where right clicking an item would sometimes open the wrong context menu</li> <li>Added an option to set the default layout mode</li> <li>Added a menu option when right clicking the details layout header to set the default column sizes</li> <li>Further reduced the height of items when using compact spacing</li></ul> <h2 id="feedback" data-svelte-h="svelte-1bvg59y">Feedback</h2> <p data-svelte-h="svelte-1wo36cl">Files thrives off community feedback because it helps shape the features worked on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.</p> <p data-svelte-h="svelte-un46mv">Download the latest preview build from
the <a${add_attribute("href", "https://www.files.community/download/preview", 0)}>our website</a>
|| See Files on <a href="https://github.com/files-community/Files" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
