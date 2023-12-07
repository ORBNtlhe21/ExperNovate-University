alert("The Project is not yet complete, and I am actively working on it. Please Click Ok");

const displayAps = document.querySelector('#display-aps');
const button = document.querySelector('.submit');

//Percentages of 6 subjects 
const pc1 = parseInt(document.querySelector('.percentage1'));
const pc2 = document.querySelector('.percentage2');
const pc3 = document.querySelector('.percentage3');
const pc4 = document.querySelector('.percentage4');
const pc5 = document.querySelector('.percentage5');
const pc6 = document.querySelector('.percentage6');

button.addEventListener('click', function(){
	// check if marks are not empty
	/*if(parseInt(pc1.value && pc2.value && pc3.value && pc4.value && pc5.value && pc6.value) == ''){
		displayAps.innerHTML = `Slot empty`;
	}
	else{
		displayAps.innerHTML  = `Thank you`;
	}*/
  
	
})

function isNumber(evt){
	var charCode = (evt.which) ? evt.which: evt.keyCode
	if(charCode > 31 && (charCode < 48 || charCode > 57)){
		return false;
	}

	return true;
}

