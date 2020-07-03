
function calculate(calculationSteps) {
  if (calculationSteps.length < 3) return 0
  let operation = ['/', '+', '-', '*']
  let num1, num2 = ''

  calculationSteps.forEach(calculationStep => {
    if (calculationStep === null) calculationStep = 0

    if ((!isNaN(calculationStep)) && (!num2 && !!num1)) num2 = calculationStep

    if ((!isNaN(calculationStep)) && (!num1)) { num1 = calculationStep }

    else if (isNaN(calculationStep) && operation.indexOf(calculationStep) >= 0) operation = calculationStep
  })

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
