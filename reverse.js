function reverse(input) {
  const string = input.toString();
  let arr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    arr.push(string[i]);
  }

  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

const args = process.argv;
const arr = args.slice(2);
const result = reverse(arr);
console.log(result);