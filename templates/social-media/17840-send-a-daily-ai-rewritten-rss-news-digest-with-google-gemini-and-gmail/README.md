# 📱 Send a daily AI-rewritten RSS news digest with Google Gemini and Gmail

> ⚡ **36 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs daily on a schedule, reads world-news RSS feeds from BBC, ABC News, and The Guardian, rewrites the 10 most recent articles using Google Gemini, and sends the formatted newsletter to an email recipient via Gmail.

## How it works
1. Runs every day at a set hour using a schedule trigger.
2. Pulls the latest items from three RSS feeds (BBC World, ABC News International, and The Guardian World) and normalizes each item to title, publish date, and content.
3. Merges all feed items into a single list and adds a cutoff timestamp for the last 24 hours.
4. Keeps only articles published after the cutoff and removes duplicates across sources.
5. Sorts the remaining articles by publish date, selects the 10 most recent, and combines them into one numbered text block.
6. Sends the combined articles to a Google Gemini-powered agent to rewrite them in original wording while preserving facts and numbering.
7. Formats the rewritten output into an HTML email body and sends it through Gmail.

## Setup
1. Add Google Gemini credentials (API key) for the Google Gemini model used by the rewrite step.
2. Add Gmail OAuth2 credentials and set the recipient email address in the Gmail send step.
3. Replace the RSS feed URLs with your preferred sources if needed.
4. Adjust the schedule time and the 24-hour cutoff window (currently set to now minus 24 hours) to match your newsletter cadence.

## Additional info
If you want something similar tailored to your needs, feel free to contact me.

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
