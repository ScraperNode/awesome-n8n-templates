# 🎣 Enrich Google Sheets with Dun & Bradstreet data blocks

> ⚡ **211 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Automate company enrichment directly in **Google Sheets** using **Dun & Bradstreet (D&B) Data Blocks**. This workflow reads DUNS numbers from a sheet, fetches a **Bearer token** (via Basic Auth → `/v3/token`), calls the **Data Blocks API** for each row (`/v1/data/duns/...`), extracts **Paydex**, and **appends or updates** the sheet. A **Filter** node skips rows already marked `Complete` for efficient, idempotent runs.

---

## ✅ What this template does
- Pulls **DUNS** values from a Google Sheet
- (Option A) Uses an **HTTP Header Auth** credential for D&B, or  
  (Option B) Dynamically fetches a **Bearer token** from `/v3/token` (Basic Auth)
- Calls **D&B Data Blocks** per row to retrieve payment insights
- Extracts **Paydex** and **upserts** results back to the sheet
- Skips rows already **Complete**

---

## 👤 Who's it for
- RevOps/Data teams enriching company lists at scale  
- SDR/Marketing teams validating firmographic/credit signals  
- BI/Automation builders who want a **no-code/low-code** enrichment loop

---

## 🧩 How it works (node-by-node)
1. **Get Companies (Google Sheets)** – Reads rows with at least `duns`, `paydex`, `Complete`.  
2. **Only New Rows (Filter)** – Passes only rows where `Complete` is empty.  
3. **D&B Info (HTTP Request)** – Calls Data Blocks for each DUNS using a header credential (`Authorization: Bearer &lt;token&gt;`).  
4. **Keep Score (Set)** – Maps nested JSON to a single **Paydex** field:  
   `{{$json.organization.businessTrading[0].summary[0].paydexScoreHistory[0].paydexScore}}`
5. **Append to g-sheets (Google Sheets)** – **Append or Update** by `duns`, writing `paydex` and setting `Complete = Yes`.

&gt; The workflow also includes Sticky Notes with in-canvas setup help.

---

## 🛠️ Setup instructions (from the JSON)

### 1) Connect Google Sheets (OAuth2)
1. In **n8n → Credentials → New → Google Sheets (OAuth2)** and sign in.  
2. Use/prepare a sheet with columns like: **duns**, **paydex**, **Complete**.  
3. In your **Google Sheets** nodes, select your credential and target spreadsheet/tab.  
4. For upsert behavior, set **Operation** to **Append or Update** and **Matching column** to `duns`.

&gt; Replace any example Sheet IDs/URLs with **your own** (avoid publishing private IDs).

---

### 2) Get a D&B Bearer Token (Basic Auth → `/v3/token`) — Optional Dynamic Token Node
1. Add/enable **HTTP Request** node named `Get Bearer Token1`.  
2. Configure:  
   - **Authentication:** Basic Auth (your D&B **username**/**password**)  
   - **Method:** `POST`  
   - **URL:** `https://plus.dnb.com/v3/token`  
   - **Body Parameters:** `grant_type = client_credentials`  
   - **Headers:** `Accept = application/json`  
3. Execute to receive `access_token`.  
4. Reference the token in other nodes via:  
   `Authorization: Bearer {{$node["Get Bearer Token1"].json["access_token"]}}`

&gt; ⚠️ **Security:** Don't hardcode tokens. Prefer credentials or fetch dynamically.

---

### 3) Call D&B Data Blocks (use Header Auth or dynamic token)
**Node:** `D&B Info` (HTTP Request)  
- **Authentication:** Header Auth (recommended)  
- **URL:**
  ```
  https://plus.dnb.com/v1/data/duns/{{ $json.duns }}?blockIDs=paymentinsight_L4_v1&tradeUp=hq&customerReference=customer%20reference%20text&orderReason=6332
  ```
- **Headers:**  
  - `Accept = application/json`  
  - If not using a stored Header Auth credential, set:  
    `Authorization = Bearer {{$node["Get Bearer Token1"].json["access_token"]}}`

&gt; `{{ $json.duns }}` is resolved from the current row provided by **Get Companies**.

---

### 4) Map Paydex and Upsert to Google Sheets
- **Keep Score (Set)**  
  - Field **`Paydex`** (Number):  
    ```
    {{$json.organization.businessTrading[0].summary[0].paydexScoreHistory[0].paydexScore}}
    ```
- **Append to g-sheets (Google Sheets)**  
  - **Operation:** `Append or Update`  
  - **Matching column:** `duns`  
  - **Columns mapping:**  
    - `duns = {{ $('Get Companies').item.json.duns }}`  
    - `paydex = {{ $json.Paydex }}`  
    - `Complete = Yes`

---

## 🧪 Test checklist
- Add a few test DUNS rows (leave `Complete` blank).  
- Run the workflow and confirm **Only New Rows** passes expected items.  
- Check **D&B Info** returns payment insight data.  
- Confirm **Paydex** is set and the row is updated with `Complete = Yes`.

---

## 🔐 Security & best practices
- Store secrets in **Credentials** (HTTP Header Auth/Basic Auth).  
- Avoid publishing real Sheet IDs or tokens in screenshots/notes.  
- Consider rate limits and backoff for large sheets.  
- Log/handle API errors (e.g., invalid DUNS or expired tokens).

---

## 🩹 Troubleshooting
- **401/403 from D&B:** Verify credentials/token; ensure correct environment and entitlements.  
- **Missing Paydex path:** D&B responses vary by subscription/data availability—add guards (IF node) before mapping.  
- **Rows not updating:** Confirm **Append or Update** is used and **Matching column** exactly matches your sheet header `duns`.  
- **Filtered out rows:** Ensure `Complete` is truly empty (no spaces) for new items.

---

## 🧯 Customize further
- Enrich additional fields (e.g., **viability score**, **portfolio comparison**, **credit limits**).  
- Add retry logic, batching, or scheduled triggers.  
- Push results to a **CRM/DB** or notify teams via **Slack/Email**.

---

## 📬 Contact  
Need help customizing this (e.g., enriching more fields, normalizing responses, or bulk-processing large sheets)?

- 📧 **robert@ynteractive.com**  
- 🔗 **https://www.linkedin.com/in/robert-breen-29429625/**  
- 🌐 **https://ynteractive.com**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
