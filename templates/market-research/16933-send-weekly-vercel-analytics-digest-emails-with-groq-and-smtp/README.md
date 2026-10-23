# 📊 Send weekly Vercel analytics digest emails with Groq and SMTP

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every Monday, pulls the last 7 days of Vercel Web Analytics data, uses Groq (Llama 3.3 70B) to generate an HTML summary, and emails a weekly digest via SMTP, with an automatic raw-stats fallback if the AI step fails.

## How it works
1. Runs every Monday at 9:00 AM based on your n8n instance timezone.
2. Builds the reporting window and key settings (Vercel project/team IDs, site name, sender, and recipient) and generates millisecond timestamps for the last 7 days.
3. Calls the Vercel Web Analytics Query API to fetch total page views and unique visitors, then fetches the top 5 pages and top 5 referrer hostnames for the same time range.
4. Consolidates the three Vercel responses into a single JSON report with calculated pages-per-visit and defensive handling for missing or empty data.
5. Sends the report to Groq Llama 3.3 70B to produce a structured HTML digest with headline, metrics, top pages, traffic sources, and a single actionable insight.
6. If the Groq request errors, generates a plain HTML “raw numbers” version of the digest instead.
7. Sends the final HTML digest email via SMTP using the configured sender and recipient addresses.

## Setup
1. Create a Vercel API token and add an n8n HTTP Header Auth credential that sets `Authorization: Bearer <token>` for the Vercel API requests.
2. Update the configuration values in the Set Config step (Vercel Project ID, optional Team ID, site name, senderEmail, recipientEmail, and optionally the since/until date range).
3. Add a Groq API credential and ensure the Groq chat model is accessible for the agent step.
4. Add an SMTP credential and confirm the from/to addresses are allowed by your mail server settings.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
