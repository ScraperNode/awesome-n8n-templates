# 🔧 Send promo code expiry alerts using Webhook, Google Sheets, Gmail and Slack

> ⚡ **42 views** · 🔧 [Miscellaneous](../)

## Description

# Promo Code Expiry Alert System

&gt; Webhook, Google Sheets, Gmail & Slack

---

This workflow automates promo code management by receiving data via webhook, validating expiry, storing it in Google Sheets and sending alerts through Gmail and Slack based on urgency. It ensures teams never miss expiring promotions and can act proactively.

### Quick Implementation Steps

- [Import the workflow JSON into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Configure Webhook node and test with sample data
- Connect Gmail, Google Sheets and Slack credentials
- Update sheet columns and Slack channel IDs
- Activate workflow and start sending POST requests


## What It Does

This workflow automates the complete lifecycle of promo code tracking and alerting. It starts by receiving promo data through a webhook, which can be triggered from any external system like a form, API or application. The data is then normalized to maintain consistency across all fields.

Once the data is structured, the workflow validates whether the promo code is still active based on its expiry date. If valid, it proceeds to send an email notification and store the details in a Google Sheet for record-keeping and tracking purposes.

The workflow then calculates the number of days remaining until expiry and intelligently categorizes the promo into urgency levels. Based on this, it sends Slack alerts—urgent alerts for promos expiring in one day and warning alerts for those expiring within two to three days.


## Who It's For

- Marketing teams managing promotional campaigns
- E-commerce businesses tracking discount codes
- Operations teams needing real-time alerts
- Developers automating backend workflows
- Startups looking for low-code automation solutions


## Requirements

- [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Gmail account (OAuth configured)
- Google Sheets account with a sheet created
- Slack workspace with API access
- Basic understanding of webhook requests


## How It Works & Set Up

1. Create a new workflow in n8n and import the provided JSON file.
2. Configure the Webhook node to accept POST requests and copy the generated URL.
3. Send test data with fields: `code`, `discount_type`, `value`, `expiry` and `usage_limit`.
4. Set up Gmail credentials in the “Send Promo Email” node.
5. Connect your Google Sheets account and ensure the sheet has columns: Code, Discount, Expiry, Usage Limit.
6. Configure Slack credentials and select the appropriate channel in both alert nodes.
7. Verify expressions used in Set and IF nodes for correct data mapping and calculations.
8. Test the workflow end-to-end using sample payloads.
9. Activate the workflow to enable real-time execution.


## How To Customize Nodes

- **Webhook Node:** Modify path or method if integrating with a specific system
- **Set Node:** Add or remove fields based on your promo structure
- **IF Nodes:** Adjust conditions for different expiry ranges (e.g., 5 days warning)
- **Gmail Node:** Customize subject and HTML message format
- **Google Sheets Node:** Map additional fields like campaign name or category
- **Slack Nodes:** Change message format, emojis or channel IDs


## Add-ons

- Add Cron node for daily expiry checks
- Integrate WhatsApp or SMS notifications
- Add database storage (MySQL, MongoDB)
- Include duplicate promo validation
- Add dashboard visualization using BI tools


## Use Case Examples

- Track limited-time discount codes for e-commerce stores
- Monitor SaaS subscription promo offers
- Alert teams about expiring affiliate campaigns
- Manage seasonal marketing promotions
- Automate coupon lifecycle tracking

There can be many more use cases depending on how promo or expiry-based data is used in your system.


## Troubleshooting Guide

| Issue                    | Possible Cause                   | Solution                              |
| ------------------------ | -------------------------------- | ------------------------------------- |
| Workflow not triggering  | Webhook not active               | Activate workflow and use correct URL |
| No data in Google Sheets | wrong column mapping             | Verify field mapping in Sheets node   |
| Slack message not sent   | Wrong channel ID or credentials  | Reconnect Slack and check channel चयन |
| Wrong days calculation   | Date format issue                | Ensure expiry is in YYYY-MM-DD format |
| IF condition not working | Type mismatch (string vs number) | Use correct data types in expressions |


## Need Help?

If you need assistance setting up this workflow or want to extend it with advanced features like dashboards, CRM integration or multi-channel notifications, feel free to reach out our [n8n automtion experts](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia**

We specialize in building scalable automation workflows tailored to your business needs. Whether you're just getting started or looking to optimize existing processes, we’re here to help you succeed.

[Get in touch to build custom n8n workflows](https://www.weblineindia.com/contact-us.html) or enhance this solution further.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
