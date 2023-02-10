import * as Kauai from './kauai.js'

export function title(main,sub) {
	let frag = Kauai.fragment('div','flex-col1');
	let title = Kauai.dom_el('p','title',main);
	let row = Kauai.dom_el('div','flex-row-even');
	let mdsub = Kauai.dom_el('p','subtitle',sub);

	frag.add(title);
	frag.add(row);
	frag.add(mdsub,row);
	return frag;
}

export function toylist() {

	let listainer = Kauai.dom_el('div','flex-list');

	listainer.addChild(Kauai.dom_el('h1','head','Toy List'));

	for(let i = 1; i < 10; i++) {
		listainer.addChild(Kauai.dom_el('p','item',`Item ${i}`));
	}

	return Kauai.fragment('div','flex-row-even',listainer);
}

//we can add direct children as part of the fragment constructor with a REST param
//or use frag.add(el,parent) to put them in later, and optionally specify the parent we want to nest within
function two_ways_to_add_child() {
	let sub1 = Kauai.dom_el('p','subtitle','kid1');
	let sub2 = Kauai.dom_el('p','subtitle','kid2');
	let sub3 = Kauai.dom_el('div','flex-col');

	//
	sub3.addChild(Kauai.dom_el('h1','title','subsubh1'));
	//is equivalent to
	//frag.add(~~~);
	//placed after let frag below
	//

	let frag = Kauai.fragment('div','flex-row-even',sub1,sub2,sub3);

	//frag.add(Kauai.dom_el('h1','title','subsubh1'), sub3);

	return frag;
}