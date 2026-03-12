# 🎬 Generate Google ad copy automatically with Claude 3.5, Channable & Relevance AI

> ⚡ **233 views** · 🎬 [Content Creation & Video](../)

## Description

---

# 🚀 **Channable + Google Ads + Relevance AI: Scalable AI Workflow for Automated Ad Copy Generation & Publishing**

---

## 🧩 Overview

This workflow automates the **entire ad creation process for Google Ads** by integrating product data, AI-generated copy, compliance checks, and publication into your marketing pipeline.

It connects **n8n**, **Relevance AI**, **Google Sheets**, and optionally **Channable** to:

* Fetch product data from your catalog
* Generate Google Text Ad headlines and descriptions using Relevance AI
* Validate character limits and ensure Google Ads compliance
* Route non-compliant ads to a Slack review channel
* Save compliant, ready-to-publish ads in Google Sheets
* Notify your marketing team automatically after each generation cycle

---

## 🧠 Key Benefits

✅ 100% automated ad copy pipeline
✅ AI-generated, human-quality Google Ads text
✅ Built-in compliance verification (Google Ads policy)
✅ Google Sheet integration for team review
✅ Daily automatic schedule (zero manual effort)
✅ Slack alerts for QA and transparency
✅ Modular design — extendable for Shopping and Performance Optimization
✅ Scalable for 10 → 10,000+ product ads

---

## ⚙️ System Architecture

### Tech Stack

* **n8n** – Automation Orchestrator
* **Relevance AI** – AI tools for copy generation and policy compliance
* **Google Sheets** – Data storage and team collaboration
* **Slack** – Real-time alerts and notifications
* *(Optional)* **Channable** – Product feed integration

---

## 🧭 Workflow Logic

```
Daily Trigger (00:00)
   ⬇️
1️⃣ Get Product Feed (Channable or custom API)
   ⬇️
2️⃣ Split Into Batches (50 products each)
   ⬇️
3️⃣ Generate Ad Copy (Relevance AI tool → Claude 3.5 prompt)
   ⬇️
4️⃣ Validate Character Limits (JS node: max 30 headline / 90 description)
   ⬇️
5️⃣ Compliance Check (Relevance AI agent → Google Ads policies)
   ⬇️
6️⃣ IF Compliant → CSV / Google Sheets
    ↳ ❌ Non-Compliant → Slack Alert
   ⬇️
7️⃣ Aggregate Batches + Generate CSV
   ⬇️
8️⃣ Save to Google Sheets (“Generated Ads” tab)
   ⬇️
9️⃣ Slack Notification → Summary Report
```

---

## 📋 Environment Variables

Set these in **n8n → Settings → Variables → Add Variable**

Copy-paste from your `ENVIRONMENT_VARIABLES_CORRECTED.txt`.

Includes:

* ✅ Relevance AI region, API key, tool & agent IDs
* ✅ Google Ads, Merchant Center, and Sheets credentials
* ✅ Slack channel name
* ✅ Optional Channable endpoint

### Example:

```bash
RELEVANCE_AI_API_URL=https://api-f1db6c.stack.tryrelevance.com/latest
RELEVANCE_TOOL_AD_COPY_ID=bueQG8io04dw
RELEVANCE_AGENT_COMPLIANCE_ID=xT29mQ4QKsl
GOOGLE_SHEET_ID=1q2w3e4r5t6y7u8i9o0p
SLACK_CHANNEL=#google-ads-automation
```

---

## 🏗️ Node-by-Node Breakdown

| Node                                   | Description                                     | Endpoint / Logic                                                              |
| -------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| 🕓 **Schedule Trigger**                | Runs daily at 00:00                             | Cron `0 0 * * *`                                                              |
| 📦 **Get Product Feed**                | Pulls product data from Channable or custom API | `GET {{$env.CHANNABLE_API_URL}}/v1/projects/{{$env.PROJECT_ID}}/items`        |
| 🧮 **Split Into Batches**              | Processes 50 products at a time                 | Avoids rate limits                                                            |
| ✍️ **Generate Ad Copy (Relevance AI)** | Calls AI tool for each product                  | `POST {{$env.RELEVANCE_AI_API_URL}}/tools/google_text_ad_copy_generator/run`  |
| 🔍 **Validate Character Limits**       | JS validation (≤30 headline / ≤90 description)  | Truncates smartly                                                             |
| 🧠 **Compliance Check Agent**          | Verifies Google Ads compliance                  | `POST {{$env.RELEVANCE_AI_API_URL}}/agents/google_ads_compliance_checker/run` |
| ⚖️ **IF Compliant**                    | Routes APPROVED vs REJECTED                     | `"contains 'APPROVED'"`                                                       |
| 💾 **Format for CSV**                  | Formats compliant ads for export                | Maps ID, headline, desc, URLs                                                 |
| 📊 **Aggregate Batches**               | Combines all results                            | Merges datasets                                                               |
| 🧱 **Generate CSV File**               | Converts JSON → CSV                             | Escaped string-safe format                                                    |
| 📑 **Save to Google Sheets**           | Saves reviewed ads                              | Sheet: `Generated Ads`                                                        |
| 📢 **Slack Notification (Success)**    | Posts completion summary                        | Shows ad count, timestamp                                                     |
| 🚨 **Slack Alert (Non-Compliant)**     | Notifies team for review                        | Includes issues, category                                                     |

---

## 🔑 API Authentication Setup

### 🔹 Relevance AI

* Create “HTTP Header Auth” credential

  ```
  Header Name: Authorization
  Header Value: Bearer {{$env.RELEVANCE_AI_API_KEY}}
  ```

### 🔹 Google Sheets

* Credential type: “Google OAuth2 API”
* Scopes:

  ```
  https://www.googleapis.com/auth/spreadsheets
  https://www.googleapis.com/auth/drive.file
  ```

### 🔹 Slack

* Create Slack App → Add Bot Token Scopes → `chat:write`
* Paste token in n8n “Slack API” credential.

### 🔹 (Optional) Channable

* Header Auth:

  ```
  Bearer {{$env.CHANNABLE_API_TOKEN}}
  ```

---

## 🧩 Google Sheet Template

**Sheet name:** `Generated Ads`

**Columns:**

```
| product_id | headline | description | final_url | display_url | generated_at |
```

Optional: Add `compliance_status` or `notes` columns for QA.

---

## ⚙️ Testing Procedure

1. **Manual Trigger:** Disable the schedule → click “Execute Workflow”.
2. **Batch Size:** Start small (3 products).
3. **Expected Output:**

   * ✅ Ad copy generated
   * ✅ Character limits validated
   * ✅ Slack alerts for rejects
   * ✅ Google Sheet filled

Check logs in **Executions** for errors.
Re-enable the cron trigger after successful validation.

---

## 🧾 Example Output

| product_id | headline           | description                                   | final_url                                        | display_url | generated_at         |
| ---------- | ------------------ | --------------------------------------------- | ------------------------------------------------ | ----------- | -------------------- |
| 12243      | “Eco Bamboo Socks” | “Soft, breathable comfort for everyday wear.” | [https://shop.com/socks](https://shop.com/socks) | shop.com    | 2025-10-22T00:00:00Z |

---

## 📬 Slack Alert Templates

**✅ Success Notification**

```
✅ *Google Ads Generation Complete*

📊 *Summary:*
• Total Ads Generated: 50
• Saved to Google Sheets: Generated Ads
• Timestamp: 2025-10-22T00:00:00Z
```

**⚠️ Non-Compliant Alert**

```
⚠️ Non-Compliant Ad Flagged

Product: Bamboo Socks
Issues:
- Contains “Free Shipping”
- Headline too long

Timestamp: 2025-10-22T00:00:00Z
```

---

## 🧰 Maintenance & Monitoring

| Frequency | Task                             |
| --------- | -------------------------------- |
| Daily     | Check Slack alerts for rejects   |
| Weekly    | Review ad performance metrics    |
| Monthly   | Update Relevance AI prompts      |
| Quarterly | Refresh API tokens and variables |

---

## 📊 Success Metrics

* ✅ Compliance approval rate: **&gt;85%**
* 🚫 Disapproval rate: **&lt;5%**
* 📈 CTR improvement: **+15–25%**
* ⏱️ Time saved: **10–15 hours/week**
* 🌐 Scalable: **1,000+ ads/day**

---

## 🪜 Next Steps

1. Deploy and monitor for 7 days.
2. After 30 days → activate **Workflow 2: Performance Optimization Loop**.
3. Extend to **Shopping Feed Optimization**.
4. Add **multi-language generation** using Relevance AI.
5. Integrate **Google Ads API publishing** (full automation).

---

## 🔗 Resources

* [n8n Docs](https://docs.n8n.io)
* [Relevance AI Docs](https://relevanceai.com/docs)
* [Google Ads API](https://developers.google.com/google-ads/api)
* [Merchant API](https://developers.google.com/merchant/api)
* [Channable Help](https://help.channable.com)

---

## 🎉 Conclusion

You now have a **production-ready, scalable AI-powered ad generation system** integrating
**Channable**, **Google Ads**, and **Relevance AI** — built entirely on **n8n**.

This delivers:

* 💡 AI creativity at scale
* ✅ Google Ads policy compliance
* ⚙️ Hands-free daily automation
* 📊 Transparent reporting and collaboration

&gt; Start small → validate → scale to 10,000+ ads per day.
&gt; Within weeks, you’ll have a **self-learning, always-on ad pipeline** driving consistent performance.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
