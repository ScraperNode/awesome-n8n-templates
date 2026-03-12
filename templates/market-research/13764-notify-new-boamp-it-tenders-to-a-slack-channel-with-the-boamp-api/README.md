# 📊 Notify new BOAMP IT tenders to a Slack channel with the BOAMP API

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

• Config node for channel, keyword, limit, and empty-results message
• Fetches tenders from BOAMP API (public data, no API key)
• Formats message with title, date, buyer, link - or sends friendly "no results" message
• Posts to your Slack channel

## Set up steps

• Add Slack credential - ~2 min
• Edit Config node (channel, keyword, limit, EMPTY_MESSAGE)
• Activate the workflow

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
