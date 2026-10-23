# 🎣 Send solar ROI proposals from electricity bills with WhatsApp, OpenAI and Google Drive

> ⚡ **10 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures rooftop solar leads from WhatsApp or an n8n web form, uses OpenAI to OCR electricity bills, calculates system sizing, PM Surya Ghar subsidy, and ROI, renders a branded PDF via Gotenberg, and delivers the proposal on WhatsApp while tracking everything in Google Sheets and Drive.

## How it works
1. Triggers when a lead messages you on WhatsApp or submits the n8n form with an uploaded electricity bill image.
2. For WhatsApp leads, checks whether an image is included and either downloads the bill media or replies asking the lead to send a clear bill photo.
3. Sends the bill image to OpenAI (GPT-4o) to extract consumption, tariff, sanctioned load, and history, then validates the result and requests a clearer photo if the bill is unreadable.
4. Calculates the recommended system size, expected generation, PM Surya Ghar subsidy, net cost, payback, EMI estimate, and 25-year savings, and assigns a HOT/WARM/NURTURE lead score.
5. Uses OpenAI (gpt-4o-mini) to generate proposal copy, builds a proposal HTML document including a QuickChart savings graph, and converts it to a PDF via a self-hosted Gotenberg endpoint.
6. Archives the PDF to Google Drive, sends the PDF and a Cal.com site-survey booking link to the lead on WhatsApp, upserts the lead and proposal link into Google Sheets, and alerts sales on WhatsApp with the lead score and key numbers.
7. When Cal.com posts booking updates, looks up the lead in Google Sheets, updates the survey status, confirms the slot to the lead (or sends a rebooking nudge on cancellation), and briefs the site engineer on WhatsApp with the address and proposed system details.

## Setup
1. Configure WhatsApp Business Cloud credentials in n8n, set your WhatsApp Phone Number ID, and replace the recipient numbers used for sales and site engineer alerts.
2. Add OpenAI API credentials for the bill OCR (chat completions) and proposal copy generation.
3. Set up Google Sheets and Google Drive credentials, create a “Solar Leads” sheet and a proposals folder, and replace `REPLACE_WITH_GOOGLE_SHEET_ID` and `REPLACE_WITH_PROPOSALS_FOLDER_ID`.
4. Run Gotenberg (for example, `gotenberg/gotenberg:8`) where n8n can reach it and update the Gotenberg URL if `http://gotenberg:3000` is not valid in your environment.
5. Configure your Cal.com booking link and webhook by updating the survey link in the sizing config and pointing a Cal.com webhook to the workflow’s booking webhook path (`solar-survey-booked`).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, WhatsApp Business Cloud, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
