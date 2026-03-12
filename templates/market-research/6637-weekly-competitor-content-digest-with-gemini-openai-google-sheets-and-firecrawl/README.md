# 📊 Weekly competitor content digest with Gemini & OpenAI, Google Sheets, and Firecrawl

> ⚡ **937 views** · 📊 [Market Research & Insights](../)

## Description

**Who is this template for?**
This workflow is perfect for competitive‑intel analysts, product managers, content marketers, and anyone who tracks multiple company blogs or news sources. If you need a weekly snapshot of fresh, on‑topic articles—without wading through dozens of tabs—this template is for you.

**What does it do?**
The workflow reads a curated list of candidate URLs from Google Sheets, filters out duplicates and off‑topic pages with an AI agent, scrapes the surviving links, generates three‑sentence summaries, logs the results back to Sheets, and delivers a polished HTML digest to your inbox every week.

**Why is it useful?**
Instead of manually opening competitor links, checking for relevance, copying highlights, and pasting them into reports, this automation does the grunt work for you. It turns scattered URLs into a searchable knowledge base and a ready‑to‑share email, freeing you to focus on insights and strategy—not housekeeping.

**How does it work?**
A Sunday‑morning cron trigger kicks things off. The workflow pulls links from the Input Links tab, compares them to the existing Summary tab, and passes fresh candidates to an AI “bouncer” that keeps only blog posts, tutorials, news, and product updates. Firecrawl then scrapes each page; Gemini 2.5‑Flash and OpenAI condense the content into title, author, date, and summary. The structured data is appended to your Summary sheet and formatted into a company‑grouped HTML digest, which lands in your email before the workweek starts.



**Set up steps**

1. Clone the workflow
- Import the JSON into your n8n Cloud workspace.

2. Create the Google Sheet
- Make a new spreadsheet with two tabs: Input Links and Summary (names must match).
- In Input Links, add columns Company, Page Type, and Link (or rename to match the node mapping).
- Leave Summary blank—the workflow will populate it.
- Copy the Sheet URL; you’ll paste it into two Google Sheets nodes.


3. Add credentials (n8n ▸ Credentials)
- Google Sheets OAuth2 – Authorise with the Google account that owns the spreadsheet.
- Gmail OAuth2 – Authorise the Gmail account that should send the digest.
- Firecrawl HTTP Header Auth – Set Authorization: Bearer &lt;YOUR_FIRECRAWL_API_KEY&gt;.


4. Point nodes to your Sheet
- Open each Google Sheets node (Input Links, Read_Url_Summary_Tool, Append row in sheet, Get row(s) in sheet).
- Paste the Document ID (found in the Sheet URL) and select the correct tab (Input Links or Summary).

5. Update email recipients
- In the Send a message (Gmail) node, replace the sample addresses with your own distribution list.


6. Adjust scheduling (optional)
- Double‑click the Schedule Trigger node and change the cron expression if you prefer a different day/time.


7. Tune AI models (optional)
- OpenAI o4‑mini and Gemini 2.5‑Flash nodes default to cost‑efficient settings. Feel free to switch models or tweak temperature to suit your tone.


8. Test with a single URL
- Add one row in Input Links, then execute the workflow manually (▶ Run).
- Verify that a new row appears in Summary and an email lands in your inbox.


9. Go live
- Activate the workflow (toggle in top bar).
- Confirm the green status badge and wait for the next scheduled run.

Tip: The Firecrawl Free tier limits you to ~10 requests/min. If you scale beyond that, raise the batching interval in both Firecrawl nodes or upgrade your Firecrawl plan.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
