# 🎫 Draft and triage Google Maps guest review replies with SerpApi and OpenRouter

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs manually or on a schedule to fetch new, unanswered Google Maps reviews via SerpAPI, uses OpenRouter (Claude) to classify each review and draft an appropriate reply, then saves drafts to Google Sheets for approval and emails a single Gmail digest.

## How it works
1. Runs manually or on a schedule and loads the property details, tone, and target Google Maps data_id.
2. Reads previously drafted review IDs from Google Sheets and fetches the newest Google Maps reviews from SerpAPI.
3. Filters to only new reviews that have no existing owner response and contain meaningful text.
4. Uses OpenRouter (Claude) to classify each review as standard, needing reservation verification, or possibly fake/disputed.
5. Uses OpenRouter (Claude) to draft a category-specific public reply plus an internal note, adding confirmation tags like [VERIFY RESERVATION: …] or [CONFIRM: …] when needed.
6. Writes each draft to a Google Sheets approval log (so it is not drafted again) and labels it PENDING APPROVAL or NEEDS DATA.
7. Builds one HTML digest of all drafts created in the run and sends it by Gmail to the configured recipient.

## Setup
1. Create credentials for SerpAPI, OpenRouter, Google Sheets OAuth2, and Gmail OAuth2.
2. Duplicate the provided Google Sheets template and paste its URL into the approval_sheet_id setting.
3. Set your Google Maps review data_id (from the listing URL) plus property tone, signature, offline contact email, and digest recipient in the settings step.
4. If using the schedule trigger, configure the interval and disable the manual trigger (or vice versa) before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
