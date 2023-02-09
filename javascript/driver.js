import * as Dome from './dome.js';
import { title } from './title.js';

const vDom = Dome.init();

vDom.compose(title(), 0);

let frag = Dome.fragment('div','flex-col1');

let ftitle = Dome.dom_el('p','title',"fragment title");
frag.add(frag.root,ftitle);

let fsubtitle = Dome.dom_el('p','subtitle',"fragment subtitle");
frag.add(frag.root,fsubtitle);

let subdiv = Dome.dom_el('div','flex-row');
frag.add(frag.root,subdiv);

subdiv.addChild(Dome.dom_el('p','list-item','inside fragdiv 1'));
subdiv.addChild(Dome.dom_el('p','list-item','inside fragdiv 2'));

vDom.compose(frag,0);

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