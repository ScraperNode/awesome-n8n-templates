# 🧾 Create digital checks with OnlineCheckWriter using Forms

> ⚡ **100 views** · 🧾 [Invoice Processing](../)

## Description

Create Digital Checks with OnlineCheckWriter using Forms
This workflow automates the process of creating and sending digital checks through OnlineCheckWriter's API using user-friendly forms. Perfect for businesses that need to process one-off payments or integrate check payments into their automation workflows.
Prerequisites
Before using this template, ensure you have:

OnlineCheckWriter Account: Sign up at onlinecheckwriter.com
API Key: Generate from your OCW dashboard under Settings &gt; API
Verified Bank Account: Add and verify at least one bank account in OCW
Bank Account ID: Found in your OCW dashboard under Bank Accounts

How It Works
This workflow uses a two-step form process:

API Configuration Form: One-time setup to store your OCW credentials
Check Details Form: Collects recipient and payment information for each check

The workflow then automatically:

Validates all required fields
Sends the check request to OnlineCheckWriter's API
Returns a confirmation with the check ID and tracking information

Setup Instructions
Step 1: Import the Workflow

Copy this workflow template to your n8n instance
Activate the workflow

Step 2: Configure API Credentials

Access the first form at: [your-n8n-url]/webhook/e4f29ca4-5982-42ae-950c-e4d1d7b10a93
Enter your API Key from OnlineCheckWriter
Enter your Bank Account ID
Provide a friendly Account Name for reference

Step 3: Create Checks

Access the check form at: [your-n8n-url]/webhook/72ea8a5d-4655-4ad3-bde2-024dd3dadd9f
Fill in recipient details:

Payee Name (required)
Company Name (optional)
Complete Address (required)
Contact Information (phone & email required)


Enter payment details:

Amount (in USD)
Memo (appears on check)
Internal Note (for your records)
Reference ID (optional tracking)
Issue Date


Submit to create and send the check

Customization Options
Switch to Production
By default, this workflow uses the OCW test environment. To switch to production:

Edit the Send Check via OCW API node
Change URL from https://test.onlinecheckwriter.com/api/v3/quickpay/check to https://app.onlinecheckwriter.com/api/v3/quickpay/check

Add Custom Fields
You can extend the forms with additional fields:

Invoice numbers
Department codes
Project references
Custom metadata

Integrate with Other Systems
Connect this workflow to:

Google Sheets: Track payments in a spreadsheet
Slack: Send notifications when checks are created
Email: Send confirmations to recipients
Accounting Software: Update your books automatically

Error Handling
To add error notifications:

Add an Error Trigger node
Connect to email or Slack for alerts
Log failed attempts to a database

Workflow Components
1. OCW API Configuration Form

Collects and stores API credentials securely
One-time setup per account
Validates connection to OnlineCheckWriter

2. Check Details Form

User-friendly interface for payment entry
Field validation ensures data accuracy
Optional fields for flexibility

3. Send Check via OCW API

Handles API authentication
Formats data according to OCW specifications
Includes error handling with 30-second timeout

4. Success Response

Confirms check creation
Provides check ID for tracking
Returns status information

Security Considerations

API Keys: Store securely and never share
Test Mode: Always test in OCW's sandbox environment first
Access Control: Restrict form URLs to authorized users
Data Validation: All inputs are validated before API submission

Troubleshooting
Common Issues:

401 Error: Invalid API key - verify in OCW dashboard
400 Error: Missing required fields - check form data
404 Error: Invalid bank account ID - verify in OCW
Timeout: Network issues - check connectivity

Support

OnlineCheckWriter API Docs: developer.onlinecheckwriter.com
n8n Community: community.n8n.io
Template Issues: Contact via n8n template comments

Use Cases
This workflow is ideal for:

Freelancers: Send client payments
Small Businesses: Process vendor payments
Property Management: Issue rent refunds
Non-Profits: Distribute grants or donations
HR Departments: Process reimbursements

Version History

v1.1: Added sticky notes, improved node naming, enhanced error handling
v1.0: Initial release

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
