# 🔬 AI-driven inventory management with OpenAI forecasting & ERP integration

> ⚡ **4,298 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow automates the monitoring of warehouse inventory and sales velocity to predict demand, generate purchase orders automatically, send them to suppliers, and record all transactions in ERP and database systems. It uses AI-driven forecasting to ensure timely restocking while maintaining operational efficiency and minimizing stockouts or overstocking.

---

### Key Features

* **Automated Scheduling:** Periodically checks inventory and sales data at defined intervals.
* **Real-Time Data Fetching:** Retrieves live warehouse stock levels and sales trends.
* **AI Demand Forecasting:** Uses OpenAI GPT to predict future demand based on sales velocity and stock trends.
* **Auto-Purchase Orders:** Automatically generates and sends purchase orders to suppliers.
* **ERP Integration:** Logs completed purchase orders into ERP systems like SAP, Oracle, or Netsuite.
* **Database Logging:** Saves purchase order details and forecast confidence data into SQL databases (PostgreSQL/MySQL).
* **Email Notifications:** Notifies relevant teams upon successful order creation and logging.
* **Modular Configuration:** Each node includes configuration notes and credentials setup instructions.

---

### Workflow Process

1. **Schedule Trigger**

   * Runs every 6 hours to monitor stock and sales data.
   * Interval can be adjusted for higher or lower frequency checks.

2. **Fetch Current Inventory Data**

   * Retrieves live inventory levels from the warehouse API endpoint.
   * Requires API credentials and optional GET/POST method setup.

3. **Fetch Sales Velocity**

   * Pulls recent sales data for forecasting analysis.
   * Used later for AI-based trend prediction.

4. **Merge Inventory & Sales Data**

   * Combines inventory and sales datasets into a unified JSON structure.
   * Prepares data for AI model input.

5. **AI Demand Forecasting**

   * Sends merged data to OpenAI GPT for demand prediction.
   * Returns demand score, reorder need, and confidence levels.

6. **Parse AI Response**

   * Extracts and structures forecast results.
   * Combines AI data with original inventory dataset.

7. **Filter: Reorder Needed**

   * Identifies items flagged for reorder based on AI output.
   * Passes only reorder-required products to next steps.

8. **Create Purchase Order**

   * Automatically creates a PO document with item details, quantity, and supplier information.
   * Calculates total cost and applies forecast-based reorder logic.

9. **Send PO to Supplier**

   * Sends the generated purchase order to supplier API endpoints.
   * Includes response validation for order success/failure.

10. **Log to ERP System**

    * Records confirmed purchase orders into ERP platforms (SAP, Oracle, Netsuite).
    * Includes timestamps and forecast metrics.

11. **Save to Database**

    * Stores all PO data, supplier responses, and AI forecast metrics into PostgreSQL/MySQL tables.
    * Useful for long-term audit and analytics.

12. **Send Notification Email**

    * Sends summary emails upon PO creation and logging.
    * Includes PO ID, supplier, cost, and demand reasoning.

---

### Setup Instructions

* **Schedule Trigger:**
  Adjust to your preferred interval (e.g., every 6 hours or once daily).

* **API Configuration:**

  * Provide credentials in Inventory, Sales, and Supplier nodes.
  * Use Authorization headers or API keys as per your system.

* **AI Node (OpenAI):**

  * Add your OpenAI API key in the credentials section.
  * Modify the prompt if you wish to include additional forecasting parameters.

* **ERP Integration:**

  * Replace placeholder URLs with your ERP system endpoints.
  * Match fields like purchase order number, date, and cost.

* **Database Connection:**

  * Configure credentials for PostgreSQL/MySQL in the Save to Database node.
  * Ensure tables (`purchase_orders`) are created as per schema provided in sticky notes.

* **Email Notifications:**

  * Set up SMTP credentials (e.g., Gmail, Outlook, or custom mail server).
  * Add recipients under workflow notification settings.

---

### Industries That Benefit

This automation is highly beneficial for:

* **Retail & E-commerce:** Predicts product demand and auto-orders from suppliers.
* **Manufacturing:** Ensures raw materials are restocked based on production cycles.
* **Pharmaceuticals:** Maintains optimum inventory for high-demand medicines.
* **FMCG & Supply Chain:** Balances fast-moving goods availability with minimal overstocking.
* **Automotive & Electronics:** Prevents delays due to missing components.

---

### Prerequisites

* API access to inventory, sales, supplier, and ERP systems.
* Valid OpenAI API key for demand forecasting.
* SQL database (PostgreSQL/MySQL) for record storage.
* SMTP or mail server credentials for email notifications.
* n8n environment with required nodes installed (HTTP, AI, Filter, Email, Database).

---

### Modification Options

* Change forecast logic or thresholds for different industries.
* Integrate Slack/Teams for live notifications.
* Add approval workflow before sending POs.
* Extend AI prompt for seasonality or promotional trends.
* Add dashboard visualization using Grafana or Google Sheets.

---

**Explore More AI Workflows:**
[Get in touch with us](https://www.oneclickitsolution.com/contact-us/) to build industry-grade n8n automations with predictive intelligence.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
