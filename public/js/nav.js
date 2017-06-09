fetch('/api/nav.json')
.then(function(response){
	return response.json();
})
.then(function(data){
	return createMenu(data);
})
.catch(function(){
	console.log('oops!');
});

function createMenu(data){
	data.items.forEach(printFirstLevel);
}

function printFirstLevel(element){
	let li = document.createElement('li');
	let textLabel = document.createTextNode(element.label);
	li.appendChild(textLabel);

	let list = document.querySelector('.labels');
	list.appendChild(li);
	document.querySelector('.labels li').classList.add('bullet');
	//checkForItems(element);
}

function checkForItems(element){
	if (element.items.length === 0){
		console.log('meow');
	} else {
		element.items.forEach(printSecondLevel);
	}
}

function printSecondLevel(element){
	console.log(element.label);
}