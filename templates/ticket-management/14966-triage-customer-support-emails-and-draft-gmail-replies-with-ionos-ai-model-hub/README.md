# 🎫 Triage customer support emails and draft Gmail replies with IONOS AI Model Hub

> ⚡ **59 views** · 🎫 [Ticket Management & Triage](../)

## Description

## AI Customer Support Triage — Auto-Draft Replies with IONOS AI Model Hub

This n8n template shows you how to automate customer support email triage with a sovereign AI. By combining Gmail for inbox monitoring and the IONOS AI Model Hub, every customer email is classified and replied to by AI.

## Use cases

- **Support inbox management:** Automatically sort incoming emails into Spam, Sales Lead, Tech Support, FAQ, Billing, or Other — so your team knows exactly what needs attention and in what order.
- **Draft replies in seconds:** Instead of writing responses from scratch, your agent opens Gmail Drafts to find a ready-to-send reply already written in the customer's language — just review and hit Send.
- **Multi-inbox coverage:** Monitor both your info@ and support@ addresses or more in a single workflow, with a filter that ensures only legitimate business emails reach the AI.

## How it works

A Gmail Trigger polls your inbox every minute for new unread messages. A Filter node immediately discards anything not addressed to your support@ or info@ address, so irrelevant mail never reaches the AI.

The **Prepare Email Data** code node strips HTML, removes quoted reply chains, and extracts the clean fields — sender, subject, date, recipient, and body — with no prompt logic mixed in.

The **Basic LLM Chain** node then takes over: it sends the cleaned email to the IONOS AI Model Hub (Mistral Small 24B) with a structured prompt that instructs the model to return a single JSON object containing the category, priority, sentiment, detected language, a one-sentence summary, and a full draft reply written in the same language as the customer's email.

A **Parse AI Response** code node extracts and validates the JSON, with a graceful fallback if the model output is malformed. A Switch node routes Spam emails to a silent mark-as-read action, while all other categories trigger the **Gmail Create Draft** node — which saves the AI-written reply directly into your Drafts folder, threaded to the original conversation. Your agent reviews it and clicks Send.

## Good to know

**Filtering:** The Filter node uses a partial match on `support@` and `info@`. For a stricter match, update the values to your full addresses (e.g. `support@yourcompany.com`).

**Model selection:** The IONOS AI Model Hub offers several LLMs including Mistral Small 24B, and Nemo. For email triage and reply drafting, Mistral Small 24B the best balance of reasoning quality and response speed.

**Language support:** The prompt instructs the model to detect the email language and reply in kind — no additional configuration needed for multilingual inboxes.

## How to set it up

1. Connect your Gmail OAuth2 credentials to the Gmail Trigger, Filter, and both Gmail action nodes.
2. Update the Filter node values with your actual support addresses.
3. Add your IONOS Cloud API token to the **IONOS Cloud Chat Model** node credentials.
4. Customize the prompt in the **AI Triage & Draft Reply** node — adjust categories, tone, or signature as needed.
5. Activate the workflow and send a test email to verify the draft appears in Gmail.

## Requirements

- Gmail account (OAuth2) for inbox monitoring and draft creation
- IONOS Cloud account to access the AI Model Hub

## 🔗 Nodes Used

Gmail, Gmail Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
