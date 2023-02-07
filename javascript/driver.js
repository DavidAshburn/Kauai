import * as Dome from './dome.js';

const manifest = Dome.state();
const body = Dome.add('body',manifest.add(),'html');

body.addChild(Dome.add('p',manifest.add(),body.id,'subtitle',"subtitle text"));
body.addChild(Dome.add('div',manifest.add(),body.id,'blank',"div text"));

body.unshiftChild(Dome.add('h1',manifest.add(),body.id,'title',"Welcome Stranger"));


body.draw();
body.log();

manifest.log();
