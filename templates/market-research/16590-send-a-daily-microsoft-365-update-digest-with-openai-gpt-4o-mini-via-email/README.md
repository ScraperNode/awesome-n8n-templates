# 📊 Send a daily Microsoft 365 update digest with OpenAI GPT-4o-mini via email

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily at 07:00 to pull the latest Microsoft 365, Security & Compliance, and Teams blog RSS posts, uses OpenAI (gpt-4o-mini) to triage and format a prioritized HTML digest, and sends the results to your team via SMTP email.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Fetches RSS XML from three Microsoft Tech Community feeds (Microsoft 365 Blog, Security & Compliance, and Teams/Microsoft Teams Blog) in parallel.
3. Parses the RSS items, keeps only posts from the last 24 hours, and deduplicates updates by title across all feeds.
4. If no new items are found, sends a “no new updates” email via SMTP.
5. If new items are found, aggregates them into a single formatted list for analysis.
6. Sends the aggregated updates to the OpenAI Chat Completions API (gpt-4o-mini) to assign priority/category/action-required and generate an inline-CSS HTML email body.
7. Emails the generated HTML digest to the configured recipients via SMTP.

## Setup
1. Create an OpenAI API key and add an HTTP Header Auth credential that sets `Authorization: Bearer <your_api_key>` for the OpenAI request.
2. Add an SMTP credential for the email-sending nodes.
3. Update the `fromEmail` and `toEmail` fields in both email actions to match your sender and recipient addresses.
4. Review and update the three Microsoft RSS feed URLs if Microsoft changes the Tech Community RSS endpoints.
5. Adjust the cron expression if you want the digest to run at a different time than 07:00.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
