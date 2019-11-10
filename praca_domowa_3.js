// let iife = (function() {
//     let value;    
//     return {
//             setValue(element){
//                 this.value = element;
//             },
//             showValue(){
//              return (typeof this.value === "undefined" || this.value === "") ? "Value in object is empty or undefined" : this.value;
//             },
//             reverseValue(){
//                 this.value = (typeof this.value === "string") ? this.value.split("").reverse().join("") : this.value*(-1);
//             }
//     }
// })();

// console.log(iife.showValue());
// iife.showValue('');
// console.log(iife.showValue());
// iife.setValue('Ala ma kota a kot ma Alę');
// console.log(iife.showValue());
// iife.reverseValue();
// console.log(iife.showValue());
// iife.setValue(6);
// iife.reverseValue();
// console.log(iife.showValue());

/******************************************************************* */
// add = (a,b) => a+b;
// sub = (a,b) => a-b;
// div = (a,b) => a/b;
// multi = (a,b) => a*b;
// const calc = function(){  
//     return  {
//         x : 0,
//         y : 0,
//         op : '',
//         setOperation : function(a,b,c){
//             this.x = a;
//             this.y = b;
//             this.op = c;
//         },
//         calculate : function () { 
//             return this.op(this.x,this.y);
//         }       
//     }
// }
// let calculator = calc();
// calculator.setOperation(5,10,multi);
// console.log(calculator.calculate());

/**************************************************** */


// const summ = function(tab){
//     BaseObject = {
//         x : 0,
//         y : 0,
//         sum: function(){
//             return this.x +this.y;
//         }
//     }

//     for(let obj of tab){
//         BaseObject.x=(obj.x);
//         BaseObject.y=(obj.y);
//         console.log('Suma ' + obj.x + ' i ' + obj.y + ' wynosi ' +  BaseObject.sum());  
//     }
// }
// summ([{x:2,y:3},{x:-1,y:6},{x:0,y:8}]);


/************************************************ */
const tab = [
    {
    x: 1,
    y: ' object one value ',
    operation: function() {
        return "object one prefix " + this.x + this.y;
        }
    },  

    {
    x: 2,
    y: ' object two value ',
    operation: function() {
        return "object two prefix " + this.x + this.y;
        }
    },

    {
    x: 3,
    y: ' object three value ',
    operation: function() {
        return "object three prefix " + this.x + "  "+ this.y;
        }
    },
]


for(let i=0; i<tab.length;i++){
    (i!=tab.length-1) ? 
    console.log(tab[i].operation.bind(tab[i+1])()) :
    console.log(tab[i].operation.bind(tab[0])());
}
