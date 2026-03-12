# 💬 Create a pizza ordering chatbot with GPT-3.5 - Menu, orders & status tracking

> ⚡ **7,806 views** · 💬 [Support Chatbots](../)

## Description

# Pizza Ordering Chatbot with OpenAI - Menu, Orders & Status Tracking

## Introduction
This workflow template is designed to automate order processing for a pizza store using OpenAI and n8n. The chatbot acts as a virtual assistant to handle customer inquiries related to menu details, order placement, and order status tracking.

## Features
The chatbot provides an interactive experience for customers by performing the following functions:

1. **Menu Inquiry**: When a customer asks about the menu, the chatbot responds with a list of available pizzas, prices, and additional options.
2. **Order Placement**: If a customer places an order, the chatbot confirms order details, provides a summary, informs the customer that the order is being processed, and expresses gratitude.
3. **Order Status Tracking**: If a customer asks about their order status, the chatbot retrieves details such as order date, pizza type, and quantity, providing real-time updates.

## Prerequisites
Before setting up the workflow, ensure you have the following:

- **OpenAI account** ([Sign up here](https://platform.openai.com/signup/))
- **OpenAI API key** to interact with GPT-3.5
- **n8n instance** running locally or on a server ([Installation Guide](https://docs.n8n.io/getting-started/installation/))

## Configuration Steps

### Step 1: Set Up OpenAI API Credentials
1. Log in to [OpenAI's website](https://platform.openai.com/).
2. Navigate to **API Keys** under your account settings.
3. Click **Create API Key** and copy the key for later use.

### Step 2: Configure OpenAI Node in n8n
1. Open **n8n** and create a new workflow.
2. Click **Add Node** and search for **OpenAI**.
3. Select **OpenAI** from the list.
4. In the OpenAI node settings, click **"Create New"** under the **Credentials** section.
5. Enter a name for the credentials (e.g., "PizzaBot OpenAI Key").
6. Paste your **API Key** into the field.
7. Click **Save**.

### Step 3: Set Up the Chatbot Logic
1. Connect the AI Agent Builder Node to the **OpenAI Node** and **HTTP Request Node**.
2. Configure the **OpenAI Node** with the following settings:
   - **Model**: `gpt-3.5-turbo`
   - **Prompt**: Provide dynamic text based on customer inquiries (e.g., "List available pizzas," "Place an order for Margherita pizza," "Check my order status").
   - **Temperature**: Adjust based on desired creativity (recommended: `0.7`).
   - **Max Tokens**: Limit response length (recommended: `150`).
3. Add multiple **HTTP Request Node**:
   - **For Get Products**: Fetch stored menu data and return details.
   - **For Order Product**: Capture order details, generate an order ID, and confirm with the customer.
   - **For Get Order**: Retrieve order details based on the order ID and display progress.

### Step 4: Testing and Deployment
1. Click **Execute Workflow** to test the chatbot.
2. Open the **Chat Message** node, then copy the chat URL to access the chatbot in your browser.
3. Interact with the chatbot by asking different queries (e.g., "What pizzas do you have?" or "I want to order a Pepperoni pizza").
4. Verify responses and adjust prompts or configurations as needed.
5. Deploy the workflow and integrate it with a messaging platform (e.g., Telegram, WhatsApp, or a website chatbot).

## Conclusion
This n8n workflow enables a fully functional pizza ordering chatbot using OpenAI's GPT-3.5. Customers can view menus, place orders, and track their order status efficiently. You can further customize the chatbot by refining prompts, adding new features, or integrating with external databases for order management.

🚀 Happy automating!

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Calculator, Chat Trigger, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
