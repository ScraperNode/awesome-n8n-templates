# 🔒 SSL/TLS certificate expiry monitor with Slack alert

> ⚡ **248 views** · 🔒 [SecOps & Security Automation](../)

## Description

### How It Works: The 5-Node Certificate Management Flow 🗓️

This workflow efficiently monitors your domains for certificate expiry.

1.  **Scheduled Check (Cron Node):** This is the workflow's trigger. It's configured to run on a regular schedule, such as every Monday morning, ensuring certificate checks are automated and consistent.

2.  **List Domains to Monitor (Code Node):** This node acts as a static database, storing a list of all the domains you need to track.

3.  **Check Certificate Expiry (HTTP Request Node):** For each domain in your list, this node makes a request to a certificate checking API. The API returns details about the certificate, including its expiry date.

4.  **Is Certificate Expiring? (If Node):** This is the core logic. It compares the expiry date from the API response with the current date. If the certificate is set to expire within a critical timeframe (e.g., less than 30 days), the workflow proceeds to the next step.

5.  **Send Alert (Slack Node):** If the `If` node determines a certificate is expiring, this node sends a high-priority alert to your team's Slack channel. The message includes the domain name and the exact expiry date, providing all the necessary information for a quick response.

***

### How to Set Up

Here's a step-by-step guide to get this workflow running in your n8n instance.

1.  **Prepare Your Credentials & API:**
    * **Certificate Expiry API:** You need an API to check certificate expiry. The workflow uses a sample API, so you may need to adjust the URL and parameters. For production use, you might use a service like Certspotter or a similar tool.
    * **Slack Credential:** Set up a **Slack credential** in n8n and get the **Channel ID** of your security alert channel (e.g., `#security-alerts`).

2.  **Import the Workflow JSON:**
    * Create a new workflow in n8n and choose "Import from JSON."
    * Paste the JSON code for the "SSL/TLS Certificate Expiry Monitor" workflow.

3.  **Configure the Nodes:**
    * **Scheduled Check (Cron):** Set the schedule according to your preference (e.g., every Monday at 8:00 AM).
    * **List Domains to Monitor (Code):** Edit the `domainsToMonitor` array in the code and add all the domains you want to check.
    * **Check Certificate Expiry (HTTP Request):** Update the **URL** to match the certificate checking API you are using.
    * **Is Certificate Expiring? (If):** The logic is set to check for expiry within 30 days. You can adjust the `30` in the expression `new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)` to change the warning period.
    * **Send Alert (Slack):** Select your **Slack credential** and enter the correct **Channel ID**.

4.  **Test and Activate:**
    * **Manual Test:** Run the workflow manually to confirm it fetches certificate data and processes it correctly. You can test with a domain that you know is expiring soon to ensure the alert is triggered.
    * **Verify Output:** Check your Slack channel to confirm that alerts are formatted and sent correctly.
    * **Activate:** Once you're confident everything works, **activate** the workflow. n8n will now automatically monitor your domain certificates on the schedule you set.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
