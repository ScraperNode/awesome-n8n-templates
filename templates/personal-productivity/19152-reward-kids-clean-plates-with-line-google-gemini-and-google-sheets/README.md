# ⚡ Reward kids’ clean plates with LINE, Google Gemini and Google Sheets

> ⚡ **5 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
Turn the daily "please finish your food" struggle into a game. A parent sends a photo of the plate after a meal, Google Gemini scores how much was eaten, and the child gets an encouraging message with a stamp card and a streak toward the next reward.

## How it works
1. Receives a POST webhook from LINE when a user messages your bot.
2. Checks whether the incoming LINE message is an image and replies with instructions if it is not.
3. Downloads the image content from the LINE Messaging API.
4. Sends the photo to Google Gemini to judge whether it shows a plate, score how much was eaten, and generate a short praise message.
5. Reads prior entries from a Google Sheets “Log” sheet, calculates today’s earned stamp, total stamps, and consecutive-day streak, and builds a stamp-card message.
6. Appends today’s result (date/time, score, leftovers, stamps earned, and comment) to Google Sheets and replies to the child in LINE with the generated message.

## Setup
1. Create a LINE Messaging API channel, enable webhooks, and add your Channel access token to the workflow’s configuration values.
2. Add Google Gemini (PaLM) API credentials and Google Sheets OAuth2 credentials in n8n.
3. Create a Google Sheet with a “Log” tab and the columns Date, Time, Child Name, Clean Plate, Score, Leftovers, Stamps Earned, and Comment, then set your Google Sheets document ID and child name in the workflow configuration.
4. Copy the n8n webhook URL for this workflow into the LINE Developers console webhook setting.
5. Adjust STAMPS_PER_REWARD (reward goal) and any scoring threshold values in the workflow configuration to match your rules.

## Requirements
- A LINE Messaging API channel with a Channel access token
- A Google Gemini (PaLM) API key
- A Google account for Google Sheets

## Customization
- Change CLEAN_PLATE_THRESHOLD to make the judge stricter or gentler
- Change STAMPS_PER_REWARD to set how many stamps earn a reward
- Edit the Gemini prompt to change the tone or the language of the praise message
- Only the plate needs to be in the photo, so no faces are captured

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
