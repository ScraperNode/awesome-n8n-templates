# ⚡ Google Calendar 📅 reminder system with GPT-4o and Telegram

> ⚡ **28,797 views** · ⚡ [Personal Productivity](../)

## Description

How many times have you missed a meeting or forgotten an appointment because a calendar reminder got lost in the noise? Traditional notifications are often dry, easy to ignore, or scattered across different apps—leaving you scrambling at the last minute.

This smart **Google Calendar** workflow fixes that by sending you a clear, friendly reminder exactly **1 hour before your event starts**—delivered through **Telegram** as if a personal assistant were looking out for you. Powered by **AI**, it transforms cold calendar alerts into warm, conversational nudges you won't ignore.

----
#### Why This Works Better:  
✅ **No More Overlooked Alerts** – Consolidates reminders into one clear, accessible place (Telegram), so you never miss them.  
✅ **Friendly & Engaging** – AI transforms robotic calendar entries into natural, human-like reminders that are harder to ignore.  
✅ **Works Everywhere** – Whether you're on your phone, laptop, or tablet, you’ll get the same clear notification, no matter the platform.  

---
#### **How It Works**
1. **Scheduled Trigger**: The workflow starts with a Schedule Trigger node that runs every minute to check for upcoming events.
2. **Google Calendar Check**: The "Get upcoming event" node queries Google Calendar for events starting within the next hour (between `timeMin` and `timeMax`).
3. **Duplicate Prevention**: The "Already sent?" node ensures reminders are not sent multiple times for the same event by filtering out duplicates.
4. **AI-Powered Reminder**: The "Secretary Agent" node, powered by **GPT-4**, crafts a friendly and professional reminder message. It includes event details like name, description, location, start/end time, and creator, formatted in a conversational tone.
5. **Telegram Notification**: The final "Send reminder" node delivers the reminder via Telegram, ensuring the user receives it in a clear and accessible format.
----
#### **Set Up Steps**
1. **Configure Schedule Trigger**: Set the interval (e.g., every minute) to check for events.
2. **Connect Google Calendar**: Link your Google Calendar account and specify the calendar to monitor.
3. **Set Up AI Agent**: Customize the "Secretary Agent" with the provided system message to ensure reminders are warm, professional, and detailed.
4. **Link Telegram**: Add your Telegram credentials and specify the `CHAT_ID` where reminders will be sent.
5. **Activate Workflow**: Ensure the workflow is active and set to the correct timezone (e.g., `Europe/Rome`).
---
#### **Why It’s Useful**
- **Never Miss an Event**: Traditional calendar reminders can be easy to overlook, especially when scattered across platforms. This workflow consolidates reminders into a single, accessible channel (Telegram).
- **Clear and Friendly**: The AI agent transforms generic calendar alerts into personalized, conversational reminders, making them harder to ignore.
- **Cross-Platform Accessibility**: By delivering reminders via Telegram, users receive them in a consistent format, regardless of the device or platform they’re using. No more missed events due to unclear notifications!
---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Telegram, Google Calendar, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
