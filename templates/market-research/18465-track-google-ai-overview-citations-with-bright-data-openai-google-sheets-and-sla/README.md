# 📊 Track Google AI Overview citations with Bright Data, OpenAI, Google Sheets and Slack

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly (or on demand) to check Google AI Overview citations for a set of keywords using Bright Data, compares the cited domains to last run’s results, generates a short briefing with OpenAI, logs a row-per-citation history to Google Sheets, and posts a digest to Slack.

## How it works
1. Runs on a weekly schedule or via an n8n form submission to start a keyword citation check.
2. Reads your previous run history from Google Sheets and expands the configured keyword list into one item per keyword.
3. Uses Bright Data’s SERP API to fetch Google search results with AI Overview data, then extracts and de-redirects AI Overview reference URLs to identify cited domains and match them to organic rankings.
4. Compares current citations to the most recent date in the sheet to label domains as new, held, or lost and builds a cross-keyword “most quoted domains” leaderboard.
5. If any AI Overviews are found, uses Bright Data Web Unlocker to fetch a capped set of top cited pages and summarizes their structure (headings and key page features).
6. Sends the combined citation and page-structure snapshot to OpenAI to produce a short, plain-language briefing on what gets cited and what to change first.
7. Appends one row per keyword and cited domain (plus rows for no-overview, failures, and lost citations) to Google Sheets and posts a formatted digest to a Slack channel.

## Setup
1. Create Bright Data zones for SERP API and Web Unlocker and add an HTTP Header Auth credential in n8n using your Bright Data key as `Authorization: Bearer <key>`.
2. Add Google Sheets credentials and replace the target spreadsheet URL/ID (and ensure the sheet tab is named “AI Overview”).
3. Add Slack credentials and set the destination channel (for example `#seo`) in the Slack message step.
4. Update the Settings values for your keywords, tracked domain, country code, Bright Data zone names, and the maximum number of cited pages to fetch per run.
5. If you use the on-demand option, copy the form URL from the trigger and share it with whoever needs to run spot checks.

## Requirements
- A Bright Data account with a SERP API zone and a Web Unlocker zone. The free tier covers 5,000 requests a month and needs no card. Google Sheets and Slack credentials. No community nodes: every Bright Data call is a plain HTTP Request node.

## Customization
- Two entry points ship wired: the weekly schedule, and a form trigger for a spot check on a single keyword. Three optional nodes sit unwired beside the chain, each with a note saying where it splices in. "Route New, Lost And Held" is a Switch that sends new citations, lost ones and unchanged ones to different channels. "Track Only Your Own Domain" narrows the sheet to your own rows while keeping the weeks nobody quoted you. "Swap In Gemini" is a second model node you can attach to the briefing step instead of OpenAI. Beyond those, the Settings node holds the keyword list, tracked domain, country code and how many cited pages to read per run.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
