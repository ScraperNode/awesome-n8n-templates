# 🤝 Verify HubSpot contacts with NeverBounce and send risky-email alerts to Slack

> ⚡ **13 views** · 🤝 [CRM & Sales Operations](../)

## Description

**How it works**
Use this workflow to regularly re-check contacts from HubSpot and notify your team in Slack when risky records are found. This ensures your CRM stays clean and your sender reputation remains protected.

**Workflow Logic**
Scheduled Trigger → Get Many Contacts (HubSpot) → Loop Over Items → Verify with NeverBounce → Filter Risky → Update HubSpot → Final Slack Report.

**Setup Instructions**
1. Set Schedule: Open the 'Run Daily' node to set your preferred check interval (e.g., daily or weekly).
2. Connect HubSpot: In the 'Get many contacts' node, connect your credentials and select the specific list or search criteria for the contacts you want to audit.
3. NeverBounce Credentials: In 'Neverbounce: Verify Email', select your NeverBounce API key.
4. Configure Flagging: In the 'Hubspot: flag risky contact' node, ensure the 'Lead Status' mapping aligns with your internal HubSpot properties (currently set to mark invalid/risky as 'Disqualified').
5. Final Report: Connect your Slack credentials in the 'Slack final audit report' node and choose the channel for the summary report.

Video Tutorial
Watch the 50-second setup guide here:
https://youtu.be/NZU8s1cnIJI

## 🔗 Nodes Used

Slack, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
