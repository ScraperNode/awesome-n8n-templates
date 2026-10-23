# 🔒 Screen vendor bank change requests with Groq, Google DNS and data tables

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow captures vendor bank-detail change requests via an n8n form, checks them against a verified vendor register, validates sender-domain DNS and email tactics with Groq, and outputs a PASS/REVIEW/BLOCK verdict while logging every assessment to an n8n Data Table audit log.

## How it works
1. Receives a vendor payment-change request through an n8n Form trigger containing sender details, subject, email body, and the claimed IBAN.
2. Loads fraud-scoring thresholds and fetches the verified vendor bank register from an n8n Data Table.
3. Scores deterministic fraud signals by matching the sender domain and address to the register, validating IBAN formatting/checksum, and flagging mismatches like lookalike domains, Reply-To differences, unauthorised senders, or changed bank details.
4. Queries Google DNS over HTTP to check whether the sender domain publishes MX records.
5. Uses a Groq chat model to analyze the email subject/body for social-engineering pressure tactics and returns a structured pressure score and observed tactics.
6. Combines deterministic signals, MX results, and the pressure score into a final risk score and PASS/REVIEW/BLOCK verdict with recommended next steps.
7. Writes the full report to an n8n Data Table audit log and displays a completion page that either instructs a hold/callback verification or confirms the check passed.

## Setup
1. Create an n8n Data Table for your vendor register (for example: vendor_name, vendor_domain, authorised_emails, known_iban, callback_phone) and select it in the “Load Vendor Bank Register” node.
2. Create an n8n Data Table for the audit log (for example: checked_at, vendor_matched, from_address, claimed_iban, risk_band, risk_score, signal_codes, report) and select it in the “Record Check In Audit Log” node.
3. Add a Groq chat model credential for the Groq Chat Model node.
4. Review and tune the scoring thresholds (block_at, review_at, lookalike_max_distance) in the fraud policy step to match your risk tolerance.
5. Publish the form and share the n8n form URL with the team that reviews vendor bank-detail change requests.

## Requirements
- Two n8n Data tables: a vendor register and an audit log
- A chat model credential (Groq used here, any chat model works)
- No paid API — Google DNS is free to query

## Customization
- Swap the form trigger for a mailbox trigger to screen requests automatically
- Add a notification node on the held branch to alert an approver
- Retune the signal weights in the fraud scoring Code node for your risk tolerance

## 🔗 Nodes Used

HTTP Request, AI Agent, Structured Output Parser, n8n Form Trigger, Groq Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
