# 📈 Selective forex factory calendar import & cleanup for Google Calendar

> ⚡ **478 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Import Forex Factory Calendar To Google Calendar
### Purpose of this n8n Template
1. Import Forex Factory Calendar events into Google Calendar.
2. Delete past Forex Factory Calendar events from Google Calendar.

### Use Cases:
* Get reminders for important economic data releases — especially High Impact news.
* Use as a trigger for opening trading positions.

### How It Works (Adding Next Week’s Events to Google Calendar)
* Every Sunday, the workflow fetches the next week’s events (.ics file) using the HTTP node.
* The file is parsed with the Extract From File node.
* Events are split using the Split Out node so each event is processed separately.
* Events are classified into three categories — High, Medium, and Low Impact — using the Switch node.
* High Impact news is added to Google Calendar with a popup reminder set 30 minutes before release.
* Medium Impact news is added to Google Calendar without a reminder.
* Low Impact news is ignored.

### How It Works (Deleting Past Events from Google Calendar)
* The workflow retrieves events from the past 10 days using the Google Calendar node.
* If an event is related to Forex Factory, it will be deleted.
* If it is not related, it will be left untouched.

### How to Use
* Enter your credentials for all Google Calendar nodes.

### Requirements
* A valid Google Calendar credential.

### Need Help?
Join the [Discord](https://discord.gg/n8n) or ask in the [Forum](https://community.n8n.io/)!

Thank you!

## 🔗 Nodes Used

HTTP Request, Google Calendar, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
