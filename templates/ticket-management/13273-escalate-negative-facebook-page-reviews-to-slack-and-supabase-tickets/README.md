# 🎫 Escalate negative Facebook Page reviews to Slack and Supabase tickets

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Facebook Page Negative Review Watchdog → Slack Escalation + Supabase Ticket

This workflow automatically monitors Facebook Page reviews, detects negative feedback (≤ 2 stars), alerts the support team via Slack and attempts to create a support record in Supabase with built-in error handling.

This workflow listens for Facebook Page reviews through a webhook. When a review with a rating of **2 stars or less** is received, the workflow prepares and standardizes the incoming data, sends an immediate Slack alert to the support team and attempts to store the review as a support record in Supabase. If the database operation fails, a fallback Slack alert is triggered with the relevant error details.

You receive:

* **Instant Slack alerts for negative Facebook reviews.**
* **Centralized data preparation via a global configuration step.**
* **Automated support record creation.**
* **Error visibility if storage fails.**
* **No manual monitoring of Facebook reviews.**

Ideal for customer support teams that want immediate visibility and structured tracking of negative customer feedback.


## Quick Start – Implementation Steps

1. Import the provided **n8n workflow JSON**.
2. Configure the **Facebook Page Review Trigger** webhook URL in your Facebook integration.
3. Review and adjust the **Global Configuration** node to match your incoming payload structure.
4. Connect your **Slack credentials** and select the channel for alerts.
5. Connect your **Supabase credentials** and configure the table used for storage.
6. Activate the workflow — monitoring starts instantly.


## What It Does

This workflow automates negative review handling:

1. Receives Facebook Page review data via a webhook.
2. Prepares and standardizes key review fields using a global configuration step.
3. Checks whether the review rating is **≤ 2 stars**.
4. Sends a formatted Slack alert to the support team with full review context.
5. Attempts to create a support record in Supabase.
6. Detects Supabase insert failures.
7. Sends a fallback Slack alert including the Supabase error message if record creation fails.

This ensures **no negative review is missed**, even if downstream storage encounters issues.


## Who’s It For

This workflow is ideal for:

* Customer support teams.
* Social media monitoring teams.
* SaaS companies handling public feedback.
* Operations teams needing visibility into failures.
* Product teams tracking user dissatisfaction.
* Any business receiving Facebook Page reviews.


## Requirements

To run this workflow, you need:

* **n8n instance** (cloud or self-hosted)
* **Facebook Page review integration** (webhook-based)
* **Slack workspace** with API access
* **Supabase project** with insert permissions
* Basic understanding of JSON payloads and webhooks


## How It Works

1. **Facebook Page Review Trigger**  
   Receives new review data via POST webhook.

2. **Global Configuration**  
   Maps and standardizes incoming review fields such as rating, review text, reviewer name and page name for consistent downstream usage.

3. **Check Negative Review (≤ 2 Stars)**  
   Filters reviews and allows execution only for negative ratings.

4. **Slack – New Negative Review Alert**  
   Sends an immediate Slack notification with:
   * Page name
   * Reviewer name
   * Rating
   * Review text

5. **Create Support Case (Supabase)**  
   Attempts to store the review as a support record.

6. **Check Case Creation Failure**  
   Verifies whether the Supabase insert returned an error.

7. **Slack – Case Creation Failed Alert**  
   Sends a fallback Slack alert including review context and Supabase error details.


## Setup Steps

1. Import the workflow JSON into n8n.
2. Open **Facebook Page Review Trigger** and copy the webhook URL.
3. Configure your Facebook system to send review events to this webhook.
4. Review the **Global Configuration** node and update field mappings if needed.
5. Connect **Slack API credentials** and select the desired channel.
6. Connect **Supabase credentials** and configure the target table.
7. Save and activate the workflow.


## How To Customize Nodes

### **Customize Review Threshold**

Modify the **Check Negative Review (≤ 2 Stars)** IF node:
* Change the rating threshold (e.g., ≤ 1 or ≤ 3)
* Add additional conditions such as page name or keywords

### **Customize Slack Alerts**

You may add:
* Emojis for urgency
* Mentions (`@channel`, `@support`)
* Links to the Facebook review
* Severity labels (LOW / HIGH)

### **Customize Data Storage**

You can extend stored data with:
* Review timestamp
* Review ID
* Review URL
* Status (Open / In Progress / Resolved)
* Assigned support agent


## Add-Ons (Optional Enhancements)

You can extend this workflow to:

* Prevent duplicate review inserts
* Add retry logic for storage failures
* Route alerts to different Slack channels per page
* Create dashboards from stored review data
* Integrate ticketing tools (Zendesk, Jira)
* Add sentiment analysis using AI
* Generate daily or weekly negative review summaries


## Use Case Examples

### **1. Customer Support Monitoring**
Instant awareness of dissatisfied customers.

### **2. Social Media Reputation Management**
No need to manually check Facebook reviews.

### **3. SLA Enforcement**
Ensure negative feedback is logged and tracked.

### **4. Operations Visibility**
Error alerts ensure failures never go unnoticed.

### **5. Product Feedback Loop**
Capture recurring complaints for product improvement.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-----|---------------|----------|
| Slack alert not sent | Invalid Slack credentials | Reconnect Slack API |
| Storage insert fails | Table or permission issue | Verify table and access rules |
| Error alert always triggers | Incorrect IF condition | Validate error field mapping |
| Workflow not running | Workflow inactive | Activate workflow |
| Webhook not firing | Incorrect URL | Re-check webhook configuration |


## Need Help?

If you need help extending or productionizing this workflow like adding retries, scaling alerts, improving error handling or integrating additional systems — our n8n automation team at **WeblineIndia** can assist with advanced automation and workflow design.

## 🔗 Nodes Used

Slack, Webhook, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
