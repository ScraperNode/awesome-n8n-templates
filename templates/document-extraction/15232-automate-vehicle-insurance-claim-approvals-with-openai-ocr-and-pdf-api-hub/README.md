# 🔬 Automate vehicle insurance claim approvals with OpenAI, OCR and PDF API Hub

> ⚡ **283 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates the full lifecycle of a vehicle insurance claim — from an incoming Gmail email to a signed, watermarked PDF decision letter delivered back to the claimant.

It monitors Gmail for emails with a PDF claim attachment, deduplicates them against a Google Sheet, parses the claim PDF using PDF API Hub's OCR, evaluates the claim with OpenAI GPT-4o-mini (or a built-in mock evaluator for testing), and routes it to one of three paths:

- **Approved** — generates a signed approval letter, stamps it APPROVED, uploads to Google Drive, and emails the claimant
- **Rejected** — generates a rejection letter, stamps it REJECTED, uploads to Google Drive, and emails the claimant
- **Manual Review** — notifies your claims adjuster by email for human review

Every claim is logged and tracked in a Google Sheet.

## What you need

- **Gmail OAuth2** — to monitor the claims inbox and send decision emails
- **Google Sheets OAuth2** — for claim logging and duplicate detection
- **Google Drive OAuth2** — to store processed claim PDFs
- **OpenAI API key** — only required when `ai_mode` is set to `openai`
- **PDF API Hub API key** — get one free at [pdfapihub.com](https://pdfapihub.com) (30 free API calls)

## Setup

### Google Sheets

Create a Google Sheet with a tab named **Claims** and add these headers in row 1:

`claim_id` | `claimant_name` | `claimant_email` | `claim_type` | `decision` | `approved_amount` | `reasoning` | `risk_flags` | `summary` | `processed_at` | `email_message_id`

A sample sheet you can clone is linked in the **Sticky Note — Overview** node inside the workflow.

After creating the sheet, open every **Google Sheets** node in the workflow and point it to your sheet and tab.

### Google Drive

Create two folders in your Drive: **Approved Claims** and **Rejected Claims**. Set each folder in the corresponding **Upload** node.

### Workflow Config node

Edit the **Workflow Config** Set node to configure:

| Field | Description |
|---|---|
| `self_email` | Your email — receives duplicate-claim alerts |
| `claims_adjuster_email` | Email for manual review notifications |
| `ai_mode` | `mock` for testing, `openai` for production |
| `mock_decision` | `APPROVED`, `REJECTED`, or `MANUAL_REVIEW` (mock mode only) |
| `company_name` | Used in generated PDF letters |
| `support_phone` | Used in generated PDF letters |
| `appeals_email` | Used in generated PDF letters |

## How it works

1. **New Claim Uploaded** — Gmail trigger polls every minute for emails with subject containing "insurance claim" and a PDF attachment
2. **Check Duplicate in Sheet** — looks up the Gmail message ID in the tracking sheet to skip already-processed emails
3. **Extract Claim Data** — sends the PDF to PDF API Hub's Parse PDF node and returns the full claim text as JSON
4. **AI Mode Router** — routes to OpenAI or Mock evaluator based on `ai_mode` config
5. **AI Claim Evaluator / Mock AI Evaluator** — produces a structured decision with `decision`, `reasoning`, `approved_amount`, `risk_flags`, and claimant details
6. **Parse AI Decision** — extracts the structured JSON from the AI response
7. **Log Claim to Sheet** — appends the claim record to Google Sheets
8. **Route by Decision** — branches into Approved, Rejected, or Manual Review paths
9. **PDF generation** — HTML-to-PDF nodes generate branded decision letters using PDF API Hub
10. **Sign + Watermark** — approval letters are digitally signed and stamped APPROVED or REJECTED
11. **Upload + Email** — PDFs are uploaded to Drive and the decision is emailed to the claimant

## Customisation tips

- Edit the AI system prompt in the **AI Claim Evaluator** node to match your own underwriting rules and risk thresholds
- Switch `mock_decision` in Workflow Config between `APPROVED`, `REJECTED`, and `MANUAL_REVIEW` to test all three paths without making any API calls
- Edit the HTML inside the letter-generation nodes to match your company branding
- Adjust the `&gt;$50,000 → MANUAL_REVIEW` threshold directly in the AI prompt

## PDF API Hub nodes used

- **Parse PDF** — extracts claim text from the uploaded PDF attachment
- **HTML to PDF** ×2 — generates the approval and rejection letter PDFs
- **Sign PDF** — adds an authorised digital signature to the approval letter
- **Add Watermark** ×2 — stamps APPROVED (green) or REJECTED (red) across the letter

---

## A note on quality

This is not an AI-generated template. AI was used as a coding assistant for certain pieces, but every path and every input has been manually validated end-to-end — including sending a real claim email, receiving the decision email back, verifying the signed and watermarked PDF was uploaded to the correct Google Drive folder, and confirming the Google Sheet was updated with the claim record. Both the OpenAI path and mock mode were tested manually across all three decision outcomes: APPROVED, REJECTED, and MANUAL_REVIEW.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
