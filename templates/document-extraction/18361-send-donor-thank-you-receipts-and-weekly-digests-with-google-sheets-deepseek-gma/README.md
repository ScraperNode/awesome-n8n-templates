# 🔬 Send donor thank-you receipts and weekly digests with Google Sheets, DeepSeek, Gmail and Telegram

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Every donor thanked, every gift receipted, automatically. This workflow watches your Google Sheets donations log, validates new entries, and has AI draft personalized thank-you emails with receipt details. Big gifts get flagged for personal outreach, and Mondays bring a weekly digest.

*Last updated: September 2026.*

## Quick Overview
This workflow watches a Google Sheets donations log, validates new entries, uses DeepSeek (via the OpenAI API) to draft personalized thank-you emails with receipt details, and sends them via Gmail, while notifying the team in Telegram and emailing weekly donation digests.

## How it works
1. Triggers when a new row is added to the Google Sheets “Donations” worksheet (polled every minute).
2. Normalizes the donation data by generating a donation ID, timestamp, and default values, then validates that donor name, donor email, and a positive amount are present.
3. If the row is invalid, sends an alert to Telegram and emails a review notice via Gmail so the sheet can be corrected.
4. If the row is valid, uses a LangChain agent with the DeepSeek chat model and a Google Sheets donor-history tool to generate a JSON thank-you email (tier, subject, body, and major-donor flag).
5. Logs the generated message and donation details to the Google Sheets “ThankYouLog” worksheet and emails the thank-you (including receipt details) to the donor via Gmail.
6. If the donation qualifies as major (AI-flagged or amount ≥ 1,000,000), posts a Telegram alert and emails the executive director via Gmail for personal outreach.
7. Every Monday at 09:00, reads the “ThankYouLog” sheet, calculates weekly donation stats, generates a short AI digest, and sends it via Gmail and Telegram (or sends an all-clear if no donations were logged).

## Setup
1. Connect Google Sheets OAuth credentials for both the Google Sheets trigger and Google Sheets nodes, and set the spreadsheet ID and worksheet names (Donations, DonorHistory, ThankYouLog).
2. Add an OpenAI API credential that can access the DeepSeek model configured in the workflow.
3. Add a Gmail OAuth2 credential and update the recipient addresses used for donor emails and internal notifications.
4. Add a Telegram bot credential and set the target chat ID for invalid-donation, major-donor, and weekly-digest messages.
5. Ensure the Donations sheet includes donor_name, donor_email, amount, currency, campaign, gift_message, and source columns, and populate DonorHistory with donor records keyed by email.

### Quick Answers
**What counts as a major donor?**  
AI-flagged gifts or amounts of 1,000,000+, triggering a Telegram alert plus an email to the executive director.  
**What if a row is invalid?**  
Telegram alerts the team and Gmail sends a review notice so the sheet gets corrected.  
**When is the digest sent?**  
Every Monday at 09:00, or an all-clear message when no donations were logged.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
