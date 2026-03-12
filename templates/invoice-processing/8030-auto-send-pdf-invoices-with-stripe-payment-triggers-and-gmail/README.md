# 🧾 Auto-send PDF invoices with Stripe payment triggers and Gmail

> ⚡ **387 views** · 🧾 [Invoice Processing](../)

## Description

# 💰 Auto-Send PDF Invoice When Stripe Payment is Received

This workflow automatically generates a **PDF invoice** every time a successful payment is received in **Stripe**, then emails the invoice to the customer via **Gmail**. Perfect for freelancers, SaaS businesses, and service providers who want to automate billing without manual effort.

---

## ⚙️ How It Works

1. **Stripe Payment Webhook**  
   - Listens for successful payment events (`payment_intent.succeeded`).  
   - Triggers the workflow whenever a new payment is made.

2. **Normalize Payment Data**  
   - A **Code node** extracts and formats details like:  
     - Payment ID  
     - Amount & currency  
     - Customer name & email  
     - Payment date  
     - Description  
   - Generates a unique invoice number.

3. **Generate Invoice HTML**  
   - A **Code node** builds a professional **invoice template** in HTML.  
   - Data is dynamically inserted (amount, customer info, invoice number).  
   - Output prepared for PDF generation.

4. **Send Invoice Email**  
   - The **Gmail node** sends an email to the customer.  
   - Invoice is attached as a PDF file.  
   - Includes a confirmation message with payment details.

---

## 🛠️ Setup Steps

### 1. Stripe Webhook
- In your [Stripe Dashboard](https://dashboard.stripe.com):  
  - Navigate to **Developers → Webhooks**  
  - Add a new endpoint with your **Webhook URL** from the n8n Webhook node.  
  - Select event:  
    - `payment_intent.succeeded`  

### 2. Gmail Setup
- In n8n, connect your **Gmail OAuth2 credentials**.  
- Emails will be sent directly from your Gmail account.  

### 3. Customize Invoice
- Open the **Generate Invoice HTML** node.  
- Replace `"Your Company Name"` with your actual business name.  
- Adjust invoice branding, colors, and layout as needed.  

---

## 📧 Example Email Sent

**Subject:** Invoice INV-123456789 - Payment Confirmation  

**Body:**  
Dear John Doe,
Thank you for your payment! Please find your invoice attached.
Payment Details:
Amount: USD 99.00
Payment ID: pi_3JXXXXXXXX
Date: 2025-08-29
Best regards,
Your Company Name


(Attached: `invoice_INV-123456789.pdf`)

---

⚡ With this workflow, every Stripe payment automatically creates and delivers a polished PDF invoice — no manual work required.

## 🔗 Nodes Used

Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
