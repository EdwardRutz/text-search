text = 'blue, green, blue, yellow, green';
keyWords = ['blue', 'green', 'yellow'];
let keyWordsFound = {};
let i = 0;
console.log('keyWords.length', keyWords.length);
while(i < keyWords.length) {
  let keyWordItem = keyWords[i];
  console.log('keyWordItem', keyWordItem);
  let re = new RegExp(keyWordItem, "ig");
  console.log('re', re);
  keyWordsFound['keyWordItem'] = text.match(re); //TODO Does't work with variable???
  console.log('keyWordsFound', keyWordsFound);
  i += 1;
}
