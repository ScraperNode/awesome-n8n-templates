# 🔍 AI Customer Support Chat for Web Hosting with Google Gemini & WHMCS

> ⚡ **891 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## This n8n template implements a Customer Support Chat Agent for Web Hosting Companies with Google Gemini, Google Sheets Knowledge base and WHMCS API to Check Domain Name Availability 

## Who's it for

This template is designed for **web hosting companies, domain registrars, and IT service providers** who want to automate their customer support with an AI-powered chatbot. It's perfect for businesses looking to provide 24/7 customer assistance for hosting plans, domain services, and technical support while maintaining a professional, human-like interaction experience.

## How it works / What it does

This workflow creates an **AI-powered customer support chatbot** that provides comprehensive assistance for web hosting and domain services. The AI agent (named Matt) automatically:

1. **Receives customer queries** through a webhook endpoint
2. **Captures customer information** (name and email) at the start of each session
3. **Processes natural language requests** using Google Gemini AI
4. **Accesses real-time information** from multiple Google Sheets knowledge bases:
   - Shared Hosting Plans (pricing, features, specifications)
   - Domain Prices (registration, transfer, renewal costs)
   - Hosting Features (technical capabilities and specifications)
   - FAQs (common questions and answers)
   - Payment Method Details (accepted payment options)
   - Company Offerings (available products and services)
5. **Checks domain availability** via WHMCS API integration
6. **Provides accurate, contextual responses** based on the knowledge base
7. **Maintains conversation history** with session-based memory
8. **Stores complete chat sessions** in Google Sheets for analysis and follow-up

The system ensures **100% accuracy** by only providing information that exists in the knowledge base, eliminating guesswork and maintaining brand consistency.

## How to set up

### 1. Configure Google Sheets Knowledge Base
- Set up a Google Sheets document with the following sheets:
  - **Shared_Hosting_Plans**: Hosting plan details, pricing, and specifications
  - **Domain_Prices**: Domain registration and renewal pricing
  - **Hosting_Features**: Technical features and capabilities
  - **FAQs**: Frequently asked questions and answers
  - **Payment_Method_Details**: Payment options and instructions
  - **Offerings**: Available products and services
- Update the Google Sheets credentials in each tool node

### 2. Set up Google Gemini API
- Configure your Google Gemini API credentials in the Google Gemini Chat Model node
- Ensure you have sufficient API quota for your expected usage

### 3. Configure WHMCS API (Optional)
- Replace `Your_WHMCS_Identifier` with your actual WHMCS API identifier
- Replace `Your_WHMCS_Secret` with your actual WHMCS API secret
- Update `https://your_whmcs_url.com/includes/api.php` with your WHMCS domain
- This enables domain availability checking for customers

### 4. Set up Chat Storage
- Create a Google Sheet for storing chat inquiries
- Update the document ID and credentials in the Chat_Inquiries node
- This will automatically store all customer conversations for analysis

### 5. Deploy the Webhook
- The workflow creates a unique webhook endpoint for receiving customer queries
- Use this endpoint URL in your customer-facing application or chat interface

## Requirements

- **Google Sheets account** with the knowledge base set up
- **Google Gemini API account** with appropriate credentials
- **n8n instance** (self-hosted or cloud)
- **WHMCS installation** (optional, for domain availability checking)
- **Web hosting or domain services business**

## How to customize the workflow

### Modify AI Agent Behavior
- Edit the system message in the AI Agent node to change the bot's personality and response style
- Adjust response length and tone to match your brand voice
- Customize the agent's name (currently "Matt")

### Enhance Knowledge Base
- Add more Google Sheets tools for additional information sources
- Include product catalogs, pricing tables, or technical documentation
- Add multi-language support for international customers

### Improve Customer Experience
- Add domain suggestion algorithms based on customer input
- Integrate with your existing customer database for personalized recommendations
- Add notification systems (email, Slack, SMS) for high-value inquiries

### Security Enhancements
- Implement API key rotation and monitoring
- Add request validation and sanitization
- Set up usage analytics and abuse prevention

## Key Features

- **Real-time information access** from Google Sheets knowledge base
- **AI-powered natural language processing** for customer queries
- **Session-based memory** for contextual conversations
- **Automatic domain availability checking** via WHMCS API
- **Professional, customer-focused responses** that maintain brand standards
- **Complete chat history storage** for analysis and follow-up
- **Scalable webhook architecture** for high-volume usage
- **Multi-tool integration** for comprehensive customer support

## Use Cases

- **24/7 customer support automation** for web hosting companies
- **Sales team assistance** with real-time product information
- **Customer self-service portals** with intelligent assistance
- **Lead generation** through proactive service recommendations
- **Customer retention** via improved support experience
- **Support ticket reduction** by handling common queries automatically

## Chat Session Management

The workflow automatically manages chat sessions with the following features:

- **Unique Session IDs** for each customer conversation
- **Automatic customer information capture** (name and email)
- **Conversation history tracking** with chronological message storage
- **Session persistence** across multiple interactions
- **Data export** to Google Sheets for analysis and follow-up

## Example Customer Interactions

The AI agent can handle various customer scenarios:

- **Hosting Plan Inquiries**: Detailed information about shared hosting plans, features, and pricing
- **Domain Services**: Domain availability checking, pricing, and registration guidance
- **Technical Support**: Feature explanations, setup guidance, and troubleshooting
- **Payment Information**: Accepted payment methods and transaction processes
- **General Support**: Company information, service offerings, and FAQ responses

This template transforms your web hosting business by providing instant, accurate customer support while maintaining the personal touch that customers expect from professional service providers. The AI agent becomes an extension of your support team, handling routine inquiries and allowing human agents to focus on complex technical issues.

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
