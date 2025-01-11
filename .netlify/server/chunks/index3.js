import {
	b as addMessages,
	i as init,
	g as getLocaleFromNavigator,
} from "./runtime.js";
const metadata$1 = {
	name: "{FilesName}",
	home: "{FilesName} • Home",
	docs_home: "{FilesName} • Docs",
	docs_page: "{FilesName} • Docs - {title}",
	blog_home: "{FilesName} • Blog",
	blog_page: "{FilesName} • {title}",
	description: "Building the best file manager for Windows.",
};
const home$1 = {
	community: {
		chip: "Community",
		title: "Designed and developed by you.",
		description:
			"{FilesName} is free and open source software, maintained and designed by a collective of hundreds of contributors.",
		discord: "Join the discussion",
		docs: "Become a contributor",
		contributions:
			"{amount, plural, =0 {No contributions} one {# contribution} other {# contributions}}",
	},
	design: {
		chip: "Design",
		title: "Power meets beauty.",
		description:
			"Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.",
		download: "Download",
		learn_more: "Learn more",
	},
	features: {
		chip: "Features",
		title: "It already does that.",
		description:
			"Cloud files integration? Tabs and multiple layouts? Rich file previews? {FilesName} has it covered with robust features you expect from a modern file manager.",
		unknown: "Unknown",
		cloud: {
			title: "Seamless cloud integration",
			description:
				"Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud.",
		},
		preview: {
			title: "Preview pane",
			description:
				"Preview photos, videos, and documents without opening them.",
		},
		"popup-preview": {
			title: "QuickLook & SeerPro support",
			description:
				"Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro.",
		},
		tags: {
			title: "Tag files and folders",
			description:
				"Organize and sort your files and folders with colored tags.",
		},
		tabs: {
			title: "Multitask with tabs",
			description:
				"Avoid multiple windows and keep your desktop clutter-free with tabs.",
		},
		columns: {
			title: "Column view",
			description:
				"Quickly navigate through different levels of the file system using the column layout.",
		},
		archives: {
			title: "View and edit archives",
			description:
				"Create and extract archives including zip, WinRar, and 7zip.",
		},
		git: {
			title: "Git integration",
			description:
				"Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files.",
		},
		"dual-pane": {
			title: "Dual pane",
			description:
				"View and manage two folders side by side with the Dual Pane feature.",
		},
		hashes: {
			title: "Hashes",
			description: "View and compare file hashes from the properties window.",
		},
		"command-palette": {
			title: "Command Palette",
			description:
				"Quickly access commands, features, and settings from the Command Palette.",
		},
		"remap-key-bindings": {
			title: "Remap key bindings",
			description: "Streamline you workflow by creating custom key bindings.",
		},
	},
	themes: {
		chip: "Themes",
		title: "Distinctly personal.",
		description:
			"Have it your way. {FilesName} features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into {FilesName} or dive right into the docs and create your own.",
		grey_blue: "Dark Grey • Light Blue",
		grey_green: "Blue Grey • Neon Green",
		purple: "Purple",
		yellow_white: "Yellow • White",
		white_teal: "Cool White • Dark Teal",
		sky_blue: "Sky Blue",
		select_theme: "Select theme #{index}",
	},
};
const blog$1 = {
	coming_soon: "More posts coming soon!",
	read_more: "Read More",
	share: {
		default: "Native sharing",
		url: "Copy URL",
		tweet: "X",
		facebook: "Facebook",
		rss: "RSS Feed",
	},
};
const docs$1 = {
	autocomplete_empty: "No results found",
	edit_page: "Edit this page",
	search_docs: "Search Documentation",
};
const footer$1 = {
	home: "Home",
	docs: "Docs",
	news: "News",
	download: "Download",
	contribute: "Contribute to {FilesName}",
	feedback: "Give Feedback",
	style_guide: "Style Guide",
	translations: "Translations",
	support: "Support",
	privacy: "Privacy",
};
const navbar$1 = {
	home: "Home",
	docs: "Documentation",
	news: "News",
	download: "Download",
	themes: "Themes",
	discord: "Discord",
	github: "Github",
};
const download$1 = {
	title: "Download {FilesName}",
	donation_description:
		"{FilesName} is a community-driven project that depends on your support to grow and improve. Please consider purchasing {FilesName} through the Microsoft Store or supporting us on GitHub if you use the classic installer.",
	donation_button: "Donate",
	microsoft_store: {
		title: "Download Files",
		description:
			"Purchasing {FilesName} through the Microsoft Store helps support the developers and allows us to continue updating the app with new features and improvements.",
	},
	preview: {
		title: "Download Insider Preview",
		description:
			"The preview version can be installed alongside the stable release and provides early access to new features and improvements.",
	},
	self_signed: {
		link_text: "classic installer",
		description: "Don't have access to the Microsoft Store? Try our ",
	},
};
const __vite_glob_0_0 = {
	metadata: metadata$1,
	home: home$1,
	blog: blog$1,
	docs: docs$1,
	footer: footer$1,
	navbar: navbar$1,
	download: download$1,
};
const metadata = {
	name: "{FilesName}",
	home: "{FilesName} • 主页",
	docs_home: "{FilesName} • 文档",
	docs_page: "{FilesName} • 文档 - {title}",
	blog_home: "{FilesName} • 博客",
	blog_page: "{FilesName} • {title}",
	description: "做最好的自己",
};
const home = {
	community: {
		chip: "社区",
		title: "由你来进行的设计与开发。",
		description:
			"{FilesName} 是自由开放源码软件，由数百个贡献者集体维护和设计。",
		discord: "加入讨论",
		docs: "成为贡献者",
		contributions: "{amount, plural, =0 {无贡献} other {# 贡献}}",
	},
	design: {
		chip: "我们",
		title: "永远年轻 永远热泪盈眶",
		description:
			"一群初高中生摄影佬为热爱而生的小组，我们希望能做出令自己和观众都满意的出色作品",
		download: "下载",
		learn_more: "了解更多",
	},
	features: {
		chip: "关于",
		title: "它已经做到了这一点。",
		description:
			"云文件的集成？标签和多种布局？丰富的文件预览？ {FilesName} 拥有您期望从现代文件管理器中获得的所有强大功能。",
		unknown: "未知",
		cloud: {
			title: "无缝的云端集成",
			description: "内置对 OneDrive、Google Drive 和 iCloud 等云驱动器的支持。",
		},
		preview: {
			title: "预览面板",
			description: "无需打开即可预览照片、视频和文档。",
		},
		"popup-preview": {
			title: "支持 QuickLook 和 SeerPro",
			description:
				"按空格键预览 Office 文件、文档和其他文件类型。此功能需要安装 QuickLook 或 SeerPro。",
		},
		tags: {
			title: "为文件和文件夹打上标签",
			description: "用彩色标签对你的文件和文件夹进行组织和分类。",
		},
		tabs: {
			title: "使用标签页进行多任务处理",
			description: "使用标签页避免打开多个窗口，让桌面保持整洁。",
		},
		columns: {
			title: "列表视图",
			description: "使用列式布局快速浏览文件系统的不同层级。",
		},
		archives: {
			title: "查看和编辑档案",
			description: "创建和解压压缩包，包括zip、WinRar和7zip。",
		},
		git: {
			title: "Git 集成",
			description:
				"轻松地管理你的Git项目。创建新的分支，在它们之间切换，并同步你的变化 - 所有这些都无需离开Files。",
		},
		"dual-pane": {
			title: "双面板",
			description: "利用双面板查看和管理两个并排的文件夹。",
		},
		hashes: {
			title: "哈希值",
			description: "在属性窗口中查看和比较文件的哈希值。",
		},
		"command-palette": {
			title: "命令面板",
			description: "通过命令面板快速访问命令、功能和设置。",
		},
		"remap-key-bindings": {
			title: "重映射键绑定",
			description: "通过创建自定义密钥绑定来简化您的工作流。",
		},
	},
	themes: {
		chip: "主题",
		title: "个性化",
		description:
			"随心所欲。 {FilesName} 的用户界面可完全自定义，包括颜色和材质。你可以尝试 {FilesName} 内置的自定义主题，也可以查阅文档创建自定义主题。",
		grey_blue: "深灰 • 浅蓝",
		grey_green: "灰蓝 • 荧绿",
		purple: "紫色",
		yellow_white: "黄色 • 白色",
		white_teal: "冷白色 • 深茶色",
		sky_blue: "天蓝",
		select_theme: "选择主题#{index}",
	},
};
const blog = {
	coming_soon: "更多功能即将发布!",
	read_more: "了解更多",
	share: {
		default: "本地共享",
		url: "复制链接",
		tweet: "X",
		facebook: "Facebook",
		rss: "RSS 订阅源",
	},
};
const docs = {
	autocomplete_empty: "未找到任何结果",
	edit_page: "编辑此页面",
	search_docs: "搜索文档",
};
const footer = {
	home: "主页",
	docs: "文档",
	news: "消息",
	download: "下载",
	contribute: "为 {FilesName} 贡献",
	feedback: "发送反馈",
	style_guide: "风格规范",
	translations: "翻译",
	web_team: "团队",
};
const navbar = {
	home: "主页",
	docs: "文档",
	news: "消息",
	download: "下载",
	themes: "主题",
	discord: "Discord",
	github: "Github",
};
const download = {
	title: "下载 {FilesName}",
	donation_description:
		"{FilesName} 是一个由社区主导的项目，为了持续成长和改进，我们需要大家的支持。请考虑从 Microsoft Store 购买 {FilesName}，或者如果您选择使用经典安装程序，请务必在 GitHub 上给予支持。",
	donation_button: "捐赠",
	microsoft_store: {
		title: "下载文件",
		description:
			"通过Microsoft Store购买 {FilesName} 有助于支持开发人员，使我们能够继续更新应用程序的新功能和改进。",
	},
	preview: {
		title: "下载预览版本",
		description: "预览版可以与稳定版同时安装，并提供对新功能和改进的早期访问。",
	},
	self_signed: {
		link_text: "经典安装程序",
		description: "无法通过 Microsoft Store 下载？试试我们 ",
	},
};
const __vite_glob_0_1 = {
	metadata,
	home,
	blog,
	docs,
	footer,
	navbar,
	download,
};
const locales = Object.fromEntries(
	Object.entries(
		/* @__PURE__ */ Object.assign({
			"./locales/en.json": __vite_glob_0_0,
			"./locales/zh-CN.json": __vite_glob_0_1,
		}),
	).map(([locale, values]) => [
		locale.match(/\.\/locales\/([\w-]+)\.json/)?.[1],
		{
			values,
			dir: ["he-IL", "ar-SA"].includes(locale) ? "rtl" : "ltr",
		},
	]),
);
const i18n = () => {
	for (const [locale, localeObject] of Object.entries(locales)) {
		if (Object.keys(localeObject.values).length !== 0)
			addMessages(locale, localeObject.values);
	}
	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator(),
	});
};
export { i18n as i, locales as l };
