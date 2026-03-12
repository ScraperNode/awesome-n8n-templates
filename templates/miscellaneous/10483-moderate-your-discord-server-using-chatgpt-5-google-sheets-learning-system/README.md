# 🔧 Moderate your Discord server using chatGPT-5 & Google Sheets (Learning system)

> ⚡ **151 views** · 🔧 [Miscellaneous](../)

## Description

# Discord AI Content Moderator with Learning System

This n8n template demonstrates how to automatically moderate Discord messages using AI-powered content analysis that learns from your community standards. It continuously monitors your server, intelligently flags problematic content while allowing context-appropriate language, and provides a complete audit trail for all moderation actions.

## Use cases are many:

Try moderating a forex trading community where enthusiasm runs high, protecting a gaming server from toxic behavior while keeping banter alive, or maintaining professional standards in a business Discord without being overly strict!

## Good to know

* This workflow uses OpenAI's GPT-5 Mini model which incurs API costs per message analyzed (approximately $0.001-0.003 per moderation check depending on message volume)
* The workflow runs every minute by default - adjust the Schedule Trigger interval based on your server activity and budget
* Discord API rate limits apply - the batch processor includes 1.5-second delays between deletions to prevent rate limiting
* You'll need a Google Sheet to store training examples - a template link is provided in the workflow notes
* The AI analyzes context and intent, not just keywords - "I **cking love this community" won't be deleted, but "you guys are sh*t" will be
* Deleted messages cannot be recovered from Discord - the admin notification channel preserves the content for review

## How it works

* The Schedule Trigger activates every minute to check for new messages requiring moderation
* We'll fetch training data from Google Sheets containing labeled examples of messages to delete (with reasons) and messages to keep
* The workflow retrieves the last 10 messages from your specified Discord channel using the Discord API
* A preparation node formats both the training examples and recent messages into a structured prompt with unique indices for each message
* The AI Agent (powered by GPT-5 Mini) analyzes each message against your community standards, considering intent and context rather than just keywords
* The AI returns a JSON array of message indices that violate guidelines (e.g., [0, 2, 5])
* A parsing node extracts these indices, validates them, removes duplicates, and maps them to actual Discord message objects
* The batch processor loops through each flagged message one at a time to prevent API rate limiting and ensure proper error handling
* Each message is deleted from Discord using the exact message ID
* A 1.5-second wait prevents hitting Discord's rate limits between operations
* Finally, an admin notification is posted to your designated admin channel with the deleted message's author, ID, and original content for audit purposes

## How to use

* Replace the Discord Server ID, Moderated Channel ID, and Admin Channel ID in the "Edit Fields" node with your server's specific IDs
* Create a copy of the provided Google Sheets template with columns: message_content, should_delete (YES/NO), and reason
* Connect your Discord OAuth2 credentials (requires bot permissions for reading messages, deleting messages, and posting to channels)
* Add your OpenAI API key to access GPT-5 Mini
* Customize the AI Agent's system message to reflect your specific community standards and tone
* Adjust the message fetch limit (default: 10) based on your server activity - higher limits cost more per run but catch more violations
* Consider changing the Schedule Trigger from every minute to every 3-5 minutes if you have a smaller community

## Requirements

* Discord OAuth2 credentials for bot authentication with message read, delete, and send permissions
* Google Sheets API connection for accessing the training data knowledge base
* OpenAI API key for GPT-5 Mini model access
* A Google Sheet formatted with message examples, deletion labels, and reasoning
* Discord Server ID, Channel IDs (moderated + admin) which you can get by enabling Developer Mode in Discord

## Customising this workflow

* Try building an emoji-based feedback system where admins can react to notifications with ✅ (correct deletion) or ❌ (wrong deletion) to automatically update your training data
* Add a severity scoring system that issues warnings for minor violations before deleting messages
* Implement a user strike system that tracks repeat offenders and automatically applies temporary mutes or bans
* Expand the AI prompt to categorize violations (spam, harassment, profanity, etc.) and route different types to different admin channels
* Create a weekly digest that summarizes moderation statistics and trending violation types
* Add support for monitoring multiple channels by duplicating the Discord message fetch nodes with different channel IDs
* Integrate with a database instead of Google Sheets for faster lookups and more sophisticated training data management


## If you have questions 
Feel free to contact me here:

elijahmamuri@gmail.com
elijahfxtrading@gmail.com

## 🔗 Nodes Used

Google Sheets, Discord, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
