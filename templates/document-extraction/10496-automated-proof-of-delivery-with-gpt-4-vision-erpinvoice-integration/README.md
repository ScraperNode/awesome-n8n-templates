# 🔬 Automated proof-of-delivery with GPT-4 Vision & ERP/Invoice integration

> ⚡ **170 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow automates the end-to-end proof-of-delivery process for logistics operations. It ingests POD data via webhook—including driver signatures, delivery photos, and GPS coordinates—performs AI-driven verification for package integrity and authenticity, updates ERP systems with delivery status, triggers automated invoicing for verified cases, and handles disputes by creating evidence-backed tickets and alerting teams. Designed for seamless integration, it minimizes errors in billing and reconciliation while accelerating resolution for mismatches.

## **Benefits**
* **Reduced Manual Effort:** Automates verification and status updates, cutting processing time from hours to minutes.
* **Enhanced Accuracy:** AI analysis detects damages, location discrepancies, and signature fraud with high confidence scores, preventing billing disputes.
* **Faster Revenue Cycle:** Instant invoicing for verified deliveries improves cash flow and reduces DSO (Days Sales Outstanding).
* **Proactive Dispute Management:** Generates high-priority tickets with linked evidence, enabling quicker resolutions and lower escalation costs.
* **Audit-Ready Traceability:** Logs all decisions, AI outputs, and actions for compliance with logistics standards like ISO 9001.
* **Scalability:** Handles high-volume deliveries without proportional staff increases, supporting growth in e-commerce fulfillment.

## **Useful for Which Industry**
* **Logistics & Supply Chain:** Ideal for 3PL providers, freight forwarders, and courier services managing last-mile deliveries.
* **E-Commerce & Retail:** Supports platforms like Amazon or Shopify sellers verifying customer receipts and automating returns.
* **Manufacturing & Distribution:** Streamlines B2B shipments with ERP integrations for just-in-time inventory.
* **Pharmaceuticals & Healthcare:** Ensures tamper-evident deliveries with photo verification for cold-chain compliance.
* **Food & Beverage:** Tracks perishable goods with damage detection to maintain quality assurance.

## **Workflow Process**
* **Webhook Intake:** Receives POD submission (driver ID, signature image, delivery photo, recipient, GPS) via POST/GET.
* **Input Validation:** Checks for required fields; branches to error if incomplete.
* **Parallel AI Verification:** 
  - AI Vision (OpenAI GPT-4): Analyzes photo for package condition, location match, and damage.
  - Signature Validation: AI checks legitimacy, handwritten authenticity, and completeness.
* **Merge & Decide:** Consolidates results with confidence scoring; routes to verified (true) or dispute (false).
* **Verified Path:**
  - Update ERP: POSTs status, timestamps, and coordinates to delivery system.
  - Trigger Invoicing: Generates billable invoice with POD reference via billing API.
  - Success Response: Returns confirmation to caller.
* **Dispute Path:**
  - Create Ticket: POSTs high-priority support ticket with evidence (images, scores).
  - Alert Team: Notifies dispute team via email/Slack with issue summary and ticket link.
  - Dispute Response: Returns status and next steps to caller.
* **Error Handling:** Returns detailed feedback for invalid inputs.

## **Setup Instructions**
1. **Import Workflow:** Paste JSON into n8n Workflows → Import from Clipboard.
2. **Configure Webhook:** Set URL for POD submissions (e.g., from mobile apps); test with sample POST data.
3. **AI Setup:** Add OpenAI API key to vision/signature nodes; specify GPT-4 model.
4. **Integrate Systems:** Update ERP/billing URLs and auth in update/trigger nodes (e.g., `https://your-erp.com/api`).
5. **Dispute Config:** Link support API (e.g., Zendesk) and notification service (e.g., Slack webhook).
6. **Threshold Tuning:** Adjust confidence scores in decision node (e.g., &gt;85% for auto-approve).
7. **Test Run:** Execute manually with valid/invalid POD samples; verify ERP updates and ticket creation.

## **Prerequisites**
* n8n instance (v1.50+) with webhook and HTTP request nodes enabled.
* OpenAI API access for GPT-4 vision (image analysis credits required).
* ERP/billing APIs with POST endpoints and authentication (e.g., OAuth tokens).
* Support ticketing system (e.g., Zendesk, Jira) for dispute creation.
* Secure image storage (e.g., AWS S3) for POD uploads.
* Basic API testing tools (e.g., Postman) for endpoint validation.

## **Modification Options**
* Add OCR for recipient name extraction from photos in validation step.
* Integrate geofencing APIs for automated location alerts in AI vision.
* Support multi-signature PODs for group deliveries by expanding parallel branches.
* Add partial invoicing logic for mixed verified/disputed items.
* Incorporate blockchain for immutable POD records in high-value shipments.
* Extend alerts to SMS via Twilio for on-the-road driver notifications.
* Build analytics export to Google Sheets for delivery success rates.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
