/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

let titleCase = string => {
  return string.toLowerCase()
  .split(" ")
  .map(word => word.replace(word[0], word[0].toUpperCase()))
  .join(" ")
}