const fibonacci = {
  0: 0,
  1: 1,
  2: 2,
};

function getValue(index) {
  return parseInt(fibonacci[Object.keys(fibonacci)[index]]);
}

function checkFibonacci() {
  const num = parseInt(document.getElementById("fibonacciInput").value);
  if (num === "") {
    setValue("fibonacciOutput", "Digite um número");
    return;
  }
  const lastIndex = Object.keys(fibonacci).length - 1;
  let lastValue = getValue(lastIndex);
  if (num > fibonacci[lastValue]) {
    while (fibonacci[lastValue] < num) {
      const currentIndex = Object.keys(fibonacci).length - 2;
      const newIndex = getValue(currentIndex) + getValue(currentIndex + 1);
      fibonacci[newIndex] = newIndex;
      lastValue = newIndex;
    }
  }

  if (fibonacci[num] !== undefined) {
    setValue("fibonacciOutput", "Sim");
    return;
  }
  setValue("fibonacciOutput", "Não");
}

function charRepetition() {
  const str = document
    .getElementById("repetitionInput")
    .value.trim()
    .toLowerCase();
  if (str === "") {
    setValue("repetitionOutput", "Digite uma string");
    return;
  }
  const sortedStr = sortString(str);
  const firstIndex = sortedStr.indexOf("a");
  if (firstIndex === -1) {
    setValue("repetitionOutput", "Nenhuma letra 'a' encontrada");
  }
  const lastIndex = sortedStr.lastIndexOf("a");
  setValue("repetitionOutput", lastIndex - firstIndex + 1);
}

function setValue(id, value) {
  document.getElementById(id).value = value;
}

function sortString(str) {
  return str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}
