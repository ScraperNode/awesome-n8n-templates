# 📈 Track multi-broker investment portfolio with Google Sheets and Telegram alerts

> ⚡ **953 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## **All-in-One Portfolio Tracker & Telegram Finance Updates Workflow for n8n: Multi-Broker, Real-Time, Global 🚀**

### Overview

Take control of all your investments—across multiple brokers and platforms—in one place, with live updates sent directly to your Telegram! 🌍💸 This n8n template brings together Google Sheets and Telegram so you can track your complete finance portfolio with ease, whether you’re in the US market, India, or anywhere in the world.

### 🔧 Built By - akash@codescale.tech

### How This Workflow Works

- **Tracks your investments** across multiple brokers, platforms, or asset types.
- **Automatically sends updates to your Telegram account**—see daily Profit & Loss (P&L), changes, and total returns in a rich, emoji-filled report.
- **Works globally**, with a sample provided for the US market, but can be configured for any country and broker.
- **Schedule automated updates** (e.g., market close/open) or get real-time insights on demand with Telegram commands.

### Highlights & Features

- 📊 **Unified Dashboard**: Integrate all your broker data in one Google Sheet for effortless monitoring (Google Sheet Link - https://docs.google.com/spreadsheets/d/1dakq9EhU8GrDgBsk82KvAen0N1P3FySAwNHFtG2lsLI/edit?usp=sharing)
- 🤖 **Interactive Telegram Bot**: Send `/total` or a specific broker’s name in the Telegram chat to get instant, formatted portfolio summaries.
- ⏰ **Automatic Notifications**: Receive scheduled P&L summaries at market open and close.
- 🗂️ **Customizable for Any Region or Broker**: Just update your Google Sheet with the platforms or brokers you use—including those in the US, Europe, Asia, etc.
- 🔐 **Secure and Private**: Only your pre-set Telegram user or chat receives the sensitive financial update.

### Example (For US Market)

Let’s imagine you have portfolios with **Robinhood**, **E*TRADE**, and **Charles Schwab**. Every day at 10AM and 4PM Eastern Time, or whenever you send the `/total` command, you get this on Telegram:

```
📊 Daily P&L Report

🔹 Robinhood
- Invested: $5,000.00
- P&L: $250.00 (5.00%)
- Change: $30.00 (0.60%)
- Current Value: $5,250.00

🔹 E*TRADE
- Invested: $8,000.00
- P&L: $400.00 (5.00%)
- Change: $45.00 (0.56%)
- Current Value: $8,400.00

📈 Total Portfolio
- Total Invested: $13,000.00
- Total P&L: $650.00 (5.00%)
- Today's Change: $75.00 (0.58%)

💰 Overall Value: $13,650.00
📈 Overall Return: 5.00%
💸 Overall P&L: $650.00
```


### Easy Setup Steps

1. **Copy the Template to Your n8n Instance**: Just import the provided workflow JSON.
2. **Configure Your Google Sheet**:  
   - List all your brokers/platforms as rows (US, EU, or any other market).
   - Update your credentials in n8n for Google Sheets and Telegram.
3. **Set Your Telegram Chat ID**: Secure, so only you or your group receive updates.
4. **Customize Schedules**: Change times for your local market hours or as you prefer.
5. **Send Commands in Telegram**:  
   - `/total` for overall summary
   - `/Robinhood`, `/ETRADE`, etc., for individual broker updates

### Who Is This For?

- Investors managing accounts across several brokers.
- Traders seeking real-time daily summaries.
- Portfolio managers wanting one consolidated, secure view.
- Users in any country, for any major market.


### Make It Yours! 🌏

Customize the sheet and workflow for your unique blend of accounts, currencies, and platforms—track mutual funds, stocks, ETFs, cryptos, or more. Get peace of mind with every notification, organized and delivered just for you!

**Start tracking smarter, not harder. Transform your finance workflow with n8n + Telegram today! 🚀**

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
