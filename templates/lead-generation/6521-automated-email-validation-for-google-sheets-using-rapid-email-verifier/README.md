# 🎣 Automated email validation for Google Sheets using Rapid Email Verifier

> ⚡ **295 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# **Automated Email Verification for Google Sheets**

This n8n template demonstrates how to automatically validate email addresses from your Google Sheets using a reliable email verification API. Perfect for cleaning contact lists, validating leads, and ensuring email deliverability before marketing campaigns.

Use cases are many: Lead qualification for sales teams, contact list cleaning for marketing, subscriber validation for newsletters, or CRM data hygiene maintenance!

## **Good to know**
- The rapid-email-verifier API is free for up to 1,000 verifications per month
- Each email verification typically takes less than 500ms to complete
- The workflow runs automatically every hour, checking for new entries
- Only processes emails that haven't been verified yet, preventing duplicate API calls

## **How it works**
1. **Monitor Google Sheets**: The trigger watches your spreadsheet for new email entries every hour
2. **Smart Filtering**: Only emails with empty "Email Verified" columns are processed to avoid duplicates
3. **Batch Processing**: Emails are processed one by one to respect API rate limits and ensure reliability
4. **API Verification**: Each email is sent to the rapid-email-verifier service which returns validation status
5. **Results Update**: The original sheet is updated with verification results (valid/invalid/unknown) using the Serial Number as a match key

The verification accuracy is consistently above 95% and shows excellent detection of invalid, disposable, and risky email addresses!

## **How to use**
1. The Google Sheets trigger monitors your spreadsheet automatically, but you can also test manually
2. Simply add new rows with email addresses to your connected Google Sheet
3. Leave the "Email Verified" column empty for new entries
4. The workflow will automatically process and update the verification status

Technically, you can process unlimited emails, but consider API rate limits and costs for large batches.

## **Requirements**
- **Google Sheets account** with a spreadsheet containing columns: SrNo, Name, Email, Email Verified
- **Google Sheets credentials** configured in n8n for both trigger and update operations
- **Internet connection** for API access (no additional API key required for rapid-email-verifier)

## **Customising this workflow**
Email verification can be enhanced for many use-cases:
- **Add webhook trigger** for real-time verification when leads are captured
- **Connect to CRM systems** like HubSpot or Salesforce for direct integration  
- **Add email categorization** to separate personal vs business emails
- **Include bounce detection** by connecting to your email service provider
- **Set up notifications** to alert when invalid emails are detected in important lists

This template is perfect for marketing managers, sales professionals, data analysts, and anyone managing contact databases who needs reliable email validation!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
