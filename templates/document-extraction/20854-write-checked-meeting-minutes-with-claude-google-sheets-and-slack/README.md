# 🔬 Write checked meeting minutes with Claude, Google Sheets and Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a meeting transcript via an n8n Form, uses Anthropic Claude to draft structured minutes with evidence quotes, validates each item against the transcript in code, then saves meeting and item records to Google Sheets and posts a status summary to Slack.

## How it works
1. Receives a meeting title, date, attendees, and transcript through an n8n Form trigger.
2. Cleans and validates the input, generates a stable meeting ID from the title/date/transcript, and rejects transcripts that are too short or too long.
3. Reads the Google Sheets “Minutes” tab to detect whether the same meeting has already been processed and, if so, posts a skip reason to Slack.
4. Sends the transcript and metadata to Anthropic Claude to produce JSON minutes (summary, decisions, action items, and open questions), requiring a verbatim supporting quote for every item.
5. Verifies each AI-generated item in code by checking that quotes and due-text appear in the transcript, owners match attendees, and all numbers are present in the transcript, and resolves due phrases into an ISO due date when possible.
6. Writes one row per extracted item to the Google Sheets “Items” tab and one roll-up row per meeting to the “Minutes” tab.
7. Posts a formatted minutes summary to a Slack channel, flagging any items marked “Needs review.”

## Setup
1. Provide credentials for Google Sheets (OAuth2), Anthropic, and Slack, and ensure the Slack app is added to the target channel.
2. Create a Google Sheets spreadsheet, paste its ID into the “Spreadsheet ID” value, and run the “Run once: set up the sheet” branch to create the “Minutes” and “Items” tabs with headers.
3. Select your spreadsheet and set the document ID in the Google Sheets nodes, and choose the Slack channel in both Slack message steps.
4. Optionally adjust the Config values (output language, minimum quote length, and transcript size limits) before publishing the form and sharing its URL.

## Requirements
- Anthropic API key (Claude Haiku 4.5 by default)
- Google account (Google Sheets OAuth2)
- Slack app that is a member of the channel you choose
- A meeting transcript as text; speaker names make the owner check work best
- The form URL is public by default: turn on Basic Auth in the Form Trigger or keep the URL private
- Transcripts are sent to Anthropic: do not use it for meetings you cannot send there
- Cost: one Claude call per meeting (about 750 input and 350 output tokens for a 15-line meeting in my test)

## Customization
- Config: output language (default: the language of the transcript), minimum quote length, transcript length limits
- Change the model in the "AI: Write minutes" node
- Replace the form with any trigger that outputs the same four fields (for example a webhook from your transcription tool)
- Replace Slack with email or Teams
- Date words ("by Friday", "next week", 来週の金曜) are read in English and Japanese in the "Check minutes" code; add other languages or conventions there

## Additional info
What the checks cannot catch:
- A passing check proves the quote exists, not that it means what the item says. In my tests Claude once wrote an open question that nobody asked, from a real quote. It passed.
- The owner check only asks whether the name appears within about 250 characters of the quote. Adjacent speakers in a short meeting can pass. Without speaker names, owners come out "Unassigned" and flagged.
- "next week" is read as that week's Friday (convention, editable in the code).

What I tested: 4 synthetic meetings (3 English, 1 Japanese), one run each, with traps (an instruction hidden in the transcript, "maybe" remarks, a task handed from one person to another, no speaker names), plus 17 checks of the guard code with deliberately wrong input and 43 due-date phrases. That is not a measure of accuracy on your meetings. Test with your own transcripts first.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, n8n Form Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
