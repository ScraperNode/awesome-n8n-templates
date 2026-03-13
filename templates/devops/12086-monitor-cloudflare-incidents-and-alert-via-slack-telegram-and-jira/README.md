# ⚙️ Monitor Cloudflare incidents and alert via Slack, Telegram, and Jira

> ⚡ **67 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Cloudflare Incident Monitoring & Escalation Workflow
## 🚀 Try Decodo — Web Scraping & Data API (Coupon: **TRUNG**)
![Decodo Logo](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/decodo-logo-black.jpg)
**Decodo** is a powerful public data access platform offering managed web scraping APIs and proxy infrastructure to collect structured web data at scale. It handles proxies, anti-bot protection, JavaScript rendering, retries, and global IP rotation—so you can focus on data, not scraping complexity.
**Why Decodo**
- Managed **Web Scraping API** with anti-bot bypass & high success rates  
- Works with JS-heavy sites; outputs JSON/HTML/CSV  
- Easy integration (Python, Node.js, cURL) for eCommerce, SERP, social & general web data
**🎟️ Special Discount**
Use coupon **`TRUNG`** to get the **Advanced Scraping API** plan — ~**23,000 requests for ~$5**.

## Who this workflow is for
For **DevOps, SRE, IT Ops, and Platform teams** running production traffic behind Cloudflare who need reliable incident awareness without alert fatigue.
Use it if you want:
- Continuous Cloudflare incident monitoring
- Clear severity-based routing
- Automatic escalation into JIRA
- Clean Slack & Telegram notifications
- Deduplicated, noise-controlled alerts
## What this workflow does
This workflow polls the **Cloudflare Status API**, detects unresolved incidents, scores their impact, and routes them to the right channels.
High-impact incidents are escalated to JIRA.
Lower-impact updates are notified (or skipped) to reduce noise.
## How it works (high level)
1. Runs on a fixed schedule (e.g. every 5 minutes)
2. Fetches current Cloudflare incidents
3. Stops early if no active issues exist
4. Normalizes and scores incidents (severity, impact, affected service)
5. Deduplicates previously-alerted incidents
6. Builds human-readable notification payloads
7. Routes by impact:
   - **High** → create JIRA incident + notify
   - **Low** → notify or suppress
8. Sends alerts to Slack and Telegram
## Requirements
- Decoco Scrapper API credential
- n8n (self-hosted or Cloud)
- Cloudflare Status API (public)
- Slack bot (`chat:write`)
- Telegram bot + chat ID
- JIRA project with issue-create permission
- Optional LLM credentials (summarization/classification)
## Notes
- All secrets are stored in **n8n Credentials**
- Workflow is **idempotent** and safe to rerun
- No assumptions about root cause or remediation
Built for production-grade incident visibility with **n8n**.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Jira Software, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
