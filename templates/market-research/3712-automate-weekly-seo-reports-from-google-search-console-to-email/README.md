# 📊 Automate weekly SEO reports from Google Search Console to email

> ⚡ **4,433 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does
This n8n workflow connects to Google Search Console to fetch SEO performance data (clicks, impressions, CTR, and average position) for the last 7 days.  
It formats the results into a clean weekly summary and automatically sends it to your email inbox every Monday morning.

Ideal for:
- Website owners
- Bloggers
- SEO consultants
who want to track site performance over time without manual reporting.

---

## Setup steps

1. Replace `YOUR_SITE_URL` in the HTTP Request node with your verified domain from Google Search Console.
2. Connect your Google OAuth2 credentials to the HTTP Request node.
3. Set up your SMTP credentials in the "Send Email" node.
4. Adjust the recipient email address and subject line if necessary.
5. *(Optional)* Customize the Function node to include more queries or format the report as a PDF.

**Estimated setup time**: ~10 minutes

Sticky notes are included in the workflow canvas to guide you step-by-step.

---

## Technologies used
- Google Search Console API
- SMTP Email Node
- n8n Function Node
- n8n HTTP Request Node
- n8n Sticky Notes

## 🔗 Nodes Used

Cron, Function, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
