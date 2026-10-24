# 🎫 Park Help Scout retro-tagged tickets for review with OpenAI and TeamRetro

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow watches for Help Scout conversations tagged “retro”, uses OpenAI to classify and summarise the customer’s first message, deduplicates against recently parked items, then creates a new TeamRetro parking lot item (or skips duplicates) and leaves a private note back on the Help Scout ticket.

## How it works
1. Triggers in Help Scout when conversation tags change.
2. Checks whether the conversation currently includes the “retro” tag and, if so, fetches the full conversation details from Help Scout.
3. Extracts the ticket subject, number, mailbox ID, and a cleaned version of the first customer message.
4. Sends the ticket content to OpenAI to return structured fields for actionable status, category, and a one-sentence summary.
5. If the ticket is actionable (and not praise), pulls the last 30 days of parked items from TeamRetro and compares titles to the new summary using token-overlap to detect near-duplicates.
6. If a duplicate is found, adds a private “already parked” note to the Help Scout conversation; otherwise, creates a new TeamRetro parked item and adds a private confirmation note to the Help Scout conversation.

## Setup
1. Connect Help Scout OAuth2 credentials for the trigger and Help Scout conversation/thread actions, and ensure a “retro” tag exists in Help Scout for agents to apply.
2. Add an OpenAI API key and select the model used for the classification/summarisation step.
3. Add a TeamRetro API key with access to the parking lot feature and replace `REPLACE_WITH_TEAM_ID` with your TeamRetro team ID in both TeamRetro nodes.

## 🔗 Nodes Used

Help Scout, Help Scout Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
