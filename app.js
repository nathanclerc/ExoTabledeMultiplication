var tab = document.getElementById('multi');
var mutliply= 0;
var diviser = $('#diviser');
var multiplier = $('#multiplier');
var additionner = $('#additionner');
var soustraire = $('#soustraire');
var ht = [0,1,2,3,4,5,6,7,8,9];
var vt = [0,1,2,3,4,5,6,7,8,9];
var calcul = 0;
var result;


diviser.click(function(){
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[1];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[2];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[3];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[4];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[5];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[6];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[7];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[8];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[9];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul/i;
			var ligne = tab.rows[10];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
});

multiplier.click(function(){
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[1];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[2];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[3];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[4];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[5];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[6];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[7];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
			if (result>50) {
				ligne.cells[i+1].style.backgroundColor = "red";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[8];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
			if (result>50) {
				ligne.cells[i+1].style.backgroundColor = "red";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[9];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
			if (result>50) {
				ligne.cells[i+1].style.backgroundColor = "red";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul*i;
			var ligne = tab.rows[10];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
			if (result>50) {
				ligne.cells[i+1].style.backgroundColor = "red";
			}
		}
});

additionner.click(function(){
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[1];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[2];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[3];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[4];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[5];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[6];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[7];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[8];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[9];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul+i;
			var ligne = tab.rows[10];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
			if (result>10) {
				ligne.cells[i+1].style.backgroundColor = "pink";
			}
		}
});

soustraire.click(function(){
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[1];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[2];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[3];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[4];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[5];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[6];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[7];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[8];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[9];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
		calcul++;
		for (var i = 0; i < 10; i++) {
			result = calcul-i;
			var ligne = tab.rows[10];
			var colonne = ligne.insertCell(-1);
			colonne.innerHTML += result;
		}
});


function start(){
	for (var i = 0; i < 10; i++) {
		var ligne = tab.insertRow(-1);
		var colonne1 = ligne.insertCell(-1);
		colonne1.innerHTML += 'X';
		for (var i = 0; i < 10; i++) {
			var colonne2 = ligne.insertCell(-1);
			colonne2.innerHTML += mutliply;
			mutliply++;
			}
		mutliply = 0;
		for (var i = 0; i < 10; i++) {
			var ligne = tab.insertRow(-1);
			var colonne1 = ligne.insertCell(-1);
			colonne1.innerHTML += mutliply;
			mutliply++;
			}
		}
};

var start = start();