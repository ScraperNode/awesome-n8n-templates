# 📁 Sync Facebook events to Google Calendar using Apify’s Facebook Events Scraper

> ⚡ **1 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every morning, uses Apify’s Facebook Events Scraper to find public Facebook events for a search query, expands recurring events into individual occurrences, and creates matching events in Google Calendar.

## How it works
1. Runs every morning on a schedule.
2. Sets the Facebook events search query and the maximum number of events to collect.
3. Uses Apify to run the Facebook Events Scraper actor with the configured query and limit.
4. Reads the scraped event items from the Apify dataset created by the actor run.
5. Expands recurring events into one item per occurrence, skips events without a start time, and defaults missing end times to two hours after the start.
6. Creates a Google Calendar event for each occurrence with the event title, dates, location, and description plus the Facebook URL.

## Setup
1. Add an Apify credential (API token) and ensure you have access to the Facebook Events Scraper actor.
2. Add a Google Calendar credential and select the target calendar in the Google Calendar event creation step.
3. Update `searchQuery` and `maxEvents` in the Settings step to match your location/topic and desired volume.
4. Adjust the schedule time if you don’t want it to run daily at 06:00.

## 🔗 Nodes Used

Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
