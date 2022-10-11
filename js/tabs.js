(function(){

// Objeto con propiedades de Tab
var propTabs = {

	primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
	primer_contenido: document.getElementById('contenido_menu').firstElementChild,
	enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
	li_encabezado: document.querySelectorAll('#encabezado_menu li'),
	divs_contenido: document.querySelectorAll('#contenido_menu > div'),
	contenido_activo: null

}

// Objeto con métodos de Tab
var metTabs = {
	
	inicio: function(){

		/* quitar la clase active en html y anadirla en js */

		propTabs.primer_encabezado.className = 'active';
		propTabs.primer_contenido.className = 'active';

		for (var i = 0; i < propTabs.enlaces_encabezado.length; i++) {
			propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
		}
	},

	evento: function(e){
		e.preventDefault();

		for (var i = 0; i < propTabs.li_encabezado.length; i++) {
			propTabs.li_encabezado[i].className = '';
		}

		for (var i = 0; i < propTabs.divs_contenido.length; i++) {
			propTabs.divs_contenido[i].className = '';
		}

		/* le anade la clase active a li (parentElement), no a a */

		this.parentElement.className = 'active';
		propTabs.contenido_activo = this.getAttribute('href');

		/* propTabs.contenido_activo = #cafes o # postres...funciona como un id guardado en una variable */
		document.querySelector(propTabs.contenido_activo).className = 'active';

		/* transition esta a 0.3s en CSS y el retardo se anade aqui */
		document.querySelector(propTabs.contenido_activo).style.opacity = 0;
		setTimeout(function(){
			document.querySelector(propTabs.contenido_activo).style.opacity = 1;
		}, 100);
	}

}

metTabs.inicio();
	
}())

