//From years in array check for leap years [1974, 1900, 1985, 2000]
//Obecnie stosuje się formułę zgodną z kalendarzem Gregoriańskim wprowadzonym w 1582 roku przez papieża Grzegorza XIII, w którym rok przestępny spełnia jeden z następujących warunków:
// jest podzielny przez 4, ale nie jest podzielny przez 100
// jest podzielny przez 400
// ((rok mod 4 = 0) and (rok mod 100 <> 0)) or (rok mod 400 = 0)

let years=[1974, 1900, 1985, 2000];
let len = years.length;

for (i=0; i<len;i++)
{/*
    if(years[i] %4 == 0 && years[i] %4 != 0)
    {
        console.log("Rok ", years[i]);
        console.log(" jest rokiem przestępnym" );

    }
    else if(years[i] % 400 == 0)
    {
        console.log("Rok ", years[i]);
        console.log(" jest rokiem przestępnym" );
        
    } */
    if((years[i] %4 == 0 && years[i] %4 != 0) ||  (years[i] % 400 == 0))  
    {

        console.log("Rok ", years[i]);
        console.log(" jest rokiem przestępnym" );
    }
    else 
    {
        console.log("Rok ", years[i]);
        console.log(" nie jest rokiem przestępnym" );
    }

}