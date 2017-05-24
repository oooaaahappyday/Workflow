define(["./getAge"], 
	function (getAge) {
	return {
		comment: function () {
	    var message;
	    // var age = getAge.age();
	    var age = getAge.age;
	    console.log("echo");

	    if (age <= 10) {
	    	message = "Vous êtes trop jeune pour jouer au jeu Titre.";
	    	alert(message);
	    } else if (age > 10 && age <= 70) {
	    	message = "Allez-y, mais allez-y mollo, il faut rester dans le political correct";
	    	alert(message);
	    } else if (age > 70 ){
	    	message = "Vous n'avez plus rien à perdre, le plus graveleux sera le mieux";
	    	alert(message);
	    }
		return message;
		}
	};
});