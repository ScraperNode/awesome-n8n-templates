# 📋 Sync timer entries from Clockify to Syncro

> ⚡ **1,164 views** · 📋 [Project Management](../)

## Description

This workflow will take a timer entry from Clockify and submit it to a matching ticket in Syncro. It saves the time entry ID from Clockify and the time entry ID from Syncro into a Google Sheets. Then, it will check if a match already exists from a previous update and will update the same time entry if the description or time is changed in Clockify. There is a Set node with the name and Syncro IDs of technicians.

If you have multiple technicians with the same name, this won't work for you. Likewise, if the name in Clockify doesn't exactly match what you put in the Set, it won't work. You also need to setup a webhook in Clockify set to trigger on "Time entry updated (anyone)" and pointed at your workflow. Configured this way, you can start and stop time entries at will and it won't do anything until you change the description.

&gt; This workflow is part of an MSP collection, The original can be found here: https://github.com/bionemesis/n8nsyncro

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Start, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
