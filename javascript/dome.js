export class DomEl {
	constructor(type, id, parent, style = "", text = "") {
		this.type = type;
		this.id = id;
		this.parent = parent;
		this.children = [];
		this.text = text;
		this.style = style;
	}
	
	append(el) {
		this.children.push(el);
	}

	prepend(el) {
		this.children.unshift(el);
	}

	get(id) {
		for(let item of this.children) {
			if(item.id === id) {
				return item;
			}
		}
	}

	addP(parent,id,style,text) {
		let p = document.createElement('p');
		p,id = id;
		p.classList.add(this.style);
		p.appendChild(document.createTextNode(text));
		parent.appendChild(p);
	}

	draw() {
		
		let top = document.getElementById(this.id);
		
		for(let item of this.children) {
			if(item.type === 'p') {
				item.addP(top,item.id,item.style,item.text);
			} else {
				let child = document.createElement(item.type);
				child.classList.add(item.style);
				child.id = item.id;
				top.appendChild(child);
			}
		}
	}

	log() {
		console.log(this.type,this.id,this.parent,this.children.length);
		for(let item of this.children) {
			item.log();
		}
	}
}