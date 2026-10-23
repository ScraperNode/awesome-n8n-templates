# 🎣 Score and pitch podcast guest leads with Apify, OpenAI, Google Sheets and Gmail

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs weekly to find guest-friendly, active podcasts via Apify, scores each show against your expertise using OpenAI, logs all results to Google Sheets, and for top matches drafts pitch emails in Gmail and sends the draft text to Telegram.

## How it works
1. Runs every Monday at 7am on a schedule.
2. Sends your niche keywords and show criteria to the Apify Podcast Guest Finder Actor to discover active podcasts with contact emails.
3. Removes podcasts already processed in previous runs to avoid re-scoring the same Apple Podcasts show IDs.
4. Uses OpenAI (gpt-4o-mini) to score how well each podcast matches your talking points and to propose an episode idea and fit rationale.
5. Normalizes the results (including capping high scores when the proposed talking-point keyword does not appear in the show title) and appends every scored show to a Google Sheets tab.
6. Keeps only shows above your minimum fit score with a valid email, limits the batch size, and uses OpenAI to draft a tailored pitch email.
7. Sends the draft pitch details to Telegram and creates a Gmail draft addressed to the host (without sending an email).

## Setup
1. Create an [Apify account](https://apify.com/?fpr=youssef), open the [Podcast Guest Finder Actor](https://apify.com/fayoussef/podcast-guest-finder?fpr=youssef), and connect your Apify credentials in n8n.
2. Add an OpenAI API key credential for the scoring and pitch-writing steps.
3. Connect Google Sheets credentials and paste your target Google Sheet URL and tab name into the workflow’s configuration values.
4. Connect Gmail credentials with permission to create drafts in your account.
5. Create a Telegram bot, connect Telegram credentials, and set the target chat ID for notifications.
6. Update the guest profile fields (niches, talking points, proof points, min fit score, and max pitches per run) to match your positioning before activating the schedule.

## Requirements
- An [Apify account](https://apify.com/?fpr=youssef) and the [Podcast Guest Finder Actor](https://apify.com/fayoussef/podcast-guest-finder?fpr=youssef), which reads the Apple Podcasts index and each show's RSS feed for the host email. An OpenAI API key for the two AI steps. A Google account for the sheet. A Gmail account, where the drafts are created. A Telegram bot and your chat id.

## Customization
- Change the schedule to daily if you pitch at volume. Raise minFit to 80 to see only shows whose own title names your subject: the workflow caps a show at 70 when the word is not in the title, so 80 means the show said it, not the model. Swap the OpenAI node for Anthropic, Gemini or a local model, and Telegram for Slack or Discord. Delete the Gmail node and every pitch still arrives in full in Telegram. Add a field to Format the show row and it becomes a new column in the sheet.

## Additional info
Read every draft before you send it. The pitch prompt may only quote the proof points you wrote and is forbidden from inventing a number, but a model can still phrase a claim more strongly than you would. The workflow never sends an email: it creates a Gmail draft and leaves the decision to you. Every show that was scored is written to the sheet, rejections included, which is the quickest way to see that a niche keyword is pulling back the wrong kind of show.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
