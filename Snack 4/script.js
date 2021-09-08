// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var lettere = ["a","b","c"];
var numeri = [1,2,3];

// function merge
function merge(arr1, arr2){
    let mergedArray = [];
    for(let i = 0; i < arr1.length; i++){
        mergedArray.push(arr1[i]);
        mergedArray.push(arr2[i]);
    }
    return mergedArray;
}


console.log(merge(lettere, numeri));
