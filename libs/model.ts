export namespace Types {
  export type locale = string
  export type dateTime = string
  export type Person = {
    name: string
  }
  export type MediaTypes = "BOOK" | "EPISODE" | "ALBUM" | "SINGLE" | "MOVIE" | "GAME"
  export type DistributionMethod = "STREAM" | "AIR" | "RELEASE" | "PREMIERE" | "DROP"
  export type Thing = {
    name: "localizedattribute:providerName"
  }
  export type Availability = {
    startTime: Types.dateTime,
    provider?: Thing,
    method: DistributionMethod
  }
  export type CreativeWork = {
    name: "localizedattribute:contentName",
    contentType: MediaTypes
  }
  export type OfferType = "MATCH" | "REMATCH" | "GAME"
  export type InviteType = "CHALLENGE" | "INVITE"
  export type RelationshipToInvitee = "FRIEND" | "CONTACT"
  export type GameInvite = {
    inviter: Person,
    relationshipToInvitee: RelationshipToInvitee,
    inviteType: InviteType
  }
  export type Game = {
    offer: OfferType,
    name: "localizedattribute:gameName"
  }

  export type ConfirmationStatus = "CONFIRMED" | "CANCELED" | "RESCHEDULED" | "REQUESTED" | "CREATED" | "UPDATED"
  export type OccasionType = "RESERVATION_REQUEST" | "RESERVATION" | "APPOINTMENT_REQUEST" | "APPOINTMENT"
  export type ConfirmationState = {
    confirmationStatus: ConfirmationStatus
  }
  export type Ogranization = {
    name: "localizedattribute:providerName"
  }
  export type Skill = {
    name: "localizedattribute:brokerName"
  }
  export type Occasion = {
    occasionType: OccasionType,
    subject: string // "localizedattribute:subject",
    provider: Ogranization,
    bookingTime: Types.dateTime, // "2018-11-20T19:16:31Z",
    broker?: Skill
  }
  export type ParcelDelivery = {
    expectedArrival: Types.dateTime // "2018-12-14T23:32:00.463Z"
  }
  export type OrderState = {
    status: OrderStatus
    enterTimestamp?: Types.dateTime // "20180916T030000Z   2018-09-16T03:00:00.463Z"
    deliveryDetails?:  ParcelDelivery
  }
  export type Order = {
    seller: {
        name: "localizedattribute:sellerName"
    }
  }
  export type OrderStatus = "PREORDER_RECEIVED" | "ORDER_RECEIVED" | "ORDER_PREPARING" | "ORDER_SHIPPED" | "ORDER_OUT_FOR_DELIVERY" | "ORDER_OUT_FOR_DELIVERY" | "ORDER_DELIVERED"
  export type GarbageType = "BOTTLES" | "BULKY" | "BURNABLE" | "CANS" | "CLOTHING" | "COMPOSTABLE" | "CRUSHABLE" | "GARDEN_WASTE" | "GLASS" | "HAZARDOUS" | "HOME_APPLIANCES" | "KITCHEN_WASTE" | "LANDFILL" | "PET_BOTTLES" | "RECYCLABLE_PLASTICS" | "WASTE_PAPER"
  export type DayOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY"
  export type TrashCollectionAlert = {
    garbageTypes: GarbageType[],
    collectionDayOfWeek: DayOfWeek
  }
  export type WeatherAlertType = "TORNADO" | "HURRICANE" | "SNOW_STORM" | "THUNDER_STORM"
  export type WeatherAlert = {
    source?: "localizedattribute:source",
    alertType: WeatherAlertType
  }

  export type Goal = {
    scoreEarned: number,
    teamName: string
  }
  export type SportsEvent = {
    eventLeague: Soccer,
    homeTeamStatistic: GameStatistic,
    awayTeamStatistic: GameStatistic
  }
  export type SportsTeam = {
    name: string
  }
  export type GameStatistic = {
    team: SportsTeam,
    score: number
  }
  export type Soccer = {
    name: string // "localizedattribute:eventLeagueName"
  }

  export type MessageState = {
    status: MessageStatus
    freshness?: MessageFreshness
  }
  export type MessageStatus = "UNREAD" | "FLAGGED"
  export type MessageFreshness = "NEW" | "OVERDUE"
  export type MessageGroup = {
    creator: Types.Person,
    count: number,
    urgency?: "URGENT"
  }
}

export namespace event {
  export type EventName = WeatherAlert.EventName | SportsEvent.EventName | MessageAlert.EventName | OrderStatus.EventName | Occasion.EventName | MediaContent.EventName | SocialGameInvite.EventName | TrashCollectionAlert.EventName

  export namespace TrashCollectionAlert {
    export type EventName = Activated.EventName
    export namespace Activated {
      export type EventName = "AMAZON.TrashCollectionAlert.Activated"
      export interface Payload {
        alert: Types.TrashCollectionAlert
      }
    }
  }
  export namespace WeatherAlert {
    export type EventName = Activated.EventName
    export namespace Activated {
      export type EventName = "AMAZON.WeatherAlert.Activated"
      export interface Payload {
        weatherAlert: Types.WeatherAlert
      }
    }
  }
  export namespace SportsEvent {
    export type EventName = Updated.EventName
    export namespace Updated {
      export type EventName = "AMAZON.SportsEvent.Updated"
      export interface Payload {
        update?: Types.Goal,
        sportsEvent: Types.SportsEvent
      }
    }
  }
  export namespace MessageAlert {
    export type EventName = Activated.EventName
    export namespace Activated {
      export type EventName = "AMAZON.MessageAlert.Activated"
      export interface Payload {
        state: Types.MessageState,
        messageGroup: Types.MessageGroup
      }
    }
  }
  export namespace OrderStatus {
    export type EventName = Updated.EventName
    export namespace Updated {
      export type EventName = "AMAZON.OrderStatus.Updated"
      export interface Payload {
        state: Types.OrderState,
        order: Types.Order
      }
    }
  }
  export namespace Occasion {
    export type EventName = Updated.EventName
    export namespace Updated {
      export type EventName = "AMAZON.Occasion.Updated"
      export interface Payload {
        state: Types.ConfirmationState,
        occasion: Types.Occasion
      }
    }
  }
  export namespace MediaContent {
    export type EventName = Available.EventName
    export namespace Available {
      export type EventName = "AMAZON.MediaContent.Available"
      export interface Payload {
        availability: Types.Availability,
        content: Types.CreativeWork
      }
    }
  }
  export namespace SocialGameInvite {
    export type EventName = Available.EventName
    export namespace Available {
      export type EventName = "AMAZON.SocialGameInvite.Available"
      export interface Payload {
        invite: Types.GameInvite,
        game: Types.Game
      }
      export interface LocalizedAttributes {
        locale: Types.locale,
        gameName: string
      }[]
    }
  }

}