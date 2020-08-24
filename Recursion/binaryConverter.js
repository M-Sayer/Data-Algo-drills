function toBinary(x) {
  if (x < 0) {
    throw new Error('Negative numbers not acceptable');
  }
  if (x === 0 || x === 1) {
    return x.toString();
  }
  const lsb = (x % 2).toString();
  const remainingBits = Math.floor(x / 2);
  const remainingBitsInBinary = toBinary(remainingBits);
  return remainingBitsInBinary + lsb;
}

console.log(toBinary(2695)); // 1010