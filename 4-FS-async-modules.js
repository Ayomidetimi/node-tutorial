//asynchreneous approach

const { readFile, writeFile } = require('fs')

console.log('starting')
readFile('./content/first.txt', 'utf8', (err, result)=> {
  if(err) {
    console.log(err)
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf8', (err, result)=> {
    if(err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile('./content/fifth.txt', `hey siri ${first}, ${second}`,
    (err, result)=> {
      if (err) {
        console.log(err)
        return;
      }
      console.log('processing')
    })
  })
})

console.log('finished')
