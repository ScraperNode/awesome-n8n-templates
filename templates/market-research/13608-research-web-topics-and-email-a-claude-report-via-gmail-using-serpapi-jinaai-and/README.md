# 📊 Research web topics and email a Claude report via Gmail using SerpApi, Jina.ai and Firecrawl

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Submit a research topic through a form and receive a professionally styled executive report in your inbox — fully automated, with built-in scraping resilience.

The workflow searches Google via SerpApi, scrapes each result with Jina.ai (free, no key needed), and uses Claude to extract key findings. If a page is blocked by a CAPTCHA or login wall, it automatically retries with Firecrawl. Blocked sources are gracefully skipped after two attempts. Once all sources are processed, Claude synthesises a structured executive report and delivers it as a styled HTML email via Gmail.

## How it works

1. A web form collects the research topic, number of sources (5–7), and recipient email
2. SerpApi searches Google and returns a buffer of results (2× requested + 3 to survive domain filtering)
3. Junk domains are filtered out automatically (Reddit, YouTube, Twitter, PDFs, etc.)
4. Each URL is processed one at a time in a serial loop:
   - **Round 1 — Jina.ai**: free Markdown scraper, no API key required
   - Claude checks the content — if it's a CAPTCHA or wall, it returns `RETRY_NEEDED`
   - **Round 2 — Firecrawl**: paid fallback scraper retries the blocked URL
   - If still blocked, the source is marked as unavailable and the loop continues
5. All extracted findings are aggregated and Claude writes a structured executive report (Executive Summary, Key Findings, Detailed Analysis, Data & Evidence, Conclusions, Sources)
6. The report is converted to styled HTML (with tables, headings, and lists) and emailed to the recipient

## Setup steps

### Required credentials

| Service | Where to get it | Where to paste it |
|---|---|---|
| SerpApi | [serpapi.com](https://serpapi.com) — free tier: 100 searches/month | `SerpApi Search` node → query param `api_key` |
| Firecrawl | [firecrawl.dev](https://www.firecrawl.dev) — free tier: 500 pages/month | `Firecrawl (Fallback)` node → `Authorization` header |
| Anthropic | n8n credentials → Anthropic API | Connect to: `Claude Extractor`, `Claude Re-Analyzer`, `Claude Synthesizer` |
| Gmail | n8n credentials → Gmail OAuth2 | Connect to: `Send Gmail` |

### Error handler (optional)

The workflow includes a built-in error handler that captures the failed node name, error message, and execution URL. To activate it: **Workflow Settings → Error Workflow → select this workflow**. Add a Slack or Gmail node after `Format Error` to receive failure alerts.

## Nodes used

- **n8n Form Trigger** — collects topic, source count, and recipient email
- **HTTP Request** × 3 — SerpApi (Google Search), Jina.ai (primary scraper), Firecrawl (fallback scraper)
- **Code** × 6 — URL filtering, response normalisation, prompt assembly, HTML rendering
- **Split In Batches** — serial loop (one URL at a time, prevents rate limit collisions)
- **IF** × 2 — CAPTCHA/block detection after each scrape attempt
- **Wait** — 3-second pause before Firecrawl retry
- **Basic LLM Chain** × 3 — page analysis (×2) and report synthesis (×1), all powered by Claude
- **Aggregate** — collects all per-URL findings before synthesis
- **Gmail** — sends the final HTML report
- **Error Trigger + Set** — error handler sub-flow

## Notes

- Jina.ai is **free** and works without an API key for most public pages
- Firecrawl is only called when Jina is blocked — most runs won't consume Firecrawl credits
- SerpApi fetches `numSources × 2 + 3` results to ensure enough survive domain filtering
- Claude model is set to `claude-sonnet-4-5` — swap to any Anthropic model in the three Claude nodes
- The HTML email renders markdown tables, headings, lists, and bold correctly in Gmail

## 🔗 Nodes Used

HTTP Request, Gmail, Basic LLM Chain, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
