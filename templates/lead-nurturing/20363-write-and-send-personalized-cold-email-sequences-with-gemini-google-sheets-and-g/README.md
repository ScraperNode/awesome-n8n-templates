# 💬 Write and send personalized cold email sequences with Gemini, Google Sheets and Gmail

> ⚡ **78 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Turn any lead list into cold emails that sound written by hand. AI reads each lead's website, writes the email and a follow-up from your offer brief, and a quality check stops spammy copy. Leads, status and replies are tracked in Google Sheets, and emails go out through Gmail.

## How it works
1. Starts from a manual run or from an n8n Form submission that adds one lead or uploads a CSV/XLSX file.
2. Appends any submitted leads to Google Sheets, then reads the full sheet and pulls the offer brief from Google Docs.
3. Uses AI to identify which sheet columns contain the email, name, company, website and role, whatever they are called, then selects the next leads to email or follow up based on outreach status and timing.
4. For new leads, fetches the lead's website content (when available) and uses AI to write a first email and a follow-up message with a proven 4-part structure, using only the facts in your offer brief.
5. Validates the generated copy against fixed rules and, if it fails, rewrites it once before deciding whether it is safe to proceed.
6. For follow-ups, searches Gmail to confirm the original email was sent and to detect replies before preparing the follow-up.
7. Sends the email via Gmail or creates a Gmail draft (based on your send mode) and updates the corresponding row in Google Sheets with the email content, dates, and outreach status.

## Setup
1. Create a Google Sheet for your leads, or leave it empty and add leads with the forms. Only an email column is required, and columns can have any names. Paste its URL into sheet_url in the Outreach Settings node.
2. Create a Google Doc with your offer brief. To write it, paste this interview prompt into any AI chat and save its answer in the Doc: https://docs.google.com/document/d/1Ihfll_Fc6Xnr18ds4IPTbOyGLGOkeBHiYQ6Ytu-ZjFo/edit?usp=sharing. Then paste the Doc URL into offer_brief_url.
3. Connect credentials for Gmail, Google Sheets, Google Docs and Google Gemini.
4. Keep send_mode on draft for your first runs, and adjust emails_per_run and follow_up_after_days to your volume.
5. Click Execute workflow from Start Outreach to process the leads in your sheet. Activate the workflow only if you want to use the two forms.

## Requirements
- Gmail account
- Google Sheets and Google Docs
- Google Gemini API key (the free tier works)

## Customization
- Switch send_mode to send once you trust the drafts.
- Set follow_up_after_days to 0 to turn follow-ups off.
- Replace the three Gemini model nodes with OpenAI, Anthropic or any other chat model.
- Swap the Start Outreach trigger for a Schedule Trigger to run it every day.
- Edit the system prompt in Write Email to change the email structure or voice.

## Additional info
The workflow adds its own columns to your sheet. Outreach Status shows each lead's stage: Drafted, Sent, Needs review, Replied, Followed up, Duplicate or No email. Emails that fail the quality check are never sent: they are saved as drafts and marked Needs review. To skip a lead, write anything in its Outreach Status cell.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Docs, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
