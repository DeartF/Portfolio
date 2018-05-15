var modal = document.getElementById('modal')


function showModal(){
	modal.style.display = "flex"
	document.body.style.overflow = "hidden";
	window.scrollTo(0, 0);
}

function hideModal (){
	modal.style.display = "none"
	document.body.style.overflow = "auto";
}

var dropdown = document.getElementById('dropdown')
var dropdown_text = document.getElementById('dropdown-text')

function showDropdown(){
	dropdown.style.display = "block";
	document.addEventListener('click', clickOut, true);
}

function hideDropdown(){
	dropdown.style.display = "none";
}

function setOption(e) {
	dropdown_text.innerHTML = e.target.innerHTML.trim();
	document.removeEventListener('click', clickOut, true);
	hideDropdown();
}

function clickOut(e) {
	console.log('assss')
	if(!dropdown.contains(e.target)){
		hideDropdown()
	}
}