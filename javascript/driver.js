import * as Dome from './dome.js';

const vDom = Dome.init();

//add(type,parent,style="",text="")

vDom.add('p',0,'title','Title Text');
vDom.add('div',0,'flex-wide');
vDom.add('p',2,'subtitle','subtitle');

vDom.draw();