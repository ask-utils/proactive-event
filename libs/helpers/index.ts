import {
  Types
} from '../model'
import {
  isAvailability,
  isCreativeWork
} from './typeGuards'
export const getCreativeWork = (obj: any): Types.CreativeWork => {
  if (isCreativeWork(obj)) {
    const { name, contentType } = obj
    return { name,contentType }
  }
  throw new Error('Invalid creative work object')
}
export const getAvailability = (obj: any): Types.Availability => {
  if (isAvailability(obj)) {
    const { method, startTime } = obj
    return { method, startTime }
  }
  throw new Error('Invalid Availability object')
} 