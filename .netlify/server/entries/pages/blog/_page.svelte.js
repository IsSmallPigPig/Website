import {
	c as create_ssr_component,
	i as compute_rest_props,
	a as subscribe,
	f as spread,
	d as escape,
	h as escape_object,
	b as add_attribute,
	o as add_styles,
	v as validate_component,
	e as each,
} from "../../../chunks/ssr.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
import { d as defaultI18nValues } from "../../../chunks/i18n.js";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                           */
import { H as HeaderChip } from "../../../chunks/HeaderChip.js";
import { a as $formatDate, $ as $format } from "../../../chunks/runtime.js";
import { e as externalLink } from "../../../chunks/utils.js";
import { M as Metadata } from "../../../chunks/Metadata.js";
const css$1 = {
	code: ".blog-card.svelte-t6eby.svelte-t6eby{display:flex;flex-direction:column;block-size:auto;min-block-size:380px;border:1px solid var(--fds-card-stroke-default);border-radius:var(--fds-overlay-corner-radius);background-color:var(--fds-card-background-secondary);box-shadow:var(--fds-card-shadow);text-decoration:none;transition:var(--fds-control-normal-duration) ease;overflow:hidden;cursor:pointer}.blog-card.svelte-t6eby.svelte-t6eby:hover{box-shadow:var(--fds-flyout-shadow);transform:translateY(-2px)}.blog-card.svelte-t6eby.svelte-t6eby:active{box-shadow:0 1px 2px hsla(0deg, 0%, 0%, 0.13);transform:none}.blog-card.svelte-t6eby img.svelte-t6eby{flex:0 0 auto;inline-size:100%;block-size:193.5px;-webkit-user-drag:none}.blog-card.svelte-t6eby footer.svelte-t6eby{display:flex;align-items:center;gap:8px;flex:0 0 auto;padding:12px 24px 24px}.blog-card.svelte-t6eby footer img.svelte-t6eby{inline-size:36px;block-size:36px;border:1px solid var(--fds-card-stroke-default);border-radius:50%}.blog-card.svelte-t6eby footer .post-info.svelte-t6eby{display:flex;flex-direction:column;color:var(--fds-text-tertiary);font-size:1.2rem;font-weight:400}.blog-card.svelte-t6eby footer .post-info a.svelte-t6eby{margin:0 0 2px;color:var(--fds-text-primary);font-size:var(--fds-body-font-size);font-weight:600;text-decoration:none}.blog-card.svelte-t6eby footer .post-info a.svelte-t6eby:hover{color:var(--fds-accent-default)}.blog-card.svelte-t6eby footer .post-info a.svelte-t6eby:active{color:var(--fds-accent)}.body.svelte-t6eby.svelte-t6eby{flex:1 1 auto;padding:24px 24px 0;color:var(--fds-text-secondary);font-size:1.6rem;line-height:24px}.body.svelte-t6eby h5.svelte-t6eby{margin:0 0 4px;color:var(--fds-text-primary);font-size:24px;font-weight:600;line-height:32px}",
	map: '{"version":3,"file":"BlogCard.svelte","sources":["BlogCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onNavigate } from \\"$app/navigation\\";\\nimport { externalLink } from \\"$lib\\";\\nimport { date as dateFormat } from \\"svelte-i18n\\";\\nexport let slug = \\"\\";\\nexport let date = \\"\\";\\nexport let author = \\"\\";\\nexport let title = \\"\\";\\nexport let description = \\"\\";\\nexport let thumbnail = \\"\\";\\nlet postThumbnail;\\n</script>\\r\\n\\r\\n<a class=\\"blog-card\\" href=\\"/blog/posts/{slug}\\" {...$$restProps}>\\r\\n\\t<img\\r\\n\\t\\talt=\\"{title} thumbnail\\"\\r\\n\\t\\tclass=\\"thumbnail\\"\\r\\n\\t\\tsrc={thumbnail}\\r\\n\\t\\tstyle:view-transition-name=\\"post-thumbnail-{slug}\\"\\r\\n\\t/>\\r\\n\\t<div class=\\"body\\">\\r\\n\\t\\t<h5 style:view-transition-name=\\"post-title-{slug}\\">{title}</h5>\\r\\n\\t\\t<span>{description}</span>\\r\\n\\t</div>\\r\\n\\t<footer>\\r\\n\\t\\t<img\\r\\n\\t\\t\\talt=\\"{author} avatar\\"\\r\\n\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t\\tsrc=\\"https://github.com/{author}.png\\"\\r\\n\\t\\t/>\\r\\n\\t\\t<div class=\\"post-info\\">\\r\\n\\t\\t\\t<object aria-label=\\"Author link\\">\\r\\n\\t\\t\\t\\t<a href=\\"https://github.com/{author}\\" {...externalLink}>\\r\\n\\t\\t\\t\\t\\t{author}\\r\\n\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t</object>\\r\\n\\t\\t\\t<span>{$dateFormat(new Date(date), { format: \\"medium\\" })}</span>\\r\\n\\t\\t</div>\\r\\n\\t</footer>\\r\\n\\t<slot />\\r\\n</a>\\r\\n\\r\\n<style lang=\\"scss\\">.blog-card {\\n  display: flex;\\n  flex-direction: column;\\n  block-size: auto;\\n  min-block-size: 380px;\\n  border: 1px solid var(--fds-card-stroke-default);\\n  border-radius: var(--fds-overlay-corner-radius);\\n  background-color: var(--fds-card-background-secondary);\\n  box-shadow: var(--fds-card-shadow);\\n  text-decoration: none;\\n  transition: var(--fds-control-normal-duration) ease;\\n  overflow: hidden;\\n  cursor: pointer;\\n}\\n.blog-card:hover {\\n  box-shadow: var(--fds-flyout-shadow);\\n  transform: translateY(-2px);\\n}\\n.blog-card:active {\\n  box-shadow: 0 1px 2px hsla(0deg, 0%, 0%, 0.13);\\n  transform: none;\\n}\\n.blog-card img {\\n  flex: 0 0 auto;\\n  inline-size: 100%;\\n  block-size: 193.5px;\\n  -webkit-user-drag: none;\\n}\\n.blog-card footer {\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n  flex: 0 0 auto;\\n  padding: 12px 24px 24px;\\n}\\n.blog-card footer img {\\n  inline-size: 36px;\\n  block-size: 36px;\\n  border: 1px solid var(--fds-card-stroke-default);\\n  border-radius: 50%;\\n}\\n.blog-card footer .post-info {\\n  display: flex;\\n  flex-direction: column;\\n  color: var(--fds-text-tertiary);\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n}\\n.blog-card footer .post-info a {\\n  margin: 0 0 2px;\\n  color: var(--fds-text-primary);\\n  font-size: var(--fds-body-font-size);\\n  font-weight: 600;\\n  text-decoration: none;\\n}\\n.blog-card footer .post-info a:hover {\\n  color: var(--fds-accent-default);\\n}\\n.blog-card footer .post-info a:active {\\n  color: var(--fds-accent);\\n}\\n\\n.body {\\n  flex: 1 1 auto;\\n  padding: 24px 24px 0;\\n  color: var(--fds-text-secondary);\\n  font-size: 1.6rem;\\n  line-height: 24px;\\n}\\n.body h5 {\\n  margin: 0 0 4px;\\n  color: var(--fds-text-primary);\\n  font-size: 24px;\\n  font-weight: 600;\\n  line-height: 32px;\\n}</style>\\r\\n"],"names":[],"mappings":"AAyCmB,oCAAW,CAC5B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,KAAK,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,yBAAyB,CAAC,CAChD,aAAa,CAAE,IAAI,2BAA2B,CAAC,CAC/C,gBAAgB,CAAE,IAAI,+BAA+B,CAAC,CACtD,UAAU,CAAE,IAAI,iBAAiB,CAAC,CAClC,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,IAAI,6BAA6B,CAAC,CAAC,IAAI,CACnD,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,OACV,CACA,oCAAU,MAAO,CACf,UAAU,CAAE,IAAI,mBAAmB,CAAC,CACpC,SAAS,CAAE,WAAW,IAAI,CAC5B,CACA,oCAAU,OAAQ,CAChB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,IAAI,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAC9C,SAAS,CAAE,IACb,CACA,uBAAU,CAAC,gBAAI,CACb,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,OAAO,CACnB,iBAAiB,CAAE,IACrB,CACA,uBAAU,CAAC,mBAAO,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IACrB,CACA,uBAAU,CAAC,MAAM,CAAC,gBAAI,CACpB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,yBAAyB,CAAC,CAChD,aAAa,CAAE,GACjB,CACA,uBAAU,CAAC,MAAM,CAAC,uBAAW,CAC3B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,IAAI,mBAAmB,CAAC,CAC/B,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACf,CACA,uBAAU,CAAC,MAAM,CAAC,UAAU,CAAC,cAAE,CAC7B,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CACf,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAC9B,SAAS,CAAE,IAAI,oBAAoB,CAAC,CACpC,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,IACnB,CACA,uBAAU,CAAC,MAAM,CAAC,UAAU,CAAC,cAAC,MAAO,CACnC,KAAK,CAAE,IAAI,oBAAoB,CACjC,CACA,uBAAU,CAAC,MAAM,CAAC,UAAU,CAAC,cAAC,OAAQ,CACpC,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,+BAAM,CACJ,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CACpB,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IACf,CACA,kBAAK,CAAC,eAAG,CACP,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CACf,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAC9B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACf"}',
};
const BlogCard = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, [
			"slug",
			"date",
			"author",
			"title",
			"description",
			"thumbnail",
		]);
		let $dateFormat, $$unsubscribe_dateFormat;
		$$unsubscribe_dateFormat = subscribe(
			$formatDate,
			value => ($dateFormat = value),
		);
		let { slug = "" } = $$props;
		let { date = "" } = $$props;
		let { author = "" } = $$props;
		let { title = "" } = $$props;
		let { description = "" } = $$props;
		let { thumbnail = "" } = $$props;
		if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
			$$bindings.slug(slug);
		if ($$props.date === void 0 && $$bindings.date && date !== void 0)
			$$bindings.date(date);
		if ($$props.author === void 0 && $$bindings.author && author !== void 0)
			$$bindings.author(author);
		if ($$props.title === void 0 && $$bindings.title && title !== void 0)
			$$bindings.title(title);
		if (
			$$props.description === void 0 &&
			$$bindings.description &&
			description !== void 0
		)
			$$bindings.description(description);
		if (
			$$props.thumbnail === void 0 &&
			$$bindings.thumbnail &&
			thumbnail !== void 0
		)
			$$bindings.thumbnail(thumbnail);
		$$result.css.add(css$1);
		$$unsubscribe_dateFormat();
		return `<a${spread(
			[
				{ class: "blog-card" },
				{
					href: "/blog/posts/" + escape(slug, true),
				},
				escape_object($$restProps),
			],
			{ classes: "svelte-t6eby" },
		)}><img alt="${escape(title, true) + " thumbnail"}" class="thumbnail svelte-t6eby"${add_attribute("src", thumbnail, 0)}${add_styles(
			{
				"view-transition-name": `post-thumbnail-${slug}`,
			},
		)}> <div class="body svelte-t6eby"><h5 class="svelte-t6eby"${add_styles({
			"view-transition-name": `post-title-${slug}`,
		})}>${escape(title)}</h5> <span>${escape(description)}</span></div> <footer class="svelte-t6eby"><img alt="${escape(author, true) + " avatar"}" loading="lazy" src="${"https://github.com/" + escape(author, true) + ".png"}" class="svelte-t6eby"> <div class="post-info svelte-t6eby"><object aria-label="Author link"><a${spread(
			[
				{
					href: "https://github.com/" + escape(author, true),
				},
				escape_object(externalLink),
			],
			{ classes: "svelte-t6eby" },
		)}>${escape(author)}</a></object> <span>${escape($dateFormat(new Date(date), { format: "medium" }))}</span></div></footer> ${slots.default ? slots.default({}) : ``} </a>`;
	},
);
const css = {
	code: "#blog{position:relative}#blog .page-section-inner{position:static;max-inline-size:1200px}.blog-backdrop.svelte-objese.svelte-objese{position:absolute;inset-block-start:-64px;inset-inline-start:0;z-index:-1;inline-size:100%;opacity:0.25;mask:linear-gradient(black, transparent 80%)}.blog-backdrop.svelte-objese img.svelte-objese{inline-size:100%;block-size:664px;object-fit:cover}.main-post.svelte-objese.svelte-objese{position:relative;display:grid;grid-template-columns:40% 60%;grid-gap:48px;align-items:center;inline-size:100%;margin-block-end:72px;padding-block-end:72px;border-block-end:1px solid var(--fds-divider-stroke-default)}@media screen and (width < 1024px){.main-post.svelte-objese.svelte-objese{grid-template-columns:auto}}.main-post.svelte-objese img.svelte-objese{max-inline-size:100%;block-size:auto;border:1px solid var(--fds-surface-stroke-default);border-radius:var(--fds-overlay-corner-radius);box-shadow:0 2.74416px 2.74416px hsla(0deg, 0%, 0%, 0.03), 0 5.48831px 5.48831px hsla(0deg, 0%, 0%, 0.04), 0 13.7208px 10.9766px hsla(0deg, 0%, 0%, 0.05), 0 20.5812px 20.5812px hsla(0deg, 0%, 0%, 0.06), 0 41.1623px 41.1623px hsla(0deg, 0%, 0%, 0.07), 0 96.0454px 89.1851px hsla(0deg, 0%, 0%, 0.09);transition:200ms ease !important;-webkit-user-drag:none;aspect-ratio:3/2;object-fit:cover}@media screen and (width < 1280px){.main-post.svelte-objese h2.svelte-objese{font-size:3.6rem}}.main-post.svelte-objese .button{cursor:pointer}.blog-cards.svelte-objese.svelte-objese{display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));grid-gap:24px;margin-block-start:24px}",
	map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { BlogCard, defaultI18nValues, HeaderChip, Metadata, PageSection, tilt, } from \\"$lib\\";\\nimport { Button } from \\"fluent-svelte\\";\\nimport { date, _ } from \\"svelte-i18n\\";\\nimport { onNavigate } from \\"$app/navigation\\";\\nexport let data;\\n$: ({ posts } = data);\\n$: mainPost = posts[0];\\nlet scrollY;\\nlet mainPostThumbnail;\\n</script>\\r\\n\\r\\n<Metadata title={$_(\\"metadata.blog_home\\", defaultI18nValues)} image=\\"blog\\" />\\r\\n\\r\\n<svelte:window\\r\\n\\ton:scroll={() =>\\r\\n\\t\\twindow.requestAnimationFrame(() => (scrollY = window.scrollY))}\\r\\n/>\\r\\n\\r\\n<PageSection id=\\"blog\\">\\r\\n\\t<div class=\\"blog-backdrop\\">\\r\\n\\t\\t<img\\r\\n\\t\\t\\talt=\\"\\"\\r\\n\\t\\t\\tsrc={mainPost.metadata.thumbnail}\\r\\n\\t\\t\\tstyle:transform=\\"translateY({Math.floor(scrollY / 2.5)}px)\\"\\r\\n\\t\\t\\twidth=\\"0\\"\\r\\n\\t\\t/>\\r\\n\\t</div>\\r\\n\\t<div class=\\"main-post\\">\\r\\n\\t\\t<div class=\\"main-post-info\\">\\r\\n\\t\\t\\t<HeaderChip>\\r\\n\\t\\t\\t\\t{$date(new Date(mainPost.metadata.date), { format: \\"medium\\" })}\\r\\n\\t\\t\\t</HeaderChip>\\r\\n\\t\\t\\t<h2 style:view-transition-name=\\"post-title-{mainPost.slug}\\">\\r\\n\\t\\t\\t\\t{mainPost.metadata.title}\\r\\n\\t\\t\\t</h2>\\r\\n\\t\\t\\t<p>{mainPost.metadata.description}</p>\\r\\n\\t\\t\\t<Button href=\\"/blog/posts/{mainPost.slug}/\\" variant=\\"accent\\">\\r\\n\\t\\t\\t\\t{$_(\\"blog.read_more\\", defaultI18nValues)}\\r\\n\\t\\t\\t</Button>\\r\\n\\t\\t</div>\\r\\n\\t\\t<a href=\\"/blog/posts/{mainPost.slug}/\\">\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\tclass=\\"thumbnail\\"\\r\\n\\t\\t\\t\\talt=\\"Main post thumbnail\\"\\r\\n\\t\\t\\t\\theight=\\"422\\"\\r\\n\\t\\t\\t\\tsrc={mainPost.metadata.thumbnail}\\r\\n\\t\\t\\t\\tuse:tilt={{ max: 2.5, scale: 1.01 }}\\r\\n\\t\\t\\t\\twidth=\\"633\\"\\r\\n\\t\\t\\t\\tstyle:view-transition-name=\\"post-thumbnail-{mainPost.slug}\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t</a>\\r\\n\\t</div>\\r\\n\\t{#if posts.slice(1).length > 0}\\r\\n\\t\\t<div class=\\"blog-cards\\">\\r\\n\\t\\t\\t{#each posts.slice(1) as post}\\r\\n\\t\\t\\t\\t<BlogCard slug={post.slug} {...post.metadata} />\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</div>\\r\\n\\t{:else}\\r\\n\\t\\t<p>{$_(\\"blog.coming_soon\\", defaultI18nValues)}</p>\\r\\n\\t{/if}\\r\\n</PageSection>\\r\\n\\r\\n<style lang=\\"scss\\">:global(#blog) {\\n  position: relative;\\n}\\n:global(#blog) :global(.page-section-inner) {\\n  position: static;\\n  max-inline-size: 1200px;\\n}\\n\\n.blog-backdrop {\\n  position: absolute;\\n  inset-block-start: -64px;\\n  inset-inline-start: 0;\\n  z-index: -1;\\n  inline-size: 100%;\\n  opacity: 0.25;\\n  mask: linear-gradient(black, transparent 80%);\\n}\\n.blog-backdrop img {\\n  inline-size: 100%;\\n  block-size: 664px;\\n  object-fit: cover;\\n}\\n\\n.main-post {\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 40% 60%;\\n  grid-gap: 48px;\\n  align-items: center;\\n  inline-size: 100%;\\n  margin-block-end: 72px;\\n  padding-block-end: 72px;\\n  border-block-end: 1px solid var(--fds-divider-stroke-default);\\n}\\n@media screen and (width < 1024px) {\\n  .main-post {\\n    grid-template-columns: auto;\\n  }\\n}\\n.main-post img {\\n  max-inline-size: 100%;\\n  block-size: auto;\\n  border: 1px solid var(--fds-surface-stroke-default);\\n  border-radius: var(--fds-overlay-corner-radius);\\n  box-shadow: 0 2.74416px 2.74416px hsla(0deg, 0%, 0%, 0.03), 0 5.48831px 5.48831px hsla(0deg, 0%, 0%, 0.04), 0 13.7208px 10.9766px hsla(0deg, 0%, 0%, 0.05), 0 20.5812px 20.5812px hsla(0deg, 0%, 0%, 0.06), 0 41.1623px 41.1623px hsla(0deg, 0%, 0%, 0.07), 0 96.0454px 89.1851px hsla(0deg, 0%, 0%, 0.09);\\n  transition: 200ms ease !important;\\n  -webkit-user-drag: none;\\n  aspect-ratio: 3/2;\\n  object-fit: cover;\\n}\\n@media screen and (width < 1280px) {\\n  .main-post h2 {\\n    font-size: 3.6rem;\\n  }\\n}\\n.main-post :global(.button) {\\n  cursor: pointer;\\n}\\n\\n.blog-cards {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\\n  grid-gap: 24px;\\n  margin-block-start: 24px;\\n}</style>\\r\\n"],"names":[],"mappings":"AA+D2B,KAAO,CAChC,QAAQ,CAAE,QACZ,CACQ,KAAM,CAAS,mBAAqB,CAC1C,QAAQ,CAAE,MAAM,CAChB,eAAe,CAAE,MACnB,CAEA,0CAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,iBAAiB,CAAE,KAAK,CACxB,kBAAkB,CAAE,CAAC,CACrB,OAAO,CAAE,EAAE,CACX,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,IAAI,CAAE,gBAAgB,KAAK,CAAC,CAAC,WAAW,CAAC,GAAG,CAC9C,CACA,4BAAc,CAAC,iBAAI,CACjB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KACd,CAEA,sCAAW,CACT,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,QAAQ,CAAE,IAAI,CACd,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,IAAI,CACtB,iBAAiB,CAAE,IAAI,CACvB,gBAAgB,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,4BAA4B,CAC9D,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,MAAM,CAAE,CACjC,sCAAW,CACT,qBAAqB,CAAE,IACzB,CACF,CACA,wBAAU,CAAC,iBAAI,CACb,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,4BAA4B,CAAC,CACnD,aAAa,CAAE,IAAI,2BAA2B,CAAC,CAC/C,UAAU,CAAE,CAAC,CAAC,SAAS,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,SAAS,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,SAAS,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,SAAS,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,SAAS,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,SAAS,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAC1S,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,UAAU,CACjC,iBAAiB,CAAE,IAAI,CACvB,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,UAAU,CAAE,KACd,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,MAAM,CAAE,CACjC,wBAAU,CAAC,gBAAG,CACZ,SAAS,CAAE,MACb,CACF,CACA,wBAAU,CAAS,OAAS,CAC1B,MAAM,CAAE,OACV,CAEA,uCAAY,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5D,QAAQ,CAAE,IAAI,CACd,kBAAkB,CAAE,IACtB"}',
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let posts;
	let mainPost;
	let $_, $$unsubscribe__;
	let $date, $$unsubscribe_date;
	$$unsubscribe__ = subscribe($format, value => ($_ = value));
	$$unsubscribe_date = subscribe($formatDate, value => ($date = value));
	let { data } = $$props;
	let scrollY;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0)
		$$bindings.data(data);
	$$result.css.add(css);
	({ posts } = data);
	mainPost = posts[0];
	$$unsubscribe__();
	$$unsubscribe_date();
	return `${validate_component(Metadata, "Metadata").$$render(
		$$result,
		{
			title: $_("metadata.blog_home", defaultI18nValues),
			image: "blog",
		},
		{},
		{},
	)}  ${validate_component(PageSection, "PageSection").$$render(
		$$result,
		{ id: "blog" },
		{},
		{
			default: () => {
				return `<div class="blog-backdrop svelte-objese"><img alt=""${add_attribute("src", mainPost.metadata.thumbnail, 0)} width="0" class="svelte-objese"${add_styles(
					{
						transform: `translateY(${Math.floor(scrollY / 2.5)}px)`,
					},
				)}></div> <div class="main-post svelte-objese"><div class="main-post-info">${validate_component(
					HeaderChip,
					"HeaderChip",
				).$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${escape($date(new Date(mainPost.metadata.date), { format: "medium" }))}`;
						},
					},
				)} <h2 class="svelte-objese"${add_styles({
					"view-transition-name": `post-title-${mainPost.slug}`,
				})}>${escape(mainPost.metadata.title)}</h2> <p>${escape(mainPost.metadata.description)}</p> ${validate_component(
					Button,
					"Button",
				).$$render(
					$$result,
					{
						href: "/blog/posts/" + mainPost.slug + "/",
						variant: "accent",
					},
					{},
					{
						default: () => {
							return `${escape($_("blog.read_more", defaultI18nValues))}`;
						},
					},
				)}</div> <a href="${"/blog/posts/" + escape(mainPost.slug, true) + "/"}"><img class="thumbnail svelte-objese" alt="Main post thumbnail" height="422"${add_attribute("src", mainPost.metadata.thumbnail, 0)} width="633"${add_styles(
					{
						"view-transition-name": `post-thumbnail-${mainPost.slug}`,
					},
				)}></a></div> ${
					posts.slice(1).length > 0
						? `<div class="blog-cards svelte-objese">${each(
								posts.slice(1),
								post => {
									return `${validate_component(BlogCard, "BlogCard").$$render($$result, Object.assign({}, { slug: post.slug }, post.metadata), {}, {})}`;
								},
							)}</div>`
						: `<p>${escape($_("blog.coming_soon", defaultI18nValues))}</p>`
				}`;
			},
		},
	)}`;
});
export { Page as default };
