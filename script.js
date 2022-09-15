let string = document.getElementById("string");
let display = document.getElementById("output-display");
let permutations = [];
const result = new Set();

function getPermutations() {
  display.innerHTML = "";
  let inputString = string.value;
  if (inputString.length > 8) {
    alert("Please enter string of length <= 8");
    return;
  }

  if (!inputString) {
    alert("Please enter string of valid length");
    return;
  }
  let inputArray = inputString.split("");

  findPermutations(0, inputArray);

  for (let i = 0; i < permutations.length; i++) {
    let permuteString = "";
    for (let j = 0; j < permutations[i].length; j++)
      permuteString += permutations[i][j];

    if (result.has(permuteString)) continue;
    result.add(permuteString);
  }
  console.log(permutations);
  printStrings();
}

function findPermutations(index, array) {
  if (index >= array.length) permutations.push(array);

  const hashSet = new Set();

  for (let i = index; i < array.length; i++) {
    if (hashSet.has(array[i])) continue;

    hashSet.add(array[i]);

    let swap = array[index];
    array[index] = array[i];
    array[i] = swap;

    findPermutations(index + 1, [...array]);

    swap = array[i];
    array[i] = array[index];
    array[index] = swap;
  }
}

function printStrings() {
  result.forEach((item, i) => {
    let temp = document.createElement("p");
    temp.innerHTML = `("${item}") `;
    display.appendChild(temp);
  });

  string.value = "";
  result.clear();
  permutations = [];
}
