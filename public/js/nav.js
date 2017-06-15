fetch('/api/nav.json')
.then(response => response.json())
.then(createMenu)
.catch(function(){
	console.log('oops!');
});

function createMenu(data){
	let list = document.querySelector('.labels'); // identifies the ul
	data.items.forEach(element => printMenu(element, list, 'first-level'));
}

function printMenu(element, container, newClass){
	let li = document.createElement('li'); //creates a li
	li.classList.add(newClass);
	let a = document.createElement('a');
	a.href = element.url;
	li.appendChild(a);
	let textLabel = document.createTextNode(element.label); // creates the text
	a.appendChild(textLabel); // adds the text to the li
	container.appendChild(li); // adds the li to the ul

	if (element.items && element.items.length > 0){
		let i = document.createElement('i');
		i.classList.add('fa');
		i.classList.add('fa-chevron-down');
		li.appendChild(i)
	}

	if (element.items && element.items.length > 0){
		let ul = document.createElement('ul');
		ul.classList.add('submenu')
		li.appendChild(ul);
		element.items.forEach(subElement => printMenu(subElement, ul, 'second-level'));
	} 
}

document.querySelector('.navbar-toggle').addEventListener('click', sayHello);

function sayHello(){
	document.querySelector('.nav-box').classList.toggle('nav-open');
	document.querySelector('.wrapper').classList.toggle('wrapper-menu-open');
	document.querySelector('.icon-open').classList.toggle('icon-open-closed')
	document.querySelector('.meow').classList.toggle('huge-toggle')
	document.querySelector('.close').classList.toggle('close-open')
}