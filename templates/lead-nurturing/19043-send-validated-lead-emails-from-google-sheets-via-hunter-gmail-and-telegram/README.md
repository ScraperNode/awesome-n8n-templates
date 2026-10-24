# 💬 Send validated lead emails from Google Sheets via Hunter, Gmail and Telegram

> ⚡ **2 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs on a schedule to fetch leads from Google Sheets, verify email deliverability with Hunter, send messages via Gmail, update each lead’s send status back in Google Sheets, and post a run summary to Telegram.

## How it works
1. Runs daily at the configured hour to start the email dispatch process.
2. Pulls lead rows from a Google Sheets spreadsheet and ignores records with a blank Email field.
3. Verifies each non-empty email address with Hunter’s Email Verifier and checks that it is deliverable and not already marked as sent or skipped.
4. Sends an email to deliverable leads using Gmail.
5. Marks each lead as sent, skipped, or invalid and updates the “Email sent” column back in Google Sheets (matching by “Tool Name”).
6. Aggregates totals for sent, invalid, and skipped leads and sends the summary report to a Telegram chat using the Telegram Bot API.

## Setup
1. Add Google Sheets OAuth credentials and set the correct spreadsheet and sheet for both reading leads and updating the “Email sent” status.
2. Add a Hunter API credential for email verification.
3. Add a Gmail credential and update the email subject/body to match your outreach message.
4. Create a Telegram bot, replace <BOT_TOKEN> in the Telegram request URL, and set the target chat_id for where the summary should be sent.
5. Ensure your Google Sheet includes unique “Tool Name”, “Email”, and “Email sent” columns so updates match the correct rows and prevent re-sending.

## Additional info
## How To Customize Nodes

1. **Modify Email Content**  
Customize the message and subject in the "Send Valid Lead Emails" node. You can add dynamic fields like the Tool Name from the Google Sheets data.

2. **Update Email Status Logic**  
You can customize the "Set Email Status" node to assign different status values if your workflow requires different email states.

3. **Add More Validation**  
If you want to add extra validation for emails (e.g., checking for specific domains), modify the email verification logic within the "Hunter" node.

4. **Adjust Reporting**  
Customize the summary report by changing the "Generate Email Summary" node, which aggregates the results. You can include additional fields if needed.


## Add‑ons (Additional features to extend the workflow usage)

1. **Advanced Email Personalization**  
Integrate with other data sources like CRM systems to pull more personalized lead information for email customization.
   
2. **Multiple Email Sending Services**  
You can add multiple email services like SendGrid or Mailgun for higher email throughput if needed.

3. **Email Retry Mechanism**  
Implement a retry mechanism for failed email attempts to ensure maximum delivery.

4. **Detailed Reporting**  
Extend the summary report by including detailed logs, click rates, or even A/B testing results for emails.


## Use Case Examples

1. **Lead Email Campaigns**  
Use this workflow to send marketing emails to a list of leads stored in Google Sheets and track the results in real-time.

2. **CRM Email Outreach**  
CRM administrators can use this to send automated emails to their leads and update records in real-time.

3. **Event Registration Confirmation**  
Automate the sending of event confirmation emails to participants and track responses for follow-up actions.

4. **Affiliate Program Outreach**  
Use this workflow to send emails to affiliate leads, ensuring they receive the correct information and track engagement.

There can be many more use cases, including customer surveys, newsletter distribution, and more.


## Troubleshooting Guide

| Issue                            | Possible Cause                                    | Solution                                           |
|----------------------------------|---------------------------------------------------|----------------------------------------------------|
| Blank Emails Not Skipped        | Blank email condition not set properly           | Check the condition in "Check for Blank Email ID"  |
| Email Verification Fails        | Invalid Hunter API key or rate limit reached      | Verify the Hunter API credentials and try again    |
| Emails Not Sent                 | Gmail/SMTP credentials missing or incorrect       | Ensure Gmail/SMTP credentials are correctly set up |
| Summary Report Not Sent         | Missing Telegram credentials or invalid chat ID   | Double-check Telegram bot settings and chat ID     |


## Need Help

If you need help setting up, customizing or extending this workflow, feel free to [reach out to WeblineIndia](https://www.weblineindia.com/contact-us.html). We offer support for configuring n8n workflows, integrating additional services or building similar automated processes tailored to your needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Hunter, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
