# 📱 Generate AI-summarized newsletter drafts from RSS feeds with GPT-4 and Gmail

> ⚡ **1,536 views** · 📱 [Social Media & Email Marketing](../)

## Description

## **How it works**
Every hour, the workflow checks the RSS feed https://www.artificialintelligence-news.com/feed/ for new articles.
For each new item, it extracts the title, snippet, and full content, then sends them to an AI model to summarize and optionally translate.
The processed summary is passed to another AI model (with a personalized “Patrik” assistant tone) to generate a newsletter-style text.
Finally, the result is saved as a draft email in Gmail, ready to review and send.

## How to use
Set your preferred language in the Information Extractor system prompt.

Update the RSS feed URL if you want to pull articles from a different source.

Customize the assistant tone in the Message a model node for your newsletter style.

Connect your Gmail account to the Create a draft node.

Activate the workflow — every hour it will fetch new articles, generate newsletter content, and save them as Gmail drafts.

## Customising this workflow
Change the source: Replace the RSS feed URL in the RSS Feed Trigger node.

Language & length: Edit the system prompt in the Information Extractor to set your preferred language and summary style.

Tone & format: Adjust the Message a model node to define the assistant’s personality, structure (headlines, bullets, CTA), or output as HTML.

Email settings: Change the subject, sender, or draft folder in the Create a draft node.

Frequency: Modify the trigger schedule to run daily, weekly, or at custom intervals.

## 🔗 Nodes Used

Gmail, OpenAI Chat Model, RSS Feed Trigger, OpenAI, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
