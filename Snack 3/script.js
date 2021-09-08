// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
// Chiedere all’utente di inserire una parola
var string = prompt("Inserisci una parola");

 // funzione per dividere, invertire e riunire la stringa inserita dall'utente
function reverseString(string){
    var reversedString = string.split("").reverse().join(""); 
    return reversedString;
}

// dichiarare variabile stringa invertita dalla funzione
var reversedString = reverseString(string);
