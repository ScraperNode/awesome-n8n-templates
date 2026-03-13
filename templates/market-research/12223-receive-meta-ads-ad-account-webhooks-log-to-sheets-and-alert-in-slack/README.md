# 📊 Receive Meta Ads ad account webhooks, log to Sheets, and alert in Slack

> ⚡ **65 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

This workflow is a production-ready **Meta Ads Webhook dispatcher** for the **Ad Account** object. It receives webhook deliveries from Meta, returns the required acknowledgement, routes events by `field`, logs them to Google Sheets (separate tabs per event type), and sends a compact Slack notification with counts.

#### **Use Case**
Meta webhooks are powerful, but the “last mile” is usually missing: storing raw events, making them readable, and triggering the next automation reliably. This workflow is ideal if you want to:
- **Centralize all Meta Ads webhook events** in one place (one endpoint, one workflow).
- **Log every event** for auditing and analysis (Google Sheets).
- **Get lightweight alerts** in Slack (count-based, not spammy).
- **Trigger downstream workflows** depending on the webhook type (e.g., Creative Fatigue → replace creatives in the affected ad set).

#### **How it Works**
The workflow is organized into clear blocks:

**1. Webhook endpoint + verification**
- A **Webhook** trigger receives requests from Meta.
- The workflow detects **verification requests** (`hub.mode=subscribe`) and validates the **Verify Token**.
- It responds with the **hub.challenge** value so you can successfully subscribe your webhook in Facebook Developers.

**2. Route by event field**
- For real webhook deliveries (`object=ad_account`), the workflow routes execution by:
  - `creative_fatigue`
  - `ad_recommendations`
  - `ads_async_creation_request`
  - `in_process_ad_objects`
  - `product_set_issue`
  - `with_issues_ad_objects`

**3. Acknowledge every webhook delivery**
- For each branch, the workflow immediately returns a JSON acknowledgement (e.g., `{ "status": "received", "field": "...", "webhook_type": "..." }`), so Meta considers the delivery successful.

**4. Normalize + log to Google Sheets**
- The workflow splits array payloads (Meta can send multiple `entry` items and multiple `changes`).
- Each event type is appended to its own Google Sheets tab (one spreadsheet, multiple sheets), with the raw webhook body also saved for future debugging.

**5. Summarize + notify**
- All event logs are merged and summarized to compute a compact count per `field`.
- A Slack node sends a short message like “New Meta Webhook / Type / Count” with a link to the spreadsheet.

---

### **Setup Instructions**

**1. Create and configure a Meta app**
- Create an app in [Facebook Developers](https://developers.facebook.com/apps/).
- Add the **Webhooks** product.
- Subscribe to the **Ad Account** object.
- Configure:
  - **Callback URL** (your n8n webhook URL)
  - **Verify Token** (must match the value in the workflow)

**2. Configure the Webhook node**
- Set the webhook **path**.
- Use the **Production URL** when you go live.

**3. Connect credentials**
- Connect **Google Sheets** OAuth credentials in all Google Sheets nodes.
- Connect **Slack** credentials and choose your target channel.

**4. Update Google Sheets destinations**
- Set your **Spreadsheet ID** and ensure the expected sheet tabs exist (one per supported webhook field).

**5. Activate**
- Save and activate the workflow.
- Trigger a verification request from Facebook Developers to confirm everything is wired correctly.

---

### **Testing**
To test the dispatcher before going live, use the open-source tool: [meta-ads-webhook-tester](https://github.com/KhatkevichKirill/meta-ads-webhook-tester).

---

### **Further Ideas & Customization**
- **Add Telegram**: duplicate the Slack notification step and send the same summary message to Telegram.
- **Trigger automations**: after routing by `field`, execute another workflow (e.g., Creative Fatigue → fetch affected ad set → rotate creatives).
- **Hardening**: add de-duplication (event IDs), retries, and a dead-letter/error sheet tab for failed log writes.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
