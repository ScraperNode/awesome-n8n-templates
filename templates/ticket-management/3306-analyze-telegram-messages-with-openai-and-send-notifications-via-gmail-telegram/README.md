# 🎫 Analyze Telegram messages with OpenAI and send notifications via Gmail & Telegram

> ⚡ **948 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# AI-powered Telegram message analysis with multi-tool notifications (Gmail, Telegram)

 
*This workflow triggers on Telegram updates, analyzes messages with an AI Agent using MCP tools, and sends notifications via Gmail and Telegram.*

## Detailed Description

### Who is this for?
This template is for teams, businesses, or individuals using Telegram for communication who need automated, AI-driven insights and notifications. It’s ideal for customer support teams, project managers, or tech enthusiasts wanting to process Telegram messages intelligently and receive alerts via Gmail and Telegram.

### What problem is this workflow solving?  Use case
This workflow solves the challenge of manually monitoring Telegram messages by automating message analysis and notifications. For example, a support team can use it to analyze customer queries on Telegram with AI tools (OpenAI, Airbnb, Brave, FireCrawl) and get notified via Gmail and Telegram for quick responses.

### What this workflow does
The workflow:  
1. Triggers on a Telegram update (e.g., a new message) using the **Listen for Telegram Updates** node.  
2. Processes the message with the **Analyze Message with AI** node, an AI Agent using MCP tools like OpenAI Chat, Airbnb search, Brave search, and FireCrawl.  
3. Sends notifications via the **Send Gmail Notification** and **Send Telegram Alert** nodes, including AI-generated insights.

### Setup
**Prerequisites:**  
- Telegram bot token for the trigger and notification nodes.  
- Gmail API credentials for sending emails.  
- API keys for OpenAI, Airbnb, Brave, and FireCrawl (used in the AI Agent).  

**Steps:**  
1. Configure the **Listen for Telegram Updates** node with your Telegram bot token.  
2. Set up the **Analyze Message with AI** node with your OpenAI API key and other tool credentials.  
3. Configure the **Send Gmail Notification** node with your Gmail credentials.  
4. Set up the **Send Telegram Alert** node with your Telegram bot token.  
5. Test by sending a Telegram message to trigger the workflow.  

Setup takes ~15-30 minutes. Detailed instructions are in sticky notes within the workflow.

### How to customize this workflow to your needs
- Add more AI tools (e.g., sentiment analysis) in the **Analyze Message with AI** node.  
- Modify the notification message in the **Send Gmail Notification** and **Send Telegram Alert** nodes to include specific AI outputs.  
- Add nodes for other channels like Slack or SMS after the AI Agent.

### Disclaimer
*This workflow uses Community nodes (e.g., Airbnb, Brave, FireCrawl), which are available only in self-hosted n8n instances. Ensure your n8n setup supports Community nodes before using this template.*

## 🔗 Nodes Used

Telegram, Telegram Trigger, Gmail, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
