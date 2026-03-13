# 🤖 Domain availability checker chatbot with Google Gemini and WHMCS

> ⚡ **716 views** · 🤖 [AI Chatbots & Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## This n8n template implements a Chatbot with Google Gemini to Check Domain Name Availability using the WHMCS API

## Who's it for

This template is designed for **domain registrars, web hosting companies, and IT service providers** who use WHMCS (Web Host Manager Complete Solution) and want to offer automated domain availability checking to their customers. It's perfect for businesses looking to enhance their customer support with AI-powered domain search assistance.

## How it works / What it does

This workflow creates an **AI-powered customer support chatbot** that automatically checks domain name availability using WHMCS API integration. When customers ask about domain availability, the AI agent:

1. **Receives customer queries** through a webhook endpoint
2. **Processes natural language requests** using Google Gemini AI
3. **Automatically checks domain availability** via WHMCS DomainWhois API
4. **Provides verified, accurate responses** with available alternatives
5. **Maintains conversation context** throughout the session

The system ensures **100% accuracy** by only suggesting domains that have been verified as available, eliminating guesswork and improving customer trust.

## How to set up

### 1. Configure WHMCS API Credentials
- Replace `Your_WHMCS_Identifier` with your actual WHMCS API identifier
- Replace `Your_WHMCS_Secret` with your actual WHMCS API secret
- Update `https://your_whmcs_url.com/includes/api.php` with your WHMCS domain

### 2. Set up Google Gemini API
- Configure your Google Gemini API credentials in the Google Gemini Chat Model node
- Ensure you have sufficient API quota for your expected usage

### 3. Deploy the Webhook
- The workflow creates a unique webhook endpoint for receiving customer queries
- Use this endpoint URL in your customer-facing application or chat interface

### 4. Test the Integration
- Send a test query to verify domain checking functionality
- Ensure proper error handling and response formatting

## Requirements

- **WHMCS installation** with API access enabled
- **Google Gemini API account** with appropriate credentials
- **n8n instance** (self-hosted or cloud)
- **Domain registrar business** or similar service offering

## How to customize the workflow

### Modify AI Agent Behavior
- Edit the system message in the AI Agent node to change the bot's personality and response style
- Adjust response length and tone to match your brand voice

### Add Additional Tools
- Integrate with other WHMCS APIs for pricing, registration, or management
- Add notification systems (email, Slack, SMS) for high-value domain inquiries
- Implement rate limiting or usage tracking

### Enhance Customer Experience
- Add domain suggestion algorithms based on customer input
- Integrate with your existing customer database for personalized recommendations
- Add multi-language support for international customers

### Security Enhancements
- Implement API key rotation and monitoring
- Add request validation and sanitization
- Set up usage analytics and abuse prevention

## Key Features

- **Real-time domain availability checking** via WHMCS API
- **AI-powered natural language processing** for customer queries
- **Session-based memory** for contextual conversations
- **Automatic alternative domain suggestions** when requested domains are unavailable
- **Professional, customer-focused responses** that maintain brand standards
- **Scalable webhook architecture** for high-volume usage

## Use Cases

- **Customer support automation** for domain registrars
- **Sales team assistance** with real-time domain availability
- **Customer self-service portals** with intelligent domain search
- **Lead generation** through proactive domain suggestions
- **Customer retention** via improved support experience

This template transforms your domain business by providing instant, accurate domain availability information while maintaining the personal touch that customers expect from professional service providers.

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
