# 🎫 Classify emails and send replies with GPT-4o and gotoHuman for supervision

> ⚡ **1,159 views** · 🎫 [Ticket Management & Triage](../)

## Description

![wflow preview.JPG](fileId:2054)
Let AI classify your incoming emails and draft replies.
Use gotoHuman to approve emails before they are sent out. It also lets you manually edit the draft or even ask for a retry.

## How it works
1. The workflow is triggered for each new email which gets passed to an **AI classification agent**.
It assigns the email to one of the categories defined in the prompt (Customer Support, Sales opportunity, Promo, Personal,...). The agent also determines whether a reply is needed and if it is important.
2. If a reply is needed, we ask the **AI Email Writer** to draft a response. Even if it is missing context it can help us draft an outline for the response.
3. The email draft is sent to **gotoHuman** where the reviewer can manually edit it or ask to regenerate it with the option to even edit the prompt (Retries loop back to the _AI Email Writer_ node)
![gthreview.JPG](fileId:2053)
![gthchat.JPG](fileId:2052)
4. Approved email replies are automatically sent from the workflow

## How to set up

1. **Most importantly, install the gotoHuman node before importing this template!**
(Just add the node to a blank canvas before importing)
2. Set up your credentials for gotoHuman, OpenAI, and Gmail
3. In gotoHuman, select and create the pre-built review template "Email agent" or import the ID: `v81wzxwYoFYvWpmuIBgX`
4. Select this template in the gotoHuman node

## Requirements

You need accounts for
- gotoHuman (human supervision)
- OpenAI (classification, drafting)
- Gmail

## How to customize

- Change the predefined categories in the prompt of the _AI classification agent_
- Provide the _AI Email Writer_ with more context to create replies. Consider adding tools that allow the agent to fetch more infos about clients, your calendar, FAQs for your product,...

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
