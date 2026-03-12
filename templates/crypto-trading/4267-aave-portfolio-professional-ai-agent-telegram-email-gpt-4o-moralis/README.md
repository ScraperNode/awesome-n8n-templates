# 📈 AAVE portfolio professional AI agent | Telegram + Email + GPT-4o + Moralis

> ⚡ **790 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

A next-generation **AI-powered DeFi health monitor** that tracks wallet positions across **Aave V3** using GPT-4o and LangChain. It delivers **human-readable reports** via **Telegram and Gmail**, triggered on schedule or manually. Built for professionals monitoring **multiple DeFi wallets**.

---

## 🧩 System Components

| Component                         | Role                                                          |
| --------------------------------- | ------------------------------------------------------------- |
| ✅ Scheduler                       | Triggers the workflow periodically                            |
| ✅ Google Sheets Wallet Loader     | Loads all monitored wallet addresses                          |
| ✅ Set Variables                   | Injects dynamic wallet + date                                 |
| ✅ AAVE Portfolio AI Agent         | GPT-4o + LangChain AI that generates human-readable summaries |
| ✅ Moralis API Nodes (3)           | Collect Aave V3 supply/borrow/collateral data                 |
| ✅ OpenAI Chat Model (gpt-4o-mini) | Interprets on-chain data and explains it                      |
| ✅ Telegram Delivery               | Sends summary to Telegram chat                                |
| ✅ Gmail Email Sender              | Sends full HTML report to email                               |
| ✅ HTML Formatter                  | Beautifies AI output into email structure                     |

---

## ⚙️ How It Works

1. Scheduled or manual trigger
2. Pulls wallet addresses from Google Sheets
3. For each wallet:

   * Pulls Aave data from Moralis
   * GPT-4o AI generates report
   * Sends summary to Telegram
   * Sends full HTML report via Gmail

---

## 🛠 Installation Steps

### 1. **Import the Workflow**

* Upload `AAVE_Portfolio_Professional_AI_Agent.json` to your n8n instance.

### 2. **Connect These Credentials**

| Service  | Required Credential Type     |
| -------- | ---------------------------- |
| Moralis  | HTTP Header Auth (X-API-Key) |
| OpenAI   | GPT-4o via OpenAI API Key    |
| Telegram | Telegram Bot API Token       |
| Gmail    | Gmail OAuth2 Credential      |

### 3. **Create Google Sheet**

* Column name must be: `wallet_address`
* Add wallet addresses you want monitored

---

## 📬 Output Format

### Telegram Message Example

```
📊 Aave DeFi Health Report  
Wallet: 0xABC...123  
Date: 2025-05-21

▪️ Pool: Aave Ethereum USDC  
• Supply: $10,040  
• Borrowed: $5,500  
• Health Factor: 3.43  
• Liquidation Risk: No  
```

### Email Report

* Full HTML + plain text versions
* Auto-generated date + styled per wallet
* Includes notes and threshold warnings

---

## 🧠 Smart Features

* GPT-4o generates clear human summaries
* Monitors multiple wallets in one run
* Flags liquidation risk dynamically
* Logs daily performance snapshots

---

## 💡 Customization Ideas

* Add Telegram slash command `/aave &lt;wallet&gt;`
* Expand to monitor **Compound**, **Lido**, or **Uniswap**
* Export to Notion, Slack, or Data Studio

---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**

Architecture, prompts, and report formatting are **intellectual property protected**.
**No unauthorized rebranding, redistribution, or resale permitted.**

🔗 For support or licensing inquiries: [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)

---

🚀 **Track all your Aave DeFi positions using AI—delivered via Telegram + Gmail.**
**Perfect for funds, traders, and DeFi power users.**

---

### 🎥 Watch the Live Demo:

[![AAVE Portfolio AI Agent Demo](https://img.youtube.com/vi/teLNnkoGnJI/maxresdefault.jpg)](https://youtu.be/teLNnkoGnJI)

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
