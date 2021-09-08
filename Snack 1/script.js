// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
var zucchine = [
    {
        "varieta" : 1,
        "pesoInGr" : 120,     
        "lunghezzaInCm" : 8
    },
    {
        "varieta" : 2,
        "pesoInGr" : 200, 
        "lunghezzaInCm" : 14    
    },
    {
        "varieta" : 3,
        "pesoInGr" : 250,    
        "lunghezzaInCm" : 35
    },
    {
        "varieta" : 4,
        "pesoInGr" : 80, 
        "lunghezzaInCm" : 20
    },
    {
        "varieta" : 5,
        "pesoInGr" : 65,
        "lunghezzaInCm" : 19
    },
    {
        "varieta" : 6,
        "pesoInGr" : 78,
        "lunghezzaInCm" : 23
    },
    {
        "varieta" : 7,
        "pesoInGr" : 95,
        "lunghezzaInCm" : 21
    },
    {
        "varieta" : 8,
        "pesoInGr" : 126,
        "lunghezzaInCm" : 18
    },
    {
        "varieta" : 9,
        "pesoInGr" : 315,
        "lunghezzaInCm" : 29
    },
    {
        "varieta" : 10,
        "pesoInGr" : 128,
        "lunghezzaInCm" : 28
    },
];
// Calcola quanto pesano tutte le zucchine.

var sum = 0;
for ( var i = 0; i < zucchine.length; i++) {
    var peso = parseInt((zucchine[i]["pesoInGr"]));
    sum += peso;
}

console.log(`Il peso totale delle zucchine è: ${sum} grammi`);