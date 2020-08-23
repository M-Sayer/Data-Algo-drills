// function stringSplitter(string) {

//   if(string === '') {
//     return ''
//   }

//   const regex = /[a-zA-Z0-9]/
//   return [regex.test(string[0]) ? string[0] + stringSplitter(string.slice(1)) :' ' + stringSplitter(string.slice(1))]
// }

// console.log(stringSplitter('abc as'))

function split(str, sep) { 
  let idx = str.indexOf(sep); 
  if (idx === -1) return [str];

  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep)); }
  
  console.log(split('1/21/2018', '/'))