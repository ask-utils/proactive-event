# ASK-Utils - Utility functions for ask-sdk
[![Build Status](https://travis-ci.org/ask-utils/proactive-event.svg?branch=master)](https://travis-ci.org/ask-utils/proactive-event)
[![npm version](https://badge.fury.io/js/ask-utils.svg)](https://badge.fury.io/js/ask-utils)
![logo](https://raw.githubusercontent.com/ask-utils/proactive-event/master/docs/img/logo.png)

https://ask-utils.github.io/ask-utils/

## Getting started

```
$ npm i -S @ask-utils/proactive-event
```

## Usage

### Payload Builder

#### AMAZON.MediaContent.Available

```typescript
import { MediaContent } from '@ask-utils/proactive-event'

const PayloadBuilder = MediaContent.Available.PayloadFactory.init()
PayloadBuilder
  .setContentName()
  .setMediaType('ALBUM')
  .setStartTime(moment('2019-03-11T10:05:58.561Z').toDate())
  .setDistributionMethod('AIR')
  .getParameter()

{
  "name": "AMAZON.MediaContent.Available",
  "payload": {
    "availability": {
      "method": "AIR",
      "startTime": "2019-03-11T10:05:58.561Z"
    },
    "content": {
      "contentType": "ALBUM",
      "name": "localizedattribute:contentName"
    }
  }
}
```

#### AMAZON.TrashCollectionAlert.Activated

```typescript
import { TrashCollectionAlert } from '@ask-utils/proactive-event'

const PayloadBuilder = TrashCollectionAlert.Activated.PayloadFactory.init()
PayloadBuilder
  .setCollectionDayOfWeek('MONDAY')
  .addGarbageType('BOTTLES')
  .addGarbageType('BULKY')
  .addGarbageType('CANS')
  .getParameter()

{
  "name": "AMAZON.TrashCollectionAlert.Activated",
  "payload": {
    "alert": {
      "collectionDayOfWeek": "MONDAY",
      "garbageTypes": [
        "BOTTLES",
        'BULKY',
        'CANS'
      ]
    }
  }
}
```

### AMAZON.WeatherAlert.Activated

```typescript
import { WeatherAlert } from '@ask-utils/proactive-event'

const PayloadBuilder = WeatherAlert.Activated.PayloadFactory.init()
PayloadBuilder
  .setAlertType('HURRICANE')
  .setAlertSource('example source')
  .getParameter()

{
  "name": "AMAZON.WeatherAlert.Activated",
  "payload": {
    "weatherAlert": {
      "source": "example source",
      "alertType": "HURRICANE"
    }
  }
}
```

### AMAZON.MessageAlert.Activated

```typescript
import { MessageAlert } from '@ask-utils/proactive-event'
const PayloadBuilder = MessageAlert.Activated.PayloadFactory.init()

PayloadBuilder.setMessageCreator('john')
    .setMessageCount(1)
    .setMessageStatus('FLAGGED')
    .getParameter()

{
  "name": "AMAZON.MessageAlert.Activated",
  "payload": {
    "messageGroup": {
      "count": 1,
      "creator": {
        "name": "john"
      }
    },
    "state": {
      "status": "FLAGGED"
    }
  }
}
```

## development

```
$ git clone git@github.com:ask-utils/proactive-event.git
$ cd proactive-event
$ npm i
```

### test

```
$ npm test
```

### Lint

```
$ npm run lint

or

$ npm run lint -- --fix
```

### History
-> [Release Note](https://github.com/ask-utils/proactive-event/releases)


### Contributors

|Name|Version|
|:--|:--|
|[]()||