import {
	c as create_ssr_component,
	b as add_attribute,
} from "../../../../../chunks/ssr.js";
const metadata = {
	title: "Announcing General Availability of Files v2",
	description:
		"Today, we're excited to announce that we are releasing Files v2 as a free update to all our users. Our core mission with Files is to create a modern file manager that pushes the boundaries of the platform, and with v2, we've taken that to a whole new level.",
	thumbnail: "/blog-resources/filesv2/FilesV2Banner.jpg",
	date: "2021-10-04T00:00:00.000Z",
	author: "yaira2",
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-170uy2p">Today, we’re excited to announce that we are releasing Files v2 as
a <a${add_attribute("href", "https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2", 0)}>free update</a>
to all our users. Our core mission with Files is to create a modern file manager that pushes the boundaries of the
platform, and with v2, we’ve taken that to a whole new level. We’re excited to share with everyone what we’ve been
working on for the last seven months!</p> <p data-svelte-h="svelte-fdebh0">We redesigned the layout of the app, taking advantage of the latest improvements to Windows and WinUI. We added new
features that provide users more flexibility in managing their files, and we made improvements to the stability and
accessibility to allow users to be more productive than ever before.</p> <p data-svelte-h="svelte-32oga3">Files v2 was made possible through the contributions of the open-source community on GitHub. Over the last year, the
number of contributors has more than doubled and we’re incredibly thankful for all their help. There were a couple of
contributors who really went all out and spent a lot of time putting together the update.</p> <ul data-svelte-h="svelte-1n0ga6a"><li>Winston de Jong <a href="https://github.com/winston-de"><strong>@winston-de</strong></a></li> <li>Marco Gavelli <a href="https://github.com/gave92"><strong>@gave92</strong></a></li> <li>Martin Anderson <a href="https://github.com/mdtauk"><strong>@mdtauk</strong></a></li> <li>Michael West <a href="https://github.com/itsmichaelwest"><strong>@itsmichaelwest</strong></a></li></ul> <h2 id="new-features" data-svelte-h="svelte-ceo46h">New Features</h2> <p data-svelte-h="svelte-7qpn0a">The new features in v2 were designed based off user feedback from more than 4,000 beta users. The full changelog for v2
is quite lengthy and can be found on our GitHub repo but we wanted to highlight a couple of the bigger changes.</p> <p data-svelte-h="svelte-1cmj5rd">A new <strong>column view</strong> allow multiple levels of the hierarchy to be open at once, and provides a visual representation of
the current directory.</p> <figure class="margin-bottom" data-svelte-h="svelte-u5kaud"><img src="/blog-resources/filesv2/Files21_V2_ColumnView_Light_RGB.jpg" alt="A screenshot of column view in Files v2."> <figcaption>The new column view in action.</figcaption></figure> <p data-svelte-h="svelte-1j3fpp7"><strong>Tags</strong> allow users to organize files and folders in a way that is useful without being limited by the organization of
the file system.</p> <figure class="margin-bottom" data-svelte-h="svelte-gmsim2"><img src="/blog-resources/filesv2/Files21_V2_ContextMenu_Light_RGB.jpg" alt="A screenshot of the new context menu in Files v2. In addition to a refined design, the new menu allows users to quickly assign tags to files and folders."> <figcaption>The redesigned context menu in Files v2 allows users to quickly assign tags to files and folders.</figcaption></figure> <p data-svelte-h="svelte-1735bkp"><a href="https://www.microsoft.com/store/productId/9N20KQ61LSFQ" rel="nofollow"><strong>Custom themes</strong></a> provide a way for users to personalize the
look and feel of the app.</p> <figure class="margin-bottom" data-svelte-h="svelte-abmj7m"><img src="/blog-resources/filesv2/Files21_V2_Themes_Dark_RGB.jpg" alt="A screenshot of the settings dialog in Files v2, showing custom theme options."> <figcaption>Custom themes can be selected from the Settings dialog.</figcaption></figure> <h3 id="other-highlights" data-svelte-h="svelte-14xg7rr">Other highlights:</h3> <ul data-svelte-h="svelte-fk2ktg"><li>Compact Overlay is a great way to overlay Files on top of other windows so that users can quickly look for a file
without losing focus on their main task.</li> <li>FTP support enables users to quickly access files on your web server.</li> <li>Security options lets users control who can access files on their system.</li> <li>Grouping allows users to group files by type, size, and date.</li></ul> <p data-svelte-h="svelte-wiowno">In addition to the most noteworthy features, we improved existing features like the context menu, preview pane, details
layout, search experience, settings dialog, folder enumeration speed, file transfer operations and so much more!</p> <h2 id="feedback" data-svelte-h="svelte-1bvg59y">Feedback</h2> <p data-svelte-h="svelte-1srb8nq">Files thrives off community feedback because it helps shape the features we work on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.</p> <p data-svelte-h="svelte-36yzpi">– Yair</p> <p data-svelte-h="svelte-191mbv3">Download from
the <a${add_attribute("href", "https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2", 0)}>Microsoft Store</a>
|| See Files on <a href="https://github.com/files-community/Files" rel="nofollow">GitHub</a></p>`;
});
export { Page as default, metadata };
