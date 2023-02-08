
export function init() {
	return new vDom();
}

class vDom {
	constructor() {
		this.manifest = new IDgen();
		this.root = new DomEl('body',0,'html');
		this.manifest.add();

		this.root_element = document.getElementById("0");
		this.manifest.log();
	}

	remove(id) {
		return this.manifest.remove(id);
	}

	get(id) {
		if(id === 0) {
			return this.root;
		}
		if(this.manifest.has(id)) {
			return this.root.dig(id);
		}
		return false;
	}

	add(type,parent,style="",text="") {
		let found = this.get(parent);
		if(found === false) {
			console.log('notfound on add');
			return false;
		}
		found.addChild(new DomEl(type,this.manifest.add(),parent,style,text));
		return true;
	}

	has(id) {
		return this.manifest.has(id);
	}

	draw() {
		this.root.draw();
	}
}

class DomEl {
	constructor(type, id, parent, style = "", text = "") {
		this.type = type;
		this.id = id;
		this.parent = parent;
		this.children = [];
		this.style = style;
		this.text = text;
	}
	
	addChild(el) {
		if(!el instanceof DomEl)
			return false;
		this.children.push(el);
		return true;
	} 

	unshiftChild(el) {
		if(!el instanceof DomEl)
			return false;
		this.children.unshift(el);
		return true;
	}

	get(id) {
		for(let item of this.children) {
			if(item.id === id) {
				return item;
			}
		}
		return false;
	}

	//untested
	dig(id) {
		for(let item of this.children) {
			if(item.id === id) {
				return item;
			} else {
				let subdig = item.dig(id);
				if(subdig !== false)
					return subdig;
			}
		}
		return false;
	}

	addText(type,id,style,text) {
		let p = document.createElement('p');
		p,id = id;
		p.parent = this.id;
		p.classList.add(this.style);
		p.appendChild(document.createTextNode(text));
		parent.appendChild(p);
	}

	draw() {
		let parent = document.getElementById(this.id);
		
		for(let item of this.children) {
			let child = document.createElement(item.type);
			child.classList.add(item.style);
			child.id = item.id;
			if(item.text !== "") {
				child.appendChild(document.createTextNode(item.text));
			}
			parent.appendChild(child);
			item.draw();
		}
	}

	log() {
		console.log(this.type,this.id,this.parent,this.children.length);
		for(let item of this.children) {
			item.log();
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
		for(let i = 0; i < this.list.size; i++) {
			if(this.list[i] === id) {
				if(i === 0) {
					this.list.shift();
					return true;
				}
				if(i === this.list.size - 1) {
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