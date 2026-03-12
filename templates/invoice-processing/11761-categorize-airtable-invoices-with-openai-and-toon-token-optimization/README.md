# 🧾 Categorize Airtable invoices with OpenAI and TOON token optimization

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

&gt; ⚠️ **Notice:**  
&gt; This workflow uses the **CustomJS JSON to TOON node** from [CustomJS](https://www.customjs.space/integration/n8n/json-toon-converter), which requires a self-hosted n8n instance and a CustomJS API key.

---
![Categorizing Invoices With TOON.png](fileId:4012)

This workflow demonstrates how to **automatically categorize invoices from Airtable using OpenAI**, while **significantly reducing token usage** by converting structured data into **TOON (Token-Optimized Object Notation)** before sending it to the LLM.

Instead of passing large, nested JSON payloads (clients, invoices, invoice items) directly to OpenAI, the workflow converts the data into TOON, lets the AI focus purely on **semantic classification**, and then converts the result back into clean JSON that can safely be written back to Airtable.

The result is a **reliable, cost-efficient, and production-ready invoice categorization pipeline**.

---

## Why This Workflow?

Categorizing invoices based on free-text invoice items is a perfect AI use case — but sending raw JSON to LLMs is:

- expensive  
- slow  
- error-prone (broken JSON, hallucinated fields)

This workflow applies the **TOON pattern**, reducing token usage by **40–60%**, while ensuring the AI only returns **exactly the data you expect**.

The LLM never sees raw JSON syntax — only a compact, schema-preserving representation.

---

## What This Workflow Does

- Fetches **Invoices**, **Invoice Items**, and **Clients** from Airtable  
- Aggregates invoice items per invoice  
- Converts the structured data into **TOON**  
- Uses OpenAI to **assign exactly one category per invoice**  
- Converts the AI result back into JSON  
- Writes the category back to Airtable  

All without manual intervention.

---

## Key Features

- **AI-based Invoice Categorization**  
  Automatically classify invoices (e.g. `web_development`, `system_administration`)

- **TOON Token Optimization**  
  Reduce OpenAI token usage by **40–60%**

- **Schema Safety**  
  AI never breaks your JSON structure

- **Deterministic Output**  
  One category per invoice, enforced by prompt design

- **Airtable-Native**  
  Reads from and writes directly back to Airtable

---

## How It Works

1. **Manual Trigger**  
   Run the workflow on demand

2. **Load Data from Airtable**  
   - Fetch ready invoices  
   - Resolve related clients  
   - Fetch and aggregate invoice items  

3. **Prepare Structured Context**  
   Group client, invoice, and invoice items into a single object

4. **JSON → TOON**  
   Convert structured data into token-efficient TOON

5. **AI Categorization**  
   - OpenAI receives TOON data  
   - Assigns exactly one category per invoice  
   - Returns only TOON (no JSON, no prose)

6. **TOON → JSON**  
   Convert AI output back into valid JSON

7. **Persist Result**  
   Update the invoice category field in Airtable

## 🔗 Nodes Used

Airtable, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
