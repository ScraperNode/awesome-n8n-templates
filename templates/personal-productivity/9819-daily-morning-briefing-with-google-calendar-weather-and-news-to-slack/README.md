# ⚡ Daily morning briefing with Google Calendar, weather, and news to Slack

> ⚡ **464 views** · ⚡ [Personal Productivity](../)

## Description

## Personal Daily Morning Briefing Automation

### Who’s it for
Busy professionals who want a quick daily update combining their calendar, weather, and top news.

### How it works
Every morning at 7 AM, this workflow gathers:
- Today’s Google Calendar events
- Current weather for Tokyo
- Top 3 news headlines (from Google News RSS)
Then it formats everything into a single Slack message.

### How to set up
1. Connect your **Google Calendar** and **Slack** accounts in the Credentials section.
2. Update `rssUrl` or `weatherApiUrl` if you want different sources.
3. Set your Slack channel in the "Post to Slack" node.

### Requirements
- Google Calendar and Slack accounts
- RSS feed and weather API (no authentication required)

### How to customize
You can modify:
- The trigger time (in the Schedule Trigger node)
- City for the weather
- RSS feed source
- Message format in the “Format Briefing Message” node

## 🔗 Nodes Used

HTTP Request, RSS Read, Slack, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
