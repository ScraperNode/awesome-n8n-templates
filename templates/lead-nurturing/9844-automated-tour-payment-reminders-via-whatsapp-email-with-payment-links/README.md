# 💬 Automated tour payment reminders via WhatsApp & email with payment links

> ⚡ **711 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow automatically notifies travelers about their pending trip payments and provides secure payment links through Email and WhatsApp. It runs twice daily (at 7 AM and 7 PM) to ensure timely reminders before the due date. Designed for travel agencies, it simplifies payment tracking, reduces manual follow-up, and ensures every traveler receives personalized reminders with real-time payment status updates.

## 🔧 Main Components
### Daily Payment Check – 7 AM & 7 PM
Scheduled triggers that start the workflow daily at 7 AM and 7 PM.

### Read Pending Travel Payment
Fetches traveler payment records from an Excel sheet (using getAll method).

### Process Payment Reminders
Filters records to find pending payments due within the next 3 days.

### Create Payment Reminders
Generates personalized payment reminders.

### Make Reminder For Email
Prepares email-friendly messages with payment links.

### Send Email Reminder
Sends the payment reminder email with a secure payment link to the traveler.

### Prepare WhatsApp Reminder
Generates WhatsApp-friendly messages with payment and payment details.

### Send WhatsApp Message
Sends the message to the traveler’s WhatsApp number using a message API.

### Update Status Of Reminder
Updates the Excel file to mark reminders as sent to avoid duplicates.

## 🧩 Channels Used
📧 Email – with personalized payment link  
💬 WhatsApp – formatted reminder message  
🔐 Payment Integration  
Secure payment links are auto-generated per traveler to enable direct and safe online payments.

## ✅ Essential Prerequisites
- Excel sheet with payment records (travel_payment_data.xlsx)  
- SMTP credentials for sending email  
- WhatsApp API or provider integration (like Twilio or Gupshup)  
- Access to a payment gateway or service for link generation  
- File storage access to update reminder status in Excel  

## 📁 Required Excel File Structure (travel_payment_data.xlsx)
| Traveler ID | Name       | Email             | Phone         | Payment Due Date | Amount  | Reminder Sent |
|-------------|------------|-------------------|---------------|------------------|---------|---------------|
| TR001       | Arjun Patel| arjun@example.com | +919876543210 | 2025-10-20       | ₹3000   | No            |

## 🧾 Expected Input Format Example
{
  "travelerId": "TR001",
  "name": "Arjun Patel",
  "email": "arjun@example.com",
  "phone": "+919876543210",
  "dueDate": "2025-10-20",
  "amount": "₹3000",
  "reminderSent": "No"
}

## 🚀 Key Features
- ⏰ Scheduled Daily Execution – Fully automated at 7 AM and 7 PM  
- 🧮 Due-Date Filtering – Only targets payments due in the next 3 days  
- 💬 Multi-Channel Notifications – Sends reminders via both Email and WhatsApp  
- 🔗 Secure Payment Links – Auto-generated for each traveler  
- 🔄 Reminder Tracking – Prevents duplicate reminders by updating status  

## ⚙️ Quick Setup Guide
- Import Workflow JSON into your n8n instance.  
- Configure schedule in the “Daily Payment Check” node (default: 7 AM & 7 PM).  
- Set Excel file path in the “Read Pending Travel Payment” node.  
- Update your payment processing logic in the “Process Payment Reminders” node.  
- Add email credentials in the “Send Email Reminder” node.  
- Integrate WhatsApp provider API in the “Send WhatsApp Message” node.  
- Define how you generate secure payment links.  
- Test with sample data and activate workflow.

## 🔗 Nodes Used

Send Email, Microsoft Excel 365, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
