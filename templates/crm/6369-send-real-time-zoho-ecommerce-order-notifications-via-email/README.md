# 🤝 Send real-time Zoho ecommerce order notifications via email

> ⚡ **66 views** · 🤝 [CRM & Sales Operations](../)

## Description

**Description:**

This n8n automation template captures real-time order updates from Zoho Ecommerce and instantly sends a customized email alert with customer and order details to your sales or operations team. Ideal for small business owners, D2C brands, or support teams who need to stay updated on incoming orders without manually checking Zoho.

The automation listens for incoming Zoho Sales Order webhook data, parses essential fields like customer name, mobile, product name, total amount, and payment mode, and then dispatches an email summary of the sale for instant follow-up.

**What This Template Does (Step-by-Step)**

🔔 Webhook Listener (Trigger): Activated by a Zoho Commerce webhook whenever a new sales order is placed.

🧮 Set Order Details: Extracts and formats critical order information such as:
- Customer Name
- Mobile Number
- Product Name
- Subtotal
- Payment Mode
- Email
- Order Date
- Sales Order Number

📧 Send Order Notification Email

- Uses SMTP to send a custom notification email to your designated address (e.g., sales team or admin).
- Email Subject: New Order from {{customer name}}
- Email Body: Detailed breakdown of the order with contact info and amount.

✅ Respond to Webhook: Confirms receipt and successful processing of the Zoho webhook to complete the automation loop.

**Use Cases**

⚙️ D2C brand owners getting instant sales alerts
📞 Sales reps needing real-time lead engagement triggers
🧾 Admin teams compiling email logs of order activity
🧠 Automating follow-ups after Zoho Commerce sales
🔔 No-code notification pipeline for Zoho sales data

**Required Integrations**

- Zoho Commerce (Webhook setup)
- SMTP account (for email delivery)

**Why Use This Template?**

✅ Real-time email notifications from Zoho orders
✅ No-code setup using n8n
✅ Works seamlessly with your existing Zoho order workflow
✅ Lightweight and fast — ideal for ecommerce teams
✅ Easy to customize email body, subject, and routing logic

## 🔗 Nodes Used

Send Email, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
