# ⚡ Create AI-powered WhatsApp quiz bot with GPT-4o-mini and Supabase storage

> ⚡ **1,480 views** · ⚡ [Personal Productivity](../)

## Description

## Quiz Assistant via WhatsApp with Supabase and OpenAI

Create a **quiz assistant** that helps users study a topic of their choice through **WhatsApp**. Using **Supabase** and **OpenAI**, this workflow captures missing user data, stores it, and delivers dynamic quizzes tailored to each topic.

---

## Main Use Cases

* Guide users through personalized study sessions
* Collect and store user preferences (name + topic)
* Automate quiz creation with AI
* Deliver interactive content via WhatsApp

---

## How It Works

This workflow is composed of three main paths:

---

### 1. User Info Collection

* Triggered by an incoming WhatsApp message
* Retrieves existing user data from Supabase
* Checks if the **name** and **topic** are already defined
* If not, sends WhatsApp prompts to collect missing info
* Updates Supabase with new entries

---

### 2. AI Quiz Generation

* Once name and topic are confirmed, the **Merge node** consolidates all inputs
* Data is sent to the **AI Agent** (OpenAI Chat + Memory)
* The agent generates a quiz based on the selected topic

---

### 3. Response Delivery

* The quiz is sent back to the user via WhatsApp
* Flow ends, ready to restart with the next interaction

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
