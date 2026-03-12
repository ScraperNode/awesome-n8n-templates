# ⚡ Send Github notifications to Discord webhook

> ⚡ **2,234 views** · ⚡ [Personal Productivity](../)

## Description

This will send your Github notifications to a discord webhook.

Since **Github doesn't send push notifications to mobile devices** other then **@mention** this is a great workaround to receive notifications on Discord with this.

Using a github trigger was not a good option as there is no trigger for notifications only events (which don't work on org repos). Using http request on notifications api is way better.

++TAGGING USER IN MESSATGE:++
Change **<@userIdForTagging>** with your discord Id to get tagged when sending notifications. To find your own id type in any channel backslash followed by your username with the 4 digit hash code

You can copy this by clicking on your username next to your profile picture 

**Example:**
```javascript
\@username#9999
```

*Enjoy!*

## 🔗 Nodes Used

Cron, Function, HTTP Request, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
