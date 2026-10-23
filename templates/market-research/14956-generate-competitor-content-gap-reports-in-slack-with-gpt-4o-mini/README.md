# 📊 Generate competitor content gap reports in Slack with GPT-4o-mini

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit your page URL, a competitor's page URL, and a target keyword using a simple form. The workflow automatically scrapes both pages, strips all HTML, and sends the full comparison to GPT-4o-mini for analysis. Within seconds, a structured 6-section content gap report lands in your Slack channel — ready to act on. Built for SEO teams, content strategists, and agency analysts who need fast, repeatable competitor insights.

---

## What This Workflow Does

- **Parallel page scraping** — Fetches your page and the competitor's page simultaneously so you get results faster, not one site at a time
- **HTML cleaning** — Strips all scripts, ads, and navigation clutter from both pages, leaving only the actual content GPT-4o-mini needs to compare
- **Content gap identification** — AI pinpoints exactly which topics, subtopics, and questions your page is missing that the competitor already covers
- **Competitive advantage mapping** — Surfaces what your page has that the competitor lacks, so you know what to protect and promote
- **Priority action list** — Delivers 5 concrete, ranked improvements specific to your page — not generic SEO advice
- **Token-efficient processing** — Caps each page at 8,000 characters so every run stays fast and API costs stay predictable
- **Slack report delivery** — Posts the full 6-section analysis with business name, keyword, both URLs, and run date directly to your team channel — ready to act on or forward to a client

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Slack workspace with OAuth2 app configured

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import
2. **Connect your OpenAI credential** — Go to node **10. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection
3. **Connect your Slack credential** — Go to node **12. Slack — Send Gap Report** → click the credential dropdown → select OAuth2 → follow the Slack OAuth flow to connect your workspace
4. **Set your Slack channel** — In node **12. Slack — Send Gap Report**, set the channel field to the channel name where reports should be posted (e.g. `#seo-reports`)
5. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Submit Page URLs** → open it in a browser to test

&gt; ⚠️ **Bot-Protected Sites** — Some sites return a 403 Forbidden error when scraped. If this happens, open nodes **3. HTTP — Scrape Your Page** and **4. HTTP — Scrape Competitor Page**, add a header with Name = `User-Agent` and Value = `Mozilla/5.0 (compatible; n8n-bot/1.0)` in both nodes.

---

## How It Works (Step by Step)

**Step 1 — Form: Submit Page URLs**
You open the form URL in a browser and fill in four fields: your page URL, the competitor's page URL, the target keyword, and your business name. Submitting the form kicks off the entire workflow automatically.

**Step 2 — Set: Extract Form Fields**
All four form inputs are mapped to clean named variables. A run timestamp is automatically added so every report is dated. These variables flow into every downstream step.

**Step 3 — HTTP: Scrape Your Page (parallel)**
An HTTP request fetches the full HTML content of your page. This step runs at the same time as Step 4, so both pages are retrieved simultaneously without waiting.

**Step 4 — HTTP: Scrape Competitor Page (parallel)**
An identical HTTP request fetches the competitor's page in parallel with Step 3. Both pages are ready at the same time.

**Step 5 — Code: Clean Your Page HTML**
A code step removes all script tags, style tags, and HTML markup from your page. The result is plain readable text, trimmed to 8,000 characters to keep AI costs low and responses fast.

**Step 6 — Code: Clean Competitor Page HTML**
The same cleaning process runs on the competitor's page. This step also carries forward all the form variables (keyword, URLs, business name, run date) so nothing is lost in the merge.

**Step 7 — Merge: Combine Both Pages**
Both cleaned page texts — yours and the competitor's — flow into a merge step that combines them into a single pipeline for the next step.

**Step 8 — Code: Combine Page Data**
A code step safely joins both items into one clean object. If either page failed to scrape, it uses a fallback message instead of crashing the workflow.

**Step 9 — AI Agent: Gap Analyzer**
GPT-4o-mini receives both page texts, the target keyword, business name, and both URLs. It produces a plain-text 6-section analysis: keyword usage comparison, topics your page is missing, topics you have that the competitor lacks, content depth and quality comparison, five priority actions ranked by impact, and a quick 3-sentence verdict.

**Step 10 — OpenAI: GPT-4o-mini Model**
This is the language model powering the AI Agent. It is configured with a temperature of 0.4 for consistent, factual analysis and a max token limit of 1,500 to keep reports concise.

**Step 11 — Set: Prepare Slack Message**
All report fields are assembled into a single clean object: the AI analysis, both URLs, target keyword, business name, and run date. This is the complete payload that goes to Slack.

**Step 12 — Slack: Send Gap Report**
The full report is posted to your Slack channel in a formatted message. It includes the business name, keyword, run date, both URLs, the full 6-section AI analysis, and a footer noting the report was generated by n8n + GPT-4o-mini.

---

## Key Features

✅ **Parallel scraping** — Both pages are fetched at the same time, not one after the other, saving you time on every run
✅ **Auto HTML stripping** — Scripts, styles, and all tags are removed automatically — no manual cleanup needed
✅ **Token budget control** — Each page is hard-capped at 8,000 characters so API costs stay predictable
✅ **Fallback handling** — If a page fails to scrape, the workflow continues and notes the failure rather than crashing
✅ **6-section structured report** — Every report follows the same format so results are easy to compare across competitors and dates
✅ **Slack delivery with metadata** — Reports arrive with business name, keyword, run date, and both URLs for full context
✅ **Plain text output** — No markdown symbols in the AI analysis, making it easy to paste directly into a doc or client report
✅ **One-form trigger** — The whole workflow starts with a single form submission — no coding, no manual steps

---

## Customisation Options

**Change the text limit per page** — In nodes **5. Code — Clean Your Page HTML** and **6. Code — Clean Competitor Page HTML**, change `.substring(0, 8000)` to a higher number (e.g. 12000) if you want deeper analysis on long-form pages. Note this will increase GPT token usage.

**Add email delivery** — After node **11. Set — Prepare Slack Message**, add a Gmail or SMTP node to also send the report by email. Use the same `gapReport` variable for the email body.

**Save reports to Google Sheets** — Add a Google Sheets node after the Slack node to log every run: business name, keyword, date, competitor URL, and a summary of the verdict section.

**Schedule weekly competitor checks** — Replace the form trigger with a Schedule trigger and a Set node with hardcoded URLs and keywords to automatically run gap analysis every Monday morning.

**Expand the AI report sections** — In node **9. AI Agent — Gap Analyzer**, edit the prompt to add a Section 7 covering suggested internal links, or a Section 8 comparing schema markup signals.

---

## Troubleshooting

**OpenAI credential not working:**
- Confirm you added the API key in node **10. OpenAI — GPT-4o-mini Model**, not elsewhere
- Check that your OpenAI account has available credits
- Make sure you are using a key with access to GPT-4o-mini (not a restricted key)

**Scraping returns a 403 or empty result:**
- Add a User-Agent header to both **3. HTTP — Scrape Your Page** and **4. HTTP — Scrape Competitor Page**
- Header Name: `User-Agent`, Value: `Mozilla/5.0 (compatible; n8n-bot/1.0)`
- Some enterprise or Cloudflare-protected sites cannot be scraped — try the mobile version of the URL instead

**Slack message not arriving:**
- Confirm the OAuth2 credential in node **12. Slack — Send Gap Report** is connected and authorised
- Check that the channel name is correct and the bot has been invited to that channel
- In Slack, go to the channel → click the channel name → Integrations → confirm the n8n app is listed

**Report is too short or generic:**
- The page text may have been mostly scripts with little readable content — check the cleaned text in node **5** or **6** by running a test
- Try a different URL format (e.g. without trailing slash) or the AMP version of the page
- Increase the max token setting in node **10** from 1500 to 2000 for more detailed output

**Form submission not triggering the workflow:**
- Make sure the workflow is set to Active (toggle in the top right of the workflow editor)
- Copy the Form URL fresh from node **1. Form — Submit Page URLs** after activating — inactive workflows generate a test URL, not a live one

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
