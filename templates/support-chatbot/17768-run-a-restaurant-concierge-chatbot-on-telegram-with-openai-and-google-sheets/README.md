# 💬 Run a restaurant concierge chatbot on Telegram with OpenAI and Google Sheets

> ⚡ **273 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs a Telegram-based restaurant concierge that answers menu questions, takes text or voice orders with an OpenAI agent, and saves confirmed orders to Google Sheets, then follows up with an automated review request and sends a daily marketing broadcast to active clients.

## How it works
1. Triggers when a customer sends a Telegram message to your bot.
2. Stores restaurant settings (name, menu/review links, upsell rule, and OpenAI model), logs the sender in a Google Sheets Clients tab, and starts a timed wait before requesting a review.
3. Routes the incoming Telegram message as text or voice, transcribing voice notes with OpenAI before continuing.
4. Sends the customer message plus chat context into an OpenAI-powered agent that uses Google Sheets tools to look up menu items/prices, propose exactly one upsell, and record the finalized order in a Google Sheets Orders tab.
5. Replies to the customer in Telegram with the agent’s response or sends an “unsupported message type” notice if the input is not text or voice.
6. After the configured delay, sends a Telegram review-request message containing your review link.
7. On a daily schedule, reads today’s campaign from a Google Sheets Marketing tab, sends the message to each active (non-unsubscribed) client on Telegram, and marks the campaign row as done.

## Setup
1. Create a Telegram bot with @BotFather, add the Telegram API credential in n8n, and ensure the trigger and send-message nodes use the same bot.
2. Create or select a Google Sheets spreadsheet with tabs and columns for Menu, Orders, Clients, and Marketing, then select the same document and sheet names in all Google Sheets nodes/tools.
3. Add an OpenAI API credential for the Chat model (agent) and the audio transcription step.
4. Update the Configuration values (restaurant name, menu link, review link, upsell instruction, review delay, and model) to match your restaurant.
5. Add today’s marketing rows in the Marketing tab (DATE, MESSAGE, DONE) and keep UNSUBSCRIBE empty for clients who should receive broadcasts.

## Additional info
# Run a restaurant AI concierge on Telegram with order taking and upsells
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Run-a-restaurant-AI-concierge-on-Telegram-with-order-taking-and-upsells-39f3d6550fd98183a4bed525186ed945)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
