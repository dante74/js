/* Calculate average value of items at even indexes. 
Zero is not considered to be even number. 
[1,6,23,8,4,98,3,7,3,98,4,98] */

let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let len = tab.length;
let sum = 0;
let number = 0;


for( i = 2; i<len; i+=2)
{
        sum +=tab[i];
        number +=1;
    

}

console.log("Wartość Średnia pozycji przy parzystych indeksach wynosi ", sum/number);