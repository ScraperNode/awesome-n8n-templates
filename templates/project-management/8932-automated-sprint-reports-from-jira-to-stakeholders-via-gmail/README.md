# 📋 Automated sprint reports from Jira to stakeholders via Gmail

> ⚡ **704 views** · 📋 [Project Management](../)

## Description

## Description

Automated workflow that generates a Sprint Report from Jira and delivers it by Gmail.

The flow fetches sprint issues from Jira, validates and normalizes the data, calculates metrics (tickets, story points, blockers, completion rate), generates an HTML report, and sends it by email.

## Context

This template helps teams keep stakeholders updated automatically of the current sprint.
Instead of manually compiling Jira data, the report is generated and sent on schedule (e.g., every Friday at 17:00).

It’s production-friendly, reusable, and works across Jira projects.

## Target Users

- Scrum Masters and Agile Coaches who need sprint reports for retrospectives.

- Product Owners who want a weekly overview of sprint progress.

- Project Managers tracking Jira delivery KPIs.

- Engineering teams wanting automated status reporting without extra overhead.

## Technical Requirements

- Jira Cloud project + API email + API token + permission to read issues.

- Gmail credential for notifications.



## Workflow Steps

![image.png](fileId:2688)

- Trigger – Schedule (e.g., Friday at 17:00).

- Edit Fields – Configure Jira base URL, project key, email recipients.

- Get Many Issues – Fetch sprint issues with JQL (project = &lt;KEY&gt; AND sprint in openSprints()).

- Validation & Normalization – Clean/validate fields (status, assignee, priority, story points, sprint info).

- Metrics Calculation – Aggregate KPIs (done, in progress, blockers, story points, completion %).

- HTML Report Generation – Build a styled email-friendly HTML summary + detailed table.

- Send Gmail – Deliver report to stakeholders.

## Key Features

- Automated Sprint Reports: No manual copy-paste.

- Metrics overview: Tickets done vs total, blockers, story points.

- Detailed table: Issue key, summary, status, assignee, priority, SP.

- Email delivery: HTML report with Jira links sent to stakeholders.

- Fully customizable: Adjust fields, KPIs, and recipients easily.

## Expected Output

📊 HTML Sprint Report with KPIs and issue table.
✅ Email delivered to stakeholders via Gmail.
🔗 Jira links embedded for easy navigation.

![image.png](fileId:2687)

## How it works

⏰ Trigger – Runs on schedule (e.g., every Friday at 17:00).
🧾 Fetch Issues – JQL filters sprint tickets.
📊 Metrics – Done vs total, SP progress, blockers.
💻 Generate HTML – Clean, styled table and summary.
✉️ Notify – Send Gmail with full sprint report to stakeholders.

## Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=izRNZZcZ5xU)

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Jira Software, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
