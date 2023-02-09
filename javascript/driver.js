import * as Dome from './dome.js';

const vDom = Dome.init();

vDom.add('p',0,'title flex-col1','Title Text');

let maindiv = Dome.fragment('div','flex-col1');
let mdsub = Dome.dom_el('p','subtfitle','subtitle 1');
let mdsub2 = Dome.dom_el('p','subtfitle','subtitle 2');

maindiv.add(maindiv.root,mdsub);
maindiv.add(maindiv.root,mdsub2);

vDom.compose(maindiv, 0);
let maindiv_id = maindiv.root.id;

let frag = Dome.fragment('div','flex-col1');

let ftitle = Dome.dom_el('p','title',"fragment title");
frag.add(frag.root,ftitle);

let fsubtitle = Dome.dom_el('p','subtitle',"fragment subtitle");
frag.add(frag.root,fsubtitle);

let subdiv = Dome.dom_el('div','flex-row');
frag.add(frag.root,subdiv);

subdiv.addChild(Dome.dom_el('p','list-item','inside fragdiv 1'));
subdiv.addChild(Dome.dom_el('p','list-item','inside fragdiv 2'));

vDom.compose(frag,maindiv_id);

vDom.draw();

/*
{root
	{title
	}
	{maindiv
		subtitle1
		subtitle2
		{frag
			fragment title
			fragment subtitle
			{subdiv
				inside subdiv1
				inside subdiv2
			}
		}
	}
}
*/