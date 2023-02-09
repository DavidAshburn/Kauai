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

export function subsection() {
	let frag = Dome.fragment('div','flex-col1');
	let ftitle = Dome.dom_el('p','title',"fragment title");
	let fsubtitle = Dome.dom_el('p','subtitle',"fragment subtitle");
	let subdiv = Dome.dom_el('div','flex-row');

	frag.add(frag.root,ftitle);
	frag.add(frag.root,fsubtitle);
	frag.add(frag.root,subdiv);

	subdiv.addChild(Dome.dom_el('p','list-item','inside fragdiv 1'));
	subdiv.addChild(Dome.dom_el('p','list-item','inside fragdiv 2'));
	return frag;
}