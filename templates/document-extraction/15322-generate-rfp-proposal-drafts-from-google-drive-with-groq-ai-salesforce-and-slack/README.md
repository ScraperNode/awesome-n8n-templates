# 🔬 Generate RFP proposal drafts from Google Drive with Groq AI, Salesforce and Slack

> ⚡ **78 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# RFP Automation Workflow with Google Drive, Groq AI (LLaMA 3), Salesforce & Slack
&gt; Automate Your Entire RFP Lifecycle


This workflow automatically detects new RFP documents uploaded to Google Drive, extracts key requirements using Groq AI (LLaMA 3), generates a complete proposal draft, stores it in Google Docs, creates a Salesforce opportunity, assigns a review task and notifies your team via Slack.

### Quick Implementation Steps

1. [Connect your Google Drive, Groq API, Salesforce, Google Docs and Slack accounts in n8n](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Set your **RFP Intake Folder ID** in the trigger node
3. Set a **separate Knowledge Base folder** for past proposals
4. Customize your **company profile** in the AI proposal generator node
5. Activate the workflow
6. Upload an RFP → Everything runs automatically


## What It Does

This workflow fully automates the end-to-end process of handling RFP (Request for Proposal) documents. When a new file is uploaded to a specific Google Drive folder, the workflow immediately triggers and downloads the document. It then extracts text from the file and prepares structured metadata such as file name, URL and timestamp.

Using Groq-powered AI (LLaMA 3), the workflow analyzes the document and converts unstructured RFP content into structured JSON data. This includes critical fields like client name, project scope, deadlines, budget, technical requirements and evaluation criteria. The workflow ensures that even imperfect AI outputs are safely parsed and normalized.

Next, the workflow enhances proposal quality by referencing past proposals stored in a separate knowledge base folder. It then generates a complete, professional proposal draft tailored to the extracted requirements. Finally, it stores outputs in Google Docs and Salesforce, assigns a review task and notifies the team via Slack—ensuring no RFP is missed and every response is standardized.


## Who It's For

- IT services companies handling frequent RFP submissions  
- Consulting firms responding to client proposals  
- Digital agencies managing multiple bids  
- Sales and business development teams  
- Enterprises looking to standardize proposal creation  


## Requirements

To use this workflow, you need:

- [**n8n account** (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- **Google Drive account**
  - RFP Intake Folder
  - Knowledge Base Folder (past proposals)
- **Groq API Key**
- **Salesforce account**
  - Opportunity + Task access
- **Google Docs account**
- **Slack workspace**


## How It Works & Set Up

### Step 1: Google Drive Trigger Setup

- Configure **Watch RFP Upload Folder** node  
- Replace with your **RFP Intake Folder ID**  
- Trigger: `fileCreated`

### Step 2: File Processing

- The workflow:
  - Downloads the uploaded file  
  - Extracts text (PDF supported)  
  - Prepares metadata (file name, ID, URL, timestamp)

### Step 3: AI Requirement Extraction

- Configure Groq API credentials  
- Model used: `llama-3.3-70b-versatile`  
- Extracts structured data such as:
  - Client name  
  - Project scope  
  - Budget & deadlines  
  - Technical requirements  

### Step 4: Clean & Parse Output

- Code node ensures:
  - JSON is valid  
  - Markdown artifacts are removed  
  - Fallback structure is used if parsing fails  

### Step 5: Knowledge Base Integration

- Configure **Fetch Past Proposals (KB)** node  
- Replace with your **separate Knowledge Base folder ID**  
- Fetches previous proposal documents for reference  

### Step 6: AI Proposal Generation

- Uses extracted requirements + KB context  
- Generates a full proposal with sections:
  - Executive Summary  
  - Solution  
  - Timeline  
  - Pricing  
  - Team  
- Customize **company details inside prompt**

### Step 7: Output Storage

- Saves proposal to **Google Docs**
- Creates **Salesforce Opportunity** with:
  - Name  
  - Deadline  
  - Value  
  - Description  

### Step 8: Task Creation & Notification

- Creates a **Salesforce Task** for review  
- Sends notification to **Slack channel**  


## How To Customize Nodes

### AI Nodes

- Change model (e.g., Mixtral, LLaMA variants)  
- Adjust temperature:
  - `0.1` → structured extraction  
  - `0.7` → creative writing  

### Proposal Generator

- Update:
  - Company name  
  - Services  
  - Strengths  
- Modify proposal sections if needed  

### Salesforce Node

- Map custom fields (e.g., Industry__c)  
- Adjust stage names or pipeline stages  

### Slack Node

- Change channel (`#general`)  
- Customize notification message  


## Add-Ons

You can extend this workflow with:

- Email notifications (Gmail/Outlook)  
- Approval workflows before submission  
- PDF export of proposal  
- CRM enrichment (HubSpot, Zoho)  
- AI scoring for win probability  
- Auto-deadline reminders  


## Use Case Examples

1. Automatically respond to government RFPs  
2. IT companies generating proposals for software projects  
3. Agencies handling multiple client bids daily  
4. Consulting firms standardizing proposal quality  
5. Sales teams tracking opportunities with zero manual entry  

There can be many more use cases depending on your business workflow and automation needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| Workflow not triggering | Incorrect folder ID | Verify Google Drive folder ID |
| No text extracted | Unsupported file format | Use PDF format |
| AI output parsing fails | Unexpected AI response | Check logs in "Clean & Parse AI Output" node |
| Salesforce error | Missing custom fields | Remove or create fields in Salesforce |
| Proposal not saved | Google Docs credentials issue | Reconnect Google Docs API |
| Slack message not sent | Wrong channel or credentials | Verify Slack integration |


## Need Help?

If you need help setting up, customizing or scaling this workflow, our [n8n workflow development team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** is happy to help.

We can help you:

- Customize AI prompts for your business  
- Integrate additional CRMs or tools  
- Build advanced automation pipelines  
- Optimize proposal quality using AI  

[Reach out to WeblineIndia for expert support and tailored automation solutions](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Salesforce, Google Docs, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
