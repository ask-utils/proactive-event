import {
    Types
} from '../model'
import {
    isAvailability,
    isCreativeWork,
    isWeatherAlert,
    isMessageState,
    isMessageGroup,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getWeatherAlert = (obj: any): Types.WeatherAlert => {
    if (isWeatherAlert(obj)) {
        const { alertType, source } = obj
        const newProps: Types.WeatherAlert = { alertType }
        if (source) newProps.source = source
        return newProps
    }
    throw new Error('Invalid WeatherAlert object')
}

export const getMessageState = (obj: any): Types.MessageState => {
  if (isMessageState(obj)) {
      const { status, freshness } = obj
      const newProps: Types.MessageState = { status }
      if (freshness) newProps.freshness = freshness
      return newProps
  }
  throw new Error('Invalid MessageState object')
}

export const getMessageGroup = (obj: any): Types.MessageGroup => {
  if (isMessageGroup(obj)) {
      const { creator, count, urgency } = obj
      const newProps: Types.MessageGroup = { creator, count }
      if (urgency) newProps.urgency = urgency
      return newProps
  }
  throw new Error('Invalid MessageGroup object')
}
