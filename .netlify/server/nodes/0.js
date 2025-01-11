import * as universal from "../entries/pages/_layout.ts.js";

export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/_layout.svelte.js"))
		.default);
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = [
	"_app/immutable/nodes/0.C-uF-ATg.js",
	"_app/immutable/chunks/38.Zx2hCkaP.js",
	"_app/immutable/chunks/scheduler.DCUrRz8L.js",
	"_app/immutable/chunks/index.DLqkoM2M.js",
	"_app/immutable/chunks/40.DYXghaIO.js",
	"_app/immutable/chunks/41.WElgEStu.js",
	"_app/immutable/chunks/42.MESUyzbA.js",
	"_app/immutable/chunks/43.Diy8Vii0.js",
	"_app/immutable/chunks/44.DffLvJij.js",
	"_app/immutable/chunks/InfoBar.DUbNEjwi.js",
	"_app/immutable/chunks/internal.DrG7oDcV.js",
	"_app/immutable/chunks/45.D0XKX4t9.js",
	"_app/immutable/chunks/46.Bu6EcUCB.js",
	"_app/immutable/chunks/47.YqY4Wqyc.js",
	"_app/immutable/chunks/48.UODuRn_E.js",
	"_app/immutable/chunks/50.w8nSYSdA.js",
	"_app/immutable/chunks/51.C63-3Z1j.js",
	"_app/immutable/chunks/52.CZ13liMc.js",
	"_app/immutable/chunks/53.CF89bnGm.js",
	"_app/immutable/chunks/54.Cvi3FWZi.js",
	"_app/immutable/chunks/55.SldU9h2-.js",
	"_app/immutable/chunks/56.DBX_nXQR.js",
	"_app/immutable/chunks/57.Bzt1v4Pd.js",
	"_app/immutable/chunks/58.EyUwfnuB.js",
	"_app/immutable/chunks/Button.DvPHpbQ4.js",
	"_app/immutable/chunks/index.g5YcAAdQ.js",
	"_app/immutable/chunks/control.CYgJF_JY.js",
	"_app/immutable/chunks/i18n.Ba0U4HkE.js",
	"_app/immutable/chunks/entry.c6zL84CZ.js",
	"_app/immutable/chunks/PageSection.9Es2A9IF.js",
	"_app/immutable/chunks/links.5U1dMIVO.js",
	"_app/immutable/chunks/each.LXqkuPC2.js",
	"_app/immutable/chunks/TreeView.RE-U3aVW.js",
	"_app/immutable/chunks/TextBlock.7-F4P1Fu.js",
	"_app/immutable/chunks/utils.B2a0cVJR.js",
	"_app/immutable/chunks/IconButton.BU4lXNwk.js",
];
export const stylesheets = [
	"_app/immutable/assets/0.UCTFkJvq.css",
	"_app/immutable/assets/NavigationView.CVXErg1c.css",
	"_app/immutable/assets/Footer.LQNE50gP.css",
	"_app/immutable/assets/i18n.B5U6Xca4.css",
];
export const fonts = [];
