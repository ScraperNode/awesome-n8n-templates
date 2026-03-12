# 📊 Monitor customer risk and AI feedback using PostgreSQL, Gmail and Discord

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

## How it works
This workflow monitors customer health by combining payment behavior, complaint signals, and AI-driven feedback analysis. It runs on daily and weekly schedules to evaluate risk levels, escalate high-risk customers, and generate structured product insights. High-risk cases are notified instantly, while detailed feedback and audit logs are stored for long-term analysis.

## Step-by-step
- **Step 1: Triggers & mode selection**
  - **Daily Risk Check Trigger** – Starts the workflow on a daily schedule.
  - **Weekly schedule1** – Triggers the workflow for weekly summary runs.
  - **Edit Fields3** – Sets flags for daily execution.
  - **Edit Fields2** – Sets flags for weekly execution.
  - **Switch1** – Routes execution based on daily or weekly mode.

- **Step 2: Risk evaluation & escalation**
  - **Fetch Customer Risk Data** – Pulls customer, payment, product, and complaint data from PostgreSQL.
  - **Is High Risk Customer?** – Evaluates payment status and complaint count.
  - **Prepare Escalation Summary For Low Risk User** – Assigns low-risk status and no-action details.
  - **Prepare Escalation Summary For High Risk User** – Assigns high-risk status and escalation actions.
  - **Merge Risk Result** – Combines low-risk and high-risk customer records.
  - **Send a message4** – Sends the customer risk summary via Gmail.
  - **Send a message5** – Sends the same risk summary to Discord.
  - **Code in JavaScript3** – Appends notification status and timestamps.
  - **Append or update row in sheet3** – Logs risk evaluations and notification status in Google Sheets.

- **Step 3: AI feedback & reporting**
  - **Get row(s) in sheet1** – Fetches customer records for feedback analysis.
  - **Loop Over Items1** – Processes customers one by one.
  - **Prompt For Model1** – Builds a structured prompt for product feedback analysis.
  - **HTTP Request1** – Sends data to the AI model for insight generation.
  - **Code in JavaScript** – Merges AI feedback with original customer data.
  - **Append or update row in sheet** – Stores AI-generated feedback in Google Sheets.
  - **Wait1** – Controls execution pacing between records.
  - **Merge1** – Prepares consolidated feedback data.
  - **Send a message1** – Emails the final AI-powered feedback report.

## Why use this?
- Detect customer churn risk early using payment and complaint signals  
- Automatically escalate high-risk customers without manual monitoring  
- Convert raw customer issues into executive-ready product insights  
- Keep a complete audit trail of risk, feedback, and notifications  
- Align support, product, and leadership teams with shared visibility

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Discord, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
