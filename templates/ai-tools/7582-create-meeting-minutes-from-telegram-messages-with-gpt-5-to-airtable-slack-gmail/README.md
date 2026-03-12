# 🎯 Create meeting minutes from Telegram messages with GPT-5 to Airtable Slack Gmail

> ⚡ **366 views** · 🎯 [AI Summarization & Classification](../)

## Description

# How it works?

![baptistefortautomatisationairtable.png](fileId:2146)

1. Send a message or a voice note on Telegram right after the meeting.
2. n8n transcribes (if it's a voice note) and sends the text to GPT.
3. GPT generates a structured and professional meeting minutes report.
4. The report is automatically stored in Airtable.
5. Your team is instantly notified in Slack.
6. A formal email is sent via Gmail to the right recipients.

👉 Works for all types of meetings: client calls, team syncs, project updates… whether you type a message or send a quick voice memo.

If you need a **professional n8n automation agency** to build custom workflows like this, check out [Vision IA's n8n automation services](https://visionia.io/agence-n8n).

---

# ✅ Requirements

Before running this workflow, you’ll need:  

- A **Telegram account** with a bot configured (to send your messages/voice notes)  
- An **OpenAI API key** (for GPT and voice transcription)  
- An **Airtable account** with a base containing these fields:  
  - Email  
  - Subject  
  - Report  
- A **Slack account** with the target channel for notifications  
- A **Gmail account** connected to n8n (OAuth2)  

# 🔧 Step-by-step setup

![baptistefortautomatisationagentia.png](fileId:2147)

## Step 1 – Telegram Trigger
- **Node**: Telegram Trigger  
- **Updates**: `message`  
👉 Captures every message or voice note sent to the bot.  

---

## Step 2 – Detect text or voice
- **Node**: Code (“Message or Voice ?”)  
- **Expected output**:  
  - `{ type: "text", content }` if message  
  - `{ type: "voice", file_id }` if voice note  
👉 Routes the workflow based on the input type.  

---

## Step 3 – IF Condition
- **Condition**: `{{$json.type}} == voice`  
👉 Directs to the transcription branch if it’s a voice note.  

---

# Voice Branch 🎤  

## Step 4 – Download the voice file
- **Node**: Telegram → Voice note  
- **Parameter**: `fileId = {{$json.file_id}}`  

## Step 5 – Wait
- **Node**: Wait (2–3s)  
👉 Lets Telegram prepare the file.  

## Step 6 – Voice note download
- **Node**: Telegram (file download)  
👉 Retrieves the audio file.  

## Step 7 – Transcribe to text
- **Node**: OpenAI (Transcription)  
- **Resource**: `audio`  
- **Operation**: `transcribe`  
👉 Converts the voice note into plain text.  

## Step 8 – Short wait
👉 Ensures continuity before sending to GPT.  

---

# Text Branch ✍️  

## Step 9 – Normalize
- **Node**: Code (“Content”)  
- **Return**: `{ text: $json.content }`  
👉 Standardizes the text as if it were already a transcription.  

---

## Step 10 – Detect email
- **Node**: Code (“Domain or Email detection”)  
👉 Extracts the target email (or builds a fallback `contact@gmail.com`).  

---

## Step 11 – Generate meeting minutes
- **Node**: Agent (“Generate Meeting Message”)  
- **Prompt**: specialized for “meeting minutes”  
- **Model**: GPT-4.1-mini  
- **Output**: `{ email, subject, body }`  
👉 GPT creates a clean and structured meeting report.  

---

## Step 12 – Enforce clean JSON

- **Node**: Output Parser Structured  
- **JSON Example**:  
json {"email": "address@gmail.com","subject":"Subject","body":Email"}

👉 Ensures the output is always valid JSON.


### Step 13 – Cleanup / Airtable mapping

- **Node**: Code
- **Return**: `{ Email, subject, Report }`

👉 Prepares the correct fields aligned with your Airtable table.

If you need help setting up **advanced Airtable workflows and database automation**, check out [Vision IA's Airtable automation services](https://visionia.io/agence-airtable).

---

## Step 14 – Store in Airtable

![baptistefortautomatisationleads.png](fileId:2148)

- **Node**: Airtable (Create Record)  
- **Mapping**:  
  - Email = `{{$json.Email}}`  
  - subject = `{{$json.subject}}`  
  - Report = `{{$json.Report}}`  
👉 Archives each meeting report in your Airtable base.  

---

## Step 15 – Notify in Slack
- **Node**: Slack (Send Message)  
- **Channel**: your team channel  
- **Message**:  {{$json.fields.subject}}{{$json.fields.Report}}

## Step 16 – Send the email
- **Node**: Gmail (Send Email)  
- **sendTo**: `{{$('Create a record').item.json.fields.Email}}`  
- **subject**: `{{$('Create a record').item.json.fields.subject}}`  
- **message**: `{{$('Create a record').item.json.fields.Report}}`  


## Need Help Automating Your Communication Workflows?

This n8n workflow shows how powerful **email automation and AI-powered documentation** can be. If you want to go further with **automated email campaigns, meeting follow-ups, and team communication systems**, our agency specializes in building custom solutions.

👉 **Explore our email automation services**: [Vision IA – Email Automation Agency](https://visionia.io/agence-automatisation-emails)

We help businesses automate their entire communication pipeline—from meeting notes to client follow-ups and internal notifications—all running automatically with AI assistance.

Questions about this workflow or other automation solutions? Visit [Vision IA](https://visionia.io/) or reach out for a free consultation.

## 🔗 Nodes Used

Airtable, Slack, Telegram, Telegram Trigger, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
