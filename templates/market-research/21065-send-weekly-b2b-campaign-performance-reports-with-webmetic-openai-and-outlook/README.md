# 📊 Send weekly B2B campaign performance reports with Webmetic, OpenAI and Outlook

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every Monday, pulls first-time company visits from Webmetic for the past 7 days, groups them by UTM source and campaign, uses OpenAI to generate an HTML campaign performance report, and emails it to your team via Microsoft Outlook.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Loads the report settings (domain, recipient list, and language) and requests first-time company visits from the Webmetic Visitor Intelligence API for the last 7 days.
3. Extracts each company’s lead score plus its first-touch UTM source/medium and campaign, using “(direct)” and “(none)” when values are missing.
4. Sorts companies by lead score and summarizes results by source and campaign, producing counts and a concatenated company list per row.
5. Sends the grouped data to OpenAI to write a short HTML report with a summary, a source/campaign table with readable channel names, notable companies per paid campaign, and a budget recommendation.
6. Emails the generated HTML report through Microsoft Outlook to the configured recipients with a subject line that includes the total number of new companies.

## Setup
1. Add your Webmetic credentials (Visitor Intelligence API key) and set the domain value in the workflow’s settings.
2. Add an OpenAI API credential for the Chat Model used to generate the report.
3. Add a Microsoft Outlook credential and set the recipient emails and preferred report language in the workflow’s settings.

## 🔗 Nodes Used

Microsoft Outlook, Schedule Trigger, AI Agent, OpenAI Chat Model, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
