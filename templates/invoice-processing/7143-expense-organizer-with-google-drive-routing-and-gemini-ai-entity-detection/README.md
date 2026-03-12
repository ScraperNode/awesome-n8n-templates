# 🧾 Expense organizer with Google Drive routing and Gemini AI entity detection

> ⚡ **784 views** · 🧾 [Invoice Processing](../)

## Description

## Who's it for

This workflow is perfect for individuals, small businesses, or households who need to:
- Automatically process and categorize expense receipts
- Extract structured data from invoices and receipts using AI
- Store receipts in multiple locations (Google Drive and S3)
- Send automated email notifications with expense details
- Send documents to accounting systems via email hooks

## How it works

This comprehensive expense processing workflow combines AI-powered document analysis with automated file management and notifications. Here's the complete flow:

1. **Form Submission**: Users submit expenses through a web form with receipt upload and category selection (Personal, Business, or Shared/Home)

2. **AI Document Processing**: The workflow extracts text from PDF receipts using OCR, then uses Google Gemini AI to parse and structure the data into a standardized JSON format including vendor details, amounts, dates, and categorization

3. **Smart Routing**: Based on the expense category, receipts are automatically routed to different processing paths with category-specific folder organization

4. **Multi-Destination Storage**: Receipts are uploaded to:
   - Google Drive (organized by year/month folders)
   - S3 cloud storage buckets
   - Different destinations based on expense type

5. **Email Notifications**: Sends formatted HTML email notifications with complete expense details and links to stored receipts

6. **Accounting System Integration**: Automatically forwards business expenses to accounting systems via email hooks (customizable per user requirements)

## Requirements

### Credentials needed:
- **Google Gemini API**: For AI-powered document analysis
- **Google Drive OAuth2**: For personal and business drive access
- **Gmail OAuth2**: For sending email notifications
- **S3 Storage**: For cloud backup (AWS S3, Wasabi, etc.)

### Services used:
- Google Drive (multiple accounts supported)
- Google Gemini AI
- Gmail
- S3-compatible storage
- Form trigger webhook

## How to set up

### Step 1: Configure Credentials
1. Set up Google Gemini API credentials in n8n
2. Configure Google Drive OAuth2 for both personal and business accounts
3. Add Gmail OAuth2 credentials
4. Set up S3 storage credentials

### Step 2: Update Configuration
1. Replace all placeholder values:
   - `YOUR_GEMINI_CREDENTIAL_ID` with your Gemini credential ID
   - `YOUR_PERSONAL_GDRIVE_CREDENTIAL_ID` with personal Drive credential
   - `YOUR_BUSINESS_GDRIVE_CREDENTIAL_ID` with business Drive credential
   - `YOUR_GMAIL_CREDENTIAL_ID` with Gmail credential
   - `YOUR_S3_CREDENTIAL_ID` with S3 credential

2. Update Google Drive folder structure:
   - Replace `YOUR_BUSINESS_DRIVE_ID` and `YOUR_SHARED_DRIVE_ID` with actual drive IDs
   - Update the JavaScript code in the three Code nodes with your actual folder mapping

3. Configure email addresses:
   - Replace `user@example.com` with your notification email
   - Replace `receipts@paperless-service.com` with your accounting system's email hook (this is a mail hook for uploading documents to small business accounting systems - can be modified per user requirements)

4. Update S3 bucket names:
   - Replace `business-expenses`, `personal-expenses`, and `shared-expenses` with your bucket names

### Step 3: Set Up Folder Structure
Create organized folder structures in your Google Drives:
```
Drive Root/
├── 2024/
│   ├── January/
│   ├── February/
│   └── ... (all months)
├── 2025/
│   ├── January/
│   └── ... (all months)
└── 2026/
    └── ... (all months)
```

### Step 4: Test the Workflow
1. Activate the workflow
2. Submit a test expense through the form
3. Verify files are uploaded to correct locations
4. Check email notifications are received

## How to customize the workflow

### Expense Categories
Modify the form dropdown options and conditional logic to add/remove expense categories:
- Edit the "On form submission" node form fields
- Update the IF condition nodes for routing
- Add new processing paths as needed

### AI Processing Schema
Customize the structured output parser schema to extract different fields:
- Modify the JSON schema in the "Structured Output Parser" node
- Update the AI system prompt for different extraction requirements
- Add new fields for specific business needs

### Storage Destinations
Add or modify storage locations:
- Duplicate upload nodes for additional cloud services
- Modify folder organization logic in Code nodes
- Add new conditional routing for different storage rules

### Email Templates
Customize the HTML email template:
- Edit the email message content in the Gmail node
- Add/remove expense fields in the table
- Modify styling and branding

### Folder Organization
Update the JavaScript code in Code nodes to match your folder structure:
- Modify the CSV data with your actual folder IDs
- Change the date-based organization logic
- Add custom folder naming conventions

### Integration Extensions
Extend the workflow with additional integrations:
- Add Slack notifications
- Connect to accounting software (QuickBooks, Xero)
- Integrate with expense management platforms
- Add approval workflows for business expenses

## 🔗 Nodes Used

Google Drive, Gmail, S3, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
