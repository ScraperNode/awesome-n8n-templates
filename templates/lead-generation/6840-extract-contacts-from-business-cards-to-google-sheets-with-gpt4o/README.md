# 🎣 Extract contacts from business cards to Google Sheets with GPT4o

> ⚡ **1,730 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# 📄 Auto Extract Contacts from Business Cards to Sheet With GPT4o
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/n8n-free-workflow-to-auto-generate-leads-from-name-cards.jpg)](https://www.youtube.com/watch?v=2EWgC5UKiBQ)
&gt; This smart workflow extracts names, phone numbers, emails, and more from uploaded name card photos using AI, then logs them neatly into your Google Sheet. No typing. No mess. Just upload and go.

## 👤 Who’s it for

- Sales & Business Development Teams  
- Recruiters & Talent Acquisition Specialists  
- Event Teams collecting business cards  
- Admins who manage contact databases manually  

## ⚙️ How it works / What it does

This workflow automates the extraction of contact details from uploaded name card (business card) images and stores them in a structured Google Sheet for easy tracking and follow-up.

### Workflow Steps:
1. User uploads one or more name card images through a web form.
2. The uploaded files are saved to a Google Drive folder for archiving.
3. A smart AI agent (with OCR and GPT capabilities) scans each image and extracts relevant contact data into structured JSON format.
4. Data is transformed, cleaned (e.g., removing `+` from phone numbers), and filtered.
5. Valid contacts are appended to a Google Sheet for central tracking and future use.

## 🛠 How to set up

1. **Create a Form**  
   - Allow file upload (JPG/PNG format).
   - Label it as “Name Card Uploader” with a clear description.

2. **Upload to Google Drive**  
   - Use the Google Drive node to store uploaded images.

3. **Configure Smart Agent**  
   - Use GPT-4o or similar model with OCR capability.
   - Apply a structured output parser to extract contact fields like name, phone, email, company, etc.

4. **Transform Data**  
   - Use the Code node to clean and structure contact info.
   - Strip out unwanted characters from phone numbers (e.g., `+`).

5. **Filter Invalid Records**  
   - Remove entries with no meaningful contact data.

6. **Append to Google Sheets**  
   - Use the Google Sheets node with "Append Sheet Row".
   - Map fields to columns like Name, Phone, Email, etc.

## ✅ Requirements

- n8n workflow environment  
- Google Drive integration (for file storage)  
- Google Sheets integration (for storing contacts)  
- GPT-4o or any image-capable LLM  
- Clear name card images (PNG/JPG, readable text)  
- (Optional) Slack/email integration for notifications

## 🧩 How to customize the workflow

- **CRM Sync**: Connect to platforms like HubSpot, Salesforce, or Zoho.  
- **Validation Logic**: Ensure records contain key fields like name or email before writing.  
- **Uploader Info**: Attach submitter metadata to each contact record.  
- **Language Adaptation**: Adjust extracted field labels/output to target your preferred language.  
- **Batch Upload**: Handle multiple cards in a single image or multiple uploads in one go.

## 🔗 Nodes Used

Google Sheets, Google Drive, Filter, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
