const x = {
    name: "Saurabh",
    salary: 100000,
    designation: "Software Engineer",
    team: "Azure"
}

"Method 01"
// for accessing array of keys
console.log(Object.keys(x))  // it will return array of keys

"Method 02"
// for accessing array of values
console.log(Object.values(x)) // it will return array of values;

"Method 03"
// for accessing key and value both. but it return array of arrya. each array contain each key value pair
console.log(Object.entries(x)) // it will return array of array. in each array contain key and value

"Method 04"
/**
 * we can use for lopp over Object.keys for accesing value because using key we can access value
 */
// Object.keys gives us array of keys. using for of loop we can access values
for(let key of Object.keys(x)){
    console.log(`Key of the object x is ${key}: and value is ${x[key]}`)
}

"Method 05"
// using for in loop we can access key and its value
// always remeber when we using varianle use square brackets.
for(let key in x){
    console.log(`key of object x is ${key} and it's value is ${x[key]}`)
}

const arr = [10,20,30]

for(let key in arr){
    console.log(key)
}