# 📋 Monitor Kimai project deadlines and budgets with daily email alerts

> ⚡ **62 views** · 📋 [Project Management](../)

## Description

Automatically monitor billable Kimai projects every weekday morning and receive a formatted HTML email when a project deadline is approaching or its hour budget is running low. If nothing requires attention, no email is sent  keeping your inbox clean and focused.

## Who it's for

Teams and freelancers using Kimai to track billable hours who want to stay on top of project deadlines and budget consumption without checking manually every day. Particularly useful for agencies managing multiple concurrent projects with fixed-hour contracts or purchase orders with expiry dates.

## How it works

The workflow runs Monday–Friday at 9 AM via a Schedule Trigger. It fetches all visible billable projects from Kimai, then, in parallel, retrieves full project details (end date, time budget, customer name) and all timesheet records for each project. Total logged hours are calculated and merged with project data.

Each project is then evaluated: it gets flagged if its end date falls within the next 10 days, or if logged hours have exceeded 80% of the allocated budget. Flagged projects are assigned a color-coded urgency level (expired, urgent, warning, on track, or missing data) and sorted by days remaining.

A rich HTML email is generated with one card per project, showing the deadline status and a visual progress bar for hour consumption. The email is sent only if at least one project qualifies, otherwise the workflow exits silently.

## How to set up

1. Add your Kimai Bearer Token as an HTTP Bearer Auth credential in n8n
2. Add your SMTP credentials for outgoing email
3. Replace `https://kimai` with your actual Kimai instance URL in the three HTTP Request nodes and in the email button link inside the `Build Email HTML - Report` node
4. Update `fromEmail` and `toEmail` in the `Send an Email` node

## Requirements

- Self-hosted or cloud Kimai instance with API access
- Kimai service account Bearer Token
- SMTP account for outgoing email

## How to customize

| What | Where |
|---|---|
| Days threshold (default: 10) | `Calculate expiration` → line 1 |
| Budget alert % (default: 80%) | `Calculate expiration` → `getBudgetInfo()` |
| Schedule | `Every Day at 9:00` trigger node |
| Sender / recipient email | `Send an Email` node |

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
