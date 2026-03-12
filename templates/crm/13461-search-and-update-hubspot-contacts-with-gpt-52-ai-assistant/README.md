# 🤝 Search and update HubSpot contacts with GPT-5.2 AI assistant

> ⚡ **19 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_reczH8mtRj3GIIRiU.jpg)](https://youtu.be/GBKXYh2j74o)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What This Workflow Does

This workflow creates an intelligent AI assistant that manages your HubSpot contacts through natural conversation. Instead of manually navigating the HubSpot interface, you can simply chat with the agent to search for contacts by email or company name, add new leads, or update existing records. The AI automatically determines which action to take based on your chat input and can handle multiple operations in a single conversation.

## Key Features

- **Natural language contact search**: Find contacts by email address or company name using conversational commands
- **Smart contact creation**: Add new contacts by providing details in natural language—the AI extracts email, name, and company information automatically
- **Duplicate prevention**: Uses HubSpot's ""create or update"" functionality to prevent duplicate entries
- **Conversation memory**: Remembers context from previous messages in the same chat session
- **Multi-tool intelligence**: The AI agent automatically selects the appropriate tool based on your request

## Common Use Cases

- Quickly add leads captured from conversations, emails, or meetings without opening HubSpot
- Search for contact information during calls or meetings
- Update contact details through simple chat commands
- Bulk contact lookups by company for account research
- Enable non-technical team members to manage CRM data through conversation

## Setup Instructions

**HubSpot Configuration:**

1. Create a developer account at `developers.hubspot.com` using your existing HubSpot login
2. Navigate to **Legacy Apps** in the left-hand menu and create a new **private app**
3. Give your app a name and move to the **Scopes** tab
4. Add the following permissions:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
5. Click **Create app**
6. In the **Auth** tab, reveal and copy your **Access token**
7. In n8n, create a new HubSpot credential using **APP Token** as the connection method and paste your token

**OpenAI Configuration:**

- Ensure you have an OpenAI API account with valid credentials configured in n8n
- The workflow uses GPT-5.2 by default, but you can select any compatible OpenAI model based on your needs and budget

## Configuration Notes

The workflow includes three HubSpot tools that the AI can use:
- Search contacts by email address
- Search contacts by company name
- Create or update a contact

All contact properties (email, first name, last name, company name) are set to be automatically defined by the AI model based on your chat input. The agent intelligently chooses which tool to use based on your request—no need to specify which action you want.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
