# ⚡ AI-powered multi-platform assistant with Google Suite, LinkedIn & Twitter

> ⚡ **5,700 views** · ⚡ [Personal Productivity](../)

## Description

# 🤖 MCP Personal Assistant Workflow Description

This workflow integrates multiple productivity tools into a single AI-powered assistant using n8n, acting as a centralized control hub to receive and execute tasks across Google Calendar, Gmail, Google Drive, LinkedIn, Twitter, and more. 

---

## ✅ Key Capabilities

- **AI Agent + Tool Use**: Built using n8n's AI Agent and MCP system, enabling intelligent multi-step reasoning.
- **Tool Integration**:
  - Google Calendar: schedule, update, delete events
  - Gmail: search, draft, send emails
  - Google Drive: manage files and folders
  - LinkedIn & Twitter: post updates, send DMs
  - Utility tools: fetch date/time, search URLs
- **Discord Input**: Accepts prompts via `n8n_discord_trigger_bot` [repo link](https://github.com/Jharilela/n8n_discord_trigger_bot)

---

## 🛠 Setup Instructions

1. **Timezone Configuration**:
   - Go to `Settings &gt; Default Timezone` in n8n.
   - Set to your local timezone (e.g., `Asia/Jakarta`).
   - Ensure all `Date & Time` nodes explicitly use the same zone to avoid UTC-related bugs.

2. **Tool Authentication**:
   - Replace all OAuth credentials for:
     - Gmail
     - Google Drive
     - Google Calendar
     - Twitter
     - LinkedIn
   - Use your own accounts when copying this workflow.

3. **Platform Adaptability**:
   - While designed for Discord, you can replace the Discord trigger with any other chat or webhook service.
   - Example: Telegram, Slack, WhatsApp Webhook, n8n Form Trigger, etc.

---

## 📦 Strengths

- Great for **document retrieval**, **email summarization**, **calendar scheduling**, and **social posting**.
- Reduces the need for tab-switching across multiple platforms.
- Tested with a comprehensive checklist across categories like:
  - Calendar
  - Gmail
  - Google Drive
  - Twitter
  - LinkedIn
  - Utility tools
  - Cross-tool actions  
  (Refer to [discordGPT prompt checklist](https://n8n.io/workflows/XXXXXX) for prompt coverage.)

---

## ⚠️ Limitations

- ❌ **Binary Uploads**:
  - AI agents & MCP server currently struggle with binary payloads.
  - Uploading files to Gmail, Google Drive, or LinkedIn may fail due to format serialization issues.
  - Binary operations (upload/post) are **under development** and will be fixed in future iterations.

- ❌ **Date Bugs**:
  - If timezone settings are incorrect, event times may default to UTC, leading to misaligned calendar events.

---

## 🔬 Testing

Use the provided prompt checklist for full coverage of:
- ✅ Core feature flows
- ✅ Edge cases (e.g., invalid dates, nonexistent users)
- ✅ Cross-tool chains (e.g., Google Drive → Gmail → LinkedIn)

---

## ✅ MCP Assistant Test Prompt Checklist

### 📅 Google Calendar
- [X] "Schedule a meeting with Alice tomorrow at 10am. and send an invite to alice@wonderland.com"
- [X] "Create an event called 'Project Sync' on Friday at 3pm with Bob and Charlie."
- [X] "Update the time of my call with James to next Monday at 2pm."
- [X] "Delete my meeting with Marketing next Wednesday."
- [x] "What is my schedule tommorow ? "

### 📧 Gmail
- [x] "Show me unread emails from this week."
- [x] "Search for emails with subject: invoice"
- [X] "Reply to the latest email from john@company.com saying 'Thanks, noted!'"
- [X] "Draft an email to info@a16z.com with subject 'Emp0 Fundraising' and draft the body of the email with an investment opportunity in Emp0, scrape this site https://Emp0.com to get to know more about emp0.com"
- [X] "Send an email to hi@cursor.com with subject 'Feature request' and cc sales@cursor.com"
- [ ] "Send an email to recruiting@openai.com , write about how you like their product and want to apply for a job there and attach my latest CV from Google Drivce"

### 🗂 Google Drive
- [ ] "Upload the PDF you just sent me to my Google Drive."
- [X] "Create a folder called 'July Reports' inside Emp0 shared drive."
- [X] "Move the file named 'Q2_Review.pdf' to 'Reports/2024/Q2'."
- [X] "Share the folder 'Investor Decks' with info@a16z.com as viewer."
- [ ] "Download the file 'Wayne_Li_CV.pdf' and attach it in Discord."
- [X] "Search for a file named 'Invoice May' in my Google Drive."

### 🖼 LinkedIn
- [X] "Think of a random and inspiring quote. Post a text update on LinkedIn with the quote and end with a question so people will answer and increase engagement"
- [ ] "Post this Google Drive image to LinkedIn with the caption: 'Team offsite snapshots!'"
- [X] "Summarize the contents of this workflow and post it on linkedin with the original url https://n8n.io/workflows/5230-content-farming-ai-powered-blog-automation-for-wordpress/"

### 🐦 Twitter
- [X] "Tweet: 'AI is eating operations. Fast.'"
- [X] "Send a DM to @founderguy: 'Would love to connect on what you’re building.'"
- [X] "Search Twitter for keyword: 'founder advice'"

### 🌐 Utilities
- [X] "What time is it now?"
- [ ] "Download this PDF: https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf"
- [X] "Search this URL and summarize important tech updates today: https://techcrunch.com/feed/"

### 📎 Discord Attachments
- [ ] "Take the image I just uploaded and post it to LinkedIn."
- [ ] "Get the file from my last message and upload it to Google Drive."

### 🧪 Edge Cases
- [X] "Schedule a meeting on Feb 30."
- [X] "Send a DM to @user_that_does_not_exist"
- [ ] "Download a 50MB PDF and post it to LinkedIn"
- [X] "Get the latest tweet from my timeline and email it to myself."

### 🔗 Cross-tool Flows
- [ ] "Get the latest image from my Google Drive and post it on LinkedIn with the caption 'Another milestone hit!'"
- [ ] "Find the latest PDF report in Google Drive and email it to investor@vc.com."
- [ ] "Download an image from this link and upload it to my Google Drive: https://example.com/image.png"
- [ ] "Get the most recent attachment from my inbox and upload it to Google Drive."

---
Run each of these in isolated test cases. For cross-tool flows, verify binary serialization integrity.


## 🧠 Why Use This Workflow?

This is an always-on personal assistant that can:
- Process natural language input
- Handle multi-step logic
- Execute commands across 6+ platforms
- Be extended with more tools and memory

If you want to interact with all your work tools from a single prompt—this is your base to start.

---

## 📎 Repo & Credits

- Discord bot trigger: [n8n_discord_trigger_bot](https://github.com/Jharilela/n8n_discord_trigger_bot)
- Creator: [Jay (Emp₀)](https://twitter.com/jharilela)

## 🔗 Nodes Used

Webhook, Discord, AI Agent, OpenAI Chat Model, Code Tool, MongoDB Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
