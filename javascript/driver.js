import * as Dome from './dome.js';
import * as Fragments from './fragments.js';

const vDom = Dome.init();

vDom.compose(Fragments.title(), 0);

vDom.compose(Fragments.subsection(), 0)

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