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
import { MediaContent } from '../../dist/index'

const { PayloadBuilder } = MediaContent.Available
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
import { TrashCollectionAlert } from '../../dist/index'

TrashCollectionAlert.Activated.PayloadBuilder
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