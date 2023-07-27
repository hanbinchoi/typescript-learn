/* 8. Generic */

function getFirstNumber(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    return undefined;
  }
  return numbers[0];
}

function getFirstString(strings: string[]): string | undefined {
  if (strings.length === 0) {
    return undefined;
  }
  return strings[0];
}

function getFirst<T>(data: T[]): T {
  if (data.length === 0) return undefined;
  return data[0];
}

const numbers: number[] = [1, 2, 3];
const firstNumber = getFirstNumber(numbers); // firstNumber의 타입은 number | undefined입니다.
console.log(firstNumber);

const strings: string[] = ["apple", "banana", "cherry"];
const firstString = getFirstString(strings); // firstString의 타입은 string | undefined입니다.
console.log(firstString);

console.log(getFirst(numbers));
console.log(getFirst(strings));
console.log(getFirst([]));
