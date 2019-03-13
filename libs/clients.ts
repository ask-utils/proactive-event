import axios from 'axios'
import moment from 'moment'
import uuid from 'uuid'
import {
  event,
  client
} from './model'

export const getApiURL = (config: client.ClientConfig): client.APIEndpoint => {
  if (config.apiEndpont) return config.apiEndpont
  switch (config.apiRegion) {
    case 'FE':
      return 'https://api.fe.amazonalexa.com/v1/proactiveEvents/'
    case 'EU':
      return 'https://api.eu.amazonalexa.com/v1/proactiveEvents/'
    case 'US':
    default:
      return 'https://api.amazonalexa.com/v1/proactiveEvents/'
  }
}

export const getApiEndpoint = (config: client.ClientConfig): client.APIEndpoint => {
  const url = getApiURL(config)
  if (!config.isProduction) return `${url}stages/development` as client.DevAPIURL
  return url
}

export const isAuthResponse = (res: any): res is client.AuthResponse => {
  if (!res) return false
  if (!res.access_token || !res.expires_in || !res.scope || !res.token_type) return false
  return true
}

export default class ProactiveClient {
  protected clientId: client.ClientId
  protected clientSecret: client.ClientSecret
  protected apiEndpoint: client.APIEndpoint
  private body:any =  {}
  constructor(config: client.ClientConfig) {
    this.clientId = config.clientId
    this.clientSecret = config.clientSecret
    this.apiEndpoint = getApiEndpoint(config)
    this.body = {
      timestamp: moment().toISOString(),
      expiryTime: moment().add(1, 'days').toISOString(),
      event: {},
      relevantAudience: 'Multicast',
      referenceId: uuid.v4()
    }
    return this
  }
  getReferenceId(): string {
    return this.body.referenceId
  }
  updateReferenceId(id: string) {
    this.body.referenceId = id
    return this
  }
  async getAccessToken(): Promise<client.AuthResponse> {
    const response = await axios({
      method: 'POST',
      url: 'https://api.amazon.com/auth/O2/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: [
        'scope=alexa::proactive_events',
        'grant_type=client_credentials',
        `client_id=${this.clientId}`,
        `client_secret=${this.clientSecret}`
      ].join('&')
    })
    if (!isAuthResponse(response.data)) throw new Error('failed to get access token')
    return response.data
  }
  setReferenceId(id: string) {
    this.body.referenceId = id
    return this
  }
  setTimestamp(date: Date) {
    this.body.timestamp = moment(date).toISOString()
    return this
  }
  setExpiryTime(date: Date) {
    this.body.expiryTime = moment(date).toISOString()
    return this
  }
  setBody(body: event.Props) {
    this.body = body
    return this
  }
  setPayload(payload: event.Payload) {
    this.body.event.payload = payload
    return this
  }
  setEventName(name: event.EventName) {
    this.body.event.name = name
    return this
  }
  setLocalizedAttributes(localizedAttributes: {}[]) {
    this.body.event.localizedAttributes = localizedAttributes
    return this
  }
  setRelevantAudience (type: client.AudienceType, payload?: client.AudiencePayload) {
    const relevantAudience: client.RelevantAudience = {
      type
    }
    if (type === 'Unicast') relevantAudience.payload
    this.body.relevantAudience = relevantAudience
    return this
  }
  getBody(): client.RequstBody {
    return this.body
  }
  getRequestParams(accessToken: string) {
    return {
      method: 'POST',
      url: this.apiEndpoint,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      data: this.getBody()
    }
  }
  async requestEvent(): Promise<client.Response> {
    const authResult = await this.getAccessToken()
    if (!authResult.access_token) throw new Error('missing access_token')
    const param = this.getRequestParams(authResult.access_token)
    try {
      const response = await axios(param)
      return {
        statusCode: response.status,
        message: response.statusText,
        request: this.getBody()
      }
    } catch (e) {
      if (!e.response) throw e
      const err = {
        statusCode: 500,
        errorCode: 'Error',
        message: 'Internal Error'
      }
      if (e.response.data && e.response.data.message) err.message = e.response.data.message
      if (e.response.status) err.statusCode = e.response.status
      if (e.response.statusText) err.errorCode = e.response.statusText
      throw err
    }
  }
}
