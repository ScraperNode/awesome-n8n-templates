# ⚙️ Configure Telegram bot webhooks with form automation

> ⚡ **1,683 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# 🤖 Telegram Bot Webhook Configuration Tool

This workflow creates a simple web form that helps you configure Telegram bot webhooks quickly. Instead of manually constructing the Telegram API URL, this tool does it for you automatically.

## How It Works

The workflow consists of three main steps:

1. **Form Input**: A web form collects your bot token and webhook URL
2. **URL Construction**: Automatically builds the correct Telegram API URL
3. **Redirect**: Takes you directly to the Telegram API to complete the configuration

## What You Need

- **Bot Token**: Get this from @BotFather on Telegram (format: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)
- **Webhook URL**: Your n8n webhook endpoint (must be HTTPS)

## Setup Instructions

1. Import this workflow into your n8n instance
2. Activate the workflow
3. Access the generated form URL
4. Fill in your bot details and submit

## Form Fields

| Field | Description | Example |
|-------|-------------|---------|
| Bot API Token | Token from BotFather | `123456789:ABCdefGHIjklMNOpqrsTUVwxyz` |
| Webhook URL | Your n8n webhook endpoint | `https://your-instance.app.n8n.cloud/webhook/telegram` |

## What Happens

1. You enter your bot token and webhook URL in the form
2. The workflow constructs this URL: `https://api.telegram.org/bot{TOKEN}/setWebhook?url={WEBHOOK_URL}`
3. You're redirected to that URL where Telegram configures your webhook
4. Telegram shows you a success or error message

## Benefits

- **No Manual URL Building**: Eliminates copy-paste errors
- **Quick Setup**: Configure webhooks in seconds
- **Privacy Focused**: No data is stored anywhere
- **Team Friendly**: Share the form URL with team members

## Common Webhook URLs

```
n8n Cloud: https://your-instance.app.n8n.cloud/webhook/telegram-bot
Self-hosted: https://your-domain.com/webhook/telegram-bot
```

## Requirements

- n8n with form trigger support
- Valid Telegram bot token
- Publicly accessible webhook URL (HTTPS required)

## Troubleshooting

**Invalid Token Error**: Make sure you copied the complete token from BotFather

**Webhook Error**: Ensure your URL is publicly accessible and uses HTTPS

**SSL Error**: Verify your webhook URL has a valid SSL certificate

This tool simply automates the manual process of visiting the Telegram API URL to configure your bot's webhook. Perfect for developers who frequently set up or change Telegram bot configurations.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
