# 🔬 Extract text from Google Drive files to Google Sheets using NVIDIA NIM

> ⚡ **243 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This template monitors Google Drive folder for new files, extracts text from PDFs, images, text files, CSVs, and Google Docs., reads images with meta/llama-3.2-11b-vision-instruct, structures the result with nvidia/llama-3.3-nemotron-super-49b-v1.5, logs everything to Google Sheets, and sends a Telegram notification when processing finishes. ✨

## What This Template Does
- Watches a specific Google Drive folder for new files with Google Drive Trigger. 📂
- Downloads each new file with Google Drive before processing. ⬇️
- Routes PDFs, images, text files, CSVs, and Google Docs through the correct extraction branch. 🔀
- Extracts image text with meta/llama-3.2-11b-vision-instruct  🖼️
- Structures extracted content into JSON fields with nvidia/llama-3.3-nemotron-super-49b-v1.5 through NVIDIA NIM. 🤖
- Appends the final result to Google Sheets in Extract_Log. 📊
- Sends a Telegram notification when processing is complete. 📬

## Key Benefits
- Turns a Drive folder into a reusable intake point for mixed file types. ⏱️
- Creates a searchable audit trail in Google Sheets for every processed file. 📚
- Sends a lightweight Telegram notification without requiring Telegram as the input channel. ✅
- Keeps the extraction and structuring logic reusable for internal ops or client delivery workflows. 🔁
- Makes it easier to test multimodal document processing with free-tier NVIDIA NIM models. 💡

## Features
- Google Drive Trigger configured for new files in a specific folder. 📥
- Google Drive download step for binary file access before extraction. ⚙️
- File-type routing with Switch and normalization with Code nodes. 🧠
- Native n8n Extract from File nodes for PDF, TXT, and CSV parsing. 📄
- NVIDIA NIM HTTP Request nodes for image OCR and structured JSON generation. 🤖
- Google Sheets append logging with a fixed `Extract_Log` tab schema. 📈
- Plain-text Telegram completion notifications with a fixed destination chat ID. 📨

## Requirements
- n8n instance with access to Google Drive Trigger, Google Drive, Google Docs, Google Sheets, HTTP Request, Telegram, and Extract from File nodes. 🧰
- Google Drive OAuth2 credential with access to the watched folder. 🔐
- Google Docs OAuth2 credential with access to any Google Docs files you want to process. 📘
- Google Sheets OAuth2 credential and a sheet with an `Extract_Log` tab. 📊
- Telegram bot credential plus a valid destination chat ID for notifications. 🤝
- NVIDIA NIM API key stored as an HTTP Header Auth credential. 🔑
- A folder ID and Google Sheet ID added to the provided placeholders before activation. 🛠️

## Target Audience
- Operations teams monitoring a shared Drive folder for inbound files. 🗂️
- Founders and solo operators who want document extraction. 👤
- Agencies building reusable back-office workflows for receipts, notes, and uploaded files. 🏢
- Analysts who want structured text output logged into Google Sheets automatically. 📋
- Automation builders testing file-driven multimodal extraction with Drive as the source. 🧪

## Step-by-Step Setup Instructions
1. Import the workflow and read every sticky note on the canvas before editing any nodes. 📝
2. Connect your Google Drive, Google Docs, Google Sheets, Telegram, and NVIDIA NIM credentials. 🔐
3. Replace `REPLACE_WITH_GOOGLE_DRIVE_FOLDER_ID`, `REPLACE_WITH_GOOGLE_SHEET_ID`, and `REPLACE_WITH_TELEGRAM_CHAT_ID` in the marked nodes. 📌
4. Create the `Extract_Log` tab with the required headers shown in the sticky notes. 📑
5. Test one file at a time in this order: PDF, TXT, CSV, image, then Google Docs file. 🧪
6. Confirm that each test adds one clean row to Google Sheets and sends one Telegram notification. ✅
7. Activate the workflow only after every supported path works end to end. 🚀

**Built by Cordexa Technologies** 

https://cordexa.tech | cordexatech@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Google Docs, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
