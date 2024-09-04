function numberDiamondPattern(n) {
  // for upper pattern
  for (let i = 1; i <= n; i++) {
    let str = "";
    let emptyString = "";
    for (let s = 1; s <= i; s++) {
      if (s > 1) {
        emptyString += " ";
      }
    }
    for (let j = i; j <= n; j++) {
      str += j + " ";
    }
    console.log(emptyString + str);
  }
  // for lower pattern
  for (let i = 1; i <= n - 1; i++) {
    let emptyString = "";
    let str = "";
    for (let j = n-i-1; j >= 1; j--) {
      emptyString += " ";
    }
    for (let k = n-i; k <= n; k++) {
      str += k + " ";
    }
    console.log(emptyString + str);
  }
}

numberDiamondPattern(7);
