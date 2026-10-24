# 🎫 Track medicine adherence and monitor patients with Google Sheets, OpenAI and Slack

> ⚡ **103 views** · 🎫 [Ticket Management & Triage](../)

## Description

# 🩺 AI-Powered Medicine Reminder & Patient Monitoring Workflow 
*(n8n + Google Sheets + OpenAI + Slack)*

---

This workflow automates medicine reminders, tracks patient responses and alerts doctors in critical situations using n8n, Google Sheets, OpenAI and Slack.

### Quick Implementation Steps

- Connect your Google Sheets with patient data
- Set up Slack (or replace with Gmail/SMS nodes)
- Configure Webhook to receive patient replies
- Add your OpenAI API key
- Define reminder times in HH\:mm format
- Activate the workflow scheduler

💡 You can replace Slack with Email (Gmail) or SMS APIs like Twilio.


## What It Does

This workflow automates the entire lifecycle of patient medicine adherence tracking. It periodically checks patient records and sends reminders when it's time to take medicine.

When a patient responds, the system captures the reply via webhook and uses AI to classify the response into categories such as taken, not taken, delayed or unclear. It then updates patient records and tracks missed doses.

If a patient repeatedly misses medication or shows signs of distress, the system flags it as critical and alerts the doctor immediately through a separate channel.


## Who’s It For

- Healthcare providers and clinics
- Telemedicine platforms
- Caregivers managing patients
- Health-tech startups
- Remote monitoring systems


## Requirements

- n8n (cloud or self-hosted)
- Google Sheets account
- Slack account (or Email/SMS alternative)
- OpenAI API key
- Google Sheet with following columns
	- Name
	- Phone
	- Medicine
	- Reminder Time
	- Last Response
	- Last Patient Message
	- Status
	- Missed\_Count

⚠️ **Reminder Time** must be in 24-hour format (HH\:mm) Example: 08:30, 14:45, 21:00


## Webhook Input Format

Your system must send patient replies in this format:

```
{
  "phone": "string",
  "message": "string"
}
```


## How It Works

### 1. Scheduler Trigger

- Runs every minute
- Checks all patient records

### 2. Fetch Patient Records

- Reads all rows from Google Sheets

### 3. Match Reminder Time

- Compares current time with patient’s reminder time

### 4. Send Reminder

- Sends message via Slack (or Email/SMS alternative)

### 5. Receive Patient Response

- Webhook captures incoming responses

### 6. AI Classification

Classifies response into:

- **TAKEN**
- **NOT\_TAKEN**
- **LATER**
- **CONFUSED**

Also detects critical conditions

### 7. Parse Output

- Ensures valid JSON format

### 8. Match Patient

- Matches phone number with Google Sheet

### 9. Update Missed Count

- **NOT\_TAKEN** → +1
- **LATER** → +1
- **TAKEN** → reset to 0

### 10. Check Critical Condition

Triggered when:

- is\_critical = true
- OR
- Missed\_Count &gt;= 3 (configurable)

### 11. Critical Flow

- Update status to **CRITICAL**
- Alert doctor via separate channel

### 12. Normal Flow

- Update patient record
- Send response:
  - **NOT\_TAKEN** → Reminder
  - **LATER** → Gentle follow-up
  - **TAKEN** → Appreciation


## Customization

### Replace Slack

You can replace Slack nodes with:

- Gmail (Email)
- Twilio (SMS)
- WhatsApp API

### Modify AI Logic

- Edit OpenAI prompt
- Add new classifications
- Customize responses

### Change Reminder Logic

- Adjust scheduler frequency
- Add timezone handling

### Adjust Critical Threshold

- Change Missed_Count &gt;= 3 to any value based on your needs


## Add-ons

- WhatsApp integration
- Dashboard for tracking
- Push notifications
- Database logging
- AI health insights
- Doctor reports


## Use Cases

- Chronic disease monitoring
- Elderly care
- Post-surgery tracking
- Clinical trials
- Remote patient monitoring


## Troubleshooting

| Issue                   | Possible Cause     | Solution                |
|--------------------------|--------------------|--------------------------|
| Reminder not sent        | Time mismatch      | Use HH:mm format         |
| Patient not matched      | Phone mismatch     | Ensure same format       |
| AI parsing error         | Invalid JSON       | Check parsing node       |
| Missed count issue       | Wrong classification| Verify AI output         |
| Webhook not working      | Wrong endpoint     | Check URL                |
| Slack not sending        | Credentials issue  | Reconnect Slack          |
| Critical not triggered   | Condition issue    | Adjust threshold         |


## Need Help?

If you need help with:

- Setup or deployment
- Email / SMS / WhatsApp integration
- Dashboard or analytics
- Custom AI enhancements

👉 Feel free to [Contact WeblineIndia](https://www.weblineindia.com/contact-us.html) for [custom workflow development](https://www.weblineindia.com/process-automation-solutions.html) and automation solutions.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
