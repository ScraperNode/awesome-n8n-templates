# 📊 Summarize Etsy review themes and rank a fix queue with Sheets and CSV

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Free n8n workflow that themes 1–3★ reviews and ranks which listing to fix first. No auto-replies and no Etsy API — you bring a CSV. Default is keyword rules (optional Gemini untested).

## How it works
1. Starts manually and loads configuration for input mode (mock, CSV files, or Google Sheets) and output destination (CSV files or Google Sheets).
2. Pulls reviews from built-in sample data, reads and parses local `reviews*.csv` files, or reads rows from the Google Sheets tab named `Reviews`.
3. Optionally sends up to 40 reviews to the Google Gemini API for theme classification, and falls back to the built-in rules if the Gemini step is skipped or fails.
4. Applies rule-based keyword tagging to classify reviews into shipping, sizing, quality, description, packaging, or other, and flags empty or spammy reviews.
5. Aggregates only low-rated reviews (≤ the configured star threshold) into theme counts and ranks listings into a “Fix Queue” with suggested next actions.
6. Writes four outputs—By Review, Themes, Fix Queue, and Summary—either into corresponding Google Sheets tabs or as CSV files saved to the configured output folder.

## Setup
1. Choose your input mode in the Config step: keep `mode: "mock"` for testing, or provide your own review export via local `reviews*.csv` files (`mode: "files"`) or a Google Sheet `Reviews` tab (`mode: "sheet").
2. If using Google Sheets input or output, add a Google Sheets OAuth credential and replace `PASTE_YOUR_SHEET_ID_HERE` with your spreadsheet ID for the Reviews/By Review/Themes/Fix Queue/Summary tabs.
3. If using file input/output, run on self-hosted n8n with access to the configured `filesFolder` and `outputFolder` paths, and ensure the folders exist and are writable.
4. (Optional) To try Gemini theme classification, set `themeEngine: "gemini"` and add an HTTP Header Auth credential with header name `x-goog-api-key` and your Gemini API key.
5. Review and adjust `minStarsForTheme` and `summaryLanguage` in Config to control which reviews drive the Fix Queue and which language is used for the primary summary.

## Additional info
What it does
- Themes complaints: shipping, sizing, quality, description, packaging, other
- Fix Queue: listings ranked by complaint-review count, with a short "update this…" suggestion
- Four outputs: By Review, Themes, Fix Queue, Summary (EN + ZH)
- Demo mode with built-in fake reviews; CSV / Sheet import structure included

What it does NOT do
- No reply drafts, no sending, no Judge.me / Etsy API connection in v0.1

Honest limits
- Tested with built-in fake reviews so far
- CSV / Google Sheet import and themeEngine=gemini not live-tested by us
- Keywords are mostly English; always human-read before editing listings

Free download:
https://stallkitstudio.gumroad.com/l/review-radar
Store: https://stallkitstudio.gumroad.com

Etsy, n8n and Judge.me are trademarks of their respective owners. Stallkit Studio is not affiliated with or endorsed by them.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Read/Write Files from Disk, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
