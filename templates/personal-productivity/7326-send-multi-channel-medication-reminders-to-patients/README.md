# ⚡ Send multi-channel medication reminders to patients

> ⚡ **898 views** · ⚡ [Personal Productivity](../)

## Description

This workflow automatically sends timely medication reminders to patients after a prescription is marked as sent in the system. It reads the medication schedule from prescription data, schedules reminders for each dosage time, and delivers notifications via WhatsApp, SMS, or email. All reminders are tracked and logged, ensuring patients stay on track with their treatment while providing healthcare providers with acknowledgment records.

## 📋 Simple Google Sheets Structure

**"Prescriptions" Sheet** - Required columns:
- `prescription_id`
- `patient_name`  
- `patient_phone`
- `patient_email`
- `medication`
- `dosage`
- `times_per_day` (1, 2, 3, or 4)
- `duration_days` (7, 14, 30, etc.)
- `start_date` (YYYY-MM-DD)
- `prescription_status` (set to "sent")
- `reminders_created` (auto-updated to "yes")

**"Reminders" Sheet** (auto-created):
Simple tracking of all scheduled reminders

## 🔧 Workflow Components (Only 10 Nodes!)

### **Part 1: Schedule Creation**
1. **Watch Sheet** → Monitors for "sent" prescriptions
2. **Filter New** → Only processes unscheduled prescriptions  
3. **Create Schedule** → Generates reminder times automatically
4. **Save Reminders** → Stores schedule in sheet
5. **Mark Processed** → Prevents duplicate scheduling

### **Part 2: Send Reminders** 
6. **Cron Timer** → Checks every 10 minutes
7. **Get Reminders** → Retrieves all scheduled reminders
8. **Find Due** → Identifies reminders due now
9. **Send Messages** → WhatsApp + Email simultaneously
10. **Mark Sent** → Updates status to prevent duplicates

## ⚙️ Simple Setup

1. **Replace these values:**
   - `YOUR_GOOGLE_SHEET_ID`
   - `YOUR_WHATSAPP_PHONE_NUMBER_ID`
   - Email sender address

2. **Add credentials:**
   - Google Sheets API
   - WhatsApp API  
   - SMTP for email

3. **Sample data:**
```
prescription_id: RX001
patient_name: John Doe
patient_phone: +1234567890
patient_email: john@email.com
medication: Amoxicillin 500mg
dosage: 1 tablet
times_per_day: 3
duration_days: 7
start_date: 2025-01-15
prescription_status: sent
reminders_created: no
```

## 📱 Default Schedule
- **1x daily:** 9:00 AM
- **2x daily:** 9:00 AM, 9:00 PM  
- **3x daily:** 8:00 AM, 2:00 PM, 8:00 PM
- **4x daily:** 8:00 AM, 12:00 PM, 4:00 PM, 8:00 PM

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, WhatsApp Business Cloud, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
