import { expect } from 'chai'
import sum from '../src/helpers/sum'

describe('sum', function () {
  it('should sum individual numbers', function () {
    const ans = sum(1, 3, 4, 2, 1)
    expect(ans).to.eq(11)
  })

  it('should sum an array', function () {
    const ans = sum([1, 3, 4, 2, 1])
    expect(ans).to.eq(11)
  })

  it('should sum multiple arrays', function () {
    const ans = sum([1, 3], [4], [2, 1])
    expect(ans).to.eq(11)
  })

  it('should sum a mix of arrays and numbers', function () {
    const ans = sum([1, 3], 4, 2, [1])
    expect(ans).to.eq(11)
  })
})
