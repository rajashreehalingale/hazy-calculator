function calculate(calculationSteps) {
  if (calculationSteps.length < 3) return 0
  let operation = ['/', '+', '-', '*']
  let num1, num2 = ''

  // operation = calculationSteps.find((calculationStep) => (isNaN(calculationStep) && (operation.indexOf(calculationStep) >= 0)))

  calculationSteps = calculationSteps.filter(calculationStep => (!isNaN(calculationStep) && calculationStep !== '') || (isNaN(calculationStep) && (operation.indexOf(calculationStep) >= 0)))

  num1 = (calculationSteps[0] === null) ? 0 : parseInt(calculationSteps[0])
  operation = calculationSteps[1]
  num2 = (calculationSteps[2] === null) ? 0 : parseInt(calculationSteps[2])

  return findAns(num1, num2, operation)
}

function findAns(num1, num2, operation) {
  switch (operation) {
    case '+': return parseInt(num1) + parseInt(num2)
    case '-': return parseInt(num1) - parseInt(num2)
    case '*': return parseInt(num1) * parseInt(num2)
    case '/': return (isFinite(parseInt(num1.value) / parseInt(num2.value))) ? parseInt(num1) / parseInt(num2) : 0
    default: return NaN
  }
}

module.exports = calculate

function calculate(calculationSteps) {
  if (calculationSteps.length < 3) return 0
  let operation = ['/', '+', '-', '*']
  let num1, num2 = ''function calculate(calculationSteps) {
    if (calculationSteps.length < 3) return 0
    let operation = ['/', '+', '-', '*']
    let num1, num2 = ''

    // operation = calculationSteps.find((calculationStep) => (isNaN(calculationStep) && (operation.indexOf(calculationStep) >= 0)))

    calculationSteps = calculationSteps.filter(calculationStep => (!isNaN(calculationStep) && calculationStep !== '') || (isNaN(calculationStep) && (operation.indexOf(calculationStep) >= 0)))

    num1 = (calculationSteps[0] === null) ? 0 : parseInt(calculationSteps[0])
    operation = calculationSteps[1]
    num2 = (calculationSteps[2] === null) ? 0 : parseInt(calculationSteps[2])

    return findAns(num1, num2, operation)
  }

  function findAns(num1, num2, operation) {
    switch (operation) {
      case '+': return parseInt(num1) + parseInt(num2)
      case '-': return parseInt(num1) - parseInt(num2)
      case '*': return parseInt(num1) * parseInt(num2)
      case '/': return (isFinite(parseInt(num1.value) / parseInt(num2.value))) ? parseInt(num1) / parseInt(num2) : 0
      default: return NaN
    }
  }

  module.exports = calculate
