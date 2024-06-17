import button from "../components/button.js";
import paragraph from "../components/paragraph.js";
const landingMain = document.getElementById("container");

// innerHTML est une propriété qui interprête les valeurs qui sont à droite de l'opérateur d'assgination en HTML 
landingMain.innerHTML =
  paragraph("Salut") +
  paragraph("Les") +
  paragraph("Amis") +
  button("Valider", "submit", "login-button");



  // AJAX les requêtes XMLHTTPRequest sont périmées on utilise fetch qui passe par du format json
  // afin de communiquer avec le serveur d'application 
  // Le verbe HTTP par défaut d'une requête fetch est GET Autrement dit il s'agit d'une requête en lecture seule


  // fetch retourne une Promise qui n'est pas une réponse instantanée donc il s'agit d'une fonction asynchrone
  fetch('https://chezbobo.onrender.com/products', {
    method: 'GET'
  })
    .then((result) => {
        // then intercepte le résultat de fetch qui est d'abord en json il faut donc qu'il soit parsé
        return result.json()
    })
    .then((javascript) => {
      // le résultat retourné  est parsé en JavaScript si bien qu'il est alors utilisable
      console.log('mes données', javascript);
    })


    
