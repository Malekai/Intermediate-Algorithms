// Sum All Numbers in a Range

//add all numbers in between
//use math.max and math.min to determine the start points
function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  for (var i = min + 1; i < max; i++) {
    arr.push(i);
  }
  //return newArr;
  var sumResult = arr.reduce(function(a, b) {
    return a + b;
  });
  return sumResult;
}
//need to get newArr working inside function

sumAll([4, 1]);

// Diff Two Arrays

//use index of to see if the numbers are in the array --for all nums
//--need to make a variable that stores nums that are not ocmmon
//push those numbers into a new array
function diffArray(arr1, arr2) {
  var newArr = [];
  //use a for loop to see if each num is in arr1
  for (var i = 0; i < arr1.length; i++){
    //if not in array then push to newArr
    var value = arr1[i];
    if (arr2.indexOf(value) == -1) {
      newArr.push(value);
    }
  }
  for (i = 0; i < arr2.length; i++){
    //if not in array then push to newArr
    var value2 = arr2[i];
    if (arr1.indexOf(value2) == -1) {
      newArr.push(value2);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Roman Numeral Converter

function convertToRoman(num) {
 //decimal value of nums with special chars
 var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 //empty string to store roman value
 var romanNum = "";
  //iterate through nums
  for (var i = 0; i < decimals.length; i++) {
    //while num is larger than decimal value, add romans equivilant
    while (num >= decimals[i]) {
      romanNum += romans[i];
      //subtract the number from the first integer it is larger than
      //and then add for whats left after subtraction in the beginning of while loop
      //it is going to add whats left after subtracting from itself the value it is next greater than in decimals and add the corresponding value until it is 0 and ends the loop
      num -= decimals[i];
    }
    //add I's to the values after some
  }

  return romanNum;
}

convertToRoman(36);

// Wherefore art thou

function whatIsInAName(collection, source) {
  // What's in a name?
  //filter out items that are not equal to source
  //item is equal to values inside collection
  var arr = collection.filter(function(item){
    //for capulet in source, compare to keys inside item
    //this is how you loop through an object
    for (var key in source) {
      //if the key in source is not equal to key in item return false
      if (source[key] != item[key]) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  //return filtered arr
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Search and Replace

function myReplace(str, before, after) {
  //change the last letter with the after?
  //make into array
  str = str.split(' ');
  //find location of old word
  var index = str.indexOf(before);
  //check if element is uppercase
  //if uppercase transform after into uppercase
  var upper = after.charAt(0).toUpperCase();
  if (before[0].toUpperCase() === before[0]) {
    after = after.split('');
    after.splice(0, 1, upper);
    after = after.join('');
  }
  //replace position of old word with new word
  str.splice(index, 1, after);
  return str.join(' ');
}

myReplace("His name is Tom", "Tom", "john");

// Pig Latin

function translatePigLatin(str) {
  var regex = /[aeiou]/gi;
  // if it starts with vowel just add way to the end
  if (str[0].match(regex)) {
    str = str + "way";
  }
  else {
  // it it does not, go up until it reaches first vowel
    // look for first vowel and store in a variable
    var firstV = str.indexOf(str.match(regex)[0]);
    // grab the letters up to the first vowel and store in value
    var value = str.slice(0, firstV);
    // then add the first vowel with the value and add "ay"
    str = str.slice(firstV) + value + "ay";
  }
  return str;
}

translatePigLatin("glove");

// DNA Pairing

function pairElement(str) {
  var arr = [];
  str = str.split('');
  //match corresponding pair with letter
  //letter stands for each case
  var match = function(letter) {
    switch(letter) {
      case "A":
        arr.push(["A", "T"]);
        break;
      case "T":
        arr.push(["T", "A"]);
        break;
      case "G":
        arr.push(["G", "C"]);
        break;
      case "C":
        arr.push(["C", "G"]);
    }
  };

  //loop through and run match with each indivual letter
  for (var i = 0; i < str.length; i++) {
    match(str[i]);
  }

  return arr;

}

pairElement("GCG");

// Missing letters

function fearNotLetter(str) {
  //return the missing letter from the sequuence
  //alphabet array
  var arr = [];
  var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //find str beginning value and string end value to start and end in a
  str.split('');
  //find specific position of beginning
  var b = a.indexOf(str[0]);
  var e = a.indexOf(str[str.length - 1]);
  //check against existing sequence
  //create new sequence with complete values to compare
  for (var i = b; i <= e; i++) {
    arr.push(a[i]);
  }
  for (i = 0; i < arr.length; i++) {
    //pull out value that is not in the str
    if (arr[i] !== str[i]) {
      return arr[i];
    }
  }

}

fearNotLetter("abce");

// Boo who

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof(bool) === "boolean")
    {
      return true;
    } else {
      return false;
    }
}

booWho(null);

// Sorted Union

function uniteUnique(arr) {
  //split arguments into separate arrays
  //make a loop and push into new arr
  var arr1 = [];
  for (var key in arguments) {
    //turn the object into an array
    arr1.push(arguments[key]);
  }
  //use reduce to flatten the function
  var flat = arr1.reduce(function(a, b) {
  return a.concat(b);
}, []);
  var sorted = [];
  for (var i = 0; i < flat.length; i++) {
    if (!sorted[flat[i]]) {
      sorted.push(flat[i]);
    }
  }

  return sorted;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities

function convertHTML(str) {
  //split each letter
  str = str.split('');

  //use switch statement for the characters given
  var convert = function(letter) {
    switch(letter) {
      case "&":
        str[i] = str[i].replace(/&/i, "&amp;");
        break;
      case "<":
        str[i] = str[i].replace(/</i, "&lt;");
        break;
      case ">":
        str[i] = str[i].replace(/>/i, "&gt;");
        break;
      case '"':
        str[i] = str[i].replace(/"/i, "&quot;");
        break;
      case "'":
        str[i] = str[i].replace(/'/i, "&apos;");
        break;
    }
  };

  //loop through and run convert
  for (var i = 0; i < str.length; i++) {
    convert(str[i]);
  }

  return str.join('');
}

convertHTML("Dolce & Gabbana");

// Spinal Tap Case

function spinalCase(str) {
  //create regex variable for spaces and underscores so we can replace
  var spaceUnderScore = /\s+|_+/g;
  //separate all cap letters and low case with spaces
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  //replace spaceUnderScore with -
  //turn everything lowercase
  str = str.replace(spaceUnderScore, '-').toLowerCase();
  return str;
}

spinalCase('Teletubbies say Eh-oh');

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  // add all odd fibb numbers
  // add the number previously before it, after 1
  var previous = 0;
  var current = 1;
  var result = 0;
  // make it add one for now
  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }
    // make variable for previous added to current
    var added = previous + current;
    // move current and previous up
    previous = current;
    current = added;
  }

  return result;
}

sumFibs(4);

// Sum All Primes

function sumPrimes(num) {
  // array to hold numbers beforehand
  var arr = [];
  // array to hold primes
  var primes = [];
  // push numbers into arr
  for (var i = 0; i < num; i++) {
    arr.push(i);
    // if number is prime add to primes
    for (i = 2; i <= num; ++i) {
      if (!arr[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (var j = i << 1; j <= num; j += i) {
          arr[j] = true;
        }
      }
    }
  }
  // add all prime numbers together for sum
  return primes.reduce((a, b) => a + b);
}

sumPrimes(10);

// Finders Keepers

function findElement(arr, func) {
  var num = 0;
  var filtered = arr.filter(func);
  //only return the first one
  return filtered[0];
}

findElement([1, 3, 5, 8, 9, 10], function (num){ return num % 2 === 0; });
