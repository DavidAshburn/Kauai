import * as Kauai from './kauai.js';
import * as Fragments from './fragments.js';

const vDom = Kauai.init();
const remove = vDom.get_remove();

let header = "Kauai.js";
let tagline = "Take a vacation.";
vDom.render(Fragments.title(header,tagline));

// events branch //
vDom.render(Fragments.button(remove));

vDom.draw();