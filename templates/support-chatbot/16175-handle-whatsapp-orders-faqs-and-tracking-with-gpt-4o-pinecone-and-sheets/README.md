# 💬 Handle WhatsApp orders, FAQs, and tracking with GPT-4o, Pinecone, and Sheets

> ⚡ **575 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow builds a WhatsApp business assistant that uses OpenAI to classify incoming messages and route them to FAQ answers via Pinecone RAG, order placement and inventory updates in Google Sheets, order-status lookups, or Slack escalation for human support, with a Google Drive-to-Pinecone knowledge sync.

## How it works
1. Triggers when a new WhatsApp message is received and extracts the sender phone number, message text, and a timestamp.
2. Uses OpenAI (GPT-4o) to classify the message intent as FAQ, ORDER, TRACK_ORDER, or HUMAN_SUPPORT and routes the request accordingly.
3. For FAQ requests, retrieves relevant context from a Pinecone vector index and uses OpenAI to draft a short WhatsApp-style answer, then replies via WhatsApp.
4. For ORDER requests, uses OpenAI to extract product and quantity, matches the request semantically against a Google Sheets product catalog, and validates the matched product.
5. If the product is found and stock is sufficient, appends a new order row to a Google Sheets Orders sheet, updates stock in the Products sheet, and sends an order confirmation via WhatsApp.
6. If the product is not found or stock is insufficient, sends an error/out-of-stock message via WhatsApp.
7. For TRACK_ORDER requests, uses OpenAI to extract the order ID, looks up the order in Google Sheets, and replies with the current status via WhatsApp.
8. For HUMAN_SUPPORT requests, posts the customer message details to a Slack channel and sends an acknowledgement back to the customer on WhatsApp.

## Setup
1. Configure WhatsApp Cloud API credentials in n8n and ensure your WhatsApp app is set to send message webhooks to the workflow trigger URL.
2. Add OpenAI API credentials for intent classification, order extraction, semantic matching, order ID extraction, and FAQ response generation.
3. Set up Google Sheets OAuth credentials and update the spreadsheet/document ID and sheet tabs for Products and Orders to match your own schema (including product_id, product_name, stock, and order_id fields).
4. Create a Pinecone index (and namespace) compatible with OpenAI embeddings and add Pinecone API credentials, then populate it with your knowledge base content.
5. Add Google Drive OAuth credentials and select the knowledge base file to watch so updates are downloaded, chunked, embedded, and stored in Pinecone.
6. Add Slack API credentials and choose the target channel ID where human support requests should be posted.

## Additional info
## Use Case Examples

### 1. Ecommerce WhatsApp Store

Customers can:
- Ask product questions
- Place orders
- Track deliveries

### 2. Retail Product Inquiry Bot

Customers can:
- Check stock
- Ask pricing
- Get product information

### 3. AI Customer Support Assistant

Businesses can automate:
- FAQs
- Support requests
- Escalations

### 4. WhatsApp Order Management System

Businesses can:
- Receive orders
- Update inventory
- Manage fulfillment

### 5. AI-Powered Knowledge Assistant

Businesses can provide:
- Policy answers
- Business information
- Service details

You can use and customize this workflow for many more use cases depending on business requirements.

## Need Help?

If you need help with:

- Workflow setup
- Customization
- API integration
- AI prompt engineering
- Pinecone setup
- WhatsApp Cloud API
- Custom business automation
- Marketplace-ready workflow development
- Advanced AI agent workflows

You can contact [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** for professional assistance.

WeblineIndia can help you:

- Customize this workflow for your business
- Add advanced AI features
- Integrate ERP/CRM systems
- Build enterprise-grade automations
- Create scalable AI business assistants
- Develop custom n8n workflows

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Google Drive Trigger, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
