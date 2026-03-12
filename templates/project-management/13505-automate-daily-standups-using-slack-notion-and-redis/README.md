# 📋 Automate daily standups using Slack, Notion, and Redis

> ⚡ **16 views** · 📋 [Project Management](../)

## Description

# Run automated daily standups using Slack, Notion, and Redis

## 📌 Overview

This workflow fully automates your team's daily standup process using **Slack** for communication, **Notion** for structured data storage, and **Redis** for real-time session management.

It automatically sends standup questions to active team members, collects and stores their responses, manages conversation sessions, and generates structured summary reports for managers.

Morning and evening standups run on schedule without manual intervention. Redis ensures fast and reliable session tracking, prevents duplicate standups, and maintains conversation state. All responses are securely stored in Notion for long-term reporting and tracking.

This workflow eliminates manual follow-ups, improves reporting consistency, and gives managers full visibility into team progress, blockers, and attendance.

---

## ⚙️ How it works

This workflow runs automatically based on configured schedules.

### Morning standup

- Fetches active team members from the Notion database  
- Creates standup sessions in Redis  
- Sends standup questions to each team member via Slack direct message  
- Stores responses in Notion  
- Tracks session state using Redis  

### Automated reports

The workflow automatically generates:

- Morning summary report showing attendance, responses, and blockers  
- Evening summary report showing accomplishments, completion status, and help requests  

Both reports are automatically sent to the Slack admin channel.

Redis ensures session tracking and prevents duplicate standups.

---

## 🛠 Setup steps

1. Import this workflow into n8n  
2. Connect your Slack credentials  
3. Connect your Notion credentials  
4. Connect your Redis credentials  
5. Configure your Notion database IDs  
6. Configure your Slack admin channel ID  
7. Activate the workflow  

The workflow will run automatically based on the configured schedule.

---

## 🚀 Features

### Automated standup management

- Automatically sends standup questions  
- Tracks team responses  
- Stores responses securely in Notion  
- Prevents duplicate standup sessions  

### Automated reporting

- Attendance tracking  
- Task completion tracking  
- Blocker detection  
- Missing response detection  
- Automatic Slack summary reports  

---

## 📋 Requirements

You need the following accounts:

- n8n  
- Slack  
- Notion  
- Redis  

---

## 🎯 Benefits

- Fully automated standup system  
- No manual follow-ups required  
- Automatic attendance tracking  
- Identifies blockers early  
- Improves team visibility  
- Saves management time  

---

## 👨‍💻 Author

**BytezTech Pvt Ltd**

---

## 🔗 Nodes Used

Redis, Slack, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
