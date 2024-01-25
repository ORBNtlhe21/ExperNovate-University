alert(`Back-end development is currently on-going :)`);

const displayAps = document.querySelector('#display-aps');
const button = document.querySelector('.submit');

//Percentages of 6 subjects 
const pc1 = document.querySelector('.percentage1');
const pc2 = document.querySelector('.percentage2');
const pc3 = document.querySelector('.percentage3');
const pc4 = document.querySelector('.percentage4');
const pc5 = document.querySelector('.percentage5');
const pc6 = document.querySelector('.percentage6');
let lvl1 = 0;
let lvl2 = 0;
let lvl3 = 0;
let lvl4 = 0;
let lvl5 = 0;
let lvl6 = 0;

button.addEventListener('click', function(){

	if((pc1.value !== '') && (pc2.value !== '') && (pc3.value !== '') && (pc4.value !== '') && (pc5.value !== '') && (pc6.value !== '')){
		// First Subject
		if(parseInt(pc1.value) >= 0 && parseInt(pc1.value) <= 29){
			lvl1 = 1;
		}
		else if(parseInt(pc1.value) >= 30 && parseInt(pc1.value) <= 39){
			lvl1 = 2;
		}
		else if(parseInt(pc1.value) >= 40 && parseInt(pc1.value) <= 49){
			lvl1 = 3;
		}
		else if(parseInt(pc1.value) >= 50 && parseInt(pc1.value) <= 59){
			lvl1 = 4;
		}
		else if(parseInt(pc1.value) >= 60 && parseInt(pc1.value) <= 69){
			lvl1 = 5;
		}
		else if(parseInt(pc1.value) >= 70 && parseInt(pc1.value) <= 79){
			lvl1 = 6;
		}
		else if(parseInt(pc1.value) >= 80 && parseInt(pc1.value) <= 89){
			lvl1 = 7;
		}
		else if(parseInt(pc1.value) >= 90 && parseInt(pc1.value) <= 100){
			lvl1 = 8;
		}
		else{
			alert(`Please enter a valid mark`);
		}

		// Second Subject
		if(parseInt(pc2.value) >= 0 && parseInt(pc2.value) <= 29){
			lvl2 = 1;
		}
		else if(parseInt(pc2.value) >= 30 && parseInt(pc2.value) <= 39){
			lvl2 = 2;
		}
		else if(parseInt(pc2.value) >= 40 && parseInt(pc2.value) <= 49){
			lvl2 = 3;
		}
		else if(parseInt(pc2.value) >= 50 && parseInt(pc2.value) <= 59){
			lvl2 = 4;
		}
		else if(parseInt(pc2.value) >= 60 && parseInt(pc2.value) <= 69){
			lvl2 = 5;
		}
		else if(parseInt(pc2.value) >= 70 && parseInt(pc2.value) <= 79){
			lvl2 = 6;
		}
		else if(parseInt(pc2.value) >= 80 && parseInt(pc2.value) <= 89){
			lvl2 = 7;
		}
		else if(parseInt(pc2.value) >= 90 && parseInt(pc2.value) <= 100){
			lvl2 = 8;
		}
		else{
			alert(`Please enter a valid mark`);
		}

		// Third Subject
		if(parseInt(pc3.value) >= 0 && parseInt(pc3.value) <= 29){
			lvl3 = 1;
		}
		else if(parseInt(pc3.value) >= 30 && parseInt(pc3.value) <= 39){
			lvl3 = 2;
		}
		else if(parseInt(pc3.value) >= 40 && parseInt(pc3.value) <= 49){
			lvl3 = 3;
		}
		else if(parseInt(pc3.value) >= 50 && parseInt(pc3.value) <= 59){
			lvl3 = 4;
		}
		else if(parseInt(pc3.value) >= 60 && parseInt(pc3.value) <= 69){
			lvl3 = 5;
		}
		else if(parseInt(pc3.value) >= 70 && parseInt(pc3.value) <= 79){
			lvl3 = 6;
		}
		else if(parseInt(pc3.value) >= 80 && parseInt(pc3.value) <= 89){
			lvl3 = 7;
		}
		else if(parseInt(pc3.value) >= 90 && parseInt(pc3.value) <= 100){
			lvl3 = 8;
		}
		else{
			alert(`Please enter a valid mark`);
		}

		// Fourth Subject
		if(parseInt(pc4.value) >= 0 && parseInt(pc4.value) <= 29){
			lvl4 = 1;
		}
		else if(parseInt(pc4.value) >= 30 && parseInt(pc4.value) <= 39){
			lvl4 = 2;
		}
		else if(parseInt(pc4.value) >= 40 && parseInt(pc4.value) <= 49){
			lvl4 = 3;
		}
		else if(parseInt(pc4.value) >= 50 && parseInt(pc4.value) <= 59){
			lvl4 = 4;
		}
		else if(parseInt(pc4.value) >= 60 && parseInt(pc4.value) <= 69){
			lvl4 = 5;
		}
		else if(parseInt(pc4.value) >= 70 && parseInt(pc4.value) <= 79){
			lvl4 = 6;
		}
		else if(parseInt(pc4.value) >= 80 && parseInt(pc4.value) <= 89){
			lvl4 = 7;
		}
		else if(parseInt(pc4.value) >= 90 && parseInt(pc4.value) <= 100){
			lvl4 = 8;
		}
		else{
			alert(`Please enter a valid mark`);
		}

		// Fifth Subject
		if(parseInt(pc5.value) >= 0 && parseInt(pc5.value) <= 29){
			lvl5 = 1;
		}
		else if(parseInt(pc5.value) >= 30 && parseInt(pc5.value) <= 39){
			lvl5 = 2;
		}
		else if(parseInt(pc5.value) >= 40 && parseInt(pc5.value) <= 49){
			lvl5 = 3;
		}
		else if(parseInt(pc5.value) >= 50 && parseInt(pc5.value) <= 59){
			lvl5 = 4;
		}
		else if(parseInt(pc5.value) >= 60 && parseInt(pc5.value) <= 69){
			lvl5 = 5;
		}
		else if(parseInt(pc5.value) >= 70 && parseInt(pc5.value) <= 79){
			lvl5 = 6;
		}
		else if(parseInt(pc5.value) >= 80 && parseInt(pc5.value) <= 89){
			lvl5 = 7;
		}
		else if(parseInt(pc5.value) >= 90 && parseInt(pc5.value) <= 100){
			lvl5 = 8;
		}
		else{
			alert(`Please enter a valid mark`);
		}

		// Sixth Subject
		if(parseInt(pc6.value) >= 0 && parseInt(pc6.value) <= 29){
			lvl6 = 1;
		}
		else if(parseInt(pc6.value) >= 30 && parseInt(pc6.value) <= 39){
			lvl6 = 2;
		}
		else if(parseInt(pc6.value) >= 40 && parseInt(pc6.value) <= 49){
			lvl6 = 3;
		}
		else if(parseInt(pc6.value) >= 50 && parseInt(pc6.value) <= 59){
			lvl6 = 4;
		}
		else if(parseInt(pc6.value) >= 60 && parseInt(pc6.value) <= 69){
			lvl6 = 5;
		}
		else if(parseInt(pc6.value) >= 70 && parseInt(pc6.value) <= 79){
			lvl6 = 6;
		}
		else if(parseInt(pc6.value) >= 80 && parseInt(pc6.value) <= 89){
			lvl6 = 7;
		}
		else if(parseInt(pc6.value) >= 90 && parseInt(pc6.value) <= 100){
			lvl6 = 8;
		}
		else{
			alert(`Please enter a valid mark`);
		}
	}

	else{
		console.log('Not a Number');
	}

	/*This section we calculate the total aps */
	const final = lvl1 + lvl2 + lvl3 + lvl4 + lvl5 + lvl6;
	displayAps.innerHTML = `Your APS score is: ${final}`
});

function isNumber(evt){
	var charCode = (evt.which) ? evt.which: evt.keyCode
	if(charCode > 31 && (charCode < 48 || charCode > 57)){
		return false;
	}

	return true;
}

