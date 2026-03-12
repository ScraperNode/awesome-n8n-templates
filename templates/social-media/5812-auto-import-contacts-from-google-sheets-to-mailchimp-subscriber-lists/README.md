# 📱 Auto-import contacts from Google Sheets to MailChimp subscriber lists

> ⚡ **630 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Google Sheets to MailChimp Auto-Importer

## Overview
This n8n workflow automatically imports contacts from Google Sheets into your MailChimp mailing list. Perfect for businesses collecting leads through Google Forms, event registrations, or maintaining contact lists in spreadsheets.

## Key Features
- 📊 **Bulk Import**: Process entire Google Sheets at once
- 🔄 **Smart Name Parsing**: Automatically splits full names into first and last names
- 📱 **Phone Number Support**: Includes phone numbers as merge fields
- ⚡ **Error Resilience**: Continues processing even if individual contacts fail
- 📝 **Import Summary**: Generates a summary of processed contacts

## Prerequisites
Before using this workflow, ensure you have:
1. An active n8n instance (self-hosted or cloud)
2. A Google account with access to Google Sheets
3. A MailChimp account with at least one audience/list created
4. Basic understanding of n8n workflows

## Initial Setup

### Step 1: Import the Workflow
1. Copy the workflow JSON
2. In n8n, click "Import from File" or paste the JSON
3. Save the workflow with a meaningful name

### Step 2: Configure Google Sheets Connection
1. Click on the "Get Google Sheet Data" node
2. Click on "Credential to connect with"
3. Select "Create New" and choose "Google Sheets OAuth2"
4. Follow the OAuth flow to authenticate your Google account
5. Save the credentials

### Step 3: Configure MailChimp Connection
1. Click on the "Add to MailChimp" node
2. Click on "Credential to connect with"
3. Select "Create New" and choose "MailChimp OAuth2" or "MailChimp API"
4. For API method:
   - Log into MailChimp
   - Go to Account → Extras → API keys
   - Generate a new API key
   - Copy and paste it into n8n
5. Save the credentials

### Step 4: Configure Your Specific Settings

#### Google Sheets Settings:
1. Open the "Get Google Sheet Data" node
2. Replace `YOUR_GOOGLE_SHEET_ID` with your actual sheet ID
   - Find this in your Google Sheets URL: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
3. Replace `YOUR_SHEET_NAME` with your worksheet name (e.g., "Sheet1" or "Form Responses 1")

#### MailChimp Settings:
1. Open the "Add to MailChimp" node
2. Replace `YOUR_MAILCHIMP_LIST_ID` with your audience ID
   - Find this in MailChimp: Audience → Settings → Audience name and defaults
3. Verify the status is set to "subscribed"

## Google Sheets Format Requirements

Your Google Sheet must have the following columns (exact names):
- **Names**: Full name of the contact (e.g., "John Doe")
- **Email address**: Valid email address
- **Phone Number**: Contact phone number (optional)

Example:
| Names | Email address | Phone Number |
|-------|--------------|--------------|
| John Doe | john@example.com | +1234567890 |
| Jane Smith | jane@example.com | +0987654321 |

## How to Use

### Manual Execution:
1. Open the workflow in n8n
2. Click "Execute Workflow"
3. Monitor the execution progress
4. Check the output of "Create Import Summary" for results

### Scheduling (Optional):
To run this automatically:
1. Replace the "Manual Trigger" node with a "Schedule Trigger" node
2. Set your desired schedule (e.g., daily at 9 AM)
3. Activate the workflow

## Customization Options

### Adding More Fields:
To include additional fields like company name or address:
1. Add columns to your Google Sheet
2. Modify the "Edit Fields" node to include new fields
3. Update the "Format Subscriber Data" code to map new fields
4. Add corresponding merge fields in the MailChimp node

### Handling Duplicates:
The workflow uses "continueRegularOutput" error handling, which means:
- Existing subscribers will be skipped
- New subscribers will be added
- The workflow continues processing

### Adding Email Notifications:
To receive import summaries via email:
1. Add a Gmail or Email node after "Create Import Summary"
2. Configure with your email settings
3. Use the import summary data in the email body

## Troubleshooting

### Common Issues:

1. **"Invalid API Key" (MailChimp)**
   - Verify your API key is correct
   - Check that your MailChimp account is active

2. **"Sheet not found" (Google Sheets)**
   - Verify the sheet ID is correct
   - Ensure the service account has access to the sheet

3. **"Email already exists" errors**
   - This is normal for existing subscribers
   - The workflow will continue processing other contacts

4. **Missing data in MailChimp**
   - Check that column names match exactly (case-sensitive)
   - Verify data exists in the Google Sheet

## Best Practices

1. **Test First**: Always test with a small dataset first
2. **Backup Data**: Export your MailChimp list before large imports
3. **Clean Data**: Ensure email addresses are valid before importing
4. **Monitor Regularly**: Check import summaries for any issues
5. **Respect Privacy**: Only import contacts who have consented to receive emails

## Support
For issues specific to:
- n8n platform: Visit [n8n Community Forum](https://community.n8n.io)
- Google Sheets API: Check [Google Developers Documentation](https://developers.google.com/sheets/api)
- MailChimp API: See [MailChimp API Documentation](https://mailchimp.com/developer/)
- Need help customizing?
[Contact me](Contact me) for consulting and support or add me on LinkedIn - https://www.linkedin.com/in/femi-adedayo-h44/

## License
This workflow template is provided free for personal and commercial use. Feel free to modify and share!

## 🔗 Nodes Used

Google Sheets, Mailchimp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
