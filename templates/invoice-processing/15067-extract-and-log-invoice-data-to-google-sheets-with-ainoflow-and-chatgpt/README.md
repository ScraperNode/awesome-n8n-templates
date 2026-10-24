# 🧾 Extract and log invoice data to Google Sheets with Ainoflow and ChatGPT

> ⚡ **14 views** · 🧾 [Invoice Processing](../)

## Description

Every time a new invoice lands in your inbox, this workflow reads it, extracts all the relevant data using AI, and logs everything into a Google Sheets spreadsheet automatically. No copy-pasting, no forgotten invoices, no duplicate entries.

---

**Who is this for?**

Landlords, property managers, or small businesses that receive recurring rental invoices by email and want to keep a clean, structured record without doing it by hand.

---

**How it works**

The workflow runs automatically every X minutes or days, in the background or manually. When it detects a new invoice email, it extracts the attached document and converts it to text using the **Ainoflow** API (which offers 500 free monthly uses), maps all the key fields (landlord, tenant, property, amounts, invoice number, etc.) and saves them as a new row in your spreadsheet. Once done, it notifies you by email and moves the processed message out of your inbox.

The workflow comes with **OpenRouter** integrated so you can use AI at no cost, using free available models. You are free to switch to OpenAI instead if you prefer — both options are supported.

&gt; 💡 **Important:** For best results, you will need to manually map the invoice fields to match your specific invoice format. Taking a few minutes on this initial setup significantly improves the accuracy of the extraction.

---

**What you get**

- Automated invoice logging into Google Sheets
- AI-powered data extraction via Ainoflow: works with real invoice formats
- Duplicate detection to avoid saving the same invoice twice
- Email notifications for every processed invoice
- Automatic inbox organization after each successful run

---

**Error handling**

The workflow includes dedicated error outputs at every critical step. If something goes wrong — a failed conversion, a connection issue, or a usage limit — you will receive an email explaining what happened instead of the workflow failing silently.

---

&gt; **Note on costs:** This workflow uses third-party AI services (OpenAI or OpenRouter) whose pricing may vary over time. The Ainoflow API includes 500 free monthly uses, but additional charges will apply once that limit is exceeded. The total cost of the workflow may increase in future updates, depending on the models used.

---

The workflow includes documentation, basic support in case of implementation errors, and precise error handling.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Stop and Error, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
