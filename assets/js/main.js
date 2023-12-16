
/**
 * [1, 2, 3, 4, 5] => [1, 5]
 * [1, 1, 1, 1] => [1, 1]
 * [1] => [1, 1]
 * [] => Error('Empty array, unable to obtain min and max numbers')
 * @param {[number]} numbers 
 * @returns {[number]}  
 */
function minMax(numbers) {
  let min;
  let max;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (min === undefined && max === undefined) {
      min = number;
      max = number;
    } else {
      if (number > max) {
        max = number;
      }
      if (number < min) {
        min = number;
      }
    }
  }
  const result = [min, max];
  return result;
}

/**
 * Kubernetes => k8s
 * Internationalization => i18n
 * Localization => l10n
 * Human resources => HR
 * General Data          Protection Regulation => GDPR
 * General Data Protection Regulation            
 * a => a
 * abc => abc
 * abcd => abcd
 * @param {string} word 
 * @returns {string}  
 */
function abbreviate(word) {
  if (word.includes(' ')) {
    let abbreviatedWord = '';
    const words = word.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word !== '') {
        abbreviatedWord += word[0].toUpperCase();
      }
    }
    return abbreviatedWord;
  } else if (word.length > 4) {
    const begin = word[0].toLowerCase();
    const between = word.length - 2;
    const end = word[word.length - 1].toLowerCase();
    return `${begin}${between}${end}`;
  } else {
    return word;
  }
}

/**
 * [1, 2, 3] - 2 => 1
 * [1, 2, 3] - 5 => -1
 * ['a', 'b'] - 'c' => -1
 * ['1', '2'] - 1 => -1
 * @param {[number | string]} elements 
 * @param {number | string} element 
 * @returns {number} index of the element or -1 if not exists
 */
function indexOf(elements, element) {
  let result = -1;
  let i = 0;
  while (i < elements.length && result === -1) {
    const iElement = elements[i];
    if (iElement === element) {
      result = i;
    }
    i++;
  }
  return result;
}

/**
 * [1, 2, 3, 4] - 2 => true
 * [1, 2, 3, 4] - 5 => false
 * [1, 2, 3, 4] - '1' => false
 * ['a', 'b', 'c'] - 'c' => true
 * ['a', 'b'] - 'd' => false
 * @param {[number | string]} elements 
 * @param {number | string} element 
 * @returns {boolean}
 */
function exists(elements, element) {
  let result = false;
  let i = 0;
  while (i < element.length && !result) {
    const iElement = elements[i];
    if (iElement === element) {
      result = true;
    }
    i++;
  }
  return result;
}


/**
 * [1, 2, 3, 4] - 2 => false
 * [1, 1, 1, 1] - 1 => true
 * ['a', 'a'] - 'a' => true
 * ['a', 'b'] - 'a' => false
 * @param {[number | string]} elements 
 * @param {number | string} element
 * @returns {boolean}
 */
function every(elements, element) {
let result = true;
let i = 0;
while (i < elements.length) {
  const iElement = elements[i];
  if (iElement === element) {
    result = true;
  } else if (iElement !== element) {
    result = false;
    break;
  }
  i++;
}
  return result;
}
 console.log(every([1, 2, 3, 4], 2));
 console.log(every([1, 1, 1, 1], 1));
 console.log(every(['a', 'a'] , 'a'));
 console.log(every(['a', 'b'], 'a'));

/**
 * abcd - [0,3,1,2] => acdb
 * ab - [1,0] => ba
 * abc - [1] => Error('Word and array length mismatch')
 * @param {string} word 
 * @param {[number]} positions 
 * @returns {string}  
 */
function scrambleIt(word, positions) {
  const scramble = [];
  for (let i = 0; i < word.length; i++) {
    const position = positions[i];
    const char = word[i];
    scramble[position] = char;
  }
  return scramble.join('');
}

/**
 * 12345 => 54321
 * 34 => 43
 * @param {number} number 
 * @returns {number}  
 */
function reverseNumber(number) {
  let numberReserve = '';
  
  for (let i = number.toString().length - 1; i >= 0; i--) {
    iNumber = number.toString()[i];
    numberReserve += iNumber;
  }
    return numberReserve += iNumber;
  }
  console.log(reverseNumber(12345));

/**
 * 
 * versed - xersed => true
 * versed - applb => false
 * versed - v5rsed => true
 * 1versed - versed => true
 * versed1 - versed => true
 * versed - veersed => false
 * versed - versed => true
 * 
 * @param {string} original 
 * @param {string} sample 
 * @returns {boolean}  
 */
function isMisspelled(word1, word2) {
  if (word1 === word2) {
    return true;
  }

  if (word1.length === word2.length) {
    let differences = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        differences++;
      }
    }
    if (differences > 1) {
      return false;
    } else {
      return true;
    }
  }

  if (word1.length !== word2.length) {
    if (word1.length - word2.length > 1 ||  word2.length - word1.length > 1) {
      return false;
    } else {
      if (word1.includes(word2) || word2.includes(word1)) {
        return true;
      } else {
        return false;
      }
    }
  }
  }
console.log(isMisspelled('versed', 'xersed'));
console.log(isMisspelled('versed', 'applb'));
console.log(isMisspelled('versed', 'v5rsed'));
console.log(isMisspelled('1versed', 'versed')); 
console.log(isMisspelled('versed1', 'versed'));
console.log(isMisspelled('versed', 'veersed'));
console.log(isMisspelled('versed', 'versed'));

/**
 * hello world => Hello World
 * this is a sentence => This is a Sentence
 * @param {*} sentence 
 * @returns {string}  
 */
function capitalize(sentence) {
  let sentenceArray = sentence.split(" ");
  let mayusLetter = "";
    for (let i = 0; i < sentenceArray.length; i++) {
    let newPhrase = sentenceArray[i];
    if (newPhrase.length >= 3) {
      newPhrase = newPhrase[0].toUpperCase() + newPhrase.slice(1).toLowerCase();
    }
    mayusLetter += newPhrase + " "
    }
  mayusLetter = mayusLetter.trim();
  return mayusLetter;
  }
console.log(capitalize("hello world"));
console.log(capitalize("this is a sentence")); 

/**
 * "aeiou" => true
 * "a" => false
 * "sol" => false
 * "solitarieu" => true
 * @param {string} word 
 * @returns {boolean}
 */
function containsAllVowels(word) {
  const vocals = ['a', 'e', 'i', 'o', 'u'];

  const allVocals = vocals.every(function(vocal) {
    return word.includes(vocal);
  });

  return allVocals;
}


/**
 * Count how many sheep there are in array (ignoring cases).
 * If there are a wolf in the array then a poor sheep will die, but if there are a dog then the wolf can't kill a sheep.
 * ['sheep', 'wolf', 'dog', 'ShEep'] => 2
 * ['sheep', 'wolf', 'wolf', 'dog'] => 1
 * ['wolf', 'dog'] => 0
 * [] => 0
 * ['shep'] => 0
 * ['SHEEP', 'sheep', 'dog'] => 2
 * @param {[string]} animals 
 * @returns {number}
 */
function countSheep(animals) {
    let sheepCount = 0;
  let wolfCount = 0;
  let dogCount = 0;
  for (let i = 0; i < animals.length; i++) {
    let iAnimals = animals[i];
    if (iAnimals.toLowerCase() === 'sheep') {
      sheepCount++;
    } else if (iAnimals.toLowerCase() === 'wolf'){
      wolfCount++;
    } else if (iAnimals.toLowerCase() === 'dog'){
      dogCount++;
    }
  }
  if (sheepCount > 0 && wolfCount > dogCount) {
    sheepCount--;
  }
  return sheepCount;
}
