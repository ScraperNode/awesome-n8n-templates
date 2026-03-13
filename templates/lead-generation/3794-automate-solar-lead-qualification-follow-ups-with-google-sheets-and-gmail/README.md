# 🎣 Automate solar lead qualification & follow-ups with Google Sheets and Gmail

> ⚡ **902 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

# Automate Solar Lead Qualification & Follow-ups with Google Sheets and Gmail

Note: This template is designed for both self-hosted and cloud-based n8n instances. The workflow image above shows the complete automation flow.

This n8n workflow automates the entire solar lead qualification process - from capturing lead information through a webhook, storing data in Google Sheets, evaluating qualification criteria, and sending personalized email follow-ups based on qualification status.

## Who is this for?

This workflow is designed for:

* Solar installation companies
* Solar sales teams
* Renewable energy consultants
* Lead generation specialists in the solar industry

## What problem does this workflow solve?

Managing solar leads efficiently can be challenging. This workflow solves several key pain points:

* Time-consuming manual lead qualification: Automatically evaluates leads against predefined criteria
* Inconsistent follow-up: Ensures every lead receives a timely, personalized response
* Document management: Securely stores and shares utility bill documents
* Lead tracking inefficiency: Centralizes lead data in Google Sheets with qualification status

## What this workflow does

This workflow creates a complete solar lead management system that:

1. Captures lead information through a webhook endpoint
2. Securely stores utility bill uploads in Google Drive
3. Records all lead data in Google Sheets
4. Automatically evaluates leads based on three qualification criteria:
   * Homeownership status
   * Credit score (must be 650+)
   * Absence of trees on roof
5. Updates qualification status in the Google Sheet
6. Sends personalized email follow-ups based on qualification status:
   * Qualified leads receive a congratulatory email with next steps
   * Disqualified leads receive helpful information about why they didn't qualify and suggestions for remediation

## Setup

### Prerequisites

Before setting up this workflow, you'll need:

1. A self-hosted n8n instance
2. Google account with access to:
   * Google Sheets
   * Google Drive
   * Gmail
3. A form on your website that can make POST requests to a webhook

### Step 1: Google Sheets Setup

1. Create a new Google Sheet for storing leads
2. Add the following columns in the first row (exact naming is important):
   * Name
   * Address
   * Has Trees on Roof
   * credit score
   * phone
   * Zip code
   * Email
   * Homeowner
   * utility bill
   * Qualification status
   * Disqualification reason

### Step 2: Google Drive Setup

1. Sign in to your Google Drive account
2. Create a folder named "Solar Lead Utility Bills" (or your preferred name)
3. Right-click on the folder and select "Share"
4. Set permissions to "Anyone with the link can view"
5. Note the folder ID from the URL for configuration (the long string after /folders/ in the URL)

### Step 3: Configure Google Credentials in n8n

1. In your n8n instance, go to Settings → Credentials
2. Add credentials for:
   * Google Sheets: Create new credentials, follow OAuth2 authentication
   * Google Drive: Create new credentials, follow OAuth2 authentication
   * Gmail: Create new credentials, follow OAuth2 authentication
3. Ensure all credentials have the necessary scopes:
   * Google Sheets: .../auth/spreadsheets
   * Google Drive: .../auth/drive
   * Gmail: .../auth/gmail.send

### Step 4: Import and Configure the Workflow

1. In n8n, go to Workflows → Import from File
2. Upload the workflow JSON file
3. Update all Google Sheets nodes with your Google Sheet document ID:
   * Open your Google Sheet
   * Copy the ID from the URL (long string between /d/ and /edit)
   * Update the document ID field in the Google Sheets nodes
4. In the "[STEP 2] Upload Utility Bill" node, set the folder destination to your created folder

### Step 5: Configure the Webhook

1. Activate the "[STEP 1] Receive Form Submission" webhook node
2. Copy the generated webhook URL
3. Configure your website form to send data to this URL
4. Ensure your form submits the following fields with exact naming:
   * firstName
   * lastName
   * address
   * hasTreesOnRoof
   * creditScore
   * phone
   * zipCode
   * email
   * homeOwnership
   * utilityBill (file upload)

### Step 6: Customize Email Templates

1. Open the "[STEP 10A] Send Acceptance Email" node
2. Customize the email subject and message to match your company's branding
3. Open the "[STEP 10B] Send Rejection Email" node
4. Customize the rejection email to reflect your company's voice

### Step 7: Activate and Test

1. Click "Save" on the workflow
2. Toggle the "Active" switch to activate the workflow
3. Submit a test lead through your form
4. Check that:
   * The data appears in your Google Sheet
   * The qualification status is updated correctly
   * The appropriate email is sent

## How to customize this workflow to your needs

### Adjusting Qualification Criteria

You can modify the qualification logic in the "[STEP 7] Check Qualification Criteria" node:

1. Open the node and click the "Edit Code" button
2. Locate the criteria sections (homeowner, credit score, trees on roof)
3. Modify the conditions as needed:

```javascript
// Example: Change credit score threshold
if (creditScoreRaw.includes("600 - 649") ||
    creditScoreRaw.includes("650 - 689") ||
    creditScoreRaw.includes("690 - 719") ||
    creditScoreRaw.includes("720+")) {
    creditQualified = true;
}
```

4. Add additional criteria if needed

### Customizing Email Templates

Personalize your emails further:

1. Open the email nodes
2. Use variable references to include more customer data:

```
Dear {{ $json.Name }},

We noticed your utility bill shows an average of {{ $json.monthlyBill }} per month.
With solar, you could save approximately {{ $json.monthlySavings }}.
```

### Adding Integration with CRM Systems

Extend this workflow by connecting it to your CRM:

1. Add a Hubspot/Salesforce/etc. node after the "[STEP 8] Update Qualification Status" node
2. Configure the node to create or update contacts in your CRM
3. Map the lead data fields to your CRM fields

## Troubleshooting

### Common Issues

1. Webhook not receiving data
   * Verify your form is correctly configured to send POST requests
   * Check CORS settings on your website
   * Ensure all required fields are being sent

2. Google Drive upload failing
   * Check Google Drive permissions
   * Verify your OAuth scopes include drive.file
   * Ensure your Drive has sufficient storage space

3. Email not sending
   * Verify Gmail credentials
   * Check if Gmail API is enabled in your Google Cloud Console
   * Look for Send Rate Exceeded errors in execution logs

### Google Sheets Column Format

If you're having issues with data not appearing correctly:

1. Make sure the column names exactly match those in the code
2. Check that the Google Sheet permissions allow editing
3. Verify the sheet name is correctly referenced in the nodes

## Getting Help

If you encounter issues with this template, you can:

* Check the n8n documentation on webhooks
* Review Google Sheets integration documentation
* Post in the n8n community forum

This template was created by David Olusola. If you find it helpful, please consider giving it a star in the n8n template library!

## 🔗 Nodes Used

Function, Google Sheets, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
