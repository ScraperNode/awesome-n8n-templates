# 🎫 Handle Zendesk WooCommerce refund tickets with Slack and Gmail

> ⚡ **36 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Zendesk Refund Ticket Automation with WooCommerce Order Lookup, Slack Alerts & Gmail Emails

This workflow automatically handles refund-related Zendesk tickets for WooCommerce orders. When a new refund ticket is created, it verifies whether the ticket is related to WooCommerce, fetches the order details, checks refund eligibility and then routes the case based on the refund type. Damaged items notify the internal team via Slack, while other refund cases trigger customer emails via Gmail for further proof or confirmation.


### Quick Implementation Steps

1. Import the workflow JSON into n8n  
2. Connect Zendesk, WooCommerce, Slack and Gmail credentials  
3. Update Slack channel and Gmail sender settings  
4. Activate the workflow  
5. Start receiving and processing refund tickets automatically


## What It Does  

This workflow listens for **new Zendesk tickets** and checks whether they are related to WooCommerce refunds. If the ticket qualifies, it extracts the order ID from the ticket description and fetches the corresponding order from WooCommerce.

Once the order data is retrieved, the workflow validates the order status and checks whether a refund already exists. Eligible cases are merged with ticket data and routed based on the refund reason, such as damaged items, wrong items, partial refunds or full refunds.

For damaged items, the workflow immediately notifies the internal support team via Slack. For other refund types, it sends structured and context-aware emails to customers using Gmail, requesting proof or informing them about next steps.


## Who’s It For  

- Customer support teams handling WooCommerce refunds  
- Operations teams managing refund communication  
- E-commerce businesses using Zendesk and WooCommerce  
- Non-technical users who want automated ticket handling without coding  


## Requirements to Use This Workflow  

- Active **Zendesk account** with ticket access  
- **WooCommerce store** with REST API credentials  
- **Slack workspace** with permission to post messages  
- **Gmail account** connected via OAuth2  
- n8n instance (Cloud or Self-hosted)  


## How It Works & Set Up  

### Setup Instructions

1. **Import Workflow**  
   - Upload the workflow JSON into your n8n instance.

2. **Zendesk Trigger Configuration**  
   - Connect Zendesk OAuth credentials  
   - Trigger runs when a **new ticket is created**

3. **WooCommerce Configuration**  
   - Add WooCommerce API credentials  
   - Ensure permission to fetch orders by ID

4. **Slack Setup**  
   - Select the Slack channel for damaged item alerts

5. **Gmail Setup**  
   - Connect Gmail OAuth  
   - Configure sender email and reply settings

6. **Activate Workflow**  
   - Save and activate the workflow  
   - New refund tickets will now be processed automatically


## How To Customize Nodes  

- **Order ID Regex**: Modify extraction logic in the Zendesk normalization node  
- **Refund Keywords**: Update refund-type detection keywords (damaged, wrong, partial, full)  
- **Slack Message Format**: Customize internal notification content  
- **Email Templates**: Change subject lines and messages in Set nodes  
- **Eligibility Rules**: Adjust order status or refund conditions in IF nodes  


## Add-ons (Optional Enhancements)  

- Auto-tag Zendesk tickets based on refund type  
- Assign tickets to specific agents or groups  
- Log refund cases to Google Sheets or Airtable  
- Add SLA timers for refund response tracking  
- Integrate WhatsApp or SMS notifications  


## Use Case Examples  

- Automatically handle damaged product refund requests  
- Ask customers for proof when wrong items are delivered  
- Notify support teams instantly for high-priority refund cases  
- Reduce manual order lookups for refund tickets  
- Standardize refund communication across support channels  

&gt; There can be many more similar use cases depending on business needs.


## Troubleshooting Guide  

| Issue | Possible Cause | Solution |
|-----|---------------|----------|
| Order ID is null | Order number not in ticket text | Ask customers to include order number |
| Workflow not triggering | Zendesk trigger misconfigured | Check trigger event type |
| Slack message not sent | Channel or credentials incorrect | Reconnect Slack account |
| Email not delivered | Gmail OAuth expired | Reauthorize Gmail |
| Workflow stops early | Order already refunded | This is expected behavior |


## Need Help?  

If you need help setting up this workflow or extending it with advanced automation then our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** are happy to assist.

## 🔗 Nodes Used

Slack, Zendesk Trigger, WooCommerce, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
