# 🎫 AI email analyzer: Process PDFs, images & save to Google Drive + Telegram

> ⚡ **28,492 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow automates the process of **analyzing emails and their attachments** (PDFs and images) using **AI models** (DeepSeek, Gemini, and OpenRouter). It extracts and summarizes the content of emails and attachments, saves the summaries to **Google Sheets**, and sends a final consolidated summary via **Telegram**. 

This is a powerful tool for automating email analysis and summarization, saving time and ensuring that important information is easily accessible and actionable.

Below is a breakdown of the workflow:

---

#### **1. How It Works**
The workflow is designed to process incoming emails, analyze their content and attachments, and generate summaries. Here's how it works:

1. **Email Trigger**:
   - The workflow starts with the **Email Trigger (IMAP)** node, which monitors an email inbox for new emails.
   - If an email contains attachments, the workflow processes them.

2. **Check for Attachments**:
   - The **Contain Attachments?** node checks if the email has attachments.
   - If attachments are present, the workflow proceeds to process them.

3. **Process Attachments**:
   - The **Get PDF and Images Attachments** node extracts PDF and image attachments from the email.
   - The **Switch** node separates PDFs and images for further processing:
     - **PDFs**: The **Extract from PDF** node extracts text from PDFs, and the **PDF Analyzer** node summarizes the content.
     - **Images**: The **Analyze Image** node uses AI to describe the content of images.

4. **Summarize Email Content**:
   - The **Convert Text** node converts the email's HTML content to plain text.
   - The **Email Summarization Chain** node uses AI to generate a summary of the email's text content.

5. **Save Summaries**:
   - The **Save Summary PDF**, **Save Summary Image**, and **Save Summary Text** nodes save the summaries of PDFs, images, and email text, respectively, to **Google Sheets**.

6. **Consolidate Summaries**:
   - The **All Summaries** node aggregates the summaries of the email text, PDFs, and images.
   - The **Create Final Summary** node uses AI to generate a unified summary of all the content.

7. **Send Final Summary**:
   - The **Send Final Summary** node sends the consolidated summary via **Telegram** to a specified chat ID.

---

#### **2. Set Up Steps**
To set up and use this workflow in n8n, follow these steps:

1. **IMAP Configuration**:
   - Set up **IMAP** credentials in n8n for the **Email Trigger (IMAP)** node.
   - Ensure the email account is accessible via IMAP.

2. **AI Model Configuration**:
   - Configure the **DeepSeek**, **Gemini**, and **OpenRouter** credentials in n8n for the **Email Summarization Chain**, **PDF Analyzer**, and **Create Final Summary** nodes.
   - Ensure the AI models are set up to generate summaries.

3. **Google Sheets Integration**:
   - Set up **Google Sheets** credentials in n8n for the **Save Summary PDF**, **Save Summary Image**, and **Save Summary Text** nodes.
   - Specify the Google Sheet and worksheet where the summaries will be saved.

4. **Telegram Integration**:
   - Set up **Telegram** credentials in n8n for the **Send Final Summary** node.
   - Insert your **Chat ID** in the Telegram node to receive the final summary.

5. **Test the Workflow**:
   - Send an email with attachments (PDFs and images) to the monitored email account.
   - The workflow will:
     - Extract and summarize the email content and attachments.
     - Save the summaries to Google Sheets.
     - Send a consolidated summary via Telegram.

6. **Optional Customization**:
     - replace IMAP trigger with Gmail or Outlook trigger 
     - Modify the workflow to include additional features, such as:
     - Adding more AI models for different types of analysis.
     - Sending notifications via other channels (e.g., Slack, email).
     - Integrating with other storage services (e.g., Dropbox, AWS S3).

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, Telegram, Google Drive, Markdown, Summarization Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
