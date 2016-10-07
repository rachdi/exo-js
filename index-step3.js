$(document).ready(main);
var b;
var  recupere;

var nbremistere;
function main(){
// Fonction principale

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.

	
	function demarrerPartie(){
		
		
		alert("Devinez le nombre mystère");
		b=parseInt(prompt("Combien de tentatives voulez vous ?"));
		var min = parseInt(prompt("Choisissez un nombre minimum"));
		var max = parseInt(prompt("et maximum"));
		nbremistere=Math.floor(Math.random() * (max - min +1)) + min;
		console.log(nbremistere);
		$("span").text(" "+b);

	}	

	function gagner(){
		alert("Gagné");
		demarrerPartie();

	}


	function perdu(message){
		
		

		alert(message);

		demarrerPartie();
	}	

	
	function recommence(message){
		--b;
        // console.log(b);
        $("span").text(b);
        	alert(message);


    }





    function clickValider(){

		// Récupérer le contenu de mon input
		var  recupere=parseInt($("input").val());
		

		if (recupere===nbremistere){

			gagner();
		};
		if (b==0){
			perdu("yas plus de tentatives recommence");
		}

		
		else if (recupere>nbremistere){
			recommence("Perdu, votre nombre est plus grand");


			
		}
		else if (recupere<nbremistere){
			recommence("Perdu, votre nombre est plus petit");


		}

	}
	

	$("button").click(function(){
		clickValider();
		
	});
	demarrerPartie();

}


	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.






	
	
    //Annonce des tentatives.
    //Fonction pour faire déscendre le nombre de tentatives lorque l'on appuie sur le boutton TEST.
    

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

	
	

		// Récupérer le contenu de mon input
		

		// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
				*/




			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/

	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/

