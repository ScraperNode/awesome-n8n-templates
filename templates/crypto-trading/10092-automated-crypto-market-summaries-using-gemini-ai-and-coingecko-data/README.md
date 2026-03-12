# 📈 Automated crypto market summaries using Gemini AI and CoinGecko data

> ⚡ **348 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## **Try It Out!**

The **AI Investment Research Assistant (Discord Summary Bot)** transforms your **Discord server** into a professional-grade **AI-driven crypto intelligence center**.
Running automatically **every morning**, it gathers **real-time news, sentiment, and market data** from multiple trusted sources — including **NewsAPI**, **Crypto Compare**, and **CoinGecko** — covering the most influential digital assets like **BTC, ETH, SOL, BNB, and ADA**.

An **AI Research Analyst Agent** then processes this data using advanced reasoning and summarization to deliver a structured **Market Intelligence Briefing**.
Each report distills **key market events, sentiment shifts, price movements, and analyst-grade insights**, all formatted into a visually clean and actionable message that posts directly to your **Discord channel**.

Whether you’re a **fund manager, community owner, or analyst**, this workflow helps you stay informed about market drivers — without manually browsing dozens of news sites or data dashboards.

---

### **Detailed Use Cases**

* **Crypto Research Teams:** Automate daily market briefings across key assets.
* **Investment Communities:** Provide daily insights and sentiment overviews directly on Discord.
* **Trading Desks:** Quickly review summarized market shifts and performance leaders.
* **DAOs or Fund Analysts:** Centralize institutional-style crypto intelligence into your server.

---

### **How It Works**

1. **Daily Trigger (Schedule Node)** – Activates each morning to begin data collection.
2. **News Aggregation Layer** – Uses **NewsAPI** (and optionally **CryptoPanic** or **GDELT**) to fetch the latest crypto headlines and event coverage.
3. **Market & Sentiment Fetch** – Collects market metrics via **CoinGecko** or **Crypto Compare**, including:

   * 24-hour price change
   * Market cap trend
   * Social sentiment or Fear & Greed index
4. **AI Research Analyst (LLM Agent)** – Processes and synthesizes all data into a cohesive insight report containing:

   * 🧠 **Executive Summary**
   * 📊 **Top Gainers & Losers**
   * 💬 **Sentiment Overview**
   * 🔍 **Analyst Take / Actionable Insight**
5. **Formatting Layer (Code Node)** – Converts the analysis into a Discord-ready structure.
6. **Discord Posting Node** – Publishes the final **Market Intelligence Briefing** to a specified Discord channel.

---

### **Setup and Customization**

1. **Import this workflow** into your n8n workspace.
2. **Configure credentials:**

   * `NewsAPI Key` – For crypto and blockchain news.
   * `CoinGecko / Crypto Compare API Key` – For real-time asset data.
   * `LLM Credential` – OpenAI, Gemini, or Anthropic.
   * `Discord Webhook URL` or **Bot Token** – To post updates.
3. **Customize the tracked assets** in the News and Market nodes (BTC, ETH, SOL, BNB, ADA, etc.).
4. **Set local timezone** for report delivery.
5. **Deploy and activate** — your server will receive automated morning briefings.

---

### **Output Format**

Each daily report includes:

```
📰 AI Market Intelligence Briefing

📅 Date: October 16, 2025
💰 Top Movers: BTC +2.3%, SOL +1.9%, ETH -0.8%
💬 Sentiment: Moderately Bullish
🔍 Analyst Take: Accumulation signals forming in mid-cap layer-1s.
📈 Outlook: Positive bias, with ETH showing strong support near $2,400.
```

Compact yet rich in insight, this format ensures quick readability and fast decision-making for traders and investors.

---

### **(Optional) Extend This Workflow**

* **Portfolio-Specific Insights:** Fetch your wallet holdings from AFK Crypto or Zapper APIs for personalized reports.
* **Interactive Commands:** Add `/compare` or `/analyze` commands for Discord users.
* **Multi-Language Summaries:** Auto-translate for international communities.
* **Historical Data Logging:** Store briefings in Notion or Google Sheets.
* **Weekly Recaps:** Summarize all daily reports into a long-form analysis.

---

### **Requirements**

* **n8n Instance** (with HTTP Request, AI Agent, and Discord nodes enabled)
* **NewsAPI Key**
* **CoinGecko / Crypto Compare API Key**
* **LLM Credential** (OpenAI / Gemini / Anthropic)
* **Discord Bot Token or Webhook URL**

---

### **APIs Used**

* `GET https://newsapi.org/v2/everything?q=crypto OR bitcoin OR ethereum OR defi OR nft&language=en&sortBy=publishedAt&pageSize=10`
* `GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
* *(Optional)* `GET https://cryptopanic.com/api/v1/posts/?auth_token=YOUR_TOKEN&kind=news`
* *(Optional)* `GET https://api.gdeltproject.org/api/v2/doc/doc?query=crypto&format=json`

---

### **Summary**

The **AI Investment Research Assistant (Discord Summary Bot)** is your **personal AI research analyst** — delivering **concise, data-backed crypto briefings** directly to Discord.
It intelligently combines **news aggregation**, **sentiment analysis**, and **AI reasoning** to create actionable market intelligence each morning.

Ideal for **crypto traders, funds, or educational communities** seeking a reliable daily edge — this workflow replaces hours of manual research with one automated, professional-grade summary.

---

**Our Website**: https://afkcrypto.com/
**Check our blogs**: https://www.afkcrypto.com/blog

## 🔗 Nodes Used

Function, HTTP Request, Discord, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
