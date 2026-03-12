# 👥 Gamify Keephub form response times and email a ranked leaderboard via Gmail

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Who is this for

HR teams, internal comms managers, and operations leads using Keephub who want to turn form completions into a friendly competition and drive faster engagement across the organisation.

## What it does

Enter a Keephub Form ID — and optionally a competition start time — into a simple web form. The workflow will:

📋 1. Fetch every submission for that form from the Keephub API.
⏱️ 2. Calculate how quickly each person responded (from your custom start time, or from form creation if left blank).
👤 3. Enrich each result with the submitter's name and org-unit via the Keephub orgchart.
📬  4. Build a polished HTML leaderboard — complete with KPI cards, bar charts, and an org-unit breakdown — and email it to you.

## How to set up

📦 1. Install the **n8n-nodes-keephub** community node from Settings → Community nodes.
🔑 2. Add your **Keephub Bearer token** or **Keephub Login** credential in any Keephub node.
📧 3. Connect a Gmail (or SMTP) credential to the email node.
▶️ 4. Activate the workflow and open the generated form URL.

## Requirements

- A Keephub account with API access.
- A Gmail or SMTP email credential that will be used to send emails

## How to customize

- Replace Gmail with Outlook, SendGrid, or any email node.
- Edit the Code node's HTML to match your company branding.
- Swap the Form Trigger for a Cron trigger to run the competition on a schedule.

---
```⚠️ Requires n8n-nodes-keephub v1.5 or later. Update the community node before running.```

## 🔗 Nodes Used

Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
