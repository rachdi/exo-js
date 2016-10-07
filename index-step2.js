$(document).ready(pied);

// Fonction principale
function pied(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		// Récupérer le contenu de mon input
		var recupere=$("input").val();
		if (nbremistere<recupere){
			alert("nbre tres grand");
		}
		else if (nbremistere>recupere) {
			alert("nbre tres petit");
		}
		else {
			alert("Gagné");
		}
		

	}		// Stocker un nombre ENTIER généré "aléatoirement"
	
	function aleatoire(min, max) { 
		return (Math.floor((max-min+1)*Math.random())+min); 

	} 

	var nbremistere=aleatoire(0,5);
	
	$("button").click(function(){
		clickValider();
	});

};









		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus

