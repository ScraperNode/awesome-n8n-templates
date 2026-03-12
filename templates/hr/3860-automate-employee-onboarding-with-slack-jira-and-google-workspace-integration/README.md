# 👥 Automate employee onboarding with Slack, Jira, and Google Workspace integration

> ⚡ **2,620 views** · 👥 [HR & Recruitment](../)

## Description

## Who is this for?

This template is ideal for **HR teams, startup founders, operations leads, remote-first companies, and freelancers** managing onboarding manually or across multiple tools.

Whether you’re hiring your first intern or streamlining onboarding for dozens of new team members, this workflow automates the entire **trigger → task creation → onboarding delivery** process using no-code tools connected via n8n.

---

## What problem does this solve?

Employee onboarding is often fragmented and error-prone — involving Jira tasks, Slack DMs, file sharing, and email templates spread across different apps.

This workflow connects it all, letting you **create tasks, notify people, share folders, and message hires instantly** — right when they’re marked as “Hired” in a Google Sheet or added to Slack.

No more bouncing between 5 tabs. This is onboarding as a system.

---

## What this workflow does

✅ Watches a Google Sheet (or Slack trigger) for new hires  
📋 Creates a Jira onboarding Epic with role-based subtasks  
📂 Generates a Google Drive folder and shares it with the new hire  
📬 Sends a personalized, HTML-formatted welcome email via Gmail  
💬 Posts a Slack message in the #onboarding channel + DM to the hire  
📊 Logs onboarding activity back to the Sheet (status, links, etc.)  
🔁 Modular subtasks based on role/team (e.g. Dev vs Marketing vs Student)  
🧠 Expressions, fallback logic, and Slack→Jira user ID mapping built-in

---

## Setup

1. Create API credentials for:
   - Slack
   - Google Sheets
   - Google Drive
   - Jira Cloud
   - Gmail (API or SMTP)

2. Import the `.json` workflow into your n8n instance (Cloud or self-hosted)  
3. Replace placeholder values (e.g. Project ID, Issue Type ID, folder path)  
4. Customize onboarding messages, email HTML, and task logic  
5. Test with included mock data (sample hire, Slack user, Jira user)  
6. Activate your flow and start onboarding with one click

---

## 🗒 Color-coded workflow notes

This workflow uses **Innovatio’s sticky note system** to guide you visually:

- 🟩 Green Notes → Main automation steps  
- 🟦 Blue Notes → What to customize (IDs, prompts, expressions)  
- 🟨 Yellow Notes → Optional logic and future upgrades  
- 🟫 Gray Notes → Welcome + final “next steps” CTA

Every group includes pre-filled nodes, dynamic expressions, and mock outputs so you can test quickly and scale confidently.

---

## How to customize this workflow?

📂 Swap Google Sheets for Airtable (better for teams or approvals)  
📅 Add 30/60/90-day check-ins via Google Calendar  
🤖 Plug in OpenAI to generate onboarding subtasks by role  
📬 Auto-assign mentors or SlackBot reminders after 7 days  
📊 Push Sheet logs into Notion or your HR dashboard

Need custom logic? Email me at **velebit@innovatio.design**

---

## Final notes

This template was created by **Velebit from Innovatio** with modularity, scalability, and team experience in mind.

All links included are official. No affiliate tracking, no sponsored content.

📜 A separate commercial license applies to the purchase via Gumroad, which includes extended rights, usage for client work, and scaling strategies.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Jira Software, HubSpot Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
