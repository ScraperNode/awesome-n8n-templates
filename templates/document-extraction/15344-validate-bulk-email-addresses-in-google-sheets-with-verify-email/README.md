# 🔬 Validate bulk email addresses in Google Sheets with Verify Email

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📧 Google Sheets Bulk Email Validator

Automatically validate email addresses in Google Sheets using Verify Email

This workflow scans your Google Sheets weekly (configurable), finds unverified email addresses, and validates them through the Verify Email API. Results are automatically added back to your spreadsheet

### 📋 How It Works

1. Reads all email addresses from your Google Sheets
2. Validates email addresses that haven't been verified yet (Status column is empty)
3. Writes results — Valid or Block with the reason for blocking

### 🔧 Required Google Sheets Setup

**Your Google Sheet MUST have these column headers in Row 1:**

| Column | Header | Content |
|--------|--------|---------|
| A | **Email** | Email addresses to validate |
| B | **Status** | Validation result: `Valid` or `Block` |
| C | **Reason** | Block reason: Invalid, Blacklisted, Disposable |

**Example table:**

|  | A | B | C |
|-----|---|---|---|
| 1 | **Email** | **Status** | **Reason** |
| 2 | user@example.com | (empty) | (empty) |
| 3 | john@company.com | (empty) | (empty) |

### 🚀 Setup Instructions

#### Step 1: Google Cloud Console Setup (One-time)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing one)
3. Enable APIs:
   - Search for "Google Sheets API" → Click Enable
   - Search for "Google Drive API" → Click Enable
4. Create OAuth 2.0 credentials:
   - Go to Credentials → Create Credentials → OAuth 2.0 Client ID
   - Select Web application
   - Add authorized redirect URI
   - Copy your Client ID and Client Secret
5. Save these for the next step
6. Log in to your Google account. Select your Google account and grant permissions
7. Verify the connection shows "Account connected"

#### Step 2: Prepare Your Google Sheet

1. Open your Google Sheets file
2. In Row 1, add these exact headers:
   - Cell A1: `Email`
   - Cell B1: `Status`
   - Cell C1: `Reason`
3. Starting from Row 2, add your email addresses in Column A only
4. Leave Column B (Status) empty — workflow will fill it with validation results
5. Leave Column C (Reason) empty — workflow will fill it with block reasons

#### Step 3: Configure Workflow with Your Sheet Details

1. Find your **Sheet ID** (it's in your Google Sheets URL):
   - `docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`
2. Update in workflow:
   - **Document ID** → Paste your Sheet ID
   - **Sheet Name** → Tab name (default: "Sheet1")

#### Step 4: Get Verify Email API Key

1. Visit [verify-email.app](https://verify-email.app)
2. Sign up for a free account (50 verifications/month)
3. Go to Dashboard → API Keys
4. Copy your API Key
5. Add it as credential in n8n:
   - Click on "Verify API (Batch)" node in workflow
   - Create new credential: "Verify Email API Key"
   - Paste your API key
   - Save
   
#### Step 5: Choose Your Trigger

The workflow has 3 different triggers:

**Trigger 1: Scheduled (Weekly)**
- Runs automatically every Monday at 8:00 AM
- Click "Publish" to enable
- Edit the Schedule Trigger to change timing

**Trigger 2: Manual (Execute)**
- Click "Execute workflow" button to run on demand
- Use this to test or validate emails immediately
- No scheduling needed

**Trigger 3: Webhook**
- Trigger validation from external services or apps
- Send a POST request to the webhook URL
- Useful for automated integrations

To activate: Click "Publish" to enable scheduled runs, then choose additional triggers as needed

### ✅ How to Use

1. Add email addresses only to Column A (starting Row 2)
2. Leave Column B (Status) and Column C (Reason) empty 
3. Workflow runs automatically on schedule or manually
4. Results will appear in Column B (Valid/Block) and Column C (block reason)
5. Already-verified emails are skipped on next runs

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
