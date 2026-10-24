# 📊 Analyze Trustpilot & Sitejabber sentiment with Decodo + Gemini to sheets

> ⚡ **110 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Sign up for Decodo [HERE](https://visit.decodo.com/discount) For Discount

This template scrapes public reviews from Trustpilot and Sitejabber with a Decodo tool, converts findings into a flat, spreadsheet-ready JSON, generates a concise sentiment summary with Gemini, and appends everything to Google Sheets. 

## How it works
1. A Form Trigger collects the target business name or URL submitted by the user as the starting point.
2. The Set node stores business_name, spreadsheet_id, and sheet_id as reusable configuration variables for downstream nodes.
3. An AI Agent orchestrates the Decodo scraping tool and enforces a strict JSON schema, collecting at most 10 reviews per source.
4. Gemini generates a concise sentiment summary and recommendations, noting any missing sources with: "There's no data in this website."
5. A Merge node combines the structured JSON review fields with the Gemini narrative into a single flat output.
6. Google Sheets appends a new row containing all merged data from the previous step.

## Setup
1. Add your Google Sheets, Gemini, and Decodo credentials in the n8n Credential Manager before activating the workflow.
2. Open the Set: Config Variables node and replace (YOUR_SPREADSHEET_ID) and (YOUR_SHEET_ID) with your actual Google Sheets identifiers.
3. In the Google Sheets node, select Define below as the mapping mode and explicitly map each column to its corresponding field.
4. Keep the parser and agent node connections intact and unmodified to guarantee the output remains a flat, appendable JSON structure.
5. Activate the workflow, open the form URL, submit a business name, and verify that a new row is correctly appended to your sheet.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Google Sheets, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
