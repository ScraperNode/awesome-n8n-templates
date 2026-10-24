# 📊 Audit landing page conversions with DeepSeek, Google Sheets, Gmail and Telegram

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Get your landing page roasted by AI, constructively. Submit any URL and this workflow scores your conversions, lists 10 prioritized fixes, and emails the full report. Low scores fire instant Telegram alerts, and every Monday you get a weekly digest of it all.

*Last updated: September 2026.*

## Quick Overview
This workflow collects a landing page URL via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, scrapes and extracts the page text, uses an OpenAI-compatible chat model (deepseek-v4-flash) to generate a CRO score, roast, and fix list, logs results to Google Sheets, emails a report with Gmail, and sends low-score alerts to Telegram plus a weekly email digest.

## How it works
1. Receives a landing page URL and recipient email through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form submission.
2. Normalizes the inputs, validates the URL and email, and sends a Gmail rejection email if the submission is invalid.
3. Fetches the landing page HTML via HTTP, strips it down to clean text, and limits the extracted content size for analysis.
4. Sends the cleaned page content to an OpenAI-compatible chat model (deepseek-v4-flash) to return a JSON audit with an overall score, sub-scores, a roast summary, and 10 prioritized recommendations.
5. Parses the AI JSON, derives a letter grade, formats a plain-text report, and prepares a structured audit log record.
6. Appends the audit record to a Google Sheets “Audits” tab, emails the full report to the submitter via Gmail, and posts a Telegram alert when the score is below 75 before showing a completion message.
7. Every Monday at 9:00, reads the audit log from Google Sheets, computes last-7-days stats, uses the same OpenAI-compatible model to write a short digest, and emails it via Gmail.

## Setup
1. Add an OpenAI API credential for the two AI steps and ensure the selected model (deepseek-v4-flash) is available in your provider/account.
2. Connect Google Sheets OAuth2 credentials and set the spreadsheet document ID and “Audits” sheet name where audit rows are appended and later read for the weekly digest.
3. Connect Gmail OAuth2 credentials and update the recipient addresses used for the audit report, invalid-input notice fallback, and weekly digest email.
4. (Optional) Connect Telegram credentials and update the chat ID used for low-score alerts.
5. Publish the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form and share its URL so users can submit landing page audits.

### Quick Answers
**When do alerts fire?**  
When a page scores below 75. Everything else just gets emailed as a report.  
**What comes every Monday?**  
A digest of the last 7 days of audits, written by the same AI model.  
**How do people submit?**  
Through your published n8n Form URL with their page URL and email.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
