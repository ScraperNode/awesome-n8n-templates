# 🎣 Qualify replies from Pipedrive persons with AI

> ⚡ **1,992 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## About the workflow
The workflow reads every reply that is received from a cold email campaign and qualifies if the lead is interested in a meeting. If the lead is interested, a deal is made in pipedrive. You can add as many email inboxes as you need!

## Setup:
- Add credentials to the Gmail, OpenAI and Pipedrive Nodes.
- Add a in_campaign field in Pipedrive for persons. In Pipedrive click on your credentials at the top right, go to company settings &gt; Data fields &gt; Person and click on add custom field. Single option [TRUE/FALSE].
- If you have only one email inbox, you can delete one of the Gmail nodes.
- If you have more than two email inboxes, you can duplicate a Gmail node as many times as you like. Just connect it to the Get email node, and you are good to go!
- In the Gmail inbox nodes, select Inbox under label names and uncheck Simplify.

## 🔗 Nodes Used

Pipedrive, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
