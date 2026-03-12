# 🎫 Auto-respond to Gmail inquiries using OpenAI, Google Sheet & AI agent

> ⚡ **2,688 views** · 🎫 [Ticket Management & Triage](../)

## Description

## **Who is this for?**

This workflow is ideal for:

* Customer support teams looking to reduce manual response time
* SaaS companies that frequently receive product inquiries
* E-commerce stores with common customer questions about orders, shipping, and returns

## **What problem is this workflow solving?**

Manually responding to repetitive customer emails is inefficient, prone to inconsistency, and time-consuming. This workflow solves the issue by:

* Automatically replying to real customer inquiries 24/7
* Ensuring every response is consistent, friendly, and based on approved knowledge
* Preventing responses to non-inquiries like newsletters or confirmations
* Logging every interaction for traceability, analysis, and compliance

## **What this workflow does**

This AI-powered Gmail auto-responder intelligently handles inbound emails with the following steps:

1. **Monitors your Gmail inbox** for new incoming emails in real time
2. **Classifies each email** as either an “Inquiry” or “Not Inquiry” using GPT-4
3. **Gets context from a Google Sheets FAQ database**
   The context will be used to determine the most accurate and helpful response
4. **Generates a professional reply** only if it’s a valid inquiry (e.g., pricing, refund, product details)
5. **Builds a context-aware, helpful response** using verified knowledge only
6. **Sends the reply** to the original sender automatically
7. **Logs everything** to a Google Sheet — original email, AI response, timestamp, and email address

### Example Use Case:

An email comes in:
*"Hi, I want to know your pricing and refund policy."*

The workflow:

* Detects it’s an inquiry
* Finds the pricing and refund FAQs in your Google Sheet
* Sends back a professional response like:
  *"Hi! Thanks for reaching out. Our pricing starts at \$99/month. Refunds can be requested within 30 days of purchase. Let us know if you have more questions!"*
* Logs the interaction to your “Enquiry\_Log” tab

## **Setup**

1. **Copy the Google Sheet template** here:
   👉 [Gmail Auto-Responder – Google Sheet Template](https://docs.google.com/spreadsheets/d/1bZ7DTp_6-Qs6S7McyIrlMnuCvHbCrgUI-GBjz_eMpHc/edit?gid=419912118#gid=419912118)
   This contains:

   * A `FAQ_Context` tab (your knowledge base)
   * An `Enquiry_Log` tab (interaction logs)

2. **Connect your Gmail account** to the Gmail Trigger and Gmail Send nodes

3. **Add your OpenAI API key** in the classification and response generator nodes

4. **Link the Google Sheet** in both the FAQ lookup and logging nodes

5. **Test with a sample email** — try asking a pricing and refund question to see the complete process in action


## **How to customize this workflow to your needs**

* **Adjust tone or brand voice** in the AI prompt for a more casual or formal reply
* **Modify classification rules** if your use case includes more custom logic
* **Expand the FAQ database** to include new questions and answers
* **Add multilingual support** by customizing the AI prompt to detect and respond in different languages
* **Integrate CRM or ticketing systems** (like HubSpot, Zendesk, or Notion) to log or escalate unanswered queries

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
