import * as Dome from './dome.js'

export function title(main,sub) {
	let frag = Dome.fragment('div','flex-col1');
	let title = Dome.dom_el('p','title',main);
	let row = Dome.dom_el('div','flex-row');
	let mdsub = Dome.dom_el('p','subtitle',sub);

	frag.add(title);
	frag.add(row);
	frag.add(mdsub,row);
	return frag;
}

export function subsection() {
	let frag = Dome.fragment('div','flex-col1');
	let ftitle = Dome.dom_el('p','title',"fragment title");
	let fsubtitle = Dome.dom_el('p','subtitle',"fragment subtitle");
	let subdiv = Dome.dom_el('div','flex-row');
	let subdiv1 = Dome.dom_el('p','list-item','inside fragdiv 1');
	let subdiv2 = Dome.dom_el('p','list-item','inside fragdiv 2');

	frag.add(ftitle);
	frag.add(fsubtitle);
	frag.add(subdiv);
	frag.add(subdiv1,subdiv)
	frag.add(subdiv2,subdiv);
	return frag;
}