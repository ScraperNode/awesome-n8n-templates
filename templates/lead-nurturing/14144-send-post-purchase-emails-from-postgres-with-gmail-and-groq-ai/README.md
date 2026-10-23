# 💬 Send post-purchase emails from Postgres with Gmail and Groq AI

> ⚡ **35 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works  
This workflow monitors new orders from a Postgres database and sends a confirmation email instantly. It then waits until the expected delivery time and continuously checks the delivery status. Once delivered, it uses AI to generate product usage tips and emails them to the customer. After two weeks, it sends personalized complementary product recommendations to drive repeat purchases.  

## Step-by-step  

- **Trigger new orders from database**  
  - **Schedule Trigger** – Runs every 2 minutes to check for new orders.  
  - **Execute a SQL query** – Fetches recently created orders from Postgres.  
  - **Order Placed Ack.** – Sends an order confirmation email via Gmail.  

- **Track delivery status dynamically**  
  - **Wait until product get deliver** – Pauses workflow until estimated delivery time.  
  - **Select rows from a table** – Retrieves latest order status.  
  - **If** – Checks whether the order is delivered.  
  - **Wait for a day** – Rechecks daily until delivery is confirmed.  

- **Send AI-powered product usage tips**  
  - **Get Product Usage Tips** – Uses AI agent to generate helpful tips.  
  - **Groq Chat Model** – Provides LLM capability for content generation.  
  - **Format AI response** – Converts AI output into clean HTML list format.  
  - **Send Tips to User** – Emails tips to the customer.  

- **Upsell complementary products after delay**  
  - **Wait for 2 weeks** – Delays follow-up communication.  
  - **Get Complementary Products** – Generates related product suggestions.  
  - **Groq Chat Model1** – Powers recommendation generation.  
  - **Code in JavaScript** – Formats recommendations into HTML.  
  - **Send Tips to User1** – Sends upsell email with recommendations.  

## Why use this?  

- Automates full post-purchase lifecycle without manual intervention  
- Improves customer experience with timely and helpful communication  
- Increases repeat purchases through personalized upsell emails  
- Reduces support queries by proactively sending usage guidance  
- Scales easily for growing eCommerce operations

## 🔗 Nodes Used

Postgres, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
