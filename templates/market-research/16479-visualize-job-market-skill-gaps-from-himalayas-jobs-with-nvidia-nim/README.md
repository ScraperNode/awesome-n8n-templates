# 📊 Visualize job-market skill gaps from Himalayas jobs with NVIDIA NIM

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Turn a job search into a measured system. This workflow scrapes live job posts, uses an LLM to extract the skills each one is asking for, compares that demand against the skills you list, and serves the result as a live radar page.

## How it works
1. 🌐 Open the webhook URL → the run starts.
2. ♻️ Cache gate — if nothing changed since last time, the saved page is returned instantly. Otherwise it recomputes.
3. 📥Fetch jobs from a free, no-auth remote-jobs feed (Himalayas) — a wide recent window, every field, no company list.
4. 🎯 Filter & rank by your keywords (title hits weighted over description), newest as tie-break, capped to keep the LLM call managable.
5. 🤖 Extract (LLM) — Sends each job posting to an OpenAI-compatible chat completions API to extract seniority and a structured list of must-have vs nice-to-have skills.
6. 🧠 Score — each demanded skill is "have" if it appears in your skills text, else "gap"; the score is demand-weighted coverage.
7. 📊 Render & serve — the radar as a self-contained HTML page straight back to your browser.

## Setup
1. Add an HTTP Header Auth credential for your OpenAI-compatible LLM endpoint (for example `Authorization: Bearer <API_KEY>`) and set the LLM URL/model values in the configuration.
2. Edit the “Desired job config” values (keywords, maxJobs, feedPages/feedPerPage, llmUrl, llmModel) to fit your role and usage limits.
3. Paste your resume/tools/skills as free text in “Your Skills” so the workflow can mark skills as covered vs gaps.
4. Activate the workflow, copy the webhook Production URL, open it in a browser, and use `?refresh=1` when you want to bypass the cache.

## Additional info
🎛️ Good to know
- Refreshes are stable — the page only recomputes when you edit the keywords or skills, when the daily cache expires, or when you add `?refresh=1` to the URL.
- Job-neutral — keywords that literally appear in postings (engineer, python, sales, nurse) work best; very abstract terms fall back to the recent feed.
- Cost is bounded — one LLM call per job, capped by `maxJobs` (default 25), and only on a cache miss.
- Want a public, always-on page instead of on-demand? Route the rendered HTML to static hosting (GitHub Pages, etc.) after `Render`.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
