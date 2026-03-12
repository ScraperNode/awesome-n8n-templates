# 🔬 Nested PDF analysis with Mistral AI & OneDrive for document summarization

> ⚡ **720 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Description
Automate the discovery and analysis of PDF files across a deeply nested OneDrive folder structure. This workflow recursively searches folders, filters for new or updated PDFs, extracts text, and uses a Mistral AI agent to generate a concise Executive Summary, Key Findings, and Structured Metadata (Date, Location, etc.), storing all insights into a n8n Data Table for easy access and further automation.

# Key Features & How It Works
#### Scheduled Trigger & Recursive Folder Search:

- The workflow runs automatically (scheduled for 8 PM in this template) to monitor a specified main folder on OneDrive.

- It performs a deep, multi-level search (up to 8 layers) across subfolders to ensure no documents are missed.

#### Smart Deduplication & Filtering:

- It checks new files against an internal n8n Data Table using the Compare Datasets node, ensuring only new or unique PDF files are processed, saving AI credits and processing time.

- A size check is also included, preventing attempts to process excessively large files.

- AI-Powered Document Intelligence (Mistral LLM):

#### For each new PDF, the workflow extracts the text and passes it to a Mistral AI model for dual-stream analysis:

- Overview Agent: Generates an impartial, professional Executive Summary, a list of Key Findings & Data Points, and the document's Scope/Context.

- Document Information Agent: Extracts crucial metadata, including the single most relevant date, location (City/State/Country), and professional information (Name, Title, Organization).

#### Structured Output and Archiving:

- AI outputs are meticulously validated and reformatted into a clean JSON object using Structured Output Parsers.

- The complete analysis, along with the original file name and path, is then logged as a new row in an n8n Data Table.

# Setup Notes
OneDrive Folder: You must specify the exact name of your main folder in the 'Search for Main Folder' node.

Data Table: Ensure your n8n Data Table exists with the required columns: Summary, Key_Findings, Scope, Date, Location, File_Name, and Path.

Deep Folder Structure: The current configuration supports up to 8 levels of subfolders. If your files go deeper, you may need to add more "Get items in a folder" and "If" nodes.

AI Customization: Review the AI agent prompts and the structured output schemas to customize the fields you want to extract or the summary style you require.

# Extend This Workflow
#### The final output is organized data. You can easily extend this workflow to:

- Send daily/weekly digest emails with new summaries.

- Sync the extracted data to a Google Sheet, Airtable, or other database.

- Add a secondary AI agent to perform follow-up actions based on the "Key Findings."

## 🔗 Nodes Used

Microsoft OneDrive, Schedule Trigger, AI Agent, Basic LLM Chain, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
