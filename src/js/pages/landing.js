import button from "../components/button.js";
import paragraph from "../components/paragraph.js";
const landingMain = document.getElementById("container");

landingMain.innerHTML =
  paragraph("Salut") +
  paragraph("Les") +
  paragraph("Amis") +
  button("Valider", "submit", "login-button");
