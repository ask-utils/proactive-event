import {
    Types
} from '../model'
import {
    isAvailability,
    isCreativeWork
} from './typeGuards'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCreativeWork = (obj: any): Types.CreativeWork => {
    if (isCreativeWork(obj)) {
        const { name, contentType } = obj
        const newProps: Types.CreativeWork = { name, contentType }
        return newProps
    }
    throw new Error('Invalid creative work object')
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAvailability = (obj: any): Types.Availability => {
    if (isAvailability(obj)) {
        const { method, startTime, provider } = obj
        const newProps: Types.Availability = { method, startTime }
        if (provider) newProps.provider = provider
        return newProps
    }
    throw new Error('Invalid Availability object')
}
