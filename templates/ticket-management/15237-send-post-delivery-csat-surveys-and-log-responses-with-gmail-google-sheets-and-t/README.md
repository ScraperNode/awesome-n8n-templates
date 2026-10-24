# 🎫 Send post-delivery CSAT surveys and log responses with Gmail, Google Sheets and Typeform

> ⚡ **61 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Post-Delivery CSAT Automation System 

&gt; n8n + Gmail + Google Sheets + Typeform

---

This n8n workflow automates the entire **post-delivery customer feedback loop**. It sends a survey email after delivery, logs it in Google Sheets, captures CSAT responses, updates records and alerts your team instantly for low ratings.


### Quick Implementation Steps

1. [Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Import the workflow JSON into n8n  
3. Configure **Webhook URLs** (Delivery + CSAT response)  
4. Connect **Google Sheets OAuth** and set correct sheet  
5. Configure **Gmail credentials** for sending emails  
6. Replace the **Typeform placeholder link** with your real survey URL  
7. Activate workflow and test with sample data  


## What It Does

This workflow builds a **complete post-delivery customer experience system** using two connected pipelines.

The first pipeline starts when a delivery webhook receives a “delivered” status. It validates the event, extracts customer details, prevents duplicate survey sends, waits for a defined delay and sends a personalized CSAT survey email. Every sent survey is logged into Google Sheets for tracking and analytics.

The second pipeline handles incoming CSAT responses. It validates the data, maps it to the correct order, updates the sheet and classifies customer satisfaction into Low, Neutral or High categories. If a customer gives a low rating, the system instantly triggers an internal alert via Gmail, enabling quick action.


## Who It's For

- eCommerce businesses handling deliveries  
- Customer Experience (CX) teams  
- Operations and support teams  
- Startups wanting automated feedback loops  
- Agencies building automation systems for clients  


## Requirements

Before using this workflow, ensure you have:

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets account with a structured sheet:
  - `order_id, email, sent_at, survey_link, csat_score, feedback`
- Gmail account with OAuth configured in n8n
- Webhook source (delivery system / backend / logistics tool)
- Typeform (or any survey tool) with a working form URL
- Basic understanding of n8n nodes and credentials


## How It Works & Set Up

### Workflow Breakdown

This system consists of **two workflows combined into one automation pipeline**:

#### 1. Delivery → Survey Workflow

- Webhook receives delivery event  
- Filters only “delivered” + valid email  
- Extracts order details  
- Checks Google Sheets for duplicate survey  
- If not sent:
  - Waits 4 hours  
  - Sends survey email  
  - Logs the event in Google Sheets  

#### 2. CSAT Response Workflow

- Webhook receives survey response  
- Validates required fields  
- Finds matching order in Google Sheets  
- Updates CSAT score + feedback  
- Classifies response:
  - Low (≤2) → Sends alert email  
  - Neutral (3) → Stored only  
  - High (≥4) → Stored only  

### Setup Instructions

#### Step 1: Configure Webhooks

- Delivery Webhook: `/delivery-webhook`
- CSAT Webhook: `/csat-response`
- Connect these to your backend or survey tool

#### Step 2: Google Sheets Setup

- Create a sheet with columns:

```text
order_id | email | sent_at | survey_link | csat_score | feedback
```

- Connect via OAuth in n8n

#### Step 3: Gmail Configuration

- Add Gmail OAuth credentials
- Use for:
- Survey email sending
- Low CSAT alerts

#### Step 4: Replace Typeform Link

Update this placeholder with your real survey URL:

```text
https://form.typeform.com/to/abc123?order_id=
```

#### Step 5: Test Workflow

- Send sample delivery webhook
- Submit sample CSAT response
- Verify:
  - Email delivery
  - Sheet updates
  - Alert trigger

#### Step 6: Activate Workflow

- Turn on workflow in n8n
- Monitor executions


## How To Customize Nodes

- **Delay Node**

Adjust wait time (currently 4 hours)

- **Email Content Node**  

Modify subject, tone, branding (Webline India)

- **CSAT Classification Engine**  

Change scoring logic (e.g., NPS style)

- **Google Sheets Node**  

Add more columns like product, region, etc.

- **Alert Node (Gmail)**  

Replace with Slack, WhatsApp or CRM integrations


## Add-ons (Extend Functionality)

You can enhance this workflow with:

- Slack alerts for low CSAT  
- WhatsApp notifications for instant escalation  
- Dashboard (Google Data Studio / Power BI)  
- Auto-ticket creation in Zendesk/Freshdesk  
- High CSAT → send thank-you or referral email  
- AI sentiment analysis on feedback  


## Use Case Examples

- Post-delivery feedback automation for eCommerce  
- Logistics experience tracking  
- SaaS onboarding feedback collection  
- Customer satisfaction monitoring system  
- Service-based business feedback loop  

And many more variations depending on your business model


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| Survey email not sent | Condition failed (not delivered) | Check webhook payload status |
| Duplicate surveys sent | Sheet lookup failed | Verify `order_id` mapping |
| CSAT not updating | Sheet match not found | Ensure order exists before response |
| Gmail not sending | OAuth issue | Reconnect Gmail credentials |
| No alert for low CSAT | Switch condition mismatch | Verify classification logic |
| Webhook not triggering | Incorrect URL | Recheck webhook path |


## Need Help?

If you need help setting up this workflow, customizing it or adding advanced features like Slack alerts, dashboards or AI-powered insights then our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can assist you.

We specialize in building **scalable automation systems, workflow optimization and custom integrations** tailored to your business.

Reach out to get:

- Custom workflow development  
- Advanced automation consulting  
- End-to-end system integration

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
