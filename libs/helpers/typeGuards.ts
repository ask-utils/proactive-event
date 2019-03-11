import {
  Types
} from '../model'

export const isNumber = (arg: any): arg is number => {
  return typeof arg === "number";
}
export const isString= (arg: any): arg is string => {
  return typeof arg === "string";
}
export const isObject = (obj: any): obj is {} => {
  if (!obj) return false
  return typeof obj === "object"
}
export const isEmpty = (obj: any): boolean => {
  if (!isObject(obj)) return true
  return Object.keys(obj).length < 1
}
export const isCreativeWork = (obj: any): obj is Types.CreativeWork => {
  if (isEmpty(obj)) return false
  if (!obj.name || !obj.contentType) return false
  return true
}
export const isAvailability = (obj: any): obj is Types.Availability => {
  if (isEmpty(obj)) return false
  if (!obj.startTime || !obj.method) return false
  return true
}