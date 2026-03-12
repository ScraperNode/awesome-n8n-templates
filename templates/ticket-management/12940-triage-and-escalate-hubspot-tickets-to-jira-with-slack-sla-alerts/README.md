# 🎫 Triage and escalate HubSpot tickets to Jira with Slack SLA alerts

> ⚡ **33 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow automates the prioritization and escalation of customer support tickets. It acts as an intelligent triage system that identifies high-value customers and potential churn risks in HubSpot, syncs them to Jira, and enforces response times via Slack alerts.

## Who’s it for
This workflow is ideal for Customer Success (CS) teams, Support Leads, and Account Managers who need to ensure VIP clients and critical issues receive immediate engineering or support attention without manual monitoring.

## How it works
The workflow runs on a schedule to process new tickets:
1.  **Monitor:** Checks HubSpot every 10 minutes for newly created tickets.
2.  **Enrich:** Retrieves the associated Contact’s data, specifically looking for **Annual Revenue** and **Lifecycle Stage**.
3.  **Analyze:** A Code node evaluates the ticket content and customer value. It assigns a "Severity" level (Critical/High/Normal) based on revenue thresholds (&gt;10k) or churn-risk keywords (e.g., "refund," "lawyer," "cancel").
4.  **Action:** Creates a formatted Jira task with all context included and notifies a Slack channel.
5.  **SLA Check:** Waits 15 minutes to allow for a response.
6.  **Escalate:** If the Jira ticket status hasn't changed to "In Progress" or "Done" after the wait period, it triggers a high-priority "Churn Risk Escalation" alert in Slack.

## Requirements
* **HubSpot** account (CRM and Service Hub).
* **Jira Software Cloud** account.
* **Slack** workspace.

## How to set up
1.  Configure your credentials for HubSpot, Jira Software, and Slack.
2.  In the **HubSpot: Get Associations** and **Get Contact Data** nodes, ensure the properties match your internal naming conventions.
3.  In the **Jira: Create Triage Ticket** node, select your specific Project and Issue Type from the dropdown lists.
4.  In the **Slack** nodes, select the channel where you want alerts to be posted.

## How to customize the workflow
* **Integrate other tools:** This system is modular and works with any other tool (contact us for help). You can easily replace the nodes to use your specific stack:
    * **CRM:** Pipedrive, WeClapp
    * **Ticketing System:** Zendesk, Intercom, FreshDesk
* **Modify Logic:** Open the **Code: Calculate Severity** node to change the revenue threshold (currently set to 10,000). You can also replace the manual keyword matching with an LLM (AI) node to intelligently analyze ticket sentiment and intent.
* **Adjust SLA:** Change the duration in the **Wait: Response Timer** node if your Service Level Agreement (SLA) differs from the default 15 minutes.
* **Change Status Check:** Update the **Check: Escalation Needed?** node if your team uses different Jira statuses (e.g., "Under Review" instead of "In Progress") to determine if a ticket is being handled.

## 🔗 Nodes Used

HTTP Request, Slack, HubSpot, Jira Software, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
