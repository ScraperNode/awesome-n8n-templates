# 📊 Generate Real Estate Research Reports With Exa AI, PandaDoc and Instantly AI

> ⚡ **367 views** · 📊 [Market Research & Insights](../)

## Description

# This Template Demonstrates How To Automate Sending Real Estate Research Reports.

Use cases are many: send recurring market updates to investors, distribute new listings context to buyers, or push periodic area snapshots to your client base — all without touching it manually after the first setup.

**Good to know**
- Exa AI charges per search query. Check Exa AI Pricing for the latest rates before running at scale.
- Instantly AI has rate limits on lead uploads. The workflow handles this with a built-in wait node between batches, but check your plan limits before sending to large lists.
- PandaDoc document generation is asynchronous the workflow polls for completion before moving forward, so generation time will vary depending on template complexity.

## How it works
**PHASE 1: RESEARCH**

- A Schedule Trigger kicks off the workflow on your chosen cadence.
- A research task is created and submitted to Exa AI, which pulls market data, listings context, and pricing signals from the web.
- The workflow polls Exa AI until the task is complete. An If + Wait loop handles this — once confirmed, the structured data moves to Phase 2.

**PHASE 2: REPORT GENERATION**

- The structured research data is sent to PandaDoc via API. It fills directly into your pre-built real estate template — fixed layouts, brand rules, section structure already in place.
- The workflow polls PandaDoc until the document is fully generated. Another If + Wait loop ensures nothing proceeds with an incomplete report.
- The result is a clean, consistent report every time — no manual formatting or cleanup needed.

**PHASE 3: SEND VIA INSTANTLY AI**

- The finalised report is sent to a Slack channel for human approval before anything goes out to clients.
- Once approved, the workflow fetches your client or investor list from Google Sheets.
- Contacts are batched, uploaded to Instantly AI, and each one receives a personalised report email — no manual sending, no individual copy-pasting.
- Send status is written back to your Google Sheet so you always know who's been contacted.
- A final Slack message confirms the full distribution is complete. Closed loop, fully hands-off.

### How to use
- The Schedule Trigger is used as the default starting point. Replace it with a webhook or form trigger if you want to run reports on demand instead.
- Set up your PandaDoc template with your preferred layout and branding before connecting. The workflow fills data in — it won't generate a layout for you.
- Configure Google OAuth via Google Console. Create a project, apply your Client ID and Secret in the Google Sheets node credentials.
- Set up your email sequences and sender accounts inside Instantly AI before the first run.
- Create a dedicated Slack channel or DM for approval routing and completion notifications.

#### Requirements
- Exa AI — web research
- PandaDoc API — report template and document generation
- Google OAuth — client and investor list via Google Sheets
- Slack API — approval routing and completion notification
- Instantly API — personalised email delivery at scale
- n8n instance (self-hosted or cloud)

##### Customising this workflow
- Swap Google Sheets for a CRM like HubSpot, Airtable, or GoHighLevel as your contact source — just replace the Fetch Contact node with your preferred integration.
- Replace the Slack approval step with an email approval flow if your team doesn't use Slack.
- This pattern works beyond real estate — try it for fund updates, commercial property briefs, or any recurring report where the structure stays fixed but the data changes.
- Add an AI summarisation node before PandaDoc to condense the Exa research output further before it fills into the template.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
