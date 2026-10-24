# 🤝 Manage e-commerce orders end-to-end with PostgreSQL, Gmail, PDFMonkey and Slack

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives payment webhooks to validate and store orders in PostgreSQL, notifies the warehouse in Slack, generates PDF invoices via PDFMonkey, and emails customers through Gmail with invoice and shipping updates, then runs post-delivery follow-ups and posts daily sales metrics to Slack.

## How it works
1. Receives a POST webhook event for a paid order and validates that the order ID, amount, and customer email are present and correctly formatted.
2. Normalizes the order fields, inserts the order into a PostgreSQL orders table, writes a payment event into an order_logs table, and alerts the warehouse team in Slack.
3. Calculates invoice totals with an 18% tax, submits the invoice payload to the PDFMonkey API for PDF generation, waits briefly, and then fetches the document status.
4. If the PDF is generated successfully, updates the order record in PostgreSQL with the invoice URL, logs the invoice event, and emails the customer an order confirmation with the invoice download link via Gmail.
5. Creates shipping details (tracking ID, courier name, and estimated delivery), updates the order as shipped in PostgreSQL, logs the shipment event, and emails a shipping notification to the customer via Gmail.
6. After a 3-day delay, marks the order as delivered in PostgreSQL, logs the delivery event, emails a delivery feedback request, waits 1 day, and then emails a product review request.
7. Generates a reward coupon code, emails the discount code to the customer, and updates the order record in PostgreSQL to mark feedback, review, and coupon actions as completed.
8. Runs daily at 9:00 to query sales KPIs from PostgreSQL, formats the results, and posts the analytics report to a Slack channel.

## Setup
1. Configure the Payment Webhook Trigger URL in your payment provider to send a POST payload containing order_id, amount, customer_email, and payment_status.
2. Add PostgreSQL credentials and ensure public.orders and public.order_logs tables exist with the columns referenced by the insert/update steps (including order_id, email, amount, status, payment_status, invoice_url, tracking_id, courier_name, estimated_delivery, and flags like coupon_sent).
3. Add Slack credentials and set the target channels for warehouse notifications, daily analytics reports, and error alerts.
4. Add a Gmail OAuth2 credential for sending customer emails and update sender details (and any store links in the email HTML) as needed.
5. Add a PDFMonkey API credential (HTTP Header Auth) and replace the document_template_id with your PDFMonkey template ID.

## Additional info
## How To Customize Nodes

*   **Tax Rates:** Open the **Calculate Invoice Totals** node to change the `tax` calculation (currently set to 18% / 0.18).
*   **Courier Details:** In the **Assign Tracking Details** node, you can change the default `courier_name` from "BlueDart" to your preferred provider (FedEx, UPS, etc.).
*   **Email Branding:** The **Email Invoice to Customer** node contains an HTML email body. You can modify the CSS and branding colors to match your store’s identity.
*   **Analytics Schedule:** The **Daily Report Schedule** is set to 9:00 AM. You can adjust the "Trigger at Hour" parameter to suit your time zone.


## Add‑ons

*   **Inventory Sync:** Add a node after "Insert Order" to deduct stock levels from a Google Sheet or ERP.
*   **SMS Notifications:** Connect Twilio to send tracking numbers via text message in addition to email.
*   **Fraud Detection:** Integrate an AI node or a service like Seon to flag high-risk orders before the invoice is generated.
*   **Return Management:** Add a webhook branch to handle return requests and update the PostgreSQL `status` column to "Returned."


## Use Case Examples

1.  **High-Volume Apparel Store:** Automating the generation of thousands of invoices monthly without manual intervention.
2.  **Subscription Box Service:** Using the PostgreSQL logging system to track exactly when boxes were shipped and delivered for every customer.
3.  **Electronics Retailer:** Utilizing the "Request Review" delay to ensure technical products are used before asking for a 5-star rating.
4.  **B2B Wholesaler:** Sending professional tax-compliant invoices to business clients automatically upon payment.
5.  **Multi-Channel Brand:** Consolidating orders from various platforms into one central PostgreSQL database for unified reporting.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow doesn't start** | Webhook URL mismatch | Ensure the Test/Production URL in n8n matches the one in your payment gateway. |
| **Database Error** | Missing columns | Verify that you have run the full SQL script provided in the Setup section. |
| **Invoice Email has no link** | PDFMonkey processing lag | Increase the duration in the "Wait for Processing" node or check PDFMonkey logs. |
| **Slack alerts not sending** | Invalid Channel ID | Ensure the n8n Slack App is invited to the private channel or use public channel names. |
| **Gmail fails to send** | Token expired | Refresh your Gmail OAuth2 credentials in the n8n Credentials settings. |


## Need Help?

Setting up a full order lifecycle involves multiple moving parts. If you need a helping hand to:

*   Customize the SQL schema for your specific product types.
*   Build custom HTML templates for your invoices.
*   Integrate additional Add-ons like SMS or Inventory management.
*   Optimize the daily analytics queries for deeper business insights.

Contact **WeblineIndia** today. Our expert n8n team specializes in building robust, scalable n8n workflows that help businesses save hours of manual work every single day.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
