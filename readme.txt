
I don't know how to use React yet and I've been hesitating to dive in since most of the
videos I watch on it make it look like a real mess. Compared to Rails views and server-side rendering it seems sloppy and complicated. But, I'm clearly wrong, it's too popular to actually be bad. 

So, I'm making my own front-end JS framework to get a better idea of what goes into client-side rendering. I'm basing most of the design decisions on what I remember from videos and articles on React, which is a horrible idea. All I really know for sure is that there is a virtual DOM that gets redrawn every time a change is made to it. We only redraw the parts that change. I'm still working on selective updating and lifecycle event triggers.

I'm basically learning to be a mechanic by building a V6 motor in my garage and machining all the parts by hand.

configured for http-server at the moment, I'd like to code my own Node.js server and back-end as well. I will use an ORM package for database integration though. I'm inventing enough wheels as it is.


//server startup
from /kauai directory
	'http-server ./ -c-1' 
	
	this will disable caching for reloading updates

//Actually using this thing.

driver.js calls Kauai.init() to establish our vDom and state object, it assembles our html page from Fragments with compose(), and then calls draw() to put the vDOM onto the page.

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
	compose will bring in the IDgen named manifest, which allows us to assign unique ids to these as well as determine their parent ids.

DomEls
	these are the vDom representations of html elements, you can assign the type, css_classes and innerText, compose() will set up the id and parent_id for you as long as the DomEl is part of a Fragment. 

	///////  kauai.js

	class DomEl
	constructor(type, id, parent, style = "", text = "")

	///////

	this only has a few basic methods, but importantly, style and text are optional.
	text in the params will make an inner Text node automatically.
	style is passed in as a string of class names separated by spaces.

	We create these, then append them to a Fragment object, then return that Fragment to driver.js, then call compose() before drawing to set the ids in the html output

	
IDgens
	these are basically just Sets that generate the first available unique integer, add them to the list[], and return them to be assigned to DomEl.id
	This is our DOM state record.
