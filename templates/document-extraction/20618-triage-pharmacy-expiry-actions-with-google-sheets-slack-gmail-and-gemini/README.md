# 🔬 Triage pharmacy expiry actions with Google Sheets, Slack, Gmail and Gemini

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7513219338414219265/

This workflow runs every day at 6AM to analyze pharmacy inventory in Google Sheets, predict expiry risk using recent sales velocity, and request a pharmacist’s approval in Slack before sending Gmail transfer/return emails, updating reorder controls, and logging all decisions.

## How it works
1. Runs daily at 6AM and loads configuration values such as the Google Sheets document ID, expiry horizon, and email override.
2. Reads inventory batches, sales history, branch stock, and supplier return policies from Google Sheets.
3. Calculates sales velocity and FEFO-based expiry risk, flags safety/compliance constraints, and produces a prioritized list of at-risk batches with recommended actions (transfer, return, discount, or dispose).
4. Uses Google Gemini to generate a 3-line pharmacist briefing, then posts it to Slack with an Approve/Reject prompt and a preview of the top actions.
5. Splits the approved/rejected decision across all proposed actions and appends an audit trail row per action to a Google Sheets Action_Queue tab.
6. If approved, routes each action to either send a stock-transfer email to the receiving branch via Gmail, send a return request to the supplier via Gmail, or post a manual compliance alert to Slack for controlled drugs.
7. If approved, updates Google Sheets to enforce reorder controls and marks inventory batches as ACTIONED or QUARANTINED (including discount percentage where applicable) so they are skipped on the next run.

## Setup
1. Create a Google Service Account credential in n8n, share your Google Sheets document with that service account email, and set the Sheet ID in the Config node.
2. Ensure the Google Sheets workbook contains the required tabs and columns referenced by the workflow: Inventory_Batches, Sales_Log, Branch_Stock, Supplier_Policies, Action_Queue, and Reorder_Control.
3. Connect Slack credentials, set the target channel ID in the Config node, and ensure the workflow can use Slack “send and wait” approvals.
4. Connect Gmail OAuth2 credentials for sending branch and supplier emails, and set email_override during testing to route all emails to a single address.
5. Add a Google Gemini (PaLM) credential for the briefing step and keep the model settings as configured if you want the same output style.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
