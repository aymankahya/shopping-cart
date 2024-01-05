export function firstLetterToUpper(input) {
  const formattedArray = input
    .split("+")
    .map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
  let result = "";

  formattedArray.map((word, index) =>
    index == formattedArray.length - 1
      ? (result = result.concat(word))
      : (result = result.concat(`${word} `))
  );

  return result;
}
