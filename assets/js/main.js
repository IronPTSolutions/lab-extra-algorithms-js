
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
    const check = elements[i];
    if (check === element) {
      result = true;
    } else if (check !== element) {
      return false;
      break;
    }
    i++;
  }
  return result;
}

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

  const numToStr = number.toString();

  let newNumber = "";

  for (let i = numToStr.length - 1; i >= 0; i--) {
    newNumber += numToStr[i];
  }
  return parseInt(newNumber);
}

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
function isMisspelled(original, sample) {

}

/**
 * hello world => Hello World
 * this is a sentence => This is a Sentence
 * @param {*} sentence 
 * @returns {string}  
 */
function capitalize(sentence) { 

  const words = sentence.toLowerCase().split(" ");
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  return words.join(" ");
}

/**
 * "aeiou" => true
 * "a" => false
 * "sol" => false
 * "solitarieu" => true
 * @param {string} word 
 * @returns {boolean}
 */
function containsAllVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const areVowels = vowels.every(function(vowel)) {
    return word.includes(vowel);
  }
  return areVowels;
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
  let sheepCounter = 0;
  let wolfCounter = 0;
  let dogCounter = 0;

  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    if (animal.toLowerCase() === "sheep") {
      sheepCounter++;
    } else if (animal.toLowerCase() === "wolf") {
      wolfCounter++;
    } else if (animal.toLowerCase() === "dog") {
      dogCounter++;
    }
  }

  if (sheepCounter > 0 && (wolfCounter > dogCounter)) {
    sheepCounter--
  }
  return sheepCounter;
}