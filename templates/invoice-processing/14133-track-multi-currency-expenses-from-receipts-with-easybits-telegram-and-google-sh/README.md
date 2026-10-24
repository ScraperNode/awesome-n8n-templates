# 🧾 Track multi-currency expenses from receipts with easybits, Telegram, and Google Sheets

> ⚡ **91 views** · 🧾 [Invoice Processing](../)

## Description

## How It Works

This workflow automates multi-currency expense tracking via Telegram. Send a receipt photo to your bot, and it automatically extracts the invoice details, converts the amount to EUR using a live exchange rate, and logs everything straight into Google Sheets.

**Flow overview:**
1. User sends a receipt photo via Telegram
2. easybits Extractor reads the document and returns structured data
3. The data is normalised and cleaned
4. The exchange rate is fetched (with fallback if needed)
5. The amount is converted to EUR
6. The result is appended to Google Sheets

---

## Step-by-Step Setup Guide

### 1. Set Up Your easybits Extractor Pipeline

Before connecting this workflow, you need a configured extraction pipeline on easybits.

1. Go to [extractor.easybits.tech](https://extractor.easybits.tech) and click **"Create a Pipeline"**.
2. Fill in the **Pipeline Name** and **Description** – describe the type of document you're processing (e.g. "Invoice / Receipt").
3. Upload a **sample receipt or invoice** as your reference document.
4. Click **"Map Fields"** and define the following fields to extract:

   - **`invoice_number`** (String) – The unique identifier of the invoice, e.g. `INV-20240301`
   - **`currency`** (String) – The currency code found on the invoice, e.g. `USD`
   - **`amount`** (Number) – The total amount due on the invoice, e.g. `149.99`

5. Click **"Save & Test Pipeline"** in the Test tab to verify the extraction works correctly.

---

### 2. Connect the easybits Node in n8n

1. Once you have finalized your pipeline, go back to your dashboard and click **Pipelines** in the left sidebar.
2. Click **"View Pipeline"** on the pipeline you want to connect.
3. On the Pipeline Details page, you will find:
   - **API URL:** `https://extractor.easybits.tech/api/pipelines/[YOUR_PIPELINE_ID]`
   - **API Key:** Your unique authentication token
4. Copy both values and integrate them into the **"easybits Extractor"** HTTP Request node in the workflow.

&gt; **To keep in mind:** Each pipeline has its own API Key and Pipeline ID. If you have multiple pipelines (for example, one for receipts and one for invoices), you will need separate credentials for each.

&gt; **Important:** When adding your API Key, set the **Credential Type** to **Bearer Auth** and paste your API Key as the **Bearer Token** value.

---

### 3. Connect Your Telegram Bot

1. Open the **Telegram: Receipt Photo** node.
2. Connect your Telegram Bot credentials (Bot Token from [@BotFather](https://t.me/BotFather)).
3. Make sure **"Download"** is enabled under Additional Fields so the image binary is forwarded correctly.

---

### 4. Connect Google Sheets

1. Open the **Append row in sheet** node.
2. Connect your Google Sheets account via OAuth2.
3. Select your target spreadsheet and sheet.
4. Make sure your sheet has at least these two columns: **Vendor Name** and **Overall Due**.

---

### 5. Activate the Workflow

1. Click the **"Active"** toggle in the top-right corner of n8n to enable the workflow.
2. Send a receipt photo to your Telegram bot to test it end to end.
3. Check your Google Sheet – a new row with the invoice reference and EUR amount should appear.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
