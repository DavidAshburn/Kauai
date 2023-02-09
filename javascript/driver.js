import * as Dome from './dome.js';
import * as Fragments from './fragments.js';

const vDom = Dome.init();

let header = "Dome.js";
let tagline = "It's a real dumpster fire in here.";
vDom.compose(Fragments.title(header,tagline), 0);

vDom.compose(Fragments.subsection(), 0)

vDom.draw();