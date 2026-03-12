# 🤖 Manage tasks and deadlines via WhatsApp using GPT-4 and Google Sheets

> ⚡ **653 views** · 🤖 [AI Chatbots & Agents](../)

## Description

![Screenshot 20250826 184939.png](fileId:2203)
## Who’s it for  
This template is for anyone who wants to manage tasks, deadlines, and updates directly from WhatsApp. It’s especially useful for teams, freelancers, and small businesses that track their work in Google Sheets and want quick AI-powered assistance without opening spreadsheets.  

## How it works / What it does  
This workflow turns WhatsApp into your personal task manager. When a user sends a message, the AI agent (powered by OpenAI) interprets the request, retrieves or updates task information from Google Sheets, and sends a concise response back via WhatsApp. The workflow can highlight overdue tasks, upcoming deadlines, and provide actionable suggestions.  

## How to set up  
1. Connect your **WhatsApp API account** in n8n.  
2. Add your **OpenAI credentials**.  
3. Link your **Google Sheets document** where tasks are stored.  
4. Deploy the workflow and test by sending a message to your WhatsApp number.  

## Requirements  
- WhatsApp Business API account connected to n8n  
- OpenAI account for AI responses  
- Google Sheets with task data  

## How to customize the workflow  
- Adjust the AI prompt to change tone or instructions.  
- Modify the Google Sheets fields (Task, Status, Due Date, Notes) to match your structure.  
- Add conditions or filters to customize which tasks get highlighted.

## 🔗 Nodes Used

WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Simple Memory, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
