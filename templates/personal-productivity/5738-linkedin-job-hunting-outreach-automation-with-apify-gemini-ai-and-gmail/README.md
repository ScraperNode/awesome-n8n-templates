# ⚡ LinkedIn job hunting & outreach automation with Apify, Gemini AI, and Gmail

> ⚡ **3,547 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

**This n8n workflow automates the process of collecting job and decision-maker data, crafting AI-generated referral messages, and drafting them in Gmail—all using a combination of Apify, Google Sheets, LLMs, and email APIs.**

## Use cases
1. Auto-sourcing job postings from LinkedIn via Apify
2. Identifying decision-makers at relevant companies 
3. Auto-drafting custom referral request messages using AI
4. Exporting structured data to Google Sheets and drafting Gmail messages for outreach

## Good to know
- You can customize the filtering logic to target specific cities or companies.
- Message creation uses the Gemini 2.0 Flash model and LangChain’s output parser for structured messages.
- Email data is fetched using Anymailfinder, but can be replaced with other providers like Hunter.io.
- Gmail API drafts the message, but you need to enable Gmail API access from your Google Cloud console.

## How it works
Trigger 
- A Schedule Trigger runs the automation daily.

Job Data Extraction 
- Apify pulls job listings using a predefined actor.
- The HTTP response is split and structured using the Split Out node.

Store Job Data
- Job listings are saved to a Google Sheet.
- The node maps key fields like title, company, location, and poster info.

Decision-Maker Discovery

- Another Apify actor pulls decision-maker data from LinkedIn.
- This is split and filtered (e.g., by city or company name).

Store Contacts

- Contact details (name, title, location, etc.) are appended to another Google Sheet (n8n-sheet).

Message Generation
- A LLM Chain uses Gemini 2.0 Flash to generate short, custom LinkedIn messages.
- The message respects rules like tone, length (&lt;100 words), and personalization.

Parse & Merge AI Output

- The output is structured using Structured Output Parser and merged with contact data.

Save Final Messages

- The final headline and body are stored back into Google Sheets (n8n-sheet).

Email Discovery

- Get Email IDs node hits Anymailfinder API using the LinkedIn profile link.

Draft in Gmail

- Using Gmail API, the message is drafted in your inbox with subject and body auto-filled.

## How to use
- Update Apify actor inputs to specify roles, companies, or locations.
- Replace the manual Schedule Trigger with a webhook or form input if desired.
- Update the Google Sheets document and sheet name in the relevant nodes.
- Add your Gmail and Anymailfinder credentials in n8n settings.

## Requirements
Google Sheets API access

Gmail API access

Apify account

Gemini API key (via Google AI Studio)

Anymailfinder (or alternate email discovery API)

## Customizing this workflow
This framework is highly modular. You can:

- Add more filters for company size, role, or hiring urgency
- Use alternate LLMs (OpenAI, Claude, etc.)
- Switch output channels (Slack, WhatsApp, etc.)
- Plug in different CRM tools for follow-ups

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
