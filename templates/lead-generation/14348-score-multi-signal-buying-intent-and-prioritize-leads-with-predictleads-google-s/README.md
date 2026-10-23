# 🎣 Score multi-signal buying intent and prioritize leads with PredictLeads, Google Sheets, and Slack

> ⚡ **53 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Overview

This workflow reads a list of prospect company domains from Google Sheets, enriches each company with multiple PredictLeads data sources, calculates a weighted intent score based on job openings, technology detections, and news events, filters for high-intent accounts, ranks them by score, sends Slack notifications for immediate action, and logs the qualified leads back to Google Sheets.

## How it works

1. A schedule trigger runs the workflow daily at 8:00 AM.
2. The workflow reads prospect company domains from Google Sheets.
3. It fetches job openings for each company using the PredictLeads **Job Openings** endpoint.
4. It fetches technology detections for each company using the PredictLeads **Technology Detections** endpoint.
5. It fetches recent news events for each company using the PredictLeads **News Events** endpoint.
6. It normalizes all three signals into a single intent score using this weighting:

   * Hiring activity × 5
   * Technology detections × 3
   * News mentions × 2
7. It filters companies with an intent score greater than 20.
8. It ranks qualified leads in descending order by intent score.
9. It sends a Slack alert with the company domain, score, and signal breakdown.
10. It appends qualified leads and signal values to Google Sheets for tracking and follow-up.

## Setup

* Create a Google Sheet with a `domain` column for the prospect list.
* Connect your Google Sheets account for both reading source prospects and saving qualified leads.
* Connect your Slack account for alert delivery.
* Add your PredictLeads account credentials using the official PredictLeads n8n node.

## Requirements

* Google Sheets OAuth2 credentials
* Slack OAuth2 credentials
* PredictLeads API account using the official PredictLeads n8n integration
* A Google Sheet for source prospects and a destination sheet for qualified leads

## Notes

* The workflow does not send emails or generate AI outreach copy. It is focused on lead scoring, prioritization, alerting, and storage.

* The scoring formula is currently:

  ```text
  intent_score = (job openings * 5) + (technology detections * 3) + (news events * 2)
  ```

* The qualification threshold is currently set to:

  ```text
  intent_score &gt; 20
  ```

* Qualified leads are both alerted in Slack and written to Google Sheets for persistence.

* PredictLeads docs: `https://docs.predictleads.com`

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
