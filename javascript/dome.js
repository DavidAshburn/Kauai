
export function init() {
	return new vDom();
}

export function dom_el(type,style="",text="") {
	return new DomEl(type, -1, -1,style,text);
}

export function fragment(type,style="",text="") {
	return new Fragment(type,style,text);
}

class Fragment {
	constructor(type,style,text) {
		this.root = new DomEl(type,-1,-1,style,text);
	}

	add(new_el,dom_el = this.root) {
		dom_el.children.push(new_el);
	}

	assignIds(manifest) {
		const assignChildren = function(domel,manifest) {
			for(let child of domel.children) {
				child.id = manifest.add();
				child.parent = domel.id;
				assignChildren(child,manifest);
			}
		}
		this.root.id = manifest.add();
		assignChildren(this.root,manifest);
	}
}

class vDom {
	constructor() {
		this.manifest = new IDgen;
		this.root = new DomEl('body',0,'html');
		this.manifest.add();

		this.root_element = document.getElementById("0");
	}

	//log the DomEl with 'id'
	log(id) {
		console.log(this.root.dig(id));
	}

	// true/false
	has(id) {
		return this.manifest.has(id);
	}

	// true/false for success
	remove(id) {
		// if its in the manifest and removed from it
		if(this.manifest.remove(id)) {
			//dig for the DomEL with 'id' and remove it from it's parent
			let parent_id = this.root.dig(id).parent;
			this.root.dig(parent_id).removeChild(id);
			return true;
		}
		return false;
	}

	//returns DomEl with 'id' or false
	get(id) {
		if(id === 0) {
			return this.root;
		}
		if(this.manifest.has(id)) {
			return this.root.dig(id);
		}
		return false;
	}

	//this returns the new DomEl's id for reference later
	//DomEl's with text get a TextNode generated within them that is not a DomEl
	add(type,parent,style="",text="") {
		let found = this.get(parent);
		if(found === false) {
			return false;
		}
		let newID = this.manifest.add();
		found.addChild(new DomEl(type,newID,parent,style,text));
		return newID;
	}

	append(el) {
		let found = this.get(el.parent);
		if(found === false) {
			return false;
		}
		found.addChild(el);
		return true;
	}

	draw() {
		this.root.draw();
	}

	compose(fragment,parent) {
		fragment.root.parent = parent;
		fragment.assignIds(this.manifest);
		this.root.dig(parent).addChild(fragment.root);
	}
}

class DomEl {
	constructor(type, id, parent, style = "", text = "") {
		this.type = type;
		this.id = id;
		this.parent = parent;
		this.children = [];
		if(this.style !== "")
			this.style = style.split(' ');
		this.text = text;
	}
	
	addChild(el) {
		if(!el instanceof DomEl)
			return false;
		this.children.push(el);
		return true;
	} 

	removeChild(id) {
		for(let i = 0; i < this.children.length; i++) {
			if(this.children[i].id === id) {
				if(i === 0) {
					this.children.shift();
					return true;
				}
				if(i === this.children.length - 1) {
					this.children.pop();
					return true;
				}
				this.children = this.children.slice(0,i).concat(this.children.slice(i+1));
				return true;
			}
		}
		return false;
	}

	get(id) {
		for(let item of this.children) {
			if(item.id === id) {
				return item;
			}
		}
		return false;
	}

	dig(id) {
		if(id === this.id)
			return this;
		for(let item of this.children) {
			if(item.id === id) {
				return item;
			} else {
				let subdig = item.dig(id);
				if(subdig !== false) {
					return subdig;
				}
			}
		}
		return false;
	}

	draw() {
		let parent = document.getElementById(this.id);
		
		for(let item of this.children) {
			let child = document.createElement(item.type);


			if(item.style !== "") {
				for(let css_class of item.style) {
					child.classList.add(css_class);
				}
			}
			child.id = item.id;
			if(item.text !== "") {
				child.appendChild(document.createTextNode(item.text));
			}
			parent.appendChild(child);
			item.draw();
		}
	}
}

//unique id generator to label all our elements
class IDgen {
	constructor() {
		this.list = [];
	}

	has(val) {
		for(let item of this.list) {
			if(item === val)
				return true;
		}
		return false;
	}

	add() {
		let i = 0;
		while(this.has(i)) {
			i++;
		}
		this.list.push(i);
		return i;
	}

	remove(id) {
		for(let i = 0; i < this.list.length; i++) {
			if(this.list[i] === id) {
				if(i === 0) {
					this.list.shift();
					return true;
				}
				if(i === this.list.length - 1) {
					this.list.pop();
					return true;
				}
				this.list = this.list.slice(0,i).concat(this.list.slice(i+1));
				return true;
			}
		}
		return false;
	}

	log() {
		console.log(this.list);
	}
}