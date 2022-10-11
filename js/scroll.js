
// Objeto con propiedades de efecto scroll
var propScroll = {

	posicion: window.pageYOffset,
	scroll_suave: document.getElementsByClassName('scroll-suave'),
	volver_arriba: document.getElementsByClassName('volver-arriba'),
	destino: null,
	seccion_distancia: null,
	intervalo: null

}


// Objeto con métodos de efecto scroll
var metScroll = {

	inicio: function () {
		
		for (var i = 0; i < propScroll.scroll_suave.length; i++) {
			propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
		}

		for (var i = 0; i < propScroll.volver_arriba.length; i++) {
			propScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
		}

	},


	moverse: function (e) {
		e.preventDefault();

		/* con clearInterval al principio se evita que se solapen varios intervalos al clickar */
		clearInterval(propScroll.intervalo);
		propScroll.destino = this.getAttribute('href');
		propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94;

		/* vuelve a recalcular la posicion en la que nos encontramos al hacer click  */
		propScroll.posicion = window.pageYOffset;
		propScroll.intervalo = setInterval(function () {

			if ( propScroll.posicion < propScroll.seccion_distancia) {

				propScroll.posicion += 30;

				if (propScroll.posicion >= propScroll.seccion_distancia) {
					clearInterval(propScroll.intervalo);
				}

			} else{

				propScroll.posicion -= 30;

				if (propScroll.posicion <= propScroll.seccion_distancia) {
					clearInterval(propScroll.intervalo);
				}

			}
			
			window.scrollTo(0, propScroll.posicion);

		}, 15);
	},

	subir: function (e) {
		e.preventDefault();
		clearInterval(propScroll.intervalo);
		propScroll.posicion = window.pageYOffset;
		propScroll.intervalo = setInterval(function(){

			if ( propScroll.posicion > 0 ) {

				propScroll.posicion -= 30;

				if (propScroll.posicion <= 0) {
					clearInterval(propScroll.intervalo);
				}

			} else{
				/* aqui se detiene, la funcion deja de leer, asi que si ya esta en 0, no llega a leer window.scrollTo() */
				return;
			}

			window.scrollTo(0, propScroll.posicion);

		}, 15);

	}

	
}

metScroll.inicio();