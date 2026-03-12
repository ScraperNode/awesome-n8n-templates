# ⚡ Get an automated, curated newsletter everyday using Perplexity and Gmail

> ⚡ **2,350 views** · ⚡ [Personal Productivity](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## Setup Time
5-10 minutes

## Problem
⏳ Researching and personalizing outreach is slow and manual!

You spend hours searching for the right people, reading through profiles, and then writing custom emails—only to repeat the process for every new lead or opportunity. It’s tedious, error-prone, and not scalable.

What if you could get a beautifully formatted, ready-to-send newsletter in your Gmail drafts—automatically, every day?

That’s what this Perplexity Newsletter Workflow does, powered by n8n.

## Prerequisites
n8n account (self-hosted or cloud)
Perplexity API key (or OpenAI API key for similar LLMs)
Gmail account (for sending emails)
(Optional) Google Sheets account (for archiving newsletters)
Who is this for?
🎯 Product Managers who want to stay ahead of trends
🎯 MBA aspirants tracking admission news
🎯 AI professionals and enthusiasts seeking curated updates
🎯 Anyone who wants a daily, personalized, multi-topic newsletter—without manual work

## Step-by-step workflow
Setup time: 5-10 minutes

## Trigger

Use a Cron node to schedule the workflow (e.g., every morning at 8am).
Fetch News from Perplexity

Add three HTTP Request nodes (or Perplexity nodes if available):
One for MBA News
One for Product Management News
One for AI Automation News
Each node sends a prompt to Perplexity and receives a summary with citations.
Merge News Items

Use a Merge node (mode: Append) to combine the three news responses.
Format Newsletter

Add a Code node after the Merge node.
In the Code node, format each news item with a section header (e.g., “MBA News”, “Product Management”, “AI Automation News”), apply HTML formatting, and combine all into a single HTML message.
(Use the code from our previous message for beautiful formatting and sectioning.)
Send Email

Add a Gmail node.
Set the “HTML” field to the formatted newsletter from the Code node.
Set the “Subject” to something like “🤖 Your Daily Perplexity Newsletter”.
(Optional) Archive to Google Sheets

Add a Google Sheets node to append the newsletter content and date for future reference.

## Sample Output

A single, beautifully formatted email in your Gmail drafts, with three clearly labeled sections, clickable sources, and all the latest insights—ready to send or review.

Ready to automate your daily insights?
Set up this workflow in n8n and never miss an update again!

## Customization

Change schedule time in the Cron node
Modify news topics or prompts in the Perplexity nodes
Adjust section titles or email styling in the Format Newsletter (Code) node

## 🔗 Nodes Used

Gmail, Schedule Trigger, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
