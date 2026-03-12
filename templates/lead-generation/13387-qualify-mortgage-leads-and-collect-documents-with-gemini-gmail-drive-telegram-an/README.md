# 🎣 Qualify mortgage leads and collect documents with Gemini, Gmail, Drive, Telegram, and Supabase

> ⚡ **23 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow serves as a complete "AI Receptionist" for mortgage brokers or high-ticket service providers. It automates the messy process of qualifying leads, getting internal approval, and collecting sensitive client documents securely.

The workflow is fully annotated with **Sticky Notes** to help you understand every step of the logic.

## Key Features
* **Smart Qualification:** automatically filters leads based on income thresholds (e.g., &gt;$80k) before they reach your inbox.
* **Human-in-the-Loop:** Uses Telegram buttons to ask the broker for "Approve/Decline" confirmation before generating client emails.
* **Generative AI:** Uses **Google Gemini (2.5-flash-lite)** to write personalized, warm welcome emails based on the lead's specific loan type.
* **Google Workspace Automation:** Automatically creates a unique Google Drive folder for the client and drafts the email in Gmail (with the upload link pre-inserted).
* **Document Collection Portal:** Includes a validation loop that checks if the client uploaded all required files (ID, Payslip, Bank Statements) and notifies the broker of success or failure.
* **Database Logging:** Keeps a "Source of Truth" log in Supabase for every lead action.

## Prerequisites
To use this template, you will need credentials for:
1.  **Google Cloud Console:** Enable APIs for Drive, Gmail, and Gemini (PaLM).
2.  **Telegram:** A Bot Token and Chat ID for notifications.
3.  **Supabase:** A project URL and API Key (Database schema provided in the Sticky Notes).

## How to Configure
1.  **Credentials:** Set up your Google, Telegram, and Supabase credentials in n8n.
2.  **Supabase Table:** Create a table named `leads_consolidated` (schema details are in the workflow notes).
3.  **Triggers:** Ensure your n8n instance is publicly accessible so the Webhook and Form triggers function correctly.
4.  **Telegram ID:** Update the `Chat ID` fields in the Telegram nodes to your own ID.

This template is designed to be modular—you can easily swap Supabase for Airtable or Gemini for OpenAI if preferred.

## 🔗 Nodes Used

Telegram, Google Drive, Gmail, Supabase, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
