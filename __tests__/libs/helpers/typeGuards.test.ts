import {
  isString,
  isNumber,
  isObject,
  isEmpty,
  isAvailability,
  isCreativeWork
} from '../../../libs/helpers/typeGuards'

const object = {hoge: true}

describe('/libs/helpers/typeGuards.ts', () => {
  describe('isObject()', () => {
    it('should return false when given null', () => {
      expect(isObject(null)).toEqual(false)
    })
    it('should return false when given undefined', () => {
      expect(isObject(undefined)).toEqual(false)
    })
    it('should return false when given number', () => {
      expect(isObject(100)).toEqual(false)
    })
    it('should return false when given string', () => {
      expect(isObject('string')).toEqual(false)
    })
    it('should return false when given empty object', () => {
      expect(isObject({})).toEqual(true)
    })
    it('should return false when given object', () => {
      expect(isObject(object)).toEqual(true)
    })
  })
  describe('isNumber()', () => {
    it('should return false when given null', () => {
      expect(isNumber(null)).toEqual(false)
    })
    it('should return false when given undefined', () => {
      expect(isNumber(undefined)).toEqual(false)
    })
    it('should return false when given number', () => {
      expect(isNumber(100)).toEqual(true)
    })
    it('should return false when given string', () => {
      expect(isNumber('string')).toEqual(false)
    })
    it('should return false when given empty object', () => {
      expect(isNumber({})).toEqual(false)
    })
    it('should return false when given object', () => {
      expect(isNumber(object)).toEqual(false)
    })
  })
  describe('isString()', () => {
    it('should return false when given null', () => {
      expect(isString(null)).toEqual(false)
    })
    it('should return false when given undefined', () => {
      expect(isString(undefined)).toEqual(false)
    })
    it('should return false when given number', () => {
      expect(isString(100)).toEqual(false)
    })
    it('should return false when given string', () => {
      expect(isString('string')).toEqual(true)
    })
    it('should return false when given empty object', () => {
      expect(isString({})).toEqual(false)
    })
    it('should return false when given object', () => {
      expect(isString(object)).toEqual(false)
    })
  })
  describe('isEmpty', () => {
    it('should return false when given number', () => {
      expect(isEmpty(100)).toEqual(true)
    })
    it('should return false when given string', () => {
      expect(isEmpty('string')).toEqual(true)
    })
    it('should return true when given empty object', () => {
      expect(isEmpty({})).toEqual(true)
    })
    it('should return false when given object', () => {
      expect(isEmpty(object)).toEqual(false)
    })
  })
  describe('isCreativeWork()', () => {
    it('should return false when given null', () => {
      expect(isCreativeWork(null)).toEqual(false)
    })
    it('should return false when given undefined', () => {
      expect(isCreativeWork(undefined)).toEqual(false)
    })
    it('should return false when given number', () => {
      expect(isCreativeWork(100)).toEqual(false)
    })
    it('should return false when given string', () => {
      expect(isCreativeWork('string')).toEqual(false)
    })
    it('should return false when given empty object', () => {
      expect(isCreativeWork({})).toEqual(false)
    })
    it('should return false when given object', () => {
      expect(isCreativeWork({
        name: 'hello',
      })).toEqual(false)
    })
    it('should return false when given object', () => {
      expect(isCreativeWork({
        contentType: 'type'
      })).toEqual(false)
    })
    it('should return true when given object has valid props', () => {
      expect(isCreativeWork({
        name: 'hello',
        contentType: 'type'
      })).toEqual(true)
    })
  })
  describe('isAvailability()', () => {
    it('should return false when given null', () => {
      expect(isAvailability(null)).toEqual(false)
    })
    it('should return false when given undefined', () => {
      expect(isAvailability(undefined)).toEqual(false)
    })
    it('should return false when given number', () => {
      expect(isAvailability(100)).toEqual(false)
    })
    it('should return false when given string', () => {
      expect(isAvailability('string')).toEqual(false)
    })
    it('should return false when given empty object', () => {
      expect(isAvailability({})).toEqual(false)
    })
    it('should return false when given object', () => {
      expect(isAvailability({
        startTime: 'hello',
      })).toEqual(false)
    })
    it('should return false when given object', () => {
      expect(isAvailability({
        method: 'type'
      })).toEqual(false)
    })
    it('should return true when given object has valid props', () => {
      expect(isAvailability({
        startTime: 'hello',
        method: 'type'
      })).toEqual(true)
    })
  })
})
