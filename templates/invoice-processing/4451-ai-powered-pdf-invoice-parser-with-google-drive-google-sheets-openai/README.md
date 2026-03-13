# 🧾 AI-powered PDF invoice parser with Google Drive, Google Sheets & OpenAI

> ⚡ **5,478 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## **Who is this for?**

This workflow is perfect for:

* Companies that manage invoices through Google Drive
* Business owners who want to minimize manual data entry and maximize accuracy
* Accounting teams and finance departments seeking to automate invoice processing

## **What problem is this workflow solving?**

Processing invoices manually is time-consuming, error-prone, and inconsistent. This workflow solves those issues by:

* **Automating invoice processing** from detection to data extraction to storage
* **Improving accuracy** by using AI to extract key invoice data fields reliably
* **Reducing human workload** while maintaining compliance and consistency

## **What this workflow does**

This workflow creates a fully automated invoice processing system by:

1. **Monitoring a Google Drive folder** for new PDF invoices in real time
2. **Downloading the PDF files** and extracting their content using OCR technology
3. **Using AI (OpenAI)** to parse and extract key invoice fields such as invoice number, date, total amount, vendor name, itemized details, tax, and category
4. **Validating the extracted data** to ensure compliance with a structured JSON schema
5. **Storing structured data in Google Sheets** for easy access, review, and reporting

Key Features:

* AI-powered extraction handles both text-based and scanned PDF invoices
* Provides a structured, searchable invoice database in Google Sheets
* Configured to run as frequently as the user needs, ensuring timely processing.

## **Setup**
1. **Copy the Google Sheet template** here:
👉 [PDF Invoice Parser – Google Sheet Template](https://docs.google.com/spreadsheets/d/1u5dHeytao9y3L0Mgv8cSomPVLS3CMrn_eOwXW3oQ3c8/edit?gid=0#gid=0)

2. **Connect your Google Drive account** to the Drive Trigger and File Download nodes

3. **Add your OpenAI API key** in the AI Parser node

4. **Link the Google Sheet** in the final storage node

5. **Drop a test invoice PDF** into the monitored Drive folder


### Required Credentials:

* **OpenAI API Key**
* **Google Drive Credentials**
* **Google Sheets Credentials**

## **How to customize this workflow to your needs**
* **Modify the polling interval** (default: every minute) for higher/lower frequency.
* **Integrate with your accounting software** by adding nodes (e.g., QuickBooks, Xero).
* **Use alternative LLM** such as Gemini, Claude.

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
