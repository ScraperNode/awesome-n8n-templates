# 🎣 Match new property listings to buyer leads with Gemini, Gmail and Sheets

> ⚡ **18 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
When a new listing arrives, this workflow scans your buyer database, scores every lead against the listing using Gemini AI, sends personalized match emails to the top buyers, sends WhatsApp messages, logs results to Google Sheets, notifies the agent in Gmail and Slack, and posts to the Facebook Page. 

## How it works
1. A new property listing arrives via webhook, from a competitor monitor, an MLS feed, a manual submission, or any system that can send a POST request.
2. A two-stage matching process begins. Stage 1 instantly filters your buyer lead database by hard criteria — budget range (with configurable flexibility), property type, and contact cooldown — using a Code node with no AI calls needed.
3. Filtered candidates are passed to Gemini AI in a single call. Gemini scores each candidate as Strong Match, Possible Match, or Poor Match based on budget fit, location alignment, property type, and timeline urgency — and drafts a personalized email for every Strong and Possible Match.
4. Personalized match emails are sent to each matched buyer referencing their specific preferences. Every email includes property details, a listing link, and a Calendly booking link so buyers can schedule a viewing instantly.
5. If the buyer has a phone number on file, an optional WhatsApp message is sent alongside the email.
6. Every matched buyer's Last Contacted date updates, enforcing a configurable re-contact cooldown so no lead receives too many messages.
7. Every match logs permanently to a Property Match History Google Sheet, building a record of which listings generated buyer interest over time.
8. The agent receives one summary email listing every buyer contacted, their match score, and the AI reasoning behind each match.
9. When two or more Strong Matches are found, an optional Facebook Page post publishes a property spotlight automatically.
10. An optional Slack alert fires alongside the agent email for immediate mobile notification.

## Setup
1. Configure the webhook URL in your listing source and ensure the payload includes at least listingAddress and listingPrice (plus any optional fields like beds, baths, neighborhood, and listingUrl).
2. Connect credentials for Google Sheets, Gmail, and Google Gemini (PaLM) and fill in the Google Sheets document IDs and sheet names for both the buyer database and the match history log.
3. Ensure your buyer database sheet includes the expected columns (at minimum Active, Email, Budget Min, Budget Max, Property Type, and Last Contacted) and that Active is set to TRUE for leads you want to include.
4. Update agent and routing defaults in the normalization step (AGENT_EMAIL, AGENT_NAME, CALENDLY_USERNAME, CALENDLY_EVENT_SLUG, MAX_MATCHES, and DAYS_SINCE_CONTACT).
5. (Optional) Connect a Slack credential and set the target channel (for example #property-matches).
6. (Optional) Connect WhatsApp Business Cloud credentials and provide valid phone numbers for leads, and/or set your Facebook Page ID and Page Access Token in the Facebook Graph API request to enable posting.

## Requirements
- Google Sheets setup: Two sheets are required. Sheet 1 — Buyer Lead Database — with these columns: leadId, Lead Name, Email, Phone, Budget Min, Budget Max, Preferred Location, Property Type, Bedrooms Min, Timeline, Lead Score, Last Contacted, Notes, Active, Facebook Lead ID. Sheet 2 — Property Match History — with these columns: Match Date, Listing Address, Listing Price, Lead Name, Lead Email, Match Score, Match Reason, Email Sent, WhatsApp Sent, Listing URL, Days on Market.
- Buyer Lead Database population: The workflow reads buyer leads from the Buyer Lead Database sheet. Only leads marked Active = TRUE are scanned per run. Three ways to populate it — manual entry directly into the sheet using the template column structure; via the Facebook Lead Ads to AI-Qualified Follow-Up template (link in Additional Info), which can be configured to write qualified Facebook buyer leads into this sheet automatically; or via any webhook source such as a CRM, website form, or lead tool that sends a POST request.
- Calendly setup (optional but recommended): No Calendly API credentials required. Create a free Calendly account, create an event type named Property Viewing, and update CALENDLY_USERNAME and CALENDLY_EVENT_SLUG in the Normalize Listing Details Code node. Your booking URL will be calendly.com/YOUR_USERNAME/property-viewing. If left as placeholder values, the booking link is omitted from match emails.

## Customization
- Change MAX_MATCHES in the Normalize node to limit the number of buyers contacted per listing — the default is 5.
- Change DAYS_SINCE_CONTACT to adjust the re-contact cooldown window — default is 14 days, set to 7 for more aggressive follow-up or 30 for more conservative.
- Change BUDGET_FLEXIBILITY to adjust how far over budget a listing can be and still qualify — the default is 0.10 (10%), set to 0 for strict matching or 0.20 for loose matching.
- Edit the Gemini system prompt in Score Candidates & Draft Emails to adjust scoring criteria, email tone, or translate to another language.
- Enable the Facebook Page post branch by connecting the Post to Facebook Page node from the Strong Matches Threshold Met IF node — requires Meta Page Access Token and Page ID.
- Extend the buyer database with additional columns (e.g., preferred school district, garage requirement) and add corresponding filter logic in the Stage 1 Filter Code node.
- Chain this template with the Competitor Listing Monitor template (link in Additional Info) — when the template detects a Hot listing, it can fire this template's webhook automatically via an HTTP Request node.

## Additional info
Facebook Lead Ads to AI-Qualified Follow-Up Template Link:
https://n8n.io/workflows/17258-qualify-facebook-lead-ads-and-send-follow-ups-with-gemini-gmail-and-sheets/
Competitor Listing Monitor Template Link:
https://n8n.io/workflows/17890-monitor-and-score-new-real-estate-listings-with-browseract-gemini-gmail-slack-and-sheets/

Two-stage matching design. The Stage 1 filter (Code node) eliminates non-viable candidates instantly using hard criteria — no AI calls, no rate limit risk. Only viable candidates proceed to Gemini, keeping every run fast regardless of database size. A database of 200 leads typically reduces to 5–15 candidates before any AI processing.

Calendly booking link — no API needed. The booking link is constructed from two string values in the Normalize node (username and event slug) — no Calendly API credentials or node required. Update the two strings and the link works immediately.

Contact cooldown. The Last Contacted date updates after every match email send. The Stage 1 filter excludes leads contacted within the configured cooldown window (default 14 days). This prevents the same buyer from receiving multiple match emails in quick succession across different listing runs.

Facebook Page post threshold. The Facebook Page post only fires when two or more Strong Matches are found — preventing a post for every listing regardless of match quality. Adjust the threshold in the Strong Matches Threshold Met IF node.

Competitor Listing Monitor Template integration. This template accepts any webhook POST with a listing payload. The Competitor Listing Monitor Template can automatically trigger this template when it detects a Hot listing — adding one HTTP Request node to the Template's Hot listing branch, pointing to this template's webhook URL, creates a fully automated listing detection → buyer matching pipeline.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
