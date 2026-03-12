# 📁 Telegram to Google Drive: auto upload & track videos with Gemini AI assistant

> ⚡ **308 views** · 📁 [File Management](../)

## Description

🚀 Overview

This workflow automates video uploads from Telegram directly to Google Drive, complete with smart file renaming, Google Sheets logging, and AI assistance via Google Gemini. It’s perfect for creators, educators, or organizations that want to streamline video submissions and file management.

⚙️ How It Works

1. Telegram Trigger -&gt; Start the workflow when a user sends a video file to your Telegram bot.
2. Switch Node -&gt; Detects file type or command and routes the flow accordingly.
3. Get File -&gt; Downloads the Telegram video file.
4. Upload to Google Drive -&gt; Automatically uploads the video to your chosen Drive folder.
5. Smart Rename -&gt; The file name is auto-formatted using dynamic logic (date, username, or custom tags).
6. Google Sheets Logging -&gt; Appends or updates upload data (e.g., filename, sender, timestamp) for easy tracking.
7. AI Agent Integration -&gt; Uses Google Gemini AI connected to Data Vidio memory to analyze or respond intelligently to user queries.
8. Telegram Notification -&gt; Sends confirmation or status messages back to Telegram.

🧠 Highlights

- Seamlessly integrates Telegram → Google Drive → Google Sheets → Gemini AI
- Supports file update or append mode
- Auto-rename logic via the Code node
- Works with custom memory tools for smarter AI responses
- Easy to clone and adapt, just connect your own credentials

🪄 Ideal Use Cases

- Video assignment submissions for schools or academies
- Media upload management for marketing teams
- Automated video archiving and AI-assisted review
- Personal Telegram-to-Drive backup assistant

🧩 Setup Tips

1. Copy and use the provided Google Sheet template (SheetTemplate)
2. Configure your Telegram Bot token, Google Drive, and Sheets credentials
3. Update the AI Agent node with your Gemini API key and connect the Data Vidio sheet
4. Test with a sample Telegram video before full automation

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
