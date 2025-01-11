import {
	c as create_ssr_component,
	i as compute_rest_props,
	k as get_current_component,
	f as spread,
	d as escape,
	g as escape_attribute_value,
	h as escape_object,
	b as add_attribute,
	j as createEventDispatcher,
	v as validate_component,
	a as subscribe,
} from "../../../chunks/ssr.js";
import { d as defaultI18nValues, p as page } from "../../../chunks/i18n.js";
import { $ as $format } from "../../../chunks/runtime.js";
import { l as links } from "../../../chunks/links.js";
import { T as TreeView } from "../../../chunks/TreeView.js";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                           */
import { c as createEventForwarder } from "../../../chunks/internal2.js";
import { M as Metadata } from "../../../chunks/Metadata.js";
import { e as externalLink } from "../../../chunks/utils.js";
const css$2 = {
	code: ".text-box-button.svelte-159a5xt{align-items:center;background-color:var(--fds-subtle-fill-transparent);border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-secondary);display:flex;justify-content:center;min-block-size:22px;min-inline-size:26px;outline:none;padding:3px 5px}.text-box-button.svelte-159a5xt:focus-visible{box-shadow:var(--fds-focus-stroke)}.text-box-button.svelte-159a5xt:hover{background-color:var(--fds-subtle-fill-secondary)}.text-box-button.svelte-159a5xt:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-tertiary)}.text-box-button.svelte-159a5xt:disabled{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-disabled)}.text-box-button.svelte-159a5xt svg{fill:currentColor;min-block-size:12px;min-inline-size:12px;pointer-events:none}",
	map: '{"version":3,"file":"TextBoxButton.svelte","sources":["TextBoxButton.svelte"],"sourcesContent":["<script >import { createEventForwarder } from \\"../internal\\";\\r\\nimport { get_current_component } from \\"svelte/internal\\";\\r\\nexport let type = \\"button\\";\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\nexport let element = null;\\r\\nconst forwardEvents = createEventForwarder(get_current_component());\\r\\n</script>\\n\\n<button\\n\\tuse:forwardEvents\\n\\tbind:this={element}\\n\\tclass=\\"text-box-button {className}\\"\\n\\t{type}\\n\\t{...$$restProps}\\n>\\n\\t<slot />\\n</button>\\n\\n<style >.text-box-button{align-items:center;background-color:var(--fds-subtle-fill-transparent);border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-secondary);display:flex;justify-content:center;min-block-size:22px;min-inline-size:26px;outline:none;padding:3px 5px}.text-box-button:focus-visible{box-shadow:var(--fds-focus-stroke)}.text-box-button:hover{background-color:var(--fds-subtle-fill-secondary)}.text-box-button:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-tertiary)}.text-box-button:disabled{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-disabled)}.text-box-button :global(svg){fill:currentColor;min-block-size:12px;min-inline-size:12px;pointer-events:none}</style>\\n"],"names":[],"mappings":"AAmBQ,+BAAgB,CAAC,YAAY,MAAM,CAAC,iBAAiB,IAAI,6BAA6B,CAAC,CAAC,OAAO,IAAI,CAAC,cAAc,IAAI,2BAA2B,CAAC,CAAC,WAAW,UAAU,CAAC,MAAM,IAAI,oBAAoB,CAAC,CAAC,QAAQ,IAAI,CAAC,gBAAgB,MAAM,CAAC,eAAe,IAAI,CAAC,gBAAgB,IAAI,CAAC,QAAQ,IAAI,CAAC,QAAQ,GAAG,CAAC,GAAG,CAAC,+BAAgB,cAAc,CAAC,WAAW,IAAI,kBAAkB,CAAC,CAAC,+BAAgB,MAAM,CAAC,iBAAiB,IAAI,2BAA2B,CAAC,CAAC,+BAAgB,OAAO,CAAC,iBAAiB,IAAI,0BAA0B,CAAC,CAAC,MAAM,IAAI,mBAAmB,CAAC,CAAC,+BAAgB,SAAS,CAAC,iBAAiB,IAAI,0BAA0B,CAAC,CAAC,MAAM,IAAI,mBAAmB,CAAC,CAAC,+BAAgB,CAAS,GAAI,CAAC,KAAK,YAAY,CAAC,eAAe,IAAI,CAAC,gBAAgB,IAAI,CAAC,eAAe,IAAI"}',
};
const TextBoxButton = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		let $$restProps = compute_rest_props($$props, ["type", "class", "element"]);
		let { type = "button" } = $$props;
		let { class: className = "" } = $$props;
		let { element = null } = $$props;
		createEventForwarder(get_current_component());
		if ($$props.type === void 0 && $$bindings.type && type !== void 0)
			$$bindings.type(type);
		if ($$props.class === void 0 && $$bindings.class && className !== void 0)
			$$bindings.class(className);
		if ($$props.element === void 0 && $$bindings.element && element !== void 0)
			$$bindings.element(element);
		$$result.css.add(css$2);
		return `<button${spread(
			[
				{
					class: "text-box-button " + escape(className, true),
				},
				{ type: escape_attribute_value(type) },
				escape_object($$restProps),
			],
			{ classes: "svelte-159a5xt" },
		)}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </button>`;
	},
);
const css$1 = {
	code: '.text-box.svelte-8l6kgi.svelte-8l6kgi{background-color:transparent;border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);cursor:unset;flex:1 1 auto;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;inline-size:100%;line-height:20px;margin:0;min-block-size:30px;outline:none;padding-inline:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-box.svelte-8l6kgi.svelte-8l6kgi::-moz-placeholder{color:var(--fds-text-secondary);-moz-user-select:none;user-select:none}.text-box.svelte-8l6kgi.svelte-8l6kgi:-ms-input-placeholder{color:var(--fds-text-secondary);-ms-user-select:none;user-select:none}.text-box.svelte-8l6kgi.svelte-8l6kgi::placeholder{color:var(--fds-text-secondary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-box.svelte-8l6kgi.svelte-8l6kgi::-webkit-search-cancel-button,.text-box.svelte-8l6kgi.svelte-8l6kgi::-webkit-search-decoration,.text-box.svelte-8l6kgi.svelte-8l6kgi::-webkit-search-results-button,.text-box.svelte-8l6kgi.svelte-8l6kgi::-webkit-search-results-decoration{-webkit-appearance:none}.text-box.svelte-8l6kgi.svelte-8l6kgi::-ms-reveal{display:none}.text-box.svelte-8l6kgi.svelte-8l6kgi:disabled{color:var(--fds-text-disabled)}.text-box.svelte-8l6kgi.svelte-8l6kgi:disabled::-moz-placeholder{color:var(--fds-text-disabled)}.text-box.svelte-8l6kgi.svelte-8l6kgi:disabled:-ms-input-placeholder{color:var(--fds-text-disabled)}.text-box.svelte-8l6kgi.svelte-8l6kgi:disabled::placeholder{color:var(--fds-text-disabled)}.text-box-container.svelte-8l6kgi.svelte-8l6kgi{align-items:center;background-clip:padding-box;background-color:var(--fds-control-fill-default);border:1px solid var(--fds-control-stroke-default);border-radius:var(--fds-control-corner-radius);cursor:text;display:flex;inline-size:100%;position:relative}.text-box-container.svelte-8l6kgi.svelte-8l6kgi:hover{background-color:var(--fds-control-fill-secondary)}.text-box-container.disabled.svelte-8l6kgi.svelte-8l6kgi{background-color:var(--fds-control-fill-disabled);cursor:default}.text-box-container.disabled.svelte-8l6kgi .text-box-underline.svelte-8l6kgi{display:none}.text-box-container.svelte-8l6kgi.svelte-8l6kgi:focus-within{background-color:var(--fds-control-fill-input-active)}.text-box-container.svelte-8l6kgi:focus-within .text-box.svelte-8l6kgi::-moz-placeholder{color:var(--fds-text-tertiary)}.text-box-container.svelte-8l6kgi:focus-within .text-box.svelte-8l6kgi:-ms-input-placeholder{color:var(--fds-text-tertiary)}.text-box-container.svelte-8l6kgi:focus-within .text-box.svelte-8l6kgi::placeholder{color:var(--fds-text-tertiary)}.text-box-container.svelte-8l6kgi:focus-within .text-box-underline.svelte-8l6kgi:after{border-bottom:2px solid var(--fds-accent-default)}.text-box-container.svelte-8l6kgi:focus-within .text-box-clear-button{display:flex}.text-box-underline.svelte-8l6kgi.svelte-8l6kgi{block-size:calc(100% + 2px);border-radius:var(--fds-control-corner-radius);inline-size:calc(100% + 2px);inset-block-start:-1px;inset-inline-start:-1px;overflow:hidden;pointer-events:none;position:absolute}.text-box-underline.svelte-8l6kgi.svelte-8l6kgi:after{block-size:100%;border-bottom:1px solid var(--fds-control-strong-stroke-default);box-sizing:border-box;content:"";inline-size:100%;inset-block-end:0;inset-inline-start:0;position:absolute}.text-box-buttons.svelte-8l6kgi.svelte-8l6kgi{align-items:center;cursor:default;display:flex;flex:0 0 auto}.text-box-buttons.svelte-8l6kgi>.text-box-button{-webkit-margin-start:6px;margin-inline-start:6px}.text-box-buttons.svelte-8l6kgi>.text-box-button:first-of-type{-webkit-margin-start:0;margin-inline-start:0}.text-box-buttons.svelte-8l6kgi>.text-box-button:last-of-type{-webkit-margin-end:4px;margin-inline-end:4px}.text-box-buttons.svelte-8l6kgi .text-box-clear-button{display:none}',
	map: '{"version":3,"file":"TextBox.svelte","sources":["TextBox.svelte"],"sourcesContent":["<script >import { createEventDispatcher } from \\"svelte\\";\\r\\nimport { get_current_component } from \\"svelte/internal\\";\\r\\nimport { externalMouseEvents, createEventForwarder } from \\"../internal\\";\\r\\nimport TextBoxButton from \\"../TextBox/TextBoxButton.svelte\\";\\r\\n/** The input\'s current value. */\\r\\nexport let value = \\"\\";\\r\\n/** Determiness the input type of the textbox. */\\r\\nexport let type = \\"text\\";\\r\\n/** The initial placeholder text displayed if no value is present. */\\r\\nexport let placeholder = undefined;\\r\\n/** Determines whether a text clear button is present. */\\r\\nexport let clearButton = true;\\r\\n/** Determines whether a search button is present when `type` is set to \\"search\\". */\\r\\nexport let searchButton = true;\\r\\n/** Determines whether a password reveal button is present when `type` is set to \\"password\\". */\\r\\nexport let revealButton = true;\\r\\n/** Determines whether the textbox can be typed in or not. */\\r\\nexport let readonly = false;\\r\\n/** Controls whether the TextBox is intended for user interaction, and styles it accordingly. */\\r\\nexport let disabled = false;\\r\\n/** Specifies a custom class name for the TextBox container. */\\r\\nlet className = \\"\\";\\r\\nexport { className as class };\\r\\n/** Obtains a bound DOM reference to the TextBox\'s input element. */\\r\\nexport let inputElement = null;\\r\\n/** Obtains a bound DOM reference to the TextBox\'s container element. */\\r\\nexport let containerElement = null;\\r\\n/** Obtains a bound DOM reference to the TextBox\'s buttons container element. */\\r\\nexport let buttonsContainerElement = null;\\r\\n/** Obtains a bound DOM reference to the TextBox\'s clear button element. Only available if `clearButton` is set to true, `readonly` is set to false, and a `value` is present. */\\r\\nexport let clearButtonElement = null;\\r\\n/** Obtains a bound DOM reference to the TextBox\'s search button element. Only available if `type` is set to `search`. */\\r\\nexport let searchButtonElement = null;\\r\\n/** Obtains a bound DOM reference to the TextBox\'s reveal button element. Only available if `type` is set to `password`. */\\r\\nexport let revealButtonElement = null;\\r\\nconst dispatch = createEventDispatcher();\\r\\nconst forwardEvents = createEventForwarder(get_current_component(), [\\r\\n    \\"clear\\",\\r\\n    \\"search\\",\\r\\n    \\"reveal\\",\\r\\n    \\"outermousedown\\"\\r\\n]);\\r\\nfunction handleClear(event) {\\r\\n    dispatch(\\"clear\\", event);\\r\\n    inputElement.focus();\\r\\n    value = \\"\\";\\r\\n}\\r\\nfunction handleSearch(event) {\\r\\n    dispatch(\\"search\\", event);\\r\\n    inputElement.focus();\\r\\n}\\r\\nfunction handleReveal(event) {\\r\\n    inputElement.focus();\\r\\n    inputElement.setAttribute(\\"type\\", \\"text\\");\\r\\n    dispatch(\\"reveal\\", event);\\r\\n    let revealButtonMouseDown = true;\\r\\n    const hidePassword = () => {\\r\\n        if (!revealButtonMouseDown)\\r\\n            return;\\r\\n        inputElement.focus();\\r\\n        revealButtonMouseDown = false;\\r\\n        inputElement.setAttribute(\\"type\\", \\"password\\");\\r\\n        window.removeEventListener(\\"mouseup\\", hidePassword);\\r\\n    };\\r\\n    window.addEventListener(\\"mouseup\\", hidePassword);\\r\\n}\\r\\nconst inputProps = {\\r\\n    class: \\"text-box\\",\\r\\n    disabled: disabled || undefined,\\r\\n    readonly: readonly || undefined,\\r\\n    placeholder: placeholder || undefined,\\r\\n    ...$$restProps\\r\\n};\\r\\n</script>\\n\\n<!--\\n@component\\nThe TextBox control lets a user type text into an app. The text displays on the screen in a simple, plaintext format on a single line. It additionally comes with a set of buttons which allow users to perform specialized actions on the text, such as showing a password or clearing the TextBox\'s contents. [Docs](https://fluent-svelte.vercel.app/docs/components/texbox)\\n- Usage:\\n    ```tsx\\n    <TextBox placeholder=\\"Enter your name.\\" />\\n    ```\\n-->\\n<div\\n\\tclass=\\"text-box-container {className}\\"\\n\\tclass:disabled\\n\\tbind:this={containerElement}\\n\\tuse:externalMouseEvents={{ type: \\"mousedown\\" }}\\n\\ton:outermousedown\\n>\\n\\t<!-- Dirty workaround for the fact that svelte can\'t handle two-way binding when the input type is dynamic. -->\\n\\t<!-- prettier-ignore -->\\n\\t{#if type === \\"text\\"}\\n\\t\\t<input type=\\"text\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"number\\"}\\n\\t\\t<input type=\\"number\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"search\\"}\\n\\t\\t<input type=\\"search\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"password\\"}\\n\\t\\t<input type=\\"password\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"email\\"}\\n\\t\\t<input type=\\"email\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"tel\\"}\\n\\t\\t<input type=\\"tel\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"url\\"}\\n\\t\\t<input type=\\"url\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"date\\"}\\n\\t\\t<input type=\\"date\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"datetime-local\\"}\\n\\t\\t<input type=\\"datetime-local\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"month\\"}\\n\\t\\t<input type=\\"month\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"time\\"}\\n\\t\\t<input type=\\"time\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t\\t{:else if type === \\"week\\"}\\n\\t\\t<input type=\\"week\\" bind:value bind:this={inputElement} use:forwardEvents {...inputProps} />\\n\\t{/if}\\n\\t<div class=\\"text-box-underline\\" />\\n\\t<div class=\\"text-box-buttons\\" bind:this={buttonsContainerElement}>\\n\\t\\t{#if !disabled}\\n\\t\\t\\t{#if clearButton && value && !readonly}\\n\\t\\t\\t\\t<TextBoxButton\\n\\t\\t\\t\\t\\tclass=\\"text-box-clear-button\\"\\n\\t\\t\\t\\t\\taria-label=\\"Clear value\\"\\n\\t\\t\\t\\t\\ton:click={handleClear}\\n\\t\\t\\t\\t\\tbind:element={clearButtonElement}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\twidth=\\"12\\"\\n\\t\\t\\t\\t\\t\\theight=\\"12\\"\\n\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 12 12\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t\\td=\\"M2.08859 2.21569L2.14645 2.14645C2.32001 1.97288 2.58944 1.9536 2.78431 2.08859L2.85355 2.14645L6 5.293L9.14645 2.14645C9.34171 1.95118 9.65829 1.95118 9.85355 2.14645C10.0488 2.34171 10.0488 2.65829 9.85355 2.85355L6.707 6L9.85355 9.14645C10.0271 9.32001 10.0464 9.58944 9.91141 9.78431L9.85355 9.85355C9.67999 10.0271 9.41056 10.0464 9.21569 9.91141L9.14645 9.85355L6 6.707L2.85355 9.85355C2.65829 10.0488 2.34171 10.0488 2.14645 9.85355C1.95118 9.65829 1.95118 9.34171 2.14645 9.14645L5.293 6L2.14645 2.85355C1.97288 2.67999 1.9536 2.41056 2.08859 2.21569L2.14645 2.14645L2.08859 2.21569Z\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t</TextBoxButton>\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if type === \\"search\\" && searchButton}\\n\\t\\t\\t\\t<TextBoxButton\\n\\t\\t\\t\\t\\taria-label=\\"Search\\"\\n\\t\\t\\t\\t\\ton:click={handleSearch}\\n\\t\\t\\t\\t\\tbind:element={searchButtonElement}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\twidth=\\"12\\"\\n\\t\\t\\t\\t\\t\\theight=\\"12\\"\\n\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 12 12\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\td=\\"M5.00038 1C2.79103 1 1 2.7909 1 5.00008C1 7.20927 2.79103 9.00017 5.00038 9.00017C5.92463 9.00017 6.77568 8.68675 7.45302 8.1604L10.1464 10.8536C10.3416 11.0488 10.6583 11.0488 10.8535 10.8536C11.0488 10.6583 11.0488 10.3417 10.8535 10.1464L8.16028 7.45337C8.68705 6.77595 9.00075 5.92465 9.00075 5.00008C9.00075 2.7909 7.20972 1 5.00038 1ZM2.00009 5.00008C2.00009 3.34319 3.34337 2.00002 5.00038 2.00002C6.65739 2.00002 8.00066 3.34319 8.00066 5.00008C8.00066 6.65697 6.65739 8.00015 5.00038 8.00015C3.34337 8.00015 2.00009 6.65697 2.00009 5.00008Z\\"\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t</TextBoxButton>\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if type === \\"password\\" && value && revealButton}\\n\\t\\t\\t\\t<TextBoxButton\\n\\t\\t\\t\\t\\taria-label=\\"Reveal password\\"\\n\\t\\t\\t\\t\\ton:mousedown={handleReveal}\\n\\t\\t\\t\\t\\tbind:element={revealButtonElement}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\twidth=\\"10\\"\\n\\t\\t\\t\\t\\t\\theight=\\"10\\"\\n\\t\\t\\t\\t\\t\\tviewBox=\\"0 171 1024 683\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\td=\\"M0,554.5C0,550.833 0.5,547.167 1.5,543.5C11.5,505.833 25.75,470.417 44.25,437.25C62.75,404.083 84.5833,373.667 109.75,346C134.917,318.333 162.75,293.667 193.25,272C223.75,250.333 256.25,231.917 290.75,216.75C325.25,201.583 361.167,190.083 398.5,182.25C435.833,174.417 473.667,170.5 512,170.5C550,170.5 587.583,174.417 624.75,182.25C661.917,190.083 697.75,201.5 732.25,216.5C766.75,231.5 799.417,249.917 830.25,271.75C861.083,293.583 889.083,318.25 914.25,345.75C939.417,373.25 961.25,403.5 979.75,436.5C998.25,469.5 1012.5,504.833 1022.5,542.5C1023.5,546.167 1024,550 1024,554C1024,566 1019.92,576.083 1011.75,584.25C1003.58,592.417 993.5,596.5 981.5,596.5C971.5,596.5 962.917,593.667 955.75,588C948.583,582.333 943.333,574.833 940,565.5C937,556.167 934.083,547.5 931.25,539.5C928.417,531.5 925.5,523.583 922.5,515.75C919.5,507.917 916.167,500.167 912.5,492.5C908.833,484.833 904.333,476.667 899,468C879.333,435 855.583,405.417 827.75,379.25C799.917,353.083 769.333,330.917 736,312.75C702.667,294.583 667.417,280.583 630.25,270.75C593.083,260.917 555.5,256 517.5,256L506.5,256C468.5,256 430.917,260.917 393.75,270.75C356.583,280.583 321.333,294.667 288,313C254.667,331.333 224,353.583 196,379.75C168,405.917 144.333,435.5 125,468.5C119.667,477.167 115.167,485.417 111.5,493.25C107.833,501.083 104.5,508.833 101.5,516.5C98.5,524.167 95.5833,532 92.75,540C89.9167,548 87,556.667 84,566C80.6667,575.333 75.5,582.917 68.5,588.75C61.5,594.583 52.8333,597.5 42.5,597.5C36.8333,597.5 31.4167,596.333 26.25,594C21.0833,591.667 16.5833,588.583 12.75,584.75C8.91667,580.917 5.83333,576.417 3.5,571.25C1.16667,566.083 0,560.5 0,554.5ZM256,597.5L256,592.5C256,557.833 262.917,525.25 276.75,494.75C290.583,464.25 309.25,437.667 332.75,415C356.25,392.333 383.417,374.417 414.25,361.25C445.083,348.083 477.667,341.5 512,341.5C547.333,341.5 580.583,348.167 611.75,361.5C642.917,374.833 670.083,393.083 693.25,416.25C716.417,439.417 734.667,466.583 748,497.75C761.333,528.917 768,562.167 768,597.5C768,632.833 761.333,666.083 748,697.25C734.667,728.417 716.417,755.583 693.25,778.75C670.083,801.917 642.917,820.167 611.75,833.5C580.583,846.833 547.333,853.5 512,853.5C476.667,853.5 443.417,846.833 412.25,833.5C381.083,820.167 353.917,801.917 330.75,778.75C307.583,755.583 289.333,728.417 276,697.25C262.667,666.083 256,632.833 256,597.5ZM682.5,597.5L682.5,594C682.5,571 677.917,549.333 668.75,529C659.583,508.667 647.167,490.917 631.5,475.75C615.833,460.583 597.667,448.583 577,439.75C556.333,430.917 534.667,426.5 512,426.5C488.333,426.5 466.167,431 445.5,440C424.833,449 406.833,461.25 391.5,476.75C376.167,492.25 364,510.417 355,531.25C346,552.083 341.5,574.167 341.5,597.5C341.5,621.167 346,643.333 355,664C364,684.667 376.167,702.667 391.5,718C406.833,733.333 424.833,745.5 445.5,754.5C466.167,763.5 488.333,768 512,768C535.333,768 557.417,763.5 578.25,754.5C599.083,745.5 617.167,733.333 632.5,718C647.833,702.667 660,684.667 669,664C678,643.333 682.5,621.167 682.5,597.5Z\\"\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t</TextBoxButton>\\n\\t\\t\\t{/if}\\n\\t\\t{/if}\\n\\t\\t<slot name=\\"buttons\\" {value} />\\n\\t</div>\\n\\t<slot />\\n</div>\\n\\n<style >.text-box{background-color:transparent;border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;color:var(--fds-text-primary);cursor:unset;flex:1 1 auto;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;inline-size:100%;line-height:20px;margin:0;min-block-size:30px;outline:none;padding-inline:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-box::-moz-placeholder{color:var(--fds-text-secondary);-moz-user-select:none;user-select:none}.text-box:-ms-input-placeholder{color:var(--fds-text-secondary);-ms-user-select:none;user-select:none}.text-box::placeholder{color:var(--fds-text-secondary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-box::-webkit-search-cancel-button,.text-box::-webkit-search-decoration,.text-box::-webkit-search-results-button,.text-box::-webkit-search-results-decoration{-webkit-appearance:none}.text-box::-ms-reveal{display:none}.text-box:disabled{color:var(--fds-text-disabled)}.text-box:disabled::-moz-placeholder{color:var(--fds-text-disabled)}.text-box:disabled:-ms-input-placeholder{color:var(--fds-text-disabled)}.text-box:disabled::placeholder{color:var(--fds-text-disabled)}.text-box-container{align-items:center;background-clip:padding-box;background-color:var(--fds-control-fill-default);border:1px solid var(--fds-control-stroke-default);border-radius:var(--fds-control-corner-radius);cursor:text;display:flex;inline-size:100%;position:relative}.text-box-container:hover{background-color:var(--fds-control-fill-secondary)}.text-box-container.disabled{background-color:var(--fds-control-fill-disabled);cursor:default}.text-box-container.disabled .text-box-underline{display:none}.text-box-container:focus-within{background-color:var(--fds-control-fill-input-active)}.text-box-container:focus-within .text-box::-moz-placeholder{color:var(--fds-text-tertiary)}.text-box-container:focus-within .text-box:-ms-input-placeholder{color:var(--fds-text-tertiary)}.text-box-container:focus-within .text-box::placeholder{color:var(--fds-text-tertiary)}.text-box-container:focus-within .text-box-underline:after{border-bottom:2px solid var(--fds-accent-default)}.text-box-container:focus-within :global(.text-box-clear-button){display:flex}.text-box-underline{block-size:calc(100% + 2px);border-radius:var(--fds-control-corner-radius);inline-size:calc(100% + 2px);inset-block-start:-1px;inset-inline-start:-1px;overflow:hidden;pointer-events:none;position:absolute}.text-box-underline:after{block-size:100%;border-bottom:1px solid var(--fds-control-strong-stroke-default);box-sizing:border-box;content:\\"\\";inline-size:100%;inset-block-end:0;inset-inline-start:0;position:absolute}.text-box-buttons{align-items:center;cursor:default;display:flex;flex:0 0 auto}.text-box-buttons >:global(.text-box-button){-webkit-margin-start:6px;margin-inline-start:6px}.text-box-buttons >:global(.text-box-button:first-of-type){-webkit-margin-start:0;margin-inline-start:0}.text-box-buttons >:global(.text-box-button:last-of-type){-webkit-margin-end:4px;margin-inline-end:4px}.text-box-buttons :global(.text-box-clear-button){display:none}</style>\\n"],"names":[],"mappings":"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"}',
};
const TextBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"value",
		"type",
		"placeholder",
		"clearButton",
		"searchButton",
		"revealButton",
		"readonly",
		"disabled",
		"class",
		"inputElement",
		"containerElement",
		"buttonsContainerElement",
		"clearButtonElement",
		"searchButtonElement",
		"revealButtonElement",
	]);
	let { value = "" } = $$props;
	let { type = "text" } = $$props;
	let { placeholder = void 0 } = $$props;
	let { clearButton = true } = $$props;
	let { searchButton = true } = $$props;
	let { revealButton = true } = $$props;
	let { readonly = false } = $$props;
	let { disabled = false } = $$props;
	let { class: className = "" } = $$props;
	let { inputElement = null } = $$props;
	let { containerElement = null } = $$props;
	let { buttonsContainerElement = null } = $$props;
	let { clearButtonElement = null } = $$props;
	let { searchButtonElement = null } = $$props;
	let { revealButtonElement = null } = $$props;
	createEventDispatcher();
	createEventForwarder(get_current_component(), [
		"clear",
		"search",
		"reveal",
		"outermousedown",
	]);
	const inputProps = {
		class: "text-box",
		disabled: disabled || void 0,
		readonly: readonly || void 0,
		placeholder: placeholder || void 0,
		...$$restProps,
	};
	if ($$props.value === void 0 && $$bindings.value && value !== void 0)
		$$bindings.value(value);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0)
		$$bindings.type(type);
	if (
		$$props.placeholder === void 0 &&
		$$bindings.placeholder &&
		placeholder !== void 0
	)
		$$bindings.placeholder(placeholder);
	if (
		$$props.clearButton === void 0 &&
		$$bindings.clearButton &&
		clearButton !== void 0
	)
		$$bindings.clearButton(clearButton);
	if (
		$$props.searchButton === void 0 &&
		$$bindings.searchButton &&
		searchButton !== void 0
	)
		$$bindings.searchButton(searchButton);
	if (
		$$props.revealButton === void 0 &&
		$$bindings.revealButton &&
		revealButton !== void 0
	)
		$$bindings.revealButton(revealButton);
	if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
		$$bindings.readonly(readonly);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
		$$bindings.disabled(disabled);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if (
		$$props.inputElement === void 0 &&
		$$bindings.inputElement &&
		inputElement !== void 0
	)
		$$bindings.inputElement(inputElement);
	if (
		$$props.containerElement === void 0 &&
		$$bindings.containerElement &&
		containerElement !== void 0
	)
		$$bindings.containerElement(containerElement);
	if (
		$$props.buttonsContainerElement === void 0 &&
		$$bindings.buttonsContainerElement &&
		buttonsContainerElement !== void 0
	)
		$$bindings.buttonsContainerElement(buttonsContainerElement);
	if (
		$$props.clearButtonElement === void 0 &&
		$$bindings.clearButtonElement &&
		clearButtonElement !== void 0
	)
		$$bindings.clearButtonElement(clearButtonElement);
	if (
		$$props.searchButtonElement === void 0 &&
		$$bindings.searchButtonElement &&
		searchButtonElement !== void 0
	)
		$$bindings.searchButtonElement(searchButtonElement);
	if (
		$$props.revealButtonElement === void 0 &&
		$$bindings.revealButtonElement &&
		revealButtonElement !== void 0
	)
		$$bindings.revealButtonElement(revealButtonElement);
	$$result.css.add(css$1);
	let $$settled;
	let $$rendered;
	let previous_head = $$result.head;
	do {
		$$settled = true;
		$$result.head = previous_head;
		$$rendered = ` <div class="${[
			"text-box-container " + escape(className, true) + " svelte-8l6kgi",
			disabled ? "disabled" : "",
		]
			.join(" ")
			.trim()}"${add_attribute("this", containerElement, 0)}>  ${type === "text" ? `<input${spread([{ type: "text" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "number" ? `<input${spread([{ type: "number" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "search" ? `<input${spread([{ type: "search" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "password" ? `<input${spread([{ type: "password" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "email" ? `<input${spread([{ type: "email" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "tel" ? `<input${spread([{ type: "tel" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "url" ? `<input${spread([{ type: "url" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "date" ? `<input${spread([{ type: "date" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "datetime-local" ? `<input${spread([{ type: "datetime-local" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "month" ? `<input${spread([{ type: "month" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "time" ? `<input${spread([{ type: "time" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : `${type === "week" ? `<input${spread([{ type: "week" }, escape_object(inputProps)], { classes: "svelte-8l6kgi" })}${add_attribute("value", value, 0)}${add_attribute("this", inputElement, 0)}>` : ``}`}`}`}`}`}`}`}`}`}`}`} <div class="text-box-underline svelte-8l6kgi"></div> <div class="text-box-buttons svelte-8l6kgi"${add_attribute("this", buttonsContainerElement, 0)}>${
			!disabled
				? `${
						clearButton && value && !readonly
							? `${validate_component(TextBoxButton, "TextBoxButton").$$render(
									$$result,
									{
										class: "text-box-clear-button",
										"aria-label": "Clear value",
										element: clearButtonElement,
									},
									{
										element: $$value => {
											clearButtonElement = $$value;
											$$settled = false;
										},
									},
									{
										default: () => {
											return `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="currentColor" d="M2.08859 2.21569L2.14645 2.14645C2.32001 1.97288 2.58944 1.9536 2.78431 2.08859L2.85355 2.14645L6 5.293L9.14645 2.14645C9.34171 1.95118 9.65829 1.95118 9.85355 2.14645C10.0488 2.34171 10.0488 2.65829 9.85355 2.85355L6.707 6L9.85355 9.14645C10.0271 9.32001 10.0464 9.58944 9.91141 9.78431L9.85355 9.85355C9.67999 10.0271 9.41056 10.0464 9.21569 9.91141L9.14645 9.85355L6 6.707L2.85355 9.85355C2.65829 10.0488 2.34171 10.0488 2.14645 9.85355C1.95118 9.65829 1.95118 9.34171 2.14645 9.14645L5.293 6L2.14645 2.85355C1.97288 2.67999 1.9536 2.41056 2.08859 2.21569L2.14645 2.14645L2.08859 2.21569Z"></path></svg>`;
										},
									},
								)}`
							: ``
					} ${
						type === "search" && searchButton
							? `${validate_component(TextBoxButton, "TextBoxButton").$$render(
									$$result,
									{
										"aria-label": "Search",
										element: searchButtonElement,
									},
									{
										element: $$value => {
											searchButtonElement = $$value;
											$$settled = false;
										},
									},
									{
										default: () => {
											return `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M5.00038 1C2.79103 1 1 2.7909 1 5.00008C1 7.20927 2.79103 9.00017 5.00038 9.00017C5.92463 9.00017 6.77568 8.68675 7.45302 8.1604L10.1464 10.8536C10.3416 11.0488 10.6583 11.0488 10.8535 10.8536C11.0488 10.6583 11.0488 10.3417 10.8535 10.1464L8.16028 7.45337C8.68705 6.77595 9.00075 5.92465 9.00075 5.00008C9.00075 2.7909 7.20972 1 5.00038 1ZM2.00009 5.00008C2.00009 3.34319 3.34337 2.00002 5.00038 2.00002C6.65739 2.00002 8.00066 3.34319 8.00066 5.00008C8.00066 6.65697 6.65739 8.00015 5.00038 8.00015C3.34337 8.00015 2.00009 6.65697 2.00009 5.00008Z" fill="currentColor"></path></svg>`;
										},
									},
								)}`
							: ``
					} ${
						type === "password" && value && revealButton
							? `${validate_component(TextBoxButton, "TextBoxButton").$$render(
									$$result,
									{
										"aria-label": "Reveal password",
										element: revealButtonElement,
									},
									{
										element: $$value => {
											revealButtonElement = $$value;
											$$settled = false;
										},
									},
									{
										default: () => {
											return `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 171 1024 683"><path d="M0,554.5C0,550.833 0.5,547.167 1.5,543.5C11.5,505.833 25.75,470.417 44.25,437.25C62.75,404.083 84.5833,373.667 109.75,346C134.917,318.333 162.75,293.667 193.25,272C223.75,250.333 256.25,231.917 290.75,216.75C325.25,201.583 361.167,190.083 398.5,182.25C435.833,174.417 473.667,170.5 512,170.5C550,170.5 587.583,174.417 624.75,182.25C661.917,190.083 697.75,201.5 732.25,216.5C766.75,231.5 799.417,249.917 830.25,271.75C861.083,293.583 889.083,318.25 914.25,345.75C939.417,373.25 961.25,403.5 979.75,436.5C998.25,469.5 1012.5,504.833 1022.5,542.5C1023.5,546.167 1024,550 1024,554C1024,566 1019.92,576.083 1011.75,584.25C1003.58,592.417 993.5,596.5 981.5,596.5C971.5,596.5 962.917,593.667 955.75,588C948.583,582.333 943.333,574.833 940,565.5C937,556.167 934.083,547.5 931.25,539.5C928.417,531.5 925.5,523.583 922.5,515.75C919.5,507.917 916.167,500.167 912.5,492.5C908.833,484.833 904.333,476.667 899,468C879.333,435 855.583,405.417 827.75,379.25C799.917,353.083 769.333,330.917 736,312.75C702.667,294.583 667.417,280.583 630.25,270.75C593.083,260.917 555.5,256 517.5,256L506.5,256C468.5,256 430.917,260.917 393.75,270.75C356.583,280.583 321.333,294.667 288,313C254.667,331.333 224,353.583 196,379.75C168,405.917 144.333,435.5 125,468.5C119.667,477.167 115.167,485.417 111.5,493.25C107.833,501.083 104.5,508.833 101.5,516.5C98.5,524.167 95.5833,532 92.75,540C89.9167,548 87,556.667 84,566C80.6667,575.333 75.5,582.917 68.5,588.75C61.5,594.583 52.8333,597.5 42.5,597.5C36.8333,597.5 31.4167,596.333 26.25,594C21.0833,591.667 16.5833,588.583 12.75,584.75C8.91667,580.917 5.83333,576.417 3.5,571.25C1.16667,566.083 0,560.5 0,554.5ZM256,597.5L256,592.5C256,557.833 262.917,525.25 276.75,494.75C290.583,464.25 309.25,437.667 332.75,415C356.25,392.333 383.417,374.417 414.25,361.25C445.083,348.083 477.667,341.5 512,341.5C547.333,341.5 580.583,348.167 611.75,361.5C642.917,374.833 670.083,393.083 693.25,416.25C716.417,439.417 734.667,466.583 748,497.75C761.333,528.917 768,562.167 768,597.5C768,632.833 761.333,666.083 748,697.25C734.667,728.417 716.417,755.583 693.25,778.75C670.083,801.917 642.917,820.167 611.75,833.5C580.583,846.833 547.333,853.5 512,853.5C476.667,853.5 443.417,846.833 412.25,833.5C381.083,820.167 353.917,801.917 330.75,778.75C307.583,755.583 289.333,728.417 276,697.25C262.667,666.083 256,632.833 256,597.5ZM682.5,597.5L682.5,594C682.5,571 677.917,549.333 668.75,529C659.583,508.667 647.167,490.917 631.5,475.75C615.833,460.583 597.667,448.583 577,439.75C556.333,430.917 534.667,426.5 512,426.5C488.333,426.5 466.167,431 445.5,440C424.833,449 406.833,461.25 391.5,476.75C376.167,492.25 364,510.417 355,531.25C346,552.083 341.5,574.167 341.5,597.5C341.5,621.167 346,643.333 355,664C364,684.667 376.167,702.667 391.5,718C406.833,733.333 424.833,745.5 445.5,754.5C466.167,763.5 488.333,768 512,768C535.333,768 557.417,763.5 578.25,754.5C599.083,745.5 617.167,733.333 632.5,718C647.833,702.667 660,684.667 669,664C678,643.333 682.5,621.167 682.5,597.5Z" fill="currentColor"></path></svg>`;
										},
									},
								)}`
							: ``
					}`
				: ``
		} ${slots.buttons ? slots.buttons({ value }) : ``}</div> ${slots.default ? slots.default({}) : ``} </div>`;
	} while (!$$settled);
	return $$rendered;
});
const css = {
	code: ".docs.svelte-j42yxw.svelte-j42yxw{display:flex;background-color:var(--fds-solid-background-base)}.docs.svelte-j42yxw .markdown-body.svelte-j42yxw{font-size:1.6rem;line-height:2.6rem;max-inline-size:1000px}.page.svelte-j42yxw.svelte-j42yxw{display:flex;flex-direction:column;flex:1 1 auto;border-block-start:1px solid var(--fds-card-stroke-default);border-inline-start:1px solid var(--fds-card-stroke-default);border-top-left-radius:var(--fds-overlay-corner-radius);background-color:var(--fds-layer-background-default);background-clip:padding-box}.page-inner.svelte-j42yxw.svelte-j42yxw{padding:44px 56px;view-transition-name:docs-content}.page.svelte-j42yxw header.svelte-j42yxw{display:flex;justify-content:space-between;align-items:center;margin-block-end:-20px;color:var(--fds-text-tertiary);white-space:nowrap}.page.svelte-j42yxw header span.svelte-j42yxw{text-overflow:ellipsis;overflow:hidden}.page.svelte-j42yxw .header-right.svelte-j42yxw{display:flex;align-items:center}.svelte-j42yxw.svelte-j42yxw::view-transition-old(docs-content),.svelte-j42yxw.svelte-j42yxw::view-transition-new(docs-content){animation-duration:300ms}.sidebar.svelte-j42yxw.svelte-j42yxw{display:flex;flex-direction:column;flex:0 0 auto;inline-size:316px;padding:0 4px}.sidebar.svelte-j42yxw .tree-view .list-item.selected::before{view-transition-name:active-sidebar-marker}.search.svelte-j42yxw.svelte-j42yxw{position:sticky;inset-block-start:0;z-index:1;margin:4px 12px 12px;background-color:var(--fds-solid-background-base)}.search.svelte-j42yxw hr.svelte-j42yxw{margin:12px 0 0;border:none;border-block-start:1px solid var(--fds-divider-stroke-default)}.search-mobile.svelte-j42yxw.svelte-j42yxw{display:none;padding:12px;border-block-end:1px solid var(--fds-divider-stroke-default)}.autosuggest-wrapper.svelte-j42yxw.svelte-j42yxw{position:relative}.autosuggest-flyout.svelte-j42yxw.svelte-j42yxw{position:absolute;inset-block-start:100%;inset-inline-start:0;z-index:10;inline-size:100%;max-block-size:350px;padding:2px 0;border:1px solid var(--fds-surface-stroke-flyout);border-radius:0 0 var(--fds-overlay-corner-radius) var(--fds-overlay-corner-radius);background-color:var(--fds-solid-background-quarternary);box-shadow:var(--fds-flyout-shadow)}@media screen and (width < 648px){.docs.svelte-j42yxw.svelte-j42yxw{flex-direction:column;margin-block-start:2px;border-block-start:1px solid var(--fds-card-stroke-default)}.sidebar.svelte-j42yxw.svelte-j42yxw{display:none}.page.svelte-j42yxw.svelte-j42yxw{border:none;border-radius:0}.page-inner.svelte-j42yxw.svelte-j42yxw{padding:16px 24px 24px}.search-mobile.svelte-j42yxw.svelte-j42yxw{display:block}}",
	map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { fly } from \\"svelte/transition\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport { page } from \\"$app/stores\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { links } from \\"$data/links\\";\\nimport { defaultI18nValues, externalLink, Metadata, TreeView } from \\"$lib\\";\\nimport { Button, ListItem, TextBox } from \\"fluent-svelte\\";\\nexport let data;\\n$: ({ docs, pagePath, docsPages, currentPage } = data);\\nlet value = \\"\\";\\nlet searchQuery = \\"\\";\\nlet searchFocused = false;\\nlet autoSuggestVisible = false;\\nlet selection = 0;\\n// Name of the current page used in <title>\\n$: pageTitle = currentPage.title;\\n// Basic search matching for filtering docs pages\\n$: searchResults = docsPages.filter(page => page.title\\n    .toLowerCase()\\n    .replace(/ /gi, \\"\\")\\n    .includes((searchQuery ?? \\"\\").toLowerCase().replace(/ /gi, \\"\\")));\\n// Determines if the auto-suggest flyout should be shown\\n$: if (searchQuery && searchFocused)\\n    autoSuggestVisible = true;\\n// Since we can\'t use bind:value and have our clear button work, the best way is through this handler\\nconst updateSearchQuery = () => (searchQuery = value);\\n// Handler for keyboard navigation in the search autocomplete flyout\\nconst handleSearchKeys = (e) => {\\n    const { key } = e;\\n    if (key === \\"ArrowUp\\" || key === \\"ArrowDown\\")\\n        e.preventDefault();\\n    if (key === \\"Enter\\") {\\n        if (searchResults.length > 0 &&\\n            $page.url.pathname !== `/docs${searchResults[selection].path}`)\\n            goto(`/docs${searchResults[selection].path}`, {\\n                keepFocus: true,\\n            });\\n    }\\n    else if (key === \\"ArrowDown\\") {\\n        selection++;\\n        if (selection > searchResults.length - 1)\\n            selection = 0;\\n    }\\n    else if (key === \\"ArrowUp\\") {\\n        selection--;\\n        if (selection < 0)\\n            selection = searchResults.length - 1;\\n    }\\n};\\n// Action for handling clicks outside a DOM node\\nconst clickOutside = (node, eventHandler) => {\\n    const handleClick = (event) => {\\n        const path = event.composedPath();\\n        if (!path.includes(node))\\n            eventHandler();\\n    };\\n    document.addEventListener(\\"click\\", handleClick);\\n    return {\\n        destroy() {\\n            document.removeEventListener(\\"click\\", handleClick);\\n        },\\n    };\\n};\\nlet minimal = false;\\nonMount(() => {\\n    const params = new URLSearchParams(window.location.search);\\n    minimal = params.has(\\"minimal\\");\\n});\\n</script>\\r\\n\\r\\n<Metadata\\r\\n\\ttitle={pageTitle\\r\\n\\t\\t? $_(\\"metadata.docs_page\\", {\\r\\n\\t\\t\\t\\tvalues: { title: pageTitle, FilesName: \\"Files\\" },\\r\\n\\t\\t\\t})\\r\\n\\t\\t: $_(\\"metadata.docs_home\\", defaultI18nValues)}\\r\\n\\timage=\\"docs\\"\\r\\n/>\\r\\n\\r\\n<section class=\\"docs\\">\\r\\n\\t{#if !minimal}\\r\\n\\t\\t<aside class=\\"sidebar\\">\\r\\n\\t\\t\\t<div class=\\"search\\">\\r\\n\\t\\t\\t\\t<div\\r\\n\\t\\t\\t\\t\\tclass=\\"autosuggest-wrapper\\"\\r\\n\\t\\t\\t\\t\\tuse:clickOutside={() => (autoSuggestVisible = false)}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<TextBox\\r\\n\\t\\t\\t\\t\\t\\tbind:value\\r\\n\\t\\t\\t\\t\\t\\tflyoutVisible={autoSuggestVisible}\\r\\n\\t\\t\\t\\t\\t\\ton:clear={updateSearchQuery}\\r\\n\\t\\t\\t\\t\\t\\ton:focus={() => (searchFocused = true)}\\r\\n\\t\\t\\t\\t\\t\\ton:input={updateSearchQuery}\\r\\n\\t\\t\\t\\t\\t\\ton:keydown={handleSearchKeys}\\r\\n\\t\\t\\t\\t\\t\\ton:search={() => {\\r\\n\\t\\t\\t\\t\\t\\t\\tif (\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tsearchResults.length > 0 &&\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t$page.url.pathname !== `/docs${searchResults[selection].path}`\\r\\n\\t\\t\\t\\t\\t\\t\\t)\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tgoto(`/docs${searchResults[selection].path}`, {\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tkeepFocus: true,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t\\t\\t\\t}}\\r\\n\\t\\t\\t\\t\\t\\tplaceholder={$_(\\"docs.search_docs\\", defaultI18nValues)}\\r\\n\\t\\t\\t\\t\\t\\ttype=\\"search\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t{#if autoSuggestVisible}\\r\\n\\t\\t\\t\\t\\t\\t<div class=\\"autosuggest-flyout scroller\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t{#if searchResults.length > 0}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{#each searchResults as { title, path }, i}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<ListItem selected={selection === i} href=\\"/docs{path}\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{title}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</ListItem>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<ListItem\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"docs.autocomplete_empty\\", defaultI18nValues)}</ListItem\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<hr />\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<TreeView tree={docs} />\\r\\n\\t\\t</aside>\\r\\n\\t{/if}\\r\\n\\t<article class=\\"page\\">\\r\\n\\t\\t<div class=\\"search-mobile\\">\\r\\n\\t\\t\\t<div\\r\\n\\t\\t\\t\\tclass=\\"autosuggest-wrapper\\"\\r\\n\\t\\t\\t\\tuse:clickOutside={() => (autoSuggestVisible = false)}\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t<TextBox\\r\\n\\t\\t\\t\\t\\tbind:value\\r\\n\\t\\t\\t\\t\\tflyoutVisible={autoSuggestVisible}\\r\\n\\t\\t\\t\\t\\ton:clear={updateSearchQuery}\\r\\n\\t\\t\\t\\t\\ton:focus={() => (searchFocused = true)}\\r\\n\\t\\t\\t\\t\\ton:input={updateSearchQuery}\\r\\n\\t\\t\\t\\t\\ton:keydown={handleSearchKeys}\\r\\n\\t\\t\\t\\t\\ton:search={() => {\\r\\n\\t\\t\\t\\t\\t\\tif (\\r\\n\\t\\t\\t\\t\\t\\t\\tsearchResults.length > 0 &&\\r\\n\\t\\t\\t\\t\\t\\t\\t$page.url.pathname !== `/docs${searchResults[selection].path}`\\r\\n\\t\\t\\t\\t\\t\\t)\\r\\n\\t\\t\\t\\t\\t\\t\\tgoto(`/docs${searchResults[selection].path}`, {\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tkeepFocus: true,\\r\\n\\t\\t\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t\\t\\t}}\\r\\n\\t\\t\\t\\t\\tplaceholder=\\"Search Documentation\\"\\r\\n\\t\\t\\t\\t\\ttype=\\"search\\"\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{#if autoSuggestVisible}\\r\\n\\t\\t\\t\\t\\t<div class=\\"autosuggest-flyout scroller\\">\\r\\n\\t\\t\\t\\t\\t\\t{#if searchResults.length > 0}\\r\\n\\t\\t\\t\\t\\t\\t\\t{#each searchResults as { title, path }, i}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<ListItem selected={selection === i} href=\\"/docs{path}\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{title}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</ListItem>\\r\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t\\t\\t<ListItem\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"docs.autocomplete_empty\\", defaultI18nValues)}</ListItem\\r\\n\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"page-inner markdown-body\\">\\r\\n\\t\\t\\t<header>\\r\\n\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t{$page.url.pathname.split(\\"/\\").join(\\" / \\").substring(2)}\\r\\n\\t\\t\\t\\t\\t{$page.url.pathname === \\"/docs\\" ? \\" / overview\\" : \\"\\"}\\r\\n\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t{#if !minimal}\\r\\n\\t\\t\\t\\t\\t<div class=\\"header-right\\">\\r\\n\\t\\t\\t\\t\\t\\t<Button\\r\\n\\t\\t\\t\\t\\t\\t\\tvariant=\\"hyperlink\\"\\r\\n\\t\\t\\t\\t\\t\\t\\thref=\\"https://github.com/{links.github.owner}/{links.github\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t.siteRepo}/edit/main/src/routes/docs{currentPage.path}/+page.md\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t{...externalLink}\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"docs.edit_page\\", defaultI18nValues)}\\r\\n\\t\\t\\t\\t\\t\\t</Button>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</header>\\r\\n\\t\\t\\t<h1>{pageTitle}</h1>\\r\\n\\t\\t\\t<slot />\\r\\n\\t\\t</div>\\r\\n\\t</article>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.docs {\\n  display: flex;\\n  background-color: var(--fds-solid-background-base);\\n}\\n.docs .markdown-body {\\n  font-size: 1.6rem;\\n  line-height: 2.6rem;\\n  max-inline-size: 1000px;\\n}\\n\\n.page {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1 1 auto;\\n  border-block-start: 1px solid var(--fds-card-stroke-default);\\n  border-inline-start: 1px solid var(--fds-card-stroke-default);\\n  border-top-left-radius: var(--fds-overlay-corner-radius);\\n  background-color: var(--fds-layer-background-default);\\n  background-clip: padding-box;\\n}\\n.page-inner {\\n  padding: 44px 56px;\\n  view-transition-name: docs-content;\\n}\\n.page header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-block-end: -20px;\\n  color: var(--fds-text-tertiary);\\n  white-space: nowrap;\\n}\\n.page header span {\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n}\\n.page .header-right {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n::view-transition-old(docs-content),\\n::view-transition-new(docs-content) {\\n  animation-duration: 300ms;\\n}\\n\\n.sidebar {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 0 0 auto;\\n  inline-size: 316px;\\n  padding: 0 4px;\\n}\\n.sidebar :global(.tree-view .list-item.selected::before) {\\n  view-transition-name: active-sidebar-marker;\\n}\\n\\n.search {\\n  position: sticky;\\n  inset-block-start: 0;\\n  z-index: 1;\\n  margin: 4px 12px 12px;\\n  background-color: var(--fds-solid-background-base);\\n}\\n.search hr {\\n  margin: 12px 0 0;\\n  border: none;\\n  border-block-start: 1px solid var(--fds-divider-stroke-default);\\n}\\n.search-mobile {\\n  display: none;\\n  padding: 12px;\\n  border-block-end: 1px solid var(--fds-divider-stroke-default);\\n}\\n\\n.autosuggest-wrapper {\\n  position: relative;\\n}\\n.autosuggest-flyout {\\n  position: absolute;\\n  inset-block-start: 100%;\\n  inset-inline-start: 0;\\n  z-index: 10;\\n  inline-size: 100%;\\n  max-block-size: 350px;\\n  padding: 2px 0;\\n  border: 1px solid var(--fds-surface-stroke-flyout);\\n  border-radius: 0 0 var(--fds-overlay-corner-radius) var(--fds-overlay-corner-radius);\\n  background-color: var(--fds-solid-background-quarternary);\\n  box-shadow: var(--fds-flyout-shadow);\\n}\\n\\n@media screen and (width < 648px) {\\n  .docs {\\n    flex-direction: column;\\n    margin-block-start: 2px;\\n    border-block-start: 1px solid var(--fds-card-stroke-default);\\n  }\\n  .sidebar {\\n    display: none;\\n  }\\n  .page {\\n    border: none;\\n    border-radius: 0;\\n  }\\n  .page-inner {\\n    padding: 16px 24px 24px;\\n  }\\n  .search-mobile {\\n    display: block;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"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"}',
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let docs;
	let pagePath;
	let docsPages;
	let currentPage;
	let pageTitle;
	let $page, $$unsubscribe_page;
	let $_, $$unsubscribe__;
	$$unsubscribe_page = subscribe(page, value2 => ($page = value2));
	$$unsubscribe__ = subscribe($format, value2 => ($_ = value2));
	let { data } = $$props;
	let value = "";
	let searchQuery = "";
	let autoSuggestVisible = false;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0)
		$$bindings.data(data);
	$$result.css.add(css);
	let $$settled;
	let $$rendered;
	let previous_head = $$result.head;
	do {
		$$settled = true;
		$$result.head = previous_head;
		({ docs, pagePath, docsPages, currentPage } = data);
		pageTitle = currentPage.title;
		docsPages.filter(page2 =>
			page2.title
				.toLowerCase()
				.replace(/ /gi, "")
				.includes(searchQuery.toLowerCase().replace(/ /gi, "")),
		);
		$$rendered = `${validate_component(Metadata, "Metadata").$$render(
			$$result,
			{
				title: pageTitle
					? $_("metadata.docs_page", {
							values: { title: pageTitle, FilesName: "Files" },
						})
					: $_("metadata.docs_home", defaultI18nValues),
				image: "docs",
			},
			{},
			{},
		)} <section class="docs svelte-j42yxw">${`<aside class="sidebar svelte-j42yxw"><div class="search svelte-j42yxw"><div class="autosuggest-wrapper svelte-j42yxw">${validate_component(
			TextBox,
			"TextBox",
		).$$render(
			$$result,
			{
				flyoutVisible: autoSuggestVisible,
				placeholder: $_("docs.search_docs", defaultI18nValues),
				type: "search",
				value,
			},
			{
				value: $$value => {
					value = $$value;
					$$settled = false;
				},
			},
			{},
		)} ${``}</div> <hr class="svelte-j42yxw"></div> ${validate_component(TreeView, "TreeView").$$render($$result, { tree: docs }, {}, {})}</aside>`} <article class="page svelte-j42yxw"><div class="search-mobile svelte-j42yxw"><div class="autosuggest-wrapper svelte-j42yxw">${validate_component(
			TextBox,
			"TextBox",
		).$$render(
			$$result,
			{
				flyoutVisible: autoSuggestVisible,
				placeholder: "Search Documentation",
				type: "search",
				value,
			},
			{
				value: $$value => {
					value = $$value;
					$$settled = false;
				},
			},
			{},
		)} ${``}</div></div> <div class="page-inner markdown-body svelte-j42yxw"><header class="svelte-j42yxw"><span class="svelte-j42yxw">${escape($page.url.pathname.split("/").join(" / ").substring(2))} ${escape($page.url.pathname === "/docs" ? " / overview" : "")}</span> ${`<div class="header-right svelte-j42yxw">${validate_component(
			Button,
			"Button",
		).$$render(
			$$result,
			Object.assign(
				{},
				{ variant: "hyperlink" },
				{
					href:
						"https://github.com/" +
						links.github.owner +
						"/" +
						links.github.siteRepo +
						"/edit/main/src/routes/docs" +
						currentPage.path +
						"/+page.md",
				},
				externalLink,
			),
			{},
			{
				default: () => {
					return `${escape($_("docs.edit_page", defaultI18nValues))}`;
				},
			},
		)}</div>`}</header> <h1 class="svelte-j42yxw">${escape(pageTitle)}</h1> ${slots.default ? slots.default({}) : ``}</div></article> </section>`;
	} while (!$$settled);
	$$unsubscribe_page();
	$$unsubscribe__();
	return $$rendered;
});
export { Layout as default };
