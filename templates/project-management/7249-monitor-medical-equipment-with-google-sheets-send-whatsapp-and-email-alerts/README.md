# 📋 Monitor medical equipment with Google Sheets & send WhatsApp and email alerts

> ⚡ **607 views** · 📋 [Project Management](../)

## Description

This n8n workflow monitors medical equipment usage by reading data daily at 6 AM from a Google Sheet, processes alerts for maintenance or calibration, and sends notifications to technicians and supervisors. 

## Good to Know
- Runs daily at 6 AM via cron trigger.
- Requires Google Sheet with equipment data.
- Sends alerts via email and WhatsApp.
- Logs all activities in the Google Sheet.

## Google Sheet Structure

### Sheet:
```
A: Equipment ID | B: Equipment Name | C: Last Maintenance Date | D: Usage Hours
E: Calibration Due | F: Status | G: Technician Email | H: Supervisor Email | I: Last Alert Date
```

### Sample Data:
```
E001 | MRI Machine | 2025-07-01 | 150 | 2025-08-15 | Active | tech1@hospital.com | sup1@hospital.com | 2025-08-01
E002 | X-Ray Unit | 2025-06-15 | 200 | 2025-08-10 | Overdue | tech2@hospital.com | sup2@hospital.com | 2025-08-05
```

## How It Works
- **Daily Equipment Check (6 AM)** - Triggers the workflow.
- **Read Equipment Data** - Fetches data from Google Sheet.
- **Process Equipment Alerts** - Identifies maintenance needs.
- **Task Break For 5 Sec** - Adds a delay for processing.
- **Filter Equipment with Alerts** - Filters equipment needing attention.
- **Send Technician Email** - Notifies technicians via email.
- **Send Message (message: send)** - Sends WhatsApp alerts to technicians.
- **Send Critical Alert to Supervisors** - Escalates critical issues via email and WhatsApp.
- **Filter Overdue Equipment** - Identifies overdue maintenance.
- **Update Equipment Status** - Updates sheet with new statuses.
- **Log Maintenance Alerts** - Logs alerts in the sheet.

## How to Use
- Import workflow JSON into n8n.
- Configure nodes with Google Sheet ID, email, and WhatsApp API credentials.
- Add equipment data to the Google Sheet.
- Test manually, then activate for daily runs.

## Requirements
- Google Sheet with specified structure.
- Google service account credentials.
- Email SMTP setup (e.g., Gmail).
- WhatsApp Business API token.
- n8n instance.

## Customizing This Workflow
- Adjust cron time for different schedules.
- Modify alert thresholds in the Process Equipment Alerts node.
- Update notification templates in email and WhatsApp nodes.
- Extend filters for additional equipment statuses.


Want a tailored workflow for your business? Our experts can craft it quickly [Contact our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, WhatsApp Business Cloud, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
