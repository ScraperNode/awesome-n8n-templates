# 🎫 Reply to property enquiries with Gmail, Google Sheets and GPT-4o

> ⚡ **14 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls a Gmail inbox for new property enquiries, uses OpenAI (GPT-4o) to extract applicant details and draft a personalised reply, matches the enquiry to a property list in Google Sheets, logs each enquiry, and either creates a Gmail draft for approval or auto-sends a safe reply.

## How it works
1. Runs every minute (or manually with a test message) and lists unread messages in Gmail.
2. Deduplicates message IDs, fetches each full email via the Gmail API, and parses headers and body text.
3. Classifies the enquiry source (Rightmove, Zoopla, OnTheMarket, SpareRoom, or website) and drops non-enquiry portal/admin emails.
4. Uses OpenAI to extract structured contact, property, and qualification details, then normalises the data and detects which qualification fields are missing.
5. Reads the Properties tab in Google Sheets to match the enquiry to a property by reference or address, determines availability, and builds a pre-qualification form link or similar-property suggestions.
6. Uses OpenAI to generate a reply body that acknowledges any details already provided and follows the correct call-to-action, then wraps it in a branded HTML email.
7. Appends the enquiry and outcome to the Enquiry Log tab in Google Sheets and either creates a threaded Gmail draft for staff approval or auto-sends the reply and marks the original email as read.

## Setup
1. Add a Gmail OAuth2 credential with access to the mailbox you want to monitor and use it for the Gmail API request nodes (list, fetch, create draft, send, and modify/mark read).
2. Add an OpenAI API credential and ensure the workflow can use the GPT-4o and gpt-4o-mini models.
3. Connect a Google Sheets credential and select your spreadsheet and sheet names for both the Properties reader and Enquiry Log appender.
4. Create a Google Sheet with a Properties tab (including at least ref, address, rent, bedrooms, available_from, status, area, notes) and an Enquiry Log tab with columns for the logged fields used by this workflow.
5. Update the configuration values in the code steps for agency name, application/pre-qualification form base URL, branding/signature details, and whether auto-send is enabled.
6. Optional: Configure Meta WhatsApp Cloud API (phone number ID, approved template, and header auth credentials) if you want the WhatsApp follow-up, or remove the WhatsApp steps.

## Requirements
- A Gmail account (OAuth2) that receives your Rightmove, Zoopla, OnTheMarket, SpareRoom or website enquiry emails
- An OpenAI API key — gpt-4o-mini handles extraction, gpt-4o writes the replies
- A Google Sheet with two tabs: Properties (ref, address, rent, bedrooms, available_from, status, area, notes) and Enquiry Log
- A pre-qualification or application form URL to send applicants to (Google Form, Typeform or your own)
- Optional: Meta WhatsApp Cloud API access with an approved message template for the WhatsApp follow-up

## Customization
- Set your agency name, form URL and the auto-send switch in the Link Properties to Enquiries node
- Edit brand colour, sign-off, contact details and legal footer in the Construct Branded Email node
- Tune the reply tone, structure and house rules in the draft system prompt — it already enforces "never re-ask what the applicant told you"
- Add or adjust enquiry sources in Identify Enquiry Source to match whatever lands in your inbox
- Extend the extraction schema with any extra qualification fields your referencing process needs
- Keep auto-send off for full staff approval via Gmail drafts, or enable it for instant replies to safe, fresh enquiries
- Delete the WhatsApp branch if you're email-only

## Additional info
About the creator: Built and maintained by Ali Amin, founder of IhsanOps (https://ihsanops.ai) — a UK-based AI automation consultancy helping letting agents and property businesses respond to enquiries in seconds instead of hours. This template is based on a production system running for a UK letting agency managing 800+ properties. Ali is an AWS-certified DevOps Engineer building n8n automations and AI systems for UK SMEs — see https://linkedin.com/in/ali-tm-amin. Want it adapted to your agency — CRM integration, voice/phone enquiries, auto-send rules, or your own application form? Email ali@ihsanops.ai or visit https://ihsanops.ai.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
