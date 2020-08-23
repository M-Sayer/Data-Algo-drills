const org = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: ['Steve', 'Kyle', 'Andra'],
      Zhao: ['Richie', 'Sofia', 'Jen']
    },
    Schrage: {
      VanDyck: ['Sabrina', 'Michelle', 'Josh'],
      Swain: ['Blanch', 'Tom', 'Joe']
    },
    Sandberg: {
      Goler: ['Eddie', 'Julie', 'Annie'],
      Hernandez: ['Rowi', 'Inga', 'Morgan'],
      Moissinac: ['Amy', 'Chuck', 'Vinni'],
      Kelley: ['Eric', 'Ana', 'Wes']
    }
  }
}

// function takes in an object
// if object has keys, loop through them
// for each key, print key
//if key value = obj, repeat previous 2 steps (recurse)
//if key value = arr, print values inside array

function printObj(obj, tabs = 0) {
  let tab = ''
  
  for (let i = 0; i < tabs; i++) {
    tab += '\t'
  }
  
  //base case - if obj value is an arr
  if (Array.isArray(obj)) { // 
    obj.forEach(item => console.log(tab + item))
  } else { // recursive case - if obj value is another obj
    tabs++
    for (const key in obj) {
      console.log(tab + key)
      printObj(obj[key], tabs)
    }
  }
}

console.log(printObj(org))


