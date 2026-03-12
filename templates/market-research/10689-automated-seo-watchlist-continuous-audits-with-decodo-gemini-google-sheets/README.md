# 📊 Automated SEO watchlist: continuous audits with Decodo, Gemini & Google Sheets

> ⚡ **179 views** · 📊 [Market Research & Insights](../)

## Description

# Automated SEO Watchlist: Continuous Audits Powered by Decodo, Gemini and Google Sheets

Automate continuous SEO audits with Decodo and Gemini AI — live data, smart insights, and Google Sheets tracking with team alerts.

## Who’s it for

This workflow is designed for SEO specialists, marketing teams, agencies, and website owners who want an effortless, automated way to monitor SEO health. It’s perfect for ongoing audits, content monitoring, and proactive SEO management — without the manual workload.

## How it works / What it does

Every five days, the workflow:

1. Reads a list of URLs from Google Sheets.
2. Uses Decodo to fetch live on-page data — titles, meta descriptions, headings, schema, links, and Core Web Vitals.
3. Passes that data to Gemini AI for an advanced SEO analysis and scoring based on key factors (content, metadata, links, speed, and structure).
4. Parses results via a Structured Output Parser for clean JSON output.
5. Stores findings in Google Sheets and sends a Telegram alert when the audit completes.

## Why Decodo matters

Decodo is the backbone of this workflow.
It powers the real-time page inspection, ensuring Gemini AI has complete, accurate data to analyze. Decodo transforms static audits into live, intelligent monitoring — making your SEO insights far more actionable and reliable.

## How to set up
- Connect your Decodo API credentials.
- Add your Google Sheets URL list.
- Configure your Telegram bot credentials.
- Enable the workflow — it runs automatically every 5 days.

## Requirements
- Decodo API credentials
- Google Sheets OAuth connection
- Telegram Bot token
- n8n instance (Cloud or Self-hosted)

## How to customize the workflow
- Change the trigger interval in the Schedule Trigger node.
- Modify the SEO Analyzer (LLM Chain) weights for different scoring.
- Extend the Store Result node to integrate with dashboards or databases.
- Adjust the AI prompt for additional SEO checks (e.g., backlinks, readability, image optimization).

## ✅ Highlights
- Automated SEO auditing
- Real-time data from Decodo
- Smart analysis powered by Gemini AI
- Structured reporting in Google Sheets
- Team notifications via Telegram

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
