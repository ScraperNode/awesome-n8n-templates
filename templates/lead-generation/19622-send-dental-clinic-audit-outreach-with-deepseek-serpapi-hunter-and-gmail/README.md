# 🎣 Send dental clinic audit outreach with DeepSeek, SerpAPI, Hunter and Gmail

> ⚡ **30 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Dental clinic leads found, vetted, and emailed without a spreadsheet marathon. This workflow searches Google Maps through SerpAPI every Monday morning, checks each clinic for both a phone number and a website, discovers work emails with Hunter, and lets DeepSeek write the outreach before Gmail sends it.

*Last updated: September 2026.*

## Quick Overview
This workflow runs twice every Monday to find dental clinic leads via SerpAPI Google Maps search, discover work emails with Hunter, generate personalized outreach using DeepSeek, then send emails via Gmail, log results to Google Sheets, and notify your team and owner through Telegram.

## How it works
1. Runs every Monday morning on a schedule and searches Google Maps for “dental clinic” in the configured city using SerpAPI.
2. Splits the Google Maps results into individual clinics, normalizes fields (name, address, phone, website, rating, reviews), and keeps only clinics that have both a phone number and a website.
3. Looks up up to five emails for each clinic’s website domain using Hunter, merges the email results back onto the clinic records, and routes clinics without emails to a “Skipped” Google Sheets tab.
4. Uses DeepSeek (via the OpenAI node) to score each lead and generate a short, personalized patient-acquisition audit outreach email plus a one-line Telegram summary.
5. Sends the outreach email via Gmail, appends the lead details (including score and angle) to a “Leads” Google Sheets tab, and posts the Telegram alert.
6. Runs again Monday evening to read the week’s logged leads from Google Sheets, uses DeepSeek to produce a short digest with a top pick, and sends the digest by Gmail and Telegram.

## Setup
1. Add credentials for SerpAPI, Hunter, Gmail OAuth2, Google Sheets OAuth2, and Telegram Bot API.
2. Self-host [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) (or otherwise support community nodes) and install the SerpAPI community node used for the Google Maps search.
3. Create a Google Sheet with “Leads” and “Skipped” tabs and update all Google Sheets nodes with your spreadsheet ID.
4. Replace the Telegram chat ID placeholder and set the digest recipient email address (owner@example.com) in the Gmail digest step.
5. Optionally update the target city, search query, sender name, and offer details in the configuration step before activating the workflow.

### Quick Answers
**Which clinics make the cut?**
Only clinics that have both a phone number and a website. Clinics with no emails found are routed to the Skipped tab instead of being contacted.

**How many emails are looked up per clinic?**
Up to five, found by Hunter against the clinic's website domain and merged back onto the clinic record.

**What does DeepSeek write?**
A lead score, a short personalized patient-acquisition audit email, and a one-line Telegram summary for each lead.

**Where do the results go?**
The outreach goes out by Gmail, the lead details including score and angle are appended to the Leads tab, and a Telegram alert is posted. A Monday evening run reads the week's logged leads and sends a digest with a top pick by Gmail and Telegram.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Hunter, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
