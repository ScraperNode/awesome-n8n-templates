# 🔧 Automate prescription delivery via Google Sheets to email & WhatsApp

> ⚡ **919 views** · 🔧 [Miscellaneous](../)

## Description

This is a fully working n8n workflow that sends prescriptions to patients via email and WhatsApp when a doctor enters prescription data into a Google Sheet.

## 📋 Google Sheets Structure

**Main Sheet:**
Required columns:
- `prescription_id` (unique ID)
- `patient_name`
- `patient_email`
- `patient_phone`
- `doctor_name`
- `prescription_date`
- `prescription_details`
- `dosage_instructions`
- `followup_date` (optional)
- `prescription_status` (set to "new" for new prescriptions)

**Log Sheet:**
This will be auto-created with columns for tracking sent notifications.

## 🔧 Required Credentials Setup

1. **Google Sheets OAuth2 API**: Connect your Google account
2. **SMTP Credentials**: For email sending (Gmail, Outlook, etc.)
3. **WhatsApp API**: Meta Business WhatsApp API credentials

## ⚙️ Configuration Steps

1. Replace `YOUR_GOOGLE_SHEET_ID` with your actual Google Sheet ID
2. Replace `YOUR_WHATSAPP_PHONE_NUMBER_ID` with your WhatsApp Business phone number ID
3. Update the email sender address in the "Send Email" node
4. Set up your credentials in n8n

## 🌟 Features Included

- **Automated Trigger**: Monitors Google Sheet for new prescriptions
- **Smart Filtering**: Only processes prescriptions with status "new"
- **Rich Email Format**: Professional HTML email with prescription details
- **WhatsApp Integration**: Sends formatted prescription text
- **Comprehensive Logging**: Tracks all sent notifications
- **Status Updates**: Marks prescriptions as "sent" after processing
- **Error Handling**: Logs success/failure status for both channels

## 📱 Sample Data Format

Add rows to your sheet like this:
```
prescription_id: RX001
patient_name: John Doe
patient_email: john@email.com
patient_phone: +1234567890
doctor_name: Dr. Smith
prescription_date: 2025-01-15
prescription_details: Amoxicillin 500mg capsules
dosage_instructions: Take 1 capsule 3 times daily with food
followup_date: 2025-01-22
prescription_status: new
```

## 🔗 Nodes Used

Send Email, Google Sheets, WhatsApp Business Cloud, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
