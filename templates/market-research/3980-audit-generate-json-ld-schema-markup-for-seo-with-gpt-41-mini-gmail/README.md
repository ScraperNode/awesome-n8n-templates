# 📊 Audit & generate JSON-LD schema markup for SEO with GPT-4.1-mini + Gmail

> ⚡ **514 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Schema Markup Generator**
Automatically audit and optimize your site’s JSON-LD structured data and email a step-by-step implementation guide.

---

**What It Does**

* Collects a website URL & email via form
* Extracts existing JSON-LD, identifies gaps
* Generates optimized schema markup (GPT-4.1-mini)
* Builds an HTML before/after guide with action items
* Emails the full implementation instructions

---

**Prerequisites**

* n8n instance (self-hosted, Desktop, or Cloud)
* Gmail OAuth2 credentials
* OpenRouter API key (for GPT-4.1-mini)

---

**Quick Setup**

1. **Gmail**: Add OAuth2 credential → select in “Send Email” node
2. **OpenRouter**: Store API key → link in “Schema Markup Agent” node
3. **Form**: Configure fields `websiteUrl` & `emailAddress` in your Webhook/Form node

---

**Customization**

* **AI Prompt**: Tweak system message to focus on specific schema types or output style
* **Email Template**: Modify HTML header/footer or add sections

---

**Troubleshooting & Limits**

* Monitor OpenRouter rate limits and Gmail send quotas
* Ensure target sites allow scraping for schema extraction

## 🔗 Nodes Used

Gmail, AI Agent, Auto-fixing Output Parser, Structured Output Parser, Code Tool, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
