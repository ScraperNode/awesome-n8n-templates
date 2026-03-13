# 📱 Automate Instagram influencer contract compliance with Claude AI & Slack alerts

> ⚡ **311 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This enterprise-grade **n8n workflow** automates **influencer contract compliance** for Instagram campaigns — from deadline tracking to breach detection — using **Claude AI**, Instagram API, and smart reminders. It ensures timely deliverables by monitoring posts, sending proactive alerts, and escalating breaches, all with zero manual oversight.


## **Key Features**

* **Daily contract scanning** from Google Sheets
* **Deadline calculations** for approaching or passed dates
* **Automated reminders** via Slack for nearing deadlines
* **Post verification** using Instagram API and **Claude 3.5 Sonnet** for hashtag/description matching
* **Breach detection engine** identifies non-compliant influencers
* **Escalation notifications** to managers on breaches
* **Audit logs** stored in Google Sheets for compliance records
* **Scalable triggers:** Daily schedule or webhook for new contracts


## **Workflow Process**

| Step | Node                                | Description                                              |
| ---- | ----------------------------------- | -------------------------------------------------------- |
| 1    | **Schedule Trigger**                | Runs daily at 9 AM or via webhook (`/influencer-compliance`) |
| 2    | **Get Contracts**                   | Loads influencer contracts from `Contracts` sheet        |
| 3    | **Loop Over Contracts**             | Processes each contract individually                     |
| 4    | **Calculate Deadline Status**       | Computes days to deadline, flags approaching/passed     |
| 5    | **IF Approaching Deadline**         | Branches if within 3 days                                |
| 6    | **Send Reminder (Slack)**           | Notifies influencer/team of upcoming deadline            |
| 7    | **IF Deadline Passed**              | Branches if deadline has passed                          |
| 8    | **Get Influencer Posts**            | Fetches recent posts from influencer's Instagram         |
| 9    | **Check Post Compliance (Claude AI)** | Uses AI to verify if post matches contract requirements |
| 10   | **IF Breach Detected**              | Branches if non-compliant                                |
| 11   | **Notify Breach (Slack)**           | Alerts manager of contract breach                        |
| 12   | **Log Breach**                      | Records breach details in `Logs` sheet                   |
| 13   | **End (Compliant Path)**            | Terminates compliant branches                            |


## **Setup Instructions**

### 1. Import Workflow

* Open **n8n → Workflows → Import from Clipboard**
* Paste the JSON workflow

### 2. Configure Credentials

| Integration       | Details                                            |
| ----------------- | -------------------------------------------------- |
| **Google Sheets** | Service account with spreadsheet access            |
| **Instagram API** | Business access token for fetching media           |
| **Claude AI**     | Anthropic API key for `claude-3-5-sonnet-20241022` |
| **Slack**         | Webhook or OAuth app                               |

### 3. Update Spreadsheet IDs

Ensure your Google Sheets include:

* `Contracts`
* `Logs`

### 4. Set Triggers

* **Webhook:** `/webhook/influencer-compliance` (for real-time updates)
* **Schedule:** Daily at 9:00 AM

### 5. Run a Test

Use **manual execution** to confirm:

* Reminder and breach notifications
* Post compliance checks
* Log entries in sheet


## **Google Sheets Structure**

### **Contracts**

| campaignId | influencerName | influencerUserId | deadline   | requiredHashtag | campaignDescription |
|------------|----------------|------------------|------------|-----------------|---------------------|
| CAMP-001   | InfluencerX    | 1234567890       | 2023-12-31 | #BrandPromo     | Promote new product |

### **Logs**

| campaignId | influencerName | action          | timestamp          | details              |
|------------|----------------|-----------------|--------------------|----------------------|
| CAMP-001   | InfluencerX    | Breach Detected | 2023-10-01T12:00:00Z | Failed to post by deadline |


## **System Requirements**

| Requirement           | Version/Access                                 |
| --------------------- | ---------------------------------------------- |
| **n8n**               | v1.50+ (AI and API integrations supported)     |
| **Claude AI API**     | `claude-3-5-sonnet-20241022`                   |
| **Instagram Graph API**| Business account access token                  |
| **Google Sheets API** | `https://www.googleapis.com/auth/spreadsheets` |
| **Slack Webhook**     | Required for notifications                     |


## **Optional Enhancements**

* Add **email reminders** to influencers directly
* Integrate **Asana/Trello** for task creation on breaches
* Use **advanced AI prompts** for deeper post analysis (e.g., sentiment)
* Connect **Payment APIs (Stripe)** to withhold payments on breaches
* Enable **multi-platform checks** (e.g., TikTok/YouTube)
* Add **reporting dashboard** via Google Data Studio
* Implement **auto-contract updates** from CRM systems


**Result:**
A single automated system that tracks, reminds, and enforces influencer deliverables — **with full AI verification and zero manual work.**


**[Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n automation!**

## 🔗 Nodes Used

Cron, Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
