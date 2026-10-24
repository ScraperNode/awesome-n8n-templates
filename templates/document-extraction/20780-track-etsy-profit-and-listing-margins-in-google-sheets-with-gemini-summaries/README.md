# 🔬 Track Etsy profit and listing margins in Google Sheets with Gemini summaries

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Turn your Etsy monthly statement and Order Items CSVs plus a simple cost sheet into a monthly P&L, profit-by-listing flags, and a plain-language summary — without the Etsy API. Optional Gemini rewrite for the summary; otherwise a rule-based summary works with no API key.

## How it works
1. Reads your Etsy Monthly statement CSV, your Order Items CSV, and your own cost sheet. No Etsy API is used.
2. Builds a monthly P&L: sales, refunds, every fee line Etsy shows, COGS, net profit, and margin.
3. Breaks profit down by listing and flags LOSS, LOW_MARGIN, MISSING_COGS, and REFUNDED.
4. Writes a short plain-language summary. The default is a rule-based summary that works with no API key.
5. Optional: if you add your own Gemini key, the summary can be rewritten by Gemini. Otherwise the rule-based summary is used.
6. Demo mode includes built-in sample CSVs so you can test the install before connecting anything.

## Setup
1. You need n8n, either self-hosted Community or n8n Cloud, plus your own Etsy CSV exports. There is no Etsy API connection.
2. A Gemini API key is optional and is used only for the AI summary. Without a key, the rule-based summary still works.
3. So far this has been tested with sample data in Etsy’s export format, not with a real shop’s files.
4. Google Sheets read and write has not been tested by us on a live sheet yet.
5. Always check the numbers before you rely on them for tax or bookkeeping.

## Requirements
- n8n (self-hosted Community or n8n Cloud)
- Your own Etsy CSV exports (no Etsy API)
- Optional: Gemini API key for the AI summary only

## Additional info
By Stallkit Studio — free download: https://stallkitstudio.gumroad.com/l/profit-tracker
Store: https://stallkitstudio.gumroad.com

Etsy, Shopify and n8n are trademarks of their respective owners. Stallkit Studio is not affiliated with or endorsed by them.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Read/Write Files from Disk, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
