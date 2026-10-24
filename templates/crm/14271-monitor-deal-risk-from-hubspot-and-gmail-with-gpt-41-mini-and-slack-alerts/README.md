# 🤝 Monitor deal risk from HubSpot and Gmail with GPT-4.1 mini and Slack alerts

> ⚡ **11 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Overview
This workflow helps sales teams automatically monitor deal health and detect risks early.

It pulls deal data from your CRM and combines it with recent email activity. Using AI, it analyzes engagement, identifies objections, and assigns a risk score. High-risk deals are flagged and alerts are sent so your team can take action quickly.

---

## How It Works

1. **Scheduled Trigger**
   The workflow runs daily to monitor active deals.

2. **Configuration**
   Defines key settings like deal stages, email lookback period, and risk threshold.

3. **Data Collection**
   - Fetches deals from your CRM  
   - Retrieves recent email conversations

4. **Context Combination**
   Merges deal data and email activity into a single dataset for analysis.

5. **AI Analysis**
   AI reviews the combined data to:
   - Identify objections  
   - Suggest next steps  
   - Detect risk signals  
   - Assign a risk score (0–100)

6. **CRM Update**
   The workflow updates each deal with:
   - Objections  
   - Next steps  
   - Risk score  
   - Risk summary  

7. **Risk Evaluation**
   Compares the risk score against a defined threshold.

8. **Alerting**
   If the deal is high-risk, a Slack alert is sent to notify the sales team.

---

## Setup Instructions

1. Connect HubSpot credentials (for deals)
2. Connect Gmail credentials (for email data)
3. Connect OpenAI credentials (for analysis)
4. Connect Slack credentials (for alerts)
5. Configure the **Workflow Configuration** node:
   - Set deal stage filters  
   - Define email lookback days  
   - Set risk score threshold  
6. Ensure CRM fields exist for:
   - objections  
   - next_steps  
   - risk_score  
   - risk_summary  
7. Test with sample deals
8. Activate the workflow

---

## Use Cases

- Identifying deals at risk before they are lost  
- Tracking customer objections automatically  
- Improving sales follow-up with clear next steps  
- Monitoring engagement across deals  
- Alerting managers about critical deals in real time  

---

## Requirements

- HubSpot account (or replace with your CRM)
- Gmail account (for email data)
- OpenAI API access
- Slack workspace (for alerts)
- n8n instance with proper credentials configured

---

## Notes

- You can adjust the risk threshold based on your sales process.
- AI prompts can be customized to match your sales methodology.
- This workflow can be extended to include CRM filters for specific pipelines or teams.

## 🔗 Nodes Used

Slack, HubSpot, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
