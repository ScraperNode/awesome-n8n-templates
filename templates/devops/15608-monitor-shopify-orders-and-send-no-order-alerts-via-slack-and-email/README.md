# ⚙️ Monitor Shopify orders and send no-order alerts via Slack and email

> ⚡ **133 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# 🛒 Shopify "No Orders in X Minutes" Alert
 
## 📌 Summary

Never miss a revenue-impacting failure. This n8n workflow monitors your Shopify store and triggers an alert if **X minutes pass without a single new order**. By automatically detecting unexpected drops in order flow based on your custom schedule. It tracks downtime duration, sends rich multi-channel alerts, and can optionally send an automated "all clear" message when orders resume.
 
---
 
## ✨ Key Features

* **Dynamic 'X Minutes' Tracking:** The workflow automatically calculates its lookback window based on your Schedule Trigger. If you set the trigger to check every 45 minutes, the workflow dynamically alerts you if no orders were placed in the last 45 minutes.
* **Multi-Channel Alerts:** Delivers highly readable, structured Slack messages and styled Emails. Toggle Slack and Email alerts independently via a single configuration node.
* **Optional Recovery Notifications:** Toggle on the ability to automatically send a green "✅ SYSTEM RECOVERED" alert when orders successfully resume after an outage, closing the loop for your team.
* **Smart Error Handling:** Catches Shopify API errors (e.g., expired credentials or rate limits) and tracks them separately from organic "no order" events to prevent skewed downtime metrics.
 
---
 
## 🛠️ How It Works

1.  **Trigger & Validate:** The workflow runs on a schedule you choose (for example, every 30 minutes). Validates configuration to prevent silent failures (e.g., missing email addresses or no channels enabled).
3.  **Fetch Order:** Queries Shopify for any new orders created within the last trigger interval. 
4.  **Logic Branch:**
    * **Orders Found:** Calculates total downtime, resets the tracking counters, and sends a Recovery notification (if an outage was actively ongoing and the recovery toggle is enabled). ✅
    * **No Orders:** Increments the downtime counter and initiates the alert sequence. 🚨
5.  **Route:** Checks configuration toggles and delivers formatted messages to your enabled channels.
 
---
 
## 📦 Nodes Used
 
* **Schedule Trigger** - Controls check frequency (configurable)
* **Configuration** - Centralized settings for channels, recovery alerts, and email recipient
* **Validate Email Config? / All Channels Disabled?** - Safety gates to prevent silent failures
* **Config Error** - Stops execution with a clear warning if setup is incomplete
* **Fetch Orders** - Queries Shopify for recent orders using an automated time window
* **Orders Found?** - Conditional branch logic
* **Build Alert Message** - Formats consistent message with downtime metrics and color themes
* **Handle API Error** - Catches and formats Shopify API failures independently
* **Orders Resumed — Reset Counters** - Generates recovery payloads and clears workflow static data
* **Recovery Enabled?** - Checks if a recovery message needs to be sent based on previous downtime and your configuration toggles
* **Slack Enabled?** / **Email Enabled?** - Routes to enabled channels
* **Alert Team via Slack** - Posts structured Slack messages
* **Alert Team via Email** - Sends templated HTML alerts via Gmail
 
---
 
## 🚀 Setup Instructions
 
1. **Credentials:** Connect Shopify (`orders:read`), Slack (`chat:write`), and Gmail (`gmail.send`). **Important:** Open the Slack node and manually select your target channel from the dropdown. 
2. **Config Node:** Open the **Configuration node** and set your preferences:
   * `enableSlackAlert`: Toggle to `true` to enable Slack notifications.
   * `enableEmailAlert`: Toggle to `true` to enable Email notifications.
   * `enableRecoveryNotification`: Toggle to `true` if you want a follow-up message when orders resume.
   * `sendEmailTo`: Enter your target email address (mandatory if email alerts are enabled).
3. **Activate:** Toggle the workflow to `Active` and you're ready to go. It will start checking on schedule.
4. **Testing the Recovery Path (Optional):** To manually simulate a recovery, temporarily delete the expression in the Shopify node's `createdAtMin` field and pick a date in the past. Execute the node so it finds orders and triggers the recovery alert, then paste the default expression back in.
 
---
 
## ⚙️ Customization Ideas
 
* **For Low-Traffic Stores:** Edit the `Build Alert Message` code logic to only send an alert after **3** consecutive failures (useful for low-volume stores).
* **Monitor Specific Order Types:** Filter for paid orders only, or orders with specific tags, to focus on the orders that matter most.
* **On-Call Escalation:** Add a **Twilio** node after the Email node to send an SMS if the downtime exceeds 120 minutes.
 
---
 
## 📋 Requirements

* **n8n Version:** 2.11.3+
* **Persistence:** Requires n8n Workflow Static Data (`$getWorkflowStaticData`) for downtime tracking.
* **Credentials:** Shopify, Slack, and/or Gmail OAuth2.
 
---
 
## ⚠️ Limitations

- **Symptom Detection Only:** This workflow detects the *absence* of orders, not the root cause. It can't tell if your checkout is broken, a payment processor went down, or customers just aren't buying right now.
- **Low Traffic Stores:** If your store naturally goes hours without an order, you will receive false positive alerts unless you increase the Schedule Trigger interval to match your typical order frequency.
	- **Volume Agnostic:** The Shopify fetch node uses `limit: 1`. It does not track order volume or quantity, it only checks if at least one order exists within the timeframe.

## 🔗 Nodes Used

Slack, Shopify, Gmail, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
