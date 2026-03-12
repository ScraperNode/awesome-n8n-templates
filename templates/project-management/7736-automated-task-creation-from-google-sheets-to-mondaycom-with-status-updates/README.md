# 📋 Automated task creation from Google Sheets to Monday.com with status updates

> ⚡ **294 views** · 📋 [Project Management](../)

## Description

This workflow checks a **Google Sheet** for new tasks (marked `Added = No`) and automatically creates them in a **Monday.com board**.  
Once added, the workflow updates the sheet to mark the task as `Added = Yes`.

---

## ⚙️ Setup Instructions

### 1️⃣ Prepare Your Google Sheet
- Copy this template to your own Google Drive: [Google Sheet Template](https://docs.google.com/spreadsheets/d/1KRiAUbZP77dC_9x5pqrvcQvaAkUsoPXkZOZvfU69ILM/edit?gid=876214427#gid=876214427)  
- First row should contain **column names** 
- Add your data in rows 2–100.  
- Make sure each new task row starts with `Added = No`.  

#### Connect Google Sheets in n8n
1. Go to **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Log in with your Google account and grant access.  
3. In the workflow, select your **Spreadsheet ID** and **Worksheet Name**.  
4. Optional: You can connect Airtable, Notion, or your database instead of Google Sheets.  

---

### 2️⃣ Connect Monday.com Node
1. In **Monday.com** → go to your **Admin → API**  
   - Copy your **Personal API Token**  
   - Docs: [Generate Monday API Token](https://developer.monday.com/api-reference/docs/authentication)  
2. In **n8n** → **Credentials → New → Monday.com API**  
   - Paste your token and save.  
3. Open the **Create Monday Task** node → choose your credential → select your **Board ID** and **Group ID**.  

---

## 📬 Contact
Need help customizing this (e.g., mapping more fields, syncing statuses, or updating timelines)?  

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Google Sheets, Monday.com

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
