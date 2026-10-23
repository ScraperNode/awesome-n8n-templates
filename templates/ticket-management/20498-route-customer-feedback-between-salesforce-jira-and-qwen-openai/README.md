# 🎫 Route customer feedback between Salesforce, Jira, and Qwen OpenAI

> ⚡ **18 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs weekly (or manually) to collect recent customer feedback from Salesforce Cases and Jira tickets, redact and deduplicate it, classify it with an OpenAI-compatible LLM, then cluster and route issues by category by creating or updating Jira VOC issues and creating Salesforce follow-up tasks.

## How it works
1. Runs on a weekly schedule (or on demand) and computes a lookback time window for collecting new feedback.
2. Pulls recent Salesforce Cases, Jira issues for a configured project, and Salesforce Account data (or uses built-in sample feedback when enabled).
3. Normalizes the text, redacts emails and phone numbers, drops duplicates using workflow static data, and flags VIP items based on account revenue, rating, or an allowlist.
4. Sends the batch of feedback to an OpenAI-compatible chat model (configured for Featherless AI) to classify each item by category, theme, sentiment, urgency, and churn risk.
5. Aggregates the classified feedback into category clusters, assigns priority, and builds an HTML weekly digest summary.
6. When live mode is enabled, routes clusters by team by commenting on or creating labeled VOC issues in Jira for product topics and creating Salesforce follow-up Tasks for billing, onboarding, sales/engagement, and escalations.

## Setup
1. Add credentials for Salesforce and Jira Software Cloud, and an OpenAI-compatible API credential for the LLM node (update the base URL/model if you are not using Featherless AI).
2. In the Config values, set your Jira project key, Jira project ID, and Jira issue type ID, and decide your lookback period, VIP rules, and max items per run.
3. Set use_sample_data to false to pull from Salesforce and Jira, then set dry_run to false to allow the workflow to create Jira issues/comments and Salesforce Tasks.
4. (Optional) Enable and configure Google Sheets logging by setting the spreadsheet ID and ensuring a “Feedback Log” sheet exists.
5. (Optional) Enable the Gmail node and provide Gmail credentials, then set the recipient email to send the weekly digest.

## 🔗 Nodes Used

Google Sheets, Jira Software, Salesforce, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
