// Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 


let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let len = tab.length;
let max = 0;
let index_tab=[]
for(i=0; i< len; i++) 
{
    
    if(max >= tab[i])
    {
        if(max==tab[i]) 
        {
            index_tab.push(i);
        }
        
    }   
    else 
    {
        max = tab[i]
        index_tab=[];
        index_tab.push(i);
        
    }  

}
console.log('Największa znaleziona wartość to : ', max);
console.log('W tablicy znajduje się pod indeksami: ', index_tab);
