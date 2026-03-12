# 📋 Multi-channel feedback to Jira pipeline with AI analysis & Notion reporting

> ⚡ **109 views** · 📋 [Project Management](../)

## Description

## Description

This workflow turns scattered user feedback into a structured product backlog pipeline.

- It collects feedback from three channels (Telegram bot, Google Form/Sheets, and Gmail), normalizes it, and sends it to an AI model that:

- Classifies the feedback (bug, feature request, question, etc.)

- Extracts sentiment and pain level

- Estimates business impact and implementation effort

- Generates a short summary

- Then a custom RICE-style priority score is computed, a Jira ticket is created automatically, a Notion page is generated for documentation, and a monthly product report is sent by email to stakeholders.

It helps product & support teams move from “random feedback in multiple tools” to a repeatable, data-driven product intake process with zero manual triage.

## Context

In most teams, feedback is:

- spread across emails, forms, and chat messages

- manually copy–pasted into Jira (when someone remembers)

- hard to prioritize objectively

- nearly impossible to review at the end of the month

This workflow solves that by:

- Centralizing feedback from Telegram, Google Forms/Sheets, and Gmail

- Automatically normalizing all inputs into the same JSON structure

- Using AI to categorize, tag, summarize, and score each request

- Calculating a RICE-based priority adapted to your tiers (free / pro / enterprise)

- Creating a Jira issue with all the context and acceptance criteria

- Generating a Notion page for each feedback+ticket pair

- Sending a monthly “Product Intelligence Report” by email with insights & recommendations

The result: less manual work, better prioritization, and a clear story of what users are asking for.

## Target Users

This template is designed for:

- Product Managers and Product Owners

- SaaS teams with multiple feedback channels

- Support / CS teams that need a structured escalation path

- Project Managers who want objective, data-driven prioritization

- Any team that wants “feedback → backlog” automation without building a custom platform

## Technical Requirements

You’ll need:

- Google Sheets credential

- Gmail credential

- Telegram Bot + Chat ID

- Google Form connected to a Google Sheet 

![image.png](fileId:3320)
![image.png](fileId:3319)

- Jira credential (Jira Cloud)

- Notion credential

- OpenAI/ Anthropic credential for the AI analysis node

- An existing Jira project where tickets will be created

- A Notion database or parent page where feedback pages will be stored

## Workflow Steps

The workflow is organized into four main sections:
![image.png](fileId:3339)

1) Triggers (Multi-channel Intake)

- Telegram Trigger – Listens for new messages sent to your bot

- Google Form / Sheet Trigger – Listens for new form responses / rows

- Gmail Trigger – Listens for new emails matching your filter (e.g. [Feedback] in subject)

- All three paths send their payloads into a “Data Normalizer” node that outputs a unified structure:

2) Request Treated and Enriched (AI Analysis)

- Instant Reply (Telegram only) – Sends a quick “Thanks, we’re analysing your feedback” message

- User Enrichment – Enriches user tier based on mapping

- Message a Model (AI) 

	- classifies the feedback

	- extracts tags

	- scores sentiment, pain, business impact, effort

	- generates a short summary & acceptance criteria

- JSON Parse / Merge – Merges AI output back into the original feedback object

3) Priority Calculation & Jira Ticket Creation

- Priority Calculator applies a RICE-style formula using:

	- pain level

	- business impact

	- implementation effort

	- user tier weight

	- assigns internal priority: P0 / P1 / P2 / P3

	- maps to Jira priority: Highest / High / Medium / Low

- Create Jira Issue – Creates a ticket with:

	- summary from AI

	- description including raw feedback, AI analysis, and RICE breakdown

	- labels based on tags

	- priority based on the calculator

- Post-processing  – Prepares a clean payload for notifications & logging

- IF (Source = Telegram) – Sends a rich Telegram message back to the user with:

	- Jira key + URL

	- category, priority, RICE score, tags, and estimated handling time

	- Append to Google Sheet (Analytics Log) – Logs each feedback with:

	- source, user, category, sentiment, RICE score, priority, Jira key, Jira URL

- Create Notion Page – Creates a documentation page linking:

	- the feedback

	- the Jira ticket

	- AI analysis

	- acceptance criteria

4) Monthly Reporting (Product Intelligence Report)

- Monthly Trigger – Runs once a month

- Query Google Sheet – Fetches all feedback logs for the previous month

- Aggregate Monthly Stats – Computes:

	- feedback volume

	- breakdown by category / sentiment / source / tier / priority

	- average RICE, pain, and impact

	- top P0/P1 issues and top feature requests

	- Message a Model (AI) – Generates a written “Product Intelligence Report” with:

	- executive summary

	- key insights & trends

	- top pain points

	- strategic recommendations

- Parse Response: Extracts structured insights + short summary

- Create Notion Report Page with:

	- metrics, charts-ready tables, insights, and recommendations

	- Append Monthly Log to Google Sheet – Stores high-level stats for historical tracking

- Send Email with a formatted HTML report to stakeholders with:

	- key metrics

	- top issues

	- recommendations

	- link to the full Notion report

## Key Features

- Multi-channel intake: Telegram + Google Forms/Sheets + Gmail

- AI-powered triage: automatic category, sentiment, tags, and summary

- RICE-style priority scoring with tier weighting

- Automatic Jira ticket creation with full context

- Notion documentation for each feedback and for monthly reports

- Google Sheets analytics log for exploration and dashboards

- Monthly “Product Intelligence Report” sent automatically by email

- Designed to be adaptable: you can plug in your own labels, tiers, and scoring rules

## Expected Output

When the workflow is running, you can expect:

- A Jira issue created automatically for each relevant feedback
![image.png](fileId:3323)
- A confirmation email
![image.png](fileId:3314)
- A Telegram confirmation message when the feedback comes from Telegram
![image.png](fileId:3316)
![image.png](fileId:3317)
- A Google Sheet filled with normalized feedback and scoring data
![image.png](fileId:3315)
- A Notion page per feedback/ticket with AI analysis and acceptance criteria
![image.png](fileId:3325)
Every month:

- a Notion “Monthly Product Intelligence Report” page
![image.png](fileId:3324)
![image.png](fileId:3322)
- a summary email with key metrics and insights for your stakeholders

![image.png](fileId:3318)

## How it works

- Trigger – Listens to Telegram / Google Forms / Gmail

- Normalize – Converts all inputs to a unified feedback format

- Enrich with AI – Category, sentiment, pain, impact, effort, tags, summary

- Score – Computes RICE-style priority and maps to Jira priority

- Create Ticket – Opens a Jira issue + Notion page + logs to Google Sheets

- Notify – Sends Telegram confirmation (if source is Telegram)

- Report – Once a month, aggregates everything and sends a Product Intelligence Report

## Tutorial Video

Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=q0Is11oU18Y)

## About me

I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Jira Software, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
