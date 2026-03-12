# 📈 Automate Bitget spot trading with GPT-4o-mini AI agent via Telegram

> ⚡ **263 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

A professional-grade **AI trading orchestration system** for **Bitget Spot Market automation** via Telegram.

This agent integrates **Bitget REST APIs**, **authenticated order management**, and **real-time reasoning** with **GPT-4o-mini**, allowing direct Telegram-based execution of **spot and trigger orders** — all within your **self-hosted n8n environment**.


🎥 **Watch Tutorial:**
[![Click to Watch](https://img.youtube.com/vi/Y4D-xt130K8/hqdefault.jpg)](https://www.youtube.com/watch?v=Y4D-xt130K8)

---

## 🧩 **Required Workflows**

You must install and activate **all of the following workflows** for the system to function correctly:

| ✅ Workflow Name                   | 📌 Function Description                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bitget AI Trader Agent**        | Core orchestrator. Handles user Telegram commands, routes to correct sub-agents, and formats all responses.                                 |
| **Account and Wallet Agent Tool** | Retrieves Bitget account info, balances, and deposit addresses using authenticated endpoints `/api/v2/spot/account/*`.                      |
| **Spot Order Trading Agent Tool** | Places, cancels, and queries spot orders (`/trade/place-order`, `/cancel-order`, `/orderInfo`, `/unfilled-orders`).                         |
| **Trigger Order Agent Tool**      | Manages conditional “plan” (trigger) orders — place, modify, cancel, and list them (`/trade/place-plan-order`, `/modify-plan-order`, etc.). |
| **Webhook HTTP Request Nodes**    | Securely handle REST calls for each sub-agent via n8n webhooks. All endpoints authenticated using the Bitget Sign system.                   |

---

## ⚙️ **Installation Instructions**

### Step 1: Import Workflows

* Open your **n8n Editor UI**
* Import the `Bitget AI Trader Agent (Finished).json` file
* Ensure all sub-agents are visible in the canvas and linked properly

### Step 2: Set Credentials

* Configure your **Bitget API Key**, **Secret**, and **Passphrase** inside your n8n credentials
* Add your **OpenAI API Key** (recommended: GPT-4o-mini)
* Set **Telegram bot token** (from [@BotFather](https://t.me/BotFather))

### Step 3: Configure Webhook Endpoints

Make sure all downstream webhooks (e.g., `Get-Account-Information`, `Place-Order`, `Cancel-Order`, etc.) are accessible via HTTPS.
Each must use **Basic Auth** credentials named:
`Bitget Authentication for Webhooks`

### Step 4: Authorize Telegram Access

Replace the placeholder Telegram ID in:

```js
if ($input.first().json.message.from.id !== &lt;&lt;Replace&gt;&gt;) { ... }
```

with your **Telegram user ID**.
This ensures only you can issue trading commands.

### Step 5: Test & Deploy

Trigger the Telegram bot command (e.g. `/balance` or `/order`) to verify:

* Authenticated data fetch
* Correct REST routing
* Safe GPT-based reasoning
* Telegram delivery with formatted markdown

---

## 💬 **Telegram Output Examples**

```markdown
✅ BTCUSDT limit buy placed @ 23222.5, size 0.01 (orderId: 123456)

❌ Rejected: price tick invalid for BTCUSDT. Provide price with correct step.

💰 Balance Summary:
• USDT: 1250.34 (Available)
• BTC: 0.023 (In Trade)
```

---

## 🧩 **System Overview**

```
[Telegram Trigger]
→ [User Authentication]
→ [Bitget AI Trader Agent]
→ [Account/Wallet Tool] + [Spot Order Tool] + [Trigger Order Tool]
→ [Webhook Execution Layer]
→ [GPT-4o-mini Reasoning + Message Split Logic]
→ [Telegram Output]
```

---

## 🔒 **Safety & Compliance**

* All API calls use **Bitget Sign authentication**
* Orders cannot be spoofed or simulated
* No keys or signatures ever exposed in chat
* Strict input validation and confirmation per action

---

## 🧾 **Licensing & Attribution**

© 2025 **Treasurium Capital Limited Company**
All architecture, prompt structures, and Telegram formatting are IP-protected.
**No unauthorized resale, repackaging, or rebranding permitted.**

🔗 For support: [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)

## 🔗 Nodes Used

Edit Image, HTTP Request, Webhook, Telegram, Telegram Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
