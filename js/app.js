

function commentAge (age) {
	var age = document.getElementById("age").textContent;
	console.log(age);

	switch (age) {
		case age <= 10 :
			alert ("Vous êtes trop jeune pour jouer au jeu Titre.");
			break;
		case (age > 10) && (age<= 70) :
			alert ("Allez-y, mais allez-y mollo, il faut rester dans le political correct");
			break;
		case age > 70 :
			alert ("Vous n'avez plus rien à perdre, le plus graveleux sera le mieux");
			break;
	};
}