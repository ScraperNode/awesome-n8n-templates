# 🎫 Detect WooCommerce order delays with Gmail and Slack alerts in real time

> ⚡ **19 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Real-Time WooCommerce Order Delay Detection with Email & Slack Alerts

This n8n workflow listens to real-time WooCommerce order events and automatically detects delivery delays based on the estimated delivery date. When a delay is identified, it proactively notifies the customer via email and alerts internal teams through Slack, ensuring transparency and faster response to fulfillment issues.

### Quick Start – Get This Running Fast

1. Import the workflow JSON into n8n.
2. Connect WooCommerce credentials.
3. Configure Gmail and Slack credentials.
4. Activate the workflow.
5. Start receiving automatic delay alerts in real time.


## What It Does

This workflow proactively monitors WooCommerce orders for delivery delays. It is triggered whenever a new order is created or updated.

The workflow validates order status, checks the estimated delivery date, calculates delay duration and sends notifications if a delay is detected.


## Who’s It For

- WooCommerce Store Owners  
- E-commerce Operations Teams  
- Customer Support Teams  
- Fulfillment & Logistics Teams  


## Requirements

- WooCommerce store with REST API access  
- Gmail account (OAuth enabled)  
- Slack workspace  
- n8n instance (Cloud or Self-hosted)  


## Workflow Steps

1. WooCommerce Trigger  
2. Normalize Order Data  
3. Validate Order Status  
4. Fetch Estimated Delivery Date  
5. Calculate Delay  
6. Send Email Notification  
7. Send Slack Alert  


## Customization

- Modify delay threshold  
- Customize email and Slack message formats  
- Add escalation logic  


## Optional Enhancements

- SMS / WhatsApp alerts  
- Support ticket creation  
- Analytics dashboards  


## Troubleshooting

| Issue | Solution |
|------|----------|
| No alerts | Verify credentials |
| Wrong delay | Check date format |
| Workflow stops | Ensure ETA exists |


## Support

For advanced automation or customization support, contact **WeblineIndia**.

## 🔗 Nodes Used

Slack, WooCommerce Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
