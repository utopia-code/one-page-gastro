(function(){

	// Objeto con Propiedades de Parallax
var propParallax = {

	seccion: document.querySelector('.parallax'),
	recorrido: null,
	limite: null

}


// Objeto con Métodos de Parallax
var metParallax = {

	inicio: function () {
		window.addEventListener('scroll', metParallax.scrollParallax);
	},

	scrollParallax: function () {
		
		propParallax.recorrido = window.pageYOffset;
		propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

		/* 

			propParallax.recorrido = window.pageYOffset;  => altura recorrida por el scroll
			propParallax.limite => altura recorrida + altura del div

			primera condicion => si lo scrolado es mayor al principio del div menos la altura de la ventana
				(para que el efecto comience desde que el div entra en campo desde abajo, restamos la altura)
			segunda condicion => si el recorrido es menor o igual al limite puesto por la altura del div

			propParallax.seccion.style.backgroundPositionY => que posicion se le da a la imagen del background
			(propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
			 	=> a lo que ya hemos scrolado se le resta la ubicacion del div y se divide por una cantidad
			 		mayor a 1 para que vaya mas lento. Anadir concatenacion de px


		 */

		if ( propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite ) {

			propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';

		} else{
			propParallax.seccion.style.backgroundPositionY = 0;
			/* al pasar el limite superior o inferior, la posicion de y es 0 */
		}

	}
	
}

metParallax.inicio();
	
}())

