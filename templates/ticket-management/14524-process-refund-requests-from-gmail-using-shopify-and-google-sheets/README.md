# 🎫 Process refund requests from Gmail using Shopify and Google Sheets

> ⚡ **122 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works  
This workflow monitors incoming Gmail messages for refund requests and uses AI to extract the order ID and reason. It then retrieves order details from Shopify to evaluate refund eligibility. Based on the order status, it automatically approves or routes the request for manual review. Customers and internal teams are notified accordingly, and all actions are logged in Google Sheets.

## Step-by-step  

- **Capture refund requests from email**  
  - **Gmail Trigger** – Detects unread emails with “Refund Request” in the subject.  
  - **AI Agent2** – Extracts order ID and reason using AI. 
    - **Groq Chat Model** – Provides the language model used by the AI agent.   
  - **Code in JavaScript** – Converts AI output into structured JSON.  


- **Fetch order details from Shopify**  
  - **Get an order** – Retrieves order information using the extracted order ID.  

- **Evaluate refund eligibility**  
  - **If** – Checks whether the order status is “Delivered” to allow auto-approval.  

- **Handle responses and logging**  
  - **Send a message to customer** – Sends approval confirmation if eligible.  
  - **Send a message to the team** – Notifies team for manual review cases.  
  - **Send a message to customer for "Pending" Status** – Updates customer about manual review.  
  - **Logs to Sheet** – Records all refund actions and details in Google Sheets.  

## Why use this?  

- Automates repetitive refund handling tasks and reduces workload  
- Improves customer experience with faster response times  
- Ensures consistent decision-making based on order status  
- Keeps a centralized log for auditing and reporting  
- Easily extendable with additional validation rules or integrations

## 🔗 Nodes Used

Google Sheets, Shopify, Gmail, Gmail Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
