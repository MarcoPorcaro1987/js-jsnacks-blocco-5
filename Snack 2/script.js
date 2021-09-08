// Crea 10 oggetti che rappresentano una zucchina.

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
        "lunghezzaInCm" : 13
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
        "lunghezzaInCm" : 12
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
        "lunghezzaInCm" : 7
    },
];

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchinePiccole = [];
var zucchineGrandi = [];
for(i=0; i < zucchine.length; i++){
    if(zucchine[i].lunghezzaInCm < 15){
        zucchinePiccole.push(zucchine[i]);
    } else {
        zucchineGrandi.push(zucchine[i]);
    }
}
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
var sumPiccole = 0;
var sumGrandi = 0;
for (var i = 0; i < zucchinePiccole.length; i++) {
    var peso = parseInt((zucchinePiccole[i]["pesoInGr"]));
    sumPiccole += peso;
}
for ( var i = 0; i < zucchineGrandi.length; i++) {
    var peso = parseInt((zucchineGrandi[i]["pesoInGr"]));
    sumGrandi += peso;
}
console.log(`Il peso totale delle zucchine piccole è: ${sumPiccole} grammi`);
console.log(`Il peso totale delle zucchine grandi è: ${sumGrandi} grammi`);