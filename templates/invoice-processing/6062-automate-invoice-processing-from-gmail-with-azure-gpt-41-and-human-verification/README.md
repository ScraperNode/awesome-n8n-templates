# 🧾 Automate invoice processing from Gmail with Azure GPT-4.1 and human verification

> ⚡ **782 views** · 🧾 [Invoice Processing](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This n8n workflow automates invoice management by integrating **Gmail**, PDF analysis, and **Azure OpenAI GPT-4.1**, with an optional **human verification** step for accuracy and control. It's ideal for businesses or individuals who regularly receive invoice emails and want to streamline their accounts payable process with minimal manual effort.

The system continuously monitors Gmail for new messages from specified senders. When it detects an email with a PDF attachment and relevant subject line (e.g., "Invoice"), it automatically extracts text from the PDF, analyzes it using Azure OpenAI, and determines if it is a valid invoice. If the AI is uncertain, the workflow sends a manual approval request to a human reviewer. Valid invoices are saved to local storage with a timestamped filename, and a confirmation email is sent upon successful processing.

## 🎯 Who This Is For
1. Small to medium businesses
2. Freelancers or consultants who receive invoices via email
3. IT or automation teams looking to streamline document workflows
4. Anyone using n8n with access to Gmail and Azure OpenAI

## ✅ Features
- **Gmail Monitoring** – Automatically checks for new emails from trusted senders
- **AI-Powered Invoice Detection** – Uses Azure GPT-4.1 to intelligently verify PDF contents
- **PDF Text Extraction** – Extracts readable text for analysis
- **Human-in-the-Loop Verification** – Requests approval when AI confidence is low
- **Secure File Storag**e – Saves invoices locally with structured filenames
- **Email Notifications** – Sends confirmations or manual review alerts

## ⚙️ Setup Instructions
### 1. Prerequisites
- An active n8n instance (self-hosted or cloud)
- A Gmail account with OAuth2 credentials
- An Azure OpenAI account with access to the GPT-4.1 model
- A local directory for saving invoices (e.g., C:/Test/Invoices/)

### 2. Gmail OAuth2 Setup
- In n8n, create Gmail OAuth2 credentials.
- Configure it with Gmail API access (read emails and attachments).
- Update the Gmail Trigger node to filter by sender email (e.g., sender@gmail.com).

### 3. Azure OpenAI Setup
- Create Azure OpenAI API credentials in n8n.
- Ensure your endpoint is correctly set and GPT-4.1 access is enabled.
- Link the credentials in the AI Analysis node.

### 4. Customize Workflow Settings
- Sender Email – Update in Gmail Trigger
- Notification Email – Update in Send Notification node
- Save Directory – Change in Save Invoice node

### 5. Testing the Workflow
- Send a test email from the configured sender with a PDF invoice.
- Wait for the workflow to trigger and check for:
- File saved in the directory
- Confirmation email received
- Manual review request (if needed)

## 🔄 Workflow Steps
Gmail Trigger → Check for PDF Invoice → Extract PDF Text → Analyze with GPT-4.1 →
     ↳ If Invoice: Save & Notify
     ↳ If Uncertain: Request Human Review
     ↳ If Not Invoice: Send Invalid Alert

## 🔗 Nodes Used

Write Binary File, Gmail, Stop and Error, Gmail Trigger, Azure OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
