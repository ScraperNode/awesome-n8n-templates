# ⚡ 💰 Financial AI agent Telegram and WhatsApp

> ⚡ **1,160 views** · ⚡ [Personal Productivity](../)

## Description

### 📌 About this workflow

Hi! I'm Bruno, and I'm here to help you automate your finances intelligently. This workflow has been carefully developed to transform the way you manage your money, using the power of artificial intelligence and the flexibility of n8n. With a focus on usability and innovation, this financial agent is the perfect solution for anyone seeking control and insights into their personal or business finances.

This ready-to-use workflow acts as a powerful AI financial assistant, capable of recording your transactions (income and expenses), categorizing them, and providing personalized advice and tips. It is designed to be highly extensible and adaptable to your needs, using cutting-edge technologies to ensure accuracy and efficiency.


### ⚙️ What this workflow does

*   **Intelligent Transaction Recording**: Automatically records your financial income and expenses, categorizing them efficiently.
*   **Personalized Financial Analysis**: Provides insights, advice, and financial tips based on your data, helping you make smarter decisions.
*   **Telegram Communication**: Interacts with you via Telegram, making financial management as simple as sending a message (can be adapted for WhatsApp, Instagram, etc.).
*   **Conversation Memory**: Maintains the context of your conversations, allowing for more fluid and personalized interactions.
*   **Balance Report Generation**: Generates detailed balance reports for specific periods, offering a clear overview of your financial health.
*   **Modular and Expandable Structure**: Easily adaptable and expandable to include new functionalities, such as expense analysis by category, budget alerts, and integration with other platforms.

### 🔧 Setup Instructions
This workflow requires n8n self-hosted (or n8n Cloud with custom credentials + community nodes enabled).

#### Create required databases
For the agent to function correctly, the following tables are required in the PostgreSQL database (Supabase):

*   `transactions`: To store details of each transaction (income/expense).
*   `balances`: To store consolidated balance per day and per user.
*   `memoria_chat`: To store conversation history for agent memory.

#### Credentials needed

*   **OpenAI API Key**: For chat model and embeddings.
*   **Supabase API Key and URL**: For database access.
*   **PostgreSQL Connection String**: For chat memory.
*   **Telegram API Token**: For Telegram Trigger and Telegram node.

#### Webhook
Set the webhook path to receive messages from your Telegram API provider (or other messaging platform).

#### Tool connections
Ensure the supporting workflows (`Financial | AI Agent | Register Tool` and `Financial | AI Agent | Balance Tool`) are also imported and connected correctly to the main workflow (`Financial | AI Agent`).


### 📎 Notes
This workflow uses LangChain agents, OpenAI GPT-4.1, Supabase, and PostgreSQL. It includes multiple "sticky notes" inside the workflow with detailed explanations.

Ideal for individuals, consultants, and developers looking for an intelligent and extensible AI chatbot experience for financial management.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
