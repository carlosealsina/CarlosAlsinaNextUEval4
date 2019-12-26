function Calculadora(){
	//variables
	var uno = document.getElementById('1');
	var dos = document.getElementById('2');
	var tres = document.getElementById('3');
	var cuatro = document.getElementById('4');
	var cinco = document.getElementById('5');
	var seis = document.getElementById('6');
	var siete = document.getElementById('7');
	var ocho = document.getElementById('8');
	var nueve = document.getElementById('9');
	var cero = document.getElementById('0');
	var punto = document.getElementById('punto');
	var signo = document.getElementById('sign');

	var on = document.getElementById('on');
	var suma = document.getElementById('mas');
	var resta = document.getElementById('menos');
	var multiplicacion = document.getElementById('por');
	var division = document.getElementById('dividido');
	var igual = document.getElementById('igual');

	//eventos
	//uno
	uno.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
			display.textContent = "1";
	  	}
	  	else{
		display.textContent = display.textContent + "1";
	  	}
			}
		}
	//dos
	dos.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "2";
	  	}
	  	else{
				display.textContent = display.textContent + "2";
	  	}
		}
		}

	//tres
	tres.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "3";
			}
			else{
				display.textContent = display.textContent + "3";
			}
		}
		}

	//cuatro
	cuatro.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "4";
			}
			else{
				display.textContent = display.textContent + "4";
			}
		}
		}
	//cinco
	cinco.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "5";
			}
			else{
				display.textContent = display.textContent + "5";
			}
		}
		}
	//seis
	seis.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "6";
			}
			else{
				display.textContent = display.textContent + "6";
			}
		}
		}
	//siete
	siete.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "7";
			}
			else{
				display.textContent = display.textContent + "7";
			}
		}
		}
	//ocho
	ocho.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "8";
			}
			else{
				display.textContent = display.textContent + "8";
			}
		}
		}
	//nueve
	nueve.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "9";
			}
			else{
				display.textContent = display.textContent + "9";
			}
		}
		}
	//cero
	cero.onclick =function(e){
		if (display.textContent.length>=8) {
		}else{
			if (display.textContent == "0") {
				display.textContent = "0";
			}
			else{
				display.textContent = display.textContent + "0";
			}
		}
		}


	//efecto botones
	uno.addEventListener("mousedown",function(){
				uno.setAttribute("style","transform:scale(0.85,0.85)")
		})
		uno.addEventListener("mouseout",function(){
				uno.setAttribute("style","transform:scale(1,1)")
		})
		dos.addEventListener("mousedown",function(){
					dos.setAttribute("style","transform:scale(0.85,0.85)")
			})
			dos.addEventListener("mouseout",function(){
					dos.setAttribute("style","transform:scale(1,1)")
			})
			tres.addEventListener("mousedown",function(){
					tres.setAttribute("style","transform:scale(0.85,0.85)")
			})
			tres.addEventListener("mouseout",function(){
					tres.setAttribute("style","transform:scale(1,1)")
			})
			cuatro.addEventListener("mousedown",function(){
					cuatro.setAttribute("style","transform:scale(0.85,0.85)")
			})
			cuatro.addEventListener("mouseout",function(){
					cuatro.setAttribute("style","transform:scale(1,1)")
			})
			cinco.addEventListener("mousedown",function(){
					cinco.setAttribute("style","transform:scale(0.85,0.85)")
			})
			cinco.addEventListener("mouseout",function(){
					cinco.setAttribute("style","transform:scale(1,1)")
			})
			seis.addEventListener("mousedown",function(){
					seis.setAttribute("style","transform:scale(0.85,0.85)")
			})
			seis.addEventListener("mouseout",function(){
					seis.setAttribute("style","transform:scale(1,1)")
			})
			siete.addEventListener("mousedown",function(){
					siete.setAttribute("style","transform:scale(0.85,0.85)")
			})
			siete.addEventListener("mouseout",function(){
					siete.setAttribute("style","transform:scale(1,1)")
			})
			ocho.addEventListener("mousedown",function(){
					ocho.setAttribute("style","transform:scale(0.85,0.85)")
			})
			ocho.addEventListener("mouseout",function(){
					ocho.setAttribute("style","transform:scale(1,1)")
			})
			nueve.addEventListener("mousedown",function(){
					nueve.setAttribute("style","transform:scale(0.85,0.85)")
			})
			nueve.addEventListener("mouseout",function(){
					nueve.setAttribute("style","transform:scale(1,1)")
			})
			cero.addEventListener("mousedown",function(){
					cero.setAttribute("style","transform:scale(0.85,0.85)")
			})
			cero.addEventListener("mouseout",function(){
					cero.setAttribute("style","transform:scale(1,1)")
			})
			sign.addEventListener("mousedown",function(){
					sign.setAttribute("style","transform:scale(0.85,0.85)")
			})
			sign.addEventListener("mouseout",function(){
					sign.setAttribute("style","transform:scale(1,1)")
			})
			raiz.addEventListener("mousedown",function(){
					raiz.setAttribute("style","transform:scale(0.85,0.85)")
			})
			raiz.addEventListener("mouseout",function(){
					raiz.setAttribute("style","transform:scale(1,1)")
			})
			dividido.addEventListener("mousedown",function(){
					dividido.setAttribute("style","transform:scale(0.85,0.85)")
			})
			dividido.addEventListener("mouseout",function(){
					dividido.setAttribute("style","transform:scale(1,1)")
			})
			por.addEventListener("mousedown",function(){
					por.setAttribute("style","transform:scale(0.85,0.85)")
			})
			por.addEventListener("mouseout",function(){
					por.setAttribute("style","transform:scale(1,1)")
			})
			punto.addEventListener("mousedown",function(){
					punto.setAttribute("style","transform:scale(0.85,0.85)")
			})
			punto.addEventListener("mouseout",function(){
					punto.setAttribute("style","transform:scale(1,1)")
			})
			menos.addEventListener("mousedown",function(){
					menos.setAttribute("style","transform:scale(0.85,0.85)")
			})
			menos.addEventListener("mouseout",function(){
					menos.setAttribute("style","transform:scale(1,1)")
			})
			igual.addEventListener("mousedown",function(){
					igual.setAttribute("style","transform:scale(0.85,0.85)")
			})
			igual.addEventListener("mouseout",function(){
					igual.setAttribute("style","transform:scale(1,1)")
			})
			mas.addEventListener("mousedown",function(){
					mas.setAttribute("style","transform:scale(0.85,0.85)")
			})
			mas.addEventListener("mouseout",function(){
					mas.setAttribute("style","transform:scale(1,1)")
			})
			on.addEventListener("mousedown",function(){
					on.setAttribute("style","transform:scale(0.85,0.85)")
			})
			on.addEventListener("mouseout",function(){
					on.setAttribute("style","transform:scale(1,1)")
			})

}

Calculadora();
