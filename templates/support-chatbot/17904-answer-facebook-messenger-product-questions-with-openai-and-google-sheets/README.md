# 💬 Answer Facebook Messenger product questions with OpenAI and Google Sheets

> ⚡ **1,198 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for new Facebook Messenger messages, uses OpenAI to extract the requested product and intent, checks the request against an inventory stored in Google Sheets, replies via the Facebook Graph API, and logs skipped events and conversations back to Google Sheets.

## How it works
1. Triggers when a new Facebook Messenger message arrives for your Page.
2. Splits the webhook payload into individual messaging events and ignores non-text messages or Page echo messages, logging skipped events to Google Sheets.
3. Uses OpenAI to extract a normalized product name and the customer’s intent (availability, price, or other) from the message.
4. Fetches your full inventory from Google Sheets and aggregates it into a single list for lookup.
5. Uses OpenAI to match the requested product against the inventory, generate a confidence score, and draft a ready-to-send reply.
6. Sends a Facebook Messenger reply via the Facebook Graph API using the AI reply when the match is confident, or a predefined “not found” template when it isn’t.
7. Appends the message details and outcome to a Google Sheets conversation log.

## Setup
1. Create and configure a Facebook App and Page for Messenger, then add your Facebook App ID in the trigger and connect the required Facebook Graph API credentials (including a Page Access Token) for sending replies.
2. Connect Google Sheets OAuth credentials and select the correct spreadsheets and sheet tabs for inventory, conversations, and skipped events in the three Google Sheets nodes.
3. Connect an OpenAI API credential and verify the model, temperature, confidence threshold, and not-found reply text in the Configuration step match your needs.
4. Ensure your inventory sheet contains consistent product fields (for example name and price) so the AI can match and compose accurate replies.

## Additional info
# Answer Facebook Messenger product questions with AI and Google Sheets inventory
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Answer-Facebook-Messenger-product-questions-with-AI-and-Google-Sheets-inventory-3a03d6550fd98190a9eed6f95b947879)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Facebook Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
