# 🎬 Draft UK property listings and flag risky claims with OpenAI and Google Sheets

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
UK estate and letting agents (and anyone writing property listings) who want a first draft of portal listing copy from their own property facts, with possible claims to check flagged before anything goes live.

## How it works
1. Runs every hour on a schedule (or on demand with Execute workflow).
2. Reads a Google Sheet of property facts and keeps rows whose status is `ready`.
3. Sends the facts to OpenAI with a short prompt: use only the facts given, and return a headline, a short summary, five to eight key features, and any claims that may need verifying.
4. Writes the draft and the flags back to the same row and sets its status to `draft_ready`, so it isn't picked up again. Nothing is published.

## Setup
1. Google Sheet with a tab named `Properties` and the column headings listed in the Start here note
2. Credentials: Google Sheets, OpenAI (add your own in n8n; none are included in this template)
3. Paste your sheet URL into "Read properties" and "Write draft to sheet"
4. Add a property row, set its status to `ready`, run once, then activate

## Requirements
- A Google account with Google Sheets
- An OpenAI API key

## Customization
- Edit the SYSTEM_PROMPT in "AI instructions" to change style, length or output.
- Pick a different model in "OpenAI chat model".
- Add fact columns to the sheet and to the prompt in "Draft listing copy".

## Additional info
The claim flags come from a short general prompt and are not a compliance check. Always check copy against your own facts before publishing.

Made by Burnt & Toast Kits. This is a free starter. The paid Listing Writer Kit adds tuned prompts, a UK compliance checklist (CPRs/DMCCA material information), voice matching, edge cases and a setup guide: https://kits.burntandtoast.com/estate-agents/kits/listing-writer

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
