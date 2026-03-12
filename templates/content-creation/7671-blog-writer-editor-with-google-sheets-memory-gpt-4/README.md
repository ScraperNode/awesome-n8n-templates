# 🎬 Blog writer & editor with Google Sheets memory (GPT-4)

> ⚡ **1,360 views** · 🎬 [Content Creation & Video](../)

## Description

Chat to **write** or **reword** a blog post. The workflow stores each result in Google Sheets and uses a sub-workflow “Google tool” to **count rows per session** (your running context). If a session exceeds a row threshold, the flow can branch (e.g., stop or notify).

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n

### 2️⃣ Prepare Your Google Sheet
#### Connect your Data in Google Sheets
- Use this format: **[Sample Sheet](https://docs.google.com/spreadsheets/d/1NwnABaQIReMmG2sRGrC-lv-5kpmsKJkUlRm-KmvPsCE/edit?gid=0#gid=0)**
- Row 1 = **column names** (e.g., `session`, `Rows`, `output`)
- Data in rows **2–100** (or more if you prefer)
- In n8n, use **Google Sheets OAuth2** → pick your **Spreadsheet** and **Worksheet**
- (Optional) You can adapt this to **Airtable**, **Notion**, or a **Database**

---

## 🧠 How It Works
- **Chat Trigger**: Provide a topic (write) or paste existing text (reword).  
- **Code Node (“Choose to Write or Edit Blog”)**:  
  - Builds a `system_prompt` + `user_prompt`  
  - Instructs the agent to call the **Google tool** (sub-workflow) **with only the `sessionid`** to count existing rows.  
- **Tool Workflow (“google”)**:  
  - Fetches rows from the sheet → **filters by `session`** → **summarizes row count**.  
- **Agent (“Blog Writer & Editor”)**:  
  - Returns **structured JSON** (items/rows, session, blog body).  
- **Store (Google Sheets)**:  
  - Appends `{ session, Rows, output }` to the sheet.  
- **If Node**:  
  - Example rule: `Rows &gt; 3` → branch/limit/notify as needed.

---

## 💬 Example Prompts
- “Write a 600-word blog about **n8n agents** with 3 bullet takeaways. Session: `abc123`.”  
- “Reword this post into a concise LinkedIn article. Session: `launchQ3`:\n&lt;your text here&gt;”  
- “Draft a blog intro and 5 SEO headlines on **marketing automation**. Session: `mkt-01`.”

---

## 📬 Contact
Need help tailoring this to Airtable/Notion/DB, or adding auto-publishing?

- 📧 **rbreen@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Google Sheets, Execute Workflow Trigger, Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
