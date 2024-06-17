const paragraph = function (data) {
  // mettre le paramètre data me permet de dynamiser l'utilisation de cette variable
  // ci-dessous un exemple d'interpolation de texte
  // vous lisez data mais à termes c'est sa valeur que vous verrez
  return `
            <p>${data}</p>
        `;
};

/*
    ne pas oublier le export default
    qui va permettre d'utiliser, d'appeller la fonction dans un autre fichier
*/
export default paragraph;
