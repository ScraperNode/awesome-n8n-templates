# ⚙️ Monitor partner API usage with Slack, Jira and Gmail alerts

> ⚡ **26 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Smart Partner API Usage Monitoring with Slack, Jira & Gmail Alerts

This workflow monitors partner API usage in real time and triggers alerts based on usage thresholds. It validates incoming data, calculates usage percentage and routes actions using a Switch node. Slack notifications are sent at 80%, Jira tickets are created at 90% and critical alerts (Email + Jira + Slack) are triggered at 100%.

### Quick Implementation Steps

1. Import the workflow into n8n
2. Configure the Webhook node and test with sample data
3. Add credentials for Slack, Jira and Gmail
4. Update Slack channel ID, Jira project and email recipient
5. Activate the workflow
6. Send test payloads to verify all alert levels


## What This Workflow Does

This workflow helps monitor partner API usage automatically and ensures timely alerts when usage reaches defined thresholds. It starts by receiving usage data through a webhook, validating the payload and calculating the usage percentage based on quota and consumption values.

Once calculated, the workflow routes the data using a Switch node. At 80% usage, it sends an early warning Slack notification. At 90%, it escalates by creating a Jira ticket and notifying via Slack. When usage reaches 100%, it triggers a critical alert by sending an email, creating a Jira ticket and sending a Slack notification.

This approach ensures better visibility, timely action and helps prevent service disruption.


## Who’s This For?

- SaaS platforms with API-based billing
- DevOps and Engineering teams
- Product and Platform teams
- Customer Success managers
- Businesses managing partner integrations


## Requirements

- n8n (Cloud or Self-hosted)
- Slack account with API access
- Jira Software Cloud account
- Gmail account (OAuth configured in n8n)
- API or system to send usage data via webhook


## How It Works & Setup Guide

### Setup Steps

1. **Webhook Setup**
   - Configure the `Incoming Partner Usage Data` node
   - Accept POST requests
   - Required fields:
     - `partner_id`
     - `partner_name`
     - `quota`
     - `consumed`
     - `timestamp`

2. **Validate Payload**
   - The workflow checks for missing fields and invalid values

3. **Calculate Usage**
   - Calculates usage percentage from quota and consumed values
   - Stops execution if usage is below 80%

4. **Switch Routing**
   - Routes workflow based on usage:
     - 80% → Slack alert
     - 90% → Jira + Slack
     - 100% → Gmail + Jira + Slack

5. **Configure Integrations**
   - Slack: Set channel ID
   - Jira: Set project and issue type
   - Gmail: Set recipient email

6. **Test Workflow**
   - Send sample data to webhook
   - Verify all alert paths

7. **Activate**
   - Enable workflow after testing


## How To Customize Nodes

- **Webhook Node** → Change endpoint path or add authentication
- **Validation Node** → Add more fields like plan or email
- **Calculation Node** → Modify threshold logic
- **Switch Node** → Adjust percentage ranges
- **Slack Node** → Customize message format and channel
- **Jira Node** → Update ticket structure
- **Gmail Node** → Modify email subject, HTML, recipients


## Add-ons & Enhancements

- Add deduplication to avoid repeated alerts
- Store usage data in database or Google Sheets
- Send alerts to multiple email recipients
- Integrate with CRM or billing systems
- Add cooldown or rate limiting
- Enrich partner data using external APIs


## Use Case Examples

- Monitor API usage for partners in SaaS platforms
- Prevent service downtime due to overuse
- Trigger internal review processes automatically
- Automate partner upgrade discussions
- Improve operational visibility for teams

This workflow can be adapted for many other automation use cases as well.


## Troubleshooting Guide

| Issue                   | Possible Cause                   | Solution                            |
| ----------------------- | -------------------------------- | ----------------------------------- |
| Workflow not triggering | Webhook not called               | Verify webhook URL and method       |
| Invalid payload error   | Missing fields                   | Ensure required fields are included |
| Slack message not sent  | Incorrect channel or credentials | Reconfigure Slack node              |
| Jira ticket not created | Wrong project or API issue       | Verify Jira credentials             |
| Email not sent          | Gmail OAuth issue                | Reconnect Gmail account             |
| Incorrect usage %       | Invalid data format              | Ensure numeric values               |


## Need Help?

If you need help setting up or customizing this workflow, our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at WeblineIndia can assist you in building scalable automation solutions, integrating APIs and optimizing workflows using n8n.

Whether you need custom workflow development, advanced automation features or production-ready deployment, we are here to help you build reliable automation systems.

## 🔗 Nodes Used

Slack, Webhook, Jira Software, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
