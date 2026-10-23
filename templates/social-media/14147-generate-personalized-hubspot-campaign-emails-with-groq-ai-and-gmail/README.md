# 📱 Generate personalized HubSpot campaign emails with Groq AI and Gmail

> ⚡ **129 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works  
This workflow runs on a schedule and retrieves newly created HubSpot contacts from the past 24 hours. It processes each contact individually and generates a tailored marketing campaign using an AI model. The generated content is formatted into a clean HTML structure. Finally, a personalized email is sent to each contact with their campaign strategy.  

## Step-by-step  

- **Trigger and fetch contacts**  
  - **Schedule Trigger** – Starts the workflow at defined intervals.  
  - **Search contacts** – Retrieves contacts created in the last 24 hours from HubSpot.  

- **Process and generate campaign**  
  - **Loop Over Contacts** – Splits contacts into individual items for processing.  
  - **AI Agent** – Generates a personalized marketing campaign strategy.  
    - **Groq Chat Model** – Sub-node providing the AI model for content generation.  
  - **Format AI's output** – Converts AI text into HTML-friendly format.  
  - **Send a message** – Sends the personalized email to each contact.  

## Why use this?  

- Automates personalized outreach for every new lead  
- Delivers instant value with AI-generated campaign strategies  
- Reduces manual marketing effort and response time  
- Improves engagement through highly tailored messaging  
- Easily scalable and customizable for different business needs

## 🔗 Nodes Used

HubSpot, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
