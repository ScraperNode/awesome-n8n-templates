# 👥 Resume data extraction and storage in Supabase from email attachments

> ⚡ **3,630 views** · 👥 [HR & Recruitment](../)

## Description

### Description
**What Problem Does This Solve? 🛠️**

This workflow automates the process of extracting key information from resumes received as email attachments and storing that data in a structured format within a Supabase database. It eliminates the manual effort of reviewing each resume, identifying relevant details, and entering them into a database. This streamlines the hiring process, making it faster and more efficient for recruiters and HR professionals.

**Target audience**: Recruiters, HR departments, and talent acquisition teams.

**What Does It Do? 🌟**
* Monitors a designated email inbox for new messages with resume attachments.
* Extracts key information such as name, contact details, education, work experience, and skills from the attached resumes.
* Cleans and formats the extracted data.
* Stores the processed data securely in a Supabase database.

### Key Features 📋

* Automatic email monitoring for resume attachments.
* Intelligent data extraction from various resume formats (e.g., PDF, DOC, DOCX).
* Customizable data fields to capture specific information.
* Seamless integration with Supabase for data storage.
* Uses **OpenRouter** to streamline API key management for services such as AI-powered parsing.

### Setup Instructions

**Prerequisites ⚙️**

* **n8n Instance**: Self-hosted or cloud instance of n8n.
* **Email Account**: Gmail account with Gmail API access for receiving resumes.
* **Supabase Account**: A Supabase project with a database/table ready to store extracted resume data. You'll need the Supabase URL and API key.
* **OpenRouter Account**: For managing AI model API keys centrally when using LLM-based resume parsing.

 ### **Installation Steps 📦**
**1. Import the Workflow**:

* Copy the exported workflow JSON.
* Import it into your n8n instance via **“Import from File”** or **“Import from URL”**.

**2. Configure Credentials**:

* In **n8n &gt; Credentials**, add credentials for:
  - **Email account (Gmail API)**: Provide Client ID and Client Secret from the Google Cloud Platform.
  - **Supabase**: Provide the Supabase URL and the anon public API key.
  - **OpenRouter (Optional)**: Add your OpenRouter API key for use with any AI-powered resume parsing nodes.

* Assign these credentials to their respective nodes:

  - **Gmail Trigger** → Email credentials.
  - **Supabase Insert** → Supabase credentials.
   - **AI Parsing Node** → OpenRouter credentials.

**3. Set Up Supabase Table**:

Create a table in Supabase with columns such as:
`name`, `email`, `phone`, `education`, `experience`, `skills`, `received_date`, etc.

Make sure the field names align with the structure used in your workflow.

**4. Customize Nodes:**

* **Parsing Node(s):** Modify the workflow to use an **OpenAI model** directly for field extraction, replacing the **Basic LLM Chain** node that utilizes OpenRouter.

**5. Test the Workflow:**

* Send a test email with a resume attachment.
* Check n8n's execution log to confirm the workflow triggered, parsed the data, and inserted it into Supabase.
* Verify data integrity in your Supabase table.

 ### **How It Works**
**High-Level Workflow 🔍**

1. **Email Monitoring:** Triggered when a new email with an attachment is received (via Gmail API).
2.  **Attachment Check:** Verifies the email contains at least one attachment.
3.  **Prepare Data:** Extracts the attachment and prepares it for analysis.
4. **Data Extraction:** Uses OpenRouter-powered LLM (if configured) to extract structured information from the resume.
5. **Data Storage:** The structured information is saved into the Supabase database.

### **Node Names and Actions (Example)**

* **Gmail Trigger:** Triggers when a new email is received.
* **IF**: Checks whether the received email includes any attachments.
* **Get Attachments:** Retrieves attachments from the triggering email.
* **Prepare Data:** Prepares the attachment content for processing.
* **Basic LLM Chain:** Uses an AI model via OpenRouter to extract relevant resume data and returns it as structured fields.
* **Supabase-Insert:** Inserts the structured resume data into your Supabase database.

## 🔗 Nodes Used

HTTP Request, Supabase, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
