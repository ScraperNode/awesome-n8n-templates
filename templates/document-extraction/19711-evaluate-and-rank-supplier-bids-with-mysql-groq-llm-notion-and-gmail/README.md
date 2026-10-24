# 🔬 Evaluate and rank supplier bids with MySQL, Groq LLM, Notion, and Gmail

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually runs an AI-assisted procurement pipeline that pulls submitted bids from MySQL, converts pricing using FreeCurrencyAPI exchange rates, scores qualitative proposal text with Groq LLMs, ranks suppliers across multiple scenarios, logs top results to Notion, and emails an executive summary via Gmail.

## How it works
1. Starts when you manually trigger the workflow.
2. Fetches live currency exchange rates from FreeCurrencyAPI and pulls submitted bids for a specific RFP from a MySQL database.
3. Normalizes each bid by converting quoted prices to USD, converting delivery durations to days, and anonymizing suppliers with blind aliases.
4. Sends each bid’s qualitative proposal text and compliance certifications to a Groq-hosted LLM to produce structured SLA, support, compliance, and risk scores.
5. Applies a risk penalty, calculates weighted rankings for multiple scenarios (standard, cost optimized, risk averse, and speed to market), and outputs only the top three suppliers.
6. Creates a Notion database page for each shortlisted supplier with key metrics and the AI justification.
7. Generates a structured executive procurement summary with a Groq-hosted LLM, converts the markdown report to HTML, and emails it via Gmail.

## Setup
1. Configure your MySQL credentials and update the table name and RFP/status filters used to select submitted bids.
2. Add your FreeCurrencyAPI key and ensure the exchange-rate request includes it as the apikey query parameter.
3. Add your Groq API credentials for both LLM steps and confirm the selected models are available in your Groq account.
4. Connect your Notion account, select the target database, and make sure its properties match the fields being written (price, delivery days, quality score, justification, and scenario score).
5. Connect your Gmail account and set the recipient(s) in the Gmail node so the HTML executive report is delivered to the right stakeholders.

## Additional info
## Add‑ons

* **Webhook Trigger:** Replace the *Manual Trigger* node with a *Webhook* node to automatically run this evaluation the moment an RFP deadline closes.
* **PDF Report Generation:** Add an HTML-to-PDF node before the Gmail node to send a polished, downloadable PDF attachment to your executives.
* **ERP Integration:** Swap the Notion node with a Salesforce, NetSuite, or SAP node to log the top-ranked vendors directly into your enterprise resource planning system.


## Use Case Examples

While currently configured for IT Procurement, this workflow can be easily adapted for:

1. **IT Procurement:** Evaluating software licenses, server hardware, or cloud infrastructure providers based on uptime and security.
2. **Construction & Contractor Bidding:** Scoring construction firms based on safety records, material costs, and timeline estimates.
3. **Marketing Agency Selection:** Ranking agencies based on retainer fees, portfolio quality scores, and SLA response times.
4. **Supply Chain & Logistics:** Assessing shipping partners based on freight costs, guaranteed delivery speeds, and regional compliance.
5. **Freelancer / Consultant Vetting:** Automatically reviewing submitted portfolios and hourly rates to shortlist top talent for a project.

(Note: With minor tweaks to the database query and AI prompts, there can be many more such use cases for this workflow!)


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Workflow fails at HTTP Request** | Invalid or expired FreeCurrencyAPI key. | Generate a new API key from your FreeCurrencyAPI dashboard and update the node parameters[cite: 1]. |
| **No bids fetched from MySQL** | Incorrect RFP ID or status. | Check the *Fetch Submitted Bids* node and verify that `rfp_id` and `status` exactly match your database records[cite: 1]. |
| **AI Node throws schema error** | LLM hallucinated outside the requested JSON format. | Try changing the Groq model to a more robust version, or slightly adjust the prompt in the *AI Proposal Auditor*[cite: 1]. |
| **Notion node fails to save data** | Integration is not invited to the Notion page. | Open Notion, go to your target database, click "Share," and invite your n8n integration[cite: 1]. |
| **Emails are not sending** | Gmail OAuth token expired. | Re-authenticate your Gmail credentials in the n8n settings[cite: 1]. |


## Need Help?

Building and optimizing advanced AI automations can sometimes be tricky! 

If you need a helping hand to set up this workflow, configure database connections, customize the AI prompts or build powerful Add-Ons tailored to your specific business needs, we are here for you. [Contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html) for expert assistance with this workflow or to help you design similar custom automation processes for your organization.

## 🔗 Nodes Used

HTTP Request, MySQL, Gmail, Notion, Markdown, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
