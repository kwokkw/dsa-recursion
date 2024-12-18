/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  // 1. Base Case
  if (i === nums.length) return 1;

  // 2. Normal Case
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

// Counting and comparing things.
function longest(words, i = 0) {
  // 1. Base Case
  if (i === words.length) return 0;

  // 2. Normal Case
  return Math.max(words[i].length, longest(words, i + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  // Base Case
  // What happens when the string is empty?
  if (i >= str.length) return "";

  // Normal Case
  // How to handle the case where the string has more than one character?
  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// Comparing
function isPalindrome(str, left = 0, right = str.length - 1) {
  // Base Case
  // When do I stop the recursion?
  if (left >= right) return true;

  // Normal Case
  // Compare the left and right character.
  if (str[left] !== str[right]) return false;

  // Move the pointers inward
  return isPalindrome(str, left + 1, right - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // Base Case
  if (i === arr.length) return -1;

  // Normal Case
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  // Base Case
  if (i === str.length) return "";

  // Normal Case
  return revString(str, i + 1) + str[i];
}
revString("porcupine"); // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let collector = [];

  for (let key in obj) {
    // Base Case
    if (typeof obj[key] === "string") collector.push(obj[key]);

    // Normal Case
    if (typeof obj[key] === "object")
      collector = collector.concat(gatherStrings(obj[key])); // Recursive call
  }

  return collector;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!",
        },
      },
    },
    favoriteString: "nice!",
  },
};
console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  // Base Case
  // Normal Case
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
