# 🎬 🛍️ Google Shopping feed optimization with Channable, Relevance AI & Merchant API

> ⚡ **430 views** · 🎬 [Content Creation & Video](../)

## Description

# 🛍️ Google Shopping Feed Optimization with Channable + Relevance AI + Google Merchant API

### 🚀 Automate, Optimize & Sync Your Product Feeds at Scale

---

## 🧩 Overview

This workflow automates **Google Shopping Feed Optimization** using **Channable**, **Relevance AI**, and the **Google Merchant API**.
It runs daily, enhancing product titles and descriptions, validating feed quality, assigning custom campaign labels, and syncing the optimized feed with Google Merchant Center.

The system ensures every product listing meets Google’s content standards, is SEO-friendly, and ready for high-performance Shopping campaigns.

---

## 🧠 Key Benefits

✅ Automated daily product feed optimization
✅ AI-enhanced titles and descriptions (via Relevance AI)
✅ Google Merchant API integration (latest version)
✅ Quality scoring and error detection before sync
✅ Custom campaign labels for segmented bidding
✅ Slack alerts for issues and daily summaries
✅ 100% no-code deployment with scalable batch processing

---

## ⚙️ System Architecture

| Component                     | Purpose                                                  |
| ----------------------------- | -------------------------------------------------------- |
| **n8n**                       | Workflow automation and orchestration                    |
| **Channable**                 | Product feed source (can replace with any eCommerce API) |
| **Relevance AI**              | AI title and description optimization                    |
| **Google Merchant API (NEW)** | Product publishing and validation                        |
| **Slack**                     | Alerts and reporting                                     |
| **Cron Trigger**              | Daily schedule (6 AM sync)                               |

---

## 🧭 Workflow Logic (Visual Summary)

**Daily Trigger (06:00 AM)**
⬇️
**1️⃣ Get Product Feed (Channable)**
Fetches product data for optimization.
⬇️
**2️⃣ Data Quality Checks**
Validates titles, GTINs, pricing, categories, and descriptions. Assigns quality scores.
⬇️
**3️⃣ Split Products**
Breaks the `all_products` array into single items for AI processing.
⬇️
**4️⃣ Optimize Title (Relevance AI Tool)**
Enhances product titles for SEO, clarity, and Google compliance.
⬇️
**5️⃣ Generate Description (Relevance AI Tool)**
Creates 300–400 character, benefit-focused product descriptions.
⬇️
**6️⃣ Assign Custom Labels**
Adds five segmentation labels: margin, performance, seasonality, stock level, and category.
⬇️
**7️⃣ Aggregate Products**
Combines optimized items into one unified dataset.
⬇️
**8️⃣ Upload to Merchant Center (NEW Merchant API)**
Publishes products via Google’s latest `/products` endpoint.
⬇️
**9️⃣ Check Product Status**
Verifies successful uploads and identifies disapprovals.
⬇️
**🔍 Analyze Product Issues**
Summarizes errors and warnings from Merchant API results.
⬇️
**⚖️ IF Disapprovals Found**
→ 🚨 Send Slack alert for issues
→ ✅ Otherwise, post success summary

---

## 🧩 Environment Variables

Set these under
**n8n → Settings → Variables → Add Variable**

| Variable                            | Example                                            | Purpose                          |
| ----------------------------------- | -------------------------------------------------- | -------------------------------- |
| `CHANNABLE_API_URL`                 | `https://api.channable.com/v1`                     | Channable API base               |
| `CHANNABLE_COMPANY_ID`              | `12345`                                            | Company ID in Channable          |
| `CHANNABLE_PROJECT_ID`              | `abcd`                                             | Project ID                       |
| `FEED_ID`                           | `shopping-feed`                                    | Feed endpoint                    |
| `RELEVANCE_AI_API_URL`              | `https://api-f1db6c.stack.tryrelevance.com/latest` | Relevance AI API base            |
| `RELEVANCE_TOOL_TITLE_OPTIMIZER_ID` | `tQy48Ld8n0zp`                                     | Relevance AI Title Tool ID       |
| `RELEVANCE_TOOL_DESCRIPTION_ID`     | `hJ9bT01r8Lqf`                                     | Relevance AI Description Tool ID |
| `MERCHANT_API_URL`                  | `https://merchantapi.googleapis.com/content/v2.1`  | Google Merchant API base         |
| `MERCHANT_ACCOUNT_ID`               | `123456789`                                        | Merchant Center account ID       |
| `SLACK_CHANNEL`                     | `#shopping-feed-automation`                        | Slack channel for reports        |

---

## 🔑 Credential Setup

| Service             | Type             | Setup                                                          |
| ------------------- | ---------------- | -------------------------------------------------------------- |
| **Relevance AI**    | HTTP Header Auth | Header → `Authorization: Bearer {{$env.RELEVANCE_AI_API_KEY}}` |
| **Channable**       | HTTP Header Auth | Header → `Authorization: Bearer {{$env.CHANNABLE_API_TOKEN}}`  |
| **Google Merchant** | Google OAuth2    | Scopes: <br>• `https://www.googleapis.com/auth/content`        |
| **Slack**           | Slack API        | Add `chat:write` Bot Token Scope                               |

---

## 🧱 Node-by-Node Breakdown

| Node                          | Description                              | Key Action                                                  |
| ----------------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| **Daily Trigger (6 AM)**      | Starts workflow every morning            | `cron: 0 6 * * *`                                           |
| **Get Product Feed**          | Fetches products from Channable          | `GET {{$env.CHANNABLE_API_URL}}/.../feeds/{{$env.FEED_ID}}` |
| **Data Quality Checks**       | Validates GTINs, titles, pricing, images | Returns `quality_score` + `all_products`                    |
| **Split Products**            | Splits array into individual products    | Operation: `splitOut`, Field: `all_products`                |
| **Optimize Title**            | Calls Relevance AI title tool            | `/tools/{{$env.RELEVANCE_TOOL_TITLE_OPTIMIZER_ID}}/trigger` |
| **Generate Description**      | Calls Relevance AI description tool      | `/tools/{{$env.RELEVANCE_TOOL_DESCRIPTION_ID}}/trigger`     |
| **Assign Custom Labels**      | Adds 5 Smart Bidding Labels              | Margin, performance, seasonality, stock, category           |
| **Aggregate Products**        | Combines optimized product data          | For batch upload                                            |
| **Upload to Merchant Center** | Posts via NEW Merchant API               | `/accounts/{id}/products`                                   |
| **Check Product Status**      | Retrieves upload results                 | Lists disapproved or pending items                          |
| **Analyze Product Issues**    | Summarizes product disapprovals          | Returns `disapproval_count` and `warnings`                  |
| **IF Disapprovals Found**     | Conditional routing                      | Sends alert or success message                              |
| **Slack - Alert**             | Sends error summary to Slack             | Includes product name and issue detail                      |
| **Slack - Success Summary**   | Posts daily completion message           | Includes counts and optimizations applied                   |

---

## 🧰 Testing Procedure

1️⃣ Temporarily disable the cron schedule
2️⃣ Run manually using **“Execute Workflow”**
3️⃣ Start with 3–5 products
4️⃣ Check:

* Slack → Success message
* Google Merchant → Updated products
* n8n Execution logs → No failed nodes

Once validated → **Re-enable the 6 AM trigger**

---

## 🧾 Example Output

**Slack Success Message**

```
✅ Shopping Feed Optimization Complete

📊 Summary:
• Total Products Processed: 135
• Products with Quality Issues: 12
• Disapprovals: 0
• Warnings: 3

🎯 Optimizations Applied:
• Titles optimized for SEO
• Descriptions enhanced
• Custom labels added

API: NEW Merchant API (merchantapi.googleapis.com)
Next Run: Tomorrow 6 AM
Timestamp: 2025-10-22T06:00:00Z
```

**Slack Alert Message**

```
🚨 Merchant Center Disapprovals Alert

Total Disapprovals: 5
Total Warnings: 2

Critical Issues:
• Product: Wireless Headphones (ID: 4829)
  Issue: Missing GTIN
• Product: Yoga Mat Eco (ID: 7350)
  Issue: Invalid price

Action Required: Review disapproved products in Merchant Center.
Timestamp: 2025-10-22T06:00:00Z
```

---

## 📊 Success Metrics

| Metric                       | Goal                |
| ---------------------------- | ------------------- |
| Feed approval rate           | ≥ 90%               |
| AI optimization success rate | ≥ 95%               |
| Manual review reduction      | 80%                 |
| Daily automation uptime      | 99.9%               |
| Scalable throughput          | 5,000+ products/day |

---

## 🧩 Maintenance Schedule

| Frequency     | Task                           |
| ------------- | ------------------------------ |
| **Daily**     | Monitor Slack alerts           |
| **Weekly**    | Check disapproval logs         |
| **Monthly**   | Refresh API tokens             |
| **Quarterly** | Tune AI prompts and thresholds |

---

## 🪜 Next Steps

✅ Deploy workflow in production
📈 Connect to your performance dashboard
🌍 Extend to multi-language feeds (Relevance AI translations)
💡 Add conversion optimization loop in Google Ads

---

## 🔗 References

* [n8n Documentation](https://docs.n8n.io)
* [Relevance AI Documentation](https://relevanceai.com/docs)
* [Google Merchant API Docs](https://developers.google.com/merchant/api)
* [Channable Help Center](https://help.channable.com)

---

### 🎉 Conclusion

You now have a **production-grade, AI-driven Shopping Feed Optimization workflow** built on:

* **Channable** for structured data ingestion
* **Relevance AI** for content intelligence
* **Google Merchant API** for publishing
* **n8n** as the automation engine

💡 **Result:** A fully autonomous product feed system that self-improves daily, keeping your listings compliant, optimized, and performing at scale.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
