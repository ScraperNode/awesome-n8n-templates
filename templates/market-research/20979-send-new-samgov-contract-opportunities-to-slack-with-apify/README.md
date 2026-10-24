# 📊 Send new SAM.gov contract opportunities to Slack with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Small federal contractors, 8(a), SDVOSB, WOSB and HUBZone firms, and BD or capture teams who check SAM.gov every morning and still miss notices.

## How it works
1. Every morning a Schedule trigger runs the SAM.gov Opportunity Radar Actor on Apify through a plain HTTP Request node.
2. The Actor returns only federal contract opportunities that are new or amended since the last run, filtered by your NAICS codes, set-aside, agency, state or keywords.
3. An IF node stops quietly on days with nothing new.
4. Otherwise Slack gets one message per notice with the title, notice type, agency, NAICS, set-aside, response deadline, a short description and the SAM.gov link.

## Setup
1. Copy your Apify API token (Apify Console → Settings → API & Integrations).
2. On "Run SAM.gov Opportunity Radar", create a Header Auth credential: name `Authorization`, value `Bearer <token>`.
3. Connect Slack on "Post to Slack" and choose a channel.
4. Edit the JSON body (naicsCodes, setAside, state, keywords). Keep `monitorName` the same between runs.
5. Run once, check the output, then activate.

## Requirements
- An Apify account (pay per result: $0.01 per run + $0.004 per new or changed notice) and Slack. No SAM.gov API key is needed.

## Customization
- Swap Slack for Teams, Gmail or Discord, add filters on setAside or responseDeadline, or change the schedule.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
