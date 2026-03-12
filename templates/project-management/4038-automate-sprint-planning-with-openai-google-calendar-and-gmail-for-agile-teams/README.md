# 📋 Automate sprint planning with OpenAI, Google Calendar, and Gmail for agile teams

> ⚡ **1,010 views** · 📋 [Project Management](../)

## Description

### 👤 Who is this for?
This workflow is designed for **Scrum Masters** and **Agile Coaches** who prepare and coordinate **Sprint Planning sessions**, using **Google Calendar**, **Google Sheets**, and **OpenAI**.

### 🧩 What problem is this workflow solving?
It solves the **manual and time-consuming task** of collecting, validating, and preparing backlog items for sprint planning—especially when coordinating with **distributed teams** or **large product backlogs**.

### ⚙️ What this workflow does
Every week, the workflow:

- Detects if a Sprint Planning event is coming up.  
- Retrieves relevant backlog items marked as “Ready for Sprint Planning” or “Active in Sprint.”  
- Checks each user story against the **Definition of Ready (DoR)** using AI.  
- Adds **AI-generated feedback** per story in the backlog.  
- Drafts a personalized **preparation email** for the team and sends it after Scrum Master approval.  
- Optionally, generates **Sprint Goal suggestions** for the Product Owner.

### 🚀 Setup
Connect your **Google Calendar**, **Sheets**, and **Gmail** accounts.  
Then configure variables like **event names**, **sheet names**, and **email addresses** in the “Start Here” node.

### 🛠️ How to customize this workflow to your needs
- Swap **Google Sheets** with Jira or another tool.  
- Adjust **status filters** and **column mappings**.  
- Tweak **AI prompts** for tone, language, or preferred practices.  
- Change **email logic** for different approval flows.

### 🔥 Unique Selling Points (USPs)
- **Validated** by a Scrum Master with 10+ years of experience
- **AI-driven** backlog validation and email drafting.  
- **Weekly automation** with human approval loops.  
- **Clear, structured output** aligned with agile best practices.  
- **Fully customizable** for any Scrum environment.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Calendar, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
