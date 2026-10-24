# 🧾 Detect duplicate invoice PDFs from Gmail with easybits and Google Sheets

> ⚡ **51 views** · 🧾 [Invoice Processing](../)

## Description

## How It Works
This workflow automatically detects duplicate invoices from Gmail. Incoming PDF attachments are scanned by the easybits AI Extractor, then checked against the Master Finance File in Google Sheets. Duplicates trigger a Slack alert – new invoices get added to the sheet.

**Flow overview:**
1. Gmail picks up new emails labeled as invoices (polls every minute)
2. The PDF attachment is extracted and converted to base64
3. easybits Extractor reads the document and returns structured data
4. The invoice number is compared against all existing entries in Google Sheets
5. If duplicate → Slack DM alert to felix.sattler
6. If new → Invoice is appended to the Master Finance File

---

## Step-by-Step Setup Guide

### 1. Set Up Your easybits Extractor Pipeline
Before connecting this workflow, you need a configured extraction pipeline on easybits.

1. Go to [extractor.easybits.tech](https://extractor.easybits.tech) and click **"Create a Pipeline"**.
2. Fill in the **Pipeline Name** and **Description** – describe the type of document you're processing (e.g. "Invoice / Receipt").
3. Upload a **sample receipt or invoice** as your reference document.
4. Click **"Map Fields"** and define the following fields to extract:
   - `invoice_number` (String) – Unique identifier of the invoice, e.g. IN-2026-0022514
   - `total_amount` (Number) – Total amount due on the invoice, e.g. 149.99
5. Click **"Save & Test Pipeline"** in the Test tab to verify the extraction works correctly.
6. Go to **Pipeline Details → View Pipeline** and copy your **Pipeline ID** and **API Key**.

---

### 2. Connect the easybits Node in n8n
1. Open the **HTTP Request** node in the workflow.
2. Replace the Pipeline ID in the URL with your own.
3. Set up a **Bearer Auth** credential with your API Key.

&gt; The node sends the PDF to your pipeline and receives the extracted fields back under `json.data`.

---

### 3. Connect Gmail
1. Open the **Gmail Trigger** node.
2. Connect your Gmail account via OAuth2.
3. Create a label called **invoice** in Gmail (or use your preferred label).
4. Update the label filter in the node to match your label.
5. Make sure **Download Attachments** is enabled under Options.

&gt; The trigger polls every minute for new emails matching the label.

---

### 4. Connect Google Sheets
1. Open the **Check Google Sheets** and **Add to Master List** nodes.
2. Connect your Google Sheets account via OAuth2.
3. Select your target spreadsheet (Master Finance File) and sheet.
4. Make sure your sheet has at least these columns: **Invoice Number** and **Final Amount (EUR)**.

---

### 5. Connect Slack
1. Go to [api.slack.com/apps](https://api.slack.com/apps) and create a new Slack App.
2. Under **OAuth & Permissions**, add these Bot Token Scopes: `chat:write`, `chat:write.public`, `channels:read`, `groups:read`, `users:read`, `users.profile:read`.
3. Install the app to your workspace via **Settings → Install App**.
4. Copy the **Bot User OAuth Token** and add it as a **Slack API** credential in n8n.
5. Open the **Slack: Alert Finance** node and select the user or channel to receive duplicate alerts.

---

### 6. Activate the Workflow
1. Click the **"Active"** toggle in the top-right corner of n8n to enable the workflow.
2. Label an email with an invoice attachment as **invoice** in Gmail to test it end to end.
3. Check your Google Sheet – a new row with the invoice number and amount should appear.
4. Send the same invoice again – you should receive a Slack DM alerting you to the duplicate.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
