# 📱 Create platform-specific social posts from blog RSS with PostWire

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow monitors an RSS/Atom blog feed hourly, turns each newly published article into platform-specific social captions using PostWire, and schedules the resulting drafts to PostWire’s queue for LinkedIn, X, Bluesky, Mastodon, and optionally Instagram.

## How it works
1. Runs every hour and reads the configured RSS/Atom feed for new items.
2. Filters the feed items to only those published within the last two days to avoid posting an initial backlog.
3. Extracts the article title, link, a cleaned summary, and an image URL (if present) and sets a target platform list.
4. Removes Instagram from the platform list when no image is available and composes a prompt from the article details.
5. Calls PostWire’s `/api/generate` endpoint to produce a separate caption draft for each selected network.
6. Calls PostWire’s `/api/schedule` endpoint to queue the per-platform drafts to publish 30 minutes in the future (including the image when available).

## Setup
1. Create a PostWire API key and add an n8n HTTP Header Auth credential with `Authorization: Bearer <your_postwire_key>`.
2. Connect your social networks inside PostWire so PostWire can publish on your behalf.
3. Replace the RSS feed URL in the RSS trigger with your blog’s RSS/Atom URL.
4. Update the platforms list (linkedin, x, bluesky, mastodon, instagram) to match the networks you have connected in PostWire.
5. (Optional) Adjust the “last two days” filter window and the schedule delay (currently 30 minutes) to fit your posting cadence.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
