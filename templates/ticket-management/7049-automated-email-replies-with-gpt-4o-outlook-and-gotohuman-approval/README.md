# 🎫 Automated email replies with GPT-4o, Outlook, and GoToHuman approval

> ⚡ **1,801 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n workflow reads emails from your Outlook inbox, drafts AI-powered replies using OpenAI, and routes them through the **gotoHuman** node for human approval before replying automatically.

---

## ✅ Key Features

- **Reads Outlook emails** from today only (excluding those from your own address).
- **AI-generated replies** crafted using OpenAI based on the subject and body of the email.
- **Community node integration**: Uses the `gotoHuman` node for human review and approval of replies before sending.
- **Safe sending**: Only approved responses are automatically sent back via Outlook.
- **Expandable**: Can be easily modified to:
  - Send drafts instead of full replies
  - Include additional email filters
  - Trigger at intervals or via webhook

---

## 🧠 Nodes Used

- `Microsoft Outlook` – Fetch and reply to emails
- `OpenAI` – Generates smart reply text
- `gotoHuman` – Human-in-the-loop approval system
- `Loop Over Items`, `IF`, `Code`, and `Set` nodes for processing logic
- `Manual Trigger` – For testing

---

## 🔧 Setup Instructions

### 1. Connect APIs
- **Outlook OAuth2**:
  - Go to [Azure Portal](https://portal.azure.com)
  - Register an app
  - Add **Mail.Read**, **Mail.Send** scopes
  - Set redirect URI: `https://api.n8n.cloud/oauth2-credential/callback`
  - Paste credentials in n8n credential manager

- **OpenAI API**:
  - Create account at [OpenAI](https://platform.openai.com/)
  - Create an API Key
  - Add it to n8n credentials

- **gotoHuman API**:
  - Go to [https://gotoHuman.ai](https://gotoHuman.ai) and sign in
  - Create a review template (e.g., “Email Responses”)
  - Copy the Template ID and API key into n8n credentials

---

## 🪜 Workflow Steps Overview

### 1. **Trigger**  
Use the Manual Trigger to test or schedule execution with a cron node.

### 2. **Filter Emails from Today**
A Code node outputs today's date in the proper `yyyy-mm-dd` format.

```javascript
const today = new Date();
today.setHours(0, 0, 0, 0);
return [{ json: { searchQuery: `received:${today.toISOString().split('T')[0]}` } }];
```

### 3. **Search and Filter Outlook Messages**
- Uses the Outlook node with a search query like:  
  `received:2025-08-06 -from:rbreen@ynteractive.com` (Update to your email)

### 4. **Generate AI Response**
- Text prompt to OpenAI:  
  ```
  subject: {{ $json.subject }}  
  body: {{ $json.body.content }}
  ```

- System prompt:  
  &gt; You are a personal assistant helping respond to emails. I am an AI automation expert specializing in helping small and medium-size businesses automate processes. Create a short response to the email. Sign the email as Robert Breen.

### 5. **Review with gotoHuman**
- Submit AI output for human approval using the `gotoHuman` node.
- The output schema should match the Review Template fields (e.g., "email", "OriginalEmail").

### 6. **IF Node Decision**
- If status is `approved`, send reply
- If not, return to loop for revision or skip

---

## ✏️ Customization Ideas

- ✉️ Send only drafts by skipping the "reply" step and storing results.
- 🕒 Schedule the workflow with a Cron trigger for automation.
- 🔎 Add label filters or subject keywords for advanced targeting.

---

## 🔗 External Links

- [gotoHuman Community Node](https://n8n.io/integrations/gotohuman)
- [OpenAI](https://platform.openai.com/)
- [Microsoft Outlook API Setup](https://learn.microsoft.com/en-us/graph/auth-v2-user)

---

## 💬 Need More Help?

If you'd like help customizing this or building similar automations, reach out:

**Robert Breen**  
AI & Automation Consultant  
🌐 [https://ynteractive.com](https://ynteractive.com)  
📧 robert.j.breen@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

---

## 🔗 Nodes Used

Microsoft Outlook, AI Agent, OpenAI Chat Model, Structured Output Parser, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
