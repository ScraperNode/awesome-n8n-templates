# 💬 Auto-reply to 'Where Is My Order?' Emails with Shopify, Gmail and OpenRouter AI

> ⚡ **197 views** · 💬 [Support Chatbots](../)

## Description

What This Workflow Does
Automatically handles customer support emails about Shopify orders using AI. When customers email questions like "Where is my order?" or "When will it arrive?", this workflow:

-  Receives the email via Gmail trigger
-  Classifies the email to identify order-related queries (WISmo - Where Is My Order)
-  Retrieves real-time order data from your Shopify store
-  Generates a friendly, personalized response using AI
-  Sends an automatic reply directly to the customer

Key Features

✅ Smart email classification (handles only order-related queries)
✅ Real-time Shopify order lookup
✅ Natural, empathetic AI responses
✅ Fully automated - no manual intervention needed
✅ Non-order emails are filtered out automatically

Setup Requirements
Estimated setup time: 20-30 minutes
You'll need:

Gmail account (for receiving/sending emails)
Shopify store with Admin API access
OpenRouter API key (for AI model)

Setup steps:

1. Gmail: Connect your Gmail account to the trigger node (watch this tutorial)
2. OpenRouter: Sign up at openrouter.ai and add your API key
3. Shopify: Create a custom app in your Shopify admin with read_orders permission
4. 
Detailed setup instructions are included in the workflow's sticky notes.
Use Cases

1. E-commerce stores with high email volume
2. Small businesses wanting to automate order inquiries
3. Shopify merchants looking to improve response times
4. Support teams needing 24/7 automated assistance
5. 
Notes

**Only responds to order-related emails automatically
Other emails are ignored (passed to "No Operation" node)
Customize the AI's tone and behavior in the Agent node's system message
Safe and secure - only reads order data, doesn't modify anything**

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Text Classifier, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
