# 📋 Extract & approve tasks from Telegram to Notion with Gemini AI & voice support

> ⚡ **583 views** · 📋 [Project Management](../)

## Description

This workflow automatically converts Telegram text or voice messages into Notion tasks by using AI to extract the task name and due date, allowing users to approve or decline tasks directly in Telegram before they are created. It is designed for students managing assignments, professionals tracking tasks from messaging apps, productivity enthusiasts looking to automate task entry, and teams using Notion for organized task management.

---

## Detailed Use Case

This template turns casual Telegram messages and voice notes into confirmed Notion tasks by handling transcription, AI extraction, validation, and user approval. Typical scenarios include:

- **Students:** Record or type assignment details after class → transcribe, extract title + due date → confirm → save to Notion.  
- **Managers:** Capture meeting action items in chat → extract tasks and deadlines → verify with one tap → add to project database.  
- **Freelancers:** Log client requests by voice → confirm parsed due date → create a tracked task in Notion.  
- **Productivity users / teams:** Quickly funnel ad-hoc requests from Telegram into a single Notion workspace without manual copy/paste.

Key benefits: automated transcription, structured extraction (TaskName + TaskDue), quick user approval in Telegram, and reliable Notion mapping for immediate tracking.

---

## Prerequisites for this Workflow

- **n8n instance**  
  - Active and publicly reachable for webhook triggers.

- **Telegram bot**  
  - Create via **BotFather**, copy **Bot Token**, and get **chat ID**.

- **Transcription API**  
  - I use **Google Gemini Free Tier**, but you can use **Groq, OpenAI**, or any other provider.  
  - Add your API key / credentials in n8n.

- **Notion integration & database**  
  - Integration token added to n8n.  
  - Database structure must include:  
    - **Title** (Title property) → Task Name  
    - **Date** (Date property) → Task Due Date  
  - Share the database with the integration and copy the **Database ID**.

- **n8n node setup basics**  
  - Telegram Trigger node for messages.  
  - Telegram Get File node (**Download = true**) for voice notes.  
  - Transcription node connected to your chosen provider.  
  - AI Extractor node to get `TaskName` and `TaskDue`.  
  - Notion node with mapped properties (TaskName → Title, TaskDue → Date).

---

For any doubts or questions, contact: `contact@abhiman.io` or connect on LinkedIn: `https://www.linkedin.com/in/abhimangs/`

## 🔗 Nodes Used

Telegram, Telegram Trigger, Notion, Google Gemini Chat Model, Information Extractor, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
