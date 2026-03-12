# 📊 Client feedback collector & analyzer (Form → AI summary → Email + Social draft)

> ⚡ **1,516 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does

This n8n workflow collects client feedback through a form (Tally, Typeform, or Google Forms) and uses AI to analyze it.  
It automatically generates a summary of the positive points, highlights areas for improvement, and drafts a short social media post based on the feedback.

Ideal for:
- Freelancers
- Customer support teams
- Online service providers
- Coaches and educators

---

## Setup steps

1. Connect your form tool to the Webhook node (`POST` method) and make sure it sends a `feedback` field.
2. Add your DeepSeek (or other GPT-compatible) API key to the AI request node.
3. Configure the email node with your SMTP credentials and desired recipient address.
4. Replace the Telegram node with Slack, Buffer, or another integration if you prefer.
5. *(Optional)* Customize the prompt in the function node for different tone/language.

🕐 **Estimated setup time**: ~15 minutes  
💬 **Sticky notes are included and clearly positioned** to guide you.

---

## Technologies used

- n8n Webhook node
- n8n Function node
- DeepSeek Chat or compatible AI API
- Email node (SMTP)
- Telegram node (or other integration)
- Sticky Notes for setup guidance

---

## Use cases

- Analyze feedback from onboarding or satisfaction surveys
- Create ready-to-publish social media content from real customer praise
- Help support or marketing teams act on feedback immediately

---

## 🔗 Nodes Used

Send Email, Function, HTTP Request, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
