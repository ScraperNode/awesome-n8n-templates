# ⚡ Class scheduling & reminders with Google Calendar, email & SMS notifications

> ⚡ **719 views** · ⚡ [Personal Productivity](../)

## Description

This automated n8n workflow checks daily class schedules, syncs upcoming classes to Google Calendar, and sends reminder notifications to students via email or SMS. Perfect for educational institutions to keep students informed about their daily classes and schedule changes.

**What This Workflow Does:**
- Automatically checks class schedules every day
- Identifies today's classes and upcoming sessions
- Syncs class information to Google Calendar
- Sends personalized reminders to enrolled students
- Tracks reminder delivery status and logs activities
- Handles both email and SMS notification preferences

**Main Components**
* **Daily Schedule Check** - Triggers daily to check class schedules
* **Read Class Schedule** - Retrieves today's class schedule from database/Excel
* **Filter Today's Classes** - Identifies classes happening today
* **Has Classes Today?** - Checks if there are any classes scheduled
* **Read Student Contacts** - Gets student contact information for enrolled classes
* **Sync to Google Calendar** - Creates/updates events in Google Calendar
* **Create Student Reminders** - Generates personalized reminder messages
* **Split Into Batches** - Processes reminders in manageable batches
* **Email or SMS?** - Routes based on student communication preferences
* **Prepare Email Reminders** - Creates email reminder content
* **Prepare SMS Reminders** - Creates SMS reminder content
* **Read Reminder Log** - Checks previous reminder history
* **Update Reminder Log** - Records sent reminders
* **Save Reminder Log** - Saves updated log data

**Essential Prerequisites**
* Class schedule database/Excel file with student enrollments
* Student contact database with email and phone numbers
* Google Calendar API access and credentials
* SMTP server for email notifications
* SMS service provider (Twilio, etc.) for text reminders
* Reminder log file for tracking sent notifications

**Required Data Files:**

**class_schedule.xlsx:**
* Class ID | Class Name | Date | Time | Duration
* Instructor | Room | Students Enrolled | Status

**student_contacts.xlsx:**
* Student ID | Name | Email | Phone | Preferred Contact
* Program | Class IDs | Active Status

**reminder_log.xlsx:**
* Log ID | Date | Student ID | Class ID | Contact Method
* Status | Sent Time | Response

**Key Features**
* **⏰ Daily Automation:** Runs automatically every day
* **📅 Calendar Sync:** Syncs classes to Google Calendar
* **📧 Smart Reminders:** Sends email or SMS based on preference
* **👥 Batch Processing:** Handles multiple students efficiently
* **📊 Activity Logging:** Tracks all reminder activities
* **🔄 Duplicate Prevention:** Avoids sending multiple reminders
* **📱 Multi-Channel:** Supports both email and SMS notifications

**Quick Setup**
1. Import workflow JSON into n8n
2. Configure daily trigger schedule
3. Set up class schedule and student contact files
4. Connect Google Calendar API credentials
5. Configure SMTP server for emails
6. Set up SMS service provider (Twilio)
7. Test with sample class data
8. Activate workflow

**Parameters to Configure**
* `schedule_file_path`: Path to class schedule file
* `contacts_file_path`: Path to student contacts file
* `google_calendar_id`: Google Calendar ID for syncing
* `google_api_credentials`: Google Calendar API credentials
* `smtp_host`: Email server settings
* `smtp_user`: Email username
* `smtp_password`: Email password
* `sms_api_key`: SMS service API key
* `sms_phone_number`: SMS sender phone number

**Sample Reminder Messages**
* **Email:** "Hi [Name], reminder: [Class Name] starts at [Time] in [Room]. See you there!"
* **SMS:** "[Name], your [Class Name] class starts at [Time] in [Room]. Don't miss it!"

**Use Cases**
* Daily class reminders for students
* Schedule change notifications
* Exam and assignment deadline alerts
* Teacher absence notifications
* Room change announcements

## 🔗 Nodes Used

Cron, Google Calendar, Microsoft Excel 365

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
