# 🧾 Automate invoice processing with OCR, GPT-4 & Salesforce opportunity creation

> ⚡ **1,347 views** · 🧾 [Invoice Processing](../)

## Description

# PDF Invoice Extractor (AI)

End-to-end pipeline: Watch Drive ➜ Download PDF ➜ OCR text ➜ AI normalize to JSON ➜ Upsert Buyer (Account) ➜ Create Opportunity ➜ Map Products ➜ Create OLI via Composite API ➜ Archive to OneDrive.

---

## Node by node (what it does & key setup)

### 1) Google Drive Trigger
- **Purpose**: Fire when a new file appears in a specific Google Drive folder.
- **Key settings**:
  - Event: `fileCreated`
  - Folder ID: `google drive folder id`
  - Polling: `everyMinute`
  - Creds: `googleDriveOAuth2Api`
- **Output**: Metadata `{ id, name, ... }` for the new file.

---

### 2) Download File From Google
- **Purpose**: Get the file binary for processing and archiving.
- **Key settings**:
  - Operation: `download`
  - File ID: `={{ $json.id }}`
  - Creds: `googleDriveOAuth2Api`
- **Output**: Binary (default key: `data`) and original metadata.

---

### 3) Extract from File
- **Purpose**: Extract text from PDF (OCR as needed) for AI parsing.
- **Key settings**:
  - Operation: `pdf`
  - OCR: enable for scanned PDFs (in **options**)
- **Output**: JSON with OCR text at `{{ $json.text }}`.

---

### 4) Message a model (AI JSON Extractor)
- **Purpose**: Convert OCR text into **strict normalized JSON array** (invoice schema).
- **Key settings**:
  - Node: `@n8n/n8n-nodes-langchain.openAi`
  - Model: `gpt-4.1` (or `gpt-4.1-mini`)
  - Message role: **system** (the strict prompt; references `{{ $json.text }}`)
  - `jsonOutput`: `true`
  - Creds: `openAiApi`
- **Output (per item)**: `$.message.content` → the parsed **JSON** (ensure it’s an array).

---

### 5) Create or update an account (Salesforce)
- **Purpose**: Upsert **Buyer** as Account using an external ID.
- **Key settings**:
  - Resource: `account`
  - Operation: `upsert`
  - External Id Field: `tax_id__c`
  - External Id Value: `={{ $json.message.content.buyer.tax_id }}`
  - Name: `={{ $json.message.content.buyer.name }}`
  - Creds: `salesforceOAuth2Api`
- **Output**: Account record (captures `Id`) for downstream **Opportunity**.

---

### 6) Create an opportunity (Salesforce)
- **Purpose**: Create Opportunity linked to the Buyer (Account).
- **Key settings**:
  - Resource: `opportunity`
  - Name: `={{ $('Message a model').item.json.message.content.invoice.code }}`
  - Close Date: `={{ $('Message a model').item.json.message.content.invoice.issue_date }}`
  - Stage: `Closed Won`
  - Amount: `={{ $('Message a model').item.json.message.content.summary.grand_total }}`
  - AccountId: `={{ $json.id }}` (from **Upsert Account** output)
  - Creds: `salesforceOAuth2Api`
- **Output**: Opportunity `Id` for OLI creation.

---

### 7) Build SOQL (Code / JS)
- **Purpose**: Collect unique product **codes** from AI JSON and build a SOQL query for **PricebookEntry** by `Pricebook2Id`.
- **Key settings**:
  - `pricebook2Id` (hardcoded in script): e.g., `01sxxxxxxxxxxxxxxx`
  - Source lines: `$('Message a model').first().json.message.content.products`
- **Output**: `{ soql, codes }`

---

### 8) Query PricebookEntries (Salesforce)
- **Purpose**: Fetch `PricebookEntry.Id` for each `Product2.ProductCode`.
- **Key settings**:
  - Resource: `search`
  - Query: `={{ $json.soql }}`
  - Creds: `salesforceOAuth2Api`
- **Output**: Items with `Id`, `Product2.ProductCode` (used for mapping).

---

### 9) Code in JavaScript (Build OLI payloads)
- **Purpose**: Join lines with PBE results and Opportunity `Id` ➜ build **OpportunityLineItem** payloads.
- **Inputs**:
  - OpportunityId: `={{ $('Create an opportunity').first().json.id }}`
  - Lines: `={{ $('Message a model').first().json.message.content.products }}`
  - PBE rows: from previous node items
- **Output**: `{ body: { allOrNone:false, records:[{ OpportunityLineItem... }] } }`
- **Notes**:
  - Converts discount_total ➜ per-unit if needed (currently commented for standard pricing).
  - Throws on missing PBE mapping or empty lines.

---

### 10) Create Opportunity Line Items (HTTP Request)
- **Purpose**: Bulk create OLIs via Salesforce Composite API.
- **Key settings**:
  - Method: `POST`
  - URL: `https://&lt;your-instance&gt;.my.salesforce.com/services/data/v65.0/composite/sobjects`
  - Auth: `salesforceOAuth2Api` (predefined credential)
  - Body (JSON): `={{ $json.body }}`
- **Output**: Composite API results (per-record statuses).

---

### 11) Update File to One Drive
- **Purpose**: Archive the **original** PDF in OneDrive.
- **Key settings**:
  - Operation: `upload`
  - File Name: `={{ $json.name }}`
  - Parent Folder ID: `onedrive folder id`
  - Binary Data: `true` (from the Download node)
  - Creds: `microsoftOneDriveOAuth2Api`
- **Output**: Uploaded file metadata.

---

## Data flow (wiring)

1. **Google Drive Trigger** → **Download File From Google**
2. **Download File From Google**
   - → **Extract from File**
   - → **Update File to One Drive**
3. **Extract from File** → **Message a model**
4. **Message a model**
   - → **Create or update an account**
5. **Create or update an account** → **Create an opportunity**
6. **Create an opportunity** → **Build SOQL**
7. **Build SOQL** → **Query PricebookEntries**
8. **Query PricebookEntries** → **Code in JavaScript**
9. **Code in JavaScript** → **Create Opportunity Line Items**

---

## Quick setup checklist

- 🔐 **Credentials**: Connect Google Drive, OneDrive, Salesforce, OpenAI.
- 📂 **IDs**:
  - Drive Folder ID (watch)
  - OneDrive Parent Folder ID (archive)
  - Salesforce **Pricebook2Id** (in the JS SOQL builder)
- 🧠 **AI Prompt**: Use the strict system prompt; **jsonOutput = true**.
- 🧾 **Field mappings**:
  - Buyer tax id/name → Account upsert fields
  - Invoice code/date/amount → Opportunity fields
  - Product `name` must equal your **Product2.ProductCode** in SF.
- ✅ **Test**: Drop a sample PDF → verify:
  - AI returns **array JSON** only
  - Account/Opportunity created
  - OLI records created
  - PDF archived to OneDrive

---

## Notes & best practices

- If PDFs are scans, enable OCR in **Extract from File**.
- If AI returns non-JSON, keep “**Return only a JSON array**” as the last line of the prompt and keep `jsonOutput` enabled.
- Consider adding validation on `parsing.warnings` to gate Salesforce writes.
- For discounts/taxes in OLI:
  - Standard OLI fields don’t support per-line discount amounts directly; model them in **UnitPrice** or custom fields.
- Replace the Composite API **URL** with your org’s domain or use the Salesforce node’s **Bulk Upsert** for simplicity.

## 🔗 Nodes Used

HTTP Request, Google Drive, Microsoft OneDrive, Salesforce, Google Drive Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
