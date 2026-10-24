# ⚡ Send pre-meeting Slack briefings with Google Calendar and GitHub

> ⚡ **52 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow checks Google Calendar hourly for the next upcoming meeting, pulls recent GitHub meeting notes, finds related GitHub PRs and issues, and sends each attendee a Slack DM with a pre-meeting briefing five minutes before the event.

## How it works
1. Runs every hour on a scheduled trigger and fetches events from a selected Google Calendar.
2. Selects the next upcoming event, then requests the latest GitHub meeting-notes issue and keeps it only if it was created before the upcoming meeting.
3. Calculates a notification time five minutes before the meeting start and waits until that time.
4. Extracts keywords from the meeting title and uses them to query GitHub for matching pull requests and open issues.
5. Filters PRs created after the previous meeting date, merges the PRs and issues, and formats them into a single “topics” list.
6. Builds a Slack Block Kit message with meeting title/time, related GitHub items, and previous meeting notes, then sends it as a DM to each non-declined attendee after looking up their Slack user by email.

## Setup
1. Connect your Google Calendar OAuth2 credentials and select the calendar to monitor.
2. Add GitHub access (OAuth2 or an API token via HTTP header auth) and update the repository owner/name plus the GitHub Search query and “last meeting notes” URL to match your repo.
3. Connect Slack OAuth2 credentials and ensure attendee emails in Google Calendar match Slack user emails so users.lookupByEmail can resolve recipients.

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Google Calendar, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
