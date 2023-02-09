import * as Kauai from './kauai.js'

export function title(main,sub) {
	let frag = Kauai.fragment('div','flex-col1');
	let title = Kauai.dom_el('p','title',main);
	let row = Kauai.dom_el('div','flex-row');
	let mdsub = Kauai.dom_el('p','subtitle',sub);

	frag.add(title);
	frag.add(row);
	frag.add(mdsub,row);
	return frag;
}

export function subsection() {
	let frag = Kauai.fragment('div','flex-col1');
	let ftitle = Kauai.dom_el('p','title',"fragment title");
	let fsubtitle = Kauai.dom_el('p','subtitle',"fragment subtitle");
	let subdiv = Kauai.dom_el('div','flex-row');
	let subdiv1 = Kauai.dom_el('p','list-item','inside fragdiv 1');
	let subdiv2 = Kauai.dom_el('p','list-item','inside fragdiv 2');

	frag.add(ftitle);
	frag.add(fsubtitle);
	frag.add(subdiv);
	frag.add(subdiv1,subdiv)
	frag.add(subdiv2,subdiv);
	return frag;
}

//we can add direct children as part of the fragment constructor with a REST param
//or use frag.add(el,parent) to put them in later, and optionally specify the parent we want to nest within
export function add_kids() {
	let sub1 = Kauai.dom_el('p','subtitle','kid1');
	let sub2 = Kauai.dom_el('p','subtitle','kid2');
	let sub3 = Kauai.dom_el('div','flex-col');

	//
	sub3.addChild(Kauai.dom_el('h1','title','subsubh1'));
	//is equivalent to
	//frag.add(~~~);
	//placed after let frag below
	//

	let frag = Kauai.fragment('div','flex-row',sub1,sub2,sub3);

	//frag.add(Kauai.dom_el('h1','title','subsubh1'), sub3);

	return frag;
}