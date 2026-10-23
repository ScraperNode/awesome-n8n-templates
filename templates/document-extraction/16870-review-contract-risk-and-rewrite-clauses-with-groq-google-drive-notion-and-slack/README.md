# 🔬 Review contract risk and rewrite clauses with Groq, Google Drive, Notion, and Slack

> ⚡ **27 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for newly uploaded contract PDFs, extracts key clauses with Groq-hosted LLMs, compares them to standard clauses stored in Notion, generates a structured risk report and clause rewrites, sends a Slack alert for high-risk contracts, and saves the review to Notion.

## How it works
1. Triggers when a new file is created in a specific Google Drive folder.
2. Downloads the file and extracts text from it (using PDF text extraction when the uploaded file is a PDF).
3. Uses a Groq-hosted LLM to extract key contract clauses (payment terms, penalties, SLA, termination, renewal, liability, and data protection) into structured JSON.
4. Pulls the company’s standard clause library from Notion and compares each extracted vendor clause to the corresponding standard text.
5. Uses a Groq-hosted LLM to generate a structured legal risk report with an overall risk level, executive summary, clause-by-clause risk review, missing protections, and negotiation recommendations.
6. Rewrites medium- and high-risk clauses with a Groq-hosted LLM to produce negotiation-ready alternative wording aligned to the Notion standards.
7. If the overall risk level is High, posts a formatted alert to Slack, and then creates a contract review record in Notion containing the risk summary, recommendations, and revised clauses.

## Setup
1. Connect Google Drive OAuth credentials and set the folder to watch for uploaded contracts.
2. Connect your Groq API credentials for the clause extraction, risk analysis, and clause rewrite LLM steps.
3. Connect Notion credentials and select the correct databases for the Standard Clause Library and Contract Reviews, ensuring clause type values match (Payment Terms, Penalties, SLA, Termination, Renewal, Liability, Data Protection).
4. Connect Slack OAuth credentials and set the target channel for high-risk contract alerts.
5. Upload contracts as PDFs (or ensure non-PDF files contain readable text content) so the extraction step has usable contract text.

## Additional info
## How To Customize Nodes

* **Change Clause Types:** To track different clauses (e.g., Intellectual Property), update the JSON schema in the **Structured Output Parser3** and the logic in the **Compare Vendor vs Standard Clauses** code node.
* **Risk Thresholds:** Adjust the **Check If Contract Is Risky** IF-node if you want Slack alerts for "Medium" risk contracts instead of just "High."
* **AI Rewriting:** Modify the prompt in the **AI Rewrite Risky Clauses** node to change the "tone" of the rewritten language (e.g., more aggressive vs. more collaborative).


## Add‑ons

* **Auto-Email Vendor:** Add a Gmail/Outlook node at the end to automatically reply to the vendor with the rewritten clauses.
* **Signature Tracking:** Connect to a DocuSign node once a contract is marked as "Low Risk."
* **Multi-Language Support:** Add a Translation node before the AI analysis to handle international contracts.


## Use Case Examples

* **Software SaaS Renewals:** Automatically checking if a vendor’s new SLA matches the previous year's agreement.
* **Freelancer Master Service Agreements (MSA):** Ensuring all independent contractors agree to standard IP ownership clauses.
* **GDPR Compliance Check:** Specifically extracting "Data Protection" clauses to ensure they meet modern privacy regulations.
* **Bulk Migration:** Uploading hundreds of legacy contracts to Google Drive to generate a "Risk Map" of your entire existing contract base in Notion.
* **Real Estate Lease Reviews:** Comparing standard "Termination" and "Maintenance" clauses across multiple property managers.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow doesn't start** | Google Drive Trigger isn't polling. | Ensure the node is "Active" and the folder ID is correct. |
| **Notion Error (404/400)** | Missing database properties. | Verify that `property_clause_type` and other fields match exactly (case-sensitive). |
| **Groq API Timeout** | Contract text is too long. | Use a "Text Splitter" node or ensure the Groq model supports the token count of your contract. |
| **Extraction is Blank** | Non-searchable PDF (Scanned Image). | Use an OCR node before the extraction node to convert images to text. |
| **Slack Node Error** | Channel ID changed. | Re-select the channel from the dropdown in the Slack node settings. |


## Need Help?

Setting up automated legal logic can be complex. If you need a hand configuring your Notion databases, customizing the AI prompts or building out additional features like automated vendor replies, our [n8n automation developers](https://www.weblineindia.com/hire-n8n-developers/) are here to help.

**[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html)** to connect with our n8n experts for a custom-built automation solution tailored to your business needs.

## 🔗 Nodes Used

Slack, Google Drive, Notion, Google Drive Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
