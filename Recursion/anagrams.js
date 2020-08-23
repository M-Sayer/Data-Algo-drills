function anagrams(string){
  const output = [];
  function traverse(string, perm = ''){
    if (!string) output.push(perm)
    for (let i = 0; i < string.length; i++){
      traverse(string.slice(0,i) + string.slice(i+1), perm + string[i]);
    }
  }
  traverse(string)
  return output
}

console.log(anagrams('abc'))

function anagram(string) {
  let output = []
  if(string === '') {
    return []
  } else if(string.length === 1) {
    return [ string ]
  }

  for (let i = 0; i < string.length; i++) {
    let prefix = string[i]
    let str = string.substring(0, i) + string.substring(i+1)
    let results = anagram(str)
    results = results.map(res => prefix + res)
    output = output.concat(results)
  } 
  return output

}

console.log(anagram('abc'))