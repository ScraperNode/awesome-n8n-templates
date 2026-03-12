# 💬 Create an AI shopping assistant on Telegram with GPT-4.1, voice recognition & Google Sheets

> ⚡ **326 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow is built for e-commerce businesses, retail store owners, and entrepreneurs who want to provide intelligent customer support and seamless order taking through Telegram. If you're tired of manually answering product questions, taking orders through scattered messages, and managing customer information across multiple platforms, this automation will revolutionize your sales process.

It transforms your Telegram bot into a smart AI shopping assistant that understands both text and voice messages, answers product questions with accurate information, and automatically records customer orders in Google Sheets—all while maintaining conversation context.

## How it works / What it does

This n8n automation creates a complete conversational commerce experience on Telegram using AI, voice transcription, and intelligent order management.

Here's a simple breakdown of how it works:

**Capture incoming messages** using the Telegram Trigger node, which monitors your Telegram bot for both text and voice messages from customers in real-time.

**Route messages intelligently** through the Switch node, which automatically detects whether the customer sent a text message or a voice note and routes it to the appropriate processing pipeline.

**Process voice messages** by downloading the voice file through the Telegram node and transcribing it to text using OpenAI's Whisper audio transcription technology.

**Extract message content** with the Set node, which captures the customer's text and chat ID for processing and conversation tracking.

**Generate intelligent responses** using an AI Agent powered by GPT-4.1-nano that acts as a friendly, professional support agent for your men's clothing store. The agent responds in the same language the customer uses and maintains conversation context through memory.

**Search your product catalog** with a Pinecone-powered RAG (Retrieval-Augmented Generation) system. The AI Agent queries your vector database using OpenAI embeddings to provide accurate prices, brand information, product details, and key features.

**Manage conversation memory** through the Simple Memory node with an 8-message context window, allowing the AI to remember customer preferences and maintain natural, flowing conversations across multiple messages.

**Take and record orders automatically** when customers provide all required information (Name, Phone Number, Address, and Product Category). The AI Agent uses the Google Sheets tool to append complete orders to your spreadsheet.

**Send responses back to customers** through the Telegram Response node, delivering helpful answers and order confirmations directly in the chat.

Once everything is set up, your Telegram bot operates 24/7 as an intelligent sales assistant that never misses a message or forgets an order.

## How to set up

Follow these steps to get your AI-powered Telegram shopping assistant running:

1. Import the JSON file into your n8n instance.

2. Create and configure your Telegram bot:
   - Talk to @BotFather on Telegram to create a new bot
   - Save the bot token you receive
   - Add the token to your Telegram API credentials in n8n

3. Add your API credentials:
   - Telegram API credentials for the bot
   - OpenAI API key for the AI Agent, embeddings, and voice transcription
   - Pinecone API credentials for vector storage
   - Google Sheets OAuth2 credentials for order recording

4. Set up your Pinecone vector database:
   - Create a Pinecone index named 
   - Create a namespace 
   - Upload your store data to the vector store

5. Configure your Google Sheet for orders:
   - Create a new Google Sheet or use an existing one
   - Set up columns: Name, Phone number, Address, Category
   - Update the Google Sheets node with your sheet's document ID

6. Customize the AI Agent's system message to match your brand voice, product categories, and support policies.

7. Test the workflow by sending both text and voice messages to your Telegram bot.

8. Activate the workflow to enable continuous operation.

9. Share your Telegram bot username with customers to start receiving inquiries.

## Requirements

Before running the workflow, make sure you have the following:

- An n8n account or instance (self-hosted or n8n Cloud)
- A Telegram bot created through @BotFather with an API token
- OpenAI API access for AI Agent, embeddings, and Whisper transcription (GPT-4.1-nano model)
- A Pinecone account with a configured vector database containing your product information
- A Google Sheets account for storing customer orders
- Your store knowledge base prepared and uploaded to Pinecone
- Basic understanding of how n8n workflows and nodes operate

## How to customize the workflow

This workflow is highly flexible and can be customized to fit your specific business needs. Here's how you can tailor it:

**Change the store knowledge base** by updating all references of your store in the AI Agent system message and node descriptions. Adapt it for whatever service your store is providing.

**Adjust order requirements** by modifying the AI Agent's system message to collect different customer information (e.g., email, delivery date, payment method) and updating the Google Sheets column mappings accordingly.

**Modify conversation memory length** in the Simple Memory node. The default is 8 messages, but you can increase or decrease this based on your typical customer conversation length.

**Add multilingual support** by enhancing the AI Agent's system message with specific language instructions or integrating translation nodes for automated language detection and response.

**Integrate payment processing** by adding nodes that generate payment links (Stripe, PayPal) when customers complete their orders, creating a full end-to-end shopping experience.

**Connect to your inventory system** by adding HTTP Request nodes or database connections that check product availability before confirming orders.

**Implement order notifications** by adding email or SMS nodes to notify your team immediately when a new order is recorded in Google Sheets.

**Add image recognition** by incorporating computer vision nodes that allow customers to send product photos and receive information about similar items in your catalog.

**Create automated follow-ups** by adding scheduled triggers that check Google Sheets for new orders and send confirmation or shipping update messages to customers.

**Enhance the RAG system** by creating multiple Pinecone namespaces for different product categories, seasonal collections, or promotional items, allowing the AI to provide more targeted responses.

**Add customer segmentation** by creating additional Google Sheets or database nodes that track customer purchase history, preferences, and interaction patterns for personalized marketing.

**Implement conversation analytics** by adding nodes that log conversation topics, common questions, and conversion rates to help you optimize your product descriptions and support responses.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
