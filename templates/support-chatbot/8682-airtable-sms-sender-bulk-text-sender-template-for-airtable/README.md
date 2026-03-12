# 💬 Airtable SMS sender - bulk text sender template for Airtable

> ⚡ **269 views** · 💬 [Support Chatbots](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recLaUBEJDCFxly1n.jpg)](https://youtu.be/6QKbzoWMaXE)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Overview

This workflow automatically sends personalized SMS notifications to customers when their order status changes in Airtable. Monitor your order management base and instantly notify customers about updates like "Confirmed" or "Shipped" without manual intervention.

When an order status changes in your Orders table, a notification record is automatically created in a Status Notifications table. The workflow monitors this table, prepares personalized messages using the customer's name and order status, sends the SMS via Twilio, and updates the delivery status back to Airtable for complete tracking and logging.

## Key Features

- Automated SMS sending triggered by Airtable record changes
- Personalized messages with customer name and order status
- Complete delivery tracking with success/error status updates
- Error handling for invalid phone numbers
- Works with Twilio's free trial account for testing

## Common Use Cases

- E-commerce order status updates
- Shipping notifications
- Order confirmation messages
- Customer communication logging

## Setup Instructions

**Step 1: Duplicate the Airtable Base**
Copy the [Order Management Base template](https://airtable.com/appaeASO1AZV62pLI/shrBP0lmBNXk0G7Vf) to your Airtable workspace. You must use your own copy as the workflow needs write permissions.

**Step 2: Connect Your Accounts**
- Add your Airtable Personal Access Token credentials to the workflow nodes
- Create a [Twilio account](https://www.twilio.com) (free trial available)
- From your Twilio dashboard, obtain your Account SID, Auth Token, and Twilio phone number
- Add Twilio credentials to the "Send Order Status SMS" node

**Step 3: Configure the Workflow**
In the **Config** node, update these URLs with your duplicated Airtable base:
- `notifications_table_url`: Your Status Notifications table URL
- `orders_table_url`: Your Orders table URL
- `from_number`: Your Twilio phone number

**Step 4: Customize the Message**
Modify the "Prepare SMS Content" node to personalize the message template with your brand voice and additional order details.

**Step 5: Activate**
Toggle the workflow to 'Active' and the automation will monitor your Airtable base every minute, sending notifications automatically.

## 🔗 Nodes Used

Airtable, Twilio, Airtable Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
