# ⚙️ Monitor API health and send uptime alerts with Google Sheets and Slack

> ⚡ **7 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs on a schedule to check a list of API endpoints, measure response time, validate health, log results to Google Sheets, and send Slack alerts for new outages while tracking active incidents and posting recovery notifications.

## How it works
1. Runs on a scheduled interval to start an API monitoring cycle.
2. Loads a predefined list of APIs (name, URL, and thresholds) and checks each endpoint with an HTTP GET request.
3. Measures the request duration and evaluates health based on HTTP status, response time, and basic response-body validation.
4. Appends each check result (API, timestamp, status code, and response time) to a Google Sheets log.
5. For unhealthy checks, builds an incident payload and looks up the API in a Google Sheets “Active Alerts” sheet to avoid duplicate notifications.
6. Sends a Slack alert only when no active alert exists for that API, then stores the active incident in Google Sheets.
7. For healthy checks, looks up any active alert for the API and, if found, sends a Slack recovery message and marks the alert as inactive in Google Sheets.

## Setup
1. Add Google Sheets OAuth credentials and set the target spreadsheet, including a log sheet (for results) and an “Active Alerts” sheet (for incident tracking) with the required columns.
2. Add Slack credentials and select the channel where outage and recovery messages should be posted.
3. Update the API list (URLs and expected thresholds) and adjust the schedule interval and health thresholds (status code and response time) to match your environment.

## Additional info
## Customization Options

- **Dynamic Source Injections**: Swap out the static listing values structure in `Load API List` with external database calls, fetching service endpoints live.
- **Multi-Channel Delivery Expansion**: Add alternative integration components (PagerDuty, Microsoft Teams, Email SMTP) next to the Slack blocks to alert teams broadly.
- **Granular Criteria Definitions**: Adapt the logic equations inside the `Health Check` node to validate distinct content signatures, response text schemas, or headers.


## Use Case Examples

- **Microservice System Audits**: Continuously checks distributed backend microservices to confirm intra-cluster communications operate correctly.
- **Third-Party API Guardrails**: Monitors critical paid integrations (Payment gateways, Auth structures) to catch external provider downtime early.
- **SLA Comply Tracking**: Reviews historical tracking indicators via Google Sheets logs to provide accurate uptime reports for management.


## Troubleshooting Guide

- **Google Sheets 404 / Permission Errors**: Ensure your active Google authentication covers permissions to update the designated document ID strings found inside the sheets configurations.
- **Slack Block Token Rejections**: Confirm the active integration bot scopes explicitly cover channel posting properties (`chat:write`) for target channel configurations.
- **False Latency Indicators**: Highly loaded network targets might return slow parameters if checks loop too frequently. Balance checking spacing to avoid overloading destinations.


## Need Assistance?

WeblineIndia can help you with:

* n8n workflow customization
* AI automation development
* Slack and business integrations
* Google Sheets integration
* Enterprise workflow automation
* AI-powered reporting systems
* Production deployment support

Whether you need workflow enhancements, custom dashboards, advanced AI integrations or entirely new automation systems, WeblineIndia can help build scalable solutions tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
