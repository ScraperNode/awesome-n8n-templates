# 🧾 Post approved Trello bookkeeping drafts to Xero with receipt attachments

> ⚡ **11 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow listens for an “Approved” label on a Trello card, reads the AI draft bookkeeping JSON from card comments, and posts the corresponding transaction to Xero. It then adds a Xero deep link back to Trello, uploads receipt images as Xero attachments, and moves the card to Done.

## How it works
1. Triggers in Trello when a user adds the configured Approved label to a card on the target board.
2. Fetches the card’s comments, extracts the `<!-- AI_DRAFT_JSON -->` payload, validates required fields, and skips processing if a `<!-- XERO_URL -->` sentinel comment already exists.
3. For SPEND_MONEY and PAY_BILL entries, pulls active Xero bank accounts and resolves the bank account and payment reference from the draft and any reviewer comments, pausing to request confirmation on the Trello card if values are ambiguous.
4. For PAY_BILL entries, fetches open supplier bills from Xero and either matches the payment to a single ACCPAY invoice or asks the reviewer to confirm the bill in a Trello comment.
5. Builds and posts the appropriate Xero record (Bank Transaction, Bill, Payment, or Manual Journal) via the Xero API and generates a Xero deep link for the created entity.
6. Immediately writes the `<!-- XERO_URL -->` deep link back to Trello, then downloads image attachments from the Trello card and uploads them to the Xero record as receipt attachments.
7. Posts a success comment on the Trello card, removes the For Review label, and moves the card to the configured Done list, or on failure comments the error details, adds the Xero Failed label, and removes Approved.

## Setup
1. Create Trello API credentials and Xero OAuth2 credentials in n8n, and set your Xero tenant ID (`YOUR_XERO_TENANT_ID`) in all Xero HTTP requests.
2. Update the Trello board ID (`YOUR_TRELLO_BOARD_ID`) and paste your Trello label/list IDs for Approved, For Review, Done, and Xero Failed (`YOUR_TRELLO_APPROVED_LABEL_ID`, `YOUR_TRELLO_FOR_REVIEW_LABEL_ID`, `YOUR_TRELLO_DONE_LIST_ID`, `YOUR_TRELLO_XERO_FAILED_LABEL_ID`).
3. Import and activate the upstream workflow that writes the `<!-- AI_DRAFT_JSON -->` comment to cards (the companion “AI Draft/Commit” workflow), then activate this workflow.
4. Ensure Trello cards include receipt images as attachments if you want them uploaded to Xero, and optionally set `TRELLO_N8N_BOT_MEMBER_ID` as an environment variable to ignore bot-added Approved label events.

## Requirements
- Workflow 1 imported and active — Import HITL Bookkeeping – AI Draft (01-…) first. This workflow reads the <!-- AI_DRAFT_JSON --> comment that Workflow 1 creates. Both workflows must be active.
- Trello API: API key and token with access to your bookkeeping board
- Xero OAuth2 API: Connected to the organisation you post into
- Trello board setup: A bookkeeping board with labels and lists configured:
1) Approved (trigger label) 2) For Review, 3) Xero Failed 4) A Done list for completed cards
- Placeholder IDs replaced — Update every YOUR_* placeholder in the workflow:
YOUR_TRELLO_BOARD_ID, YOUR_TRELLO_APPROVED_LABEL_ID, YOUR_TRELLO_FOR_REVIEW_LABEL_ID, YOUR_TRELLO_DONE_LIST_ID, YOUR_TRELLO_XERO_FAILED_LABEL_ID, YOUR_XERO_TENANT_ID (on all Xero HTTP Request nodes)
- Xero prerequisites: Suppliers exist in Xero (drafts need a matched xero_contact_id). Active bank accounts for SPEND_MONEY and PAY_BILL. Chart of accounts and tax types aligned with what Workflow 1 drafts.
- Operational prerequisite: A card must already have an AI draft comment from Workflow 1. A reviewer adds the Approved label to trigger posting.
- Optional: Set TRELLO_N8N_BOT_MEMBER_ID in n8n environment variables if your Trello account is used by the automation, so the workflow ignores bot-initiated label changes.

## Customization
- Trello board structure: Point to a different board, Done list, or label names/IDs. Keep label semantics the same (Approved = post, For Review = pending review, Xero Failed = posting error).
- HITL confirmation gates: When bank account, payment reference, or open bill is ambiguous, the workflow comments on the card and removes Approved. Reviewers reply in a fixed format, then re-add Approved: Bank account: <code or name>, Reference: <number> or Reference: none, Bill: <invoice number or InvoiceID>
- Edit the confirmation comment text or matching logic in Resolve Xero Posting Config, Match Bill To Payment, and the related Code nodes.
- Bank matching heuristics: Resolve Xero Posting Config includes fuzzy matching for common bank names (BDO, BPI, GCash, etc.) and BDO reference normalisation. Extend or replace these rules for your region or bank naming.
- Default account codes: Build MANUAL_JOURNAL Payload falls back to account 429 and suspense account 290 (from draft xero_config). Change these in the Code node or in Workflow 1’s Xero config enrichment.
- Currency and formatting: Build BILL Payload defaults to PHP if no currency is set. Change the default or line-amount types (Inclusive vs Exclusive) per entry type.
- Attachment handling: Receipt images on the Trello card are downloaded and uploaded to the Xero record. Restrict to certain MIME types, skip attachments, or change retry behaviour in Prepare Live Attachments, Download Trello Attachment, and Upload Xero Attachment.
- Success and failure Trello updates: Edit confirmation comments, which labels are removed/added on success or failure, and whether cards move to Done automatically.
- Idempotency and duplicate protection: Posting is skipped if <!-- XERO_URL --> already exists on the card. Adjust sentinel comment text or duplicate-detection logic if your process differs.
- Trigger filtering: Human Trigger Only deduplicates webhooks and optionally ignores actions from the n8n bot member. Tune dedup window or approval detection logic there.

## 🔗 Nodes Used

HTTP Request, Trello Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
