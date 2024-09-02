const fibonacci = {
  0: 0,
  1: 1,
  2: 2,
};

function checkFibonacci() {
  const num = document.getElementById("fibonacciInput").value;
  if (num === "") {
    setValue("fibonacciOutput", "Digite um número");
    return;
  }
  const lastIndex = Object.keys(fibonacci).length - 1;
  if (num > fibonacci[lastIndex]) {
    while (fibonacci[lastIndex] <= num) {
      const currentIndex = Object.keys(fibonacci).length - 2;
      const newIndex = fibonacci[currentIndex] + fibonacci[currentIndex + 1];
      fibonacci[newIndex] = newIndex;
      lastIndex = newIndex;
    }
  }

  if (fibonacci[num] !== undefined) {
    setValue("fibonacciOutput", "Sim");
  }
  setValue("fibonacciOutput", "Não");
}

function charRepetition() {
  const str = document.getElementById("repetitionInput").value;
  if (str === "") {
    setValue("repetitionOutput", "Digite uma string");
    return;
  }
  str.trim();
  str.toLowerCase();
  str.sort();
  const firstIndex = str.indexOf("a");
  if (firstIndex === -1) {
    return 0;
  }
  const lastIndex = str.lastIndexOf("a");
  setValue("repetitionOutput", lastIndex - firstIndex + 1);
}

function setValue(id, value) {
  document.getElementById(id).setValue(value);
}
