# 📱 Post AI news to Telegram with Google Gemini and human approval

> ⚡ **444 views** · 📱 [Social Media & Email Marketing](../)

## Description

**How it works**
This workflow automates the curation and publishing of AI news to a Telegram channel. It follows a four-stage process:

**Aggregation**: Monitors RSS feeds from VentureBeat and The AI Blog on a daily schedule.

**Filtering**: Merges the feeds and uses a code snippet to select only the single most recent, high-quality article.

**Summarization**: Sends the article data to Google Gemini, which generates a professional, emoji-rich summary formatted for social media.

**Human-in-the-loop Approval**: Instead of auto-posting, it sends the draft to a private Telegram chat. The post is only published to the public channel once a human clicks "Approve."

**Set up steps**
Time estimate: 10–15 minutes.

**Credentials**: You will need to connect your Google Gemini (PaLM) API key and your Telegram Bot API token.

**Telegram IDs**: Ensure you have the Chat ID for both your private approval chat and your public destination channel.

**Schedule**: The trigger is currently set to 3:56 PM daily; adjust this in the "Schedule Trigger" node to fit your preferred posting time.

## 🔗 Nodes Used

RSS Read, Telegram, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
