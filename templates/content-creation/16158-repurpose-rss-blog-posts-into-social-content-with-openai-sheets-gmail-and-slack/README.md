# 🎬 Repurpose RSS blog posts into social content with OpenAI, Sheets, Gmail and Slack

> ⚡ **9 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs daily, pulls the latest post from an RSS feed, and uses OpenAI to repurpose it into an SEO blog rewrite, a LinkedIn post, and an X/Twitter thread, then logs the drafts to Google Sheets, creates a Gmail draft, and posts a preview to Slack.

## How it works
1. Runs every 24 hours on a schedule.
2. Loads your RSS feed URL, audience, and brand voice settings and fetches the latest items from the RSS feed.
3. Keeps only the newest feed item to avoid processing multiple posts in a single run.
4. Sends the post title, snippet/content, and link to OpenAI to generate a structured JSON response containing an SEO title, meta description, rewritten blog post, LinkedIn post, X/Twitter thread, and hashtags.
5. Appends the generated social drafts and source metadata to a Google Sheets content calendar.
6. Creates a Gmail draft containing the SEO fields, blog rewrite, LinkedIn post, X/Twitter thread, and hashtags for review.
7. Posts a Slack message with the new SEO title, source link, and LinkedIn draft to a выбранный channel.

## Setup
1. Add OpenAI API credentials for the Chat model used to generate the repurposed content.
2. Add a Google Sheets OAuth credential, set the target spreadsheet ID, and ensure the sheet has columns matching Date, Status, SEO Title, Source Link, Source Title, LinkedIn Post, and Twitter Thread.
3. Add a Gmail OAuth credential for creating email drafts in your account.
4. Add a Slack OAuth credential and select the channel where the workflow posts review messages.
5. Update the RSS feed URL, audience, and brand voice text in the “Set Brand & Source” step to match your content source and tone.

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
