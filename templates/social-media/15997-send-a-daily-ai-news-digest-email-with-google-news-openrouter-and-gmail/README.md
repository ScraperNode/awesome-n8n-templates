# 📱 Send a daily AI news digest email with Google News, OpenRouter, and Gmail

> ⚡ **120 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs daily and pulls the latest AI-related News from three Google News RSS searches, uses an OpenRouter LLM to pick and summarize the top items, then formats the results into a styled HTML digest and sends it via Gmail.

## How it works
1. Runs every day at 9:00 based on the schedule trigger.
2. Reads three Google News RSS feeds for “artificial intelligence”, “generative AI + LLM”, and “AI agents + automation tools” from the last 24 hours.
3. Merges the RSS items, extracts key fields, removes duplicates by title, and keeps up to 15 articles.
4. Sends the cleaned article list to an OpenRouter chat model to select the top 8 stories and return a JSON array with summaries and “why it matters” notes.
5. Builds a formatted HTML email and subject line from the AI-generated JSON output.
6. Sends the HTML digest to the configured recipient using Gmail.

## Setup
1. Add an OpenRouter API credential and select it in the OpenRouter chat model used by the summarization step, 
2. Add a Gmail OAuth2 credential and select it in the Gmail send step. 
3. Update the recipient email address in the Gmail node (and optionally adjust the schedule time and RSS feed URLs/queries to match your needs).

## Requirements
- OpenRouter account — free, no credit card needed, used for the Nemotron 120B AI model
- Gmail account — used to send the daily digest via Gmail OAuth2
- No other paid services, APIs, databases, or scraping tools required

## Customization
- You can change the three Google News RSS search queries in the RSS Feed nodes to track any topics beyond AI such as Web3, SaaS, fintech, geopolitics, or niche verticals relevant to your industry or clients.
- The prompt inside the AI Chain node can be modified to change the number of selected stories, the summary style, the tone, or the output structure. You could also add a "Key Takeaway" field, change from 8 to 5 or 10 stories, or ask the AI to group articles by subtopic.
- The HTML email template in the Build HTML Email code node is fully customisable you can change the color scheme, add your logo, include a header banner, add a footer with unsubscribe links, or reformat the article cards entirely to match your brand or client's newsletter style.

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
