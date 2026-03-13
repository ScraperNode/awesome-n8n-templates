# 💬 Generate research-backed cold email icebreakers with web scraping, OpenAI and Google Sheets

> ⚡ **70 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Deep Multiline Icebreaker — AI-driven research + personalized cold outreach


Deep Multiline Icebreaker automates high-quality, research-led outreach. Feed it a list of leads (emails + websites) and a short product brief via the built-in form; the workflow scrapes each company's site, extracts meaningful page content, uses GPT to produce concise page abstracts, aggregates insights, and then generates tailored, multi-line cold email bodies (JSON). Final outreach rows are appended automatically to a Google Sheet so you can review, sequence, or plug into your outreach stack.

This template is built for SDRs, growth folks, and agencies who want dramatically better reply rates by replacing generic blasts with short, highly-specific icebreakers that reference subtle site signals. It’s opinionated (focuses on non-obvious details and concise, credible tone) but easy to tweak — prompts, output format, and the Google Sheet mapping are all editable inside n8n.

# How it works 
1. **Form trigger** — you submit product details, target designation, location, etc.
2. **Leads fetch** — the workflow calls an external leads scraper (Apify act) to retrieve potential contacts.
3. **Filter & normalize** — only rows with website + email proceed; links are normalized (relative/absolute handling).
4. **Scrape & convert** — homepage and linked pages are fetched and converted to Markdown for clean input.
5. **Summarize (GPT)** — each page is summarized into a two-paragraph abstract.
6. **Aggregate & generate** — abstracts are aggregated and GPT generates a tailored multi-line icebreaker JSON (subject + body).
7. **Append to Google Sheets** — resulting outreach content + lead metadata is appended to your sheet.

# Nodes of interest you can edit
- `On form submission1`
- `Leads Scraper1`
- `Scrape Home1`
- `Summarize Website Page1`
- `Generate Multiline Icebreaker1`
- `Add Row1`

# Quick Setup Guide
👉 [Demo & Setup Video](https://drive.google.com/file/d/1HpkWNCC0YC_z2Yag41Hf68o54jQTnZJy/view?usp=sharing)
👉 [Sheet Template](https://docs.google.com/spreadsheets/d/1X9Y1VR-aqzoEV56jlCsPVMlOt5zCl_MUAvs1TwgnZic/edit?usp=sharing)
👉 [Course](https://www.udemy.com/course/n8n-automation-mastery-build-ai-powered-enterprise-ready/?referralCode=2EAE71591D3BEB80F2CC)

# What you’ll need (credentials)
- OpenAI API key (used by `Summarize Website Page1` and `Generate Multiline Icebreaker1`).
- Google Sheets OAuth (write access for `Add Row1`).
- Apify (or your leads-source) API token for `Leads Scraper1` (the template calls an Apify act).
- Optional: outbound HTTP access from your n8n host to target websites.

# Recommended settings & best practices
- **Limit batch sizes** (the template uses `Limit1` set to 3 by default) — ramp the `maxItems` up slowly to respect rate limits and token costs.
- **Prompt tweaks** — open the `Generate Multiline Icebreaker1` prompt to tune tone, cost framing, or add product-specific selling points.
- **Deduplication** — `Remove Duplicate URLs1` is included; keep it ON to avoid repeated scraping.
- **Privacy** — don’t store PII longer than necessary; if you store outreach drafts, ensure your Google Sheet access is restricted.
- **Cost control** — set `temperature` lower (0–0.6) for more consistent outputs and monitor your OpenAI usage.

# Customization ideas
- Swap GPT model name or change prompt to produce shorter cold SMS or LinkedIn messages.
- Replace Apify with your own lead source (CSV upload, CRM query, or Airtable).
- Add an approval step (Slack/Email) before rows are appended to Google Sheets.
- Add a follow-up sequence generator that writes 2–3 follow-up messages per lead.

# Troubleshooting quick tips
- If pages return empty abstracts, check `Request web page for URL1` and network access / user-agent restrictions.
- If outputs are malformed JSON, open the `Generate Multiline Icebreaker1` node and validate the JSON output option.
- If Google Sheets fails, re-authorize the Google Sheets credential and ensure the sheet ID & sheet name are correct.

# Tags / Suggested listing fields
`outreach`, `lead-gen`, `sales-automation`, `openai`, `web-scraping`, `google-sheets`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, Filter, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
