# 🧾 Automated invoice-PO matching with Google Gemini AI and email notifications

> ⚡ **1,683 views** · 🧾 [Invoice Processing](../)

## Description

## Automated Invoice-Processing AI Agent for n8n
Overview
The Automated Invoice-Processing AI Agent in n8n is designed to streamline and optimize invoice management for finance teams and accounts payable (AP) professionals. This solution addresses the common challenge of verifying invoice data manually, cross-checking it against purchase orders (POs), and ensuring compliance before releasing payments. By intelligently fetching invoices from Google Drive, extracting key details, validating them against PO records from Google Sheets, and automating the next actions, this system reduces human intervention, minimizes errors, and accelerates the payment process.

### Target Audience
This automation primarily serves finance and AP teams responsible for managing large volumes of vendor invoices. It also supports finance managers, procurement departments, and auditors who require accuracy in payment reconciliation, ensuring that invoices align with approved POs before processing.

### Business Problem Addressed
Organizations frequently struggle with time-consuming manual invoice verification and data entry. Discrepancies between invoices and purchase orders can lead to payment delays, compliance risks, or duplicate payments. This n8n-based AI agent automates that process—ensuring that every invoice is validated, exceptions are flagged to the finance team promptly, and payments of smaller value (under defined thresholds) are processed automatically.

### Prerequisites

Active n8n account or self-hosted instance

Google Drive and Google Sheets connected via n8n credentials

LLM (AI node) configured for document extraction (optional but recommended)

A Google Sheet set up with existing PO data (including PO Number, Amount, and Date fields)

### Setup Instructions

Connect Google Drive and Google Sheets integrations within n8n.

Configure the workflow trigger to monitor a designated "Invoices" folder.

Add a document-parsing node to extract invoice details such as PO Number, Invoice Date, and Amount.

### Implement conditional logic:

If the invoice amount &gt; 5000, the agent cross-references PO details from the Google Sheet.

If it matches, it updates the PO sheet status to “Process Payment.”

If not, an automated email notifies the finance team.

If the amount ≤ 5000, the workflow marks it for direct payment.

Test the workflow with sample invoices before full deployment.

### Customization Options

Adjust the payment threshold value (e.g., 10,000 instead of 5,000).

Customize the email notification template and recipient list.

Integrate with accounting systems such as QuickBooks or SAP for end-to-end automation.

Add audit logging nodes to create traceability for every action taken.

This AI-driven automation brings speed, accuracy, and scalability to invoice verification—empowering finance professionals to focus on analytical and strategic tasks rather than repetitive manual work.

## 🔗 Nodes Used

Google Sheets, Google Drive, Microsoft Outlook, Google Drive Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
