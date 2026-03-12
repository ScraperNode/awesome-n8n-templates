# 📊 Generate & distribute market reports with Google Docs, Sheets, and Gmail

> ⚡ **94 views** · 📊 [Market Research & Insights](../)

## Description

### How It Works ⚙️

This workflow is a powerful automation engine for your marketing efforts. On a set schedule, it automatically generates a professional market report and distributes it to your client list, positioning you as a market expert with zero manual effort.

1.  **0. Cron (Monthly Schedule):** ⏰ The workflow is triggered automatically on the first day of every month at a specified time (e.g., 8:00 AM).
2.  **1. HTTP Request (Get Market Data):** 📊 It connects to an external market data API to fetch the latest raw statistics and trends for your region.
3.  **2. Function (Process Data):** 📝 This node processes the raw API data, formats it, and calculates key metrics (e.g., total sales, average price) to be used in the final report.
4.  **3. Google Docs (Create Report):** 📄 Using a pre-designed Google Docs template, the workflow dynamically creates a new report document, filling in the placeholders with the data processed in the previous step.
5.  **4. Google Sheets (Get Client List):** 📋 It fetches your client mailing list from a Google Sheet, which acts as your central database for client contacts.
6.  **5. Split In Batches:** 🔄 This node ensures that each client from the mailing list is processed individually, preventing any issues with bulk emailing.
7.  **6. Gmail (Send Report):** 📧 For each client, a personalized email is sent with the newly generated market report attached as a PDF, completing the distribution process.

---

### How to Set Up 🛠️

Setting up this complex workflow requires careful configuration of each node and external services.

1.  **Import Workflow JSON:**
    * Open your n8n instance.
    * Click on 'Workflows' in the left sidebar.
    * Click the '+' button or 'New' to create a new workflow.
    * Click the '...' (More Options) icon in the top right.
    * Select 'Import from JSON' and paste the entire JSON code for this workflow.

2.  **Prepare Your Data & Tools:**
    * **Market Data API:** Obtain an API key or access for a market data service that provides the data you need. This could be a public service or an internal one.
    * **Google Docs Template:** Create a Google Docs template for your market report. Use placeholders like `{{ averagePrice }}`, `{{ totalSales }}`, and `{{ reportMonth }}` for the data you want to insert.
    * **Client Mailing List:** Create a Google Sheet with a list of your clients. It must have columns like `Client Name` and `Client Email`.
    * **n8n Credentials:** Ensure you have configured OAuth2 credentials for both Google Sheets and Google Docs.

3.  **Configure 0. Cron (Monthly Schedule):**
    * The node is pre-configured to run on the 1st of every month at 8 AM. You can adjust the `hour` or `dayOfMonth` if needed.

4.  **Configure 1. HTTP Request (Get Market Data):**
    * Locate the '1. HTTP Request (Get Market Data)' node.
    * **URL:** **Replace `https://api.your-market-data-service.com/data/monthly?region=Jakarta`** with the actual URL of your market data API endpoint.
    * **Authentication:** Configure the authentication (e.g., `Header Auth` for an API key) according to your API provider's documentation.

5.  **Configure 2. Function (Process Data):**
    * Locate the '2. Function (Process Data)' node.
    * **Data Mapping:** The code is an example. **You MUST update the code** inside this node to correctly parse the JSON data coming from your specific API call and extract the metrics you need.
    * **Expressions:** Ensure the variable names (`totalSales`, `averagePrice`, etc.) match the placeholders in your Google Docs template.

6.  **Configure 3. Google Docs (Create Report):**
    * Locate the '3. Google Docs (Create Report)' node.
    * **Credentials:** Select your Google Docs OAuth2 credential.
    * **Document ID:** **Replace `YOUR_GOOGLE_DOCS_TEMPLATE_ID`** with the ID of the template you created.
    * **Template Variables:** Ensure the `variable` names (`averagePrice`, `totalSales`, etc.) perfectly match the placeholders in your Google Docs template.

7.  **Configure 4. Google Sheets (Get Client List):**
    * Locate the '4. Google Sheets (Get Client List)' node.
    * **Credentials:** Select your Google Sheets OAuth2 credential.
    * **Spreadsheet ID:** **Replace `YOUR_CLIENT_MAILING_LIST_SPREADSHEET_ID`** with the ID of your client list sheet.
    * **Sheet Name:** Enter the exact name of the sheet (tab) containing your client data.

8.  **Configure 5. Split In Batches:**
    * This node requires no configuration. It will automatically process each client from the Google Sheets list one by one.

9.  **Configure 6. Gmail (Send Report):**
    * Locate the '6. Gmail (Send Report)' node.
    * **Credentials:** Select your Gmail OAuth2 credential.
    * **From Email:** **Replace `your-agency-email@example.com`** with the email address you want to send from.
    * **To Email:** `={{ $json['Client Email'] }}` (This pulls the email from the current batch item).
    * **Attachments:** The node is set up to attach the file created by the Google Docs node. No changes are needed here unless you want to customize the file name.

10. **Review and Activate:**
    * Thoroughly review all node configurations. This is a complex workflow, so be meticulous.
    * Click 'Save' and then toggle the 'Inactive' switch to 'Active' to enable your workflow. 🟢 Your automated marketing engine is now live!

## 🔗 Nodes Used

Cron, Function, Google Sheets, HTTP Request, Gmail, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
