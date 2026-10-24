# 🎫 Draft Gmail reply suggestions with OpenAI for inbound emails

> ⚡ **140 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for new messages, filters out excluded senders, uses OpenAI to decide whether a reply is needed, and drafts a suggested response in the original Gmail thread for you to review and send.

## How it works
1. Triggers every minute by polling your Gmail inbox for new emails matching the configured Gmail search query.
2. Loads reply settings such as the OpenAI models to use, excluded sender patterns, and the desired greeting, signature, and tone.
3. Skips processing when the sender matches the excluded-senders list (for example, no-reply and newsletter addresses).
4. Sends the email subject, sender, and body to OpenAI to classify whether the message needs a personal reply or not.
5. When a reply is needed, uses OpenAI to generate a plain-text draft reply in the same language as the inbound email following your greeting/signature rules.
6. Creates a Gmail draft reply in the same conversation thread, addressed to the original sender, so you can review and send it manually.

## Setup
1. Connect a Gmail OAuth2 credential with permission to read emails and create drafts.
2. Add an OpenAI API credential and ensure it has access to the models you set in the configuration (for example, gpt-5-mini and gpt-5.4).
3. Review the Gmail trigger search query to control which inbox emails are processed (for example, excluding promotions and social categories).
4. Update the configuration values for excluded senders, greeting, signature, and tone to match your preferences.

## Additional info
# Draft AI replies to incoming emails in Gmail
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Draft-AI-replies-to-incoming-emails-in-Gmail-39e3d6550fd98101a034c6c1f305d24c)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
