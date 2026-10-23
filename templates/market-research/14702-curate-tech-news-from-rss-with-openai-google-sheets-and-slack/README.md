# 📊 Curate tech news from RSS with OpenAI, Google Sheets and Slack

> ⚡ **116 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automatically collects the latest technology news, filters for emerging topics, and uses AI to score relevance and generate clean, ready-to-share content. It helps you focus on high-impact updates while eliminating noise, making it ideal for curated tech feeds or internal intelligence channels.

## Who’s it for

- Automation engineers and builders using n8n
- Tech content curators and researchers
- Teams tracking AI, cybersecurity, or emerging tech trends

## How it works / What it does

The workflow pulls articles from an RSS feed (e.g., TechCrunch) on a schedule. It filters recent and relevant topics, removes duplicates using Google Sheets, and sends each article to an AI model. The AI assigns an innovation score, generates a tweet, and suggests an image concept. Results are normalized, filtered by score (e.g., ≥8), ranked, and limited to top items. Finally, formatted messages or tweet are sent to Slack and logged for tracking.

## How to set up
- Add your RSS feed URL
- Configure OpenAI API credentials
- Connect Google Sheets for deduplication and logging. Create a sheet with the following columns:
	- link
	- guid
	- creator
	- pub_date
	- tweet
	- score
	- date_posted 
- Set up a Slack webhook or Slack node

## Requirements
- n8n (self-hosted or cloud)
- OpenAI API key
- Google Sheets access
- Slack workspace with webhook enabled

## How to customize the workflow
- Adjust score threshold to control content quality
- Modify the AI prompt for tone or niche focus
- Change output destination (X, Telegram, email)
- Extend logging fields for analytics or reporting

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
