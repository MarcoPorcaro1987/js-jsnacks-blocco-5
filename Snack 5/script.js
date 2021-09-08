// Scrivi una funzione che accetti tre argomenti:  un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

var arr=[0,1,2,3,4,5,6,7,8,9,10];

function compreso(arr,a,b){
    if( a < b  && b < arr.length){
        let newArr=[];
        while(a < b){
            newArr.push(arr[a]);
            a++;
        }
        return newArr;
    }
    return false;
}

console.log(compreso(arr,0,5));
    