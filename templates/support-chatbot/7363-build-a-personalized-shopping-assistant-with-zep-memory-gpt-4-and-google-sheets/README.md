# 💬 Build a personalized shopping assistant with Zep Memory, GPT-4 and Google Sheets

> ⚡ **1,453 views** · 💬 [Support Chatbots](../)

## Description

## ✅ What problem does this workflow solve?

Most e-commerce chatbots are transactional; they answer one question at a time and forget your context right after. This workflow changes that. It introduces a **smart, memory-enabled shopping assistant** that remembers user preferences, past orders, and previous queries to offer **deeply personalized, natural conversations**.

---

## ⚙️ What does this workflow do?

1. Accepts real-time chat messages from users.
2. Uses **Zep Memory** to store and recall personalized context.
3. Integrates with:
   - 🛒 Product Inventory
   - 📦 Order History
   - 📜 Return Policy
4. Answers complex queries based on historical context.
5. Provides:
   - Personalized product recommendations
   - Context-aware order lookups
   - Seamless return processing
   - Policy discussions with minimal user input

---

## 🧠 Why Context & Memory Matter

Traditional bots:
- ❌ Forget what the user said 2 messages ago
- ❌ Ask repetitive questions (name, order ID, etc.)
- ❌ Can’t personalize beyond basic filters

With **Zep-powered memory**, your bot:
- ✅ Remembers preferences (e.g., favorite categories, past questions)
- ✅ Builds persistent context across sessions
- ✅ Gives dynamic, user-specific replies (e.g., "You ordered this last week…")
- ✅ Offers a **frictionless support experience**

---

## 🔧 Setup Instructions

### 🧠 Zep Memory Setup
- Create a Zep instance and connect it via the **Zep Memory node**.
- It will automatically store user conversations and summarize facts.

### 💬 Chat Trigger
- Use the **"When chat message received"** trigger to initiate the conversation workflow.

### 🤖 AI Agent Configuration
- Connect:
  - **Chat Model** → OpenAI GPT-4 or GPT-3.5
  - **Memory** → Zep
  - **Tools**:
    - `Get_Orders` – Fetch user order history from Google Sheets
    - `Get_Inventory` – Recommend products based on stock and preferences
    - `Get_ReturnPolicy` – Answer policy-related questions

### 📄 Google Sheets
- Store orders, inventory, and return policies in structured sheets.
- Use `read` access nodes to fetch data dynamically during conversations.

---

## 🧠 How it Works – Step-by-Step

1. **Chat Trigger** – User sends a message.
2. **AI Agent (w/ Zep Memory)**:
   - Reads past interactions to build context.
   - Pulls memory facts (e.g., "User prefers men's sneakers").
3. **Uses External Tools**:
   - Looks up orders, return policies, or available products.
4. **Generates Personalized Response** using OpenAI.
5. **Reply Sent Back** to the user through chat.

---

## 🧩 What the Bot Can Do

- 🛍 Suggest products based on past browsing or purchase behavior.
- 📦 Check order status and history without requiring the user to provide order IDs.
- 📃 Explain return policies in detail, adapting answers based on context.
- 🤖 Engage in more human-like conversations across multiple sessions.

---

## 👤 Who can use this?

This is ideal for:
- 🛒 **E-commerce store owners**
- 🤖 **Product-focused AI startups**
- 📦 **Customer service teams**
- 🧠 **Developers building intelligent commerce bots**

If you're building a chatbot that goes beyond canned responses, this **memory-first shopping assistant** is the upgrade you need.

---

## 🛠 Customization Ideas

- Connect with Shopify, WooCommerce, or Notion instead of Google Sheets.
- Add payment processing or shipping tracking integrations.
- Customize the memory expiration or fact-summarization rules in Zep.
- Integrate with voice AI to make it work as a phone-based shopping assistant.

---

## 🚀 Ready to Launch?

Just connect:
- ✅ OpenAI Chat Model
- ✅ Zep Memory Engine
- ✅ Your Product/Order/Policy Sheets

And you’re ready to deliver **truly personalized shopping conversations**.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Zep, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
