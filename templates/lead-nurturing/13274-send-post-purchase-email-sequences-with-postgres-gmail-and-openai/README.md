# 💬 Send post-purchase email sequences with Postgres, Gmail and OpenAI

> ⚡ **8 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works  
This workflow automates customer communication after an order is placed. It detects new orders, sends a confirmation email, waits until delivery is completed, and then follows up with AI-generated product tips. Finally, it sends AI-powered upsell recommendations after a defined delay. The workflow runs on a schedule and requires no manual handling.

## Step-by-step  
- **Step 1 — Order detection and confirmation**  
  - **Schedule Trigger** – Runs at a fixed interval to check for new orders.  
  - **Postgres – Execute a SQL query** – Fetches recently created orders from the database.  
  - **Gmail – Send message** – Sends an order confirmation email to the customer.  

- **Step 2 — Delivery status monitoring**  
  - **Wait** – Pauses the workflow until the expected delivery window.  
  - **Postgres – Select rows** – Checks the delivery status of the order.  
  - **If** – Verifies whether the product is marked as delivered.  
  - **Wait** – Delays one day and repeats the check if delivery is not completed.  

- **Step 3 — Product usage tips (AI)**  
  - **OpenAI – Message a model** – Generates short and practical usage tips for the product.  
  - **Code** – Formats the AI output into clean HTML bullet points.  
  - **Gmail – Send message** – Emails the usage tips to the customer.  

- **Step 4 — Upsell recommendations (AI)**  
  - **Wait** – Delays for two weeks after tips are sent.  
  - **OpenAI – Message a model** – Creates complementary product recommendations.  
  - **Code** – Formats the recommendations for email delivery.  
  - **Gmail – Send message** – Sends the upsell email to the customer.  

## Why use this?  
- Ensures timely and relevant customer communication  
- Prevents sending tips before the product is delivered  
- Improves onboarding with AI-generated usage guidance  
- Increases repeat purchases through smart upsell emails  
- Fully automated using database, email, and AI integrations

## 🔗 Nodes Used

Postgres, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
