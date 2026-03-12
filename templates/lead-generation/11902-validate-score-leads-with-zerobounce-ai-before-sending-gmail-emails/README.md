# 🎣 Validate & score leads with ZeroBounce AI before sending Gmail emails

> ⚡ **100 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## ZeroBounce Email Validation, A.I Scoring & Sending with Gmail
![ZeroBounce Logo](https://raw.githubusercontent.com/zerobounce/n8n-nodes-zerobounce/main/icons/zb-logo-purple.svg)


This workflow automates the process of validating, scoring, and emailing leads from a Google Sheet. It ensures you only send emails to high-quality contacts, protecting your sender reputation.



### 🚀 How it Works
1.  **Trigger:** Watches a Google Sheet for new or updated rows (contacts).
2.  **Validate:** Uses **ZeroBounce** to check if the email address is valid.
    * *If Invalid:* Updates the sheet with the reason and marks "Emailed" as `false`.
3.  **Score:** If valid, uses **ZeroBounce A.I. Scoring** to grade the lead quality (0-10).
    * *If Low/Medium Score (&lt;9):* Updates the sheet with the score and marks "Emailed" as `false`.
4.  **Send:** If the score is **High (9-10)**, sends an email via **Gmail**.
5.  **Update:** Writes the final status back to the Google Sheet, preventing duplicate sends.



### 📋 Setup Requirements
* **Google Sheet:** A sheet with columns for `Email`, `Validated`, `Scored`, `Score`, `Emailed`, `Reason`, etc.
* **ZeroBounce Account:** API Key for validation and scoring.
* **Gmail Account:** Connected via OAuth2 to send emails.



### 💡 Key Features
* **Cost Efficient:** Checks existing `Validated` and `Scored` columns to avoid re-processing contacts.
* **Risk Protection:** Filters out valid but low-quality leads (e.g., catch-alls or low scores).
* **Status Tracking:** Keeps your Google Sheet updated with rich data (Sub-status, Domain Age, etc.).

## 🔗 Nodes Used

Google Sheets, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
