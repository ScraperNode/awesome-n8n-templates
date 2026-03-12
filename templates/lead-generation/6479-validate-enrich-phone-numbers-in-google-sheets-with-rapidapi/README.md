# 🎣 Validate & enrich phone numbers in Google Sheets with RapidAPI

> ⚡ **259 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### 📞 Phone Number Validator with Google Sheets 

Validate and enrich phone numbers from Google Sheets using the [`phone number validator`](https://rapidapi.com/skdeveloper/api/phone-number-validator11) API.

---

## 📌 Use Case: Contact Validation & Enrichment  
Automatically check if phone numbers are valid and enrich them with metadata (country, location, timezone). Ideal for CRMs, lead management, and contact cleanup workflows.

---

## 🗂️ Google Sheets Columns

| Column Name | Description |
|-------------|-------------|
| `phone`     | The original phone number to validate (input column). |
| `is_valid`  | Result from API indicating if the phone number is valid (`true` / `false`). |
| `country`   | Country where the phone number is registered (e.g. "US"). |
| `location`  | More specific location info, such as city or region. |
| `timezone`  | The primary timezone associated with the phone number. |

---

## 🎯 Benefits

- ✅ **Accurate Contact Data** – Identify invalid or fake phone numbers automatically.
- 🌐 **Geolocation Enrichment** – Add country, location, and timezone for better segmentation.
- 🔁 **Full Automation** – No manual lookups or copying data between tools.
- 📊 **Live Google Sheets Sync** – Enriched data is updated directly into your spreadsheet.

---

## 🧠 Workflow Nodes Explained

| Node | Purpose |
|------|---------|
| **🟢 Manual Trigger** | Starts the workflow manually from n8n. |
| **📄 Google Sheets (Read)** | Fetches phone numbers from your spreadsheet using a Service Account. |
| **🔁 Split In Batches** | Loops over each row one at a time to handle individual API requests. |
| **🌐 HTTP Request** | Sends phone number to [`phone number validator`](https://rapidapi.com/skdeveloper/api/phone-number-validator11) via RapidAPI and receives validation + metadata. |
| **📥 Google Sheets (Update)** | Writes the response back into the matching row using the `phone` field. |

---

## 🛰️ API Used: `phone number validator`

We use the [`phone number validator`](https://rapidapi.com/skdeveloper/api/phone-number-validator11) API from RapidAPI to:
- Validate phone numbers (real or fake?)
- Identify the **country**, **location**, and **timezone**

&gt; It’s fast, reliable, and great for cleaning large datasets or qualifying leads before outreach.

---

## 🧰 Prerequisites

- 📄 A Google Sheet with a column named `phone`
- 🔐 RapidAPI key with access to `phone number validator`
- 🔧 Google Service Account credentials set up in n8n

---

## 🚀 How to Use

1. 🔗 Link your Google Sheet and configure authentication
2. 🔑 Add your RapidAPI key in the HTTP node headers
3. ▶️ Click "Execute Workflow"
4. 🧠 Each phone number is validated and enriched
5. 📊 Results are written back to your Google Sheet

---

## 📎 Tags
`phone validation`, `rapidapi`, `google sheets`, `data enrichment`, `phone number validator`, `crm automation`, `lead cleaning`, `timezone lookup`

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
