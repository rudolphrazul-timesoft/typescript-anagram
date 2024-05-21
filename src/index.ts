import { areAnagrams } from "./anagram";

console.log("\nAnagram Checker:");
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("engineer", "developer")); // false
console.log(areAnagrams("cheater","teacher")); // true