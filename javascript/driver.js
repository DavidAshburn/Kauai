import { DomEl, IDgen } from './dome.js';

const manifest = new IDgen();
const body = new DomEl('body',manifest.add(),'html');

body.append(new DomEl('p',manifest.add(),body.id,'subtitle',"subtitle text"));
body.append(new DomEl('div',manifest.add(),body.id,'blank',"div text"));

body.prepend(new DomEl('h1',manifest.add(),body.id,'title',"Welcome Stranger"));


body.draw();
body.log();

manifest.log();
