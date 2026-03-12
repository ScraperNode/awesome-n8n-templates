# ⚡ Scheduled daily affirmations via email and Telegram using Cron

> ⚡ **149 views** · ⚡ [Personal Productivity](../)

## Description

## Description

Wake up gently. This elegant workflow runs every morning at 7 AM, picks one uplifting affirmation from a curated list, and delivers it to your inbox (with optional Telegram). Zero code, zero secrets—just drop in your SMTP and Telegram credentials, edit the affirmations, and activate. Perfect for creators, homemakers, and entrepreneurs who crave intention and beauty before the day begins.

## How it works (high-level steps)
- Cron wakes the flow daily at 7 AM.
- Set: Configuration stores your email, Telegram chat ID, and affirmations.
- Code node randomly selects one affirmation.
- Email node sends the message via SMTP.
- IF node decides whether to forward it to Telegram as well.
- 
## Set-up time
- 2 – 3 minutes
- 30 s: add SMTP credential
- 30 s: add Telegram Bot credential (optional)
- 1 min: edit affirmations & email addresses
- 30 s: activate

## Detailed instructions

All deep-dive steps live inside the yellow and white sticky notes on the canvas—no extra docs needed.

## Requirements

- SMTP account (SendGrid, Gmail, etc.)
- Telegram Bot account (optional)
- Customisation tips
- Change Cron time or frequency
- Swap affirmation list for quotes, verses, or mantras
- Add Notion logger branch for journaling

## 🔗 Nodes Used

Cron, Send Email, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
