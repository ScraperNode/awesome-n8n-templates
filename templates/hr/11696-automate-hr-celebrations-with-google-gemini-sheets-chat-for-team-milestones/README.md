# 👥 Automate HR celebrations with Google Gemini, Sheets & Chat for team milestones

> ⚡ **118 views** · 👥 [HR & Recruitment](../)

## Description

## Description

This workflow acts as your automated HR assistant, scanning for employee milestones and posting AI-generated celebration messages to Google Chat.

### How it works

* **Daily Scan:** Checks your Google Sheet every morning to identify birthdays and work anniversaries.
* **AI Drafting:** Uses **Google Gemini** to write unique, warm messages for each employee, ensuring wishes never sound robotic or repetitive.
* **Delivery:** Automatically posts the message to your team's **Google Chat** space and logs the activity.

### Set up steps

1.  **Connect Accounts:** Set up credentials for **Google Sheets** and **Google PaLM/Gemini**.
2.  **Configure Settings:** Open the `SET-BIRTHDAY` and `SET - ANNIVERSARY` nodes to enter your **Agency Name** and **Google Chat API** details (Space ID, Key, Token).
3.  **Prepare Data:** Ensure your Google Sheet contains columns for employee names, dates of birth, and joining dates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
