# 🔧 Emergency alert workflow for schools – notify parents & staff instantly

> ⚡ **266 views** · 🔧 [Miscellaneous](../)

## Description

This n8n workflow ensures instant notifications to parents and staff during school emergencies. It processes incoming alerts via webhooks, filters active emergencies, and sends notifications through email and Slack.

## Key Features
- **Instant Alerts**: Triggers notifications immediately upon detecting emergencies.
- **Multi-Channel**: Sends alerts via email and Slack for broad reach.
- **Automated Filtering**: Identifies and processes only active emergency alerts.
- **Reliable Delivery**: Ensures notifications reach parents and staff swiftly.
- **No Action Needed**: Skips inactive alerts without further processing.

## Workflow Process
1. **Webhook Trigger**: Receives POST requests with emergency data.
2. **Filter Emergency Alerts**: Checks and validates active emergency alerts.
3. **Send Email Alert**: Delivers email notifications to parents and staff.
4. **Send Slack Alert**: Posts real-time messages to a Slack channel.
5. **No Action for Inactive**: Ignores and stops for inactive alerts.

## Setup Instructions
- **Import Workflow**: Load the workflow into n8n using the import feature.
- **Configure Webhook**: Set up a webhook URL to receive emergency data.
- **Set Up Notifications**: Add email (e.g., Gmail) and Slack credentials.
- **Activate**: Save and enable the workflow in n8n.
- **Test**: Simulate an alert to ensure notifications work.

## Requirements
- **n8n Instance**: Hosted or cloud-based n8n environment.
- **Webhook Source**: System to send emergency data via POST.
- **Email Service**: SMTP setup for email alerts.
- **Slack Integration**: Configured Slack workspace for alerts.

## Customization Options
- **Add Channels**: Include SMS or other platforms for alerts.
- **Adjust Filters**: Modify criteria for active alerts.
- **Custom Messages**: Tailor email/Slack content for clarity.

## 🔗 Nodes Used

Send Email, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
