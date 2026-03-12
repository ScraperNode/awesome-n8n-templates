# 📱 Automatically copy & translate Telegram channel content with GPT-4o-mini

> ⚡ **1,799 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview
This n8n workflow automatically fetches the latest post from a Telegram channel, translates it using OpenAI, and republishes it to another channel. It supports text, images, and videos.

## Features
-  **Works Without Admin Privileges** - Does not require any bot to be an admin in the source channel.
-  **Scheduled execution** - Runs daily at a configurable time
-  **AI-powered translation** - Uses OpenAI GPT-4o-mini for natural translations
-  **Multi-media support** - Handles text, images, and videos
-  **Easy configuration** - All settings in one centralized node
-  **Automatic content cleaning** - Removes original channel signatures

## Prerequisites

### Required Credentials
1. **Telegram Bot API**
   - Create a bot via @BotFather
   - Get your bot token
   - Add the bot as an admin to your target channel

2. **OpenAI API**
   - Sign up at OpenAI Platform
   - Generate an API key
   - Ensure you have sufficient credits

### Channel Requirements
- Source Telegram channel must be public
- Bot must have admin rights in the target channel

## Setup Instructions

### 1. Import the Workflow
- Copy the workflow JSON and import it into your n8n instance
- The workflow will be imported in inactive state

### 2. Configure Credentials

#### Telegram Bot Credentials
1. Go to **Credentials** → **Add Credential**
2. Select **Telegram**
3. Enter your bot token from BotFather
4. Test the connection
5. Save as "TelegramBot"

#### OpenAI Credentials  
1. Go to **Credentials** → **Add Credential**
2. Select **OpenAI**
3. Enter your OpenAI API key
4. Save as "OpenAI API"

### 3. Configure Channel Settings
Open the **"Set Source Channel"** node and modify:

```javascript
sourceChannel: "channel_here",              // Source channel username (without @)
targetChannel: "@your_channel_here",  // Target channel (@channel or chat_id)
targetLanguage: "Persian",            // Target language for translation
channelSignature: "signature text"     // The channel signature to replaced
```

### 4. Adjust Schedule (Optional)
- Open the **"Daily Schedule"** node
- Default: Runs daily at 9:00 AM
- Modify `triggerAtHour` and `triggerAtMinute` as needed

### 5. Test the Workflow
1. Click **"Execute Workflow"** to test manually
2. Check if content appears in your target channel
3. Verify translation quality and formatting

### 6. Activate the Workflow
- Toggle the workflow to **Active** status
- Monitor execution logs for any errors


### Content Filtering
Modify the **"Clean Post Content"** node to remove specific text patterns:
```javascript
let cleanPost = $input.first().json.post
  .replaceAll('unwanted_text', '')
  .replaceAll(/regex_pattern/g, '')
  .trim();
```

### Multiple Source Channels
To monitor multiple channels:
1. Duplicate the workflow
2. Change the `sourceChannel` in each copy
3. Use different schedules to avoid conflicts

### Custom Scheduling
The **Schedule Trigger** supports various patterns:
- **Hourly**: `{ "triggerAtMinute": 0 }`
- **Weekly**: `{ "triggerAtWeekday": 1, "triggerAtHour": 9 }`
- **Multiple times**: Use multiple schedule nodes

## Troubleshooting

### Common Issues

**No content fetched**
- Verify source channel is public
- Check if channel name is correct (without @)
- Ensure channel has recent posts

**Translation fails**
- Verify OpenAI API key is valid
- Check API usage limits and credits
- Ensure content is not empty

**Can't send to target channel**
- Verify bot is admin in target channel
- Check channel username/ID format
- Test bot permissions manually


### Compliance
- Respect copyright and fair use policies
- Add proper attribution when required
- Follow Telegram's Terms of Service

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
