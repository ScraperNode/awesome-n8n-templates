# 🔒 Enrich and route Splunk security alerts via AbuseIPDB, email, and Telegram

> ⚡ **3 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow ingests Splunk security alerts via webhook, normalizes and deduplicates them using an n8n Data Table, enriches public source IPs with AbuseIPDB reputation data, calculates a risk score, and sends severity-based notifications via email and Telegram plus a daily email.
digest.

## How it works
1. Receives Splunk alert payloads via a POST webhook and normalizes fields such as severity, source IP, targeted users and hosts, event counts, and timestamps.
2. Generates a deterministic fingerprint for each alert and looks up the latest matching record in the `Splunk Security Incidents` Data Table to detect duplicates within a 15-minute cooldown window.
3. If the alert is a duplicate, marks it as suppressed with a zero risk score and stores it in the incidents Data Table without sending notifications.
4. If the alert is not a duplicate, checks whether the source IP is a public IPv4 address. Public addresses are enriched with AbuseIPDB reputation data; other addresses continue with default threat-intelligence values.
5. Computes a composite risk score from Splunk severity, failed attempts, AbuseIPDB confidence score, and targeted user/host counts, then stores the enriched incident record in the Data Table.
6. Sends Critical/High incidents by email and Telegram, sends Medium incidents by email, and stores Low incidents without notification.
7. Runs daily at 18:00 to fetch incidents from the previous 24 hours, aggregate security metrics such as severity counts, top source IP/host, suppressed duplicates, and maximum risk score, and send the resulting digest by email.

## Setup
1. Configure Splunk to POST alerts to the Production URL of the `When Splunk Alert Arrives` webhook using the `splunk-security-alert` endpoint.
2. Run the `When Manually Started` setup path once to create the `Splunk Security Incidents` Data Table and its required schema.
3. Add your AbuseIPDB API key to the `Key` header in `Fetch AbuseIPDB IP Reputation`.
4. Configure SMTP credentials on all Email nodes and replace the example sender and recipient addresses with your own.
5. Configure Telegram Bot credentials and replace `YOUR_TELEGRAM_CHAT_ID` with the destination chat ID for Critical/High alerts.
6. Review the default 15-minute deduplication window, risk-scoring thresholds, and the `0 18 * * *` daily digest schedule before activating the workflow.

## Requirements
- A running n8n instance with Data Tables available.
- Splunk with an alert configured to send a POST webhook to n8n.
- An AbuseIPDB API key for public IPv4 reputation enrichment.
- SMTP credentials and valid sender/recipient addresses for alert and digest emails.
- A Telegram Bot credential and destination Chat ID if Telegram notifications are required.
- Network access from n8n to the AbuseIPDB API and to the configured SMTP/Telegram services.

## Customization
- Adjust the 15-minute deduplication cooldown to match the expected frequency of your Splunk detections.
- Modify the fingerprint composition if additional fields are needed to distinguish alerts in your environment.
- Tune risk-score weights and thresholds for Splunk severity, failed attempts, AbuseIPDB confidence, targeted users, and targeted hosts.
- Change notification routing, for example by sending only Critical incidents to Telegram or adding Slack, Microsoft Teams, ServiceNow, PagerDuty, or another incident-management destination.
- Extend threat-intelligence enrichment with additional providers while keeping the public/private IP decision branch.
- Customize email and Telegram message templates, recipients, and the daily digest contents.
- Change the digest schedule or reporting window to match your operational requirements.

## Additional info
The workflow keeps the original normalized Splunk severity separate from the calculated risk level. This allows an alert reported as `high` by Splunk to be promoted to `critical` when additional context such as
attack volume, target spread, or AbuseIPDB reputation increases its calculated risk.

Duplicate alerts are still stored in the `Splunk Security Incidents` Data Table but do not trigger another notification during the default 15-minute cooldown. This preserves visibility for reporting while reducing alert fatigue.

Threat-intelligence enrichment is only performed for public IPv4 addresses. Private, loopback, link-local, CGNAT, reserved, or unsupported addresses bypass the AbuseIPDB request and continue through
risk scoring with default threat-intelligence values.

The default calculated risk levels are:

    Risk score Level      Default action

------------ ---------- ------------------

       75--100 Critical   Email + Telegram
        50--74 High       Email + Telegram
        30--49 Medium     Email
         0--29 Low        Store only

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Telegram, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
