# 🎫 Send a ChatGPT email reply and save responses to Google Sheets

> ⚡ **18,975 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow sends a OpenAI GPT reply when an email is received from specific email recipients. It then saves the initial email and the GPT response to an automatically generated Google spreadsheet. Subsequent GPT responses will be added to the same spreadsheet.

Additionally, when feedback is given for any of the GPT responses, it will be recorded to the spreasheet, which can then be used later to fine-tune the GPT model.

## Prerequisites

- [OpenAI credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/)
- [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/)

## How it works

This workflow is essentially a two-in-one workflow. It triggers off from two different nodes and have very different functionality from each trigger.

The flow triggered from `On email received` node is as follows:

1. Triggers off on the `On email received` node.
2. Extract the email body from the email.
3. Generate a response from the email body using the `OpenAI` node.
4. Reply to the email sender using the `Send reply to recipient` node. A feedback link is also included in the email body which will trigger the `On feedback given` node. This is used to fine-tune the GPT model.
5. Save the email body and OpenAI response to a Google Sheet. If a sheet does not exist, it will be created.

The flow triggered from `On feedback given` node is as follows:

1. Triggers off when a feedback link is clicked in the emailed GPT response.
2. The feedback, either positive or negative, for that specific GPT response is then recorded to the Google Sheet.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
