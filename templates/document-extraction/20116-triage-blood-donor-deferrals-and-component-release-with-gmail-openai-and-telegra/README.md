# 🔬 Triage blood donor deferrals and component release with Gmail, OpenAI, and Telegram

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Gmail label for donor screening questionnaire emails, extracts AABB-style risk flags with OpenAI, calculates the effective donor deferral and component release status via a linked sub-workflow, then logs the decision to an n8n Data Table and notifies a lab supervisor on Telegram.

## How it works
1. Triggers when a new email arrives in Gmail under the DONOR_QUESTIONNAIRE label.
2. Extracts donor_id, component_id, donation_type, questionnaire text, and a screening timestamp, then fetches the donor’s prior deferral history from an external donor registry API.
3. Uses OpenAI (GPT-4.1-mini) to extract a structured list of predefined donor risk flags from the questionnaire text.
4. Processes each extracted flag by calling a separate “Deferral Days Calculator” sub-workflow to determine deferral duration and whether the flag causes permanent deferral.
5. Aggregates all flag results and computes the final deferral status (Permanent, Hold, or Eligible) using a longest-deferral-wins rule with permanent deferral taking priority.
6. Sets the component action (quarantine vs. cleared pending standard testing), drafts a short donor notice with OpenAI, logs the outcome to an n8n Data Table, and sends a Telegram alert to the lab supervisor.

## Setup
1. Connect credentials for Gmail, OpenAI, and Telegram, and ensure the Gmail trigger filters on the label you use for donor questionnaires.
2. Provide authentication for the donor registry HTTP endpoint (https://donor-registry.example-bloodbank.org/...) and confirm the API returns deferral history for your donor_id format.
3. Import the required “Deferral Days Calculator” sub-workflow and update the Execute Workflow node to point to its new workflow ID.
4. Create an n8n Data Table for the quarantine/release ledger and replace the Data Table ID in the logging step.
5. Set the Telegram chat ID for your lab supervisor in the Telegram notification step.

## Requirements
- OpenAI API Key: Connect your OpenAI credentials to both the Extractor Model and Notice Drafting Model node.
- Gmail Account: Connect a Gmail account with access to the donor screening intake inbox on the Receive Donor Screening Email trigger.
- Donor Registry Header Auth: Provide your registry endpoint API key in the Fetch Prior Deferral History HTTP Request node.
- Telegram Bot Token: Connect your Telegram bot credentials and set the supervisor chat ID in the Notify Lab Supervisor node.
- Sub-Workflow Dependency: Import the companion AABB Deferral Days Calculator sub-workflow (wf3b) and re-link its workflow ID inside the Calculate Flag Deferral Days node.
- Audit Data Table: Create an n8n Data Table (suggested columns: donor_id, component_id, deferral_status, component_action, deferral_end_date) and select it in the Log Quarantine/Release Ledger node.

## Customization
- Supervisory Approval Step: Insert a human-in-the-loop or "Send and Wait" approval node before the ledger step to require medical director sign-off on Permanent and Hold determinations.
- Notification Channels: Replace Telegram with Slack, Microsoft Teams, or an internal clinical paging system in the Notify Lab Supervisor node.
- Compliance Rules Table: Update the underlying deferral lookup table inside the sub-workflow to reflect facility-specific standard operating procedures or updated FDA/AABB guidance without editing this main workflow.
- Parallel Audit Sinks: Add a Google Sheets or PostgreSQL node alongside the n8n Data Table to maintain an external clinical audit archive.
- Intake Channel Adaptation: Swap the Gmail trigger for a webhook, webform submission, or direct EHR integration to capture intake responses from other platforms.

## Additional info
Built-in Error Handling: External network, AI, sub-workflow, and database nodes feature automatic retry logic (3 attempts with a 2-second backoff) configured with continuous execution to prevent pipeline stalls on single-flag failures.

Token & Cost Efficiency: Uses targeted prompts and temperature settings (0.1 for extraction, 0.3 for notice generation) across two concise model calls per intake to minimize operational API costs.

Deterministic Decision Guardrail: All quarantine, release, and deferral status decisions are computed deterministically via code logic; the generative AI model is strictly restricted to extraction and compassionate notice drafting.

PHI Minimization: Operates entirely on internal identifiers (donor_id, component_id) rather than personal names in prompts to maintain privacy best practices.

## 🔗 Nodes Used

HTTP Request, Telegram, Execute Sub-workflow, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
