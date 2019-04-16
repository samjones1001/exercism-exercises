export const validate = (number) => {
  const digits = number.toString().split('');
  const power = digits.length;
  
  return sumOfPowers(digits, power) == number
}

const sumOfPowers = (digits, power) => {
  return digits.map((digit) => {
    return digit ** power
  }).reduce((sum, item) => {
    return sum += item
  })
}
