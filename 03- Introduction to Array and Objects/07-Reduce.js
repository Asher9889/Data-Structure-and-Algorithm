/**
 * Reduce function is a high order function. It takes an array and reduce it to single value. it can be any data type. It does this by useing callback function. it has two arguments one is initial value, second is current value. according to the callback fn logic. it tranform an arrya into single value
 */

let cart = [
    {
        item: "iphone",
        price: 100000
    },
    {
        item: "case",
        price: 1000
    },
    {
        item: "buds",
        price: 5000
    },
]

function totalPrice(arr){
    let result = arr.reduce((prevValue, currValue)=>{
        console.log("prevValue: ", prevValue, "currValue: ", currValue)
        let newPrice = prevValue.price + currValue.price  
        return {price: newPrice}
    })
    return result;
}

let price = (totalPrice(cart));
console.log(price)