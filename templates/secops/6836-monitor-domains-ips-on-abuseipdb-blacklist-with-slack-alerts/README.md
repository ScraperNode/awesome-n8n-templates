# 🔒 Monitor domains & IPs on AbuseIPDB blacklist with Slack alerts

> ⚡ **523 views** · 🔒 [SecOps & Security Automation](../)

## Description

### ⚙ How It Works 

The automated blacklist monitor is designed to be a proactive, not reactive, tool. Here is the high-level process:

1.  **Scheduled Checks**: At regular intervals (e.g., every 30 minutes or every hour), a monitoring script or service sends a request to a list of predefined DNS blacklists (DNSBLs) and real-time blackhole lists (RBLs).
2.  **Lookup Queries**: For each check, the system performs a lookup query for our specified domains and IP addresses against the various blacklists. It essentially asks, "Is `our-ip-address.com` on your list?"
3.  **Status Evaluation**: The blacklist service responds with a status: either the asset is **clean** or it is **listed**.
4.  **Alerting Mechanism**: If a **new listing** is detected, the system immediately triggers a notification. This alert contains key information like the asset that was blacklisted (domain or IP), the specific blacklist it was found on (e.g., Spamhaus), and the time of detection.
5.  **Status Logging**: The status of each asset (clean or listed) is logged in a central dashboard. This allows us to track the history of an IP or domain, see when a listing occurred, and when it was resolved.

---

### Setup Steps

Follow these steps to set up the automated blacklist monitor.

1.  **Select a Service**: Choose a reliable blacklist monitoring service. Services like **MXToolBox**, **HetrixTools**, or **Uptime Robot** (with custom checks) are popular options.
2.  **Create an Account**: Sign up and create an account for your organization on the chosen platform.
3.  **Add Monitored Assets**: Navigate to the "Monitors" or "Assets" section within the service's dashboard. Add all of the following:
    * Your primary domain names (e.g., `yourcompany.com`).
    * All outbound mail server IP addresses.
    * Any other publicly facing IP addresses associated with your business.
4.  **Configure Notification Channels**: Set up how and where you want to receive alerts. The best practice is to configure multiple channels for redundancy:
    * **Email**: Send alerts to a group alias like `security@yourcompany.com` or `it-alerts@yourcompany.com`.
    * **Chat/IM**: Integrate with a communication tool like Slack or Microsoft Teams and create a dedicated channel (e.g., `#blacklist-alerts`).
    * **Ticketing System**: Configure the service to automatically open a ticket in your help desk software (e.g., Jira, ServiceNow) when a new listing is found.
5.  **Set Up Check Frequency**: Configure how often you want the system to perform checks. A frequency of every **15 to 30 minutes** is a good starting point for a high-priority service like email.
6.  **Create a Runbook**: A runbook is a document that outlines the steps to take when an alert is received. Create and share a runbook with your team that includes:
    * **Confirmation**: How to verify the listing.
    * **Investigation**: Initial steps to find the root cause (e.g., checking mail logs for spam).
    * **Delisting**: How to submit a delisting request to the specific blacklist provider.
7.  **Initial Testing**: Once everything is configured, perform a manual check to ensure the system is working and that all notification channels are active. You can often do this with a "test check" button within the monitoring service's dashboard.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
