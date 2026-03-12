# 🔬 Extract legal contract data & send alerts with VLM run, Google Workspace & Slack

> ⚡ **171 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📜 AI-Powered Contract Management Pipeline (Google Drive + VLM Run + Sheets + Calendar + Slack)

### ⚙️ What This Workflow Does

This workflow automatically extracts, organizes, and tracks legal contract details from documents uploaded to Google Drive. Using **VLM Run’s Execute Agent**, it parses key metadata such as contract ID, parties, dates, and terms — then stores, alerts, and schedules reminders through Google Sheets, Calendar, and Slack.

### 🧩 Requirements
- **Google Drive OAuth2** for monitoring and downloads  
- **VLM Run API credentials** with Execute Agent access  
- **Google Sheets OAuth2** for structured record storage  
- **Google Calendar OAuth2** for key date reminders  
- **Slack API credentials** for team notifications  
- A reachable **Webhook URL** (for receiving parsed contract data)


### ⚡Quick Setup

1. Configure Google Drive OAuth2 and create  upload folder and folder for saving extracted images.
2. Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.
3. Add VLM Run [API credentials](https://app.vlm.run/dashboard) for document parsing.
4. Configure Google Sheet and Calendar. 
5. For Google Sheet, from the document list, pick your Google Sheet (e.g., test). Then select the sheet inside it (e.g., Sheet1).

6. Set the operation to Append Row — this will add new contract details as new rows.

7. Turn on Map Each Column Manually. Match each contract field (like Contract ID, Title, Parties, Effective Date, Termination Date) to its corresponding column in your Google Sheet.

8. Configure Slack for notifications.

### ⚙️ How It Works

1. **Monitor Contract Uploads** – Watches a target Google Drive folder for new file uploads (PDFs, images, or scans).  
2. **Download Contract File** – Automatically downloads new contracts for AI analysis.  
3. **VLM Run ContractParser** – Sends the file to the **VLM Run Execute Agent**, which extracts structured contract data, including:  
   - Contract ID  
   - Title  
   - Parties (with roles)  
   - Property address  
   - Effective date  
   - Termination date  
   - Rent, deposit, payment terms, and governing law  
4. **Receive Contract Data** – The webhook endpoint receives the structured JSON response.  
5. **Format Contract Data** – Normalizes fields, formats dates, and prepares for storage.  
6. **Save to Expense Database (Google Sheets)** – Appends extracted data to a master Google Sheet for centralized contract tracking.  
7. **Notify via Slack** – Posts a concise summary to a Slack channel, showing key contract details for visibility.  
8. **Create Calendar Events** – Automatically schedules Google Calendar events for:  
   - **Effective Date**  
   - **Termination Date**  
   - **Renewal Reminder** (60 days before termination)


### 💡 Why Use This Workflow

Manual contract management is error-prone and time-consuming key details like renewal dates, payment terms, or termination clauses often get lost in email threads or folders. This workflow ensures:

- **Zero missed deadlines**  automatic Google Calendar reminders keep your team on track.

- **Instant team visibility** - Slack notifications keep legal, finance, and operations aligned.

- **End-to-end automation** no need for manual parsing, data entry, or follow-ups.

### 🧠 Perfect For
- Legal teams automating contract intake and tracking  
- Real estate or lease management workflows  
- Finance or procurement teams needing expiration alerts  
- Organizations centralizing contract metadata in Sheets  

### 🛠️ How to Customize

1. Modify Extraction Fields
Edit the VLM Run Execute Agent schema to add fields like contract value, payment schedule, department, or contact email.
2. Change Storage
Swap Google Sheets for Airtable, Notion, or BigQuery if you manage large datasets or need relational tracking.
3. Customize Notifications
Send Slack alerts only for high-value or expiring contracts, and tag relevant teams (e.g., @legal, @finance).
4. Add Calendar Events
Auto-create events for reviews or payment milestones using extra date fields.
5. Add Approvals or Signatures
Insert a Google Form or Slack approval step, or trigger DocuSign for e-signature automation.

### ⚠️ Community Node Disclaimer

This workflow uses community nodes (VLM Run) that may need additional permissions and custom setup.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Drive, Google Calendar, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
