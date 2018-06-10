
var position = 0;
window.onscroll = function() {
	position = window.pageYOffset;	
}

function Scroll(id) {
	var el_pos = document.getElementById(id).offsetTop;
	
	var interval;

	if(position <= el_pos) {
		interval = setInterval(function(){
			position+=13;
			if(position >= el_pos){
				clearInterval(interval);
			}
			else {
				window.scrollTo(0, position);
			}
		}, 0);
		}
		else {
			interval = setInterval(function(){
			position-=13;
			if(position  <= el_pos){
				clearInterval(interval);
			}
			else {
				window.scrollTo(0, position);
			}
		}, 0);
		}
	}


