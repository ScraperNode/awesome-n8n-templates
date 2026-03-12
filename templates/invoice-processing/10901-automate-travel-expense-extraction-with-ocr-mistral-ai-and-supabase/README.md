# 🧾 Automate travel expense extraction with OCR, Mistral AI and Supabase

> ⚡ **238 views** · 🧾 [Invoice Processing](../)

## Description

# Travel Reimbursement - OCR & Expense Extraction Workflow

## Overview
This is a lightweight n8n workflow that accepts chat input and uploaded receipts, runs OCR, stores parsed results in Supabase, and uses an AI agent to extract structured travel expense data and compute totals. Designed for zero retention operation and fast integration.

---

## Workflow Structure
- **Frontend:** Chat UI trigger that accepts text and file uploads.
- **Preprocessing:** Binary normalization + per-file OCR request.
- **Storage:** Store OCR-parsed blocks in Supabase `temp_table`.
- **Core AI:** Travel reimbursement agent that extracts fields, infers missing values, and calculates totals using the Calculator tool.
- **Output:** Agent responds to the chat with a concise expense summary and breakdowns.

---

## Chat Trigger (Frontend)
- **Trigger node:** `When chat message received`
  - `public: true`, `allowFileUploads: true`, sessionId used to tie uploads to the chat session.
  - Custom CSS + initial messages configured for user experience.

## Binary Presence Check
- **Node:** `CHECK IF BINARY FILE IS PRESENT OR NOT` (IF)
  - Checks whether incoming payload contains `files`.
  - If files present -&gt; route to `Split Out` -&gt; `NORMALIZE binary file` -&gt; `OCR (ANY OCR API)` -&gt; `STORE OCR OUTPUT` -&gt; `Merge`.
  - If no files -&gt; route directly to `Merge` -&gt; `Travel reimbursement agent`.

## Binary Normalization
- **Node:** `Split Out` and `NORMALIZE binary file` (Code)
  - `Split Out` extracts binary entries into a `data` field.
  - `NORMALIZE binary file` picks the first binary key and rewrites payload to `binary.data` for consistent downstream shape.

## OCR
- **Node:** `OCR (ANY OCR API )` (HTTP Request)
  - Sends multipart/form-data to OCR endpoint, expects JSONL or JSON with `blocks`.
  - Body includes `mode=single`, `output_type=jsonl`, `include_images=false`.

## Store OCR Output
- **Node:** `STORE OCR OUTPUT` (Supabase)
  - Upserts into `temp_table` with `session_id`, parsed `blocks`, and `file_name`.
  - Used by agent to fetch previously uploaded receipts for same session.

## Memory & Tooling
- **Nodes:** `Simple Memory` and `Simple Memory1` (memoryBufferWindow)
  - Keep last 10 messages for session context.
- **Node:** `Calculator1` (toolCalculator)
  - Used by agent to sum multiple charges, handle currency arithmetic and totals.

## Travel Reimbursement Agent (Core)
- **Node:** `Travel reimbursement agent` (LangChain agent)
  - **Model:** `Mistral Cloud Chat Model` (mistral-medium-latest)
  - **Behavior:**
    - Parse OCR `blocks` and non-file chat input.
    - Extract required fields: `vendor_name`, `category`, `invoice_date`, `checkin_date`, `checkout_date`, `time`, `currency`, `total_amount`, `notes`, `estimated`.
    - When fields are missing, infer logically and mark `estimated: true`.
    - Use Calculator tool to sum totals across multiple receipts.
    - Fetch stored OCR entries from Supabase when user asks for session summaries.
    - Always attempt extraction; never reply with "unclear" or ask for a reupload unless user requests audit-grade precision.
  - **Final output:** Clean expense table and Grand Total formatted for chat.

## Data Flow Summary
1. User sends chat message plus or minus file.
2. IF file present -&gt; Split Out -&gt; Normalize -&gt; OCR -&gt; Store OCR output -&gt; Merge with chat payload.
3. Travel reimbursement agent consumes merged item, extracts fields, uses Calculator tool for sums, and replies with a formatted expense summary.

---

## Integrations Used
| Service | Purpose | Credential |
|---------|---------|-----------|
| Mistral Cloud | LLM for agent | `Mistral  account ` |
| Supabase | Store parsed OCR blocks and session data | `Supabase account ` |
| OCR API | Text extraction from images/PDFs | Configurable HTTP endpoint |
| n8n Core | Flow control, parsing, editing | Native |

---

## Agent System Prompt Summary
&gt; You are a Travel Expense Extraction and Calculation AI. Extract vendor, dates, currency, category, and total amounts from uploaded receipts, invoices, hotel bills, PDFs, and images. Infer values when necessary and mark them as estimated. When asked, fetch session entries from Supabase and compute totals using the Calculator tool. Respond in a concise business professional format with a category wise breakdown and a Grand Total. Never reply "unclear" or ask for a reupload unless explicitly asked.

Required final response format example:


---

## Key Features
-  Zero retention friendly design: OCR output stored only to `temp_table` per session.
-  Robust extraction with inference when OCR quality is imperfect.
-  Session aware: agent retrieves stored receipts for consolidated totals.
- Calculator integration for accurate numeric sums and currency handling.
-  Configurable OCR endpoint so you can swap providers without changing logic.

---

## Setup Checklist
1. Add Mistral Cloud and Supabase credentials.
2. Configure OCR endpoint to accept multipart uploads and return `blocks`.
3. Create `temp_table` schema with `session_id`, `file`, `file_name`.
4. Test with single receipts, multipage PDFs, and mixed uploads.
5. Validate agent responses and Calculator totals.

---

## Summary
A practical n8n workflow for travel expense automation: accept receipts, run OCR, store parsed data per session, extract structured fields via an AI agent, compute totals, and return clean expense summaries in chat. Built for reliability and easy integration.

---

### Need Help or More Workflows?
We can integrate this into your environment, tune the agent prompt, or adapt it for different OCR providers.
 
 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)    
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)   
You can also DM us on LinkedIn for any help.

## 🔗 Nodes Used

HTTP Request, Supabase, AI Agent, Simple Memory, Calculator, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
