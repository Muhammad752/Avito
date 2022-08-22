const primeNumbers = (number) => {
  let count = 0;
  while (number) {
    if (isPrime(number)) {
      console.log(number);
      count++;
    }
    number--;
  }
  console.log(`\n\nAll in all: ${count}`);
};

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
primeNumbers(300);
