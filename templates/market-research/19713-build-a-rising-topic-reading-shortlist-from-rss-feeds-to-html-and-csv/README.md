# 📊 Build a rising-topic reading shortlist from RSS feeds to HTML and CSV

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow reads four public RSS/Atom feeds, groups and scores stories by topic, and compares recent coverage against an earlier baseline to spot rising themes, then produces a balanced reading shortlist as downloadable HTML and CSV.

## How it works
1. Runs manually (or on the configured weekday schedule) to start a feed snapshot.
2. Fetches items from four RSS/Atom sources and waits for all feeds to return, keeping errors and empty feeds visible.
3. Filters and normalizes articles by date window, removes excluded keywords, de-duplicates links per publisher, and caps the number of retained items per feed.
4. Assigns each remaining article to its strongest matching topic based on configured keywords.
5. Groups similar headlines into single “stories” per topic and measures momentum by comparing the fresh window to the baseline window, including coverage-quality warnings.
6. Builds a balanced shortlist of fresh stories (prioritizing multi-publisher coverage and limiting picks per topic) and outputs an HTML brief and a CSV file for download.

## Setup
1. Edit the Settings JSON to provide four public RSS/Atom feed URLs (with consistent publisher IDs) plus your topics, keywords, exclusions, and time windows.
2. Review and adjust the shortlist limits and momentum thresholds in Settings (for example, freshHours, baselineHours, shortlistSize, and maxShortlistPerTopic).
3. If you enable the schedule, set the workflow’s schedule to your preferred times and timezone, then run once manually to validate feed health and download the HTML/CSV from the execution output.

## 🔗 Nodes Used

RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
