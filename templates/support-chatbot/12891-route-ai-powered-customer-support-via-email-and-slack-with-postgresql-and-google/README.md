# 💬 Route AI-powered customer support via email and Slack with PostgreSQL and Google Sheets

> ⚡ **15 views** · 💬 [Support Chatbots](../)

## Description

## Automate intelligent customer support responses with AI and Slack

### How it works
1. **Receive request** via webhook with customer question
2. **Analyze sentiment** and detect urgency using JavaScript
3. **Send urgent alerts** to Slack for critical cases
4. **Search knowledge base** and fetch conversation history from PostgreSQL
5. **Generate AI response** with context-aware prompts
6. **Route intelligently**: Auto-respond via email OR escalate to Slack
7. **Log everything** to Google Sheets and PostgreSQL for analytics

### Setup steps
1. **Slack webhooks**: Replace `YOUR_URGENT_WEBHOOK` and `YOUR_ESCALATION_WEBHOOK` with your webhook URLs
2. **Google Sheets**: Replace `YOUR_SPREADSHEET_ID` with your spreadsheet ID and authenticate
3. **Email**: Configure SMTP/Gmail credentials in the email node
4. **PostgreSQL** (optional): Create `support_conversations` table or disable DB nodes
5. **Production**: Replace mock AI nodes with OpenAI/Anthropic API nodes

### Key features
- Multi-language support (Japanese & English)
- Sentiment analysis with urgency detection
- Smart escalation routing
- Real-time Slack notifications
- Comprehensive analytics logging

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
