# ⚡ Sync Google Calendar tasks to Trello every day

> ⚡ **4,093 views** · ⚡ [Personal Productivity](../)

## Description

This workflow will allow you at the beginning of each day to copy your google calendar events into Trello so you can take notes, label, or automate your tasks. 

When deploying this, don't forget to change:
- Label ID for meeting type under "Create Trello Cards". You should be able to find instructions [Here](https://stackoverflow.com/questions/42713100/trello-label-id-in-microsoft-flow#:~:text=Go%20to%20any%20board%20and,info%20should%20be%20right%20there.) on how to find the label ID. 
- Description for Trello cards under "Create Trello Cards". I currently pull in notes but it should be simple to change to pull the Gcal description instead.
- You can change the trigger time to fire at a different time.

## 🔗 Nodes Used

Cron, Function, Trello, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
