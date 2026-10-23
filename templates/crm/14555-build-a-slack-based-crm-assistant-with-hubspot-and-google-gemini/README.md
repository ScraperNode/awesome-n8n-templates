# 🤝 Build a Slack-based CRM assistant with HubSpot and Google Gemini

> ⚡ **42 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works  
This workflow creates a Slack-based CRM assistant that allows users to query HubSpot data using natural language. When a user mentions the bot in Slack, the message is cleaned and processed to remove Slack-specific formatting. The workflow then retrieves and filters relevant data from HubSpot (deals, companies, and contacts). Finally, an AI agent formats the response and sends a structured reply back to Slack.  

## Step-by-step  

- **Trigger on Slack mention**  
  - **Slack Trigger** – Listens for app mentions in Slack channels.  
  - **Code in JavaScript** – Cleans the message by removing Slack IDs and formatting.  

- **Fetch and filter CRM data**  
  - **Get Deals** – Retrieves deals from HubSpot.  
  - **Filter Deals** – Filters deals based on the user query.  
  - **Get many companies** – Fetches company records from HubSpot.  
  - **Filter Companies** – Matches companies against the query.  
  - **Get Contacts** – Retrieves contact data from HubSpot.  
  - **Filter Contacts** – Filters contacts using name-based matching.  
  - **Merge** – Combines filtered deals, companies, and contacts into one dataset.  

- **Generate and send AI response**  
  - **AI Agent** – Uses AI to format and structure the CRM data into a readable response.  
    - **Google Gemini Chat Model** – Provides the language model for the AI agent.  
  - **Send a message** – Sends the final response back to the Slack channel.  

## Why use this?  

- Enables instant CRM access directly from Slack without logging into HubSpot  
- Simplifies data lookup using natural language queries  
- Combines multiple CRM objects into a single intelligent response  
- Improves team productivity with faster decision-making  
- Easily customizable for additional fields, filters, or AI formatting

## 🔗 Nodes Used

Slack, HubSpot, Filter, AI Agent, Google Gemini Chat Model, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
