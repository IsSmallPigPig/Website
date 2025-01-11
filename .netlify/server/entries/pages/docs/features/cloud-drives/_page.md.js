import {
	c as create_ssr_component,
	v as validate_component,
} from "../../../../../chunks/ssr.js";
/* empty css                                                                 */
import { I as InfoBar } from "../../../../../chunks/InfoBar.js";
const metadata = { title: "Using cloud drives in Files" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(InfoBar, "InfoBar").$$render(
		$$result,
		{ severity: "information" },
		{},
		{
			default: () => {
				return `Please note that while we accommodate third-party cloud drives due to popular request, they are not officially endorsed by our team. We advise users to research these services to confirm they meet your individual standards and requirements.`;
			},
		},
	)} <p data-svelte-h="svelte-5gxak6">Files seamlessly integrates with a variety of cloud providers by detecting and displaying their drives in the sidebar, provided their desktop applications are installed. You can utilize the provided list to identify supported cloud services and access download links for their desktop clients.</p> <h2 id="onedrive" data-svelte-h="svelte-171yngu">OneDrive</h2> <p data-svelte-h="svelte-m31u1a">OneDrive is included with Windows and no additional setup is required.</p> <h2 id="google-drive" data-svelte-h="svelte-4qw4lj">Google Drive</h2> <p data-svelte-h="svelte-1vm4pb"><a href="https://www.google.com/drive/download" rel="nofollow">https://www.google.com/drive/download</a></p> <h2 id="icloud" data-svelte-h="svelte-1qd7sq6">iCloud</h2> <p data-svelte-h="svelte-tcmvjb"><a href="https://support.apple.com/103232" rel="nofollow">https://support.apple.com/103232</a></p> <h2 id="box" data-svelte-h="svelte-6f9ra0">Box</h2> <p data-svelte-h="svelte-1uzh03n"><a href="https://www.box.com/resources/downloads" rel="nofollow">https://www.box.com/resources/downloads</a></p> <h2 id="dropbox" data-svelte-h="svelte-1arqau">Dropbox</h2> <p data-svelte-h="svelte-1349did"><a href="https://www.dropbox.com/install" rel="nofollow">https://www.dropbox.com/install</a></p> <h2 id="mega" data-svelte-h="svelte-17lwyae">Mega</h2> <p data-svelte-h="svelte-1uwskdl"><a href="https://mega.io/desktop" rel="nofollow">https://mega.io/desktop</a></p> <h2 id="nextcloud" data-svelte-h="svelte-pftvm">Nextcloud</h2> <p data-svelte-h="svelte-1lj4ebb"><a href="https://nextcloud.com/install" rel="nofollow">https://nextcloud.com/install</a></p> <h2 id="yandex" data-svelte-h="svelte-15le046">Yandex</h2> <p data-svelte-h="svelte-1qr5anr"><a href="https://360.yandex.com/disk/download" rel="nofollow">https://360.yandex.com/disk/download</a></p> <h2 id="jottacloud" data-svelte-h="svelte-1ttkxim">Jottacloud</h2> <p data-svelte-h="svelte-1s71g3l"><a href="https://www.jottacloud.com/download" rel="nofollow">https://www.jottacloud.com/download</a></p> <h2 id="synologydrive" data-svelte-h="svelte-1yd2jbe">SynologyDrive</h2> <p data-svelte-h="svelte-lh3i7z"><a href="https://www.synology.com/support/download" rel="nofollow">https://www.synology.com/support/download</a></p> <h2 id="pcloud-drive" data-svelte-h="svelte-xf85bn">pCloud Drive</h2> <p data-svelte-h="svelte-mrizuf"><a href="https://www.pcloud.com/download-free-online-cloud-file-storage.html" rel="nofollow">https://www.pcloud.com/download-free-online-cloud-file-storage.html</a></p> <h2 id="nutstore" data-svelte-h="svelte-1apbq3y">Nutstore</h2> <p data-svelte-h="svelte-198yk0n"><a href="https://www.jianguoyun.com/s/downloads" rel="nofollow">https://www.jianguoyun.com/s/downloads</a></p> <h2 id="seadrive" data-svelte-h="svelte-5ve33i">Seadrive</h2> <p data-svelte-h="svelte-lmwlid"><a href="https://www.seafile.com/en/download" rel="nofollow">https://www.seafile.com/en/download</a></p> <h2 id="autodesk" data-svelte-h="svelte-158f0ba">Autodesk</h2> <p data-svelte-h="svelte-jwdzql"><a href="https://drive.autodesk.com" rel="nofollow">https://drive.autodesk.com</a></p> <h2 id="owncloud" data-svelte-h="svelte-u6f962">ownCloud</h2> <p data-svelte-h="svelte-1jqfrvj"><a href="https://owncloud.com/desktop-app" rel="nofollow">https://owncloud.com/desktop-app</a></p> <h2 id="lucid-link" data-svelte-h="svelte-1150elx">Lucid Link</h2> ${validate_component(
		InfoBar,
		"InfoBar",
	).$$render(
		$$result,
		{ severity: "information" },
		{},
		{
			default: () => {
				return `Please note that the folder contents will only show if the Lucid Link client is running. This is the way Lucid Link is designed and isn&#39;t specific to Files. Also, please be aware that this integration requires the Lucid Link folder to be in the default location, we hope to resolve this limitation in the future.`;
			},
		},
	)} <p data-svelte-h="svelte-vrjz7"><a href="https://www.lucidlink.com/download" rel="nofollow">https://www.lucidlink.com/download</a></p> <h2 id="infomaniak-kdrive" data-svelte-h="svelte-omruyj">Infomaniak kDrive</h2> <p data-svelte-h="svelte-vgru5f"><a href="https://www.infomaniak.com/kdrive" rel="nofollow">https://www.infomaniak.com/kdrive</a></p>`;
});
export { Page as default, metadata };
