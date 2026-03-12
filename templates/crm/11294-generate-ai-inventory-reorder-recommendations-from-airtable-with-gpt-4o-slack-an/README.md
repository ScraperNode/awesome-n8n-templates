# 🤝 Generate AI inventory reorder recommendations from Airtable with GPT-4o, Slack and email

> ⚡ **193 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 📘 Description
This workflow automates end-to-end AI-driven inventory intelligence, transforming Airtable stock data into optimized reorder recommendations, daily operational summaries, and instant Slack alerts.
 It fetches all inventory rows, validates structure, computes reorder and safety-stock metrics using strict formulas, merges multi-batch AI output into a unified dataset, and distributes actionable insights across Email and Slack.
Invalid or corrupted Airtable rows are logged to Google Sheets for audit and cleanup.
 The workflow ensures deterministic inventory math (zero improvisation), strict JSON compliance, and reliable multi-channel reporting for operations teams.

## ⚙️ What This Workflow Does (Step-by-Step)

▶️ Manual Trigger – Start Inventory Optimization
 Runs the full optimization and reporting pipeline on demand.

📦 Fetch Inventory Records from Airtable
 Retrieves all SKU records (ID, ItemName, SKU, quantities, reorder levels) from the Airtable Inventory table.

🔍 Validate Inventory Record Structure (IF)
 Ensures each record contains a valid id.
 Valid → routed to AI optimization
 Invalid → saved to Google Sheets.

📄 Log Invalid Inventory Rows to Google Sheet
 Captures malformed or incomplete Airtable items for audit checks and data hygiene.

🧠 Configure GPT-4o — Inventory Optimization Model
 Defines the AI model for stock-level calculations using strict formulas:
SuggestedReorderPoint = ReorderLevel × 1.2
SuggestedSafetyStock = ReorderLevel × 0.5
 StockStatus logic:
Critical if QuantityInStock ≤ SuggestedSafetyStock
Needs Reorder if QuantityInStock ≤ SuggestedReorderPoint
OK otherwise

🤖 Generate Inventory Optimization Output (AI)
 The AI engine analyzes each SKU and returns:
Suggested reorder point
Suggested safety stock
Updated stock status
Clean structured JSON for each item
 All without markdown, hallucination, or additional logic.

🧩 Merge AI Optimization Results (Code)
 Consolidates all partial AI responses into one complete JSON dataset containing all SKUs.

🧠 Configure GPT-4o – Email Summary Model
 Prepares the AI model used for generating a professional operations-team email.

📧 Generate Inventory Email Summary (AI)
 Creates a manager-ready email including:
High-level inventory health
Detailed SKU summaries
Alerts for low, reorder-level, or critical stock
Recommended actions for today’s operations

📨 Email Inventory Summary to Manager (Gmail)
 Sends the completed inventory summary to the operations manager.

🧠 Configure GPT-4o – Slack Summary Model
 Sets up GPT-4o to produce a compact, emoji-supported Slack summary.

💬 Generate Inventory Slack Summary (AI)
 Builds a Slack-optimized message containing:
One-line inventory health
Bullet list of SKUs with stock status
Clear alerts for reorder-level or critical items
One recommended action line

📡 Notify Operations Team on Slack
 Delivers the optimized Slack summary to the operations Slack user/channel for real-time visibility.

## 🧩 Prerequisites
- Airtable access token
- Azure OpenAI GPT-4o credentials
- Google Sheets OAuth
- Slack API credentials
- Gmail OAuth

## 💡 Key Benefits
 ✔ AI-powered stock calculations with strict formulas
 ✔ Reliable reorder and safety-stock predictions
 ✔ Instant multi-channel reporting (Email + Slack)
 ✔ Full audit logging for invalid data
 ✔ Zero hallucinations—pure structured JSON
 ✔ Faster decision-making for operations teams

## 👥 Perfect For
- Operations & supply-chain teams
- Inventory managers
- Retail & e-commerce units
- Businesses using Airtable for stock tracking

## 🔗 Nodes Used

Airtable, Asana, Google Sheets, Slack, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
