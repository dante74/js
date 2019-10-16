// Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
let items = [1,6,23,8,4,98,3,7,3,98,4,98]
let sum = 0;
let len = items.length;
for(i=0; i<len;i++)
{
    if(items[i] %2 != 0)
    {
        sum += items[i];
    }
}
console.log("Suma wartości nieparzystych wynosi : ", sum);