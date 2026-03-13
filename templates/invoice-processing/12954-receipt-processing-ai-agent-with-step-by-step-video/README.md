# 🧾 Receipt Processing AI Agent (with step by step video)

> ⚡ **233 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_rec5dRs6sFpgUZ675.jpg)](https://youtu.be/Vl0wCc9pEGM)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What This Workflow Does

This automation eliminates the tedious task of manually entering receipt data by automatically processing receipt images uploaded to Google Drive. When you drop a new receipt into a monitored folder, the workflow extracts vendor name, date, itemized purchases, and total amount using AI, logs everything to a Google Sheet, and sends you an email confirmation with a formatted summary.

## Key Benefits

- **Save time:** No more manual data entry from receipts
- **Reduce errors:** AI-powered extraction ensures accuracy
- **Stay organized:** All expense data automatically tracked in one spreadsheet
- **Get notified:** Instant email confirmation when receipts are processed

## Common Use Cases

- Personal expense tracking and budgeting
- Small business accounting and bookkeeping
- Reimbursement documentation
- Tax preparation record-keeping

## Setup Requirements

**Accounts needed:**
- Google Drive account (for receipt storage)
- OpenAI account (for AI-powered data extraction)
- Google Sheets account (for data logging)
- Gmail account (for notifications)

**Configuration steps:**

1. **Google Drive:** Connect your account and select the folder where you'll upload receipts
2. **Google Sheets:** Make a copy of the template spreadsheet (link in workflow notes) to your own account and update the Sheet ID in the workflow
3. **Email recipient:** Change the notification email address to your own
4. **AI model:** The workflow uses GPT-4-mini by default, but you can select a different OpenAI model based on your accuracy and cost preferences

The AI Agent is configured to extract data in a strict JSON format with fields for vendor, date (converted to DD/MM/YYYY), itemized purchases, and total amount.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
