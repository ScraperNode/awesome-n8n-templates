# 🎫 Triage customer support tickets from Gmail and forms with OpenAI, Slack and Sheets

> ⚡ **75 views** · 🎫 [Ticket Management & Triage](../)

## Description

How it works

Listens for new support requests from Gmail and a web form simultaneously, normalizing both into a single ticket schema
Routes each ticket through an OpenAI powered triage agent that classifies priority, category, and sentiment
Fans the result to three parallel outputs: a Slack alert to the support team, a row logged in Google Sheets, and an auto reply to the customer

Set up steps

Connect Gmail, Slack, and Google Sheets credentials, then authorize OpenAI (~10 minutes total)
Keep full setup details, node by node instructions, and prompt tuning tips in the sticky notes inside the workflow![oo.png](fileId:6442)

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
