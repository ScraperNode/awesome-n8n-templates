# 📋 Send weekly Jira sprint reports via Gmail, PDF, Markdown and PostgreSQL

> ⚡ **61 views** · 📋 [Project Management](../)

## Description

## How it works

This workflow runs every Monday at 8 AM and automatically monitors your Jira project, measures progress against the active sprint, and delivers a structured report to stakeholders — with zero manual effort.

- Fetches updated, created, completed, and due-soon issues from Jira for the past 7 days
- Aggregates KPIs: velocity, blocked issues, epic progress, team workload per assignee...
- Builds a styled HTML email + a PDF report attachment
- Build a Markdown file
- Sends everything via Gmail to your configured recipients
- Stores all metrics in PostgreSQL for historical tracking and data visualization

## Set up steps

Setup takes around 10–15 minutes.

- Connect your **Jira**, **Gmail**, and **PostgreSQL** credentials in n8n
- Open the **CONFIGURATION NODE** node and set your `PROJECT_KEY`, `EMAIL_TO`, and `JIRA_BASE_URL`
- On first run, execute the **CREATE TABLES** node once to initialize the database schema
- Activate the workflow — it will trigger automatically every Monday at 8AM
- For PDF generation, you need to install a community node ** PDFMunk**, it's a verified node by n8n.

## 🔗 Nodes Used

Postgres, Jira Software, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
