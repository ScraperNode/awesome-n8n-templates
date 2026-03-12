# 💬 LINE assistant with Google Calendar and Gmail integration

> ⚡ **2,803 views** · 💬 [Support Chatbots](../)

## Description

### **Who is this for?**
- This workflow is for small business owners, personal assistants, or project managers who rely on multiple platforms for communication and scheduling.
- Ideal for users managing customer support, personal scheduling, or group event coordination via LINE, Google Calendar, and Gmail.

---

### **What problem is this workflow solving?**
- Reduces the manual effort needed to manage conversations, schedule events, and handle email communications.
- Provides an intelligent system for replying to user messages and fetching relevant calendar or email information in real time.
- Bridges the gap between messaging platforms and productivity tools, improving efficiency.

---

### **What this workflow does**
- **LINE Chatbot Automation**: Automatically processes and responds to messages received via LINE.
- **Google Calendar Management**: Retrieves upcoming events or schedules new events dynamically based on user queries.
- **Email Retrieval**: Fetches recent emails using Gmail and filters them based on user instructions.
- **AI-Powered Replies**: Uses OpenAI GPT to interpret user queries and provide tailored responses.

---

### **Setup**
1. **Prerequisites**:
   - LINE Developer account and API access.
   - Google Calendar and Gmail accounts with OAuth credentials.
   - An n8n instance with access to environment variables.

2. **Steps**:
   - Set up environment variables (`LINE_API_TOKEN` and `DYNAMIC_EMAIL`).
   - Configure API credentials for Google Calendar and Gmail in n8n.
   - Test the workflow by sending a sample message via LINE.

3. **Enhancements**:
   - Use sticky notes to provide inline instructions for each node.
   - Include a video walkthrough or a step-by-step document for first-time users.

---

### **How to customize this workflow to your needs**
- **Localization**: Modify responses in the AI Agent node to match the language and tone of your audience.
- **Integration**: Add more integrations like Slack or Microsoft Teams for additional notifications.
- **Advanced Filters**: Add specific conditions to Gmail or Google Calendar nodes to fetch only relevant data, such as events with specific keywords or emails from certain senders.

---

### **Advanced Use Cases**
- **Customer Support**: Automatically schedule meetings with clients based on their messages in LINE.
- **Event Management**: Handle RSVP confirmations, event reminders, and email follow-ups for planned events.
- **Personalized Assistant**: Use the workflow to act as a personal virtual assistant that syncs your schedule, replies to messages, and summarizes emails.

---

### **Tips for Optimization**
- **Edit Fields Node**: Add a centralized node to configure dynamic inputs (e.g., tokens, emails, or thresholds) for easy updates.
- **Fallback Responses**: Use a switch node to handle unrecognized input gracefully and provide clear feedback to users.
- **Logs and Monitoring**: Add nodes to log interactions and track message flows for debugging or analytics.

---

Let me know if you'd like me to expand on any specific section or add more customization ideas!

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Wikipedia

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
