# 🔬 Extract structured data from D&B company reports with GPT-4o

> ⚡ **232 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Pull a **Dun & Bradstreet Business Information Report** (PDF) by DUNS, convert the response into a binary **PDF file**, extract readable text, and use **OpenAI** to return a **clean, flat JSON** with only the key fields you care about (e.g., report date, Paydex, viability score, credit limit). Includes Sticky Notes for quick setup help and guidance.

---

## ✅ What this template does
- **Requests a D&B report** (PDF) for a specific **DUNS** via HTTP  
- **Converts** the API response into a **binary PDF file**  
- **Extracts** the text from the PDF for analysis  
- Uses **OpenAI** with a **Structured Output Parser** to return a **flat JSON**  
- Designed to be extended to Sheets, databases, or CRMs

---

## 🧩 How it works (node-by-node)
1. **Manual Trigger** — Runs the workflow on demand ("When clicking 'Execute workflow'").
2. **D&B Report (HTTP Request)** — Calls the D&B Reports API for a Business Information Report (PDF).
3. **Convert to PDF File (Convert to File)** — Turns the D&B response payload into a binary **PDF**.
4. **Extract Binary (Extract from File)** — Extracts text content from the PDF.
5. **OpenAI Chat Model** — Provides the language model context for the analyzer.
6. **Analyze PDF (AI Agent)** — Reads the extracted text and applies strict rules for a flat JSON output.
7. **Structured Output (AI Structured Output Parser)** — Enforces a schema and validates/auto-fixes the JSON shape.
8. *(Optional)* **Get Bearer Token (HTTP Request)** — Template guidance for OAuth token retrieval (shown as disabled; included for reference if you prefer Bearer flows).

---

## 🛠️ Setup instructions (from the JSON)

### 1) D&B Report (HTTP Request)
- **Auth:** Header Auth (use an n8n **HTTP Header Auth** credential)  
- **URL:**  
https://plus.dnb.com/v1/reports/duns/804735132?productId=birstd&inLanguage=en-US&reportFormat=PDF&orderReason=6332&tradeUp=hq&customerReference=customer%20reference%20text

- **Headers:**
  - `Accept: application/json`
- **Credential Example:** `D&B` (HTTP Header Auth)  
  &gt; Put your `Authorization: Bearer &lt;token&gt;` header inside this credential, not directly in the node.

### 2) Convert to PDF File (Convert to File)
- **Operation:** `toBinary`  
- **Source Property:** `contents[0].contentObject`  
  &gt; This takes the PDF content from the D&B API response and converts it to a binary file for downstream nodes.

### 3) Extract Binary (Extract from File)
- **Operation:** `pdf`  
  &gt; Produces a `text` field with the extracted PDF content, ready for AI analysis.

### 4) OpenAI Model(s)
- **OpenAI Chat Model**  
- **Model:** `gpt-4o` (as configured in the JSON)  
- **Credential:** Your stored **OpenAI API** credential (do **not** hardcode keys)
- **Wiring:**  
  - Connect **OpenAI Chat Model** as `ai_languageModel` to **Analyze PDF**  
  - Connect another **OpenAI Chat Model** (also `gpt-4o`) as `ai_languageModel` to **Structured Output**

### 5) Analyze PDF (AI Agent)
- **Prompt Type:** `define`  
- **Text:**  
  `={{ $json.text }}`
- **System Message (rules):**  
  - You are a precision extractor. Read the provided business report PDF and return only a single flat JSON object with the fields below.  
  - No arrays/lists.  
  - No prose.  
  - If a value is missing, output null.  
  - Dates: `YYYY-MM-DD`.  
  - Numbers: plain numerics (no commas or $).  
  - Prefer most recent or highest-level overall values if multiple are shown.  
  - Never include arrays, nested structures, or text outside of the JSON object.

### 6) Structured Output (AI Structured Output Parser)
- **JSON Schema Example:**
```json
{
  "report_date": "",
  "company_name": "",
  "duns": "",
  "dnb_rating_overall": "",
  "composite_credit_appraisal": "",
  "viability_score": "",
  "portfolio_comparison_score": "",
  "paydex_3mo": "",
  "paydex_24mo": "",
  "credit_limit_conservative": ""
}
```
- **Auto Fix:** enabled
- **Wiring:** Connect as `ai_outputParser` to **Analyze PDF**

### 7) (Optional) Get Bearer Token (HTTP Request) — Disabled example
If you prefer fetching tokens dynamically:
- **Auth:** Basic Auth (D&B username/password)
- **Method:** POST
- **URL:** https://plus.dnb.com/v3/token
- **Body Parameters:**
  - `grant_type = client_credentials`
- **Headers:**
  - `Accept: application/json`
- **Downstream usage:** Set header `Authorization: Bearer {{$json["access_token"]}}` in subsequent calls.

&gt; In this template, the D&B Report node uses Header Auth credential instead. Use one strategy consistently (credentials are recommended for security).

---

## 🧠 Output schema (flat JSON)
The analyzer + parser return a single flat object like:

```json
{
  "report_date": "2024-12-31",
  "company_name": "Example Corp",
  "duns": "123456789",
  "dnb_rating_overall": "5A2",
  "composite_credit_appraisal": "Fair",
  "viability_score": "3",
  "portfolio_comparison_score": "2",
  "paydex_3mo": "80",
  "paydex_24mo": "78",
  "credit_limit_conservative": "25000"
}
```

---

## 🧪 Test flow
1. Click **Execute workflow** (Manual Trigger).
2. Confirm **D&B Report** returns the PDF response.
3. Check **Convert to PDF File** for a binary file.
4. Verify **Extract from File** produces a `text` field.
5. Inspect **Analyze PDF** → **Structured Output** for valid JSON.

---

## 🔐 Security notes
- Do not hardcode tokens in nodes; use **Credentials** (HTTP Header Auth or Basic Auth).
- Restrict who can execute the workflow if it's accessible from outside your network.
- Avoid storing sensitive payloads in logs; mask tokens/headers.

---

## 🧩 Customize
- Map the structured JSON to **Google Sheets**, **Postgres/BigQuery**, or a **CRM**.
- Extend the schema with additional fields (e.g., number of employees, HQ address) — keep it **flat**.
- Add validation (**Set/IF** nodes) to ensure required fields exist before writing downstream.

---

## 🩹 Troubleshooting
- **Missing PDF text?** Ensure **Convert to File** source property is `contents[0].contentObject`.
- **Unauthorized from D&B?** Refresh/verify token; confirm Header Auth credential contains `Authorization: Bearer &lt;token&gt;`.
- **Parser errors?** Keep the agent output short and flat; the Structured Output node will auto-fix minor issues.
- **Different DUNS/product?** Update the D&B Report URL query params (`duns`, `productId`, etc.).

---

## 🗒️ Sticky Notes (included)
- **Overview:** "Fetch D&B Company Report (PDF) → Convert → Extract → Summarize to Structured JSON (n8n)"
- Setup snippets for Data Blocks (optional) and Auth flow

---

## 📬 Contact
Need help customizing this (e.g., routing the PDF to Drive, mapping JSON to your CRM, or expanding the schema)?

📧 robert@ynteractive.com  
🔗 https://www.linkedin.com/in/robert-breen-29429625/  
🌐 https://ynteractive.com

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
