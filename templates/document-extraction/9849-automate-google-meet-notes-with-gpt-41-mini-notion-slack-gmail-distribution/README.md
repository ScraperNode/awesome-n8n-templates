# 🔬 Automate Google Meet notes with GPT-4.1-mini, Notion, Slack & Gmail distribution

> ⚡ **553 views** · 🔬 [Document Extraction & Analysis](../)

## Description

🧾 An intelligent automation system that turns **Google Meet** recordings into structured meeting notes — integrating **Fireflies.ai**, **OpenAI GPT-4.1-mini**, **Notion**, **Slack**, **Google Drive**, and **Gmail** via **n8n**.

🎥 **Demo:** [Watch the Loom walkthrough](https://www.loom.com/share/f1277351e6de412caf32e12f15a2cacd?sid=a8f7e583-d5a8-496b-9299-08f66a51334f)

---

## ⚙️ What It Does

The **Google Meet Notes Generator & Distributor** automates the entire post-meeting workflow.

**Workflow Summary:**

1. Fetches **Google Meet transcript** via Fireflies.ai webhook.
2. Aggregates and summarizes transcript using **OpenAI GPT-4.1-mini** into:

   * Title
   * Summary
   * Decisions
   * Action Items
   * Risks
   * Questions
3. Stores the **transcript as a text file** on Google Drive and generates a shareable link.
4. Creates a **Notion page** with all the meeting details.
5. Posts the summary in `#meeting` Slack channel.
6. DMs each attendee on Slack with personalized meeting notes.
7. Sends **email recap** to all attendees via Gmail.

**Result:** No more manual note-taking or scattered updates — everything centralized, formatted, and instantly shareable.

---

## 💡 Use Cases

| Scenario                    | Description                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------- |
| **Team Meeting Summaries**  | Automatically summarize and distribute meeting notes for internal teams.                |
| **Project Management**      | Keep structured decisions, action items, and risks documented for each project meeting. |
| **Remote Teams**            | Notify distributed teams in Slack and via email without extra effort.                   |
| **Client Updates**          | Share polished meeting summaries with clients instantly.                                |
| **Knowledge Base / Notion** | Archive structured notes in Notion for reference and compliance.                        |

---

## 🔧 Setup

### 1. **Accounts and Tools Needed**

| Tool                       | Purpose                                        |
| -------------------------- | ---------------------------------------------- |
| **🤖 Fireflies.ai API**    | Fetch Google Meet transcripts via webhook      |
| **🧠 OpenAI API**          | Summarize and structure transcript into notes  |
| **📓 Notion API**          | Create structured meeting pages                |
| **💬 Slack OAuth/Bot**     | Post summaries in channel and DM attendees     |
| **🗂 Google Drive OAuth2** | Store transcripts and generate shareable links |
| **✉️ Gmail OAuth2**        | Email meeting recaps to attendees              |

---

### 2. **Fireflies.ai Setup**

1. Get API key from Fireflies.ai.
2. Configure **n8n → Credentials → Fireflies API**.
3. Ensure webhook triggers are set to send `meetingId` to n8n.

---

### 3. **OpenAI Setup**

1. Generate API key at [OpenAI](https://platform.openai.com/account/api-keys).
2. Add to **n8n → Credentials → OpenAI API**.
3. Use model **GPT-4.1-mini** in `Agent` and `Generate Slack Message` nodes.

---

### 4. **Notion Setup**

1. Create a Notion integration and share your workspace.
2. Add API token in **n8n → Credentials → Notion API**.
3. Map workspace/page IDs to `Notion Page` node.

---

### 5. **Slack Setup**

1. Create Slack Bot in workspace with **chat:write** and **users:read** permissions.
2. Add OAuth token in **n8n → Credentials → Slack API**.
3. Connect to `Send a message #meeting` and `DMs to Attendees` nodes.

---

### 6. **Google Drive Setup**

1. Create a folder for transcripts.
2. Enable Google Drive API in **Google Cloud Console**.
3. Add OAuth2 credentials to **n8n → Google Drive**.

---

### 7. **Gmail Setup**

1. Enable Gmail API in Google Cloud.
2. Add OAuth2 credentials in **n8n → Gmail**.
3. Connect to `Email to Attendees` node.

---

### 8. **n8n Workflow Setup**

1. Import provided n8n workflow JSON.
2. Configure all credentials: Fireflies, OpenAI, Notion, Slack, Google Drive, Gmail.
3. Activate workflow.
4. Test by sending a meeting ID via webhook.

**Workflow automatically:**
**Fetch → Summarize → Store → Notion → Slack → DM → Email**

---

## 🧠 Result

A fully automated AI pipeline that transforms Google Meet recordings into polished, shareable meeting notes — eliminating manual note-taking and keeping your team informed in real time.

---

## 📞 Support & Contact

If you face any issues during setup or execution, contact:
📧 **Email:** [atharvapj5@gmail.com](mailto:atharvapj5@gmail.com)
🔗 **LinkedIn:** [Atharva Jaiswal](https://www.linkedin.com/in/atharva-jaiswal/)

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Drive, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
