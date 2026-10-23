# 🎬 Route social media content reviews with Google Gemini and Google Sheets

> ⚡ **79 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a social media content brief via an n8n form, uses Google Sheets for client brand context, and runs a three-stage human-in-the-loop process powered by Google Gemini (strategy angles, draft writing, and quality audit) before logging the approved post back to Google Sheets.

## How it works
1. Receives a new content request through an n8n Form that captures client, platform, content type, and optional topic and tone notes.
2. Looks up the client’s brand fields in Google Sheets and combines them with the brief plus embedded brand and platform playbooks.
3. Uses Google Gemini to generate three strategy angles, then pauses for a human to approve an angle or request revised angles with feedback.
4. Uses Google Gemini to write a platform-specific draft (post copy, hashtags, and visual direction), then pauses for a human to approve or send revision notes to regenerate the draft.
5. Sends the draft to Google Gemini for a structured quality audit, parses the returned JSON into readable fields, and pauses for a final human decision.
6. If approved, updates a Google Sheets “Output” sheet with the published post; otherwise it routes feedback back to Marcus for revisions or back to Sofia to restart with new angles.

## Setup
1. Connect Google Gemini (PaLM) credentials for the three Google Gemini chat/model steps.
2. Connect a Google Sheets OAuth2 credential and update the spreadsheet ID and sheet/tab selections used for the client lookup and output update.
3. Ensure your Google Sheet contains the expected brand fields (for example: brand_name, brand_voice, tone_linkedin/tone_x/tone_instagram, language_avoid, visual_style, key_messages) and an output sheet with a row_number and “Published Post” column.
4. Review the three n8n Forms (brief intake, Sofia review, Marcus review, and Taylor review) and adjust labels/options to match your internal approval process before activating the workflow.

## 🔗 Nodes Used

Google Sheets, AI Agent, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
