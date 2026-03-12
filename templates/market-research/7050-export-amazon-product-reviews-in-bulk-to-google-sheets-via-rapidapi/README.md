# 📊 Export Amazon product reviews in bulk to Google Sheets via RapidAPI

> ⚡ **2,273 views** · 📊 [Market Research & Insights](../)

## Description

**What it does**
Pulls up to 700 Amazon reviews per product (recent and top-rated) and writes them straight into a Google Sheet tab you choose.

**Perfect for**
• Brand and product managers tracking sentiment
• Marketplace sellers analysing competitor feedback
• Agencies building product-review dashboards

**Apps used**
RapidAPI Real-Time Amazon Data, Google Sheets, n8n Form Trigger

**How it works**

1. Form Trigger collects brand, product and sheet info.
2. Code node extracts the ASIN and builds 70 API requests (10 pages × star ratings).
3. Split-in-batches loops through the request list, throttled by two Wait nodes.
4. HTTP Request fetches reviews from RapidAPI.
5. IF node drops empty or error responses.
6. Split Out breaks arrays into single reviews.
7. Google Sheets appends every review to the target tab.
8. Loop continues until all pages finish.

**Setup**

1. Fill in **Brand name, Product / Model Name, Amazon Product URL, Tab URL to insert reviews** in the form.
2. Grab your `X-RapidAPI-Key` from RapidAPI → **Add as httpHeaderAuth credential**.
3. Connect Google Sheets OAuth2 and make the spreadsheet **Anyone with the link can edit**.
4. Open Workflow Settings → set timezone if you plan to schedule runs.
5. Hit *Execute workflow* or share the form link.

**Credentials**
• Real-Time Amazon Data (RapidAPI HTTP Header Auth)
• Google Sheets OAuth2

**Limits and notes**
• \~100 RapidAPI calls for the free plan. Plan quota accordingly.
• Assumes Amazon returns 10 pages per star rating; fewer pages skip silently.
• Large sheets may hit Google API write quotas.


**If you have any questions in running the workflow, feel free to reach out to me at my youtube channel:** https://www.youtube.com/@hunyaochong

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
