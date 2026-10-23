# ⚒️ Generate mobile QA test cases and coverage gaps with ClickUp and Claude

> ⚡ **27 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow triggers from a ClickUp webhook (or manual run), uses Anthropic Claude to generate structured mobile app test scenarios, creates ClickUp QA tasks for each scenario, then later reviews executed results and asks Claude to identify missing coverage and open a follow-up ClickUp task if gaps are found.

## How it works
1. Receives a webhook request from ClickUp (or runs manually) with the requirement task ID.
2. Fetches the ClickUp requirement details and queries the ClickUp testing list for any existing test tasks tagged to the same feature to avoid duplicates.
3. Sends the requirement context, target platforms, and existing coverage to Anthropic Claude to generate new mobile test scenarios as JSON.
4. Creates a ClickUp testing task for each generated scenario, including preconditions, steps, expected results, priority, and tags for platform/category/requirement.
5. Waits for the configured number of days to give QA time to execute the scenarios.
6. Pulls the latest statuses for all ClickUp testing tasks tagged to the requirement, summarizes pass/fail/blocked/pending results, and asks Anthropic Claude to flag any missing or untested scenarios.
7. If gaps are found, creates a ClickUp follow-up coverage-gap task listing the missing scenarios; otherwise records the requirement as fully covered.

## Setup
1. Add ClickUp API credentials with permission to read tasks and create tasks in your target lists.
2. Add Anthropic (Claude) credentials using HTTP Header Auth (x-api-key) and ensure the Anthropic Messages API is accessible.
3. Update the configuration values for your ClickUp requirement and testing list IDs, target platforms, and the QA results wait window.
4. Copy the production webhook URL from the workflow and register it in ClickUp so new requirement tasks POST to the webhook path.
5. Align your ClickUp task statuses/tags with the workflow’s expectations (platform tags like ios/android/both and statuses containing pass/fail/blocked) so results and gap analysis work correctly.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
