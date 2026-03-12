# Credential Setup Guide

Most templates require API credentials to connect to external services. Here's how to set up the most common ones.

## Google Services (Gmail, Sheets, Drive, Calendar)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project and enable the relevant APIs
3. Create OAuth 2.0 credentials
4. In n8n: **Settings > Credentials > Add Credential > Google OAuth2**
5. Paste your Client ID and Client Secret

## OpenAI

1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Create a new API key
3. In n8n: **Settings > Credentials > Add Credential > OpenAI API**
4. Paste your API key

## Slack

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and create a new app
2. Add the required OAuth scopes for your workflow
3. Install the app to your workspace
4. In n8n: **Settings > Credentials > Add Credential > Slack OAuth2**
5. Use the Bot Token from the app settings

## Telegram

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Create a new bot with `/newbot`
3. Copy the API token
4. In n8n: **Settings > Credentials > Add Credential > Telegram API**
5. Paste the token

## Discord

1. Go to [discord.com/developers/applications](https://discord.com/developers/applications)
2. Create a new application and add a bot
3. Copy the bot token
4. In n8n: **Settings > Credentials > Add Credential > Discord API**
5. Paste the token and invite the bot to your server

## Databases (PostgreSQL, MySQL, MongoDB)

In n8n, add the relevant database credential with:
- Host and port
- Database name
- Username and password
- SSL settings if required

## General Tips

- Never commit credentials to version control
- Use n8n's built-in credential storage
- For production workflows, use environment variables where possible
- Rotate API keys regularly
