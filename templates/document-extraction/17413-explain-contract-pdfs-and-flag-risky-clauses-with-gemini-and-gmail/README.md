# 🔬 Explain contract PDFs and flag risky clauses with Gemini and Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a contract PDF via an n8n form, extracts its text, uses Google Gemini to generate a structured plain-language review with risk flags, logs the results to Google Sheets, and emails the requester a different summary based on the detected risk level.

## How it works
1. Receives a contract PDF, document type, and optional concern through an n8n Form trigger.
2. Extracts selectable text from the uploaded PDF and stops with a Gmail email if the document appears unreadable (for example, a scanned PDF).
3. Sends the extracted contract text and the user’s concern to Google Gemini to produce a structured plain-language summary, risk level, obligations, key dates, costs, risky clauses with severity, and questions to ask.
4. Formats the structured Gemini output into email-friendly sections and calculates a risky-clause count.
5. Appends the review details to a Google Sheets spreadsheet for recordkeeping.
6. Routes by the risk level and sends the requester a tailored Gmail message (high: “do not sign yet”, medium: “worth a closer look”, low: plain summary, otherwise: generic summary), and sends a failure email if the AI review errors.

## Setup
1. Connect credentials for Google Gemini (PaLM) API, Gmail, and Google Sheets.
2. Select the target Google Sheets spreadsheet and sheet in the append step (for example, a sheet named “Contract Reviews”).
3. Publish the n8n form and share its URL so users can upload text-based PDFs (not scans) and provide their email, document type, and optional concern.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
