# ⚡ Daily meeting summaries with Google Calendar & Gemini for Slack-Discord-WhatsApp

> ⚡ **81 views** · ⚡ [Personal Productivity](../)

## Description

This workflow automatically summarizes your team's daily meetings from multiple Google Calendars daily at 9AM and sends the digest to your preferred communication channels. It uses AI to identify and format meeting details, making it easy to see your schedule at a glance.

---

### **Good to Know**
* **Multi-Calendar Support**: This workflow is designed to pull events from any number of Google Calendars you've connected, providing a single, consolidated summary.
* **AI-Powered Summaries**: The AI Agent, powered by Google Gemini, is instructed to format the output with key details like title, time, duration, and a link to join the meeting. This saves you from sifting through calendar invites.

### **How It Works**
1.  A **Schedule Trigger** starts the workflow at a set time each day e.g at 9 AM (or any other time you choose).
2.  An **AI Agent** with access to the Google Calendar tool is prompted to fetch today's events from all connected calendars.
3.  The **Google Calendar** nodes retrieve all meetings for the current day.
4.  The AI Agent processes this information and generates a clean, structured summary.
5.  Finally, the formatted summary is sent to your team's chosen communication platforms: **Slack**, **Discord**, and **WhatsApp**.

---

### **How to Use**
1.  **Set the Schedule**: Adjust the **Schedule Trigger** to run at a time that works best for your team—for example, every morning before the workday begins.
2.  **Connect Your Accounts**: Add your **Google Calendar** credentials to connect all the calendars you want to monitor.
3.  **Choose Your Channels**: Connect the appropriate **Slack**, **Discord**, and/or **WhatsApp** nodes and configure them to send the message to your desired channels or groups.

---

### **Requirements**
* **Google Gemini account**: A Google Gemini account is needed for the AI Agent and Chat Model to function.
* **Google Calendar account(s)**: You'll need to connect the Google Calendar accounts you wish to pull data from.
* **Communication platform account(s)**: Credentials for the communication apps you want to use (Slack, Discord, WhatsApp).

---

### **Customizing This Workflow**
* **Modify the Trigger**: You can change the **Schedule Trigger** to a different interval or even trigger the workflow manually with a webhook.
* **Adjust the AI Prompt**: Fine-tune the AI Agent's prompt to change the summary format, include more details, or even ask it to highlight the most important meetings of the day.
* **Add More Platforms**: Easily add more communication nodes to send the daily summary to other platforms like Microsoft Teams, email, or even a custom CRM.

## 🔗 Nodes Used

Slack, Discord, WhatsApp Business Cloud, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
