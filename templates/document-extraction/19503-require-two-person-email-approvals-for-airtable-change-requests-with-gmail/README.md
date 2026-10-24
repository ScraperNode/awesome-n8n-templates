# 🔬 Require two-person email approvals for Airtable change requests with Gmail

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who's it for
Teams that keep change requests in Airtable and need a second pair of eyes before anything is applied: database changes, access grants, refunds, supplier payments.

## How it works
1. A new row in the Change Requests table starts a run. Rows a human already decided are skipped, and each row is handled once even if the poll sees it twice.
2. The approver pool comes from a second Airtable table. The requester's address is removed, duplicates collapse to one person, and the first two survivors are picked. Fewer than two left means refused, never approved by default.
3. Each approver gets a Gmail message with Approve and Disapprove buttons. Three answers are handled: approved, refused, and no answer inside the reply window. The second approver is asked only after the first approves.
4. The outcome, both approver addresses and a named refusal reason go back into the row, and the requester is emailed the result.

## Setup
1. Create a Change Requests table with Request ID, Title, Detail, Requester Email, Status, First Approver, Second Approver, Refusal Reason, Decided At and Created. Created must be of type Created time: the trigger polls on it, so a row with that cell empty is never picked up.
2. Create an Approvers table with Email and Active.
3. Connect Airtable and Gmail, then pick your base and table on the four Airtable nodes.
4. Open Approval Rules for the reply window, status labels and self-approval.

## Requirements
An Airtable personal access token and a Gmail account. No AI model, no paid service.

## Good to know
Approval is by link, not by identity. n8n signs the URL so it cannot be forged, but anyone who receives or forwards the email can click it.

## 🔗 Nodes Used

Airtable, Gmail, Airtable Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
