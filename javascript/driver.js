import { DomEl } from './dome.js';

let page = new DomEl('body','body','html');

page.append(new DomEl('p','subtitle','body','subtitle',"subtitle text"));
page.append(new DomEl('div','inner','body','blank'));



let first = new DomEl('p','title','body','title',"Title text");
page.prepend(first);

page.draw();

console.log("hi");
