# 💬 Wix chat auto-responder with OpenAI GPT and email fallback

> ⚡ **476 views** · 💬 [Support Chatbots](../)

## Description

# Wix Chat Auto-Responder with OpenAI GPT and Email Fallback

This template connects Wix Chat with OpenAI via n8n to automate intelligent customer responses on your website only when no human has responded recently. It uses smart throttling, checks for member vs. anonymous visitors, pulls chat history, and optionally alerts support staff via email if AI shouldn't reply.

Perfect for solopreneurs, agencies, or customer support teams looking to auto-handle conversations while maintaining a fallback system.

## **Key Features**

- 🔌 **Connects Wix Chat API to n8n seamlessly**
- 🧠 **Uses GPT-4 (via OpenAI) to auto-generate replies**
- 🧍‍♂️ **Detects member vs. guest via webhook payload**
- 📬 **Optional email alert to support staff if AI should not reply**
- ⏱️ **Only responds if a human hasn't answered in the past 12 hours**
- ✂️ **Splits long AI messages into chunks to fit Wix API constraints**
- 🧱 **Modular & customizable—adapt for CRM, Slack, SMS, etc.**

## **Requirements**

- **Published Wix site with Wix Inbox enabled**
- **Wix Developer App credentials** (Client ID, Secret, Instance ID)
- **OpenAI API Key**
- **Active n8n instance** (self-hosted or cloud)
- **Working SMTP credentials** (for fallback email alert)

## **Setup Instructions**

### **1. Import the Workflow**

Download and import the `.json` file into your n8n instance. All nodes should appear in the visual editor.

### **2. Rename Key Nodes (Recommended for Clarity)**

Rename the following nodes for easier maintenance:
- `If` → **Check Member vs Visitor**
- `Execute Workflow` → **Generate OAuth Token**
- `Send Email` → **Alert Technician via Email**

### **3. Configure OAuth for Wix API**

In the node `HTTP Request1`, replace the placeholder values:
```json
"client_id": "YOUR_WIX_APP_ID",
"client_secret": "YOUR_WIX_APP_SECRET",
"instance_id": "YOUR_WIX_INSTANCE_ID"
```

💡 You may move this to a separate workflow and call it using `Execute Workflow`.

### **4. Set Up the Webhook in Wix**

1. Copy the Webhook URL from the `Webhook` node.
2. Go to your Wix dashboard:
   - Navigate to: `Settings &gt; Automations &gt; Create New`
   - Trigger: **"When someone sends a message via chat"**
   - Action: **"Send a Webhook"**
3. Paste the n8n Webhook URL in the configuration.

### **5. Add Your OpenAI API Key**

Open both `OpenAI Chat Model1` and `OpenAI Chat Model2` nodes:
- Add your OpenAI credentials.
- Adjust the model (e.g., GPT-4 or GPT-4o) and temperature as needed.

### **6. Customize Response Logic (Optional)**

In the `Code` node labeled **Response Throttle**, modify:
```js
const allowChat = true;
const allowEmail = false;
const humanResponseTimeWindow = 43200000; // 12 hours in ms
```

Change values to:
- Disable chat or email
- Modify the delay window before AI is allowed to respond

### **7. Set Up Email Fallback (Optional)**

If human support is required, the workflow sends an email:
- Add SMTP credentials in the `Send Email` node
- Customize the message, or replace the node with Slack, webhook, or SMS alert

### **8. Test**

1. Open your Wix site in an incognito browser tab.
2. Use the chat and monitor the bot's response.
3. Check `Executions` in n8n to debug or verify the flow.

## **How to Customize**

- **Trigger follow-up actions** (e.g., Zapier, CRM sync) after AI response
- **Customize GPT prompt** via `AI Agent` nodes
- **Prevent replies by channel** (e.g., don’t reply via email)
- **Add filters** for keywords, lead scoring, or VIP contacts with `If` or `Code` nodes

## **Includes**

- ✅ **1 Workflow JSON file**
- 🔐 **OAuth2 logic** (can be modularized into a separate workflow)
- 📝 **Sticky notes and comments** to guide usage
- ⚙️ **Production-ready, extensible logic for any support stack**

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
