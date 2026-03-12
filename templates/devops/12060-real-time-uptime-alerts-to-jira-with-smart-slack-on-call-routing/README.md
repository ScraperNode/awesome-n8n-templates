# ⚙️ Real-time uptime alerts to Jira with smart Slack on-call routing

> ⚡ **13 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Real-Time Uptime Alerts to Jira with Smart Slack On-Call Routing

This workflow automatically converts uptime monitoring alerts received via webhook into Jira incident tasks and intelligently notifies an available on-call team member on Slack based on their real-time presence status. It ensures critical service outages never go unnoticed by selecting an active responder and sending a detailed direct message immediately.

### ⚡ Quick Implementation Steps

1. Import the workflow JSON into n8n.  
2. Configure your **Webhook**, **Slack**, and **Jira** credentials.  
3. Update the IF node to filter for `status = down` (already configured).  
4. Set the Jira project and issue type as required.  
5. Connect your Slack on-call channel.  
6. Activate the workflow and send a test alert using Postman or your monitoring tool.


## What It Does

This automation listens for incoming alerts from any uptime monitoring service. When a system or service goes down, the workflow instantly validates whether the alert is critical (status = *down*). Once validated, it automatically creates a detailed Jira Task containing all relevant service details such as timestamp, downtime duration, error code, customer impact and priority.

After the Jira incident is created, the workflow retrieves a list of all members from a dedicated Slack on-call rotation channel. It checks each member’s Slack presence (active, away, offline) and uses smart selection logic to choose the best person to notify. The selected team member then receives a richly formatted direct Slack message containing all incident details and a link to the Jira ticket.

This ensures the alert is not only logged properly but also reaches the right responder at the right time.


## Who’s It For

This workflow is perfect for:

- DevOps teams managing uptime & system reliability.
- Support teams responsible for incident response.
- SRE teams using Jira and Slack.
- Organizations with an on-call rotation setup.
- Teams wanting automated escalation for downtime alerts.


## Requirements to Use This Workflow

- **n8n installed** (self-hosted or cloud)  
- **Slack API credentials** with permission to read user presence and send direct messages  
- **Jira Software Cloud** credentials allowing issue creation  
- **A monitoring system** capable of sending webhook alerts (e.g., UptimeRobot, Uptime Kuma, StatusCake, custom system, etc.)  
- Access to a Slack channel that includes your on-call rotation members  


## How It Works & How to Set Up

### Step 1: Receive Alert from Uptime Monitoring Tool

- The workflow starts with the **Webhook node** (`Receive Uptime Alert`).  
- Your monitoring tool must send a POST request with JSON payload including fields like:
  - `serviceName`
  - `status`
  - `timestamp`
  - `customerImpact`
  - `errorCode`
  - `priority`
  - etc.

### Step 2: Filter for Critical Status

- The **IF node** (`Filter for Critical Status`) checks:
- Only when the service is *down* does the workflow continue to create a Jira incident.

### Step 3: Create Jira Incident Task

- The **Create New Jira Incident** node generates a Jira **Task** with:
- Summary: `serviceName + timestamp`
- Description: dynamic fields based on the alert payload  
- Set your Jira **Project** and **Issue Type** as needed.

### Step 4: Fetch Slack On-Call Channel Members

- The workflow calls Slack API to retrieve all user IDs in a designated channel (e.g., `#on-call-team`).

### Step 5: Loop Through Each Member

- **Split In Batches Node** loops each Slack member individually.
- For each user, their Slack **presence** is fetched using:

### Step 6: Build Final Data for Each User

- The **Set node** (`Collect & Set Final Data`) stores:
- presence  
- member ID  
- service details  
- Jira ticket ID  
- downtime info  
- and more  

### Step 7: Select the Best On-Call User

A custom **Code node** uses presence-based logic:

#### Selection Logic

1. If one or more users are **active** → randomly pick one active user.  
2. If only one user is active → pick that user.  
3. If **no users are active** → default to the **first** member from the channel.  

This ensures you always get a responder.

### Step 8: Notify Selected User

- The **Slack Notify Node** sends a formatted direct message with:
- service status  
- downtime duration  
- error code  
- customer impact  
- Jira ticket link  
- priority  

The selected on-call responder receives everything they need to act immediately.


## How to Customize Nodes

### Webhook Node

- Change the path to something meaningful (e.g., `/uptime-alerts`).
- Customize expected fields based on your monitoring tool's payload.

### IF Node

- Modify status condition for:
- `"critical"`  
- `"error"`  
- or multiple conditions  

### Jira Node

You can customize:
- Issue type (Incident, Bug, Task)
- Priority field mapping
- Project ID
- Custom fields or labels

### Slack Retrieval Node

- Change the channel to your team's actual on-call rotation channel.

### Slack Message Node

- Modify message formatting, tone, emojis, or add links.
- Add @mentions or tags.
- Include escalation instructions.


## Add-Ons (Optional Extensions)

Enhance the workflow by adding:

### 1. Escalation Logic

If the selected user doesn’t respond within X minutes, notify next user.

### 2. PagerDuty / OpsGenie Integration

Trigger paging systems for SEV-1 incidents.

### 3. Status Page Updates

Automatically update public status pages.

### 4. Auto-Resolution

When service status returns to *up*, automatically:

- Update Jira ticket  
- Notify the team  
- Close the incident  

### 5. Logging & Analytics

Store incidents in Google Sheets, Notion, or a database.


## Use Case Examples

This workflow can support multiple real-world scenarios:

1. **Website Uptime Monitoring**  
 If your main website goes down, instantly create a Jira incident and notify your on-call engineer.

2. **API Downtime Alerting**  
 When an API endpoint fails health checks, alert active developers only.

3. **Microservices Monitoring**  
 Each microservice alert triggers a consistent, automated incident creation and notification.

4. **Infrastructure Failure Detection**  
 When servers, containers, or VMs become unreachable, escalate to your infrastructure team.

5. **Database Performance Degradation**  
 If DB uptime drops or error rate spikes, create a Jira ticket and ping the database admin.

And many more variations of outage, error, and performance monitoring events.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Workflow not triggering | Webhook URL not updated in monitoring tool | Copy n8n webhook URL and update in monitoring source |
| No Jira ticket created | Invalid Jira credentials or missing project permissions | Reauthorize Jira credentials and verify permissions |
| Slack users not found | Wrong channel ID or bot not added to channel | Ensure bot is invited to the Slack channel |
| Slack presence not returning | Slack app lacks presence permission (`users:read.presence`) | Update Slack API scopes and reinstall |
| No user receives notification | Presence logic always returns empty list | Test Slack presence API and verify real-time presence |
| Wrong user selected | Intended selection logic differs | Update the JS logic in the code node |
| Jira fields not populated | Alert payload fields missing | Verify webhook payload structure and match expected fields |


## Need Help?

If you need assistance setting up this workflow, customizing integrations, building escalations or extending the logic with add-ons — **WeblineIndia is here to help**.

We can assist with:
- Custom Slack/Jira/Monitoring automation  
- On-call rotation logic enhancements  
- Cloud deployment & workflow optimization  
- Any custom n8n automation  
- Production-grade monitoring workflows  

👉 **Contact WeblineIndia for professional support, implementation and [custom workflow development](https://www.weblineindia.com/n8n-automation/).**

## 🔗 Nodes Used

Slack, Webhook, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
