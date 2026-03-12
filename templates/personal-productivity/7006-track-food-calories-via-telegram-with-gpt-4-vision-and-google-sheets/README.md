# ⚡ Track food calories via Telegram with GPT-4 Vision and Google Sheets

> ⚡ **2,272 views** · ⚡ [Personal Productivity](../)

## Description

This workflow enables users to submit food images to a Telegram bot, which uses OpenAI’s GPT-4 Vision to identify the item and estimate its caloric value. The results are stored in Google Sheets and sent back to the user.

### What it does:
1. Triggers on a photo sent via Telegram.
2. Acknowledges the user with a sticky note message.
3. Downloads the image file securely using Telegram's API.
4. Sends the image to GPT-4 Vision with a prompt: *“Describe this food and estimate its calories.”*
5. Logs the GPT response to a Google Sheet (with timestamp).
6. Replies to the user with the result (e.g., food name and estimated calories).

### Use cases:
- Personal food tracking
- Nutrition logging via chat
- Meal journaling for fitness or health

### Requirements:
- Telegram Bot Token (via credentials)
- OpenAI GPT-4 Vision access
- Google Sheets credential with access to the target sheet

### Notes:
- You can extend this template to calculate daily totals, categorize meals (breakfast/lunch/dinner), or even integrate with calorie goals.
- The sticky note node confirms receipt to enhance UX.
- Ideal for wellness apps, chat-based food journals, or AI-powered health bots.

## 🔗 Nodes Used

Function, Google Sheets, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
