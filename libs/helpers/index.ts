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
    const newProps: Types.CreativeWork = { name,contentType }
    return newProps
  }
  throw new Error('Invalid creative work object')
}
export const getAvailability = (obj: any): Types.Availability => {
  if (isAvailability(obj)) {
    const { method, startTime, provider } = obj
    const newProps: Types.Availability = { method, startTime }
    if (provider) newProps.provider = provider
    return newProps
  }
  throw new Error('Invalid Availability object')
} 