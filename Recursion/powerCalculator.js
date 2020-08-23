function powerCalculator(int, exp) {
  if(exp <= 0) {
    return 1
  } 

  if(exp === 1) {
    return int
  }

  return int * powerCalculator(int, exp - 1)
}

console.log(powerCalculator(10, 3))