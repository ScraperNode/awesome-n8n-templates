# 💬 Automate customer retention with AI risk prediction, Stripe coupons & personalized Gmail

> ⚡ **68 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Predict churn risk from customer data and send retention emails via OpenAI


## 👥 Who’s it for
This workflow is designed for **Customer Success Managers**, **Growth Teams**, and **SaaS Business Owners** who want to proactively reduce churn using AI. It automates the analysis of customer health and the delivery of personalized retention offers without manual intervention.


## 🚀 What it does
This template acts as an intelligent retention system that connects your data, AI, and communication channels.
1. **Aggregates Data:** Pulls customer profiles from your **CRM**, support ticket history via API, and product usage logs from **PostgreSQL**.
2. **Predicts Risk:** Uses **OpenAI** to analyze the combined data and calculate a "Churn Risk Score" for each customer.
3. **Automates Action:** For customers identified as high-risk (score &gt; 0.7):
    - Generates a unique, dynamic discount coupon via **Stripe**.
    - Drafts a highly personalized retention email using OpenAI.
    - Sends the email via **Gmail**.
4. **Tracks Effectiveness:** Logs all actions to **Google Sheets**. It also checks back (via **SendGrid** and CRM data) to track email opens and verify if the customer was retained after 30 days.


## ⚙️ How to set up
1. **Prepare Google Sheet:** Create a sheet with columns for `customer_id`, `risk_score`, `offer_type`, `email_status`, and `retention_result`.
2. **Configure Credentials:** Set up your credentials for OpenAI, Stripe, Gmail, Google Sheets, SendGrid, and PostgreSQL.
3. **API Endpoints:** Update the **HTTP Request** nodes to point to your specific CRM and Support tool APIs (replace the placeholder URLs).
4. **Customize Logic:**
    - In the **Postgres node**, adjust the SQL query to match your product's event table.
    - In the **Code node** (Offer Decision), define your rules for discounts (e.g., "Give 20% off if MRR &gt; $10k").
5. **Activate:** The workflow is set to run daily at 3:00 AM. Toggle the **Schedule Trigger** to `Active` when ready.


## 📦 Requirements
- **n8n** (v1.0 or later)
- **OpenAI** API Key
- **Google Workspace** (Gmail, Sheets)
- **Stripe** Account (for coupon generation)
- **SendGrid** Account (for email tracking)
- **PostgreSQL** (or similar database)
- Access to CRM and Support Tool APIs


## 🎨 How to customize the workflow
- **Adjust the AI Prompt:** Edit the **OpenAI node** system message to match your brand's tone of voice.
- **Change the Threshold:** Modify the **If node** to target customers with a risk score higher or lower than 0.7.
- **Internal Alerts:** Instead of emailing the customer directly, replace the **Gmail node** with a **Slack node** to notify your CSM team to reach out manually.
- **Swap Database:** If you use MySQL or Snowflake, simply replace the PostgreSQL node with the corresponding n8n node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
