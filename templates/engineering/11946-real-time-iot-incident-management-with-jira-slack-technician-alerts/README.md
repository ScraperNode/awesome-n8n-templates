# ⚒️ Real-time IoT incident management with Jira & Slack technician alerts

> ⚡ **43 views** · ⚒️ [Engineering](../)

## Description

# Webhook from IoT Devices → Jira Maintenance Ticket → Slack Factory Alert


This workflow automates predictive maintenance by receiving IoT machine-failure webhooks, creating Jira maintenance tickets, checking technician availability in Slack and sending the alert to the correct Slack channel. If an active technician is available, the system notifies the designated technician channel; if not, it escalates automatically to your chosen emergency/escalation channel.

### ⚡ Quick Implementation: Start Using in 10 Seconds

1. Import the workflow JSON into n8n.
2. Add Slack API credentials (with all required scopes).
3. Add Jira Cloud credentials.
4. Select Slack channels for:
   * Technician alerts
   * Emergency/escalation alerts
5. Deploy the webhook URL to your IoT device.
6. Run a test event.


## What It Does

This workflow implements a real-time predictive maintenance automation loop. An IoT device sends machine data — such as temperature, vibration and timestamps — to an n8n webhook whenever a potential failure is detected. The workflow immediately evaluates whether the values exceed a defined safety threshold.

If a failure condition is detected, a Jira maintenance ticket is automatically created with all relevant machine information. The workflow then gathers all technicians from your selected Slack channel and checks each technician’s presence status in real time.

A built-in decision engine chooses the first available technician. If someone is active, the workflow sends a maintenance alert to your technician channel. If no technicians are available, the workflow escalates the alert to your chosen emergency channel to avoid operational downtime.

This eliminates manual monitoring, accelerates response times and ensures no incident goes unnoticed — even if the team is unavailable.


## Who’s It For

This workflow is ideal for:

* Manufacturing factories
* Industrial automation setups
* IoT monitoring systems
* Warehouse operations
* Maintenance & facility management teams
* Companies using Jira + Slack
* Organizations implementing predictive maintenance or automated escalation workflows


## Requirements to Use This Workflow

You will need:

* An n8n instance (Cloud or Self-hosted)
* Slack App with the scopes:
  * `users:read`
  * `users:read.presence`
  * `channels:read`
  * `chat:write`
* Jira Cloud credentials (email + API token)
* Slack channels of your choice for:
  * Technician alerts
  * Emergency/escalation alerts
* IoT device capable of POST webhook calls
* Machine payload must include:
  * `machineId`
  * `temperature`
  * `vibration`
  * `timestamp`


## How It Works & How To Set Up

### 🔧 High-Level Workflow Logic

1. **IoT Webhook** receives machine data.
2. **IF Condition** checks whether values exceed safety thresholds.
3. **Jira Ticket** is created with machine details if failure detected.
4. **Slack Channel Members** are fetched from your selected technician channel.
5. **Loop Through Technicians** to check real-time presence.
6. **Code Node** determines:
   * first available (active) technician
   * or fallback mode if none available
7. **IF Condition** checks technician availability.
8. **Slack Notification** is sent to:
   * your chosen technician channel if someone is available
   * your chosen emergency/escalation channel if no one is online


### 🛠 Step-by-Step Setup Instructions

1. **Import Workflow:** `n8n → Workflows → Import from File → Select JSON`.
2. **Configure Slack:** Add required scopes (`users:read`, `users:read.presence`, `channels:read`, `chat:write`) and reconnect credentials.
3. **Select Slack Channels:** Choose any Slack channels you want for technician notifications and emergency alerts—no fixed naming is required.
4. **Configure Jira:** Add credentials, select project and issue type, and set priority mapping if needed.
5. **Deploy Webhook:** Copy the n8n webhook URL and configure your IoT device to POST machine data.
6. **Test System:** Send a test payload to ensure Jira tickets are created and Slack notifications route correctly based on technician availability.

This setup allows real-time monitoring, automated ticket creation and flexible escalation — reducing manual intervention and ensuring fast maintenance response.


## How To Customize Nodes

### Webhook Node

* Add security tokens
* Change webhook path
* Add response message

### IF Node (Threshold Logic)

* Lower/raise temperature threshold
* Change OR to AND
* Add more conditions (humidity, RPM, pressure)

### Jira Node

* Customize fields like summary, labels or assign issues based on technician availability

### Slack Presence Node

* Add DND checks
* Treat “away” as “available” during night shift
* Combine multiple channels

### Code Node

* Randomly rotate technicians
* Pick technician with lowest alert count
* Keep a history log


## Add-Ons

* SMS fallback notifications (Twilio)
* WhatsApp alerts
* Telegram alerts
* Notify supervisors via email
* Store machine failures into Google Sheets
* Push metrics into PowerBI
* Auto-close Jira tickets after normalizing machine values
* Create a daily maintenance report


## Use Case Examples

1. **Overheating Machine Alert** – Detect spikes and notify technician instantly.
2. **Vibration Pattern Anomaly Detection** – Trigger early maintenance before full breakdown.
3. **Multi-Shift Technician Coverage** – Automatically switch to emergency mode when no technician is online.
4. **Factory Night-Shift Automation** – Night alerts automatically escalate without manual verification.
5. **Warehouse Robotics Malfunction** – Sends instant Slack + Jira alerts when robots overheat or jam.


## Troubleshooting Guide

| Issue                         | Possible Cause                      | Solution                                     |
| ----------------------------- | ----------------------------------- | -------------------------------------------- |
| Webhook returns no data       | Wrong endpoint or method            | Use POST + correct URL                       |
| Slack presence returns error  | Missing Slack scopes                | Add `users:read.presence`                    |
| Jira ticket not created       | Invalid project key or credentials  | Reconfigure Jira API credentials             |
| All technicians show offline  | Wrong channel or IDs                | Ensure correct channel members               |
| Emergency alert not triggered | Code node returning incorrect logic | Test code with all technicians set to “away” |
| Slack message fails           | Wrong channel ID                    | Replace with correct Slack channel           |


## Need Help?

If you need help customizing this workflow, adding new automation features, connecting additional systems or building enterprise IoT maintenance solutions, our [n8n automation development](https://www.weblineindia.com/n8n-automation/) team at **WeblineIndia** team can help.

We can assist with:

* Workflow setup
* Advanced alert logic
* Integrating SMS / WhatsApp / Voice alerts
* Custom escalation rules
* Industrial IoT integration

Reach out anytime for support or enhancements.

## 🔗 Nodes Used

Slack, Webhook, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
