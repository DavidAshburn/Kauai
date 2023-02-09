import * as Dome from './dome.js';

const vDom = Dome.init();

//add(type,parent,style="",text="")

vDom.add('p',0,'title flex-col1','Title Text');

let maindiv = vDom.add('div',0,'flex-col1');
vDom.add('p',maindiv,'subtitle','subtitle');
vDom.add('p',maindiv,'subtitle','leave this alone');


let frag = Dome.fragment('div','flex-wide');

let ftitle = frag.add(frag.root,Dome.dom_el('p','subtitle',"fragment subtitle"));

vDom.compose(frag,maindiv);

vDom.draw();