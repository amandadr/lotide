function pigLatin(input) {
  //an array to hold the translation
  let translatedWords = [];

  for (let i = 0; i < input.length; i++) {
    const first = input[i][0];
    //the new word: add the first letter to the end, then add 'ay'
    let result = input[i].substr(1) + first + 'ay';
    //group it all together
    translatedWords.push(result);
  }

  //combine each word into a single string, with a space between
  let result = translatedWords.join(' ');
  return result;
}

const args = process.argv;
const arr = args.slice(2);
const result = pigLatin(arr);
console.log(result);