# 🎫 AI-powered customer feedback analysis & routing for Gmail, Zendesk, Slack & Pipedrive

> ⚡ **76 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who's it for
This workflow is for Customer Success, Product, and Support teams who need to centralize and analyze unstructured customer feedback. It automates the process of identifying key themes from various communication channels, allowing you to proactively address issues, track feature requests, and understand the voice of the customer without manual effort.

## What it does
This workflow uses a powerful chain of AI agents to process customer feedback from end to end. It begins by using a Data Agent to gather all recent customer interactions from multiple sources, including Gmail, Pipedrive, Zendesk, and Slack.

Once the raw data is collected, a second AI Chain reads all the text and compresses it into concise, actionable "signals." A third AI Chain then takes these signals and intelligently clusters them into shared topics, assigning each a human-readable label like "Billing," "Performance," or "Feature Request."

Finally, a fourth AI Agent acts as a dispatcher. It analyzes the clustered topics and follows a set of routing rules defined in its prompt to take the appropriate action. It uses its tools to automatically create a Zendesk ticket for product feedback, send a Slack message for billing issues, create a Notion page for training opportunities, or send a direct email alert for high-risk accounts.

## How to set up
To get this workflow running, you will need to configure the credentials and parameters for the following nodes:
1.  **Configure Credentials:** Add your credentials for the `Config: Set LLM for Agents` node and all of the Tool nodes (`Gmail`, `Pipedrive`, `Zendesk`, `Slack`, and `Notion`).
2.  **Set Initial Parameters:** In the `Set: Initial Parameters` node, update the placeholder email address and the Slack channel name for billing alerts.
3.  **Update Slack Search Channel:** In the `Tool: Search Slack Messages` node, set the channel you want the agent to search for feedback in.
4.  **Activate Workflow:** Once configured, you can run the workflow manually to start the analysis.

## Requirements
- An account with an LLM provider, such as OpenAI.
- Accounts for the services you wish to connect (Gmail, Pipedrive, Zendesk, Slack, Notion).
- This workflow requires n8n's Langchain community nodes to be installed on your instance.

## How to customize the workflow
This workflow's logic is primarily driven by AI prompts, making it highly customizable:
- **AI Prompts:** Adjust the prompts in any of the `AI Agent` or `AI Chain` nodes to change the data gathering, analysis, clustering, or routing rules to fit your business needs.
- **Data Sources:** Add, remove, or swap out the "Tool" nodes in the `AI Agent: Gather Customer Feedback` section to connect to different data sources like Intercom, Salesforce, or a database.
- **Triggers:** Replace the `Manual Trigger` with a `Schedule Trigger` to run the analysis automatically on a daily or weekly basis.

## 🔗 Nodes Used

AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
