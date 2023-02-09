import * as Dome from './dome.js'

export function title() {
	let frag = Dome.fragment('div','flex-col1');
	let title = Dome.dom_el('p','title','Title Text');
	let row = Dome.dom_el('div','flex-row');
	let mdsub = Dome.dom_el('p','subtitle','subtitle 1');
	let mdsub2 = Dome.dom_el('p','subtitle','subtitle 2');

	frag.add(frag.root,title);
	frag.add(frag.root,row);
	frag.add(row,mdsub);
	frag.add(row,mdsub2);
	return frag;
}