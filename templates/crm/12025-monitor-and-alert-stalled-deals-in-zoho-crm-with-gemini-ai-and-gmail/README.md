# 🤝 Monitor and alert stalled deals in Zoho CRM with Gemini AI and Gmail

> ⚡ **22 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Zoho CRM – Deal Health Predictor with AI Scoring

This n8n automation monitors open Zoho CRM Deals every week, identifies stalled opportunities, scores their health using Google Gemini AI and triggers sales intervention by emailing the deal owner and creating a high-priority task in Zoho CRM — before the deal goes cold.


### Quick Start — Implementation in 6 Steps

1. Import workflow into your n8n instance.
2. Connect Zoho OAuth2 credential in all Zoho nodes.
3. Connect Gmail OAuth2 account for outbound alerts.
4. Confirm stage names & inactivity thresholds match your CRM.
5. Test with sample deals before scheduling.
6. Activate the workflow once validated by your sales team.


## What It Does

This workflow dynamically analyzes every open sales deal retrieved from Zoho CRM. It calculates key metrics per deal such as inactivity duration, stage aging and deal age to understand whether the opportunity has stalled. Only deals with significant inactivity move forward to AI scoring.

Using Google Gemini, each deal receives a **Health Score (0–100)**, along with a risk level, reasons and recommended next actions. If a deal is considered “At-Risk,” the system automatically:

- Sends an alert email to the assigned sales rep  
- Creates a **high-priority** Task in Zoho CRM linked to that deal  

It ensures timely sales intervention without needing manual checks.


## Who’s It For

- Sales teams using **Zoho CRM**
- RevOps & Sales Managers monitoring deal movement
- Teams wanting **data-backed alerts** for slow-moving deals
- Businesses wanting **proactive** pipeline management with AI


## Requirements
| Requirement | Why |
|------------|-----|
| n8n instance (Self-hosted or Cloud) | Runs the workflow |
| Zoho CRM OAuth2 Credentials | Fetch deals + Create tasks |
| Gmail (or SMTP) credentials | Send alert emails |
| Google Gemini API access | AI scoring on deals |
| Deals must have Stage + Owner + Activity history | Ensures accurate scoring |


## How It Works — Setup & Configuration Steps

### Step-by-Step Setup

1. **Import** workflow into n8n
2. Enable **Zoho CRM OAuth2** credentials in:
   - Fetch Open Deals
   - Create At-Risk Task
3. Enable **Gmail OAuth2** on the email alert node
4. Validate fields from Zoho API:
   - `Last_Activity_Time`
   - `Stage`
   - `Owner.email`
5. Update the **deal stage list** in the Fetch URL if needed:
   - Example: `Qualification`, `Negotiation`, `Proposal`, etc.
6. Confirm scanning frequency in the **Weekly Trigger**
7. Run the workflow manually once → check logs + emails + tasks
8. Turn workflow **Active**


## How To Customize Nodes

| Node | What You Can Customize | Example |
|------|-----------------------|---------|
| Weekly Trigger | Change execution frequency | Daily scan |
| Fetch Deals | Include additional deal stages | Add “Value Proposition” |
| Filter Stalled Deals | Adjust inactivity threshold | &gt; 15 days instead of 30 |
| AI Prompt | Add more data points | Probability to close |
| Email Alert | Modify message template | Localization |
| Task creation | Add reminder / follow-up info | Due date +1 day |


## Add-Ons (Optional Enhancements)

You can easily extend this workflow by adding:

- **Stage Change Webhook Trigger** → near real-time monitoring  
- **Google Sheets or Database Logging** for reporting  
- **Duplicate task checker** so the same deal isn’t flagged repeatedly  
- **Slack / Microsoft Teams alerts**  
- **SLA-based scoring** (pipeline aging logic)  
- **Manager escalation** if no response in X days  


## Practical Use Cases

This workflow is ideal for:

1. Sales manager auto-alert system for aging deals  
2. Leaderboard tracking for untouched deals  
3. Weekly CRM hygiene and rep performance tracking  
4. Early detection of churn risk in B2B sales cycles  
5. AI-assisted deal coaching and next-step suggestions  

Many more scenarios are possible based on deal movement automation.


## Troubleshooting Guide

| Issue | Possible Cause | Fix / Solution |
|------|----------------|----------------|
| No deals processed | Stage filters too narrow | Update fetch URL stage list |
| Emails not sent | Gmail credentials missing or expired | Reconnect Gmail OAuth2 |
| Tasks not created | Zoho API permissions missing | Enable write permissions |
| Owner email missing | CRM field not mapped correctly | Update sendTo expression |
| Health score always null | Output parser mismatch | Check prompt & parser config |
| Workflow runs but no alerts sent | No stalled deals or score &gt;= threshold | Temporarily lower threshold for testing |


## Need Help?

If you would like expert help customizing this workflow or implementing additional automation like stage-based triggers, dashboards or integration with Slack/Teams, our n8n automation team at **WeblineIndia** can assist you.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
