# 🤝 Predict customer churn risk & create interventions with GPT-4, Zendesk & HubSpot

> ⚡ **588 views** · 🤝 [CRM & Sales Operations](../)

## Description

How it works
This AI Customer Success Risk Prediction workflow revolutionizes customer retention by predicting churn risk 30-90 days before it happens. Here's the high-level flow:
Daily Data Collection → AI Multi-Signal Analysis → Risk Scoring & Prediction → Smart Risk Routing → AI-Generated Personalized Interventions → CRM Updates & Team Alerts
The system automatically gathers data from your product analytics, support system, billing platform, and email tools, then uses GPT-4 to analyze patterns and predict which customers are at risk. It creates personalized intervention strategies and routes them based on urgency level.
Set up steps
Time to set up: Approximately 45 minutes
Prerequisites: Active accounts with your analytics platform, support system, billing provider, CRM, and AI provider
Step 1: Import & Configure Workflow (5 minutes)

Import the workflow JSON into your n8n instance
Review the 3 comprehensive sticky notes for context
Understand the AI analysis logic and intervention strategies

Step 2: Set Environment Variables (10 minutes)
Configure these critical variables:

ANALYTICS_API_URL and ANALYTICS_API_KEY
HIGH_RISK_SLACK_CHANNEL (for critical alerts)
CS_TEAM_EMAIL (intervention sender)
CRM_BASE_URL and CALENDAR_BOOKING_URL

Step 3: Configure API Credentials (20 minutes)
Set up secure credential connections for:

OpenAI/Anthropic API (AI analysis engine)
Analytics platform (Mixpanel/Amplitude/GA)
Support system (Zendesk/Intercom)
Billing platform (Stripe/Chargebee)
HubSpot CRM (risk data storage)
Slack API (team notifications)
SMTP/SendGrid (email delivery)

Step 4: Customize AI Prompts & Risk Thresholds (8 minutes)

Review and adjust the AI analysis prompts for your business
Modify risk score thresholds (Critical 90+, High 70-89, Medium 40-69)
Customize intervention email templates and tone
Set your specific risk factors (usage patterns, support indicators)

Step 5: Test & Activate (2 minutes)

Run a test execution with sample customer data
Verify AI analysis generates appropriate risk scores
Check that interventions are routed correctly
Activate the daily cron schedule

## 🔗 Nodes Used

Cron, Send Email, HTTP Request, Slack, HubSpot, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
