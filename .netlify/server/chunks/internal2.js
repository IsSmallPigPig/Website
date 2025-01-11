import { w as listen, x as bubble } from "./ssr.js";
/* empty css                                             */
function uid(prefix) {
	return (
		prefix +
		String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
		Math.random().toString(16).slice(2) +
		Date.now().toString(16).split(".")[0]
	);
}
function createEventForwarder(component, exclude = []) {
	let $on;
	let events = [];
	component.$on = (eventType, callback) => {
		let destructor = () => {};
		if (exclude.includes(eventType)) {
			const callbacks =
				component.$$.callbacks[eventType] ||
				(component.$$.callbacks[eventType] = []);
			callbacks.push(callback);
			return () => {
				const index = callbacks.indexOf(callback);
				if (index !== -1) callbacks.splice(index, 1);
			};
		}
		if ($on) {
			destructor = $on(eventType, callback);
		} else {
			events.push([eventType, callback]);
		}
		return () => destructor();
	};
	return node => {
		const destructors = [];
		const forwardDestructors = {};
		const forward = e => bubble(component, e);
		$on = (eventType, callback) => {
			let handler = callback;
			let options = false;
			const off = listen(node, eventType, handler, options);
			const destructor = () => {
				off();
				const idx = destructors.indexOf(destructor);
				if (idx > -1) {
					destructors.splice(idx, 1);
				}
			};
			destructors.push(destructor);
			if (!(eventType in forwardDestructors)) {
				forwardDestructors[eventType] = listen(node, eventType, forward);
			}
			return destructor;
		};
		for (const event of events) {
			$on(event[0], event[1]);
		}
		return {
			destroy: () => {
				for (const destructor of destructors) {
					destructor();
				}
				for (let entry of Object.entries(forwardDestructors)) {
					entry[1]();
				}
			},
		};
	};
}
export { createEventForwarder as c, uid as u };
