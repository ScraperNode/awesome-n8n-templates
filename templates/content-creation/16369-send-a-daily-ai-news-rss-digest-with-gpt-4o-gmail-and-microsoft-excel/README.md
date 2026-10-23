# 🎬 Send a daily AI news RSS digest with GPT-4o, Gmail, and Microsoft Excel

> ⚡ **216 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs on a daily schedule, pulls articles from one or more RSS feeds, filters out items already stored in Microsoft Excel, uses OpenAI to generate an HTML newsletter from the newest links, and emails the digest (or a “no new articles” notice) to recipients.

## How it works
1. Runs on a Schedule Trigger at the configured hour and loads a list of RSS feed URLs.
2. Reads each RSS feed and removes duplicate articles by link.
3. Reads existing rows from a Microsoft Excel worksheet and keeps only articles whose links are not already in the sheet.
4. If new articles exist, limits the batch, appends the new items to Microsoft Excel, and reduces the data to title/link pairs.
5. Sends the new article list to OpenAI (GPT-4o-mini) to generate a complete HTML email newsletter.
6. Sends the generated digest via Gmail to the configured recipients, or sends a fallback email stating that no new articles were found.

## Setup
1. Add credentials for OpenAI, Gmail, and Microsoft Excel (Microsoft account) used by the workflow.
2. Update the RSS feed URL list in the “urls” field so it contains your news sources.
3. Select your target Excel workbook and worksheet, and ensure the sheet has a “link” column so existing articles can be detected.
4. Set the schedule time, and replace the placeholder recipient addresses (and sender address for the fallback email) in the email nodes.

## 🔗 Nodes Used

Send Email, RSS Read, Microsoft Excel 365, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
