function triangularNumber(number) {
  if(number === 0) {
    return null
  }

  return number + triangularNumber(number - 1)
}

console.log(triangularNumber(9))