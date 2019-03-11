import moment from 'moment'
import {
  interfaces,
  Types,
  event
 } from '../../model'
import MediaContent = interfaces.MediaContent
import PayloadBuilder = MediaContent.Available.PayloadBuilder 

// helper
import {
  getCreativeWork,
  getAvailability
} from '../../helpers'

export default class ParameterFactory {
  public static init(): PayloadBuilder {
    const eventName = 'AMAZON.MediaContent.Available'
    const availability: any = {}
    const content: any = {}
    return {
      setContentName(name?: string) {
        content.name = name || "localizedattribute:contentName"
        return this
      },
      setMediaType(type: Types.MediaType) {
        content.contentType = type
        return this
      },
      setStartTime(date: Date): PayloadBuilder {
        availability.startTime = moment(date).toISOString()
        return this
      },
      setDistributionMethod(method: Types.DistributionMethod): PayloadBuilder {
        availability.method = method
        return this
      },
      setProvider(providerName: string = "localizedattribute:providerName"): PayloadBuilder {
        availability.provider = {
          name: providerName
        }
        return this
      },
      getEventName(): event.MediaContent.EventName {
        return eventName
      },
      getPayload(): event.MediaContent.Available.Payload {
        return {
          availability: getAvailability(availability),
          content: getCreativeWork(content)
        }
      },
      getParameter() {
        return {
          name: eventName,
          payload: this.getPayload()
        }
      }
    }
  }
}
