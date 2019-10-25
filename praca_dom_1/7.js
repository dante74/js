// Calculate average value from the given array for even numbers 
// [1,6,23,8,4,98,3,7,3,98,4,98]

let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let len = tab.length;
let sum = 0;
let number = 0;


for( i = 0; i<len; i++)
{
    if(tab[i] % 2 == 0 )
    {
        sum +=tab[i];
        number +=1;
    }

}

console.log("Wartość Średnia dla podanych liczb parzystych wynosi ", sum/number);
