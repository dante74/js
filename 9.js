/* With a given start value of 0. 
Iterate the array and add even items and subtract odd ones. 
[1,6,23,8,4,98,3,7,3,98,4,98] */

let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum = 0;
let len = tab.length;

for(i=0; i<len; i++)
{
    if(tab[i] %2 == 0)
    {
        sum+=tab[i];
    }
    else
    {
        sum-=tab[i];
    }

}
console.log("Wartość przeliczonych według założeń składników wynosi : ", sum);