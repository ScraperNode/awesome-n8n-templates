# 🔬 Track and manage construction RFIs with Gmail, OpenAI, and Data Tables

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors an RFI Gmail inbox, uses OpenAI to classify and extract RFI details (including PDF text), logs everything to n8n Data Tables, routes new questions to the design team, files answers back to the requester with PM approval for impacts, and sends daily overdue reminders and digests.

## How it works
1. Triggers when new emails matching the Gmail search query arrive in the RFI mailbox.
2. Extracts text from an attached PDF (if present) and uses OpenAI to classify the email as a new RFI question, a design-team answer, or something that needs manual review, while matching it to an open project stored in n8n Data Tables.
3. For new questions, loads the matched project and existing RFIs, assigns the next RFI number and due date, and checks whether the question duplicates a previously answered RFI.
4. If the question is a duplicate, logs it to the RFI log Data Table and replies via Gmail with the prior answer.
5. If the question is new, logs it to the RFI log Data Table, emails the RFI to the design team via Gmail, and replies to the sender acknowledging receipt and the requested response date.
6. For design-team answers, looks up the referenced RFI number in the RFI log and either flags the message for review if it cannot be matched to an open RFI or proceeds to route the answer.
7. If the answer indicates cost or schedule impact, sends a Gmail approval request to the project manager before replying to the requester; otherwise, it emails the answer to the requester and updates the RFI log as answered.
8. Runs daily on a schedule to identify due/overdue open RFIs in the RFI log, sends Gmail reminders to the design team, escalates heavily overdue RFIs to the project manager, and emails each PM a per-project open-RFI digest.

## Setup
1. Connect Gmail OAuth2 credentials (for the trigger, replies, reminders, and approval emails) and an OpenAI API credential (used by the OpenAI chat model).
2. Run the manual “Run Once” setup to create the n8n Data Tables (rfi_projects and rfi_log) and then replace the sample project with your real projects, including design_team_email, pm_email, response_days, and status=open.
3. Update the Gmail search query and the settings values (company name, project team name, review inbox, minimum match confidence, duplicate threshold, escalation window, and sweep time) to match your mailbox and contract rules.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
