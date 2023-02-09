import * as Dome from './dome.js';

const vDom = Dome.init();

vDom.add('p',0,'title flex-col1','Title Text');

let maindiv_id = vDom.add('div',0,'flex-col1');
let maindiv = vDom.root.dig(maindiv_id);
maindiv.addChild(Dome.dom_el('p','subtitle','subtitle1'))
maindiv.addChild(Dome.dom_el('p','subtitle','subtitle2'))

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