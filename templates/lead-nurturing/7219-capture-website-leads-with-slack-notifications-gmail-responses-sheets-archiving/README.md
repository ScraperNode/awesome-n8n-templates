# 💬 Capture website leads with Slack notifications, Gmail responses & sheets archiving

> ⚡ **439 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### **Website Lead Notification System**

Let's build this simple and high-value workflow. Here is a detailed, node-by-node explanation of how it works and how to set it up in n8n.

---

### **How It Works**

This workflow acts as a bridge between your website's contact form and your sales team. It waits for a submission from your website via a **Webhook**. As soon as a new lead fills out the form, the workflow instantly captures their data and sends a formatted notification to your team's Slack channel. This ensures your team can respond to new leads in real time, without any delays.

---

### **Setup Steps**

#### **1. Webhooks Trigger: Receive Website Form Submissions**
* **Node Type:** `Webhook Trigger`
* **Parameters:**
    * **HTTP Method:** `POST`
    * **Path:** `new-lead`
* **Explanation:** This node is the starting point. It creates a unique URL that you will use in your website's form submission settings. When a visitor submits your form, the data is sent to this URL as a `POST` request, triggering the workflow.

#### **2. Slack: Notify Sales Team**
* **Node Type:** `Slack`
* **Credentials:** `YOUR_SLACK_CREDENTIAL`
* **Parameters:**
    * **Operation:** `Post Message`
    * **Channel:** `YOUR_SALES_CHANNEL_ID` (e.g., `#sales-leads`)
    * **Text:** `*New Website Lead!* - Name: {{ $json.name }}
        - Company: {{ $json.company }}
        - Email: {{ $json.email }}
        - Message: {{ $json.message }}`
* **Explanation:** This node sends a formatted message to your designated Slack channel. The curly braces `{{ }}` contain n8n expressions that dynamically pull the data (name, company, email, etc.) from the website form submission.

#### **3. Google Sheets: Archive Lead Data (Optional)**
* **Node Type:** `Google Sheets`
* **Credentials:** `YOUR_GOOGLE_SHEETS_CREDENTIAL`
* **Parameters:**
    * **Operation:** `Add Row`
    * **Spreadsheet ID:** `YOUR_SPREADSHEET_ID`
    * **Sheet Name:** `Leads`
    * **Data:**
        * `Name`: `={{ $json.name }}`
        * `Email`: `={{ $json.email }}`
        * `Date`: `={{ $now }}`
* **Explanation:** This is an optional but recommended step. This node automatically adds a new row to a Google Sheet, creating a clean, organized archive of all your website leads.

#### **4. Gmail: Send Automatic Confirmation Email (Optional)**
* **Node Type:** `Gmail`
* **Credentials:** `YOUR_GMAIL_CREDENTIAL`
* **Parameters:**
    * **Operation:** `Send`
    * **To:** `={{ $json.email }}`
    * **Subject:** `Thanks for contacting us!`
    * **Body:** `Hi {{ $json.name }}, thanks for reaching out. We've received your message and will get back to you shortly.`
* **Explanation:** This node provides a quick and professional automated response to the new lead, confirming that their message has been received.

### **Final Step: Activation**

1.  After configuring the nodes, click **"Save"** at the top of the canvas.
2.  Click the **"Active"** toggle in the top-right corner. The workflow is now live and will listen for new form submissions.
3.  **Remember:** You need to configure your website's form to send a `POST` request to the URL from your `Webhook Trigger` node.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
