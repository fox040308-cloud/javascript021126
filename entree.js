// Entrée : recuperer une valeur fournie par un utilisateur ou un dispositif 
// Une seule instruction : prompt

// Affiche un popup avec un message
alert("Message d'alerte");

// Affiche un popup avec un message et un champ de saisie
prompt("Quel est votre nom ?");

// Récupérer la valeur saisie par l'utilisateur 
let nom = prompt("Quel est votre nom ?");
console.log("Bonjour " + nom);

// prompt retourne toujours une valeur de type string
let nombre = Number(prompt("Entrez un nombre :"));
console.log("Le nombre saisi est : " + nombre);