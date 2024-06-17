import button from "../components/button.js";
import paragraph from "../components/paragraph.js";
const landingMain = document.getElementById("container");

landingMain.innerHTML =
  paragraph("Salut") +
  paragraph("Les") +
  paragraph("Amis") +
  button("Valider", "submit", "login-button");



  fetch('https://chezbobo.onrender.com/products', {
    method: 'GET'
  })
    .then((result) => {
        return result.json()
    })
    .then((javascript) => {
      console.log('mes données', javascript);
    })


    
