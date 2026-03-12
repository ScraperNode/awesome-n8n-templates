# 📁 Automatically save Kindle handwritten notes to Google Drive with DeepSeek AI

> ⚡ **202 views** · 📁 [File Management](../)

## Description

### Summary:


This n8n workflow addresses the manual and cumbersome process of **exporting handwritten notes from Kindle devices, such as the Kindle Scribe**. It is designed to automate the extraction of the note's PDF download link from an email and subsequently save the file to your Google Drive.

### The Problem
Kindle devices that support handwritten notes (e.g., Kindle Scribe) allow users to export a notebook as a PDF file. However, there is no centralized repository or automated export function. The current process requires the user to:

1. Manually request an export for each file on the device.
2. Receive an auto-generated email containing a temporary, unique download URL (rather than the attachment itself).
3. This manual process represents a significant vendor lock-in challenge and a poor user experience.

### How This Workflow Solves It
This template automates the following steps:

1. Email Ingestion: Monitors your Gmail account for the specific export email from Amazon.
2. Link Extraction: Utilizes an LLM service (like DeepSeek, or any other suitable large language model) to accurately parse the email content and extract the unique PDF download URL.
3. PDF Retrieval & Storage: Executes a request to the extracted URL to download the PDF file and then uploads it directly to your Google Drive.

### Prerequisites
To implement and run this workflow, you will need:

1. Kindle Device: A Kindle model that supports handwritten notes and PDF export (e.g., Kindle Scribe).
2. Gmail Account: The account configured on your Kindle device to receive the export emails.
3. LLM Account: Access to an LLM API (e.g., DeepSeek, OpenAI, etc.) to perform the necessary text extraction.
4. Google Drive Credentials: Configured n8n credentials for your Google Drive account.

*This workflow is designed for easy and quick setup, providing a reliable, automated solution for backing up your valuable handwritten notes.*

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Gmail Trigger, AI Agent, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
