# ⚡ Send links from Telegram channel to Hoarder and Readeck

> ⚡ **306 views** · ⚡ [Personal Productivity](../)

## Description

### What this template is made for:
I have a personal Telegram channel and a bot inside it where I save interesting links that I want to save or read later. The idea is that n8n will take care of reading the new links added to this channel and send them, through the corresponding API, to the Hoarder and Readeck installations.

### How it works
- Since my server where n8n runs is not always on, a "Schedule Trigger" will be responsible for checking every so often if there is any new content in the Telegram channel where I store the links. This request is made through "http request" and the Telegram API.
- Next, a code block is responsible for filtering out everything that is not a hyperlink.
At this point, the flow splits into two so that parallel and similar processes are performed for Hoarder and Readeck.
- The corresponding API is accessed to get a list of all the links saved in the corresponding service.
- A code block is responsible for filtering the list of hyperlinks previously obtained from Telegram so that only those that are not already saved in the service continue.
- Finally, another "Http Request" node is responsible for using the service API to save the link in the corresponding service.

### Configuration instructions
The template makes use of the environment variables that I have declared in the n8n "docker-compose.yml" file through an external ".env" file. These are the variables I use:
``` txt
# Telegram Bot Token Sherlink
TG_SHERLINK_BOT_TOKEN=XXXXXXXX:XXXXXXXXXXXXXXXX
# Id Telegram Channel Sherlink
TG_SHERLINK_ID=-XXXXXXXXXXXXX
# Readeck server
READECK_SERVER=http://readeck.midomain.com
READECK_API_KEY=xxxxxxxxxxxxx
# Hoarder server
HOARDER_SERVER=http://hoarder.midomain.com
HOARDER_API_KEY=xxxxxxxxxxxxxx
```

Created in 1.85.4 n8n version

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
