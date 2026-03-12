# 📈 Send cryptocurrency price threshold alerts from CoinGecko to Discord

> ⚡ **1,918 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Crypto Price Alert – n8n Workflow

A simple and effective crypto alert system for anyone who wants to stay up to date with coin price changes — without refreshing charts all day. This workflow checks the current price of your chosen cryptocurrency (via CoinGecko) and sends you an alert on Discord if it goes above or below your target range.

It’s lightweight, easy to set up, and runs on autopilot.

---

### What the Workflow Does
- Checks the live price of a selected coin using the CoinGecko API.
- Compares it to the max/min prices you define manually.
- Decides if the price is too high or too low.
- Sends an alert message to Discord depending on the result.

---

### How It Works
- The flow is triggered manually or on a schedule (your choice).
- It pulls the current price of the coin you set.
- Compares that price with your min and max values.
- Sends a “high” or “low” message to your Discord webhook.

---

### Setup Steps
- Enter your coin ID and price thresholds in the “Set Low and High” node.
- Paste your Discord webhook URLs in the "Message High" and "Message Low" nodes.
- Optional: Adjust the schedule trigger to run every X minutes/hours.
- Run once manually to test — takes under 1 minutes.

Full instructions and config tips are in sticky notes inside the workflow.

## 🔗 Nodes Used

Discord, CoinGecko, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
