# 🤝 Summarize daily Shopify orders with Gemini, Google Sheets, Gmail and Slack

> ⚡ **102 views** · 🤝 [CRM & Sales Operations](../)

## Description

# 🛍️ Shopify Daily Order Reporting: AI Summaries & Multichannel Alerts

## Summary
E-commerce store management made easy. The workflow pulls your daily Shopify orders, calculates essential metrics like revenue and fulfillment rates, and categorizes them by status (shipped, returned, cancelled, or pending). Gemini AI then transforms this data into a polished daily summary, logs the metrics into Google Sheets, and delivers the final report directly to your team via Slack and email.

Perfect for store owners and managers who want a hands-off, easy-to-read daily brief on how the store performed.

## Key Features
* **Automated Math:** Instantly calculates total orders, revenue, average order value, and categorizes whether orders are paid, shipped, returned, cancelled, or pending.
* **AI-Powered Summaries:** Our AI (Gemini) reads your order data and writes a clean daily summary that looks good in Slack and email. 
* **Multichannel Updates:** Delivers the final summary directly to your inbox via Gmail and your team's Slack channel simultaneously.
* **Centralized Logging:** Every daily summary is appended to a Google Sheet for easy long-term tracking.
* **Safety Net Alerts:** If any step fails (like a Shopify API timeout or a full Google Sheet), an error message appears in the dedicated Slack channel you select.

## 🧩 Nodes Used
* **Schedule Trigger:** Initiates the workflow daily at the specified time.
* **Set:** Defines global configuration variables like the recipient email and sheet URL.
* **Shopify:** Fetches the daily updated orders from your store.
* **Code:** Custom JavaScript to calculate metrics and categorize orders safely.
* **If:** Routes the workflow logic based on whether new orders were found.
* **Google Sheets:** Appends the parsed daily metrics to your tracking sheet.
* **Advanced AI (Gemini Model & Chain):** Generates the formatted summary text.
* **Gmail:** Sends the HTML formatted daily report via email.
* **Slack:** Delivers reports, zero-order notices, and error alerts to specified channels.
* **Error Trigger:** Catches workflow failures for global error handling.

## How It Works
1. **Trigger:** Runs automatically every day at 23:59 (in your local timezone).
2. **Ingestion:** Connects to Shopify's order system and pulls all orders from the current day. 
3. **Processing:** Sorts the raw data into actionable categories (shipped, refunded, cancelled, pending).
4. **AI Generation:** Gemini translates the numbers into a readable daily report. If there are no orders for the day, Slack gets a quick "no updates" ping, and the email is NOT sent.
5. **Distribution:** Logs the data to Google Sheets, emails the summary via Gmail, and posts it to Slack.

---

## 🛠️ Setup Instructions

### Step 1: Authenticate All Credentials
Before building, connect your accounts by clicking each node and selecting "Connect":
* **Shopify API:** Requires your store admin URL and an API token.
* **Google Sheets & Gmail:** Sign in with your Google account.
* **Slack API:** Authorize the n8n bot to post in your workspace.
* **Google Gemini API:** Enter the API key from your Google Cloud account.

### Step 2: Configure Workflow Variables
Open the **"Set Config (Email & Sheet URL)"** node and fill in the basics:
* **recipientMail:** The email address where daily reports will be sent (e.g., `manager@company.com`).
* **googleSheetUrl:** Leave this blank for now or type `pending` — we'll update it in Step 4.

### Step 3: Create Your Google Sheet
1. Create a [blank Google Sheet](https://sheets.google.com/create).
2. In Row 1, add these exact headers (they are case-sensitive): 
   `Date` | `Total Orders` | `New Orders` | `Shipped` | `Refunded` | `Cancelled` | `Revenue` | `Avg Value` | `Fulfillment %` | `Timestamp`

### Step 4: Paste the Sheet URL
1. Copy your new Google Sheet's URL (format: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`).
2. Go back to the **"Set Config (Email & Sheet URL)"** node and paste this URL into the **googleSheetUrl** field.
3. Open the **"Log to Google Sheets"** node and ensure it is pointing to this document.

### Step 5: Select Slack Channels
1. Open the **"Slack - Send Report"** node and select the channel for daily reports.
2. Open the **"Slack - No Orders Alert"** node and select a channel (can be the same one).
3. Open the **"Slack - Send Error Alert"** node (bottom left) and select a channel for emergency alerts (like a dedicated `#errors` channel).

### Step 6: Set Workflow Timezone (Crucial!)
* **Where to find it:** Top menu → Workflow Settings (gear icon) → Timezone dropdown.
* **What it does:** Changes when the workflow runs AND which day's orders it pulls. 
* **Example:** Set to `Asia/Kolkata`? It runs at 23:59 IST and pulls orders from midnight-to-midnight IST.

### Step 7: Activate
Toggle the workflow to **Active** in the top right corner. It will now run on autopilot!

---

## ✅ Verification Checklist
Before trusting it completely, double-check these items:
- [ ] Shopify API has `orders:read` permissions enabled.
- [ ] Gmail OAuth2 credential has been created and connected.
- [ ] Slack bot has `chat:write` permissions.
- [ ] Google Sheets OAuth has been granted (workflow can access your sheets).
- [ ] Google Gemini API is enabled in your Google Cloud project.
- [ ] Shopify store timezone set correctly in Workflow Settings.
- [ ] First manual test run completed successfully (click "Test Workflow").

---

## ⚠️ Limitations
* **Order Volume Limit:** The Shopify fetch node is currently set to a limit of 1000 orders. If your store updates more than 1000 orders in a single day, the node will cap at 1000. For massive scale, this node would need to be replaced with an HTTP Request node utilizing cursor-based pagination.
* **Timezone Dependency:** Ensure your n8n workflow timezone perfectly matches your Shopify store timezone to prevent orders from being miscategorized between days.

---

## 💡 How to Customize
* **Want only PAID orders (skip pending)?** Edit the `Calculate & Categorize Metrics` code node. Change the filtering logic to only include orders where `financial_status = "paid"`.
* **Want to change the AI's tone?** Open the `Generate AI Summary` node. You can explicitly tell Gemini to "write this like a strict financial auditor" or "make it fun and enthusiastic with lots of emojis."
* **Need reports sent to the whole team?** Duplicate the Gmail node to send to additional email addresses, or change the `recipientMail` variable to a group distribution list.

## 🔗 Nodes Used

Google Sheets, Slack, Shopify, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
