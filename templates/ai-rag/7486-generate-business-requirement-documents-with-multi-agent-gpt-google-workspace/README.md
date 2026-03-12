# 🔍 Generate business requirement documents with Multi-agent GPT & Google Workspace

> ⚡ **1,460 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

# Multi-agent RAG system for smarter BRD (Business Requirement Document) writing

## **Who’s it for**
This workflow is designed for Business Analysts, Project Managers, and Operations Teams who need to automate the creation, tracking, and delivery of Business Requirements Documents (BRDs) from submitted forms and supporting materials. It’s ideal for organizations handling multiple BRD requests and looking to streamline document generation, archiving, and communication.

## **How it works / What it does**
1. **Trigger**: The process begins when a BRD request form is submitted along with any supporting files.
Sample supporting document PDF: [Download URL](https://wisestackai.s3.ap-southeast-1.amazonaws.com/Customer+Feedback+Analysis+%26+Automation+Platform.pdf)
2. **Data Recording**:
   - Creates a BRD request record and appends it to a tracking Google Sheet.
   - Handles multiple uploaded files, saving them to Google Drive.
   - Creates supporting document records and updates the supporting documents tracking sheet.
3. **Content Extraction & Storage**:
   - Extracts text from uploaded PDF files.
   - Inserts extracted content into a vector store for contextual retrieval by AI agents.
4. **Document Generation**:
   - Uses two specialized AI agents:
     - **General BRD Writer Agent** for the overall document structure.
     - **Business Requirement Writer Agent** for detailed business requirement sections.
   - Both agents query the stored data and produce content, which is then merged.
5. **Metadata & File Creation**:
   - Configures metadata for the document.
   - Creates a final document file (Google Docs).
6. **Finalization**:
   - Converts the document to PDF [Sample output](https://wisestackai.s3.ap-southeast-1.amazonaws.com/BRD-2025-001+Customer+Feedback+Analysis+%26+Automation+Platform.pdf)
   - Archives the PDF in Google Drive.
   - Sends a BRD response email to the requester with the completed document.
   - Updates the request status in the Google Sheet as completed.

## **How to set up**
1. **Prepare Google Sheets**:
   - Create a BRD tracking sheet.
   - Create a supporting document tracking sheet.
2. **Configure Google Drive**:
   - Set up folders for supporting documents and archived PDFs.
   - Ensure the workflow has API access to upload and retrieve files.
3. **Form Integration**:
   - Connect your BRD request form to trigger the workflow.
4. **Vector Store**:
   - Configure a vector database or embedding store for extracted document text.
5. **AI Agents**:
   - Configure the **General BRD Writer Agent** and **Business Requirement Writer Agent** with your preferred OpenAI model.
   - Link both agents to the Query Data Tool for retrieving embedded content.
6. **Email Setup**:
   - Configure email sending credentials to deliver final BRDs to requesters.

## **Requirements**
- Google Sheets API credentials.
- Google Drive API credentials.
- An OpenAI API key with access to the desired models.
- A form submission trigger (e.g., Google Forms, Typeform).
- Vector store or embedding database for contextual AI queries.
- Permissions for file uploads, downloads, and updates in Google Drive.

## **How to customize the workflow**
- **Custom Templates**: Modify the AI agents’ system prompts to match your organization’s BRD format and tone.
- **Metadata Fields**: Add custom fields (e.g., department, priority level) during metadata configuration.
- **File Storage Paths**: Adjust Google Drive folder structure for project-specific storage.
- **Approval Steps**: Insert an approval workflow between draft document creation and final archiving.
- **Notification Channels**: Add Slack, Microsoft Teams, or other notification integrations in addition to email.
- **AI Model Selection**: Swap the OpenAI model for another LLM or fine-tuned variant to improve BRD quality for your domain.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, SendGrid, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
