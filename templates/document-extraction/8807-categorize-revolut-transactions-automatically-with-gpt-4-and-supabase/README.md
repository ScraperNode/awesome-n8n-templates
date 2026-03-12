# 🔬 Categorize Revolut transactions automatically with GPT-4 and Supabase

> ⚡ **291 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Revolut Extracts Analyzer

### This n8n template processes Revolut statements, normalizes transactions, and uses AI to categorize expenses automatically.
### Use cases include detecting subscriptions, separating internal transfers, and building dashboards to track spending.
---

## How it works
* **Get Categories from Supabase**
* **Download & Transform**
* **Loop Over Items**
* **LLM Categorizer**  
* **Insert into Supabase**

---

## How to use
* Start with the **manual trigger node** or replace it with a schedule/webhook.  
* Connect **Google Drive** to provide Revolut CSV files.  
* Ensure **Supabase** has tables for `transactions` and `categories`.  
* Extend with notifications, reports, or BI tools.  

---

## Requirements
* Google Drive for CSV files  
* Supabase tables for categories & transactions  
* LLM provider (OpenAI/Gemini)

## 🔗 Nodes Used

Google Drive, Supabase, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
