import { metadata } from "./posts/announcing-files-v2-4-30/_page.md.js";
import { metadata as metadata$1 } from "./posts/announcing-files-v2-4-40/_page.md.js";
import { metadata as metadata$2 } from "./posts/announcing-files-v2-5-10/_page.md.js";
import { metadata as metadata$3 } from "./posts/announcing-files-v2-5-20/_page.md.js";
import { metadata as metadata$4 } from "./posts/announcing-files-v2-5/_page.md.js";
import { metadata as metadata$5 } from "./posts/announcing-files-v2/_page.md.js";
import { metadata as metadata$6 } from "./posts/introducing-files-v2-0-33/_page.md.js";
import { metadata as metadata$7 } from "./posts/introducing-files-v2-1/_page.md.js";
import { metadata as metadata$8 } from "./posts/introducing-files-v2-3/_page.md.js";
import { metadata as metadata$9 } from "./posts/introducing-files-v2-4/_page.md.js";
import { metadata as metadata$a } from "./posts/introducing-v2-4-preview/_page.md.js";
import { metadata as metadata$b } from "./posts/listary-integration/_page.md.js";
import { metadata as metadata$c } from "./posts/now-on-scoop/_page.md.js";
import { metadata as metadata$d } from "./posts/now-on-winget/_page.md.js";
import { metadata as metadata$e } from "./posts/preview-on-store/_page.md.js";
import { metadata as metadata$f } from "./posts/ten-things/_page.md.js";
import { metadata as metadata$g } from "./posts/v3-1/_page.md.js";
import { metadata as metadata$h } from "./posts/v3-2-2/_page.md.js";
import { metadata as metadata$i } from "./posts/v3-2/_page.md.js";
import { metadata as metadata$j } from "./posts/v3-3/_page.md.js";
import { metadata as metadata$k } from "./posts/v3-4-1/_page.md.js";
import { metadata as metadata$l } from "./posts/v3-4/_page.md.js";
import { metadata as metadata$m } from "./posts/v3-5/_page.md.js";
import { metadata as metadata$n } from "./posts/v3-6/_page.md.js";
import { metadata as metadata$o } from "./posts/v3-7-11/_page.md.js";
import { metadata as metadata$p } from "./posts/v3-7-6/_page.md.js";
import { metadata as metadata$q } from "./posts/v3-7-7/_page.md.js";
import { metadata as metadata$r } from "./posts/v3-7/_page.md.js";
import { metadata as metadata$s } from "./posts/v3-8-1/_page.md.js";
import { metadata as metadata$t } from "./posts/v3-8-5/_page.md.js";
import { metadata as metadata$u } from "./posts/v3-8/_page.md.js";
import { metadata as metadata$v } from "./posts/v3/_page.md.js";
const load = async () => {
	const modules = /* @__PURE__ */ Object.assign({
		"./posts/announcing-files-v2-4-30/+page.md": metadata,
		"./posts/announcing-files-v2-4-40/+page.md": metadata$1,
		"./posts/announcing-files-v2-5-10/+page.md": metadata$2,
		"./posts/announcing-files-v2-5-20/+page.md": metadata$3,
		"./posts/announcing-files-v2-5/+page.md": metadata$4,
		"./posts/announcing-files-v2/+page.md": metadata$5,
		"./posts/introducing-files-v2-0-33/+page.md": metadata$6,
		"./posts/introducing-files-v2-1/+page.md": metadata$7,
		"./posts/introducing-files-v2-3/+page.md": metadata$8,
		"./posts/introducing-files-v2-4/+page.md": metadata$9,
		"./posts/introducing-v2-4-preview/+page.md": metadata$a,
		"./posts/listary-integration/+page.md": metadata$b,
		"./posts/now-on-scoop/+page.md": metadata$c,
		"./posts/now-on-winget/+page.md": metadata$d,
		"./posts/preview-on-store/+page.md": metadata$e,
		"./posts/ten-things/+page.md": metadata$f,
		"./posts/v3-1/+page.md": metadata$g,
		"./posts/v3-2-2/+page.md": metadata$h,
		"./posts/v3-2/+page.md": metadata$i,
		"./posts/v3-3/+page.md": metadata$j,
		"./posts/v3-4-1/+page.md": metadata$k,
		"./posts/v3-4/+page.md": metadata$l,
		"./posts/v3-5/+page.md": metadata$m,
		"./posts/v3-6/+page.md": metadata$n,
		"./posts/v3-7-11/+page.md": metadata$o,
		"./posts/v3-7-6/+page.md": metadata$p,
		"./posts/v3-7-7/+page.md": metadata$q,
		"./posts/v3-7/+page.md": metadata$r,
		"./posts/v3-8-1/+page.md": metadata$s,
		"./posts/v3-8-5/+page.md": metadata$t,
		"./posts/v3-8/+page.md": metadata$u,
		"./posts/v3/+page.md": metadata$v,
	});
	const posts = Object.entries(modules)
		.map(([path, metadata2]) => ({
			slug: path.match(/\.\/posts\/([\w-]+)\/\+page\.md$/)?.[1],
			metadata: metadata2,
		}))
		.filter(post => Date.now() >= +new Date(post.metadata.date))
		.sort((a, b) => +new Date(b.metadata.date) - +new Date(a.metadata.date));
	return { posts };
};
export { load };
