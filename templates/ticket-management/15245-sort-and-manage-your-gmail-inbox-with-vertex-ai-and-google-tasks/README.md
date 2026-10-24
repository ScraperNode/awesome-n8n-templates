# 🎫 Sort and manage your Gmail inbox with Vertex AI and Google Tasks

> ⚡ **141 views** · 🎫 [Ticket Management & Triage](../)

## Description

# AI Gmail Manager: Sort, Draft & Summarize

Transform your chaotic inbox into a streamlined productivity hub! This advanced n8n workflow acts as your personal AI executive assistant. It automatically reads, categorizes, and summarizes your daily emails, generates reply drafts for important messages, and syncs action items directly to Google Tasks.

---

### 🧠 Key Features

* **Intelligent Classification:** Uses AI to analyze the context of incoming emails (Sender, Subject, and Snippet) and categorizes them into three levels: *Action Required*, *Important to Read*, and *Unimportant/Spam*.
* **Automated Inbox Decluttering:** Low-priority emails (like newsletters, receipts, or login alerts) are automatically marked as read, labeled "Unimportant," and archived so you only see what matters.
* **Context-Aware AI Drafts:** If an email requires a response, the workflow automatically generates a ready-to-use draft in your Gmail.
* **Automated Task Extraction:** The AI scans important emails for pending tasks. If a genuine action item is detected, it automatically creates a summarized entry in Google Tasks.
* **Daily Summary:** At the end of the day, the AI compiles all Priority 1 and 2 emails into a neatly structured digest and sends it directly to your inbox.
* **Built-in Time Tracking:** Includes the n8n "Time Saved" node to help you visualize your productivity gains.

---

### ⚙️ How It Works

1.  **Scheduled Trigger:** By default, the workflow runs daily at 5:00 PM (17:00).
2.  **Data Fetching:** It connects to Gmail and retrieves all emails received within the last 24 hours.
3.  **AI Analysis:** Emails are processed by an AI Information Extractor that assigns a priority score (1–3) and determines if a reply is needed.
4.  **Action Execution:** Depending on the priority, emails are labeled, marked as read, archived, or sent to the AI agent for drafting and task creation.
5.  **Summary Generation:** Finally, the workflow merges high-priority data, uses an LLM to write a concise summary, and emails it to you.

---

### 🚀 Setup Instructions

Setup takes 10-15 Minutes depending on if you already use *Google OAuth*.
1.  **Schedule:** Set your desired trigger time and ensure the workflow timezone is set to **local** in the n8n settings.
2.  **AI Setup:** Connect your Vertex AI credentials (or your preferred AI model).
3.  **Gmail:** Connect your Gmail credentials.
4.  **Labels:** Create the following labels in your Gmail account: **Important**, **n8n Sorted**, and **Unimportant**.
5.  **Node Sync:** After creating the labels in Gmail, update the corresponding labeling nodes in this workflow to match your label names.
6.  **Optional Features:** Deactivate or delete any unused nodes (e.g., Google Tasks or Time Saving) to skip those steps.
7.  **Language:** If your emails are in a language other than English, you can adjust the prompt language within the LLM Chain nodes.
8.  **Prompt Customization:** You can fine-tune all prompts to your liking—especially the sorting logic, which depends on your preferred AI model and personal needs.

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Basic LLM Chain, Structured Output Parser, Google Vertex Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
