function commentAge () {
	var age = parseInt(document.getElementById("age").value);

	if (age <= 10) {
		console.log("Vous êtes trop jeune pour jouer au jeu Titre.");
	} else if (age > 10 && age <= 70) {
		console.log("Allez-y, mais allez-y mollo, il faut rester dans le political correct");
	} else if (age > 70 ){
		console.log("Vous n'avez plus rien à perdre, le plus graveleux sera le mieux");
	}
}
