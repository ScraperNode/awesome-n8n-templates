# 🎫 Customer feedback automation with sentiment analysis using GPT-4.1, Jira & Slack

> ⚡ **100 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Customer Feedback Automation Workflow with Webhook, OpenAI, Jira & Slack

This workflow collects customer feedback from a webhook, validates the incoming data, analyzes the sentiment using OpenAI and creates Jira tasks for negative or feature-request feedback. It also generates an automated weekly summary using OpenAI and delivers it to Slack. It helps teams stay informed, skip manual reviews and act quickly on customer issues.

## Quick Start – Implementation Steps

1. Set up the Webhook URL in your application to send customer feedback.
2. Configure Slack, Jira and OpenAI credentials in n8n.
3. Adjust sentiment rules or Jira fields if needed.
4. Activate the workflow — you’re ready to collect and process feedback automatically.

## What It Does

This workflow automates the entire lifecycle of customer feedback handling. When someone submits feedback, the system checks if the required information (feedback text and sentiment) is present. If the payload is invalid or incomplete, the team immediately receives a Slack notification to take action.

If the feedback is valid, OpenAI analyzes the content and identifies the sentiment as positive, negative, neutral or a feature suggestion. Based on this result, the system automatically creates a Jira issue for negative feedback or feature requests, ensuring nothing important is missed.

Alongside real-time processing, the workflow also compiles a weekly summary. Every week, it gathers all Jira issues created through feedback and sends them to OpenAI for summarization. The summary is then posted to Slack so the team gets a clean, easy-to-read review of customer sentiment trends.

## Who’s It For

This workflow is ideal for:

* Customer support teams
* Product managers
* QA and development teams
* Companies collecting user feedback
* Businesses wanting automated sentiment analysis and reporting

## Requirements to Use This Workflow

To fully use this workflow, you need:

* An **n8n instance** (self-hosted or cloud)
* A **Webhook endpoint** to receive customer feedback
* A **Slack workspace** with API access
* A **Jira Software Cloud** account
* An **OpenAI API key** with access to GPT-4.1 or similar
* Basic understanding of JSON payloads

## How It Works

1. **Collect Feedback** – Receives customer data through an n8n webhook.
2. **Validate Payload** – Checks required fields; bad input triggers Slack alerts.
3. **Determine Sentiment** – Sends feedback text to OpenAI for sentiment classification.
4. **Conditional Routing** – Negative or feature-request items move forward; others are ignored.
5. **Create Jira Task** – Automatically logs an issue for follow-up.
6. **Weekly Summary** – A scheduled trigger collects all Jira issues created during the week.
7. **Generate Report** – Sends all issues to OpenAI for a clean weekly summary.
8. **Delivered to Slack** – The summary is posted for the team to review.

## Setup Steps

1. Import the workflow JSON file into n8n.
2. Configure your credentials:
	* Slack
	* Jira
	* OpenAI
3. Update the webhook URL in your application.
4. Edit Jira project ID or fields if required.
5. Customize Slack channel IDs.
6. Enable the schedule trigger (weekly summary).
7. Activate the workflow.

## How To Customize Nodes

### Customize Sentiment Rules

Modify the IF node that checks OpenAI output:

* Add new sentiment labels (e.g., “bug”, “urgent”)
* Adjust rules for what should create a Jira issue

### Customize Jira Task Fields

In the _Create Jira Task_ node, you can change:

* Project ID
* Issue type
* Summary and description templates
* Labels or assignees

### Customize Slack Messages

Update Slack node text blocks to:

* Format alerts
* Add more details
* Send messages to different channels

## Add-Ons (Optional Enhancements)

You can extend this workflow with:

* Email notifications for high-priority feedback
* Auto-reply emails to customers acknowledging their feedback
* Google Sheets logging for historical data
* Dashboard creation using Airtable or Notion
* Multi-language sentiment detection
* Auto-tagging Jira issues with sentiment categories

## Use Case Examples

1. **Customer Complaint Handling** – Automatically detect negative feedback and create a Jira issue.
2. **Feature Request Collection** – Route suggestions to the product backlog.
3. **Weekly Sentiment Reporting** – Keep managers updated on trends.
4. **Slack Alerts for Bad Payloads** – Notify the team when someone sends incomplete or incorrect feedback.
5. **Automated Feedback Triage** – Assign tasks to specific Jira users based on sentiment or keywords.
6. You can extend to many more such similar use cases.

## Troubleshooting Guide

| Issue                       | Possible Cause                               | Solution                                          |
|-----------------------------|-----------------------------------------------|---------------------------------------------------|
| Slack alert not sent        | Wrong API credentials or channel ID           | Check Slack credentials and update channel ID     |
| Jira issue not created      | Incorrect project ID or issue type            | Verify Jira configuration in n8n                  |
| OpenAI sentiment not reading| Wrong JSON path in IF node                    | Re-check `$json.output[0].content[0].text`        |
| Weekly summary not generated| Schedule trigger disabled                     | Enable the Schedule Trigger node                  |
| Webhook not receiving data  | Application not pointing to correct URL       | Verify webhook URL in your app                    |


## Need Any Help?

If you need any help setting up this workflow, troubleshooting or adding custom features, our n8n experts at WeblineIndia is always here to support. We can help you automate more processes, integrate external systems or build complete workflow solutions tailored to your business.

## 🔗 Nodes Used

Slack, Webhook, Jira Software, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
