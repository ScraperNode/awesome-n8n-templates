# 🤝 Monitor D2C inventory, forecast demand with GPT-4o, and send POs via Google Sheets and Gmail

> ⚡ **189 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 📊 Description
Stop finding out you're out of stock after a customer already tried to buy. This workflow monitors your entire product inventory daily, calculates how fast each SKU is selling, and automatically raises purchase orders to your supplier before you hit zero — all without you opening a spreadsheet.
Built for D2C brands and ops teams who are tired of manual stock checks, surprise stockouts, and dead inventory eating up cash. The AI layer adds demand forecasting and tells you exactly what to bundle, discount, or kill every week.

## What This Workflow Does
⏰ Triggers every morning at 8AM to fetch fresh product and stock data automatically
🧮 Calculates sales velocity per SKU using a 7-day rolling average from your Sales Log
🚦 Flags every SKU as 🔴 Stockout Risk, 🟡 Dead Stock, or 🟢 Healthy and updates Google Sheets
📧 Sends instant email alerts when a SKU is about to run out or has been sitting unsold
📋 Automatically calculates reorder quantity using lead time and buffer stock formula
🏭 Emails a formatted Purchase Order directly to your supplier — no manual drafting
🤖 Sends all dead/slow SKUs to GPT-4o every Sunday for actionable recommendations — bundle, discount, or kill
📊 Delivers a 30-day demand forecast every Sunday based on 90 days of sales history and seasonal context

## Key Benefits
✅ Never get caught off guard by a stockout again
✅ POs go to suppliers automatically — zero manual work
✅ AI tells you what to do with slow-moving inventory every week
✅ 30-day demand forecast keeps you buying ahead, not reacting
✅ Everything logged in Google Sheets — full visibility at all times
✅ Works with any product catalog — just plug in your Sheet

## How It Works
The workflow runs in 5 stages, each timed 5 minutes apart every morning so data flows cleanly from one stage to the next.

Stage 1 — Data Sync (8:00 AM daily) Pulls product data from DummyJSON API (swap with your Shopify or WooCommerce endpoint when going live), simulates daily sales per SKU, and writes everything into your Google Sheets inventory log.

Stage 2 — Stock Health Check (8:05 AM daily) Reads the last 7 days of sales, calculates average daily velocity per SKU, and assigns a flag. Anything running out in under 14 days gets flagged 🔴. Anything with zero sales in 7 days gets flagged 🟡. Everything else is 🟢. Flags are written back to your sheet and email alerts fire immediately for anything critical.

Stage 3 — Auto Reorder Engine (8:10 AM daily) Picks up every 🔴 SKU and runs it through a reorder formula — (avg daily sales × lead time) + 7-day buffer stock. A properly formatted Purchase Order email goes straight to your supplier. Every PO is logged in the PO Tracker sheet with status, quantity, and date.

Stage 4 — Dead Inventory AI Digest (Every Sunday 9:00 AM) All 🟡 SKUs get sent to GPT-4o with your stock levels and sales data. The AI comes back with a recommendation for each one — bundle it, run a discount (with exact percentage), or kill the SKU entirely. You get a clean email grouped by urgency: high, medium, low.

Stage 5 — 30-Day Demand Forecast (Every Sunday 9:30 AM) Aggregates the last 90 days of sales per SKU and sends it to GPT-4o with the current month for seasonality context. GPT predicts how many units you'll need in the next 30 days, calculates stock gap, and tells you what to reorder now, stock up on, or reduce. Delivered as a clean email report every Sunday morning.

## Features
- Cron-based daily and weekly automation triggers
- Sales velocity calculation with 7-day and 90-day rolling windows
- 3-tier SKU health flagging system (🔴 🟡 🟢)
- Reorder quantity formula with lead time + buffer stock logic
- Automated PO generation and supplier email dispatch
- GPT-4o dead inventory strategist with discount recommendations
- GPT-4o 30-day demand forecasting with seasonality awareness
- Full Google Sheets logging across Inventory Master, Sales Log, and PO Tracker
- Gmail-based alerting and weekly digest reports
- Modular 5-stage architecture — easy to swap data sources

## Requirements
- OpenAI API key (GPT-4o access)
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection
- A configured Google Sheet with 3 sheets: Inventory Master, Sales Log, PO Tracker
- DummyJSON API — free, no key needed (replace with Shopify/WooCommerce for production)

## Setup Steps
- Copy the Google Sheet template and grab your Sheet ID from the URL
- Paste the Sheet ID into all Google Sheets nodes (there are 8 of them)
- Connect your Google Sheets OAuth2 credentials
- Connect your Gmail OAuth2 credentials
- Add your OpenAI API key to both GPT-4o nodes
- Replace the email address in all Gmail nodes with your own
- Activate all triggers — the system runs itself from here

## Target Audience
🛒 D2C brand owners managing inventory without a dedicated ops team
📦 E-commerce operators tired of manual stock checks and surprise stockouts
💼 Operations managers who want a real-time view of inventory health
🤖 Automation agencies building supply chain solutions for e-commerce clients

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
