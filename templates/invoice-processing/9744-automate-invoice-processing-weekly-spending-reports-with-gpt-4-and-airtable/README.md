# 🧾 Automate invoice processing & weekly spending reports with GPT-4 and Airtable

> ⚡ **56 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Invoice Automation Kit: AI-Powered Invoice Processing and Weekly Reports

This n8n workflow is designed to automate invoice processing and streamline financial management. It leverages AI to extract key invoice data, validate it, and store it in Airtable. Additionally, it generates and emails weekly spending reports.

### Who is it for?

This template is for small businesses, freelancers, or individuals looking to save time on manual invoice processing. It's ideal for anyone who wants to improve the accuracy of their financial data and maintain a clear overview of their spending.

### How it Works / What it Does

This workflow consists of two main parts:

1.  **Invoice Data Extraction and Storage**:
    *   **Invoice Upload Form**: Upload your invoices (PDF, PNG, JPG) via an n8n form.
    *   **AI-Powered Data Extraction**: AI extracts key information such as vendor name, invoice date, total amount, currency, and line items (description, quantity, unit price, total) from the uploaded invoice.
    *   **Data Validation**: The extracted data is validated to ensure it is complete and accurate.
    *   **Store in Airtable**: Validated invoice data is saved in a structured format to your specified Airtable base and table.

2.  **Weekly Spending Report Generation and Email**:
    *   **Weekly Report Schedule**: Automatically triggers every Sunday at 6 PM.
    *   **Fetch Weekly Invoices**: Retrieves all invoices stored in Airtable within the last 7 days.
    *   **AI-Powered Spending Report Generation**: Based on the retrieved invoice data, AI generates a comprehensive spending report, including total spending for the week, breakdown by vendor, top 5 expenses, spending trends, and any notable observations.
    *   **Send Weekly Report Email**: The generated report is sent in a professional format to the configured recipient email address.

### How to Set Up

1.  **Update Workflow Configuration Node**:
    *   Replace `airtableBaseId` with your Airtable Base ID.
    *   Replace `airtableTableId` with your Airtable Table ID.
    *   Replace `reportRecipientEmail` with the email address that should receive the weekly reports.
2.  **Airtable Credentials**:
    *   Set up your Airtable Personal Access Token credentials in the Airtable nodes.
3.  **OpenAI Credentials**:
    *   Set up your OpenAI API key credentials in the OpenAI Chat Model nodes.
4.  **Email Credentials**:
    *   Configure your email sending service (e.g., SMTP) credentials in the "Send Weekly Report Email" node and update the `fromEmail`.
5.  **Airtable Table Setup**:
    *   Ensure your Airtable has a table set up with appropriate columns to store invoice data, such as "Vendor", "Invoice Date", "Total Amount", "Currency", and "Line Items".

### Requirements

*   An n8n instance
*   An OpenAI account and API key
*   An Airtable account and Personal Access Token
*   An email sending service (e.g., SMTP server)

### How to Customize the Workflow

*   **Adjust Information Extraction**: Edit the prompt in the "Extract Invoice Data" node to include additional information you wish to extract.
*   **Customize Report**: Adjust the prompt in the "Generate Spending Report" node to change specific analyses or formatting included in the report.
*   **Add Notifications**: Incorporate notification nodes to other services like Slack or Microsoft Teams to be alerted when an invoice is uploaded or a report is ready.
*   **Modify Validation Rules**: Edit the conditions in the "Validate Invoice Data" node to implement additional validation rules.

Here's a visual representation of the workflow.

## 🔗 Nodes Used

Airtable, Send Email, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
