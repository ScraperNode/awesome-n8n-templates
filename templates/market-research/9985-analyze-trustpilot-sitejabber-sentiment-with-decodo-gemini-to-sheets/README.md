# 📊 Analyze Trustpilot & Sitejabber sentiment with Decodo + Gemini to sheets

> ⚡ **97 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Analyze Trustpilot & Sitejabber sentiment with Decodo + Gemini to Sheets

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

This template scrapes public reviews from **Trustpilot** and **Sitejabber** with a Decodo tool, converts findings into a **flat, spreadsheet-ready JSON**, generates a concise sentiment summary with **Gemini**, and appends everything to **Google Sheets**. It’s ideal for reputation snapshots, competitive analysis, or lightweight BI pipelines that need structured data and a quick narrative.

## Who’s it for?
Marketing teams, growth analysts, founders, and agencies who need repeatable review collection and sentiment summaries without writing custom scrapers or manual copy/paste.

## How it works
1. A **Form Trigger** collects the *Business Name or URL*.
2. **Set (Config Variables)** stores `business_name`, `spreadsheet_id`, and `sheet_id`.
3. The **Agent** orchestrates the Decodo tool and enforces a **strict JSON schema** with at most **10 reviews per source**.
4. **Gemini** writes a succinct summary and recommendations, noting missing sources with: “There’s no data in this website.”
5. A **Merge** node combines JSON fields with the narrative.
6. **Google Sheets** appends a row.

## How to set up
1. Add **Google Sheets**, **Gemini**, and **Decodo** credentials in Credential Manager.
2. Replace `(YOUR_SPREADSHEET_ID)` and `(YOUR_SHEET_ID)` in **Set: Config Variables**.
3. In **Google Sheets**, select **Define below** and map each column explicitly.
4. Keep the parser and agent connections intact to guarantee flat JSON.
5. Activate, open the form URL, submit a business, and verify the appended row.

## 🔗 Nodes Used

Google Sheets, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
