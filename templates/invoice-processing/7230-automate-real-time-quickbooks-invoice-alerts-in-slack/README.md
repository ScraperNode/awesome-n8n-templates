# 🧾 Automate real-time QuickBooks invoice alerts in Slack

> ⚡ **486 views** · 🧾 [Invoice Processing](../)

## Description

# This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for instant team-wide financial visibility. 

It actively monitors QuickBooks and, upon detecting a new invoice, immediately sends a detailed alert to your chosen Slack channel. 

For customized reporting, the workflow can pull specific keywords or data like the customer name, invoice amount, and due date directly into the Slack message, creating a complete, real-time feed of your company's sales activity.

## Use Cases
- **Sales Team Visibility:** Instantly notify the sales channel when an invoice is generated for a deal they closed.
- **Finance & Ops Sync:** Keep the finance team aware of all billing activities as they happen in a dedicated channel.
- **Account Management:** Alert account managers when invoices are sent to their clients, allowing for proactive follow-up.
- **Executive Dashboard:** Create a high-level #billing-feed channel for leadership to monitor revenue-generating activities in real time.

## How it Works

**1. Instant Webhook Trigger:** The workflow begins when an invoice is created or updated in QuickBooks. A configured webhook in your Intuit Developer Portal sends a real-time notification to n8n, instantly activating the flow.

**2. Fetch Full Invoice Details:** The initial webhook payload only contains a basic event notification. This node uses the invoice ID from that payload to query the QuickBooks API and retrieve the full invoice details, such as the customer's name, due date, and domain.

**3. Format Key Data:** A simple but essential Code node takes the raw data from QuickBooks and cleans it up. It extracts only the most important fields (ID, Domain, Customer Name, Due Date) and organizes them for the next step.

**4. Send Slack Notification:** The final node crafts a human-readable message and posts it to your chosen Slack channel. The message is dynamically populated with the invoice data, providing a clear and concise update for the whole team. 

**For example:**
- Invoice having ID: 160 having the Domain: QBO for the customer Rondonuwu Fruit and Vegi which is due on 2025-09-07 has been generated successfully.

## Setup Instructions

To get this workflow running, follow these configuration steps:

**1. Credentials:**
- QuickBooks: Connect your QuickBooks account credentials to n8n.
- Slack: Connect your Slack account using OAuth2 credentials.

**2. QuickBooks Webhook Configuration:**
- First, activate this n8n workflow. This will make the webhook URL live.
- Copy the Production URL from the QuickBooks Webhook node.
- Log in to your Intuit Developer Portal, navigate to the webhooks section for your application, and paste the URL.
- Ensure you subscribe to Invoice events (e.g., Create, Update, etc.).

**3. Node Configuration:**
- Get an invoice: No configuration needed; it will automatically use your QuickBooks credentials.
- Send a message (Slack): In the parameters, select the Slack Channel where you want the notifications to be posted.

## Support
If you need help setting up this workflow or require a custom version tailored to your specific use case, please feel free to reach out to the template author:

- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Slack, Webhook, QuickBooks Online

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
