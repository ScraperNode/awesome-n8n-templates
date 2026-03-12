# 👥 Automate employee recognition with Slack, Sheets, Gmail & optional GPT-4

> ⚡ **58 views** · 👥 [HR & Recruitment](../)

## Description

# Automated Employee Recognition Bot with Slack + Google Sheets + Gmail

## Description

Turn employee recognition into an automated system.

This workflow celebrates great work instantly  it posts recognition messages on Slack, sends thank-you emails via Gmail, and updates your tracking sheet automatically.

Your team feels appreciated.
Your HR team saves hours.
Everyone wins.

---

### ⚙️ How It Works

1. You add a new recognition in Google Sheets.
2. The bot automatically celebrates it in Slack.
3. The employee receives a thank-you email.
4. HR gets notified and the sheet updates itself.

---

## 🔧 Setup Steps

#### 1️⃣ Prepare Your Google Sheet

Create a sheet called **“Employee_Recognition_List”** with these columns:
`Name | Department | Reason | Date | Email | Status | EmailStatus`
Then add one test row — for example, your own name — to see it work.

---

#### 2️⃣ Connect Your Apps

Inside n8n:

* **Google Sheets:** Connect your Google account so the bot can read the sheet.
* **Slack:** Connect your Slack workspace to post messages in a channel (like `#general`).
* **Gmail:** Connect your Gmail account so the bot can send emails automatically.

---

#### 3️⃣ (Optional) Add AI Personalization

If you want the messages to sound more natural, add an OpenAI node with this prompt:

&gt; “Write a short, friendly recognition message for {{name}} from {{dept}} who was recognized for {{reason}}. Keep it under 2 sentences.”

This makes your Slack and email messages feel human and genuine.

---

#### 4️⃣ Turn It On

Once everything’s connected:

* Save your workflow
* Set it to **Active**
* Add a new row in your Google Sheet

The bot will instantly post on Slack and send a thank-you email 🎉

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Google Sheets Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
