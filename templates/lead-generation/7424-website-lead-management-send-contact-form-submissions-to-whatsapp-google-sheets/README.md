# 🎣 Website lead management: Send contact form submissions to WhatsApp & Google Sheets

> ⚡ **1,846 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who's it for
Business owners, marketers, and web developers who want to instantly respond to website contact form submissions and maintain organized lead records without manual monitoring.

## What it does
This workflow automatically processes contact form submissions from your website, sending immediate WhatsApp notifications with formatted lead details while simultaneously logging all data to Google Sheets for organized lead management and follow-up tracking.

## How it works
When someone submits your website contact form, the webhook instantly receives the data, formats it into a professional WhatsApp message with emojis and structure, sends the notification to your phone, and logs all details (name, email, phone, service, message, timestamp) to a Google Sheets database for permanent storage and analysis.

## Requirements
- WhatsApp Business API credentials
- Google Sheets API access with a spreadsheet containing these columns:
  - **date** (for timestamp)
  - **name** (contact's full name)
  - **email** (contact's email address)
  - **phone** (contact's phone number)
  - **service** (requested service/interest)
  - **message** (contact's message/inquiry)
- Website contact form that can POST to webhook URL with fields: name, email, phone, service, message
- n8n instance (self-hosted or cloud)

## Google Sheets Setup
Create a new Google Sheet with the following column headers in row 1:
- Column A: `date`
- Column B: `name` 
- Column C: `email`
- Column D: `phone`
- Column E: `service`
- Column F: `message`

The workflow will automatically populate these columns with each form submission and use the date column for duplicate checking.

## How to set up
1. **Credentials Setup:**
   - Configure WhatsApp Business API credentials in the WhatsApp node
   - Set up Google Sheets API connection and grant necessary permissions
   
2. **Configuration:**
   - Update the recipient phone number in the WhatsApp node (format: +1234567890)
   - Replace the Google Sheets document ID with your spreadsheet ID
   - Ensure your Google Sheet has the required column structure mentioned above
   
3. **Integration:**
   - Copy the webhook URL from the Contact Form Trigger node
   - Configure your website form to POST data to this endpoint with field names: name, email, phone, service, message
   
4. **Testing:**
   - Test the workflow by submitting a sample form entry
   - Verify WhatsApp notification is received and data appears in Google Sheets

## How to customize the workflow
- **Message Format:** Modify the WhatsApp message template in the Format Lead Data node
- **Additional Fields:** Add more form fields by updating both the Code node and Google Sheets mapping
- **Email Notifications:** Include email alerts by adding an Email node after the Format Lead Data node
- **Conditional Logic:** Set up different notifications for high-priority services or VIP customers
- **Data Validation:** Add filtering rules in the Code node to handle spam or invalid submissions
- **Multiple Recipients:** Configure the WhatsApp node to send alerts to multiple team members

## 🔗 Nodes Used

Google Sheets, Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
