# 📋 Automate agile refinement prep with Gmail, OpenAI & Google Sheets

> ⚡ **374 views** · 📋 [Project Management](../)

## Description

### 👤 Who is this for?  
This workflow is designed for **Scrum Masters**, **Agile Coaches**, and **Product Owners** who want to automate backlog refinement preparation using **Google Sheets**, **Gmail**, and **OpenAI**. It’s ideal for teams seeking consistent, high-quality refinement sessions with minimal manual effort.

### 🧩 What problem is this workflow solving?  
Many Agile teams struggle with unprepared refinement sessions, unclear user stories, and inconsistent feedback. This workflow solves that by automating the selection, validation, and communication process—saving time while improving backlog quality and team alignment.

### ⚙️ What this workflow does  
The workflow checks the Scrum Master’s **Google Calendar** for an upcoming refinement event. It then pulls potential user stories from a **Google Sheets** backlog, filters them by status, and validates them using **OpenAI agents** for Scrum, business, and technical feedback. Finally, it compiles everything into a structured **HTML email**, either creating a draft or sending it upon approval.

### 🚀 Setup  
- Use consistent event naming in Google Calendar  
- Configure environment variables for your project (e.g., sheet names, statuses)  
- Connect your own backlog and Definition of Ready  
- Customize the AI prompts and email layout

### 🛠️ How to customize this workflow to your needs  
- Replace Google Sheets with Jira or Airtable  
- Switch Gmail to Outlook, SMTP, or Mailgun  
- Extend error handling or approval logic  
- Tailor the email tone and AI prompts to match your team

### 🔥 Unique Selling Points (USPs)
- AI-Powered Multi-Perspective Feedback
- Automated Definition of Ready (DoR) Checks
- Calendar-Aware Triggering
- Fully Formatted Gmail Emails, With Approval Flow
- Plug-and-Play Customizability

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Calendar, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
