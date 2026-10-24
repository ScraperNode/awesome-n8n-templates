# 🧾 Classify invoices and route them to Google Drive folders with easybits and Slack

> ⚡ **11 views** · 🧾 [Invoice Processing](../)

## Description

## What This Workflow Does
Upload a document (PDF, PNG, JPEG) via a web form and let **easybits Extractor** classify it into one of your defined categories. Based on the classification result and a confidence score, the document is automatically sorted into the correct **Google Drive** folder. Low-confidence or unrecognized documents are flagged for manual review via **Slack**.

## How It Works
1. User uploads a file through the hosted web form
2. The binary file is converted to base64 and sent to easybits
3. easybits returns a **document_type** and **confidence_score**
4. The classification result is merged with the original file binary
5. If confidence &gt; 0.5 → routed to the matching Google Drive folder
6. If confidence ≤ 0.5 or no category match → uploaded to **Needs Review** folder + Slack alert

**Supported categories:**
`medical_invoice` · `restaurant_invoice` · `hotel_invoice` · `trades_invoice` · `telecom_invoice`

---

## Setup Guide

### 1. Set Up Your easybits Extractor Pipeline
1. Go to **extractor.easybits.tech** and create a new pipeline
2. Add two fields to the mapping: **document_class** and **confidence_score**
3. In each field's description, paste the corresponding classification or confidence prompt that tells the model how to analyze the document
4. The classification prompt should return exactly one category label – or `null` if uncertain
5. The confidence prompt should return a decimal number between 0.0 and 1.0
6. Save & test the pipeline, then copy your **Pipeline ID** and **API Key**

### 2. Set Up Google Drive
1. Create a folder in Google Drive for each category: **Medical**, **Restaurant**, **Hotel**, **Trades**, **Telecom**, and **Needs Review**
2. In n8n, go to **Settings → Credentials** and create a **Google Drive OAuth2** credential
3. This requires a **Client ID** and **Client Secret** from the Google Cloud Console (APIs & Services → Credentials → OAuth 2.0 Client ID)
4. Make sure the **Google Drive API** is enabled in your Google Cloud project
5. Open each of the 6 Google Drive upload nodes in this workflow and select the correct target folder

### 3. Set Up Slack
1. In n8n, go to **Settings → Credentials** and create a **Slack API** credential
2. You'll need a Slack Bot Token – create a Slack App at **api.slack.com/apps**, add the `chat:write` scope, and install it to your workspace
3. Create a channel for review notifications (e.g. `#n8n-invoice-review`)
4. Invite the bot to that channel
5. Open the **Review Message** node and select the correct channel

### 4. Connect the easybits Node
1. Open the **easybits Extractor (Classification)** node
2. Replace the pipeline URL with your own: `https://extractor.easybits.tech/api/pipelines/YOUR_PIPELINE_ID`
3. Create a **Bearer Auth** credential using your easybits API Key and assign it to the node

### 5. Activate & Test
1. Click **Active** in the top-right corner of n8n
2. Open the form URL and upload a test document
3. Check the execution log to verify the classification result
4. Confirm the file lands in the correct Google Drive folder
5. Test with an unrecognized document to verify the Slack notification fires

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
