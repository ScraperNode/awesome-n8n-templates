# 📁 Automated project kickoff with Dropbox MCP, OpenAI, Slack & Gmail

> ⚡ **679 views** · 📁 [File Management](../)

## Description

The Project starter bot takes the hassle out of launching projects by automatically creating a well-structured folder system in Dropbox and sending timely notifications through Slack and Gmail. By combining n8n's intelligent automation and seamless integration with Dropbox, Slack, and Gmail, this workflow streamlines project setup, saving you time and keeping everyone in the loop effortlessly.


## 💡 Why Use Project Starter Bot?

**Save Time:** Cut down on the tedious manual folder creation by automating nested project directories instantly.

**Avoid Mistakes:** Eliminate human error when organizing project files and ensure every necessary sub-folder exists.

**Boost Team Collaboration:** Notify your team immediately via Slack and Gmail once the project folders are ready, so no one's left out of the loop.

**Gain an Edge:** Impress clients and colleagues with your rapid and professional project kickoff process – no coffee breaks needed!


## ⚡ Perfect For

- **Project Managers:** Keep your projects organized from day one without lifting a finger
- **Creative Teams:** Focus on creativity while the bot handles folder setup and notifications
- **Freelancers & Agencies:** Accelerate project launches and maintain consistency across clients


## 🔧 How It Works

1. **⏱ Trigger:** When you send a chat message requesting a new project folder
2. **📎 Process:** The bot creates the main project folder and five standardized sub-folders in Dropbox
3. **🤖 Smart Logic:** It verifies success and asks if you want to send notifications before proceeding
4. **💌 Output:** Sends a Slack message in the #projects channel and an email via Gmail confirming the setup
5. **🗂 Storage:** All folders are neatly organized inside Dropbox ensuring your files are easy to find


## 🔐 Quick Setup

1. Import JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin)
2. **Add credentials:**
   - Dropbox OAuth2
   - Slack API token
   - Gmail OAuth2
3. **Customize:** Adjust folder names or project path if needed
4. **Update:** Change Slack channel URL or Gmail recipient details
5. **Test:** Run with a sample project name to see folders and notifications in action


## 🧩 Requirements

- Active [n8n instance](https://n8n.partnerlinks.io/khmuhtadin)
- Dropbox OAuth2 credentials
- Slack API token with chat permissions
- Gmail OAuth2 credentials


## 🛠️ Level Up Ideas

- Integrate with project management tools like Jira or Trello for automated task creation
- Add personalized email templates with dynamic project details
- Use AI-powered chatbots to handle more complex project setup conversations


## 🧠 Nodes Used

- When chat message received
- AI Agent
- Dropbox create folder
- Send a message in Slack
- Send a message in Gmail
- Simple Memory (for context)
- MCP triggers and clients

## 📋 Details

**Made by:** [khaisa Studio](https://khaisa.studio)  
**Tags:** Project Management, Automation, Dropbox, Slack, Gmail  
**Category:** Workflow Automation  
**Need custom work?** [Contact Me](https://khmuhtadin.com/contact)

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Azure OpenAI Chat Model, Google Gemini Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
