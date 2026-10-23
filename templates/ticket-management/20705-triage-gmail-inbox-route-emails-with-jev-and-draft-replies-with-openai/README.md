# 🎫 Triage Gmail inbox, route emails with Jev, and draft replies with OpenAI

> ⚡ **56 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors unread Gmail inbox messages, uses TypeSafe AI Jev to score urgency and route each email to a department label, and, when a reply is needed, uses OpenAI to generate a Gmail draft reply and logs all decisions to an n8n Data Table.

## How it works
1. Triggers every minute when a new unread email arrives in your Gmail inbox.
2. Extracts key fields (sender, subject, body, thread ID) and builds a condensed email context for downstream processing.
3. Uses TypeSafe AI Jev to score the email’s urgency and estimate whether it needs a personal reply and whether the sender is upset.
4. Uses TypeSafe AI Jev to route the email to Sales, Support, Billing, Partnerships, Newsletters, Spam, or a low-confidence “To review” path.
5. Adds the corresponding Gmail label to the message and records the chosen department and routing confidence.
6. If Jev predicts the email needs a reply (and it is not Spam or Newsletters), OpenAI generates a short reply draft and saves it as a Gmail draft in the same thread.
7. Logs the email metadata, Jev scores, routing decision, and whether a draft was created to an n8n Data Table.

## Setup
1. Add a Gmail OAuth2 credential and ensure the Gmail trigger can read unread emails from your target mailbox.
2. Install and configure the TypeSafe AI community node (@typesafe-ai/n8n-nodes-typesafe-ai) if needed, then add a TypeSafe AI API credential for the two Jev steps.
3. Add an OpenAI API credential and select the model you want to use for drafting replies.
4. Create the required Gmail labels (Sales, Support, Billing, Partnerships, Newsletters, Spam, and To review) and map each label ID in the corresponding Gmail labeling steps.
5. Create an n8n Data Table for logging and select its ID in the logging step, then update the Configuration values (company context, thresholds, signature, and body length) before activating.

## Additional info
[![VIDEO](https://img.youtube.com/vi/1HFTuRrkr2k/maxresdefault.jpg)](https://youtu.be/1HFTuRrkr2k)

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/n8n-Jev-sort-and-answer-your-Gmail-emails-with-an-AI-that-decides-3f33d6550fd981a3ae7df36d80348c0f)

Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
