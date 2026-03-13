# 💬 Auto-respond to Instagram, Facebook & WhatsApp with Llama 3.2

> ⚡ **7,187 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This automated n8n workflow enables AI-powered responses across multiple social media platforms, including Instagram DMs, Facebook messages, and WhatsApp chats using Meta's APIs. The system provides intelligent customer support, lead generation, and smart engagement at scale through AI-driven conversation management and automated response routing.

## **Good to Know**

* Supports multi-platform messaging across Instagram, Facebook, and WhatsApp
* Uses AI Travel Agent and Ollama Chat Model for intelligent response generation
* Includes platform memory for maintaining conversation context and history
* Automatic message processing and routing based on platform and content type
* Real-time webhook integration for instant message detection and response

## **How It Works**

* **WhatsApp Trigger** - Monitors incoming WhatsApp messages and initiates automated response workflow
* **Instagram Webhook** - Captures Instagram DM notifications and processes them for AI analysis
* **Facebook Webhook** - Detects Facebook Messenger interactions and routes them through the system
* **Message Processor** - Analyzes incoming messages from all platforms and prepares them for AI processing
* **AI Travel Agent** - Processes messages using intelligent AI model to generate contextually appropriate responses
* **Ollama Chat Model** - Provides advanced language processing for complex conversation scenarios
* **Platform Memory** - Maintains conversation history and context across multiple interactions for personalized responses
* **Response Router** - Determines optimal response strategy and routes messages to appropriate sending mechanisms
* **Instagram Sender** - Delivers AI-generated responses back to Instagram DM conversations
* **Facebook Sender** - Sends automated replies through Facebook Messenger API
* **Send Message (WhatsApp)** - Delivers personalized responses to WhatsApp chat conversations

## **How to Use**

* Import workflow into n8n
* Configure Meta's Instagram Graph API, Facebook Messenger API, and WhatsApp Business Cloud API
* Set up approved Meta Developer App with required permissions
* Configure webhook endpoints for real-time message detection
* Set up Ollama Chat Model for AI response generation
* Test with sample messages across all three platforms
* Monitor response accuracy and adjust AI parameters as needed

## **Requirements**

* Access to Meta's Instagram Graph API, Facebook Messenger API, and WhatsApp Business Cloud API
* Approved Meta Developer App
* Webhook setup and persistent token management for real-time messaging
* Ollama Chat Model integration
* AI Travel Agent configuration

## **Customizing This Workflow**

* Modify AI prompts for different business contexts (customer service, sales, support)
* Adjust response routing logic based on message content or user behavior
* Configure platform-specific message templates and formatting
* Set up custom memory storage for enhanced conversation tracking
* Integrate additional AI models for specialized response scenarios
* Add message filtering and content moderation capabilities

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud, AI Agent, Ollama Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
