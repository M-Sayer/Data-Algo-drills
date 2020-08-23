function reverseString(string) {
  if(string.length === 0) {
    return ''
  }

  return string[string.length - 1] + reverseString(string.replace(string.slice(-1), ''))
}

console.log(reverseString('string'))