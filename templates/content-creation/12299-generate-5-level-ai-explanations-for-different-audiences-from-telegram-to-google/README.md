# 🎬 Generate 5-level AI explanations for different audiences from Telegram to Google Docs with GPT-4.1-mini

> ⚡ **574 views** · 🎬 [Content Creation & Video](../)

## Description

### Description

Ask any question and get five different answers instantly. Each answer is written for a different audience—from kids to business executives. Your Telegram bot delivers all five explanations in under 10 seconds and saves them to Google Docs automatically. Perfect for teachers, writers, and anyone who needs to explain things to different people.

### Who's It For

• **Educators** creating multi-grade  
curriculum content
•	**Content creators** generating material for diverse audiences
•	**Technical writers** producing documentation at different expertise levels
•	**Parents** explaining complex topics to children
•	**Anyone** who needs to explain things to different people.


### How It Works

•	Transforms any question into five distinct explanations: kid-friendly stories (5-year-olds), relatable content (teenagers), professional explanations (graduates), academic analysis (PhD researchers), and strategic insights (business executives)
•	Five AI agents process simultaneously for 3-8 second response times
•	Delivers six formatted Telegram messages (header + five explanations)
•	Automatically archives complete conversations to Google Docs
•	Uses binary tree merge architecture for reliable data handling

### How to Set Up

•	Create Telegram bot via @BotFather and add token to n8n credentials
•	Obtain OpenAI API key and add to n8n credentials
•	Connect Google account to grant Docs access
•	Create blank Google Doc and paste URL in workflow's Google Docs node
•	Activate workflow and test with any question

### Requirements

•	Telegram Bot API token (free)
•	OpenAI API key (pay-per-use
•	Google account with Docs access (free)
•	n8n instance (cloud or self-hosted)


### How to Customize
•	Modify AI prompts in 'Create 5 Items' node for different tones and styles
•	Adjust character limits in formatting nodes to control message length
•	Change output destinations from Telegram to Slack, email, or other platforms
•	Switch AI providers from OpenAI to alternatives
•	Add additional comprehension levels by duplicating AI agent nodes


### Need Help?

For detailed notes and implementation, please leverage the README document at:
https://drive.google.com/file/d/19Fx-FoihL70qpOi4CnEwQ6Sud2dbUnE_/view?usp=sharing

Join the Discord (https://discord.com/invite/XPKeKXeB7d) or
Join the n8n community forum (https://community.n8n.io/) for support

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Docs, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
