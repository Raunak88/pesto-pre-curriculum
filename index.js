
/**************TESTING FRAMEWORK*****************/

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

/*************FUNCTIONS*****************/


function add(a, b) {
  return a + b ;
}
function substract(a, b) {
  return a - b ;
}
function divide(a, b) {
  return a / b ;
}
function multiply(a, b) {
  return a * b ;
}

/************TEST CASES************/

describe('add', () => {
  it('adds two numbers', () => {
    const result = add(1, 2)
    expect(result).toBe(3)
  })
})
describe('substract', () => {
  it('substracts two numbers', () => {
    const result = substract(2, 1)
    expect(result).toBe(1)
  })
})
describe('divide', () => {
  it('divides two numbers', () => {
    const result = divide(4, 2)
    expect(result).toBe(2)
})
})
describe('multiply', () => {
  it('multiplies two numbers', () => {
    const result = multiply(3, 2)
    expect(result).toBe(6)
  })
})

