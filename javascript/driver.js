import * as Dome from './dome.js';

const vDom = Dome.init();

//add(type,parent,style="",text="")

vDom.add('p',0,'title flex-col1','Title Text');
let maindiv = vDom.add('div',0,'flex-col1');
vDom.add('p',maindiv,'subtitle','subtitle');
let removable = vDom.add('p',maindiv,'subtitle','and also this, remove later');
vDom.add('p',maindiv,'subtitle','leave this alone');

vDom.remove(removable);
vDom.draw();