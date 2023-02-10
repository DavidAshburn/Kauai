import * as Kauai from './kauai.js'

export function title(main,sub) {
	let title = Kauai.dom_el('p','title',main);
	let row = Kauai.dom_el('div','flex-row');

	row.addChild(Kauai.dom_el('p','subtitle',sub));

	return Kauai.fragment('div','flex-col1',title,row);
}

// events branch //
export function button(func) {
	let frag = Kauai.fragment('button','btn-green','Click Me');
	frag.root.addListener('click',() => {
		console.log("clicked me");
		func(5);
	});
	return frag;
}