
import {
  getAvailability,
  getCreativeWork
} from '../../../libs/helpers/index'

describe('/libs/helpers/index.ts', () => {
  describe('getAvailability', () => {
    it('should throw error when given null', () => {
      expect(() => getAvailability(null)).toThrow()
    })
    it('should throw error when given undefined', () => {
      expect(() => getAvailability(undefined)).toThrow()
    })
    it('should throw error when given number', () => {
      expect(() => getAvailability(100)).toThrow()
    })
    it('should throw error when given string', () => {
      expect(() => getAvailability('string')).toThrow()
    })
    it('should throw error when given empty object', () => {
      expect(() => getAvailability({})).toThrow()
    })
    it('should throw error when given invalid object', () => {
      expect(() => getAvailability({
        hoge: true
      })).toThrow()
    })
    it('should throw error when given valid object', () => {
      const param = getAvailability({
        startTime: 'datetime',
        method: 'AIR',
        hoge: true
      })
      expect(param).toEqual({
        startTime: 'datetime',
        method: 'AIR'
      })
    })
  })
  describe('getCreativeWork', () => {
    it('should throw error when given null', () => {
      expect(() => getCreativeWork(null)).toThrow()
    })
    it('should throw error when given undefined', () => {
      expect(() => getCreativeWork(undefined)).toThrow()
    })
    it('should throw error when given number', () => {
      expect(() => getCreativeWork(100)).toThrow()
    })
    it('should throw error when given string', () => {
      expect(() => getCreativeWork('string')).toThrow()
    })
    it('should throw error when given empty object', () => {
      expect(() => getCreativeWork({})).toThrow()
    })
    it('should throw error when given invalid object', () => {
      expect(() => getCreativeWork({
        hoge: true
      })).toThrow()
    })
    it('should throw error when given valid object', () => {
      const param = getCreativeWork({
        name: "localizedattribute:contentName",
        contentType: 'BOOK',
        hoge: true
      })
      expect(param).toEqual({
        name: "localizedattribute:contentName",
        contentType: 'BOOK'
      })
    })
  })
})