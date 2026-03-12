# 🔬 Track receipt expenses via LINE with OpenAI GPT-4o-mini and Google Sheets

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Manage expenses with AI insights through LINE

## 👥 Who’s it for
This workflow is designed for small business owners, freelancers, and finance teams who want to eliminate manual data entry for expense tracking. It is ideal for users who want not just a record of their spending, but real-time AI-driven financial insights to help manage their cash flow.

## 🚀 How it works
This template acts as an autonomous finance assistant that connects LINE, Google Workspace, and OpenAI.
- **Data Capture**: Receives receipt images directly through the LINE Messaging API.
- **AI Analysis**: Uses OpenAI (GPT-4o-mini) to perform OCR and extract Date, Store Name, Amount, and Category with high precision.
- **Duplicate Prevention**: Automatically searches your Google Sheet to verify if the receipt has already been registered (based on Date and Amount) to prevent double-counting.
- **Cloud Storage**: Renames and saves the receipt image to Google Drive for tax compliance and easy retrieval.
- **Automated Ledger**: Appends the structured data into a Google Sheets master file.
- **Financial Insights**: Calculates the current month's total spending, compares it to previous data, and generates sharp management advice via AI to help you stay on budget.

## ⚙️ Setup steps
1. **Prepare Google Sheet**: Create a sheet with headers: `Date`, `Amount`, `Store`, and `Category`.
2. **Prepare Google Drive**: Create a folder for receipt storage and copy its Folder ID.
3. **Configure Credentials**: Set up your credentials in n8n for OpenAI (API Key), Google Workspace (OAuth2), and LINE Messaging API (Channel Access Token).
4. **Update Node Settings**: 
   - In the "Google Sheets" nodes, select your specific spreadsheet.
   - In the "Google Drive" node, paste your Folder ID.
   - In the "LINE" HTTP nodes, ensure your Authorization header is set to `Bearer YOUR_TOKEN`.
5. **Activate**: Set your n8n Webhook URL in the LINE Developers Console and toggle the workflow to "Active."

## 📦 Requirements
- n8n version 1.0 or later
- OpenAI API Key (GPT-4o / GPT-4o-mini)
- Google Workspace Account (Drive, Sheets)
- LINE Developers Account (Messaging API)

## 🎨 How to customize
- **Refine AI Advice**: Edit the System Message in the AI Agent node to change the tone of the advice (e.g., from "Strict Accountant" to "Friendly Growth Hacker").
- **Switch Channels**: Replace the final LINE node with Slack or Discord nodes if your team uses those platforms.
- **Budget Alerts**: Add a Filter node to trigger special notifications if monthly spending exceeds a certain threshold.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
