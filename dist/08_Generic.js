/* 8. Generic */
function getFirstNumber(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  return numbers[0];
}
function getFirstString(strings) {
  if (strings.length === 0) {
    return undefined;
  }
  return strings[0];
}
function getFirst(data) {
  if (data.length === 0) return undefined;
  return data[0];
}
const numbers = [1, 2, 3];
const firstNumber = getFirstNumber(numbers); // firstNumber의 타입은 number | undefined입니다.
console.log(firstNumber);
const strings = ["apple", "banana", "cherry"];
const firstString = getFirstString(strings); // firstString의 타입은 string | undefined입니다.
console.log(firstString);
console.log(getFirst(numbers));
console.log(getFirst(strings));
console.log(getFirst([]));
//# sourceMappingURL=08_Generic.js.map
