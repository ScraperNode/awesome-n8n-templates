# 📊 Summarize RSS feeds into a daily AI digest with Gemini, Slack, and Gmail

> ⚡ **39 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for

Busy professionals, team leads, and anyone who follows multiple news sources and wants a single, prioritized morning briefing instead of scrolling through dozens of tabs.

## What this workflow does

A Schedule Trigger fires every weekday morning at 8 AM. Two RSS Feed Read nodes pull the latest articles from your configured sources (default: Ars Technica and Hacker News). A Code node merges and deduplicates the articles into a single list. Google Gemini then reads each article, writes a concise summary, assigns an importance score from 1 to 10, and tags it by category. Another Code node builds a formatted digest sorted by importance, splitting stories into "Top Stories" and "Other News." The digest is posted to Slack as your daily briefing and simultaneously sent via Gmail for team members who prefer email.

## How to set up

1. Replace the RSS feed URLs in "Tech News Feed" and "Hacker News Feed" with your preferred sources
2. Add your free Google Gemini API key from Google AI Studio
3. Connect Slack and choose the channel for daily posts
4. Connect Gmail and set the recipient email address
5. Adjust the cron schedule in "Morning Schedule" to your preferred time

## Requirements

- Google Gemini API key (free tier available)
- Slack workspace
- Gmail account
- n8n instance (self-hosted or cloud)

## How to customize

- Add more RSS Feed Read nodes and wire them into "Merge and Deduplicate" for additional sources
- Change the importance scoring criteria in the "Summarize and Score" AI prompt
- Adjust the top story threshold in "Build Digest" (default: score 7 or above)
- Modify the cron expression to run at a different time or include weekends

## 🔗 Nodes Used

RSS Read, Slack, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
