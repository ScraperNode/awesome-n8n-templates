# 📋 Send task completion email to customers via Motion API and Gmail

> ⚡ **630 views** · 📋 [Project Management](../)

## Description

**📺 Full walkthrough video: https://youtu.be/-xqjoUvbXbs**

## Who it's for

This workflow is for agencies or freelancers — such as Growth AI — who manage client projects in Motion and want to automatically notify customers when a project task has been completed, without any manual follow-up.

## How it works

1. A schedule trigger fires daily between the 10th and 31st of each month at 8 AM.
2. Active customer records are retrieved from an n8n Data Table and filtered to include only rows where the last notification was sent before the current month.
3. Eligible rows are processed in batches of 10 in a loop.
4. For each customer, the Motion API is queried to fetch their workspace projects, filtered for those in a "Todo" state.
5. The workflow then queries the Motion API again to check whether the associated task is marked as completed.
6. If the task is completed, a notification email is sent to the customer via Gmail.
7. The Data Table row is updated with the current timestamp, and the loop continues.

## How to set up

- [ ] Configure the **Schedule Trigger** with your desired run interval
- [ ] Connect the **Data Table** nodes to your n8n data table containing customer records
- [ ] Add your **Motion API key** as an HTTP Header Auth credential (`X-API-Key`)
- [ ] Connect your **Gmail** OAuth2 credential to the Send Email node
- [ ] Customize the email subject and body in the **Send Email to Customer** node
- [ ] Adjust the **Filter Todo Projects** node to match your Motion project and status naming

## Requirements

- Motion account with API access
- Gmail account with OAuth2 credentials
- n8n Data Table with customer records (ClientName, MotionID, ClientMail, Active, LastSent)

## How to customize

- Replace the **Gmail** node with Outlook, SendGrid, or another email provider to match your stack.
- Adjust the **Filter Eligible Rows** logic to change the notification frequency (e.g., weekly instead of monthly).
- Extend the email template in **Send Email to Customer** to include task details, project names, or a link to a client portal.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
