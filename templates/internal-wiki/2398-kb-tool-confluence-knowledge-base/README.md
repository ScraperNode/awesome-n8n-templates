# 📖 KB tool - Confluence knowledge base

> ⚡ **8,360 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

![n8n](https://i.imgur.com/qXWqiOd.png)
## Enhance Query Resolution with the Knowledge Base Tool!

Our **KB Tool - Confluence KB** is crafted to seamlessly integrate into the IT Ops AI SlackBot Workflow, enhancing the IT support process by enabling sophisticated search and response capabilities via Slack.

## Workflow Functionality:
- **Receive Queries**: Directly accepts user queries from the main workflow, initiating a dynamic search process.
- **AI-Powered Query Transformation**: Utilizes OpenAI's models or local ai to refine user queries into searchable keywords that are most likely to retrieve relevant information from the Knowledge Base.
- **Confluence Integration**: Executes searches within Confluence using the refined keywords to find the most applicable articles and information.
- **Deliver Accurate Responses**: Gathers essential details from the Confluence results, including article titles, links, and summaries, preparing them to be sent back to the parent workflow for final user response.

[To view a demo video of this workflow in action, click here. ](https://www.loom.com/share/bbeaa4b9295d4746b2cbab38a40f6f4b?sid=8326242c-3848-47db-872a-116a4b795ca9)

## Quick Setup Guide:
- Ensure correct configurations are set for OpenAI and Confluence API integrations.
- Customize query transformation logic as per your specific Knowledge Base structure to improve search accuracy.


**Need Help?**
- Dive into our [Documentation](https://docs.n8n.io) or get support from the [Community Forum](https://community.n8n.io)!


Deploy this tool to provide precise and informative responses, significantly boosting the efficiency and reliability of your IT support workflow.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
