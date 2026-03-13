# 🧾 Extract Colombian invoice data from Drive to Sheets with GPT-4o

> ⚡ **167 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Automate Colombian Cashflow Data Extraction to Google Sheets with AI

## Who’s it for
This workflow is designed for **finance professionals, accountants, small business owners in Colombia**, or anyone needing to automate the extraction of invoice data and its entry into Google Sheets. It's particularly useful for handling Colombian tax and legal specifics.

## How it works / What it does
This workflow automates the process of extracting critical data from invoices and receipts (PDFs and JPEGs) and organizing it in a Google Sheet:
*   **Triggers:** The workflow initiates when a new file is created or an existing file is updated in a designated Google Drive folder.
*   **File Handling:** It first downloads the detected file.
*   **Routing:** A "Switch" node intelligently routes the file based on its extension – one path for PDFs and another for JPEGs.
*   **Data Extraction:**
    *   For **PDF files**, it directly extracts all text content from the document.
    *   For **JPEG image files**, it utilizes an AI Agent (Azure OpenAI) to process the image and extract its textual content.
*   **AI-Powered Reasoning:** Two "Reasoning Agent" nodes (Azure OpenAI Chat Models) act as a specialized "Colombian Tax and Legal Extraction Agent". They parse the extracted text from invoices to pull out structured data in JSON format, including:
    *   Vendor name.
    *   Modification date.
    *   Line items with detailed description, sub_total, iva_value, total_amount, category, and sub_category.
    *   Specific Colombian tax fields like Retefuente and ReteICA.
    *   The number of items generated.
*   **Output Parsing:** A "Structured Output Parser" node ensures that the AI's output strictly adheres to a predefined JSON schema, guaranteeing consistent data formatting.
*   **Data Preparation:** "Edit Field" nodes ensure the AI's extracted data is in a valid format.
*   **Item Splitting:** "Split data" nodes separate the 'items' array from the AI's output, allowing each individual line item from the invoice to be processed as a separate entry for the Google Sheet.
*   **Google Sheet Integration:** Finally, "Fill Template" nodes append the fully processed invoice data (per line item) into your designated Google Sheet.

## How to set up
1.  **Google Drive Credentials:** Ensure you have configured your Google Drive OAuth2 API credentials in n8n.
2.  **Azure OpenAI Credentials:** Set up your Azure OpenAI API credentials, ensuring access to models like `gpt-4o`. Or you can simply use your traditional OpenAI or others LLMs.
3.  **Google Sheets Credentials:** Configure your Google Sheets OAuth2 API credentials.
4.  **Google Drive Folder ID:** In the "1a. Updated file trigger" and "1b. Created file trigger" nodes, **update the `folderToWatch` parameter** with your specific Google Drive Folder ID.
5.  **Google Sheet ID and Sheet Name:** In the "8. Fill Template" and "8. Fill Template1" nodes, **update the `documentId` and `sheetName` parameters** with your specific Google Sheet ID and the name of the sheet where data should be appended.

## Requirements
*   An active n8n instance.
*   A Google Drive account for file uploads.
*   A Google Sheets account for data storage.
*   An Azure OpenAI account with access to chat models (e.g., `gpt-4o`) for the "Azure OpenAI Chat Model" nodes and "Extract Data Agent".

## How to customize the workflow
*   **AI Extraction Prompts:** Modify the prompt instructions in the "5. Reasoning Agent" and "5. Reasoning Agent1" nodes if you need to extract different data points or change the output format.
*   **Google Sheet Column Mappings:** Adjust the `columns` mapping in the "8. Fill Template" and "8. Fill Template1" nodes to match your specific Google Sheet headers and data requirements.
*   **File Types:** Extend the "3. Route" node to handle additional file types (e.g., DOCX, PNG) by adding new conditions and corresponding extraction nodes.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, Basic LLM Chain, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
