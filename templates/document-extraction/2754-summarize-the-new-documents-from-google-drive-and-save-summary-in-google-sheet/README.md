# 🔬 Summarize the new documents from Google Drive and save summary in Google Sheet

> ⚡ **7,451 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow is created by AI developers at WeblineIndia. It streamlines the process of managing content by automatically identifying and fetching the most recently added Google Doc file from your Google Drive. It extracts the content of the document for processing and leverages an AI model to generate a concise and meaningful summary of the extracted text. The summarized content is then stored in a designated Google Sheet, alongside relevant details like the document name and the date it was added, providing an organized and easily accessible reference for future use. This automation simplifies document handling, enhances productivity, and ensures seamless data management.

## Steps :
### Fetch the Most Recent Document from Google Drive
- **Action:** Use the Google Drive Node.
- **Details:** List files, filter by date to fetch the most recently added .doc file, and retrieve its file ID and metadata.

### Extract Content from the Document
- **Action:** Use the Google Docs Node.
- **Details:** Set the operation to "Get Content," pass the file ID, and extract the document's text content.

### Summarize the Document Using an AI Model
- **Action:** Use an AI Model Node (e.g., OpenAI, ChatGPT).
- **Details:** Provide the extracted text to the AI model, use a prompt to generate a summary, and capture the result.

### Store the Summarized Content in Google Sheets
- **Action:** Use the Google Sheets Node.
- **Details:** Append a new row to the target sheet with details such as the original document name, summary, and date added.

---

## About WeblineIndia
**WeblineIndia** specializes in delivering innovative and [custom AI solutions](https://www.weblineindia.com/ai-development.html) to simplify and automate business processes. If you need any help, please reach out to us.

## 🔗 Nodes Used

Google Sheets, Google Docs, Google Drive Trigger, Calculator, Wikipedia, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
