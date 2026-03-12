# 💬 Automated product inquiry responder with GPT-4 and Google Sheets

> ⚡ **2,131 views** · 💬 [Support Chatbots](../)

## Description

## **AI-Powered Product Assistant for E-commerce**

Transform your online store customer service with an intelligent AI assistant that automatically processes customer inquiries, searches your product database, and provides personalized responses about product availability, pricing, and specifications. Perfect for shoe stores, fashion retailers, and any business with extensive product catalogs - this workflow eliminates manual customer service while increasing response speed and accuracy.

**How it works**
* Customer sends product inquiry via webhook (Instagram DM, website chat, or messaging app)
* AI extracts key product details (brand, model, size, color) from natural language text
* System searches your Google Sheets product database with smart filtering
* AI generates friendly, personalized response with availability, pricing, and stock information
* Automatic response sent back to customer with product details or alternatives

**Screenshots:**
- Customer inquiry: "Do you have Nike Air Max 40 size?"
- AI response: "Nike Air Max 90, size 40 - in stock 3 pieces, price 120$"

**Set up steps**
1. **Prepare your product database** - Create Google Sheets with columns: Brand, Model, Size, Color, Price, Quantity
2. **Configure AI settings** - Connect OpenAI API for natural language processing  
3. **Set up webhook endpoint** - Configure trigger for your messaging platform (Instagram, Telegram, website chat)
4. **Test with sample inquiries** - Verify AI correctly parses requests and finds products
5. **Deploy and monitor** - Launch your automated assistant and track performance

**Time investment:** 30-45 minutes setup, works immediately with any product catalog up to 1000+ items.

## 🔗 Nodes Used

Google Sheets, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
