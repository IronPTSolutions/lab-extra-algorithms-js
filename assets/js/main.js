
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
  number = `${number}`;
  let reversed = '';
  for (let i = number.length - 1; i >= 0; i--) {
    const digit = number[i];
    reversed += digit;
  }
  return parseInt(reversed);
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
  let result = false;
  if (original.length === sample.length) {
    let diff = 0;
    let i = 0;
    while (diff < 2 && i < original.length) {
      const originalChar = original[i];
      const sampleChar = sample[i];
      if (originalChar !== sampleChar) {
        diff++;
      }
      i++;
    }
    result = diff < 2;
  } else if (Math.abs(original.length - sample.length) === 1) {
    if (original.length > sample.length) {
      result = original.includes(sample);
    } else {
      result = sample.includes(original);
    }
  } else {
    result = false;
  }
  return result;
}

/**
 * 'hello world' => 'Hello World'
 * 'this IS A sentence' => 'This iS a Sentence'
 * @param {string} sentence 
 * @returns {string}  
 */
function capitalize(sentence) {
  const words = sentence.split(' ');
  const capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 3) {
      const capitalized = word[0].toUpperCase() + word.substring(1);
      capitalizedWords.push(capitalized);
    } else {
      const loweralized = (word.length > 1) ? word[0].toLowerCase() + word.substring(1) : word[0].toLowerCase();
      capitalizedWords.push(loweralized);
    }
  }
  return capitalizedWords.join(' ');
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

}

/**
 * Count how many sheep there are in array (ignoring cases).
 * If there are a wolf in the array then a poor sheep will die, but if there are a dog then the wolf can't kill a sheep.
 * ['sheep', 'wolf', 'dog', 'ShEep'] => 2
 * ['sheep', 'wolf', 'wolf', 'dog'] => 0
 * ['wolf', 'dog'] => 0
 * [] => 0
 * ['shep'] => 0
 * ['SHEEP', 'sheep', 'dog'] => 2
 * @param {[string]} animals 
 * @returns {number}
 */
function countSheep(animals) {
  let sheep = 0;
  let wolves = 0;
  let dogs = 0;
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i].toLowerCase();
    switch (animal) {
      case 'sheep':
        sheep++;
        break;
      case 'wolf':
        wolves++;
        break;
      case 'dog':
        dogs++;
        break;
    }
  }

  if (wolves > dogs) {
    return Math.max(sheep - (wolves - dogs), 0);
  } else {
    return sheep;
  }
}

/**
 * [1, -1] => 1
 * [1, -1, -1, 2] => 3
 * [-1, -1, -2] => 0
 * @param {[number]} numbers 
 * @returns {[numbers]}
 */
function sumPositives(numbers) {

}


/**
 * [1, -1] => [-1, 1]
 * [1, -1, -1, 2] => [-1, 1, 1, -2]
 * [-1, -1, -2] => [1, 1, 2]
 * @param {[number]} numbers 
 * @returns {[numbers]}
 */
function invert(numbers) {

}