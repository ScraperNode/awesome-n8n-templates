# ⚡ Automated Sonarr missing episode finder with quality & language filtering

> ⚡ **633 views** · ⚡ [Personal Productivity](../)

## Description

What is this?
This is an n8n workflow designed to supercharge your Sonarr setup. Instead of just waiting for releases to appear in your RSS feed, this workflow proactively runs on a schedule, finds what's missing, actively searches for it, and grabs the best result based on your specific criteria.

It's a "set it and forget it" solution to ensure your library is always complete.

Key Features
🚀 Proactive Searching: Doesn't wait for content to come to you. It actively triggers a search for missing episodes.

🗓️ Fully Automated & Scheduled: Runs every 12 hours by default to check for anything new that's missing.

🧠 Smart & Efficient: Searches only once per season, even if multiple episodes from that season are missing, preventing unnecessary API calls.

🎯 Precise Release Filtering: It validates search results against the exact quality name and language you define before telling Sonarr to grab it. This gives you more control than standard quality profiles.

✅ Automatic Download: Once a valid release is found, it's automatically pushed to your download client via Sonarr.

How It Works
Trigger: The workflow starts automatically on a schedule.

Fetch Missing: It connects to your Sonarr instance and gets a list of all monitored, "wanted" episodes.

Filter & Group: It intelligently creates a unique list of seasons that need searching.

Search: It loops through each unique season and tells Sonarr to perform an interactive search.

Validate: It inspects the search results and only allows releases that match both the pre-defined quality AND language.

Grab: If a perfect match is found, it sends a final command to Sonarr to grab that specific release and begin the download.

How to Use This Template
Import the JSON file into your n8n instance.

Find the node named "info" (it's a "Set" node near the beginning). This is your main configuration area.

Update the following values in the "info" node:

urlSonar: Change http://192.168.31.204:8989 to your Sonarr's URL.

apikey: Paste your Sonarr API key here.

quality: Set the exact quality name you want to match (e.g., WEBDL-1080p).

languages: Set the exact language name you want to match (e.g., English, Spanish).

Activate the workflow. That's it!

You can also change the schedule by editing the "Schedule Trigger" node.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
