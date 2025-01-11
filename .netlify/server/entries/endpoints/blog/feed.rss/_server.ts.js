import { metadata } from "../../../pages/blog/posts/announcing-files-v2-4-30/_page.md.js";
import { metadata as metadata$1 } from "../../../pages/blog/posts/announcing-files-v2-4-40/_page.md.js";
import { metadata as metadata$2 } from "../../../pages/blog/posts/announcing-files-v2-5-10/_page.md.js";
import { metadata as metadata$3 } from "../../../pages/blog/posts/announcing-files-v2-5-20/_page.md.js";
import { metadata as metadata$4 } from "../../../pages/blog/posts/announcing-files-v2-5/_page.md.js";
import { metadata as metadata$5 } from "../../../pages/blog/posts/announcing-files-v2/_page.md.js";
import { metadata as metadata$6 } from "../../../pages/blog/posts/introducing-files-v2-0-33/_page.md.js";
import { metadata as metadata$7 } from "../../../pages/blog/posts/introducing-files-v2-1/_page.md.js";
import { metadata as metadata$8 } from "../../../pages/blog/posts/introducing-files-v2-3/_page.md.js";
import { metadata as metadata$9 } from "../../../pages/blog/posts/introducing-files-v2-4/_page.md.js";
import { metadata as metadata$a } from "../../../pages/blog/posts/introducing-v2-4-preview/_page.md.js";
import { metadata as metadata$b } from "../../../pages/blog/posts/listary-integration/_page.md.js";
import { metadata as metadata$c } from "../../../pages/blog/posts/now-on-scoop/_page.md.js";
import { metadata as metadata$d } from "../../../pages/blog/posts/now-on-winget/_page.md.js";
import { metadata as metadata$e } from "../../../pages/blog/posts/preview-on-store/_page.md.js";
import { metadata as metadata$f } from "../../../pages/blog/posts/ten-things/_page.md.js";
import { metadata as metadata$g } from "../../../pages/blog/posts/v3-1/_page.md.js";
import { metadata as metadata$h } from "../../../pages/blog/posts/v3-2-2/_page.md.js";
import { metadata as metadata$i } from "../../../pages/blog/posts/v3-2/_page.md.js";
import { metadata as metadata$j } from "../../../pages/blog/posts/v3-3/_page.md.js";
import { metadata as metadata$k } from "../../../pages/blog/posts/v3-4-1/_page.md.js";
import { metadata as metadata$l } from "../../../pages/blog/posts/v3-4/_page.md.js";
import { metadata as metadata$m } from "../../../pages/blog/posts/v3-5/_page.md.js";
import { metadata as metadata$n } from "../../../pages/blog/posts/v3-6/_page.md.js";
import { metadata as metadata$o } from "../../../pages/blog/posts/v3-7-11/_page.md.js";
import { metadata as metadata$p } from "../../../pages/blog/posts/v3-7-6/_page.md.js";
import { metadata as metadata$q } from "../../../pages/blog/posts/v3-7-7/_page.md.js";
import { metadata as metadata$r } from "../../../pages/blog/posts/v3-7/_page.md.js";
import { metadata as metadata$s } from "../../../pages/blog/posts/v3-8-1/_page.md.js";
import { metadata as metadata$t } from "../../../pages/blog/posts/v3-8-5/_page.md.js";
import { metadata as metadata$u } from "../../../pages/blog/posts/v3-8/_page.md.js";
import { metadata as metadata$v } from "../../../pages/blog/posts/v3/_page.md.js";
const GET = async ({ url, setHeaders }) => {
	const modules = /* @__PURE__ */ Object.assign({
		"../posts/announcing-files-v2-4-30/+page.md": metadata,
		"../posts/announcing-files-v2-4-40/+page.md": metadata$1,
		"../posts/announcing-files-v2-5-10/+page.md": metadata$2,
		"../posts/announcing-files-v2-5-20/+page.md": metadata$3,
		"../posts/announcing-files-v2-5/+page.md": metadata$4,
		"../posts/announcing-files-v2/+page.md": metadata$5,
		"../posts/introducing-files-v2-0-33/+page.md": metadata$6,
		"../posts/introducing-files-v2-1/+page.md": metadata$7,
		"../posts/introducing-files-v2-3/+page.md": metadata$8,
		"../posts/introducing-files-v2-4/+page.md": metadata$9,
		"../posts/introducing-v2-4-preview/+page.md": metadata$a,
		"../posts/listary-integration/+page.md": metadata$b,
		"../posts/now-on-scoop/+page.md": metadata$c,
		"../posts/now-on-winget/+page.md": metadata$d,
		"../posts/preview-on-store/+page.md": metadata$e,
		"../posts/ten-things/+page.md": metadata$f,
		"../posts/v3-1/+page.md": metadata$g,
		"../posts/v3-2-2/+page.md": metadata$h,
		"../posts/v3-2/+page.md": metadata$i,
		"../posts/v3-3/+page.md": metadata$j,
		"../posts/v3-4-1/+page.md": metadata$k,
		"../posts/v3-4/+page.md": metadata$l,
		"../posts/v3-5/+page.md": metadata$m,
		"../posts/v3-6/+page.md": metadata$n,
		"../posts/v3-7-11/+page.md": metadata$o,
		"../posts/v3-7-6/+page.md": metadata$p,
		"../posts/v3-7-7/+page.md": metadata$q,
		"../posts/v3-7/+page.md": metadata$r,
		"../posts/v3-8-1/+page.md": metadata$s,
		"../posts/v3-8-5/+page.md": metadata$t,
		"../posts/v3-8/+page.md": metadata$u,
		"../posts/v3/+page.md": metadata$v,
	});
	const posts = Object.entries(modules).map(([path, metadata2]) => ({
		slug: path.match(/\.\/posts\/([\w-]+)\/\+page\.md$/)?.[1],
		metadata: metadata2,
	}));
	setHeaders({
		"Content-Type": "application/rss+xml",
	});
	return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="https://${url.host}/blog/feed.rss" rel="self" type="application/rss+xml" />
<title>Files News</title>
<link>https://${url.host}/blog</link>
<description>News about Files, the modern file explorer for Windows</description>
<image>
<url>https://${url.host}/branding/banner-blog.png</url>
<title>Files News</title>
<link>https://${url.host}/blog</link>
</image>
${posts
	.map(
		post => `<item>
<guid>https://${url.host}/blog/posts/${post.slug}</guid>
<title>${post.metadata.title}</title>
<link>https://${url.host}/blog/posts/${post.slug}</link>
<description>${post.metadata.description}</description>
<pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
<enclosure url="https://${url.host}${post.metadata.thumbnail}" length="0" type="image/jpeg"/>
</item>`,
	)
	.join("")}
</channel>
</rss>
  `);
};
export { GET };
