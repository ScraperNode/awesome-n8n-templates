# 🎫 Match WooCommerce orders to new Zendesk tickets and send confirmation emails

> ⚡ **25 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Zendesk New Ticket → WooCommerce Order Matching, Tagging & Email Automation

**Automatically enrich Zendesk tickets with WooCommerce order details and reduce manual lookups.**  

This workflow listens for new Zendesk tickets, fetches the ticket requester’s details, retrieves recent WooCommerce orders, matches them by customer email and updates the ticket with order information and relevant tags. If a matching order is marked as *completed*, it also sends a confirmation email to the customer.

### Quick Implementation Steps

1. Connect Zendesk, WooCommerce and Gmail credentials in n8n.  
2. Import the workflow JSON and review node credentials.  
3. Adjust the WooCommerce order fetch limit if needed.  
4. Activate the workflow.  

That’s it — new tickets will now automatically include order context.


## What It Does  

This workflow bridges the gap between customer support and order management by linking Zendesk tickets with WooCommerce orders. When a new ticket is created, the workflow retrieves the requester’s profile to identify their email address, which is then used to find related orders in WooCommerce.

Because direct email-based filtering is not available in the WooCommerce node, the workflow fetches the **latest five orders** and performs email matching internally within n8n. This ensures accurate matching while working around platform limitations.

Once a matching order is found, the workflow extracts essential details such as order number, status, currency and purchased items. It updates the Zendesk ticket with a private internal note and applies clear order-status-based tags. If the order is marked as *completed*, the workflow also sends a confirmation email to the customer.


## Who’s It For  

- Customer support teams using **Zendesk** and **WooCommerce**  
- E-commerce businesses handling frequent order-related inquiries  
- Support managers aiming to reduce manual order lookups  
- Teams that want faster, more consistent ticket responses  


## Requirements to Use This Workflow  

- An active **Zendesk** account with API access  
- A **WooCommerce** store with REST API credentials  
- A **Gmail** account (OAuth2) for sending customer emails  
- An active **n8n** instance  
- Permission to update tickets and users in Zendesk  


## How It Works & How To Set Up

### Workflow Logic Overview

1. **Trigger on New Ticket**  
   The workflow starts when a new Zendesk ticket is created with status `new`.

2. **Fetch Ticket Requester Details**  
   The requester’s user profile is retrieved to obtain their email address.

3. **Fetch Recent WooCommerce Orders**  
   The workflow retrieves the **latest five orders** from WooCommerce.

4. **Match Customer Email**  
   Each order’s billing email is compared with the Zendesk requester’s email.  
   Only matching orders continue through the workflow.

5. **Generate Zendesk Tags**  
   Order status is evaluated and mapped to meaningful Zendesk tags.

6. **Prepare Ticket Update Payload**  
   Order details and tags are formatted for the Zendesk update.

7. **Update Zendesk Ticket**  
   A private internal note is added to the ticket, along with order-related tags.

8. **Check for Completed Orders**  
   If the order status is `completed`, the workflow proceeds to send an email.

9. **Send Confirmation Email**  
   The customer receives a confirmation email with their order details.


### Setup Instructions

- Update credentials in all Zendesk, WooCommerce and Gmail nodes.  
- Review the WooCommerce order fetch limit (default: 5).  
- Verify the email comparison logic in the IF node.  
- Activate the workflow once testing is complete.


## How To Customize Nodes  

- **WooCommerce – Fetch Recent Orders**  
  Increase or decrease the `limit` value to control how many recent orders are checked.
- **Match Customer Email (IF Node)**  
  Modify comparison logic (for example, make it case-insensitive).
- **Generate Zendesk Tags (Code Node)**  
  Add or change tags based on custom order statuses.
- **Zendesk – Update Ticket**  
  Customize the internal note format or add additional fields.
- **Send Order Confirmation Email**  
  Edit the email content or disable this node if emails are not required.


## Add-ons (Additional Features)  

- SLA-based ticket prioritization  
- Shipment tracking number enrichment  
- Refund and cancellation detection  
- Slack or Microsoft Teams notifications  
- Extended reporting using Zendesk tags  


## Use Case Examples  

- Automatically attaching order details to “Where is my order?” tickets  
- Speeding up refund or replacement requests  
- Reducing agent time spent switching between Zendesk and WooCommerce  
- Applying consistent order-status tags for analytics  
- Sending proactive confirmation emails for completed orders  

There are many more possible use cases depending on how this workflow is extended or customized.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|----------|
| No order found | Customer used a different email | Ask the customer to confirm the checkout email |
| Wrong order matched | Order not in recent fetch range | Increase the WooCommerce order fetch limit |
| No email sent | Order status is not `completed` | Confirm order status or customize the IF condition |
| Ticket not updated | Zendesk permission issue | Verify API credentials and scopes |
| Tags missing | Code node not triggered | Check order status logic in the Code node |

## Need Help?  

If you need help setting up this workflow, customizing nodes or building additional automation, **WeblineIndia** is here to support you.

Our team specializes in **n8n workflow automation**, **Zendesk integrations** and **WooCommerce process optimization**. Whether you want to extend this workflow or build a similar solution tailored to your business, feel free to reach out to **WeblineIndia** for expert assistance.

## 🔗 Nodes Used

Zendesk Trigger, Zendesk, WooCommerce, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
