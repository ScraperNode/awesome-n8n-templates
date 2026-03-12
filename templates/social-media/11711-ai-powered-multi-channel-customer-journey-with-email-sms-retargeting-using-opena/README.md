# 📱 AI-powered multi-channel customer journey with email, SMS & retargeting using OpenAI

> ⚡ **335 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How It Works
This workflow automates personalized customer journeys by analyzing CRM data, purchase history, chat interactions, and performance metrics to intelligently route customer actions through multiple channels (email, SMS, retargeting) via AI-optimized schemas. A webhook trigger initiates the process by fetching CRM customer data, which is then merged with historical records and interactions. OpenAI builds comprehensive customer state profiles, enabling intelligent routing to appropriate channels using optimized journey logic. The system aggregates performance metrics in real-time and updates the database to maintain synchronized customer information across all systems. 

## Setup Steps
1. Connect CRM credentials (source system)
2. Add OpenAI API key for state builder
3. Configure Gmail/SMS provider credentials
4. Add Google Sheets connection for performance tracking
5. Set Touchpoint Event Webhook URL
6. Map database connection for customer state persistence

## Prerequisites
OpenAI API key, CRM access, Gmail/SMS provider accounts, Google Sheets, database (PostgreSQL/MySQL), n8n instance with webhook enabled.

## Use Cases
E-commerce personalization, SaaS customer retention, multi-touch marketing automation 

## Customization
Modify journey schemas in Journey Optimizer AI, adjust routing rules in Action Type Router 

## Benefits
Reduces manual campaign management 80%, improves conversion via AI personalization

## 🔗 Nodes Used

HTTP Request, Twilio, Webhook, Gmail, Google Ads, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
