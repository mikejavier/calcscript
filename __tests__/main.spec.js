import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/main'

describe('Main.js', () => {

  describe('Smoke tests', () => {

    it('should exist sum()', () => {
      expect(sum).to.exist
    })

    it('should exist sub()', () => {
      expect(sub).to.exist
    })

    it('should exist mult()', () => {
      expect(mult).to.exist
    })

  })

  describe('Sum() method', () => {

    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.equal(4)
    })

  })

  describe('Sum() method', () => {

    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.equal(4)
    })

  })

  describe('Sub() method', () => {

    it('should return 3 when sub(5,2)', () => {
      expect(sub(5, 2)).to.equal(3)
    })

    it('should return -4 when sub(6,10)', () => {
      expect(sub(6, 10)).to.equal(-4)
    })

  })

  describe('Mult() method', () => {

    it('should return 4 when mult(2,2)', () => {
      expect(mult(2, 2)).to.equal(4)
    })

  })

  describe('Div() method', () => {

    it('should return 1 when div(2,2)', () => {
      expect(div(2, 2)).to.equal(1)
    })

    it('should return "it is impossible to divide by 0" when div(2,0)', () => {
      expect(div(2, 0)).to.equal('it is impossible to divide by 0')
    })

  })

})
