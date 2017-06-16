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

	if (newClass == 'first-level'){
		a.classList.add('first-level-link')
	}

	if (element.items && element.items.length > 0){
		let i = document.createElement('i');
		i.classList.add('fa');
		i.classList.add('fa-chevron-down');
		li.appendChild(i);
		li.addEventListener('click', () => openSecondMenu(i, ul));
	}

	if (element.items && element.items.length > 0){
		let ul = document.createElement('ul');
		ul.classList.add('submenu')
		li.appendChild(ul);
		element.items.forEach(subElement => printMenu(subElement, ul, 'second-level'));
	}
}

document.querySelector('.navbar-toggle').addEventListener('click', menuToggle);

function menuToggle(){
	document.querySelector('.nav-box').classList.toggle('nav-open');
	document.querySelector('.wrapper').classList.toggle('wrapper-menu-open');
	document.querySelector('.container').classList.toggle('container-open');
	document.querySelector('.navbar-icon-open').classList.toggle('icon-open-hide')
	document.querySelector('.huge-logo-white').classList.toggle('huge-toggle')
	document.querySelector('.navbar-icon-close').classList.toggle('close-open')
}

function openSecondMenu(i, ul){
	console.log(ul);
	document.querySelector('.'+e.target.classList.value).classList.toggle('submenu-open');
	if (i.classList.contains('fa-chevron-down')){
		i.classList.remove('fa-chevron-down');
		i.classList.add('fa-chevron-up');
	} else {
		i.classList.remove('fa-chevron-up');
		i.classList.add('fa-chevron-down');
	}
}