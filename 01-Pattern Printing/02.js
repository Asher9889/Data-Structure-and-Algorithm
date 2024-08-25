function starPrint(input){
    for (let i = 1; i <= input; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
          stars += "*";
        }
        console.log(stars);
      }
}

starPrint(4)
console.log("======")
starPrint(2)
console.log("======")
starPrint(5)
console.log("======")
starPrint(10)
console.log("======")
