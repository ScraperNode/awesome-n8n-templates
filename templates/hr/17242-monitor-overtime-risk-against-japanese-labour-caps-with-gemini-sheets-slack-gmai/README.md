# 👥 Monitor overtime risk against Japanese labour caps with Gemini, Sheets, Slack & Gmail

> ⚡ **4 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow runs weekly to read attendance overtime from Google Sheets, totals it per employee and month, uses Google Gemini to classify risk against Japanese labour-law limits, writes results back to Sheets, and escalates high-risk cases via Slack and a Gmail draft.

## How it works
1. Runs every week on a schedule.
2. Loads configured Japanese overtime limits and fetches raw attendance rows from a Google Sheets “Attendance” worksheet.
3. Aggregates overtime hours per employee per month.
4. Sends each employee-month total to Google Gemini, which returns a structured risk level (over/approaching/ok) plus a short summary and recommended manager actions.
5. Stores or updates the assessment in a Google Sheets “Overtime Status” worksheet keyed by employee and month.
6. Posts to Slack when overtime is over the cap (and drafts a manager notice in Gmail), posts an early-warning Slack message when approaching the cap, and flags unclear or failed assessments to Slack for manual review.

## Setup
1. Add credentials for Google Sheets OAuth, Google Gemini (PaLM) API, Slack OAuth2, and Gmail OAuth2.
2. Create a Google Sheets spreadsheet with an “Attendance” sheet containing Employee (or Name), Month (or Date), and Overtime Hours columns, plus an “Overtime Status” sheet for the upserted results.
3. Select your spreadsheet and the correct sheet names in the Google Sheets nodes, and set the target Slack channel (for example, #hr) in the Slack message steps.
4. Review and adjust the legal limits and warning threshold values used for classification in the limits configuration step.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
