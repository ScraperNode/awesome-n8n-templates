# 🔬 Track HOA ARC requests with gpt-6-luna, Google Sheets, Gmail, and forms

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

HOA architectural requests that no longer disappear into an inbox. This workflow takes each homeowner change request through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, has AI summarize and flag it for the board, logs everything in Google Sheets, and keeps the owner and board updated by email until a decision is made.

*Last updated: September 2026.*

## Quick Overview
This workflow collects homeowners association architectural change requests via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, summarizes and flags them with gpt-6-luna, logs everything in Google Sheets, and sends intake, decision, and deadline reminder emails through Gmail.

## How it works
1. Receives an architectural change submission through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form.
2. Normalizes the fields, generates a unique ARC ID, timestamps the request, and sets a 30-day review deadline.
3. Validates required fields and, if any are missing, appends an error row to a Google Sheets “Errors” tab and emails the board via Gmail.
4. For valid requests, sends the request details to gpt-6-luna to produce advisory flags, a short board summary, and an acknowledgment note to the owner.
5. Appends the request (including AI output) to the Google Sheets “ARC Requests” tab, emails the owner an acknowledgment with the deadline, and emails the board a new-request notification.
6. Accepts board decisions via a POST webhook, updates the matching Google Sheets row, and emails the owner a decision letter (or alerts the board if the payload is malformed or the ARC ID is not found).
7. Runs daily at 07:00, scans Google Sheets for pending requests due within 5 days, and emails the board a reminder list.

## Setup
1. Connect OpenAI credentials and select the model used for the ARC review (configured as gpt-6-luna).
2. Connect Google Sheets OAuth2 credentials and set the spreadsheet ID and sheet names for “ARC Requests” and “Errors.”
3. Connect Gmail OAuth2 credentials and update the board-facing recipient addresses (use user@example.com as the placeholder) for invalid submissions, new requests, and deadline reminders.
4. Publish the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form and share its URL with homeowners for submissions.
5. Copy the “hoa-arc-decision” webhook URL and configure your board/admin process to POST decisions with arc_id and decision (approved, conditions, or denied), plus an optional conditions_note.

### Quick Answers
**What happens right after a homeowner submits a request?**
The form data is normalized, given a unique ARC ID with a timestamp and a 30-day review deadline, then sent to gpt-6-luna for advisory flags, a board summary, and an acknowledgment note. The request is logged to the ARC Requests sheet, the owner gets an acknowledgment email with the deadline, and the board gets a new-request notification.

**What does the AI actually produce?**
Advisory flags and a short board summary for the board notification and the Sheets record, plus an acknowledgment note that goes to the owner.

**How do board decisions reach the homeowner?**
Post the decision to the hoa-arc-decision webhook with arc_id and a decision of approved, conditions, or denied. The matching Google Sheets row is updated and the owner receives a decision letter by email; a malformed payload or an unknown ARC ID alerts the board instead.

**What stops old requests from going stale?**
A daily 07:00 run scans Google Sheets for pending requests due within 5 days and emails the board a reminder list.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
