# 💬 Auto-summarize Zoom recordings with GPT-4 → Slack & email

> ⚡ **366 views** · 💬 [Support Chatbots](../)

## Description

# 🎥 Auto-Summarize Zoom Recordings → Slack & Email

Never lose meeting insights again! This workflow automatically summarizes Zoom meeting recordings using **OpenAI GPT-4** and delivers structured notes directly to **Slack** and **Email**.

---

## ⚙️ How It Works
1. **Zoom Webhook** – triggers when a recording is completed.  
2. **Normalize Data** – extracts meeting details + transcript.  
3. **OpenAI GPT-4** – creates structured meeting summary.  
4. **Slack** – posts summary to your chosen channel.  
5. **Email** – delivers summary to your inbox.  

---

## 🛠️ Setup Steps
### 1. Zoom
- Create a Zoom App with the **`recording.completed`** event.  
- Add workflow webhook URL.

### 2. OpenAI
- Add your **API key** to n8n.  
- Use **GPT-4** for best results.

### 3. Slack
- Connect Slack credentials.  
- Replace `YOUR_SLACK_CHANNEL` with your channel ID.  

### 4. Email
- Connect Gmail or SMTP.  
- Replace recipient email(s).  

---

## 📊 Example Slack Message
📌 Zoom Summary
Topic: Sales Demo Pitch
Host: alex@company.com
Date: 2025-08-30
Summary:

Reviewed Q3 sales pipeline
Discussed objections handling
Assigned action items for next week

---

⚡ Get instant summaries from every Zoom meeting — no more manual note-taking!

## 🔗 Nodes Used

Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
