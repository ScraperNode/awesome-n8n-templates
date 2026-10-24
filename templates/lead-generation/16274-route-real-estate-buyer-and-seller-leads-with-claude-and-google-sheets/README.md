# 🎣 Route real estate buyer and seller leads with Claude and Google Sheets

> ⚡ **119 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow hosts an n8n lead-capture form, uses Anthropic Claude to score and classify real estate inquiries, then routes ready leads to Gmail and Google Sheets while logging early-stage leads to a separate Google Sheets tab.

## How it works
1. Receives a new submission from an n8n Form trigger with contact details, intent, area, budget, timeline, financing status, and notes.
2. Normalizes the submitted fields (for example trimming strings, lowercasing email, and adding a timestamp) for consistent downstream processing.
3. Sends the normalized lead details to the Anthropic Messages API (Claude) to return a strict JSON classification, summary, timeline band, financing readiness, recommended agent role, and score.
4. Parses the Claude JSON response, clamps the score to a 1–10 range, and calculates whether the lead is “ready” (score 7).
5. If the lead is ready, sends a formatted Gmail alert to the agent and appends the lead to the “Active Leads” tab in Google Sheets.
6. If the lead is not ready, appends the lead to the “Nurture Leads” tab in Google Sheets.
7. Returns a confirmation message to the form submitter after the lead is routed.

## Setup
1. Create an Anthropic HTTP Header Auth credential (x-api-key) and attach it to the HTTP request to the Anthropic Messages API.
2. Add a Gmail credential and replace the placeholder recipient address (you@example.com) with your agent inbox.
3. Add a Google Sheets credential, create a spreadsheet with “Active Leads” and “Nurture Leads” tabs, and replace REPLACE_WITH_YOUR_SHEET_ID in both Google Sheets append steps.
4. Review and adjust the n8n form fields and the Claude prompt rubric (scoring, readiness threshold, and schema) to match your lead intake process.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
