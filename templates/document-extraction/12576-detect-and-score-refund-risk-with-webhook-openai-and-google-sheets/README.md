# 🔬 Detect and score refund risk with Webhook, OpenAI and Google Sheets

> ⚡ **32 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works  
This workflow automatically evaluates refund and chargeback risk for incoming e-commerce orders. Orders are received via a webhook, processed individually, and checked to avoid duplicate analysis. Each transaction is normalized and sent to OpenAI for structured risk scoring and classification. Results are logged for auditing, alerts are triggered for high-risk cases, and processed orders are marked to prevent reprocessing.

## Step-by-step  
- **Step 1 – Ingest incoming orders**  
  - **Webhook** – Receives single or bulk order payloads from external systems.  
  - **Split Out** – Breaks array-based payloads into individual order records.  
  - **Split In Batches** – Iterates through each order in a controlled loop.

- **Step 2 – Deduplication check**  
  - **IF (DEDUPE CHECK)** – Verifies whether an order was already processed and skips duplicates.

- **Step 3 – Normalize transaction data**  
  - **Code (Normalize Data)** – Validates required fields and standardizes order, customer, and behavioral attributes.

- **Step 4 – AI risk assessment**  
  - **OpenAI (Message a model)** – Sends normalized transaction data to the AI model and requests a strict JSON risk evaluation.

- **Step 5 – Parse AI output**  
  - **Code (Parse AI Output)** – Cleans the AI response and extracts risk score, risk level, key drivers, and recommendations.

- **Step 6 – Log results**  
  - **Google Sheets (Append)** – Stores timestamps, order details, and AI risk outcomes for reporting and audits.

- **Step 7 – Risk decision and alerts**  
  - **IF (High Risk)** – Filters only transactions classified as HIGH risk.  
  - **Discord** – Sends real-time alerts to operations or finance teams.  
  - **Gmail** – Emails finance stakeholders with full risk context.

- **Step 8 – Mark order as processed**  
  - **Google Sheets (Update)** – Updates the source row to prevent duplicate processing.

## Why use this?  
- Automatically detects high refund or chargeback risk before losses occur.  
- Eliminates manual review with consistent, AI-driven risk scoring.  
- Sends instant alerts so teams can act quickly on high-risk orders.  
- Maintains a clear audit trail for compliance and reporting.  
- Scales easily to handle single or bulk order evaluations.

## 🔗 Nodes Used

Google Sheets, Webhook, Discord, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
