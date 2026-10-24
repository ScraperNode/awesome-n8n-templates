# 🔬 Monitor supplier diversity and ESG spend with Google Sheets, Groq and Notion

> ⚡ **91 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs every Monday to read supplier, transaction, and target data from Google Sheets, calculates supplier diversity and ESG spend performance, generates rebalancing recommendations with Groq when targets are missed, then publishes a scorecard to Notion and emails a weekly briefing via Gmail.

## How it works
1. Runs every Monday on a schedule trigger.
2. Pulls supplier master data, procurement transactions, and target thresholds from Google Sheets.
3. Normalizes and joins transactions to suppliers, then calculates total spend plus diverse, women-owned, minority-owned, and ESG-qualified spend versus the configured targets.
4. If all targets are met or there is no qualifying spend data, it generates an executive summary with Groq and skips rebalancing.
5. If any target is missed, it identifies category gaps and qualified low-risk diverse suppliers, asks Groq to propose FROM → TO spend shifts, and validates/caps the recommendations against ESG, risk, and rebalancing limits.
6. Creates a Notion database page with the weekly scorecard and sends a formatted HTML briefing email via Gmail (including a link to the Notion page when available).

## Setup
1. Add Google Sheets credentials and set the Spreadsheet ID and sheet/tab names (Suppliers, Transcations, Targets) in the configuration values.
2. Add Groq API credentials for both Groq chat model steps.
3. Add Notion credentials, set the Notion database ID, and ensure the database properties/select options match the workflow outputs (e.g., ON_TRACK/NEEDS_ATTENTION/NO_DATA, MET/BELOW_TARGET, HIGH/MEDIUM/LOW, NONE/HUMAN_REVIEW).
4. Add Gmail credentials and set the recipient email address used for the weekly briefing.
5. Review the target metrics in the Targets sheet (or defaults in the code) and adjust the Monday run time in the schedule trigger if needed.

## 🔗 Nodes Used

Google Sheets, Gmail, Notion, Schedule Trigger, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
