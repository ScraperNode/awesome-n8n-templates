# 💬 AI Restaurant Virtual Waiter Chatbot 🤖🍕 for WhatsApp & Website

> ⚡ **886 views** · 💬 [Support Chatbots](../)

## Description

This workflow implements a **WhatsApp-based virtual restaurant assistant** that automates customer interaction from the first message to post-dining follow-up.

The system can receive messages either from **WhatsApp or a chatbot interface**, normalize the input, and process it through **AI guardrails** to ensure safe and relevant communication. 

---

### Key Advantages

#### 1. ✅ End-to-End Automation

The workflow fully automates the customer journey:

* Message reception
* Menu delivery
* Customer data collection
* AI conversation
* Review request

No manual intervention is required.

#### 2. ✅ Omnichannel Interaction

It works both with:

* WhatsApp (real users)
* Chat interface (for testing or website chatbot)

This makes it flexible and easy to integrate into different touchpoints.

#### 3. ✅ AI-Powered Customer Service

The **virtual waiter agent**:

* Answers questions about dishes, ingredients, prices, allergens
* Provides recommendations
* Uses real-time API data (no hallucinations allowed by design)


#### 4. ✅ Built-in Safety (Guardrails)

The workflow includes **AI guardrails** to:

* Detect jailbreak attempts
* Block irrelevant or unsafe requests
* Ensure responses comply with predefined policies

#### 5. ✅ Data Collection & CRM Integration

Customer interactions are stored automatically in **Google Sheets**, enabling:

* Basic CRM functionality
* Customer tracking
* Future marketing actions

#### 6. ✅ Personalized Experience

Using session-based memory:

* The system remembers recent interactions
* Provides more contextual and coherent responses

#### 7. ✅ Automated Marketing & Retention

The delayed follow-up:

* Encourages customers to leave reviews
* Improves online reputation
* Increases customer engagement after the visit

#### 8. ✅ Scalable & Modular Architecture

The workflow is built with reusable components:

* AI agent
* API tools
* Messaging nodes

This makes it easy to:

* Extend (e.g., reservations, payments)
* Adapt to different restaurants

---

### How it works

This workflow automates a restaurant assistant that responds to customers via both **WhatsApp** and a **chat widget** on a website. When a customer sends a message, the system checks if it's a menu request or a general query.

**WhatsApp messages** first go through a switch node that separates text from unsupported formats. If the message is text, it is normalized and passed to a guardrails node that detects jailbreak attempts. If a jailbreak is detected, a fallback message is sent. If safe, the system checks whether the user asked for the menu.

If the user asks for the menu, the workflow saves the client’s phone number and date to a Google Sheet, then sends a demo menu link via both WhatsApp and the chat interface. After a short wait (1 minute for chat, 2 hours for WhatsApp), the system sends a follow-up message asking for a Google review.

If the user asks something else, the request goes to a virtual waiter agent. The agent uses a Gemini language model, a memory buffer to keep conversation context, and two tools: a **calculator** and an **HTTP Request Tool** that fetches the restaurant menu from a ForkMenu API. The agent answers strictly based on the retrieved menu data — it never invents information. The response is then sent back to the customer via WhatsApp and the chat node.

---

### Set up steps

1. **Add credentials**  
   - **WhatsApp OAuth account** (for WhatsApp Trigger)  
   - **WhatsApp account** (for sending messages)  
   - **Google Gemini (PaLM) account** (for the language models)  
   - **Google Sheets account** (to store customer data)

2. **Configure WhatsApp nodes**  
   - Update the `phoneNumberId` in all WhatsApp send nodes 
   - Ensure the **WhatsApp Trigger** webhook is correctly connected to your Meta Business account.

3. **Set up Google Sheets**  
   - [Clone this Sheet](https://docs.google.com/spreadsheets/d/1Pzs_xlK6drjIhHnI7S1i2amLgT15dzuzkTKLbKcGpE4/edit?usp=sharing)  
   - Make sure the sheet contains columns `CLIENT` and `DATE`.

4. **Configure the menu API**  
   - The HTTP Request Tool calls `https://demo.forkmenu.com/api/menu/piatti/2?key=...`.  
   - Replace the key and URL with your actual restaurant’s ForkMenu API credentials.

5. **Customize messages**  
   - Edit the text in all **Send message** and **Chat** nodes (menu link, review request, jailbreak response, unsupported format message).

6. **Adjust timers**  
   - The review request is sent after **2 hours** for WhatsApp and **1 minute** for the chat widget (for testing). Modify the Wait nodes as needed.

7. **Activate the workflow**  
   - Toggle `"active": true` in the workflow JSON or click "Active" in the n8n editor.

8. **Set up chat widget**  
   - The `When chat message received` node requires an n8n chat trigger. Embed the chat widget on your website using the n8n chat embed code.

---


👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, AI Agent, Simple Memory, Calculator, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
