# ⚡ Score job postings and draft tailored CV summaries and cover letters with OpenAI and Google

> ⚡ **5 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
I made this for the tailoring tax on job hunting. Each day it reads your board's feed and scores every posting against your master CV. The ones worth it get a summary and a cover letter draft from OpenAI. Every posting lands as a tracker row with the reason why.

## How it works
1. A schedule trigger fires every morning, before you would normally open the board yourself.
2. It reads your search settings and the tracker sheet of postings already seen. Then it pulls your master CV from a Google Doc, once per run.
3. The RSS feed comes in. A Code node drops what you have already seen and whatever your exclude and seniority rules reject. Anything past the daily cap waits for tomorrow's run instead of being lost.
4. Each survivor goes to OpenAI with your CV. Back come a fit score and three matched strengths. It also writes one honest gap plus a short tailored summary and a cover letter drawn only from your CV.
5. Postings under your threshold are skipped, but their score and gap are still written down so tomorrow's run knows them.
6. A posting that clears the bar gets its summary saved to Google Drive and a Gmail draft with the cover letter. The draft goes to the address you set, and the workflow never sends it.
7. Every posting ends as a row in the sheet with a status and the reason. The filtered ones and the AI failures get a row too.

## Setup
1. Add an OpenAI credential and a Google credential that covers Sheets and Docs and Drive and Gmail. Nothing else in the workflow needs a secret, so the credential step is five minutes.
2. Create a Google Sheet whose first row holds these eight headers in this order: `date` `company` `title` `link` `fit_score` `gap` `doc_link` `status`. Point both Google Sheets nodes at it and keep the header row exactly as written.
3. Paste your board's RSS URL, your master CV's Google Docs URL and the draft recipient into Search Settings. I keep the keywords, the daily cap and the fit threshold in the same node so there is one place to change your mind.

## Requirements
- You need one Google account with Sheets and Docs and Drive and Gmail. You also need an OpenAI API key and a job board that publishes an RSS feed. I tested it against a plain RSS board, so a JSON API board needs the feed node swapped for an HTTP Request.

## Customization
- I put everything you would want to change in Search Settings: the must-have and exclude keywords, the seniority words, the fit threshold and the daily cap. Raise the threshold if the drafts folder fills with maybes, or swap the RSS node for an HTTP Request against a board API.

## Additional info
Buying opens a Stripe checkout that I run, and the download link arrives by email once you have paid. The zip holds the workflow, a setup guide and a README.

There is a longer page with the running cost, the parts that break and when I would tell you not to bother: https://fractionalhq.uk/use-cases/job-application-tracking

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Google Sheets, RSS Read, Google Drive, Gmail, Google Docs, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
