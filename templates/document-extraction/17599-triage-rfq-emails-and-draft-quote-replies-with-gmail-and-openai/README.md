# 🔬 Triage RFQ emails and draft quote replies with Gmail and OpenAI

> ⚡ **24 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors Gmail for unread RFQ emails, optionally extracts text from attached PDFs, and uses OpenAI to pull structured quote details and check completeness before creating a Gmail draft reply with either a quote skeleton or a targeted missing-information request.

## How it works
1. Triggers every minute when an unread Gmail message matches the RFQ subject search query.
2. Normalizes key email metadata (sender, subject, thread ID, timestamp) and the email body text for downstream use.
3. If a PDF attachment is present, extracts the PDF text and appends it to the email body to form a single RFQ text payload.
4. Uses OpenAI to extract structured RFQ fields (company, contact, line items, dates, address, packaging, incoterms, and special requirements) while leaving unstated fields as null.
5. Checks the extracted data against a configurable required-field list and produces a missing-items summary and a complete/incomplete flag.
6. Creates a Gmail draft reply in the same thread that either includes a quote skeleton with line items (for complete RFQs) or requests only the missing details (for incomplete RFQs).

## Setup
1. Connect your Gmail account and ensure it can read unread emails and create drafts in your mailbox.
2. Add an OpenAI credential and select the model you want to use for the extraction step.
3. Update the Gmail trigger search query to match how RFQs arrive in your inbox and confirm attachment downloading is enabled.
4. Edit the required fields list in the completeness check code to match what your team needs before an RFQ is quotable.
5. Review and customize the two Gmail draft message templates (quote skeleton and missing-info request) to match your company wording and quoting process.

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI Chat Model, Extract from File, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
