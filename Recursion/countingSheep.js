
function countingSheep(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the moon')
  }

  console.log(`${num}: Another sheep jumps over the moon`)
  countingSheep(num-1)
}

countingSheep(5) 