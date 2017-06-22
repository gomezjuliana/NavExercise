(function(){fetch('/api/nav.json')
.then(response => response.json())
.then(createMenu).catch(() => console.log('Oops! Something went wrong'))})();

function createMenu(data) {
	let list = document.querySelector('.labels'); 
	data.items.forEach(element => printMenu(element, list, 'first-level'));
}

function printMenu(element, container, newClass) {
	let li = document.createElement('li'); 
	li.classList.add(newClass);
	let a = document.createElement('a');
	a.href = element.url;
	a.target = "_blank";
	li.appendChild(a);
	let textLabel = document.createTextNode(element.label); 
	a.appendChild(textLabel); 
	container.appendChild(li); 
	if (newClass === 'first-level') {
		a.classList.add('first-level-link')
	}
	if (element.items && element.items.length > 0) {
		a.target = "";
		let i = document.createElement('i');
		i.classList.add('fa');
		i.classList.add('fa-chevron-down');
		li.appendChild(i);
		let ul = document.createElement('ul');
		ul.classList.add('submenu')
		li.appendChild(ul);
		element.items.forEach(subElement => printMenu(subElement, ul, 'second-level'));
		li.addEventListener('click', () => openSecondMenu(i, ul));
	}
}
document.querySelector('.navbar-toggle').addEventListener('click', menuToggle);

function menuToggle() {
	document.querySelector('.nav-box').classList.toggle('nav-open');
	document.querySelector('.wrapper').classList.toggle('wrapper-menu-open');
	document.querySelector('.container').classList.toggle('container-open');
	document.querySelector('.navbar-icon-open').classList.toggle('icon-open-hide')
	document.querySelector('.huge-logo-white').classList.toggle('huge-toggle')
	document.querySelector('.navbar-icon-close').classList.toggle('close-open')
}

function openSecondMenu(i, ul) {
	ul.classList.toggle('submenu-open');
	ul.parentElement.classList.toggle('first-level-submenu-active')
	document.querySelector('.copyright').classList.toggle('copyright-open')
	if (i.classList.contains('fa-chevron-down')) {
		i.classList.remove('fa-chevron-down');
		i.classList.add('fa-chevron-up');
	} else {
		i.classList.remove('fa-chevron-up');
		i.classList.add('fa-chevron-down');
	}
}
document.addEventListener('click', function(event) {
	let isClickInside = document.querySelector('.nav').contains(event.target);
	if (!isClickInside) {
		document.querySelector('.nav-box').classList.remove('nav-open');
		document.querySelector('.wrapper').classList.remove('wrapper-menu-open');
		document.querySelector('.container').classList.remove('container-open');
		document.querySelector('.navbar-icon-open').classList.remove('icon-open-hide')
		document.querySelector('.huge-logo-white').classList.remove('huge-toggle')
		document.querySelector('.navbar-icon-close').classList.remove('close-open')
		document.querySelectorAll('.submenu').forEach(x => x.classList.remove('submenu-open'))
	}
});