// Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 
// One loop run.

let tab = [1,6,23,8,4,98,3,7,3,98,4,98]
let len = tab.length;
let max = tab[0];
let min = tab[0];


for(i=1; i<len; i++)
{
    if(max<tab[i])
        {
            max = tab[i];
        }
    if(min>tab[i])
        {
            min = tab[i];    
        }   
        
}
console.log("Wartość maksymalna wynosi : ", max);
console.log("Wartość minimalna wynosi : ", min);