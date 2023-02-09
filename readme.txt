
I barely know how to use React and I've been hesitating to fully dive in. I think it looks messy and complicated compared to what I know in Ruby on Rails, so I'm making my own UI framework to better understand the problems React is trying to solve. Don't use this for anything, Kauai.js is an objectively horrible idea. I'm machining engine parts based on a half-remembered diagram.

We have a virtual DOM and a custom Set(IDgen) that can populate unique values and return them to give us IDs for elements when we render all our fragments into the DOM. I'm not using the IDs for anything yet, but they'll be useful later.

Fragments are just containers that deliver groups of virtual DOM elements to the vDOM object. There are a few functions we use to script out all the HTML elements without writing any HTML. There is no JSX involved, we call createElement through functions within the fragment script.

Dynamic content can be placed with these scripts but we need to redraw the element whenever there is an update, and that isn't implemented yet.

this will run on npm http-server without issue, it's a vanilla JS project with a couple custom modules.


//server startup
from /kauai directory
	'http-server ./ -c-1' 
	
	this will disable caching for reloading updates

//Actually using this thing.

driver.js calls Kauai.init() to establish our vDom and state object, it assembles our html page from Fragments with render(), and then calls draw() to put the vDOM onto the page.

init()
	creates vDom
	creates manifest which tracks and assigns ids to new elements

Fragments 
	are defined in a separate file and imported as building blocks
	adding paramaters will let us do whatever we want with these
	Fragments are the default method for adding to the vDom

	///////  fragments.js

	export function title(main,sub) {
	let frag = Kauai.fragment('div','flex-col1');
	let title = Kauai.dom_el('p','title',main);
	let row = Kauai.dom_el('div','flex-row');
	let mdsub = Kauai.dom_el('p','subtitle',sub);

	frag.add(title);
	frag.add(row);
	frag.add(mdsub,row);
	return frag;
	}

	//////

	In this example, we export the function to start and take in params for our title and subtitle text.
	we instantiate the Fragment, declare it's children, add them to their respective parent children[] arrays, then return the fragment.

	this returned fragment has elements with -1 for their id and parent values.
	render will bring in the IDgen named manifest, which allows us to assign unique ids to these as well as determine their parent ids.

DomEls
	these are the vDom representations of html elements, you can assign the type, css_classes and innerText, render() will set up the id and parent_id for you as long as the DomEl is part of a Fragment. 

	///////  kauai.js

	class DomEl
	constructor(type, id, parent, style = "", text = "")

	///////

	this only has a few basic methods, but importantly, style and text are optional.
	text in the params will make an inner Text node automatically.
	style is passed in as a string of class names separated by spaces.

	We create these, then append them to a Fragment object, then return that Fragment to driver.js, then call render() before drawing to set the ids in the html output

	
IDgens
	these are basically just Sets that generate the first available unique integer, add them to the list[], and return them to be assigned to DomEl.id
	They aren't used for much yet, but will be important when modifying the DOM and keeping everything synced up.
