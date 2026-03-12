# 📊 Track weekly keyword rankings with Google SERP, Serper API, and Google Sheets

> ⚡ **275 views** · 📊 [Market Research & Insights](../)

## Description

This template is designed for SEO specialists, content marketers, and digital growth teams who want to automate the process of tracking keyword rankings.

Manually checking SERPs every week is time-consuming and prone to error. This workflow solves that by automatically querying Google search results with the Serper API, updating rankings in Google Sheets, and keeping historical data for up to 12 weeks.

Prerequisites

Before you begin, make sure you have:

A Google Sheet with columns:

Sr.no (unique row identifier)

Keyword

Target Page (the URL you want to track)

A Google Service Account credential set up in n8n

A Serper API key (added to n8n credentials as serperApiKey)

Detailed Setup

Import the workflow into n8n.

Update the Google Sheets nodes:

Replace your-google-sheet-id with your actual Google Sheet ID

Replace your-sheet-name with the correct tab name

Add your Google Service Account credentials to the Google Sheets nodes.

Add your Serper API key to the HTTP Request node (serperApiKey).

(Optional) Update the HARDCODED_DOMAIN variable in the Code node if you want to lock rankings to a specific domain.

Run the workflow once manually to confirm everything is working.

Usage & Customization

By default, the workflow runs every Monday at 00:00 (midnight). You can adjust this by editing the Cron node.

The workflow stores ranking history for 12 weeks. If you want more, simply extend the columns in your Google Sheet and update the Code node logic.

The workflow checks for both exact URLs and domains. You can customize this in the Code node depending on whether you want to track page-level or domain-level rankings.

Data is updated only for the current week unless you allow overwriting, ensuring historical accuracy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
