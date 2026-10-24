# 🤝 Create blameless win/loss retro prompts from closed-lost HubSpot deals with OpenAI and TeamRetro

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow watches HubSpot deal stage changes, and when a deal is marked closed-lost it uses OpenAI to turn the loss details into blameless retro discussion prompts, dedupes them against recent TeamRetro parked items, parks new prompts in TeamRetro, and logs a “Queued” activity back to the deal.

## How it works
1. Triggers in HubSpot whenever a deal’s `dealstage` property changes.
2. Checks whether the new stage equals your closed-lost stage ID, then fetches the full deal record from HubSpot.
3. Extracts key fields (name, amount, loss reason, notes, URL) and skips deals below the configured minimum amount.
4. Sends the loss reason and notes to OpenAI (GPT-5 Mini) to generate up to two neutral, blameless discussion prompts and a parkable flag.
5. If parkable, pulls the last 30 days of TeamRetro parked items and deduplicates the new prompts by token overlap.
6. Creates new parked items in TeamRetro for non-duplicate prompts and writes a completed “Queued for win/loss retro” task to the HubSpot deal timeline with the prompts.

## Setup
1. Add HubSpot credentials for the trigger and a HubSpot private app token with deal read/write and engagement write permissions, then update the closed-lost stage ID used for filtering.
2. Add an OpenAI credential and ensure the selected model (gpt-5-mini) is available in your account.
3. Replace `REPLACE_WITH_TEAM_ID` with your TeamRetro team ID and confirm your plan supports the parking lot (parked items) feature.

## 🔗 Nodes Used

HubSpot, HubSpot Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
