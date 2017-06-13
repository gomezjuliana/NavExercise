fetch('/api/nav.json')
.then(response => response.json())
.then(createMenu)
.catch(function(){
	console.log('oops!');
});

let list = document.querySelector('.labels'); // identifies the ul

function createMenu(data){
	data.items.forEach(element => printFirstLevel(element, list));
}

function printFirstLevel(element, container){
	let li = document.createElement('li'); //creates a li
	let textLabel = document.createTextNode(element.label); // creates the text
	li.appendChild(textLabel); // adds the text to the li
	container.appendChild(li); // adds the li to the ul

	if (element.items.length && element.items.length > 0){
		let ul = document.createElement('ul');
		li.appendChild(ul);
		element.items.forEach(subElement => printFirstLevel(subElement, ul));
	} 
}