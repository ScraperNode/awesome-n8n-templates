# 🔒 Monitor email data breaches with HIBP API and send Slack alerts

> ⚡ **272 views** · 🔒 [SecOps & Security Automation](../)

## Description

---

## How It Works: The 5-Node Security Flow

This workflow efficiently performs a scheduled data breach scan.

### 1. Scheduled Check (Cron Node)
This is the workflow's trigger. It schedules the workflow to run at a specific, regular interval.
* **Function:** Continuously runs on a set schedule, for example, every Monday morning.
* **Process:** The **Cron** node automatically initiates the workflow, ensuring routine data breach scans are performed without manual intervention.

### 2. List Emails to Check (Code Node)
This node acts as your static database, defining which email addresses to monitor for breaches.
* **Function:** Stores a list of email addresses from your team or customers in a single, easy-to-update array.
* **Process:** It configures the list of emails that are then processed by the subsequent nodes. This makes it simple to add or remove addresses as needed.

### 3. Query HIBP API (HTTP Request Node)
This node connects to the HaveIBeenPwned (HIBP) API to check for breaches.
* **Function:** Queries the HIBP API for each email address on your list.
* **Process:** It sends a request to the HIBP API. The API responds with a list of data breaches that the email was found in, if any.

### 4. Is Breached? (If Node)
This is the core detection logic. It checks the API response to see if any breach data was returned.
* **Function:** Compares the API's response to an empty array.
* **Process:** If the API response is **not empty**, it indicates a breach has been found, and the workflow is routed to the notification node. If the response is empty, the workflow ends safely.

### 5. Send High-Priority Alert (Slack Node) / End Workflow (No-Op Node)
These nodes represent the final action of the workflow.
* **Function:** Responds to a detected breach.
* **Process:** If a breach is found, the **Slack** node sends an urgent alert to your team's security channel, notifying them of the compromised email. If no breaches are found, the **No-Op** node ends the workflow without any notification.

---

## How to Set Up

Implementing this essential cybersecurity monitor in your n8n instance is quick and straightforward.

### 1. Prepare Your Credentials & API
Before building the workflow, ensure all necessary accounts are set up and their credentials are ready.

* **HIBP API Key:** You need to get an **API key** from haveibeenpwned.com. This key is required to access the API.
* **Slack Credential:** Set up a **Slack credential** in n8n and note the **Channel ID** of your security alert channel (e.g., `#security-alerts`).

### 2. Import the Workflow JSON
Get the workflow structure into your n8n instance.

* **Import:** In your n8n instance, navigate to the "Workflows" section. Click the "New" or "+" icon, then select "Import from JSON." Paste the provided JSON code into the import dialog and import the workflow.

### 3. Configure the Nodes
Customize the imported workflow to fit your specific monitoring needs.

* **Scheduled Check (Cron):** Set the schedule according to your preference (e.g., every Monday at 8:00 AM).
* **List Emails to Check (Code):** Open this node and **edit the `emailsToCheck` array**. Enter the list of company email addresses you want to monitor.
* **Query HIBP API (HTTP Request):** Open this node and in the "Headers" section, add the header `hibp-api-key` with the value of your HIBP API key.
* **Send High-Priority Alert (Slack):** Select your **Slack credential** and replace `YOUR_SECURITY_ALERT_CHANNEL_ID` with your actual **Channel ID**.

### 4. Test and Activate
Verify that your workflow is working correctly before setting it live.

* **Manual Test:** Run the workflow manually. You can test with a known breached email address (you can find examples online) to ensure the alert is triggered.
* **Verify:** Check your specified Slack channel to confirm that the alert is sent with the correct information.
* **Activate:** Once you're confident in its function, activate the workflow. n8n will now automatically monitor your important accounts for data breaches on the schedule you set.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
