const { readFile } = require('fs');

console.log('first code');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('second code')
})

console.log('last code')