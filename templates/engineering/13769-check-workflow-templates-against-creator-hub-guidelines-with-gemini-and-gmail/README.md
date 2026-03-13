# ⚒️ Check workflow templates against Creator Hub guidelines with Gemini and Gmail

> ⚡ **16 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Who is this for

Template creators who want to validate their n8n workflows against the official Creator Hub approval criteria before submitting. Useful for both new and verified creators looking to reduce rejection rates.

## What this workflow does

This workflow scrapes the latest approval guidelines from four n8n Creator Hub Notion pages, generates a structured pass/fail checklist using Gemini AI, then reviews your uploaded workflow JSON against every criterion. The results are delivered as a formatted HTML email report with a score and specific fixes.

## Setup

1. Add a **Google Gemini (PaLM) API** credential for criteria generation, file upload, and review.
2. Add a **Gmail OAuth2** credential for sending the results email.
3. Activate the workflow and open the generated form URL.

## Requirements

- Google Gemini API key (used for three separate calls: criteria generation, file uploads, and final review)
- Gmail account with OAuth2 access enabled

## How to customize

- Change the Gemini model in the "Google Gemini for criteria generation" and "Review workflow against criteria" nodes.
- Edit the review prompt in the "Review workflow against criteria" node to adjust scoring weight or add custom checks.
- Replace the Gmail node with another email service or a Discord/Slack webhook for different delivery methods.

## Important disclaimer

This workflow provides AI-generated feedback based on n8n Creator Hub guidelines available as of February 2026. The review results are **not a guarantee** of approval or rejection — actual decisions are made by the n8n review team. Guidelines and criteria may change over time. Always check the latest official information on the [n8n Creator Hub](https://n8n.notion.site/n8n-Creator-hub-7bd2cbe0fce0449198ecb23ff4a2f76f) before submitting your template.

## 🔗 Nodes Used

HTTP Request, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
