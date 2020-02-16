const tab = [1,6,23,8,4,8,3,7];


/* 1
const sum = function(obj){
    let i = 0;
    let summary = 0;
    while(obj[i])
        {
            summary +=obj[i];
            i++;
        }
    return summary;    
}

console.log("Suma elementów podanej tablicy wynosi : " + sum(tab));
*/



/* 2
const sum_last_end = function(obj){

    return obj[0] + obj[obj.length -1];
}
console.log("Suma pierwszegom i ostatniego elementu tablicy wynosi " + sum_last_end(tab));
*/



/* 3
const what = function(obj, indeks){
    return obj[indeks];
}
console.log("Wartość elementu tablicy dla podanego indeksu wynosi : ", what(tab,3));
*/



/* 4
const reverse = function(obj){
    const rev_obj = [];
    for(let i = obj.length-1; i>=0; i--){
        rev_obj.push(obj[i])
    }
    return rev_obj;
}
console.log("Odwrócona tablica : ", reverse(tab));
*/



/* 5
const sum_el = function(obj){
    const new_tab=[];
    let i = 0;
    while(obj[i])
        {
            new_tab.push(obj[i] + obj[++i]);
            i++;
        }
    return new_tab;    
}
console.log("tablica z posumowanymi sąsiednimi elementami ", sum_el(tab));

*/


/* 6
const tab1 = [1,6,23,8,4,8,3];

const sum_el = function(obj){
    const new_tab=[];
    for(let i = 0; i<obj.length-2;i++){
        new_tab.push(obj[i] + obj[++i]);
    }
    new_tab.push(obj[obj.length-1]*2);
    return new_tab;    
}
console.log("tablica z posumowanymi sąsiednimi elementami ", sum_el(tab1));
*/



/* 7
const rand = function(obj){
    return obj[Math.floor(Math.random() * obj.length)];  
}
console.log("Wartość tablicy pod losowym indeksem wynosi ", rand(tab));
*/



/* 8
const rand_min = function(obj, times){
    const new_tab = [];
    for(let i = 0; i<times; i++){
        new_tab.push(obj[Math.floor(Math.random() * obj.length)]);
    }

    let min = new_tab[0];
    for(let i=1; i<new_tab.length; i++){
        if(min>new_tab[i]){
            min = new_tab[i];
        }
    }
    console.log(new_tab);
    return min;
}
console.log(rand_min(tab,3));
*/


/* 9
const ran = function(obj){
    
    let random_index;
    const ran_tab = [];
    while(obj[0]){
        random_index = Math.floor(Math.random() * obj.length);
        ran_tab.push(obj[random_index]);
        obj.splice(random_index,1);
    }
    return ran_tab;
}
console.log(ran(tab));

*/


/* 10
const add_or_sub = function(obj){
    let score = obj[0];
    let i = 1;
    let random_char ; 
    while(obj[i]){
        random_char = Math.floor(Math.random() * 2);
        if(random_char==0)
            {
                console.log(score + ' + ' + obj[i] + '\n');
                score +=obj[i];   
            }else {
                console.log(score + ' - ' + obj[i] + '\n');
                score -=obj[i];
            }
        i++;
        }
    return score;
}
console.log('Wynik : ' , add_or_sub(tab));


*/



/* 11
const dzis = function(){
    let dzien = new Date();
    dzien_tyg = dzien.getDay();
    switch(dzien_tyg){
    case 0: console.log("Dziś jest niedziela!"); break;
    case 1: console.log("Dziś jest poniedziałek!"); break;
    case 2: console.log("Dziś jest wtorek!"); break;
    case 3: console.log("Dziś jest środa!"); break;
    case 4: console.log("Dziś jest czwartek!"); break;
    case 5: console.log("Dziś jest piątek!"); break;
    case 6: console.log("Dziś jest sobota!</h1>"); break;
    };

}

console.log(dzis());
  
*/

/* 12
const to_friday = function(){
    let dzien = new Date();
    dzien_tyg = dzien.getDay();
    if(5 - dzien_tyg >0){
        console.log(5 - dzien_tyg + " dni do Piątku :)");
    } else if(5 - dzien_tyg < 0){
        console.log("Dziś sobota, zostało 6 dni do Piątku");
    } else console.log("Dziś jest Piątek, Piątunio, Piąteczek :):):) ");
}
to_friday();


*/

/* 13
const two_numbers = function(a,b){
    console.log(a+b);
    const operations = {
        sum : a+b,
        sub : a-b,
        mult : a*b,
        div : a/b,
              
    }
    return operations;
}

const results = two_numbers(5,10);
console.log("Dodawanie : " + results.sum);
console.log("Odejmowanie : " + results.sub);
console.log("Mnożenie : " + results.mult);
console.log("Dzielenie : " + results.div);
*/