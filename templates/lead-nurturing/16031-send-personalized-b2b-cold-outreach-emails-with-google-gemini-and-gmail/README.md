# 💬 Send personalized B2B cold outreach emails with Google Gemini and Gmail

> ⚡ **252 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs on a schedule to pull leads from an n8n Data Table, fetches and cleans each lead’s website content, uses Google Gemini to draft a personalized cold outreach email in structured JSON, sends it via Gmail, and updates the lead status back in the Data Table.

## How it works
1. Runs on a schedule and loads sender details, the n8n Data Table ID, email length limits, and rate-limiting settings.
2. Retrieves all leads from the n8n Data Table and checks each lead’s email address against a strict regex format.
3. Marks leads with invalid email addresses as INVALID_EMAIL in the n8n Data Table with an updated timestamp.
4. Fetches the lead’s website HTML and strips scripts, styles, and tags to produce a short plain-text website summary.
5. Sends the lead details, website summary, and sender context to Google Gemini to generate a personalized outreach email returned as a JSON object (subject, greeting, opening line, main body, ending).
6. Sends the generated email to the lead using Gmail with the AI-generated subject and body.
7. Updates the lead record in the n8n Data Table to SENT (including sent time and email subject) and waits for the configured delay to rate-limit sending.

## Setup
1. Create or choose an n8n Data Table for your leads, ensure it includes fields like id, email, first_name, last_name, company_name, and website plus status tracking columns, and paste its ID into data_table_id in the Set Context step.
2. Add a Google Gemini (PaLM) API credential for the Google Gemini Flash model used to generate the outreach email.
3. Configure Gmail sending credentials (Google API) for the Gmail node, and verify the sending account is allowed to send outbound email.
4. Update the sender/company values and constraints in Set Context (sender name/email, company name/solution, max words, and rate-limit seconds) before activating the workflow.

## Requirements
- **n8n Version:** Built and tested on **n8n 2.20.0+**. *(Note: You may encounter errors on older versions. It is highly recommended to update to the latest n8n version to use this workflow effectively).*
- **Google Gemini** API key credentials.
- **Gmail OAuth2** credentials.
- Built-in **n8n Data Table** feature enabled.

## Customization
- **Change the Email Provider:** Swap out the **Gmail** node for an **Outlook** or **SMTP** node if you use a different mailing service.
- **Change the AI Model:** Replace the **Google Gemini** chat model with **OpenAI (ChatGPT)** or **Anthropic (Claude)** depending on your preference.
- **Integrate your CRM:** Instead of using n8n Data Table, replace the fetch and update nodes with your CRM of choice, such as **HubSpot** or **Pipedrive**.

## Additional info
## About the Author

**Created by:** Nguyễn Thiệu Toàn (Jay Nguyen)  
**Email:** me@nguyenthieutoan.com  
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)  
**Company:** GenStaff ([genstaff.net](https://genstaff.net))  
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan  
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
