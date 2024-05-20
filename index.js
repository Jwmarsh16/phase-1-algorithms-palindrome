



function isPalindrome(word) {
    let j = word.length - 1
    for (let i = 0; i < word.length /2; i++) {
        if (word[i] != word[j]) {
            return false;
        }
        j--
    }
    return true
  }

/* 
For each character in the first half of the word, compare with the corresponding character from the second 
half of the word. If any characters do not match, return false, indicating that the word is not a palindrome.
*/

/*
  This function efficiently checks for palindromes by only iterating through half of the word 
  and immediately returning false if a mismatch is found
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
