# 💬 Generate PDF business proposals with Google Gemini and PDF Generator API

> ⚡ **33 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## AI-Powered Automated Proposal & Lead Management System
This advanced n8n workflow automates the transition from "Raw Lead" to "Sent Proposal." By integrating Email Verification, Large Language Models (LLMs), and Document Automation, it eliminates manual data entry and ensures that every proposal sent is personalized, professional, and delivered to a verified address.

## 🛠️ How It Works
### 1. Data Intake & Validation
The workflow is triggered via a Webhook. Before any processing occurs, the data passes through the Hunter node, which performs a real-time email verification check.

Smart Error Handling: An If Node evaluates the verification result. If the email is invalid or "risky," the workflow redirects to a Respond to Webhook node, providing immediate feedback to the source and preventing wasted API credits on downstream nodes.

### 2. The AI Agent Layer
Once validated, the data reaches the Set Fields node to be mapped for the AI.

Custom Prompt Logic: The AI Agent node, powered by Google Gemini, contains a sophisticated custom prompt. This prompt acts as a "template engine," instructing the AI to take specific input variables (like client name, project scope, and budget) and output a clean, professional HTML structure. This allows for dynamic content generation that adapts to the unique context of every lead.

### 3. Professional PDF Generation
Instead of sending a plain text email, the workflow passes the AI-generated HTML to the PDF Generator API. This tool renders the code into a high-quality, brand-consistent PDF document ready for client viewing.

### 4. Automated Delivery & CRM Logging
Gmail Integration: The final PDF is automatically attached and sent to the verified email address with a personalized message.

Google Sheets Logging: To ensure full visibility, the workflow appends a row to a Google Sheet, tracking the date, client details, and the status of the sent proposal.

## 📋 Requirements
To run this workflow, you will need active accounts and API credentials for the following services:

n8n Instance: (Self-hosted or Cloud).

Hunter.io API: For the email verification node.

Google Gemini API: To power the AI Agent and custom prompt.

PDF Generator API: To convert the AI's HTML output into documents.

Google Workspace Account: Required for the Gmail (Sending) and Google Sheets (Logging) nodes.

## ⚙️ How to Set Up
Follow these steps to get the workflow operational:

- Import the Workflow: Download the JSON file and paste it into your n8n canvas.
 
- Configure Credentials:

- Connect your Hunter API key.

- Set up your Google Gemini credentials (via Google Cloud Console).

- Add your PDF Generator API key.
 
- Authenticate your Google Account (OAuth2) for Gmail and Google Sheets.
 
- Customize the AI Prompt: Open the AI Agent node. Under the "System Message" or "Prompt" section, adjust the HTML template to match your brand's style and the specific fields you want to include in your proposal.
 
- Map your Google Sheet: Open the Append row in sheet node and select the specific spreadsheet and worksheet where you want to log your leads.

- Test the Flow: Use the Webhook simulator (Example DATA) to send a test payload and verify that the PDF is generated and the email is sent correctly.

## 🔗 Nodes Used

Google Sheets, Webhook, Hunter, Gmail, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
