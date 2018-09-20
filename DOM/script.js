var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

function toggleDoneClass() {
	for (var i = 0; i < item.length; i++) {
		item[i].classList.add('done');
		item[i].classList.toggle('done');
		console.log("TOGGLE");	
	}
	
}

function listLength() {
	return listItems.length;
}

function deleteButton() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick = removeParent;
}

function removeParent(event) {
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);

ul.onclick = function(event) {
	var target=event.target;
	target.classList.toggle('done');
}

for (i= 0; i < listLength; i++ ) {
	deleteButton();
}