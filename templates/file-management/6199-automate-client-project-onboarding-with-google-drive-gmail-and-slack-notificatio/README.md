# 📁 Automate client project onboarding with Google Drive, Gmail, and Slack notifications

> ⚡ **367 views** · 📁 [File Management](../)

## Description

## ⚙️ How it works
1. Workflow starts from a manual trigger or form submission with project details.
2. It extracts key input data like client name, email, project type, deadline, and brand folder (optional).
3. A Google Drive folder is automatically created inside a designated parent folder.
4. The shareable link of the newly created folder is generated.
5. A personalized email is composed and sent to the client using Gmail, including project details and folder link.

## 🛠️ Set up steps
1. **Google Drive Setup**:  
   - Connect your Google Drive credentials in n8n.  
   - Set the parent folder ID where all project folders should be created.

2. **Gmail Setup**:  
   - Connect a Gmail account with proper access.  
   - Customize the subject and message template in the Gmail node.

3. **Input Data Preparation**:  
   - Ensure the following input fields are provided:  
     - `client_name`  
     - `contact_email`  
     - `project_type`  
     - `deadline`  
     - `brand_drive_folder` (optional)

4. **Test & Deploy**:  
   - Use mock data or a test trigger to validate the workflow.  
   - Once confirmed, deploy it with the actual trigger (e.g. webhook, form submission).

## 🔗 Nodes Used

Slack, Google Drive, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
