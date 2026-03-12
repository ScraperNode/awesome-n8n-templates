# ⚡ Gmail to Telegram: email summaries with OpenAI GPT-4o

> ⚡ **2,690 views** · ⚡ [Personal Productivity](../)

## Description

### 🧑‍💼 Who is this for?

This workflow is for **anyone who receives too many emails** and wants to **stay informed without drowning in their inbox**.

If you're constantly checking your Gmail and wish you had someone summarizing messages and sending just the important parts to your phone, this is for you. Especially useful for solopreneurs, customer support, busy professionals, or newsletter addicts.

### 🧠 What problem is this workflow solving?

Email is powerful, but also overwhelming. Important info gets buried in threads, and staying on top of things can mean hours wasted scanning messages.

This workflow turns that chaos into clarity: as soon as a new email arrives, you get a **concise AI-generated summary** in Telegram — straight to your pocket.

No more checking Gmail constantly. No more missing key updates. Just a clean, human-style summary, written in the language you choose.

### ⚙️ What this workflow does

* Watches your Gmail inbox for new messages
* Prepares the content, including sender, subject, and message body
* Sends it to OpenAI to generate a **friendly, casual summary**
* Delivers that summary to your Telegram chat

All in seconds, completely automated.

### 🛠️ Setup

1. **Connect your accounts**: Gmail, Telegram, and OpenAI credentials must be added to the respective nodes.
2. **Set your Telegram chat ID**: Use a bot like [@userinfobot](https://t.me/userinfobot) to get it.
3. **Customize the language** in the `Set summary language` node (default is English).
4. **Activate the workflow** — and watch it go.

### 🧩 How to customize this workflow to your needs

You can make this workflow your own in a few easy ways:

* **Summarize only some emails**: Add a `Filter` node after the Gmail trigger (e.g., only messages from certain senders).
* **Change the tone or detail of summaries**: Tweak the system prompt in the `Summary generation agent`.
* **Use a different model**: Swap OpenAI’s GPT-4o for another provider like Claude or DeepSeek.
* **Translate to your preferred language**: Just change `"english"` to `"español"`, `"français"`, etc.

## 🔗 Nodes Used

Telegram, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
