function isPalindrome(word) {
  // Convert the word to lowercase (optional, in case of case sensitivity)
  const reversedWord = word.split('').reverse().join('');
  
  // Check if the reversed word is equal to the original word
  return word === reversedWord;
}

/* 
  Pseudocode:
  - Reverse the input word by splitting it into an array of characters, reversing the array, and then joining it back into a string.
  - Compare the reversed string with the original.
  - Return true if both are equal, otherwise return false.
*/

/*
  Explanation:
  The function works by first reversing the input string. If the reversed string matches the original, 
  then the word is a palindrome and the function returns true. If not, it returns false.
*/

// Tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;

