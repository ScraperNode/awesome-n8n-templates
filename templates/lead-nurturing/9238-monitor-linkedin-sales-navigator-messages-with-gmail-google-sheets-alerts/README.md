# 💬 Monitor LinkedIn Sales Navigator messages with Gmail & Google Sheets alerts

> ⚡ **59 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description
Never miss a qualified LinkedIn Sales Navigator message again. This automation monitors your Gmail for LinkedIn notifications, cross-references senders with your lead database in Google Sheets, and instantly sends you categorized email alerts. Stay on top of high-value conversations in real time. 🚀

## What This Template Does
- Monitors Gmail inbox for LinkedIn Sales Navigator notifications. 📧
- Extracts sender names from LinkedIn email headers. 🔍
- Fetches your lead database from Google Sheets (organized by industry or domain). 📊
- Cleans and standardizes lead names and categories. 🧹
- Merges LinkedIn senders with your lead database. 🔀
- Matches senders to known leads and retrieves their categories. 🎯
- Sends email alerts when a matched lead contacts you, showing name + category. 📬

## Key Benefits
- Respond faster with instant notifications when qualified leads send messages. ⚡
- Prioritize outreach with industry-based categorization. ✅
- Reduce manual inbox checking—automated 24/7 monitoring. ⏱️
- Ensure no missed opportunities from valuable prospects. 💡
- Scales effortlessly across industries and large lead lists. 📈

## Features
- Gmail fetch node with LinkedIn notification filter. 📥
- Sender name extraction and cleanup for accuracy. ✂️
- Google Sheets integration for lead database. 🔗
- Name cleaning to remove dropdown artifacts like "Select...". 🧼
- Data merge node combining LinkedIn senders and sheet leads. 🔄
- Matching logic with case-insensitive comparison. 🧠
- Gmail node for sending categorized alert emails. ✉️

## Requirements
- n8n instance (cloud or self-hosted). 🧰
- Gmail account with LinkedIn notifications enabled. 📧
- Google Sheet named (e.g., “Edtech”) with columns Name and Category, shared with n8n Google account. 📑
- Gmail account credentials configured in n8n. 🔑

## Target Audience
- Sales reps working in LinkedIn Sales Navigator. 📈
- Agencies tracking multiple industries and lead lists. 🤝
- Founders and B2B startups who rely heavily on LinkedIn messaging. 🚀
- Lead management teams needing structured alerts for fast responses. 🧭

## Step-by-Step Setup Instructions (Concise)
- Connect your Gmail account to n8n. 🔐
- Update the Google Sheets node with your lead database (Document ID + sheet name). 📋
- Test workflow with the manual trigger to fetch sample notifications. ▶️
- Replace manual trigger with a Gmail trigger for real-time alerts. ⏱️
- Update the recipient email in the alert node to your own address. 📧
- Enable the workflow and let it run continuously. 🚦

## Security Best Practices
- Keep your lead database shared only with the n8n Google account. 🔒
- Use Gmail API credentials stored securely in n8n, not hardcoded. 🛡️
- Validate sender names before merging with leads to prevent mismatches. ✅
- Regularly update your Google Sheet to keep categories accurate. 🗂️

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
