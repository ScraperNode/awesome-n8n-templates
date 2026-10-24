# ⚒️ Route AI handoff tasks from Google Sheets with OpenAI and Claude

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Production-grade AI workflow with pre-spend budget enforcement, dual-model verification (OpenAI + Claude), and full audit logging. Built and refined over 3+ months of real-world use.

## How it works
1. Most “AI automation” templates connect an AI to a workflow with no safety net. This one is different.
2. Budget enforcement BEFORE spending — projects cost and blocks the call if it exceeds your limit, instead of reporting overspend afterward
3. Dual-model verification — run OpenAI and Claude in parallel and compare their answers before trusting a result on high-stakes tasks
4. Full audit trail — every task is logged with a tracking ID from intake to completion, so nothing happens silently
5. Fail-closed safety checks — malformed or duplicate tasks are rejected before they ever reach an AI model
6. 69-node n8n workflow, fully documented with 6 in-canvas setup guides
7. Clean, numbered node names (1 → 15) so the logic is readable at a glance
8. Zero personal data, zero credentials, zero test values — ready for your own setup
9. README with step-by-step setup instructions

## Setup
1. Connect a Google Sheets credential and replace YOUR_SHEET_ID_HERE and YOUR_SHEET_TAB_NAME_HERE in all Google Sheets trigger and update steps.
2. Ensure your sheet includes the required columns (at minimum Handoff ID, Status, Question / Task, Required Output, and Context / Source Link) and that new items enter with Status set to NEW.
3. Provide api_cost_budget and estimated_cost_next_call values in each row to enable the budget gate, and review the MAX_ITEMS_PER_EXECUTION safety limit in the safety code step.
4. Add an OpenAI API credential for the OpenAI steps and an Anthropic API credential for the Claude steps, and review the configured model IDs.
5. Update the HTTP request URL (YOUR_N8N_DOMAIN_HERE/webhook/ai-handoff-write) if you use the AI handoff webhook endpoint in your environment.

## Customization
- Setup and customization services available separately — see README for details.

## Additional info
WHO THIS IS FOR
Anyone building AI-powered automation who needs it to be reliable, not just functional — agencies, in-house automation builders, and technical founders who don’t want a demo that breaks the first time something unexpected happens.

SETUP TIME
15–30 minutes if you’re comfortable with n8n and have your OpenAI/Anthropic API keys ready.

NEED IT CONFIGURED FOR YOU?
Setup and customization services available separately — see README for details.

Preferred public title: AI Task Orchestration Hub — Budget-Controlled Multi-Model Pipeline (n8n)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Filter, OpenAI, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
