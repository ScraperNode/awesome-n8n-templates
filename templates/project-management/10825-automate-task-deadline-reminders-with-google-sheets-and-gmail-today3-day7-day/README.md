# 📋 Automate task deadline reminders with Google Sheets and Gmail (Today/3-Day/7-Day)

> ⚡ **250 views** · 📋 [Project Management](../)

## Description

## Task Deadline Reminder Workflow (Today / 3-Day / 7-Day)
Task deadline management manually is inefficient and leads to missed deadlines—especially when teams rely on spreadsheets and individual reminders.  
This workflow automates the entire follow-up process by reading a centralized task sheet in Google Sheets every morning, checking the deadline for each task, and sending automatic email notifications to the responsible person based on urgency.  
Tasks due **today**, **within three days**, or **within one week** are identified and routed to customized Gmail notifications, ensuring that every team member is aware of upcoming deadlines without manual checking.

## Who’s it for
This workflow is ideal for teams and organizations that manage multiple tasks across departments and need a reliable way to stay on top of deadlines. It is especially useful for:

- Project managers coordinating many deadlines  
- Back-office teams monitoring routine operational tasks  
- Organizations with distributed members  
- Anyone who relies on spreadsheets but needs automated follow-up  

By integrating Google Sheets, n8n, and Gmail, you gain a proactive notification system that keeps everyone aligned and reduces the risk of forgotten tasks.

## How it works
### 1. Daily trigger  
The workflow runs every morning at 9:00 using a Schedule Trigger.

### 2. Load task list from Google Sheets  
The workflow retrieves all rows from the designated spreadsheet, including task name, deadline, responsible person, and email address.

### 3. Process tasks individually  
A loop node evaluates each task one by one.

### 4. Evaluate deadline conditions  
- **Due today:** Deadline matches today’s date  
- **Due within 3 days:** Deadline falls between today and three days ahead  
- **Due within 7 days:** Deadline falls between today and one week ahead  

### 5. Send notifications  
Depending on urgency:  
- “本日が締め切りです” for tasks due today  
- “タスク期限が三日前となりました” for tasks due within 3 days  
- “タスクの期限が一週間以内です” for tasks due within 7 days  

Each email is automatically sent to the responsible person based on the “メールアドレス” field in the sheet.

### 6. Complete processing  
The loop continues until all task rows have been checked.

## How to set up
- Import the workflow into your n8n instance  
- Authenticate Google Sheets and select the task spreadsheet  
- Authenticate Gmail as the sender account  
- Confirm required columns: タスク, 期限, 担当, メールアドレス  
- Adjust time, message text, or conditions based on your internal rules  

## Requirements
- Active n8n instance  
- Google Sheets access with permission to read the task list  
- Gmail OAuth connection for email sending  
- Spreadsheet with at least: task name, deadline, responsible person, email address  

## How to customize
You can expand and refine this workflow to match your company’s processes:

- Add Slack, Chatwork, or LINE notifications  
- Add overdue task detection  
- Add task priority sorting (High / Medium / Low)  
- Log notifications back into the spreadsheet  
- Send daily summary reports to managers  

This workflow provides a flexible foundation for building a complete automated task governance system.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
