# 🤝 Level subcontractor bids and manage awards with Gmail, OpenAI, and Data Tables

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow monitors Gmail for subcontractor bid quote emails, uses OpenAI to match and extract pricing and scope coverage, stores leveled results in n8n Data Tables, and runs a daily sweep to chase missing bids, rank quotes, and send award-approval and award/regret emails.

## How it works
1. Triggers when a Gmail message arrives that matches the bid/quote search and downloads any attachments.
2. Extracts text from the attached PDF and replies asking for a text-based PDF if the attachment is not readable.
3. Uses OpenAI to look up open bid packages in n8n Data Tables, match the email to a package, and extract structured quote details plus scope coverage for each checklist item.
4. If the quote is valid and matches an open package, calculates scope gaps, applies allowance “plugs” to produce a leveled total, versions the quote as a revision, and upserts it into the bid_quotes Data Table.
5. Replies in Gmail either confirming the quote is complete or asking the subcontractor to confirm/clarify missing or excluded scope items.
6. Runs daily at 7am to update past-due packages to closing, remind invited subcontractors who have not submitted quotes yet, and flag packages with no bids for review.
7. For packages with bids after closing, ranks quotes by leveled total, has OpenAI draft an award recommendation, emails the estimator for approval, then sends the award-intent email to the winner and regret emails to the other bidders while updating the package status in the bid_packages table.

## Setup
1. Connect Gmail OAuth2 credentials for reading incoming bid emails and sending replies, reminders, approvals, and award/regret messages.
2. Add an OpenAI API credential for the quote extraction/matching agent and the award recommendation writer.
3. Run the manual “set up” trigger once to create the bid_packages and bid_quotes n8n Data Tables (and optionally insert the sample package).
4. Populate the bid_packages table with your real packages, ensuring scope_checklist uses the format `Item=allowance; Item=allowance`, and set status to open.
5. Update the two settings steps with your company name, estimating contact, review inbox, minimum match confidence, default plug amount, and chase-days-before-due value.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
