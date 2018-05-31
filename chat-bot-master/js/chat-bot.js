function chatBot() {
	
	// current user input
	this.input;
	
	
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(cordial|buenas|hola|saludo)(\\s|!|\\.|$)'))
			return "Muy buenas..!!! en que le puedo ayudar";
		
		if(this.match('notas[^ ]* up') || this.match('ota') || this.match('definitiva'))
			return "que modulo?";
		
		if(this.match('ingenieria(os)+') || this.match('(algoritmos)+(W|$)') || this.match('fundamentos') || this.match('udec'))
			return ["Puede ingresar a la pagina y consultar las notas", "https://ucundinamarca.edu.co"];
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "fue un placer ayudarle";
		
		if(this.match('(gracias|bye|hasta luego)'))
			return ["Con todo gusto!!!!", "feliz dia!"];
		
		
		
		
		if(this.input == 'noop')
			return;
		
		return input + " no tengo informacion pero se puede comunicar con 123458 ";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
