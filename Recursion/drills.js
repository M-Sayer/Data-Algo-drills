
function printOrg(obj) {

  for ( const [key, value] of Object.entries(obj)) {
    console.log(key, value)
    if (typeof value === 'object') {
      console.log(key)
      printOrg(value)
    } else {
      console.log(key)
      console.log(value)}
  }
}


console.log(printOrg({test: 'test', testing: { test2: 'test2'}})) 
