# ⚒️ Get local datetime into Function node using moment.js

> ⚡ **1,960 views** · ⚒️ [Engineering](../)

## Description

![workflow-screenshot](fileId:260)

A quick example showing how to get the local date and time into a Function node using moment.js.

This relies on the `GENERIC_TIMEZONE` environment variable being correctly configured (see the docs [here](https://docs.n8n.io/reference/configuration.html#timezone))

**NOTE**: In order for this to work, you must whitelist the moment library for use by setting the following environment variable:

```bash
NODE_FUNCTION_ALLOW_EXTERNAL=moment
```

For convenience, the Function code is as follows:

```javascript
const moment = require('moment');

let date = moment().tz($env['GENERIC_TIMEZONE']);

let year = date.year();
let month = date.month(); // zero-indexed!
let day = date.date();
let hour = date.hours();
let minute = date.minutes();
let second = date.seconds();
let millisecond = date.millisecond();
let formatted = date.format('YYYY-MM-DD HH:mm:ss.SSS Z');

return [
  {
    json: {
      utc: date,
      year: year,
      month: month, // zero-indexed!
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      formatted: formatted
    }
  }
];
```

## 🔗 Nodes Used

Function, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
