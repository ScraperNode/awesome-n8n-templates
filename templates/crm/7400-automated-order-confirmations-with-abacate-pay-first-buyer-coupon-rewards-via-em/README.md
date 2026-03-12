# 🤝 Automated order confirmations with Abacate Pay: first-buyer coupon rewards via email & Slack

> ⚡ **282 views** · 🤝 [CRM & Sales Operations](../)

## Description

### Workflow Overview
This workflow provides a complete, automated post-purchase solution triggered by a successful payment webhook from **Abacate Pay**. *(For international users, think of Abacate Pay as 'the Brazilian Stripe' – a popular and robust payment gateway in Brazil).*

When a successful payment is registered, this workflow instantly sends a beautiful, responsive HTML confirmation email to the customer and posts a detailed notification to a designated Slack channel.

The key feature is its ability to **dynamically reward first-time buyers**. The workflow checks the customer's purchase history, and if it's their first order, it automatically generates a 10% discount coupon for their next purchase and includes it in the welcome email.

### Key Features:

* **Webhook Trigger:** Securely listens for successful payment events from Abacate Pay.
* **First-Time Buyer Detection:** Queries past orders to identify new customers.
* **Automatic Coupon Generation:** Creates a unique, single-use discount coupon for new buyers.
* **Dynamic Content:** The email and Slack messages automatically include the coupon details, but only for first-time buyers.
* **Responsive HTML Email:** Sends a professional and mobile-friendly order confirmation.
* **Rich Slack Notifications:** Uses Block Kit for well-formatted, actionable alerts for your team.
* **Centralized Configuration:** A single `Configs` node makes it easy to manage static variables like company name and tokens.

### Setup Instructions:

1.  **Webhook Node:** Copy the webhook URL and paste it into your Abacate Pay dashboard for the "payment successful" event (e.g., `billing.paid`).
2.  **Configs Node:** Open this `Set` node and fill in your company's information (`companyName`, `companySite`, `companyEmail`) and the `token` used to validate the webhook requests.
3.  **HTTP Request Nodes (`GetOrders`, `CreateCustomCoupon`):** In both nodes, go to the "Authentication" or "Header" section and replace the placeholder Bearer Token with your actual Abacate Pay API key.
4.  **Send Email Node:** Select your email credentials from the dropdown or configure a new account (e.g., `SMTP`, `Gmail`).
5.  **Slack Node:** Select your Slack credentials and choose the channel where you want to receive notifications.
6.  **Activate the Workflow:** Save and activate the workflow. It's now ready to process incoming orders!

### Required Credentials:

* Abacate Pay API Credentials
* Email Credentials (e.g., `SMTP`, `SendGrid`, `Gmail`)
* Slack API Credentials

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
