// Choose longest string from the array. 
// [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]

let tab = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];
let len = tab.length;
let longest = tab[0];

for( i=1; i<len; i++)
{
    if(longest.length < tab[i].length)
    {
        longest = tab[i];
    } 

}
console.log("Najdłuższy wyraz w tablicy to " , longest);
console.log("Ilość znaków : ", longest.length);