# 👥 Automated resume tailoring with Telegram Bot, LinkedIn & OpenRouter AI

> ⚡ **306 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow lets you effortlessly tailor your resume for any job using Telegram and LinkedIn. Simply send a LinkedIn job URL or paste a job description to the Telegram bot, and the workflow will:

Extract the job information (using optional proxy if needed)

Fetch your resume in JSON Resume format (hosted on GitHub Gist or elsewhere)

Use an OpenRouter-powered LLM agent to automatically adapt your resume to match the job requirements

Generate both HTML and PDF versions of your tailored resume

Return the PDF file and shareable download links directly in Telegram

The workflow is open-source and designed with privacy in mind. You can host the backend yourself to keep your data entirely under your control. It requires a Telegram Bot, a public JSON Resume, and an OpenRouter account. Proxy support is available for LinkedIn scraping.

Perfect for anyone looking to quickly customize their resume for multiple roles with minimal manual effort!

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
