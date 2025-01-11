import {
	c as create_ssr_component,
	a as subscribe,
	e as each,
	b as add_attribute,
	v as validate_component,
	m as missing_component,
	d as escape,
	f as spread,
	g as escape_attribute_value,
	h as escape_object,
} from "../../chunks/ssr.js";
import {
	n as navigating,
	p as page,
	d as defaultI18nValues,
} from "../../chunks/i18n.js";
/* empty css                                                        */
import { $ as $format } from "../../chunks/runtime.js";
/* empty css                                                */
import "../../chunks/index.js";
import { l as links } from "../../chunks/links.js";
import { L as ListItem, T as TreeView } from "../../chunks/TreeView.js";
import {
	i as isUrlContainPath,
	e as externalLink,
} from "../../chunks/utils.js";
import { P as PageSection } from "../../chunks/PageSection.js";
import { B as Button } from "../../chunks/Button.js";
import { I as IconButton } from "../../chunks/IconButton.js";
const css$2 = {
	code: ".navbar.svelte-1939ak8.svelte-1939ak8,.inner.svelte-1939ak8.svelte-1939ak8,.item.svelte-1939ak8.svelte-1939ak8{display:flex;align-items:center}.navbar.svelte-1939ak8.svelte-1939ak8{position:sticky;inset-block-start:0;z-index:10;justify-content:space-between;flex:0 0 auto;block-size:58px;padding:12px 18px;background-color:hsl(var(--mica-tint), var(--mica-tint-opacity));backdrop-filter:blur(20px) saturate(150%);user-select:none;view-transition-name:navbar}.item.svelte-1939ak8.svelte-1939ak8{justify-content:center;margin:0 4px;padding:5px 11px 6px 11px;border-radius:var(--fds-control-corner-radius);color:var(--fds-text-secondary);font-size:1.36rem;font-weight:normal;text-decoration:none;transition:var(--fds-control-faster-duration) linear background-color}.item.selected.svelte-1939ak8.svelte-1939ak8{background-color:var(--fds-subtle-fill-secondary);color:var(--fds-accent-text-primary)}.item.svelte-1939ak8.svelte-1939ak8:hover{background-color:var(--fds-subtle-fill-secondary)}.item.svelte-1939ak8.svelte-1939ak8:active{background-color:var(--fds-subtle-fill-tertiary)}.item.svelte-1939ak8 .fluent-icon{inline-size:16px;block-size:auto;fill:currentColor;margin-inline-end:4px}.divider.svelte-1939ak8.svelte-1939ak8{block-size:30px;margin:0 8px;border-inline-start:1px solid var(--fds-subtle-fill-secondary)}.logo.svelte-1939ak8.svelte-1939ak8{display:flex;align-items:center;margin-inline-end:8px;color:var(--fds-text-primary);font-size:2rem;font-weight:600;text-decoration:none;transition:100ms ease}.logo.svelte-1939ak8.svelte-1939ak8:hover{color:var(--fds-text-secondary)}.logo.svelte-1939ak8 img.svelte-1939ak8{inline-size:auto;block-size:32px;margin-inline-end:12px}.buttons.svelte-1939ak8.svelte-1939ak8{z-index:1;display:flex}.button.svelte-1939ak8.svelte-1939ak8{display:flex;justify-content:center;align-items:center;inline-size:34px;block-size:34px;margin-inline-start:8px;border:none;border-radius:var(--fds-control-corner-radius);background-color:transparent;color:var(--fds-text-secondary);text-decoration:none;cursor:pointer}.button.svelte-1939ak8.svelte-1939ak8:hover{background-color:var(--fds-subtle-fill-secondary)}.button.svelte-1939ak8.svelte-1939ak8:active{background-color:var(--fds-subtle-fill-tertiary)}.button.svelte-1939ak8 .fluent-icon{transition:130ms cubic-bezier(0.16, 0.16, 0, 1) transform;inline-size:18px;block-size:auto;fill:currentColor}.navbar .button.sidebar-button{inline-size:38px}.navbar .button.sidebar-button:active .fluent-icon{transform:scaleX(0.65)}.navbar .button.sidebar-button .fluent-icon{inline-size:16px}.sidebar.svelte-1939ak8.svelte-1939ak8{position:fixed;inset-block-start:0;inset-inline-end:0;display:none;inline-size:272px;block-size:100vh;padding-block-start:62px;border:1px solid var(--fds-surface-stroke-default);border-radius:var(--fds-overlay-corner-radius);background-color:var(--fds-solid-background-base);transform:translateX(100%);transition:120ms cubic-bezier(0.1, 0.9, 0.2, 1)}.sidebar.visible.svelte-1939ak8.svelte-1939ak8{transform:none;transition-duration:350ms}.sidebar.svelte-1939ak8 hr.svelte-1939ak8{margin:4px 0;border:none;border-block-start:1px solid var(--fds-divider-stroke-default)}@media screen and (width < 648px){.navbar.svelte-1939ak8.svelte-1939ak8{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:64px;overflow:visible}.sidebar.svelte-1939ak8.svelte-1939ak8{display:block}body{padding-block-start:62px}}",
	map: `{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { navigating, page } from \\"$app/stores\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { onMount } from \\"svelte\\";\\nimport { defaultI18nValues, externalLink, isUrlContainPath, TreeView, } from \\"$lib\\";\\nimport { ListItem } from \\"fluent-svelte\\";\\nimport Navigation from \\"~icons/fluent/navigation-24-regular\\";\\nexport let items = [];\\nexport let buttons = [];\\nlet innerWidth = 649; // Don't render the mobile layout before hydration\\nlet sidebarVisible = false;\\nlet sidebar;\\nlet sidebarButton;\\nconst toggleSidebar = () => {\\n    sidebarVisible = !sidebarVisible;\\n};\\nconst handleOuterClick = (e) => {\\n    if (!(!sidebarVisible ||\\n        e.target === sidebarButton ||\\n        sidebarButton.contains(e.target) ||\\n        e.target === sidebar ||\\n        sidebar.contains(e.target))) {\\n        toggleSidebar();\\n    }\\n};\\n$: {\\n    $navigating && (sidebarVisible = false);\\n}\\nlet minimal = false;\\nonMount(() => {\\n    const params = new URLSearchParams(window.location.search);\\n    minimal = params.has(\\"minimal\\");\\n});\\n<\/script>\\r\\n\\r\\n<svelte:window bind:innerWidth on:click={handleOuterClick} />\\r\\n{#if !minimal}\\r\\n\\t<header class=\\"navbar\\">\\r\\n\\t\\t<nav class=\\"inner\\">\\r\\n\\t\\t\\t<a class=\\"logo\\" href=\\"/\\">\\r\\n\\t\\t\\t\\t<picture>\\r\\n\\t\\t\\t\\t\\t<source\\r\\n\\t\\t\\t\\t\\t\\tmedia=\\"(prefers-color-scheme: dark)\\"\\r\\n\\t\\t\\t\\t\\t\\tsrcset=\\"/branding/logo-dark.svg\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t<source\\r\\n\\t\\t\\t\\t\\t\\tmedia=\\"(prefers-color-scheme: light)\\"\\r\\n\\t\\t\\t\\t\\t\\tsrcset=\\"/branding/logo-light.svg\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\t\\talt=\\"Files logo\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"logo-image\\"\\r\\n\\t\\t\\t\\t\\t\\theight=\\"32\\"\\r\\n\\t\\t\\t\\t\\t\\tsrc=\\"/branding/logo-light.svg\\"\\r\\n\\t\\t\\t\\t\\t\\twidth=\\"32\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t</picture>\\r\\n\\t\\t\\t\\tFiles\\r\\n\\t\\t\\t</a>\\r\\n\\t\\t\\t{#if innerWidth > 648}\\r\\n\\t\\t\\t\\t<div class=\\"divider\\" />\\r\\n\\t\\t\\t\\t{#each items as { name, path, external, icon, type }}\\r\\n\\t\\t\\t\\t\\t{#if type === \\"divider\\"}\\r\\n\\t\\t\\t\\t\\t\\t<div class=\\"divider\\" />\\r\\n\\t\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t\\t<a\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"item\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass:selected={isUrlContainPath($page.url.pathname, path)}\\r\\n\\t\\t\\t\\t\\t\\t\\thref={path}\\r\\n\\t\\t\\t\\t\\t\\t\\ttarget={external ? \\"_blank\\" : undefined}\\r\\n\\t\\t\\t\\t\\t\\t\\trel={external ? \\"noreferrer noopener\\" : undefined}\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t{#if icon}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<svelte:component this={icon} />\\r\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t\\t\\t<span>{name}</span>\\r\\n\\t\\t\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t</nav>\\r\\n\\t\\t<div class=\\"buttons\\">\\r\\n\\t\\t\\t{#if innerWidth > 648}\\r\\n\\t\\t\\t\\t{#each buttons as { icon, href, label }}\\r\\n\\t\\t\\t\\t\\t<a\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\r\\n\\t\\t\\t\\t\\t\\t{href}\\r\\n\\t\\t\\t\\t\\t\\taria-label={label}\\r\\n\\t\\t\\t\\t\\t\\ttitle={label}\\r\\n\\t\\t\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t<svelte:component this={icon} />\\r\\n\\t\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\ton:click={toggleSidebar}\\r\\n\\t\\t\\t\\t\\tbind:this={sidebarButton}\\r\\n\\t\\t\\t\\t\\tclass=\\"button sidebar-button\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<Navigation />\\r\\n\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t</div>\\r\\n\\t\\t<aside\\r\\n\\t\\t\\tbind:this={sidebar}\\r\\n\\t\\t\\tclass=\\"sidebar scroller\\"\\r\\n\\t\\t\\tclass:visible={sidebarVisible}\\r\\n\\t\\t>\\r\\n\\t\\t\\t{#each items as { name, path, external, sidebarTree, icon, type }}\\r\\n\\t\\t\\t\\t{#if type === \\"divider\\"}\\r\\n\\t\\t\\t\\t\\t<hr />\\r\\n\\t\\t\\t\\t{:else if !sidebarTree}\\r\\n\\t\\t\\t\\t\\t<ListItem\\r\\n\\t\\t\\t\\t\\t\\ttype=\\"navigation\\"\\r\\n\\t\\t\\t\\t\\t\\ton:click={toggleSidebar}\\r\\n\\t\\t\\t\\t\\t\\tselected={isUrlContainPath($page.url.pathname, path)}\\r\\n\\t\\t\\t\\t\\t\\thref={path}\\r\\n\\t\\t\\t\\t\\t\\ttarget={external ? \\"_blank\\" : undefined}\\r\\n\\t\\t\\t\\t\\t\\trel={external ? \\"noreferrer noopener\\" : undefined}\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t<svelte:fragment slot=\\"icon\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t{#if icon}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<svelte:component this={icon} />\\r\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t\\t</svelte:fragment>\\r\\n\\t\\t\\t\\t\\t\\t<span>{name}</span>\\r\\n\\t\\t\\t\\t\\t</ListItem>\\r\\n\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t<TreeView\\r\\n\\t\\t\\t\\t\\t\\ton:click={toggleSidebar}\\r\\n\\t\\t\\t\\t\\t\\ttree={[\\r\\n\\t\\t\\t\\t\\t\\t\\t{\\r\\n\\t\\t\\t\\t\\t\\t\\t\\ttitle: name,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\ticon,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tpath: \\"\\",\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tpages: [...sidebarTree],\\r\\n\\t\\t\\t\\t\\t\\t\\t},\\r\\n\\t\\t\\t\\t\\t\\t]}\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t\\t<hr />\\r\\n\\t\\t\\t{#each buttons as { icon, href, label }}\\r\\n\\t\\t\\t\\t<ListItem {href} type=\\"navigation\\" {...externalLink}>\\r\\n\\t\\t\\t\\t\\t<svelte:fragment slot=\\"icon\\">\\r\\n\\t\\t\\t\\t\\t\\t{#if icon}\\r\\n\\t\\t\\t\\t\\t\\t\\t<svelte:component this={icon} />\\r\\n\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t</svelte:fragment>\\r\\n\\t\\t\\t\\t\\t<span>{label}</span>\\r\\n\\t\\t\\t\\t</ListItem>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</aside>\\r\\n\\t</header>\\r\\n{/if}\\r\\n\\r\\n<style lang=\\"scss\\">.navbar,\\n.inner,\\n.item {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.navbar {\\n  position: sticky;\\n  inset-block-start: 0;\\n  z-index: 10;\\n  justify-content: space-between;\\n  flex: 0 0 auto;\\n  block-size: 58px;\\n  padding: 12px 18px;\\n  background-color: hsl(var(--mica-tint), var(--mica-tint-opacity));\\n  backdrop-filter: blur(20px) saturate(150%);\\n  user-select: none;\\n  view-transition-name: navbar;\\n}\\n\\n.item {\\n  justify-content: center;\\n  margin: 0 4px;\\n  padding: 5px 11px 6px 11px;\\n  border-radius: var(--fds-control-corner-radius);\\n  color: var(--fds-text-secondary);\\n  font-size: 1.36rem;\\n  font-weight: normal;\\n  text-decoration: none;\\n  transition: var(--fds-control-faster-duration) linear background-color;\\n}\\n.item.selected {\\n  background-color: var(--fds-subtle-fill-secondary);\\n  color: var(--fds-accent-text-primary);\\n}\\n.item:hover {\\n  background-color: var(--fds-subtle-fill-secondary);\\n}\\n.item:active {\\n  background-color: var(--fds-subtle-fill-tertiary);\\n}\\n.item :global(.fluent-icon) {\\n  inline-size: 16px;\\n  block-size: auto;\\n  fill: currentColor;\\n  margin-inline-end: 4px;\\n}\\n\\n.divider {\\n  block-size: 30px;\\n  margin: 0 8px;\\n  border-inline-start: 1px solid var(--fds-subtle-fill-secondary);\\n}\\n\\n.logo {\\n  display: flex;\\n  align-items: center;\\n  margin-inline-end: 8px;\\n  color: var(--fds-text-primary);\\n  font-size: 2rem;\\n  font-weight: 600;\\n  text-decoration: none;\\n  transition: 100ms ease;\\n}\\n.logo:hover {\\n  color: var(--fds-text-secondary);\\n}\\n.logo img {\\n  inline-size: auto;\\n  block-size: 32px;\\n  margin-inline-end: 12px;\\n}\\n\\n.buttons {\\n  z-index: 1;\\n  display: flex;\\n}\\n\\n.button {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  inline-size: 34px;\\n  block-size: 34px;\\n  margin-inline-start: 8px;\\n  border: none;\\n  border-radius: var(--fds-control-corner-radius);\\n  background-color: transparent;\\n  color: var(--fds-text-secondary);\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n.button:hover {\\n  background-color: var(--fds-subtle-fill-secondary);\\n}\\n.button:active {\\n  background-color: var(--fds-subtle-fill-tertiary);\\n}\\n.button :global(.fluent-icon) {\\n  transition: 130ms cubic-bezier(0.16, 0.16, 0, 1) transform;\\n  inline-size: 18px;\\n  block-size: auto;\\n  fill: currentColor;\\n}\\n\\n:global(.navbar) :global(.button.sidebar-button) {\\n  inline-size: 38px;\\n}\\n:global(.navbar) :global(.button.sidebar-button:active) :global(.fluent-icon) {\\n  transform: scaleX(0.65);\\n}\\n:global(.navbar) :global(.button.sidebar-button) :global(.fluent-icon) {\\n  inline-size: 16px;\\n}\\n\\n.sidebar {\\n  position: fixed;\\n  inset-block-start: 0;\\n  inset-inline-end: 0;\\n  display: none;\\n  inline-size: 272px;\\n  block-size: 100vh;\\n  padding-block-start: 62px;\\n  border: 1px solid var(--fds-surface-stroke-default);\\n  border-radius: var(--fds-overlay-corner-radius);\\n  background-color: var(--fds-solid-background-base);\\n  transform: translateX(100%);\\n  transition: 120ms cubic-bezier(0.1, 0.9, 0.2, 1);\\n}\\n.sidebar.visible {\\n  transform: none;\\n  transition-duration: 350ms;\\n}\\n.sidebar hr {\\n  margin: 4px 0;\\n  border: none;\\n  border-block-start: 1px solid var(--fds-divider-stroke-default);\\n}\\n\\n@media screen and (width < 648px) {\\n  .navbar {\\n    position: fixed;\\n    inset-block-start: 0;\\n    inset-inline-start: 0;\\n    inline-size: 100%;\\n    block-size: 64px;\\n    overflow: visible;\\n  }\\n  .sidebar {\\n    display: block;\\n  }\\n  :global(body) {\\n    padding-block-start: 62px;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"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"}`,
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $navigating, $$unsubscribe_navigating;
	let $page, $$unsubscribe_page;
	$$unsubscribe_navigating = subscribe(
		navigating,
		value => ($navigating = value),
	);
	$$unsubscribe_page = subscribe(page, value => ($page = value));
	let { items = [] } = $$props;
	let { buttons = [] } = $$props;
	let sidebarVisible = false;
	let sidebar;
	if ($$props.items === void 0 && $$bindings.items && items !== void 0)
		$$bindings.items(items);
	if ($$props.buttons === void 0 && $$bindings.buttons && buttons !== void 0)
		$$bindings.buttons(buttons);
	$$result.css.add(css$2);
	{
		{
			$navigating && (sidebarVisible = false);
		}
	}
	$$unsubscribe_navigating();
	$$unsubscribe_page();
	return ` ${`<header class="navbar svelte-1939ak8"><nav class="inner svelte-1939ak8"><a class="logo svelte-1939ak8" href="/" data-svelte-h="svelte-1ymcgq5"><picture><source media="(prefers-color-scheme: dark)" srcset="/branding/logo-dark.svg"> <source media="(prefers-color-scheme: light)" srcset="/branding/logo-light.svg"> <img alt="Files logo" class="logo-image svelte-1939ak8" height="32" src="/branding/logo-light.svg" width="32"></picture>
				Files</a> ${`<div class="divider svelte-1939ak8"></div> ${each(
					items,
					({ name, path, external, icon, type }) => {
						return `${
							type === "divider"
								? `<div class="divider svelte-1939ak8"></div>`
								: `<a class="${[
										"item svelte-1939ak8",
										isUrlContainPath($page.url.pathname, path)
											? "selected"
											: "",
									]
										.join(" ")
										.trim()}"${add_attribute("href", path, 0)}${add_attribute("target", external ? "_blank" : void 0, 0)}${add_attribute("rel", external ? "noreferrer noopener" : void 0, 0)}>${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``} <span>${escape(name)}</span> </a>`
						}`;
					},
				)}`}</nav> <div class="buttons svelte-1939ak8">${`${each(
					buttons,
					({ icon, href, label }) => {
						return `<a${spread(
							[
								{ class: "button" },
								{ href: escape_attribute_value(href) },
								{
									"aria-label": escape_attribute_value(label),
								},
								{ title: escape_attribute_value(label) },
								escape_object(externalLink),
							],
							{ classes: "svelte-1939ak8" },
						)}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </a>`;
					},
				)}`}</div> <aside class="${["sidebar scroller svelte-1939ak8", sidebarVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", sidebar, 0)}>${each(
					items,
					({ name, path, external, sidebarTree, icon, type }) => {
						return `${
							type === "divider"
								? `<hr class="svelte-1939ak8">`
								: `${
										!sidebarTree
											? `${validate_component(ListItem, "ListItem").$$render(
													$$result,
													{
														type: "navigation",
														selected: isUrlContainPath(
															$page.url.pathname,
															path,
														),
														href: path,
														target: external ? "_blank" : void 0,
														rel: external ? "noreferrer noopener" : void 0,
													},
													{},
													{
														icon: () => {
															return `${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``} `;
														},
														default: () => {
															return `<span>${escape(name)}</span> `;
														},
													},
												)}`
											: `${validate_component(TreeView, "TreeView").$$render(
													$$result,
													{
														tree: [
															{
																title: name,
																icon,
																path: "",
																pages: [...sidebarTree],
															},
														],
													},
													{},
													{},
												)}`
									}`
						}`;
					},
				)} <hr class="svelte-1939ak8"> ${each(
					buttons,
					({ icon, href, label }) => {
						return `${validate_component(ListItem, "ListItem").$$render(
							$$result,
							Object.assign({}, { href }, { type: "navigation" }, externalLink),
							{},
							{
								icon: () => {
									return `${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``} `;
								},
								default: () => {
									return `<span>${escape(label)}</span> `;
								},
							},
						)}`;
					},
				)}</aside></header>`}`;
});
const Github =
	'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
const Discord =
	'<svg xmlns="http://www.w3.org/2000/svg" width="71" height="55" fill="none" viewBox="0 0 71 55"><path fill="currentColor" d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/></svg>';
const css$1 = {
	code: "#page-footer{border-block-start:1px solid var(--fds-divider-stroke-default)}#page-footer .page-section-inner{display:flex;justify-content:space-between;gap:48px}#page-footer p{margin:12px 0}#page-footer .button.style-hyperlink{display:block;inline-size:fit-content;margin-inline:-11px;margin-block-end:8px}#page-footer .button.style-hyperlink:last-child{margin-block-end:0}@media screen and (width < 1024px){#page-footer .page-section-inner{display:grid;gap:24px;grid-template-columns:2fr 1fr}.column.svelte-uvxp51.svelte-uvxp51{inline-size:100%;min-inline-size:unset}}@media screen and (width < 768px){#page-footer .page-section-inner{grid-template-columns:auto}}.logo.svelte-uvxp51.svelte-uvxp51{display:flex;align-items:center;margin-inline-end:8px;color:var(--fds-text-primary);font-size:3.6rem;font-weight:600;text-decoration:none;transition:100ms ease}.logo.svelte-uvxp51 img.svelte-uvxp51{inline-size:auto;block-size:48px;margin-inline-end:12px}.social-links.svelte-uvxp51.svelte-uvxp51{display:flex;align-items:center;gap:4px;margin-block-start:12px}.column.svelte-uvxp51.svelte-uvxp51{display:block;flex:0 0 auto;min-width:14vw}.column.svelte-uvxp51.svelte-uvxp51:first-child{flex:1 1 auto}",
	map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { defaultI18nValues, externalLink, PageSection } from \\"$lib\\";\\nimport { Button, IconButton } from \\"fluent-svelte\\";\\nimport { links } from \\"$data/links\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { onMount } from \\"svelte\\";\\nimport Github from \\"./icons/github.svg?raw\\";\\nimport Discord from \\"./icons/discord.svg?raw\\";\\nconst contributors = [\\n    {\\n        name: \\"Tropical\\",\\n        link: \\"https://github.com/Tropix126/\\",\\n    },\\n    {\\n        name: \\"TheOnlyTails\\",\\n        link: \\"https://theonlytails.com/\\",\\n    },\\n    {\\n        name: \\"Marcel Wagner\\",\\n        link: \\"https://github.com/marcelwgn/\\",\\n    },\\n    {\\n        name: \\"Michael West\\",\\n        link: \\"https://michaelwe.st/\\",\\n    },\\n];\\nlet minimal = false;\\nonMount(() => {\\n    const params = new URLSearchParams(window.location.search);\\n    minimal = params.has(\\"minimal\\");\\n});\\n</script>\\r\\n\\r\\n{#if !minimal}\\r\\n\\t<PageSection type=\\"footer\\" id=\\"page-footer\\">\\r\\n\\t\\t<div class=\\"column\\">\\r\\n\\t\\t\\t<a class=\\"logo\\" href=\\"/\\">\\r\\n\\t\\t\\t\\t<picture>\\r\\n\\t\\t\\t\\t\\t<source\\r\\n\\t\\t\\t\\t\\t\\tmedia=\\"(prefers-color-scheme: dark)\\"\\r\\n\\t\\t\\t\\t\\t\\tsrcset=\\"/branding/logo-dark.svg\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t<source\\r\\n\\t\\t\\t\\t\\t\\tmedia=\\"(prefers-color-scheme: light)\\"\\r\\n\\t\\t\\t\\t\\t\\tsrcset=\\"/branding/logo-light.svg\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\t\\talt=\\"Files logo\\"\\r\\n\\t\\t\\t\\t\\t\\theight=\\"32\\"\\r\\n\\t\\t\\t\\t\\t\\tsrc=\\"/branding/logo-light.svg\\"\\r\\n\\t\\t\\t\\t\\t\\twidth=\\"32\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t</picture>\\r\\n\\t\\t\\t\\tFiles\\r\\n\\t\\t\\t</a>\\r\\n\\t\\t\\t<div class=\\"social-links\\">\\r\\n\\t\\t\\t\\t<IconButton\\r\\n\\t\\t\\t\\t\\thref=\\"https://github.com/{links.github.owner}/{links.github.repo}/\\"\\r\\n\\t\\t\\t\\t\\ttitle=\\"GitHub repository\\"\\r\\n\\t\\t\\t\\t\\taria-label=\\"GitHub repository\\"\\r\\n\\t\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t{@html Github}\\r\\n\\t\\t\\t\\t</IconButton>\\r\\n\\t\\t\\t\\t<IconButton\\r\\n\\t\\t\\t\\t\\thref=\\"https://discord.gg/{links.discord}\\"\\r\\n\\t\\t\\t\\t\\ttitle=\\"Discord server\\"\\r\\n\\t\\t\\t\\t\\taria-label=\\"Discord server\\"\\r\\n\\t\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t{@html Discord}\\r\\n\\t\\t\\t\\t</IconButton>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<p>\\r\\n\\t\\t\\t\\t{$_(\\"Copyright (c) {year} Files Community\\", {\\r\\n\\t\\t\\t\\t\\tvalues: { year: new Date().getFullYear() },\\r\\n\\t\\t\\t\\t})}\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"column\\">\\r\\n\\t\\t\\t<p>Pages</p>\\r\\n\\t\\t\\t<Button variant=\\"hyperlink\\" href=\\"/\\">\\r\\n\\t\\t\\t\\t{$_(\\"footer.home\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t\\t<Button variant=\\"hyperlink\\" href=\\"/docs\\">\\r\\n\\t\\t\\t\\t{$_(\\"footer.docs\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t\\t<Button variant=\\"hyperlink\\" href=\\"/blog\\">\\r\\n\\t\\t\\t\\t{$_(\\"footer.news\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t\\t<Button variant=\\"hyperlink\\" href=\\"/download\\">\\r\\n\\t\\t\\t\\t{$_(\\"footer.download\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"column\\">\\r\\n\\t\\t\\t<p>{$_(\\"footer.contribute\\", defaultI18nValues)}</p>\\r\\n\\t\\t\\t<Button\\r\\n\\t\\t\\t\\tvariant=\\"hyperlink\\"\\r\\n\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t\\thref=\\"https://github.com/{links.github.owner}/{links.github\\r\\n\\t\\t\\t\\t\\t.repo}/issues/new/choose\\"\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t{$_(\\"footer.feedback\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\r\\n\\t\\t\\t<Button variant=\\"hyperlink\\" href=\\"/docs/contributing/code-style\\">\\r\\n\\t\\t\\t\\t{$_(\\"footer.style_guide\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\r\\n\\t\\t\\t<Button\\r\\n\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t\\thref=\\"https://crowdin.com/project/files-app\\"\\r\\n\\t\\t\\t\\tvariant=\\"hyperlink\\"\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t{$_(\\"footer.translations\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"column\\">\\r\\n\\t\\t\\t<p>{$_(\\"footer.support\\", defaultI18nValues)}</p>\\r\\n\\t\\t\\t<Button variant=\\"hyperlink\\" href=\\"/privacy\\">\\r\\n\\t\\t\\t\\t{$_(\\"footer.privacy\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t</div>\\r\\n\\t</PageSection>\\r\\n{/if}\\r\\n\\r\\n<style lang=\\"scss\\">:global(#page-footer) {\\n  border-block-start: 1px solid var(--fds-divider-stroke-default);\\n}\\n:global(#page-footer) :global(.page-section-inner) {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 48px;\\n}\\n:global(#page-footer) :global(p) {\\n  margin: 12px 0;\\n}\\n:global(#page-footer) :global(.button.style-hyperlink) {\\n  display: block;\\n  inline-size: fit-content;\\n  margin-inline: -11px;\\n  margin-block-end: 8px;\\n}\\n:global(#page-footer) :global(.button.style-hyperlink):last-child {\\n  margin-block-end: 0;\\n}\\n\\n@media screen and (width < 1024px) {\\n  :global(#page-footer .page-section-inner) {\\n    display: grid;\\n    gap: 24px;\\n    grid-template-columns: 2fr 1fr;\\n  }\\n  .column {\\n    inline-size: 100%;\\n    min-inline-size: unset;\\n  }\\n}\\n@media screen and (width < 768px) {\\n  :global(#page-footer .page-section-inner) {\\n    grid-template-columns: auto;\\n  }\\n}\\n.logo {\\n  display: flex;\\n  align-items: center;\\n  margin-inline-end: 8px;\\n  color: var(--fds-text-primary);\\n  font-size: 3.6rem;\\n  font-weight: 600;\\n  text-decoration: none;\\n  transition: 100ms ease;\\n}\\n.logo img {\\n  inline-size: auto;\\n  block-size: 48px;\\n  margin-inline-end: 12px;\\n}\\n\\n.social-links {\\n  display: flex;\\n  align-items: center;\\n  gap: 4px;\\n  margin-block-start: 12px;\\n}\\n\\n.column {\\n  display: block;\\n  flex: 0 0 auto;\\n  min-width: 14vw;\\n}\\n.column:first-child {\\n  flex: 1 1 auto;\\n}</style>\\r\\n"],"names":[],"mappings":"AA6H2B,YAAc,CACvC,kBAAkB,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,4BAA4B,CAChE,CACQ,YAAa,CAAS,mBAAqB,CACjD,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,GAAG,CAAE,IACP,CACQ,YAAa,CAAS,CAAG,CAC/B,MAAM,CAAE,IAAI,CAAC,CACf,CACQ,YAAa,CAAS,uBAAyB,CACrD,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,WAAW,CACxB,aAAa,CAAE,KAAK,CACpB,gBAAgB,CAAE,GACpB,CACQ,YAAa,CAAS,uBAAwB,WAAY,CAChE,gBAAgB,CAAE,CACpB,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,MAAM,CAAE,CACzB,gCAAkC,CACxC,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,qBAAqB,CAAE,GAAG,CAAC,GAC7B,CACA,mCAAQ,CACN,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,KACnB,CACF,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,KAAK,CAAE,CACxB,gCAAkC,CACxC,qBAAqB,CAAE,IACzB,CACF,CACA,iCAAM,CACJ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,iBAAiB,CAAE,GAAG,CACtB,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAC9B,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IACpB,CACA,mBAAK,CAAC,iBAAI,CACR,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,iBAAiB,CAAE,IACrB,CAEA,yCAAc,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,kBAAkB,CAAE,IACtB,CAEA,mCAAQ,CACN,OAAO,CAAE,KAAK,CACd,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,SAAS,CAAE,IACb,CACA,mCAAO,YAAa,CAClB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IACZ"}',
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $_, $$unsubscribe__;
	$$unsubscribe__ = subscribe($format, value => ($_ = value));
	$$result.css.add(css$1);
	$$unsubscribe__();
	return `${`${validate_component(PageSection, "PageSection").$$render(
		$$result,
		{ type: "footer", id: "page-footer" },
		{},
		{
			default: () => {
				return `<div class="column svelte-uvxp51"><a class="logo svelte-uvxp51" href="/" data-svelte-h="svelte-welx81"><picture><source media="(prefers-color-scheme: dark)" srcset="/branding/logo-dark.svg"> <source media="(prefers-color-scheme: light)" srcset="/branding/logo-light.svg"> <img alt="Files logo" height="32" src="/branding/logo-light.svg" width="32" class="svelte-uvxp51"></picture>
				Files</a> <div class="social-links svelte-uvxp51">${validate_component(
					IconButton,
					"IconButton",
				).$$render(
					$$result,
					Object.assign(
						{},
						{
							href:
								"https://github.com/" +
								links.github.owner +
								"/" +
								links.github.repo +
								"/",
						},
						{ title: "GitHub repository" },
						{ "aria-label": "GitHub repository" },
						externalLink,
					),
					{},
					{
						default: () => {
							return `<!-- HTML_TAG_START -->${Github}<!-- HTML_TAG_END -->`;
						},
					},
				)} ${validate_component(IconButton, "IconButton").$$render(
					$$result,
					Object.assign(
						{},
						{
							href: "https://discord.gg/" + links.discord,
						},
						{ title: "Discord server" },
						{ "aria-label": "Discord server" },
						externalLink,
					),
					{},
					{
						default: () => {
							return `<!-- HTML_TAG_START -->${Discord}<!-- HTML_TAG_END -->`;
						},
					},
				)}</div> <p>${escape(
					$_("Copyright (c) {year} Files Community", {
						values: { year: /* @__PURE__ */ new Date().getFullYear() },
					}),
				)}</p></div> <div class="column svelte-uvxp51"><p data-svelte-h="svelte-76m2vc">Pages</p> ${validate_component(
					Button,
					"Button",
				).$$render(
					$$result,
					{ variant: "hyperlink", href: "/" },
					{},
					{
						default: () => {
							return `${escape($_("footer.home", defaultI18nValues))}`;
						},
					},
				)} ${validate_component(Button, "Button").$$render(
					$$result,
					{ variant: "hyperlink", href: "/docs" },
					{},
					{
						default: () => {
							return `${escape($_("footer.docs", defaultI18nValues))}`;
						},
					},
				)} ${validate_component(Button, "Button").$$render(
					$$result,
					{ variant: "hyperlink", href: "/blog" },
					{},
					{
						default: () => {
							return `${escape($_("footer.news", defaultI18nValues))}`;
						},
					},
				)} ${validate_component(Button, "Button").$$render(
					$$result,
					{ variant: "hyperlink", href: "/download" },
					{},
					{
						default: () => {
							return `${escape($_("footer.download", defaultI18nValues))}`;
						},
					},
				)}</div> <div class="column svelte-uvxp51"><p>${escape($_("footer.contribute", defaultI18nValues))}</p> ${validate_component(
					Button,
					"Button",
				).$$render(
					$$result,
					Object.assign({}, { variant: "hyperlink" }, externalLink, {
						href:
							"https://github.com/" +
							links.github.owner +
							"/" +
							links.github.repo +
							"/issues/new/choose",
					}),
					{},
					{
						default: () => {
							return `${escape($_("footer.feedback", defaultI18nValues))}`;
						},
					},
				)} ${validate_component(Button, "Button").$$render(
					$$result,
					{
						variant: "hyperlink",
						href: "/docs/contributing/code-style",
					},
					{},
					{
						default: () => {
							return `${escape($_("footer.style_guide", defaultI18nValues))}`;
						},
					},
				)} ${validate_component(Button, "Button").$$render(
					$$result,
					Object.assign(
						{},
						externalLink,
						{
							href: "https://crowdin.com/project/files-app",
						},
						{ variant: "hyperlink" },
					),
					{},
					{
						default: () => {
							return `${escape($_("footer.translations", defaultI18nValues))}`;
						},
					},
				)}</div> <div class="column svelte-uvxp51"><p>${escape($_("footer.support", defaultI18nValues))}</p> ${validate_component(
					Button,
					"Button",
				).$$render(
					$$result,
					{ variant: "hyperlink", href: "/privacy" },
					{},
					{
						default: () => {
							return `${escape($_("footer.privacy", defaultI18nValues))}`;
						},
					},
				)}</div>`;
			},
		},
	)}`}`;
});
const Chat_24_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.587-1.112l-3.826 1.067a1.25 1.25 0 0 1-1.54-1.54l1.068-3.823A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 1.5A8.5 8.5 0 0 0 3.5 12c0 1.47.373 2.883 1.073 4.137l.15.27l-1.112 3.984l3.987-1.112l.27.15A8.5 8.5 0 1 0 12 3.5M8.75 13h4.498a.75.75 0 0 1 .102 1.493l-.102.007H8.75a.75.75 0 0 1-.102-1.493zh4.498zm0-3.5h6.505a.75.75 0 0 1 .101 1.493l-.101.007H8.75a.75.75 0 0 1-.102-1.493zh6.505z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Code_24_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m8.066 18.943l6.5-14.5a.75.75 0 0 1 1.404.518l-.036.096l-6.5 14.5a.75.75 0 0 1-1.404-.518zl6.5-14.5zM2.22 11.47l4.25-4.25a.75.75 0 0 1 1.133.976l-.073.085L3.81 12l3.72 3.719a.75.75 0 0 1-.976 1.133l-.084-.073l-4.25-4.25a.75.75 0 0 1-.073-.976zl4.25-4.25zm14.25-4.25a.75.75 0 0 1 .976-.073l.084.073l4.25 4.25a.75.75 0 0 1 .073.976l-.073.085l-4.25 4.25a.75.75 0 0 1-1.133-.977l.073-.084L20.19 12l-3.72-3.72a.75.75 0 0 1 0-1.06"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Home_24_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Book_24_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M7 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1.5 1.5h7v-1h-7zM4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zM5.5 18H19V4.5a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const News_24_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h12.5a2.25 2.25 0 0 1 2.245 2.096L19 6.25V7h.75a2.25 2.25 0 0 1 2.245 2.096L22 9.25v7.5a3.25 3.25 0 0 1-3.066 3.245zH5.25zm-13.5-1.5h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-7.5a.75.75 0 0 0-.648-.743L19.75 8.5H19v7.75a.75.75 0 0 1-.648.743L18.25 17a.75.75 0 0 1-.743-.648l-.007-.102v-10a.75.75 0 0 0-.648-.743L16.75 5.5H4.25a.75.75 0 0 0-.743.648L3.5 6.25v10.5a1.75 1.75 0 0 0 1.606 1.744zh13.5zm6.996-4h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.493zh3.006zm-3.003-3.495a.75.75 0 0 1 .75.75v3.495a.75.75 0 0 1-.75.75H5.748a.75.75 0 0 1-.75-.75v-3.495a.75.75 0 0 1 .75-.75zm-.75 1.5H6.498V14.5h1.995zm3.753-1.5h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.494zh3.006zM5.748 7.502h9.504a.75.75 0 0 1 .102 1.494l-.102.006H5.748a.75.75 0 0 1-.102-1.493zh9.504z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const Arrow_download_24_regular = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<svg${spread(
			[
				{ class: "fluent-icon" },
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				escape_object($$props),
			],
			{},
		)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M18.25 20.5a.75.75 0 1 1 0 1.5l-13 .005a.75.75 0 1 1 0-1.5zM11.648 2.014l.102-.007a.75.75 0 0 1 .743.648l.007.102l-.001 13.685l3.722-3.72a.75.75 0 0 1 .976-.073l.085.073a.75.75 0 0 1 .072.976l-.073.084l-4.997 4.997a.75.75 0 0 1-.976.073l-.085-.073l-5.003-4.996a.75.75 0 0 1 .976-1.134l.084.072l3.719 3.714L11 2.756a.75.75 0 0 1 .648-.743l.102-.007z"/>`}<!-- HTML_TAG_END --></svg>`;
	},
);
const css = {
	code: `@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url("/fonts/Inter-roman.var.woff2") format("woff2");font-named-instance:"Regular"}@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url("/fonts/Inter-italic.var.woff2") format("woff2");font-named-instance:"Italic"}@font-face{font-family:"Open Sans";font-style:normal;font-weight:100 900;font-display:swap;src:url("/fonts/OpenSans-roman.var.woff2") format("woff2");font-named-instance:"Regular"}@font-face{font-family:"Open Sans";font-style:italic;font-weight:100 900;font-display:swap;src:url("/fonts/OpenSans-italic.var.woff2") format("woff2");font-named-instance:"Italic"}:root{--fds-font-family-fallback:"Segoe UI", "Inter", "Open Sans", -apple-system,
  	ui-sans-serif, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif;--font-family-sans-serif:var(--fds-font-family-display);--font-family-monospace:"Cascadia Code", "Fira Code", "Consolas", monospace;overflow-x:hidden}@media(prefers-color-scheme: light){:root{color-scheme:light;--mica-tint:0, 0%, 95%;--mica-tint-opacity:0.8}}@media(prefers-color-scheme: dark){:root{color-scheme:dark;--mica-tint:0, 0%, 13%;--mica-tint-opacity:0.8}}*,*::before,*::after{box-sizing:border-box}*:focus-visible:not(.text-box){outline:none !important;box-shadow:0 0 0 2px var(--fds-focus-stroke-outer) !important}::-webkit-input-placeholder,body,button,input,select,textarea{font-family:var(--font-family-sans-serif)}::selection{background-color:hsl(var(--fds-accent-dark-1));color:white}html,body{block-size:100vh;block-size:100dvh;margin:0;background-color:var(--fds-solid-background-secondary)}html{font-size:62.5%}body{font-size:1.4rem}picture{display:contents}@media(prefers-color-scheme: light){code{color:#393a34}code .comment,code .prolog,code .doctype,code .cdata{color:#008000;font-style:italic}code .namespace{opacity:0.7}code .string{color:#a31515}code .punctuation,code .operator{color:#393a34}code .url,code .symbol,code .number,code .boolean,code .variable,code .constant,code .inserted{color:#36acaa}code .atrule,code .keyword,code .attr-value,code .language-autohotkey .selector,code .language-json .boolean,code .language-json .number,code[class*=language-css]{color:#00f}code .function{color:#393a34}code .deleted,code .language-autohotkey .tag{color:#9a050f}code .selector,code .language-autohotkey .keyword{color:#00009f}code .important{color:#e90}code .important,code .bold{font-weight:bold}code .italic{font-style:italic}code .class-name,code .language-json .property{color:#2b91af}code .tag,code .selector{color:#800000}code .attr-name,code .property,code .regex,code .entity{color:#f00}code .directive.tag .tag{background:#ff0;color:#393a34}code .line-numbers .line-numbers-rows{border-inline-end-color:#a5a5a5}code .line-numbers-rows>span:before{color:#2b91af}}@media(prefers-color-scheme: dark){code{color:#d4d4d4}code[class*=language-javascript],code[class*=language-jsx],code[class*=language-typescript],code[class*=language-tsx]{color:#9cdcfe}code[class*=language-css]{color:#ce9178}code[class*=language-html]{color:#d4d4d4}code .language-regex .anchor{color:#dcdcaa}code .language-html .punctuation{color:#808080}code .namespace{opacity:0.7}code .doctype .doctype-tag{color:#569cd6}code .doctype .name{color:#9cdcfe}code .comment,code .prolog{color:#6a9955}code .punctuation,code .language-html .language-css .punctuation,code .language-html .language-javascript .punctuation{color:#d4d4d4}code .property,code .tag,code .boolean,code .number,code .constant,code .symbol,code .inserted,code .unit{color:#b5cea8}code .selector,code .attr-name,code .string,code .char,code .builtin,code .deleted{color:#ce9178}code .language-css .string.url{text-decoration:underline}code .operator,code .entity{color:#d4d4d4}code .operator.arrow{color:#569cd6}code .atrule{color:#ce9178}code .atrule .rule{color:#c586c0}code .atrule .url{color:#9cdcfe}code .atrule .url .function{color:#dcdcaa}code .atrule .url .punctuation{color:#d4d4d4}code .keyword{color:#569cd6}code .keyword.module,code .keyword.control-flow{color:#c586c0}code .function,code .function .maybe-class-name{color:#dcdcaa}code .regex{color:#d16969}code .important{color:#569cd6}code .italic{font-style:italic}code .constant{color:#9cdcfe}code .class-name,code .maybe-class-name{color:#4ec9b0}code .console{color:#9cdcfe}code .parameter{color:#9cdcfe}code .interpolation{color:#9cdcfe}code .punctuation.interpolation-punctuation{color:#569cd6}code .boolean{color:#569cd6}code .property,code .variable,code .imports .maybe-class-name,code .exports .maybe-class-name{color:#9cdcfe}code .selector{color:#d7ba7d}code .escape{color:#d7ba7d}code .tag{color:#569cd6}code .tag .punctuation{color:#808080}code .cdata{color:#808080}code .attr-name{color:#9cdcfe}code .attr-value,code .attr-value .punctuation{color:#ce9178}code .attr-value .punctuation.attr-equals{color:#d4d4d4}code .entity{color:#569cd6}code .namespace{color:#4ec9b0}}.scroller{overflow:auto}@supports (overflow: overlay){.scroller{overflow:overlay}}::-webkit-scrollbar{display:block;inline-size:14px;border-radius:14px}@media(prefers-color-scheme: light){::-webkit-scrollbar:vertical{--scrollbar-caret-top:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 16.9814C5.0281 16.9814 4.45412 15.7165 5.16132 14.9083L10.6831 8.59765C11.3804 7.80083 12.6199 7.80083 13.3172 8.59765L18.839 14.9083C19.5462 15.7165 18.9722 16.9814 17.8983 16.9814H6.10204Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E");--scrollbar-caret-bottom:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 8C5.0281 8 4.45412 9.2649 5.16132 10.0731L10.6831 16.3838C11.3804 17.1806 12.6199 17.1806 13.3172 16.3838L18.839 10.0731C19.5462 9.2649 18.9722 8 17.8983 8H6.10204Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E")}}@media(prefers-color-scheme: dark){::-webkit-scrollbar:vertical{--scrollbar-caret-top:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 16.9814C5.0281 16.9814 4.45412 15.7165 5.16132 14.9083L10.6831 8.59765C11.3804 7.80083 12.6199 7.80083 13.3172 8.59765L18.839 14.9083C19.5462 15.7165 18.9722 16.9814 17.8983 16.9814H6.10204Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E");--scrollbar-caret-bottom:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 8C5.0281 8 4.45412 9.2649 5.16132 10.0731L10.6831 16.3838C11.3804 17.1806 12.6199 17.1806 13.3172 16.3838L18.839 10.0731C19.5462 9.2649 18.9722 8 17.8983 8H6.10204Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E")}}@media(prefers-color-scheme: light){::-webkit-scrollbar:horizontal{--scrollbar-caret-top:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M9 17.8983C9 18.9722 10.2649 19.5462 11.0731 18.839L17.3838 13.3172C18.1806 12.6199 18.1806 11.3804 17.3838 10.6831L11.0731 5.16132C10.2649 4.45412 9 5.02809 9 6.10204V17.8983Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E");--scrollbar-caret-bottom:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M15 17.8983C15 18.9722 13.7351 19.5462 12.9268 18.839L6.61617 13.3172C5.81935 12.6199 5.81935 11.3804 6.61617 10.6831L12.9268 5.16132C13.7351 4.45412 15 5.02809 15 6.10204L15 17.8983Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E")}}@media(prefers-color-scheme: dark){::-webkit-scrollbar:horizontal{--scrollbar-caret-top:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M9 17.8983C9 18.9722 10.2649 19.5462 11.0731 18.839L17.3838 13.3172C18.1806 12.6199 18.1806 11.3804 17.3838 10.6831L11.0731 5.16132C10.2649 4.45412 9 5.02809 9 6.10204V17.8983Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E");--scrollbar-caret-bottom:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M15 17.8983C15 18.9722 13.7351 19.5462 12.9268 18.839L6.61617 13.3172C5.81935 12.6199 5.81935 11.3804 6.61617 10.6831L12.9268 5.16132C13.7351 4.45412 15 5.02809 15 6.10204L15 17.8983Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E")}}::-webkit-scrollbar:hover{background:var(--scrollbar-caret-bottom) bottom center/contain no-repeat, var(--scrollbar-caret-top) top center/contain no-repeat, hsl(var(--mica-tint), var(--mica-tint-opacity))}::-webkit-scrollbar-thumb{border:6px solid transparent;border-block:none;border-radius:14px;background:var(--fds-control-strong-fill-default);background-clip:padding-box}::-webkit-scrollbar-thumb:hover{border:4px solid transparent}::-webkit-scrollbar-button:single-button{display:block;block-size:14px}.hyperlink{color:var(--fds-accent-text-primary);text-decoration:underline;cursor:pointer;text-decoration-skip-ink:none}.hyperlink:hover,.hyperlink:active{text-decoration:none}.hyperlink:hover{color:var(--fds-accent-text-tertiary)}.hyperlink:active{color:var(--fds-accent-text-secondary)}@keyframes scroll-gradient{from{background-position:50% 0}50%{background-position:50% 100%}to{background-position:50% 0}}.markdown-body{color:var(--fds-text-primary);font-size:1.4rem;line-height:1.45}.markdown-body>*:first-child{margin-block-start:0 !important}.markdown-body>*:last-child{margin-block-end:0 !important}.markdown-body>*:only-child{margin:0 !important}.markdown-body blockquote,.markdown-body details,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-block-start:0;margin-block-end:16px}.markdown-body figure{margin:16px 0}.markdown-body figure.margin-top{margin-block:48px 16px}.markdown-body figure.margin-bottom{margin-block:16px 48px}.markdown-body figure figcaption{color:var(--fds-text-secondary);font-size:1.45rem;text-align:center}.markdown-body img{max-inline-size:100%;block-size:auto;border-radius:var(--fds-overlay-corner-radius);border:3px solid var(--fds-card-stroke-default)}.markdown-body h1,.markdown-body h2{padding-block-end:0.3em}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-block-start:24px;margin-block-end:16px;color:var(--fds-text-primary);font-weight:600;line-height:1.25}.markdown-body h1{font-size:2em}.markdown-body h2{font-size:1.5em}.markdown-body h3{font-size:1.25em}.markdown-body h4{font-size:1em}.markdown-body h5{font-size:0.875em}.markdown-body h6{color:var(--fds-text-tertiary);font-size:0.85em}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-block-start:0;margin-block-end:0}.markdown-body ol,.markdown-body ul{padding-inline-start:2em}.markdown-body li+li{margin-block-start:0.25em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol,.markdown-body ul{padding-inline-start:2em}.markdown-body code,.markdown-body kbd{margin:0;padding:0.2em 0.4em;border:1px solid var(--fds-card-stroke-default);border-radius:var(--fds-control-corner-radius);background-color:var(--fds-card-background-default);background-clip:padding-box;font-family:var(--font-family-monospace);font-size:85%;word-wrap:break-word}.markdown-body kbd{padding:0.3em 0.4em;color:hsl(70deg, 5%, 22%);box-shadow:inset 0 -0.2em 0 var(--fds-subtle-fill-tertiary)}@media(prefers-color-scheme: dark){.markdown-body kbd{color:hsl(0deg, 0%, 83%)}}.markdown-body pre{padding:12px 16px;border:1px solid var(--fds-card-stroke-default);border-radius:var(--fds-control-corner-radius);background-color:var(--fds-card-background-default);background-clip:padding-box;font-size:1em;overflow:auto}.markdown-body pre code{padding:0;border:none;background-color:transparent}.markdown-body blockquote{margin:0;padding:0 1em;border-inline-start:0.25em solid var(--fds-subtle-fill-secondary);color:var(--text-muted)}.markdown-body a:not(.hyperlink-button){color:var(--fds-accent-text-primary);text-decoration:underline;text-decoration-skip-ink:none}.markdown-body a:not(.hyperlink-button):hover,.markdown-body a:not(.hyperlink-button):active{text-decoration:none}.markdown-body a:not(.hyperlink-button):hover{color:var(--fds-accent-text-tertiary)}.markdown-body a:not(.hyperlink-button):active{color:var(--fds-accent-text-secondary)}.markdown-body hr{margin:24px 0;border:none;border-block-start:1px solid var(--fds-divider-stroke-default)}.markdown-body table{display:inline-block;border:1px solid var(--fds-control-stroke-default);border-radius:var(--fds-control-corner-radius);border-collapse:collapse;background-clip:padding-box;overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.markdown-body table th,.markdown-body table td{padding:6px 13px;width:1%}.markdown-body table th{background-color:var(--fds-subtle-fill-tertiary);font-weight:600}.markdown-body table tr{background-color:var(--fds-solid-background-quarternary)}.markdown-body table tr:nth-child(2n){background-color:transparent}.markdown-body .color::before{display:inline-block;content:"";background-color:var(--color);margin-inline-end:1ch;padding:1ch;aspect-ratio:1;border-radius:50%;outline:1px solid;outline-color:var(--fds-divider-stroke-default);vertical-align:sub}`,
	map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { dev } from \\"$app/environment\\";\\nimport { page } from \\"$app/stores\\";\\nimport { defaultI18nValues } from \\"$lib\\";\\nimport { Footer, Navbar } from \\"$layout\\";\\nimport { links } from \\"$data/links\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport \\"fluent-svelte/theme.css\\";\\nimport Chat from \\"~icons/fluent/chat-24-regular\\";\\nimport Code from \\"~icons/fluent/code-24-regular\\";\\nimport Home from \\"~icons/fluent/home-24-regular\\";\\nimport Book from \\"~icons/fluent/book-24-regular\\";\\nimport News from \\"~icons/fluent/news-24-regular\\";\\nimport Download from \\"~icons/fluent/arrow-download-24-regular\\";\\nimport { afterNavigate, onNavigate } from \\"$app/navigation\\";\\nimport { onMount } from \\"svelte\\";\\n// import PaintBrush from \\"~icons/fluent/paint-brush-24-regular\\";\\nconst { github, discord } = links;\\nconst navbarItems = [\\n    {\\n        name: $_(\\"navbar.home\\", defaultI18nValues),\\n        path: \\"/\\",\\n        icon: Home,\\n    },\\n    {\\n        name: $_(\\"navbar.docs\\", defaultI18nValues),\\n        path: \\"/docs\\",\\n        sidebarTree: $page.data.docs ?? [],\\n        icon: Book,\\n    },\\n    {\\n        name: $_(\\"navbar.news\\", defaultI18nValues),\\n        path: \\"/blog\\",\\n        icon: News,\\n    },\\n    {\\n        name: $_(\\"navbar.download\\"),\\n        path: \\"/download\\",\\n        icon: Download,\\n    },\\n];\\nconst navbarButtons = [\\n    {\\n        label: $_(\\"navbar.discord\\", defaultI18nValues),\\n        href: \`https://discord.gg/\${discord}\`,\\n        icon: Chat,\\n    },\\n    {\\n        label: $_(\\"navbar.github\\", defaultI18nValues),\\n        href: \`https://github.com/\${github.owner}/\${github.repo}\`,\\n        icon: Code,\\n    },\\n];\\nonNavigate(async (navigation) => {\\n    if (!document.startViewTransition)\\n        return;\\n    return new Promise(resolve => {\\n        document.startViewTransition(async () => {\\n            resolve();\\n            await navigation.complete;\\n        });\\n    });\\n});\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<meta content=\\"Files\\" name=\\"og:site_name\\" />\\r\\n\\r\\n\\t<meta content=\\"website\\" name=\\"og:type\\" />\\r\\n\\r\\n\\t<link\\r\\n\\t\\thref=\\"/branding/logo{$page.route.id === 'themes'\\r\\n\\t\\t\\t? '-themes'\\r\\n\\t\\t\\t: ''}-light.svg\\"\\r\\n\\t\\trel=\\"icon\\"\\r\\n\\t\\ttype=\\"image/svg+xml\\"\\r\\n\\t\\tmedia=\\"(prefers-color-scheme: light)\\"\\r\\n\\t/>\\r\\n\\t<link\\r\\n\\t\\thref=\\"/branding/logo{$page.route.id === 'themes' ? '-themes' : ''}-dark.svg\\"\\r\\n\\t\\trel=\\"icon\\"\\r\\n\\t\\ttype=\\"image/svg+xml\\"\\r\\n\\t\\tmedia=\\"(prefers-color-scheme: dark)\\"\\r\\n\\t/>\\r\\n\\r\\n\\t<meta\\r\\n\\t\\tcontent=\\"Files, File Explorer, Fluent Design, Microsoft, Windows, UWP\\"\\r\\n\\t\\tname=\\"keywords\\"\\r\\n\\t/>\\r\\n\\t<meta content=\\"Files Community\\" name=\\"author\\" />\\r\\n\\r\\n\\t<meta content=\\"#005fb8\\" name=\\"theme-color\\" />\\r\\n\\r\\n\\t<meta content=\\"summary_large_image\\" name=\\"twitter:card\\" />\\r\\n\\t<meta content=\\"@FilesForWindows\\" name=\\"twitter:site\\" />\\r\\n\\t<meta content=\\"@FilesForWindows\\" name=\\"twitter:creator\\" />\\r\\n\\r\\n\\t{#if !dev && $page.url.host === \\"files.community\\"}\\r\\n\\t\\t<script type=\\"text/javascript\\">\\r\\n\\t\\t\\t(function (c, l, a, r, i, t, y) {\\r\\n\\t\\t\\t\\tc[a] =\\r\\n\\t\\t\\t\\t\\tc[a] ||\\r\\n\\t\\t\\t\\t\\tfunction () {\\r\\n\\t\\t\\t\\t\\t\\t(c[a].q = c[a].q || []).push(arguments);\\r\\n\\t\\t\\t\\t\\t};\\r\\n\\t\\t\\t\\tt = l.createElement(r);\\r\\n\\t\\t\\t\\tt.async = true;\\r\\n\\t\\t\\t\\tt.src = \\"https://www.clarity.ms/tag/\\" + i;\\r\\n\\t\\t\\t\\ty = l.getElementsByTagName(r)[0];\\r\\n\\t\\t\\t\\ty.parentNode.insertBefore(t, y);\\r\\n\\t\\t\\t})(window, document, \\"clarity\\", \\"script\\", \\"4q1wajdktz\\");\\r\\n\\t\\t<\/script>\\r\\n\\t{/if}\\r\\n</svelte:head>\\r\\n\\r\\n<Navbar buttons={navbarButtons} items={navbarItems} />\\r\\n<slot />\\r\\n<Footer />\\r\\n\\r\\n<style global lang=\\"scss\\">@font-face {\\n  font-family: \\"Inter\\";\\n  font-style: normal;\\n  font-weight: 100 900;\\n  font-display: swap;\\n  src: url(\\"/fonts/Inter-roman.var.woff2\\") format(\\"woff2\\");\\n  font-named-instance: \\"Regular\\";\\n}\\n@font-face {\\n  font-family: \\"Inter\\";\\n  font-style: italic;\\n  font-weight: 100 900;\\n  font-display: swap;\\n  src: url(\\"/fonts/Inter-italic.var.woff2\\") format(\\"woff2\\");\\n  font-named-instance: \\"Italic\\";\\n}\\n@font-face {\\n  font-family: \\"Open Sans\\";\\n  font-style: normal;\\n  font-weight: 100 900;\\n  font-display: swap;\\n  src: url(\\"/fonts/OpenSans-roman.var.woff2\\") format(\\"woff2\\");\\n  font-named-instance: \\"Regular\\";\\n}\\n@font-face {\\n  font-family: \\"Open Sans\\";\\n  font-style: italic;\\n  font-weight: 100 900;\\n  font-display: swap;\\n  src: url(\\"/fonts/OpenSans-italic.var.woff2\\") format(\\"woff2\\");\\n  font-named-instance: \\"Italic\\";\\n}\\n/*\\n * Global Variables\\n */\\n:global(:root) {\\n  --fds-font-family-fallback: \\"Segoe UI\\", \\"Inter\\", \\"Open Sans\\", -apple-system,\\n  \\tui-sans-serif, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif;\\n  --font-family-sans-serif: var(--fds-font-family-display);\\n  --font-family-monospace: \\"Cascadia Code\\", \\"Fira Code\\", \\"Consolas\\", monospace;\\n  overflow-x: hidden;\\n}\\n\\n/*\\n * Light Theme Colors\\n */\\n@media (prefers-color-scheme: light) {\\n  :global(:root) {\\n    color-scheme: light;\\n    --mica-tint: 0, 0%, 95%;\\n    --mica-tint-opacity: 0.8;\\n  }\\n}\\n/*\\n * Dark Theme Colors\\n */\\n@media (prefers-color-scheme: dark) {\\n  :global(:root) {\\n    color-scheme: dark;\\n    --mica-tint: 0, 0%, 13%;\\n    --mica-tint-opacity: 0.8;\\n  }\\n}\\n/*\\n * Base styles\\n */\\n:global(*),\\n:global(*::before),\\n:global(*::after) {\\n  box-sizing: border-box;\\n}\\n\\n:global(*:focus-visible:not(.text-box)) {\\n  outline: none !important;\\n  box-shadow: 0 0 0 2px var(--fds-focus-stroke-outer) !important;\\n}\\n\\n:global(::-webkit-input-placeholder),\\n:global(body),\\n:global(button),\\n:global(input),\\n:global(select),\\n:global(textarea) {\\n  font-family: var(--font-family-sans-serif);\\n}\\n\\n:global(::selection) {\\n  background-color: hsl(var(--fds-accent-dark-1));\\n  color: white;\\n}\\n\\n:global(html),\\n:global(body) {\\n  block-size: 100vh;\\n  block-size: 100dvh;\\n  margin: 0;\\n  background-color: var(--fds-solid-background-secondary);\\n}\\n\\n:global(html) {\\n  font-size: 62.5%;\\n}\\n\\n:global(body) {\\n  font-size: 1.4rem;\\n}\\n\\n:global(picture) {\\n  display: contents;\\n}\\n\\n@media (prefers-color-scheme: light) {\\n  :global(code) {\\n    color: #393a34;\\n  }\\n  :global(code) :global(.comment),\\n:global(code) :global(.prolog),\\n:global(code) :global(.doctype),\\n:global(code) :global(.cdata) {\\n    color: #008000;\\n    font-style: italic;\\n  }\\n  :global(code) :global(.namespace) {\\n    opacity: 0.7;\\n  }\\n  :global(code) :global(.string) {\\n    color: #a31515;\\n  }\\n  :global(code) :global(.punctuation),\\n:global(code) :global(.operator) {\\n    color: #393a34; /* no highlight */\\n  }\\n  :global(code) :global(.url),\\n:global(code) :global(.symbol),\\n:global(code) :global(.number),\\n:global(code) :global(.boolean),\\n:global(code) :global(.variable),\\n:global(code) :global(.constant),\\n:global(code) :global(.inserted) {\\n    color: #36acaa;\\n  }\\n  :global(code) :global(.atrule),\\n:global(code) :global(.keyword),\\n:global(code) :global(.attr-value),\\n:global(code) :global(.language-autohotkey) :global(.selector),\\n:global(code) :global(.language-json) :global(.boolean),\\n:global(code) :global(.language-json) :global(.number),\\n:global(code[class*=language-css]) {\\n    color: #00f;\\n  }\\n  :global(code) :global(.function) {\\n    color: #393a34;\\n  }\\n  :global(code) :global(.deleted),\\n:global(code) :global(.language-autohotkey) :global(.tag) {\\n    color: #9a050f;\\n  }\\n  :global(code) :global(.selector),\\n:global(code) :global(.language-autohotkey) :global(.keyword) {\\n    color: #00009f;\\n  }\\n  :global(code) :global(.important) {\\n    color: #e90;\\n  }\\n  :global(code) :global(.important),\\n:global(code) :global(.bold) {\\n    font-weight: bold;\\n  }\\n  :global(code) :global(.italic) {\\n    font-style: italic;\\n  }\\n  :global(code) :global(.class-name),\\n:global(code) :global(.language-json) :global(.property) {\\n    color: #2b91af;\\n  }\\n  :global(code) :global(.tag),\\n:global(code) :global(.selector) {\\n    color: #800000;\\n  }\\n  :global(code) :global(.attr-name),\\n:global(code) :global(.property),\\n:global(code) :global(.regex),\\n:global(code) :global(.entity) {\\n    color: #f00;\\n  }\\n  :global(code) :global(.directive.tag) :global(.tag) {\\n    background: #ff0;\\n    color: #393a34;\\n  }\\n  :global(code) :global(.line-numbers) :global(.line-numbers-rows) {\\n    border-inline-end-color: #a5a5a5;\\n  }\\n  :global(code) :global(.line-numbers-rows) > :global(span:before) {\\n    color: #2b91af;\\n  }\\n}\\n@media (prefers-color-scheme: dark) {\\n  :global(code) {\\n    color: #d4d4d4;\\n  }\\n  :global(code[class*=language-javascript]), :global(code[class*=language-jsx]), :global(code[class*=language-typescript]), :global(code[class*=language-tsx]) {\\n    color: #9cdcfe;\\n  }\\n  :global(code[class*=language-css]) {\\n    color: #ce9178;\\n  }\\n  :global(code[class*=language-html]) {\\n    color: #d4d4d4;\\n  }\\n  :global(code) :global(.language-regex) :global(.anchor) {\\n    color: #dcdcaa;\\n  }\\n  :global(code) :global(.language-html) :global(.punctuation) {\\n    color: #808080;\\n  }\\n  :global(code) :global(.namespace) {\\n    opacity: 0.7;\\n  }\\n  :global(code) :global(.doctype) :global(.doctype-tag) {\\n    color: #569cd6;\\n  }\\n  :global(code) :global(.doctype) :global(.name) {\\n    color: #9cdcfe;\\n  }\\n  :global(code) :global(.comment),\\n:global(code) :global(.prolog) {\\n    color: #6a9955;\\n  }\\n  :global(code) :global(.punctuation),\\n:global(code) :global(.language-html) :global(.language-css) :global(.punctuation),\\n:global(code) :global(.language-html) :global(.language-javascript) :global(.punctuation) {\\n    color: #d4d4d4;\\n  }\\n  :global(code) :global(.property),\\n:global(code) :global(.tag),\\n:global(code) :global(.boolean),\\n:global(code) :global(.number),\\n:global(code) :global(.constant),\\n:global(code) :global(.symbol),\\n:global(code) :global(.inserted),\\n:global(code) :global(.unit) {\\n    color: #b5cea8;\\n  }\\n  :global(code) :global(.selector),\\n:global(code) :global(.attr-name),\\n:global(code) :global(.string),\\n:global(code) :global(.char),\\n:global(code) :global(.builtin),\\n:global(code) :global(.deleted) {\\n    color: #ce9178;\\n  }\\n  :global(code) :global(.language-css) :global(.string.url) {\\n    text-decoration: underline;\\n  }\\n  :global(code) :global(.operator),\\n:global(code) :global(.entity) {\\n    color: #d4d4d4;\\n  }\\n  :global(code) :global(.operator.arrow) {\\n    color: #569cd6;\\n  }\\n  :global(code) :global(.atrule) {\\n    color: #ce9178;\\n  }\\n  :global(code) :global(.atrule) :global(.rule) {\\n    color: #c586c0;\\n  }\\n  :global(code) :global(.atrule) :global(.url) {\\n    color: #9cdcfe;\\n  }\\n  :global(code) :global(.atrule) :global(.url) :global(.function) {\\n    color: #dcdcaa;\\n  }\\n  :global(code) :global(.atrule) :global(.url) :global(.punctuation) {\\n    color: #d4d4d4;\\n  }\\n  :global(code) :global(.keyword) {\\n    color: #569cd6;\\n  }\\n  :global(code) :global(.keyword.module),\\n:global(code) :global(.keyword.control-flow) {\\n    color: #c586c0;\\n  }\\n  :global(code) :global(.function),\\n:global(code) :global(.function) :global(.maybe-class-name) {\\n    color: #dcdcaa;\\n  }\\n  :global(code) :global(.regex) {\\n    color: #d16969;\\n  }\\n  :global(code) :global(.important) {\\n    color: #569cd6;\\n  }\\n  :global(code) :global(.italic) {\\n    font-style: italic;\\n  }\\n  :global(code) :global(.constant) {\\n    color: #9cdcfe;\\n  }\\n  :global(code) :global(.class-name),\\n:global(code) :global(.maybe-class-name) {\\n    color: #4ec9b0;\\n  }\\n  :global(code) :global(.console) {\\n    color: #9cdcfe;\\n  }\\n  :global(code) :global(.parameter) {\\n    color: #9cdcfe;\\n  }\\n  :global(code) :global(.interpolation) {\\n    color: #9cdcfe;\\n  }\\n  :global(code) :global(.punctuation.interpolation-punctuation) {\\n    color: #569cd6;\\n  }\\n  :global(code) :global(.boolean) {\\n    color: #569cd6;\\n  }\\n  :global(code) :global(.property),\\n:global(code) :global(.variable),\\n:global(code) :global(.imports) :global(.maybe-class-name),\\n:global(code) :global(.exports) :global(.maybe-class-name) {\\n    color: #9cdcfe;\\n  }\\n  :global(code) :global(.selector) {\\n    color: #d7ba7d;\\n  }\\n  :global(code) :global(.escape) {\\n    color: #d7ba7d;\\n  }\\n  :global(code) :global(.tag) {\\n    color: #569cd6;\\n  }\\n  :global(code) :global(.tag) :global(.punctuation) {\\n    color: #808080;\\n  }\\n  :global(code) :global(.cdata) {\\n    color: #808080;\\n  }\\n  :global(code) :global(.attr-name) {\\n    color: #9cdcfe;\\n  }\\n  :global(code) :global(.attr-value),\\n:global(code) :global(.attr-value) :global(.punctuation) {\\n    color: #ce9178;\\n  }\\n  :global(code) :global(.attr-value) :global(.punctuation.attr-equals) {\\n    color: #d4d4d4;\\n  }\\n  :global(code) :global(.entity) {\\n    color: #569cd6;\\n  }\\n  :global(code) :global(.namespace) {\\n    color: #4ec9b0;\\n  }\\n}\\n\\n:global(.scroller) {\\n  overflow: auto;\\n}\\n@supports (overflow: overlay) {\\n  :global(.scroller) {\\n    overflow: overlay;\\n  }\\n}\\n\\n:global(::-webkit-scrollbar) {\\n  display: block;\\n  inline-size: 14px;\\n  border-radius: 14px;\\n}\\n@media (prefers-color-scheme: light) {\\n  :global(::-webkit-scrollbar:vertical) {\\n    --scrollbar-caret-top: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 16.9814C5.0281 16.9814 4.45412 15.7165 5.16132 14.9083L10.6831 8.59765C11.3804 7.80083 12.6199 7.80083 13.3172 8.59765L18.839 14.9083C19.5462 15.7165 18.9722 16.9814 17.8983 16.9814H6.10204Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E\\");\\n    --scrollbar-caret-bottom: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 8C5.0281 8 4.45412 9.2649 5.16132 10.0731L10.6831 16.3838C11.3804 17.1806 12.6199 17.1806 13.3172 16.3838L18.839 10.0731C19.5462 9.2649 18.9722 8 17.8983 8H6.10204Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E\\");\\n  }\\n}\\n@media (prefers-color-scheme: dark) {\\n  :global(::-webkit-scrollbar:vertical) {\\n    --scrollbar-caret-top: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 16.9814C5.0281 16.9814 4.45412 15.7165 5.16132 14.9083L10.6831 8.59765C11.3804 7.80083 12.6199 7.80083 13.3172 8.59765L18.839 14.9083C19.5462 15.7165 18.9722 16.9814 17.8983 16.9814H6.10204Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E\\");\\n    --scrollbar-caret-bottom: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 8C5.0281 8 4.45412 9.2649 5.16132 10.0731L10.6831 16.3838C11.3804 17.1806 12.6199 17.1806 13.3172 16.3838L18.839 10.0731C19.5462 9.2649 18.9722 8 17.8983 8H6.10204Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E\\");\\n  }\\n}\\n@media (prefers-color-scheme: light) {\\n  :global(::-webkit-scrollbar:horizontal) {\\n    --scrollbar-caret-top: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M9 17.8983C9 18.9722 10.2649 19.5462 11.0731 18.839L17.3838 13.3172C18.1806 12.6199 18.1806 11.3804 17.3838 10.6831L11.0731 5.16132C10.2649 4.45412 9 5.02809 9 6.10204V17.8983Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E\\");\\n    --scrollbar-caret-bottom: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M15 17.8983C15 18.9722 13.7351 19.5462 12.9268 18.839L6.61617 13.3172C5.81935 12.6199 5.81935 11.3804 6.61617 10.6831L12.9268 5.16132C13.7351 4.45412 15 5.02809 15 6.10204L15 17.8983Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E\\");\\n  }\\n}\\n@media (prefers-color-scheme: dark) {\\n  :global(::-webkit-scrollbar:horizontal) {\\n    --scrollbar-caret-top: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M9 17.8983C9 18.9722 10.2649 19.5462 11.0731 18.839L17.3838 13.3172C18.1806 12.6199 18.1806 11.3804 17.3838 10.6831L11.0731 5.16132C10.2649 4.45412 9 5.02809 9 6.10204V17.8983Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E\\");\\n    --scrollbar-caret-bottom: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M15 17.8983C15 18.9722 13.7351 19.5462 12.9268 18.839L6.61617 13.3172C5.81935 12.6199 5.81935 11.3804 6.61617 10.6831L12.9268 5.16132C13.7351 4.45412 15 5.02809 15 6.10204L15 17.8983Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E\\");\\n  }\\n}\\n:global(::-webkit-scrollbar:hover) {\\n  background: var(--scrollbar-caret-bottom) bottom center/contain no-repeat, var(--scrollbar-caret-top) top center/contain no-repeat, hsl(var(--mica-tint), var(--mica-tint-opacity));\\n}\\n:global(::-webkit-scrollbar-thumb) {\\n  border: 6px solid transparent;\\n  border-block: none;\\n  border-radius: 14px;\\n  background: var(--fds-control-strong-fill-default);\\n  background-clip: padding-box;\\n}\\n:global(::-webkit-scrollbar-thumb:hover) {\\n  border: 4px solid transparent;\\n}\\n:global(::-webkit-scrollbar-button:single-button) {\\n  display: block;\\n  block-size: 14px;\\n}\\n\\n:global(.hyperlink) {\\n  color: var(--fds-accent-text-primary);\\n  text-decoration: underline;\\n  cursor: pointer;\\n  text-decoration-skip-ink: none;\\n}\\n:global(.hyperlink:hover), :global(.hyperlink:active) {\\n  text-decoration: none;\\n}\\n:global(.hyperlink:hover) {\\n  color: var(--fds-accent-text-tertiary);\\n}\\n:global(.hyperlink:active) {\\n  color: var(--fds-accent-text-secondary);\\n}\\n\\n@keyframes -global-scroll-gradient {\\n  from {\\n    background-position: 50% 0;\\n  }\\n  50% {\\n    background-position: 50% 100%;\\n  }\\n  to {\\n    background-position: 50% 0;\\n  }\\n}\\n:global(.markdown-body) {\\n  color: var(--fds-text-primary);\\n  font-size: 1.4rem;\\n  line-height: 1.45;\\n}\\n:global(.markdown-body) > :global(*:first-child) {\\n  margin-block-start: 0 !important;\\n}\\n:global(.markdown-body) > :global(*:last-child) {\\n  margin-block-end: 0 !important;\\n}\\n:global(.markdown-body) > :global(*:only-child) {\\n  margin: 0 !important;\\n}\\n:global(.markdown-body) :global(blockquote),\\n:global(.markdown-body) :global(details),\\n:global(.markdown-body) :global(dl),\\n:global(.markdown-body) :global(ol),\\n:global(.markdown-body) :global(p),\\n:global(.markdown-body) :global(pre),\\n:global(.markdown-body) :global(table),\\n:global(.markdown-body) :global(ul) {\\n  margin-block-start: 0;\\n  margin-block-end: 16px;\\n}\\n:global(.markdown-body) :global(figure) {\\n  margin: 16px 0;\\n}\\n:global(.markdown-body) :global(figure.margin-top) {\\n  margin-block: 48px 16px;\\n}\\n:global(.markdown-body) :global(figure.margin-bottom) {\\n  margin-block: 16px 48px;\\n}\\n:global(.markdown-body) :global(figure) :global(figcaption) {\\n  color: var(--fds-text-secondary);\\n  font-size: 1.45rem;\\n  text-align: center;\\n}\\n:global(.markdown-body) :global(img) {\\n  max-inline-size: 100%;\\n  block-size: auto;\\n  border-radius: var(--fds-overlay-corner-radius);\\n  border: 3px solid var(--fds-card-stroke-default);\\n}\\n:global(.markdown-body) :global(h1),\\n:global(.markdown-body) :global(h2) {\\n  padding-block-end: 0.3em;\\n}\\n:global(.markdown-body) :global(h1),\\n:global(.markdown-body) :global(h2),\\n:global(.markdown-body) :global(h3),\\n:global(.markdown-body) :global(h4),\\n:global(.markdown-body) :global(h5),\\n:global(.markdown-body) :global(h6) {\\n  margin-block-start: 24px;\\n  margin-block-end: 16px;\\n  color: var(--fds-text-primary);\\n  font-weight: 600;\\n  line-height: 1.25;\\n}\\n:global(.markdown-body) :global(h1) {\\n  font-size: 2em;\\n}\\n:global(.markdown-body) :global(h2) {\\n  font-size: 1.5em;\\n}\\n:global(.markdown-body) :global(h3) {\\n  font-size: 1.25em;\\n}\\n:global(.markdown-body) :global(h4) {\\n  font-size: 1em;\\n}\\n:global(.markdown-body) :global(h5) {\\n  font-size: 0.875em;\\n}\\n:global(.markdown-body) :global(h6) {\\n  color: var(--fds-text-tertiary);\\n  font-size: 0.85em;\\n}\\n:global(.markdown-body) :global(ol) :global(ol),\\n:global(.markdown-body) :global(ol) :global(ul),\\n:global(.markdown-body) :global(ul) :global(ol),\\n:global(.markdown-body) :global(ul) :global(ul) {\\n  margin-block-start: 0;\\n  margin-block-end: 0;\\n}\\n:global(.markdown-body) :global(ol),\\n:global(.markdown-body) :global(ul) {\\n  padding-inline-start: 2em;\\n}\\n:global(.markdown-body) :global(li) + :global(li) {\\n  margin-block-start: 0.25em;\\n}\\n:global(.markdown-body) :global(ol) :global(ol),\\n:global(.markdown-body) :global(ul) :global(ol) {\\n  list-style-type: lower-roman;\\n}\\n:global(.markdown-body) :global(ol),\\n:global(.markdown-body) :global(ul) {\\n  padding-inline-start: 2em;\\n}\\n:global(.markdown-body) :global(code),\\n:global(.markdown-body) :global(kbd) {\\n  margin: 0;\\n  padding: 0.2em 0.4em;\\n  border: 1px solid var(--fds-card-stroke-default);\\n  border-radius: var(--fds-control-corner-radius);\\n  background-color: var(--fds-card-background-default);\\n  background-clip: padding-box;\\n  font-family: var(--font-family-monospace);\\n  font-size: 85%;\\n  word-wrap: break-word;\\n}\\n:global(.markdown-body) :global(kbd) {\\n  padding: 0.3em 0.4em;\\n  color: hsl(70deg, 5%, 22%);\\n  box-shadow: inset 0 -0.2em 0 var(--fds-subtle-fill-tertiary);\\n}\\n@media (prefers-color-scheme: dark) {\\n  :global(.markdown-body) :global(kbd) {\\n    color: hsl(0deg, 0%, 83%);\\n  }\\n}\\n:global(.markdown-body) :global(pre) {\\n  padding: 12px 16px;\\n  border: 1px solid var(--fds-card-stroke-default);\\n  border-radius: var(--fds-control-corner-radius);\\n  background-color: var(--fds-card-background-default);\\n  background-clip: padding-box;\\n  font-size: 1em;\\n  overflow: auto;\\n}\\n:global(.markdown-body) :global(pre) :global(code) {\\n  padding: 0;\\n  border: none;\\n  background-color: transparent;\\n}\\n:global(.markdown-body) :global(blockquote) {\\n  margin: 0;\\n  padding: 0 1em;\\n  border-inline-start: 0.25em solid var(--fds-subtle-fill-secondary);\\n  color: var(--text-muted);\\n}\\n:global(.markdown-body) :global(a:not(.hyperlink-button)) {\\n  color: var(--fds-accent-text-primary);\\n  text-decoration: underline;\\n  text-decoration-skip-ink: none;\\n}\\n:global(.markdown-body) :global(a:not(.hyperlink-button):hover), :global(.markdown-body) :global(a:not(.hyperlink-button):active) {\\n  text-decoration: none;\\n}\\n:global(.markdown-body) :global(a:not(.hyperlink-button):hover) {\\n  color: var(--fds-accent-text-tertiary);\\n}\\n:global(.markdown-body) :global(a:not(.hyperlink-button):active) {\\n  color: var(--fds-accent-text-secondary);\\n}\\n:global(.markdown-body) :global(hr) {\\n  margin: 24px 0;\\n  border: none;\\n  border-block-start: 1px solid var(--fds-divider-stroke-default);\\n}\\n:global(.markdown-body) :global(table) {\\n  display: inline-block;\\n  border: 1px solid var(--fds-control-stroke-default);\\n  border-radius: var(--fds-control-corner-radius);\\n  border-collapse: collapse;\\n  background-clip: padding-box;\\n  overflow-x: auto;\\n  overflow-y: hidden;\\n  width: 100%;\\n  white-space: nowrap;\\n}\\n:global(.markdown-body) :global(table) :global(th),\\n:global(.markdown-body) :global(table) :global(td) {\\n  padding: 6px 13px;\\n  width: 1%;\\n}\\n:global(.markdown-body) :global(table) :global(th) {\\n  background-color: var(--fds-subtle-fill-tertiary);\\n  font-weight: 600;\\n}\\n:global(.markdown-body) :global(table) :global(tr) {\\n  background-color: var(--fds-solid-background-quarternary);\\n}\\n:global(.markdown-body) :global(table) :global(tr:nth-child(2n)) {\\n  background-color: transparent;\\n}\\n:global(.markdown-body) :global(.color::before) {\\n  display: inline-block;\\n  content: \\"\\";\\n  background-color: var(--color);\\n  margin-inline-end: 1ch;\\n  padding: 1ch;\\n  aspect-ratio: 1;\\n  border-radius: 50%;\\n  outline: 1px solid;\\n  outline-color: var(--fds-divider-stroke-default);\\n  vertical-align: sub;\\n}</style>\\r\\n"],"names":[],"mappings":"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"}`,
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $_, $$unsubscribe__;
	let $page, $$unsubscribe_page;
	$$unsubscribe__ = subscribe($format, value => ($_ = value));
	$$unsubscribe_page = subscribe(page, value => ($page = value));
	const { github, discord } = links;
	const navbarItems = [
		{
			name: $_("navbar.home", defaultI18nValues),
			path: "/",
			icon: Home_24_regular,
		},
		{
			name: $_("navbar.docs", defaultI18nValues),
			path: "/docs",
			sidebarTree: $page.data.docs ?? [],
			icon: Book_24_regular,
		},
		{
			name: $_("navbar.news", defaultI18nValues),
			path: "/blog",
			icon: News_24_regular,
		},
		{
			name: $_("navbar.download"),
			path: "/download",
			icon: Arrow_download_24_regular,
		},
	];
	const navbarButtons = [
		{
			label: $_("navbar.discord", defaultI18nValues),
			href: `https://discord.gg/${discord}`,
			icon: Chat_24_regular,
		},
		{
			label: $_("navbar.github", defaultI18nValues),
			href: `https://github.com/${github.owner}/${github.repo}`,
			icon: Code_24_regular,
		},
	];
	$$result.css.add(css);
	$$unsubscribe__();
	$$unsubscribe_page();
	return `${
		(($$result.head += `<!-- HEAD_svelte-o99yay_START --><meta content="Files" name="og:site_name"><meta content="website" name="og:type"><link href="${"/branding/logo" + escape($page.route.id === "themes" ? "-themes" : "", true) + "-light.svg"}" rel="icon" type="image/svg+xml" media="(prefers-color-scheme: light)"><link href="${"/branding/logo" + escape($page.route.id === "themes" ? "-themes" : "", true) + "-dark.svg"}" rel="icon" type="image/svg+xml" media="(prefers-color-scheme: dark)"><meta content="Files, File Explorer, Fluent Design, Microsoft, Windows, UWP" name="keywords"><meta content="Files Community" name="author"><meta content="#005fb8" name="theme-color"><meta content="summary_large_image" name="twitter:card"><meta content="@FilesForWindows" name="twitter:site"><meta content="@FilesForWindows" name="twitter:creator">${
			$page.url.host === "files.community"
				? `<script type="text/javascript" data-svelte-h="svelte-48dx4r">(function (c, l, a, r, i, t, y) {
				c[a] =
					c[a] ||
					function () {
						(c[a].q = c[a].q || []).push(arguments);
					};
				t = l.createElement(r);
				t.async = true;
				t.src = "https://www.clarity.ms/tag/" + i;
				y = l.getElementsByTagName(r)[0];
				y.parentNode.insertBefore(t, y);
			})(window, document, "clarity", "script", "4q1wajdktz");<\/script>`
				: ``
		}<!-- HEAD_svelte-o99yay_END -->`),
		"")
	} ${validate_component(Navbar, "Navbar").$$render(
		$$result,
		{
			buttons: navbarButtons,
			items: navbarItems,
		},
		{},
		{},
	)} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { Layout as default };
