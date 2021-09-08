// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var lettere = ["a","b","c"];
var numeri = [1,2,3];

// function merge
function merge(arr1, arr2){
    var mergedArray = [];
    while ( mergedArray.length < (arr1.length + arr2.length)){
        for ( var i = 0; i < arr1.length; i++) {
            for ( var k = 0; k < arr2.length; k++) {
                if ( !mergedArray.includes(arr2[i])){
                    mergedArray.push(arr2[i]);
                }
            }
            mergedArray.push(arr1[i]);
        }
    }
    return mergedArray;
}
console.log(merge(lettere, numeri));
