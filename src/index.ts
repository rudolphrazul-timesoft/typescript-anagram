import { areAnagrams } from "./anagram";

console.log("An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. eg 'silent' = 'listen', 'cheater' = 'teacher' ");
console.log("\nCoding challenge: Write a function that checks if two strings are anagrams of each other.");
console.log("\nAnagram Checker:");

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("engineer", "developer")); // false
console.log(areAnagrams("cheater","teacher")); // true