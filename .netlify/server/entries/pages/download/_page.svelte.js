import {
	c as create_ssr_component,
	b as add_attribute,
	d as escape,
	v as validate_component,
	f as spread,
	g as escape_attribute_value,
	h as escape_object,
	a as subscribe,
	e as each,
} from "../../../chunks/ssr.js";
import { d as defaultI18nValues } from "../../../chunks/i18n.js";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                           */
import { I as InfoBar } from "../../../chunks/InfoBar.js";
import { T as TextBlock } from "../../../chunks/TextBlock.js";
import { $ as $format } from "../../../chunks/runtime.js";
import { M as Metadata } from "../../../chunks/Metadata.js";
import { e as externalLink } from "../../../chunks/utils.js";
const css$1 = {
	code: ".download-source.svelte-4tt35b.svelte-4tt35b{border-radius:var(--fds-control-corner-radius);border:1px solid var(--fds-card-stroke-default);box-shadow:var(--fds-card-shadow);transition:var(--fds-control-normal-duration) ease;background:var(--fds-card-background-default);cursor:pointer;display:flex;flex-direction:row;place-items:center;padding:3rem 6rem}@media(prefers-reduced-motion: no-preference){.download-source.svelte-4tt35b.svelte-4tt35b:hover{box-shadow:var(--fds-flyout-shadow);transform:translateY(-2px)}.download-source.svelte-4tt35b:hover .download-source-icon.svelte-4tt35b{filter:drop-shadow(var(--fds-flyout-shadow));transform:translateY(-2px)}}.download-source.svelte-4tt35b .download-source-description{text-align:left;max-width:50rem}.download-source.svelte-4tt35b .download-source-icon.svelte-4tt35b{max-inline-size:10rem;transition:var(--fds-control-normal-duration) ease}.download-source.svelte-4tt35b .label-container.svelte-4tt35b{margin-left:4rem;display:flex;align-items:flex-start;justify-items:stretch;flex-direction:column;flex-grow:1;gap:1rem}",
	map: '{"version":3,"file":"DownloadSourceCard.svelte","sources":["DownloadSourceCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { externalLink } from \\"$lib\\";\\nimport { TextBlock } from \\"fluent-svelte\\";\\nexport let source;\\nlet link;\\n$: filename = source.href.substring(source.href.lastIndexOf(\\"/\\") + 1);\\nconst downloadAppInstaller = () => link.click();\\nconst downloadWithKeyboard = (e) => {\\n    if (e.key === \\"Enter\\")\\n        downloadAppInstaller();\\n};\\n</script>\\r\\n\\r\\n<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\r\\n<!-- svelte-ignore a11y-no-noninteractive-tabindex -->\\r\\n<article\\r\\n\\ttabindex=\\"0\\"\\r\\n\\tclass=\\"download-source\\"\\r\\n\\ton:click={downloadAppInstaller}\\r\\n\\ton:keydown={downloadWithKeyboard}\\r\\n>\\r\\n\\t<picture>\\r\\n\\t\\t<source media=\\"(prefers-color-scheme: dark)\\" srcset={source.darkModeIcon} />\\r\\n\\t\\t<img\\r\\n\\t\\t\\tclass=\\"download-source-icon\\"\\r\\n\\t\\t\\tsrc={source.icon}\\r\\n\\t\\t\\talt=\\"{source.name} logo\\"\\r\\n\\t\\t/>\\r\\n\\t</picture>\\r\\n\\t<div class=\\"label-container\\">\\r\\n\\t\\t<TextBlock variant=\\"title\\" style=\\"text-align: center;\\"\\r\\n\\t\\t\\t>{source.name}</TextBlock\\r\\n\\t\\t>\\r\\n\\t\\t<TextBlock class=\\"download-source-description\\">\\r\\n\\t\\t\\t{source.description}\\r\\n\\t\\t</TextBlock>\\r\\n\\t\\t<a\\r\\n\\t\\t\\thref={source.href}\\r\\n\\t\\t\\tdownload={!source.external ? filename : \\"\\"}\\r\\n\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\tbind:this={link}\\r\\n\\t\\t\\tstyle:display=\\"none\\"\\r\\n\\t\\t>\\r\\n\\t\\t\\tdownload\\r\\n\\t\\t</a>\\r\\n\\t</div>\\r\\n</article>\\r\\n\\r\\n<style lang=\\"scss\\">.download-source {\\n  border-radius: var(--fds-control-corner-radius);\\n  border: 1px solid var(--fds-card-stroke-default);\\n  box-shadow: var(--fds-card-shadow);\\n  transition: var(--fds-control-normal-duration) ease;\\n  background: var(--fds-card-background-default);\\n  cursor: pointer;\\n  display: flex;\\n  flex-direction: row;\\n  place-items: center;\\n  padding: 3rem 6rem;\\n}\\n@media (prefers-reduced-motion: no-preference) {\\n  .download-source:hover {\\n    box-shadow: var(--fds-flyout-shadow);\\n    transform: translateY(-2px);\\n  }\\n  .download-source:hover .download-source-icon {\\n    filter: drop-shadow(var(--fds-flyout-shadow));\\n    transform: translateY(-2px);\\n  }\\n}\\n.download-source :global(.download-source-description) {\\n  text-align: left;\\n  max-width: 50rem;\\n}\\n.download-source .download-source-icon {\\n  max-inline-size: 10rem;\\n  transition: var(--fds-control-normal-duration) ease;\\n}\\n.download-source .label-container {\\n  margin-left: 4rem;\\n  display: flex;\\n  align-items: flex-start;\\n  justify-items: stretch;\\n  flex-direction: column;\\n  flex-grow: 1;\\n  gap: 1rem;\\n}</style>\\r\\n"],"names":[],"mappings":"AA+CmB,4CAAiB,CAClC,aAAa,CAAE,IAAI,2BAA2B,CAAC,CAC/C,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,yBAAyB,CAAC,CAChD,UAAU,CAAE,IAAI,iBAAiB,CAAC,CAClC,UAAU,CAAE,IAAI,6BAA6B,CAAC,CAAC,IAAI,CACnD,UAAU,CAAE,IAAI,6BAA6B,CAAC,CAC9C,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,MAAO,yBAAyB,aAAa,CAAE,CAC7C,4CAAgB,MAAO,CACrB,UAAU,CAAE,IAAI,mBAAmB,CAAC,CACpC,SAAS,CAAE,WAAW,IAAI,CAC5B,CACA,8BAAgB,MAAM,CAAC,mCAAsB,CAC3C,MAAM,CAAE,YAAY,IAAI,mBAAmB,CAAC,CAAC,CAC7C,SAAS,CAAE,WAAW,IAAI,CAC5B,CACF,CACA,8BAAgB,CAAS,4BAA8B,CACrD,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,KACb,CACA,8BAAgB,CAAC,mCAAsB,CACrC,eAAe,CAAE,KAAK,CACtB,UAAU,CAAE,IAAI,6BAA6B,CAAC,CAAC,IACjD,CACA,8BAAgB,CAAC,8BAAiB,CAChC,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,UAAU,CACvB,aAAa,CAAE,OAAO,CACtB,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,CAAC,CACZ,GAAG,CAAE,IACP"}',
};
const DownloadSourceCard = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let filename;
		let { source } = $$props;
		let link;
		if ($$props.source === void 0 && $$bindings.source && source !== void 0)
			$$bindings.source(source);
		$$result.css.add(css$1);
		filename = source.href.substring(source.href.lastIndexOf("/") + 1);
		return `  <article tabindex="0" class="download-source svelte-4tt35b"><picture><source media="(prefers-color-scheme: dark)"${add_attribute("srcset", source.darkModeIcon, 0)}> <img class="download-source-icon svelte-4tt35b"${add_attribute("src", source.icon, 0)} alt="${escape(source.name, true) + " logo"}"></picture> <div class="label-container svelte-4tt35b">${validate_component(
			TextBlock,
			"TextBlock",
		).$$render(
			$$result,
			{
				variant: "title",
				style: "text-align: center;",
			},
			{},
			{
				default: () => {
					return `${escape(source.name)}`;
				},
			},
		)} ${validate_component(TextBlock, "TextBlock").$$render(
			$$result,
			{ class: "download-source-description" },
			{},
			{
				default: () => {
					return `${escape(source.description)}`;
				},
			},
		)} <a${spread(
			[
				{
					href: escape_attribute_value(source.href),
				},
				{
					download: escape_attribute_value(!source.external ? filename : ""),
				},
				escape_object(externalLink),
			],
			{
				classes: "svelte-4tt35b",
				styles: { display: `none` },
			},
		)}${add_attribute("this", link, 0)}>download</a></div> </article>`;
	},
);
const css = {
	code: ".download-page.svelte-1wvmdl0.svelte-1wvmdl0.svelte-1wvmdl0{display:flex;flex-direction:column;justify-content:center;align-items:stretch;gap:2rem;padding:2rem;max-width:900px;margin-inline:auto;inline-size:fit-content;block-size:calc(100vh - 58px)}.download-page.svelte-1wvmdl0 .download-sources.svelte-1wvmdl0.svelte-1wvmdl0{display:flex;flex-direction:column;gap:1rem}.download-page.svelte-1wvmdl0 .download-sources.svelte-1wvmdl0>p.svelte-1wvmdl0{text-align:center}",
	map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { links } from \\"$data/links\\";\\nimport { defaultI18nValues, externalLink, Metadata } from \\"$lib\\";\\nimport { Button, InfoBadge, InfoBar, TextBlock } from \\"fluent-svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport DownloadSourceCard from \\"./DownloadSourceCard.svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet isWindows = false;\\nconst downloadSources = [\\n    {\\n        name: $_(\\"download.microsoft_store.title\\", defaultI18nValues),\\n        description: $_(\\"download.microsoft_store.description\\", defaultI18nValues),\\n        href: `ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite`,\\n        icon: \\"/branding/logo-light.svg\\",\\n        darkModeIcon: \\"/branding/logo-dark.svg\\",\\n        external: true,\\n    },\\n    {\\n        name: $_(\\"download.preview.title\\", defaultI18nValues),\\n        description: $_(\\"download.preview.description\\", defaultI18nValues),\\n        href: \\"/appinstallers/Files.preview.appinstaller\\",\\n        icon: \\"/download-sources/preview_light.svg\\",\\n        darkModeIcon: \\"/download-sources/preview_dark.svg\\",\\n    },\\n];\\nonMount(() => {\\n    isWindows = navigator.userAgent.includes(\\"Windows\\");\\n});\\n</script>\\r\\n\\r\\n<Metadata title=\\"Files • Download\\" image=\\"download\\" />\\r\\n\\r\\n<slot />\\r\\n\\r\\n<main class=\\"download-page\\">\\r\\n\\t<TextBlock variant=\\"titleLarge\\" style=\\"text-align: center;\\"\\r\\n\\t\\t>{$_(\\"download.title\\", defaultI18nValues)}</TextBlock\\r\\n\\t>\\r\\n\\t<InfoBar class=\\"donation-infobar\\" severity=\\"success\\" closable={false}>\\r\\n\\t\\t<div\\r\\n\\t\\t\\tstyle=\\"display: flex; gap: 0.5rem; margin-block-end: 7px; margin-block-start: 7px;\\"\\r\\n\\t\\t>\\r\\n\\t\\t\\t{$_(\\"download.donation_description\\", defaultI18nValues)}\\r\\n\\r\\n\\t\\t\\t<Button\\r\\n\\t\\t\\t\\tslot=\\"action\\"\\r\\n\\t\\t\\t\\tvariant=\\"accent\\"\\r\\n\\t\\t\\t\\thref=\\"https://github.com/sponsors/yaira2\\"\\r\\n\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t{$_(\\"download.donation_button\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<svelte:fragment slot=\\"icon\\">&nbsp;</svelte:fragment>\\r\\n\\t</InfoBar>\\r\\n\\r\\n\\t<section class=\\"download-sources\\">\\r\\n\\t\\t{#each downloadSources as source}\\r\\n\\t\\t\\t<DownloadSourceCard {source} />\\r\\n\\t\\t{/each}\\r\\n\\t\\t<p>\\r\\n\\t\\t\\t{$_(\\"download.self_signed.description\\", defaultI18nValues)}<a\\r\\n\\t\\t\\t\\thref=\\"/appinstallers/Files.stable.appinstaller\\"\\r\\n\\t\\t\\t\\t>{$_(\\"download.self_signed.link_text\\", defaultI18nValues)}</a\\r\\n\\t\\t\\t>.\\r\\n\\t\\t</p>\\r\\n\\t</section>\\r\\n</main>\\r\\n\\r\\n<style lang=\\"scss\\">.download-page {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: stretch;\\n  gap: 2rem;\\n  padding: 2rem;\\n  max-width: 900px;\\n  margin-inline: auto;\\n  inline-size: fit-content;\\n  block-size: calc(100vh - 58px);\\n}\\n.download-page .download-sources {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.download-page .download-sources > p {\\n  text-align: center;\\n}</style>\\r\\n"],"names":[],"mappings":"AAqEmB,2DAAe,CAChC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,OAAO,CACpB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,WAAW,CACxB,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAC/B,CACA,6BAAc,CAAC,+CAAkB,CAC/B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,6BAAc,CAAC,gCAAiB,CAAG,gBAAE,CACnC,UAAU,CAAE,MACd"}',
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $_, $$unsubscribe__;
	$$unsubscribe__ = subscribe($format, value => ($_ = value));
	const downloadSources = [
		{
			name: $_("download.microsoft_store.title", defaultI18nValues),
			description: $_(
				"download.microsoft_store.description",
				defaultI18nValues,
			),
			href: `ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite`,
			icon: "/branding/logo-light.svg",
			darkModeIcon: "/branding/logo-dark.svg",
			external: true,
		},
		{
			name: $_("download.preview.title", defaultI18nValues),
			description: $_("download.preview.description", defaultI18nValues),
			href: "/appinstallers/Files.preview.appinstaller",
			icon: "/download-sources/preview_light.svg",
			darkModeIcon: "/download-sources/preview_dark.svg",
		},
	];
	$$result.css.add(css);
	$$unsubscribe__();
	return `${validate_component(Metadata, "Metadata").$$render(
		$$result,
		{
			title: "Files • Download",
			image: "download",
		},
		{},
		{},
	)} ${slots.default ? slots.default({}) : ``} <main class="download-page svelte-1wvmdl0">${validate_component(
		TextBlock,
		"TextBlock",
	).$$render(
		$$result,
		{
			variant: "titleLarge",
			style: "text-align: center;",
		},
		{},
		{
			default: () => {
				return `${escape($_("download.title", defaultI18nValues))}`;
			},
		},
	)} ${validate_component(InfoBar, "InfoBar").$$render(
		$$result,
		{
			class: "donation-infobar",
			severity: "success",
			closable: false,
		},
		{},
		{
			icon: () => {
				return ` `;
			},
			default: () => {
				return `<div style="display: flex; gap: 0.5rem; margin-block-end: 7px; margin-block-start: 7px;">${escape($_("download.donation_description", defaultI18nValues))} ${validate_component(
					Button,
					"Button",
				).$$render(
					$$result,
					Object.assign(
						{},
						{ slot: "action" },
						{ variant: "accent" },
						{
							href: "https://github.com/sponsors/yaira2",
						},
						externalLink,
					),
					{},
					{
						default: () => {
							return `${escape($_("download.donation_button", defaultI18nValues))}`;
						},
					},
				)}</div>`;
			},
		},
	)} <section class="download-sources svelte-1wvmdl0">${each(
		downloadSources,
		source => {
			return `${validate_component(DownloadSourceCard, "DownloadSourceCard").$$render($$result, { source }, {}, {})}`;
		},
	)} <p class="svelte-1wvmdl0">${escape($_("download.self_signed.description", defaultI18nValues))}<a href="/appinstallers/Files.stable.appinstaller">${escape($_("download.self_signed.link_text", defaultI18nValues))}</a>.</p></section> </main>`;
});
export { Page as default };
