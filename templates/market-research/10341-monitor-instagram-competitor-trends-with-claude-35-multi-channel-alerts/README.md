# 📊 Monitor Instagram competitor trends with Claude 3.5 & multi-channel alerts

> ⚡ **268 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

This enterprise-grade **n8n workflow** automates **competitor monitoring** on Instagram — from post fetching to AI-driven strategy alerts — using **Claude AI**, Instagram API, and multi-channel notifications. It tracks trends, analyzes performance, and delivers actionable insights via WhatsApp and email, keeping your team ahead with zero manual effort.


## **Key Features**

* **Daily competitor scanning** from Google Sheets
* **Post performance metrics** (engagement rate, trends) calculated automatically
* **AI-powered insights** using **Claude 3.5 Sonnet** for content and engagement strategies
* **Dual-channel alerts:** WhatsApp (Twilio) and email for instant delivery
* **Audit logs** in Google Sheets for historical trends
* **Scalable triggers:** Daily schedule or webhook for ad-hoc checks


## **Workflow Process**

| Step | Node                                | Description                                              |
| ---- | ----------------------------------- | -------------------------------------------------------- |
| 1    | **Schedule Trigger**                | Runs daily at 10 AM or via webhook (`/competitor-alert`) |
| 2    | **Get Competitor List**             | Loads competitors from `Competitors` sheet               |
| 3    | **Loop Over Competitors**           | Processes each competitor to avoid API limits            |
| 4    | **Get Competitor Posts**            | Fetches last 10 posts via Instagram Graph API            |
| 5    | **Calculate Performance Metrics**   | Computes avg engagement and trend using Code node        |
| 6    | **Generate AI Insights (Claude AI)**| Analyzes data for 3 strategic bullet-point insights      |
| 7    | **Send Email Alert**                | Emails detailed report to team                           |
| 8    | **Send WhatsApp Alert (Twilio)**    | Sends concise alert via WhatsApp                         |
| 9    | **Log Alert**                       | Records metrics and insights in `AlertsLog` sheet        |
| 10   | **End Workflow**                    | Terminates execution                                     |


## **Setup Instructions**

### 1. Import Workflow

* Open **n8n → Workflows → Import from Clipboard**
* Paste the JSON workflow

### 2. Configure Credentials

| Integration       | Details                                            |
| ----------------- | -------------------------------------------------- |
| **Google Sheets** | Service account with spreadsheet access            |
| **Instagram API** | Business access token for media fetching           |
| **Claude AI**     | Anthropic API key for `claude-3-5-sonnet-20241022` |
| **Twilio**        | Credentials for WhatsApp messaging                  |
| **SMTP/Email**    | SMTP or Gmail for email alerts                      |

### 3. Update Spreadsheet IDs

Ensure your Google Sheets include:

* `Competitors`
* `AlertsLog`

### 4. Set Triggers

* **Webhook:** `/webhook/competitor-alert` (for on-demand runs)
* **Schedule:** Daily at 10:00 AM

### 5. Run a Test

Use **manual execution** to confirm:

* Post fetching and metrics calculation
* AI insights generation
* WhatsApp/email delivery and sheet logging


## **Google Sheets Structure**

### **Competitors**

| competitorName | competitorUserId | industryFocus |
|----------------|------------------|---------------|
| BrandX         | 1234567890       | Fashion       |

### **AlertsLog**

| competitor    | avgEngagement | trend  | insights                          | timestamp          |
|---------------|----------------|--------|-----------------------------------|--------------------|
| BrandX         | 75.5           | Rising | - Bullet 1...                     | 2023-10-01T12:00:00Z |


## **System Requirements**

| Requirement           | Version/Access                                 |
| --------------------- | ---------------------------------------------- |
| **n8n**               | v1.50+ (AI and messaging integrations supported)|
| **Claude AI API**     | `claude-3-5-sonnet-20241022`                   |
| **Instagram Graph API**| Business account access token                  |
| **Twilio API**        | WhatsApp-enabled phone number                   |
| **Google Sheets API** | `https://www.googleapis.com/auth/spreadsheets`  |
| **SMTP**              | For email (e.g., Gmail OAuth)                   |


## **Optional Enhancements**

* Add **visual charts** (e.g., engagement trends via Google Charts)
* Integrate **Slack** for team-wide alerts
* Use **advanced metrics** like reach/impressions via Instagram Insights API
* Connect **CRM (HubSpot)** to tag competitors
* Enable **multi-platform monitoring** (e.g., TikTok)
* Add **threshold-based alerts** (e.g., only if engagement &gt;20% increase)
* Export insights to **Notion** or **Airtable** for strategy docs


**Result:**
A single automated system that monitors competitors, uncovers trends, and arms your team with AI strategies — **delivered via WhatsApp and email with zero manual work.**


**[Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n automation!**

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, HTTP Request, Twilio

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
