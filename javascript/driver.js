import * as Kauai from './kauai.js';
import * as Fragments from './fragments.js';

const vDom = Kauai.init();

let header = "Kauai.js";
let tagline = "It's a real dumpster fire in here.";
vDom.compose(Fragments.title(header,tagline), 0);

vDom.compose(Fragments.subsection(), 0)

vDom.draw();