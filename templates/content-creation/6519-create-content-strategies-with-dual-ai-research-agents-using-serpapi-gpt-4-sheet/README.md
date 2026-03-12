# 🎬 Create content strategies with dual AI research agents using SerpApi, GPT-4 & Sheets

> ⚡ **105 views** · 🎬 [Content Creation & Video](../)

## Description

### How It Works ⚙️

This workflow is a comprehensive, two-AI-agent system that acts as a virtual research and content team. It automates the entire process of turning a single topic into an actionable content strategy.

1.  **AI Agent 1 (The Researcher)**: The workflow starts with a manual trigger where you input a research topic. An **HTTP Request** node then acts as the first agent, performing a web search (e.g., using a Google Search API) to gather the most relevant articles and data.
2.  **Data Aggregation**: The raw data from the web search is then consolidated into a single, clean text block using a **Function** node. This makes the information digestible for the second AI agent.
3.  **AI Agent 2 (The Strategist)**: A second **OpenAI** node takes the aggregated data and acts as the strategist. It analyzes the content and uses a sophisticated prompt to generate a list of 5 specific and actionable content ideas.
4.  **Distribution & Notification**: The generated ideas are then automatically sent to two separate destinations. Each idea is logged into a **Google Sheets** database, which serves as your content calendar. A **Slack** notification is also sent to your marketing team, immediately alerting them to the new ideas.

### How to Set Up 🛠️

1.  **Import the Workflow**: Copy the provided workflow JSON and import it into your n8n instance.
2.  **Configure Credentials**:
    * **Google Search**: Add your API Key.
    * **OpenAI**: Add your API Key.
    * **Google Sheets**: Add your OAuth2 credential.
    * **Slack**: Add your Bot Token credential.
3.  **Customize Workflow Nodes**:
    * **Node 1 (`Manual Trigger`)**: You will input your research topic here to start the workflow.
    * **Node 7 (`Google Sheets`)**: Replace `[YOUR SPREADSHEET ID]` and `[YOUR SHEET NAME]` with your own content calendar details.
    * **Node 8 (`Slack`)**: Replace `[YOUR SLACK CHANNEL ID]` with the channel where your team receives marketing updates.
4.  **Save & Activate**: Once all settings and credentials are configured, save the workflow and click the "Inactive" toggle in the top-right corner to make it live.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
