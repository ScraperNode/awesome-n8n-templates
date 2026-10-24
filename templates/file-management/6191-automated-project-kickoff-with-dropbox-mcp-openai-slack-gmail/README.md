# 📁 Automated project kickoff with Dropbox MCP, OpenAI, Slack & Gmail

> ⚡ **711 views** · 📁 [File Management](../)

## Description

New project, zero setup hassle. The Project Starter Bot builds a well-structured Dropbox folder system for every new project and notifies everyone through Slack and Gmail. No more manual folders, no one left out of the loop.

*Last updated: September 2026.*

## Why Use Project Starter Bot?

**Save Time:** Nested project directories get created instantly. No more tedious manual folder setup.

**Avoid Mistakes:** Every necessary sub-folder exists from the start. Human error gone.

**Boost Team Collaboration:** Your team hears about it immediately via Slack and Gmail, so nobody misses the kickoff.

**Gain an Edge:** Fast, professional project launches that impress clients and colleagues.

## Perfect For

- **Project Managers:** Organized projects from day one without lifting a finger.
- **Creative Teams:** Focus on creativity while the bot handles folders and notifications.
- **Freelancers & Agencies:** Faster launches and consistent setup across clients.


## How It Works

1. **Trigger:** You send a chat message requesting a new project folder.
2. **Process:** The bot creates the main project folder plus five standardized sub-folders in Dropbox.
3. **Smart Logic:** It verifies success and asks if you want to send notifications before proceeding.
4. **Output:** A Slack message lands in the #projects channel and a Gmail confirmation goes out.
5. **Storage:** All folders stay neatly organized inside Dropbox, easy to find.


## Quick Setup

1. Import JSON file to your [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin)
2. **Add credentials:**
   - Dropbox OAuth2 ([developer docs](https://www.dropbox.com/developers))
   - Slack API token ([API docs](https://api.slack.com/))
   - Gmail OAuth2
3. **Customize:** Adjust folder names or project path if needed
4. **Update:** Change Slack channel URL or Gmail recipient details
5. **Test:** Run with a sample project name to see folders and notifications in action


## Requirements

- Active [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin)
- Dropbox OAuth2 credentials
- Slack API token with chat permissions
- Gmail OAuth2 credentials


## Level Up Ideas

- Integrate with project management tools like Jira or Trello for automated task creation
- Add personalized email templates with dynamic project details
- Use AI-powered chatbots to handle more complex project setup conversations


## Nodes Used

- When chat message received
- AI Agent
- Dropbox create folder
- Send a message in Slack
- Send a message in Gmail
- Simple Memory (for context)
- MCP triggers and clients

### Quick Answers
**How do I start a project?**  
Send a chat message with the new project name. Folders and notifications follow automatically.  
**What gets created?**  
A main project folder plus five standardized sub-folders in Dropbox.  
**Who gets notified?**  
Your team via Slack (#projects channel) and Gmail.  

## Details

**Made by:** [khmuhtadin](https://khmuhtadin.com)  
**Tags:** Project Management, Automation, Dropbox, Slack, Gmail  
**Category:** Workflow Automation  
**Need custom work?** [Contact Me](https://khmuhtadin.com/contact)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Azure OpenAI Chat Model, Google Gemini Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
