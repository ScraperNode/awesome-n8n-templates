# 🤝 Shopify VIP alerts: AI summary & Slack notification for big orders

> ⚡ **1,056 views** · 🤝 [CRM & Sales Operations](../)

## Description

# 🧨 VIP Radar: Instantly Spot & Summarize High-Value Shopify Orders with AI + Slack Alerts

Automatically detect when a new Shopify order exceeds $200, fetch the customer’s purchase history, generate an AI-powered summary, and alert your team in Slack—so no VIP goes unnoticed.

---

## 🛠️ Workflow Overview

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Trigger**            | Shopify “New Order” webhook                                                 |
| **Conditional Check**  | Filters for orders &gt; $200                                                   |
| **Data Enrichment**    | Pulls full order history for the customer from Shopify                      |
| **AI Summary**         | Uses OpenAI to summarize buying behavior                                    |
| **Notification**       | Sends detailed alert to Slack with name, order total, and customer insights |
| **Fallback**           | Ignores low-value orders and terminates flow                                |

---

## 📘 What This Workflow Does

This automation monitors your Shopify store and reacts to any **high-value order** (over $200). When triggered:

1. It fetches all **past orders** of that customer,
2. Summarizes the history using **OpenAI**,
3. Sends a full alert with context to your **Slack** channel.

No more guessing who’s worth a closer look. Your team gets instant insights, and your VIPs get the attention they deserve.

---

## 🧩 Node-by-Node Breakdown

### 🔔 1. Trigger: New Shopify Order
- **Type**: `Shopify Trigger`
- **Event**: `orders/create`
- **Purpose**: Starts workflow on new order
- **Pulls**: Order total, customer ID, name, etc.

### 🔣 2. Set: Convert Order Total to Number
- Ensures the `total_price` is treated as a number for comparison.

### ❓ 3. If: Is Order &gt; $200?
- **Condition**: `$json.total_price &gt; 200`
- **Yes** → Continue
- **No** → End workflow

### 🔗 4. HTTP: Fetch Customer Order History
- Uses the **Shopify Admin API** to retrieve all orders from this customer.
- Requires your **Shopify access token**.

### 🧾 5. Set: Convert Orders Array to String
- Formats the order data so it's prompt-friendly for OpenAI.

### 🧠 6. LangChain Agent: Summarize Order History
- **Prompt**: `"Summarize the customer's order history for Slack. Here is their order data: {{ $json.orders }}"`
- **Model**: GPT-4o Mini (customizable)

### 📨 7. Slack: Send VIP Alert
- Sends a rich message to a **Slack channel**.
- Includes:
  - Customer name
  - Order value
  - Summary of past behavior

### 🧱 8. No-Op (Optional)
- Used to safely end workflow if the order is not high-value.

---

## 🔧 How to Customize

| What                     | How                                                                 |
|--------------------------|----------------------------------------------------------------------|
| Order threshold          | Change `200` in the `If` node                                       |
| Slack channel            | Update `channelId` in the Slack node                                |
| AI prompt style          | Edit text in LangChain Agent node                                   |
| Shopify auth token       | Replace `shpat_abc123xyz...` with your actual private token         |

---

## 🚀 Setup Instructions

1. Open **n8n editor**.
2. Go to **Workflows → Import → Paste JSON**.
3. Paste this workflow JSON.
4. Replace your **Shopify token** and **Slack credentials**.
5. Save and activate.
6. Place a test order in Shopify to watch it work.

---

## 💡 Real-World Use Cases

- 🎯 Notify sales team when a potential VIP buys
- 🛎️ Prep support reps with customer history
- 📈 Detect repeat buyers and upsell opportunities

---

## 🔗 Resources & Support

- 👨‍💻 Creator: [Yaron Been](https://www.linkedin.com/in/yaronbeen/)
- 📺 YouTube: [NoFluff with Yaron Been](https://www.youtube.com/@YaronBeen/videos)
- 🌐 Website: [https://nofluff.online](https://nofluff.online)
- 📩 Contact: `Yaron@nofluff.online`

---

## 🏷️ Tags

`#shopify`, `#openai`, `#slack`, `#vip-customers`, `#automation`, `#n8n`, `#workflow`, `#ecommerce`, `#customer-insights`, `#ai-summaries`, `#gpt4o`

---

## 🔗 Nodes Used

HTTP Request, Slack, Shopify Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
