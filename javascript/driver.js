import * as Kauai from './kauai.js';
import * as Fragments from './fragments.js';

const vDom = Kauai.init();

let header = "Kauai.js";
let tagline = "Take a vacation.";
vDom.render(Fragments.title(header,tagline));

vDom.render(Fragments.toylist());

vDom.draw();