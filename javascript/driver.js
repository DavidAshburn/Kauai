import * as Kauai from './kauai.js';
import * as Fragments from './fragments.js';

const vDom = Kauai.init();

let header = "Kauai.js";
let tagline = "Take a vacation.";
vDom.compose(Fragments.title(header,tagline), 0);

vDom.compose(Fragments.subsection(), 0);

vDom.compose(Fragments.add_kids(), 0);

vDom.draw();