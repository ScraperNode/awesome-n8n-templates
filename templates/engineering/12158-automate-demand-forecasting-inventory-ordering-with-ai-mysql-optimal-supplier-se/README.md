# ⚒️ Automate demand forecasting & inventory ordering with AI, MySQL & optimal supplier selection

> ⚡ **483 views** · ⚒️ [Engineering](../)

## Description

This workflow streamlines the entire inventory replenishment process by leveraging AI for demand forecasting and intelligent logic for supplier selection. It aggregates data from multiple sources—POS systems, weather forecasts, SNS trends, and historical sales—to predict future demand. Based on these predictions, it calculates shortages, requests quotes from multiple suppliers, selects the optimal vendor based on cost and lead time, and executes the order automatically.


## 🚀 Who is this for?
- **Retail & E-commerce Managers** aiming to minimize stockouts and reduce overstock.
- **Supply Chain Operations** looking to automate procurement and vendor selection.
- **Data Analysts** wanting to integrate external factors (weather, trends) into inventory planning.


## 💡 How it works
1.  **Data Aggregation**: Fetches data from POS systems, MySQL (historical sales), OpenWeatherMap (weather), and SNS trend APIs.
2.  **AI Forecasting**: Formats the data and sends it to an AI prediction API to forecast demand for the next 7 days.
3.  **Shortage Calculation**: Compares the forecast against current stock and safety stock to determine necessary order quantities.
4.  **Supplier Optimization**: For items needing replenishment, the workflow requests quotes from multiple suppliers (A, B, C) in parallel. It selects the best supplier based on the lowest total cost within a 7-day lead time.
5.  **Execution & Logging**: Places the order via API, updates the inventory system, and logs the transaction to MySQL.
6.  **Anomaly Detection**: If the AI's confidence score is low, it skips the auto-order and sends an alert to **Slack** for manual review.


## ⚙️ Setup steps
1.  **Configure Credentials**: Set up credentials for **MySQL** and **Slack** in n8n.
2.  **API Keys**: You will need an API key for **OpenWeatherMap** (or a similar service).
3.  **Update Endpoints**: The HTTP Request nodes use placeholder URLs (e.g., `pos-api.example.com`, `ai-prediction-api.example.com`). Replace these with your actual internal APIs, ERP endpoints, or AI service (like OpenAI).
4.  **Database Prep**: Ensure your MySQL database has a table named `forecast_order_log` to store the order history.
5.  **Schedule**: The workflow is set to run daily at 03:00. Adjust the **Schedule Trigger** node as needed.


## 📋 Requirements
- **n8n** (Self-hosted or Cloud)
- **MySQL** database
- **Slack** workspace
- External APIs for POS, Inventory, and Supplier communication (or mock endpoints for testing).

## 🔗 Nodes Used

HTTP Request, Slack, MySQL, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
