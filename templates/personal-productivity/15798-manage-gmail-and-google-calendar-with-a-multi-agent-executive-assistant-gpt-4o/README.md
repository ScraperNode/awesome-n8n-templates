# ⚡ Manage Gmail and Google Calendar with a multi-agent executive assistant (GPT-4o)

> ⚡ **660 views** · ⚡ [Personal Productivity](../)

## Description

This workflow turns n8n into a smart, conversational personal assistant. Think of it as a digital manager for your daily work life. It can read your emails, write out message drafts, check when you are free, and book or cancel meetings on your calendar just by talking to it in plain English. 

---

## 🛠️ Step-by-Step Node Explanation

Here is exactly what every single block (node) in our workflow does, explained in simple terms:

### 🟩 The Starting Point

#### 1. When chat message received
* **What it does:** This is the chat box UI. It is the window where we type our instructions (like *"Do I have any unread emails?"*) and where the AI types its answers back to us.

---

### 🧠 Our Core Brain & Memory

#### 2. SUPERVISOR
* **What it does:** This is our project manager. It listens to what we type in the chat box, figures out what we want, and decides which specialized assistant should handle it. It makes sure everything happens in the right order.

#### 3. OpenAI Chat Model (for Supervisor)
* **What it does:** This acts as the raw human-like intelligence engine (powered by ChatGPT technology) that allows our Supervisor to understand normal human language instead of rigid computer code.

#### 4. Simple Memory
* **What it does:** This is our assistant's short-term notepad. It stores the last 16 lines of our conversation so the AI doesn't forget the context of what we are currently working on together.

---

### 💼 Our Specialized Assistant Teams

#### 5. Inbox_Agent
* **What it does:** This is our dedicated **Inbox Specialist**. When our Supervisor says, *"Hey, look at the inbox,"* this block wakes up. It knows exactly how to read, write, and manage emails, and reports its work back to our Supervisor.

#### 6. OpenAI Chat Model1 (for Inbox Agent)
* **What it does:** A dedicated brain assigned only to our Inbox Specialist. This keeps its thinking separate from the rest of the workflow so it can focus entirely on our emails without getting confused.

#### 7. Calendar_Agent
* **What it does:** This is our dedicated **Calendar Specialist**. It handles scheduling, looks for empty time slots, books appointments, or clears canceled events.

#### 8. OpenAI Chat Model2 (for Calendar Agent)
* **What it does:** A dedicated brain assigned only to our Calendar Specialist, helping it focus entirely on our dates, times, and scheduling rules.

---

### 📧 Our Gmail Tools (Used by the Inbox Specialist)

#### 9. Read_Emails
* **What it does:** Logically logs into our Gmail inbox to fetch our unread messages so our Inbox Specialist can summarize them for us.

#### 10. Draft_Email
* **What it does:** Opens up a blank email page in our Gmail, types out a subject line and a message body written by the AI, and saves it in our **Drafts folder**. It leaves the email there for us to look at later.

#### 11. Send_Email
* **What it does:** Safely packages and sends an email out to a recipient. It is completely locked down and will never fire unless we give explicit text permission in the chat.

---

### 📅 Our Google Calendar Tools (Used by the Calendar Specialist)

#### 12. Check_Calendar
* **What it does:** Peeks at our calendar during specific dates or hours to see if we have any overlapping plans, or to find a specific meeting we want to get rid of.

#### 13. Book_Meeting
* **What it does:** Writes a brand new appointment (like "Sync with Team") onto our digital calendar at a specific start and end time.

#### 14. Cancel_Meeting
* **What it does:** Finds an existing event on our calendar and completely deletes it to clear up our day.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
