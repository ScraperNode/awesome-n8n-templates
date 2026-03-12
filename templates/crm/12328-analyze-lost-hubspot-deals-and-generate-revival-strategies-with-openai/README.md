# 🤝 Analyze lost HubSpot deals and generate revival strategies with OpenAI

> ⚡ **144 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works
This workflow runs on a daily schedule to analyze all Closed–Lost deals from your CRM and uncover the true reason behind each loss. It uses AI to classify the primary loss category, generate a confidence-backed explanation, and then create a realistic re-engagement strategy for every deal. All insights are consolidated into leadership-ready email and Slack summaries. Every analyzed deal and revival plan is logged for long-term tracking and audits.

## Step-by-step
- **Trigger and fetch lost deals**
  - **Schedule Trigger** – Runs the workflow automatically at a defined time.
  - **Get many deals** – Fetches all deal records from the CRM.
  - **If** – Filters only deals marked as Closed–Lost.
  - **Edit Fields** – Standardizes key deal attributes like amount, industry, owner, and loss reason.

- **Analyze loss reasons and generate revival strategies**
  - **Brief Explanation Creator** – Uses AI to identify the primary loss category with confidence.
  - **Code in JavaScript** – Parses and normalizes AI loss analysis output.
  - **Merge** – Combines deal data with loss insights.
  - **Feedback Creator** – Generates a practical re-engagement strategy for each lost deal.
  - **Code in JavaScript7** – Parses and safeguards revival strategy outputs.
  - **Merge4** – Merges deal details, loss analysis, and revival strategy into one final dataset.

- **Report, notify, and store results**
  - **Code in JavaScript11** – Builds a consolidated HTML summary email.
  - **Send a message4** – Sends the summary to stakeholders via email.
  - **Code in JavaScript12** – Creates a structured Slack summary.
  - **Send a message1** – Delivers insights to a Slack channel.
  - **Code in JavaScript10** – Reconstructs final data with delivery status.
  - **Append or update row in sheet** – Logs all results into Google Sheets for audit and tracking.

## Why use this?
- Turns lost deals into actionable learning instead of static CRM records  
- Gives sales teams clear, realistic re-engagement plans without manual analysis  
- Provides leadership with concise, decision-ready summaries  
- Creates a historical database of loss reasons and revival outcomes  
- Improves pipeline recovery while enforcing consistent sales intelligence

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
