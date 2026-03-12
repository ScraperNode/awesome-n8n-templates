# 🎬 Post images from Google Drive to Discord using Gemini Gemini AI

> ⚡ **18 views** · 🎬 [Content Creation & Video](../)

## Description

## 🎯 What This Does
This workflow automatically monitors a specific Google Drive folder for new images. When you drop a file in, it uses Google's Gemini AI to analyze the image, generate an creative title, and write a high-engagement description. It then posts the image and text to a Discord channel and organizes your Google Drive by renaming the file and moving it to a "Processed" folder.

🔄 How It Works
- **Watch:** The workflow detects when a new image file is uploaded to a specific Google Drive folder.
- **Analyze:** It downloads the image and sends it to a Google Gemini AI Agent to identify the "hook" and generate technical/marketing copy.
- **Format:** The AI returns a structured title, description, and a new optimized filename.
- **Publish:** The workflow posts the image and the AI-generated caption directly to your Discord channel as a new thread.
- **Organize:** Finally, it renames the original file in Google Drive and moves it to a separate "Processed" folder to keep your workspace clean.

## 🚀 Setup Requirements

* **n8n Version:** Latest stable release recommended.
* **Google Cloud Console Project:** With **Google Drive API** enabled.
* **Google Gemini API Key:** For the AI generation.
* **Discord Application:** A Bot Token with permissions to send messages/create threads in your server.
* **Estimated Setup Time:** ~15 minutes.

## Set up steps

1. **Configure Google Drive Credentials:**
* Set up a project in Google Cloud Console.
* Enable the Google Drive API.
* Create OAuth 2.0 credentials and add them to the **Google Drive Trigger** and **Google Drive** nodes in n8n.


2. **Prepare Drive Folders:**
* Create a folder in Google Drive for **Input** (where you drop files). Copy the Folder ID from the URL.
* Create a folder for **Processed** files. Copy this Folder ID as well.
* Paste the Input Folder ID into the **Google Drive Trigger** node.
* Update the `processed_folder_id` value in the **"Get File & Set Channel"** (Set) node.


3. **Configure AI Agent:**
* Get your API Key from Google AI Studio.
* Add a new credential for **Google PaLM API** in the **Chat Model** node.


4. **Setup Discord Bot:**
* Go to the Discord Developer Portal and create a new Application/Bot.
* Copy the **Bot Token**.
* Invite the bot to your server.
* Enable Developer Mode in your Discord User Settings to right-click a channel and "Copy Channel ID".
* Update the `channel_id` in the **"Get File & Set Channel"** node.
* Open the **"Post To Discord Channel"** (HTTP Request) node. Under Authentication, select "Predefined Credential Type" -&gt; "Discord Bot API" and paste your token.


5. **Test the Workflow:**
* Click "Test Workflow" in n8n.
* Upload an image to your Google Drive Input folder.
* Watch the execution! Check Discord for the new post and Drive to see the file move.

## Nodes Used

* **Google Drive Trigger:** Watches for new content.
* **Google Drive:** Downloads, Updates (Renames), and Moves files.
* **AI Agent (LangChain):** Orchestrates the analysis.
* **Google Gemini Chat Model:** Generates the creative text.
* **Structured Output Parser:** Ensures the AI replies in usable JSON.
* **HTTP Request:** custom API call to Discord for advanced thread creation.
* **Set:** Manages variables and folder IDs.

## Customization Guide

* **Change the Persona:** Edit the "System Message" in the **AI Agent** node to change the tone. Want a pirate narrator? Or a strictly professional corporate tone? Change it there!

---
## 🙏 Thank You for Trying This Workflow!
Your time and trust mean a lot! I truly appreciate you using this template.
### Your feedback shapes future updates:
- 💡 Suggestions for improvement
- 🆕 Ideas for new features  
- 📝 Requests for other automation workflows
#### Please share your thoughts! Every idea helps shape the next update.

---
### 🙋‍♂️ Join & Follow For More Free Templates!
#### Discord Community: [We Work Together](https://discord.gg/CTfcVaFEGA)
- Get help, share builds, collaborate!
- Daily tips, tutorials, and updates
### Thank you again for being part of this journey! 🚀
### Together, we automate better! 🤖✨

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
