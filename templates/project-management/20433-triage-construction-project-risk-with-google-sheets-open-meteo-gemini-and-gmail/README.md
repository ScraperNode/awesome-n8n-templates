# 📋 Triage construction project risk with Google Sheets, Open-Meteo, Gemini, and Gmail

> ⚡ **4 views** · 📋 [Project Management](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/Fh0QR48f9is

This workflow runs every weekday morning, reads active construction projects and related data from Google Sheets, pulls a 7-day forecast from Open-Meteo, computes delivery and cost risk scores, and uses Google Gemini to generate a structured escalation decision that is logged and emailed via Gmail.

## How it works
1. Runs on a cron schedule at 7:00 AM Monday–Friday.
2. Reads all projects marked Active from a Google Sheets “Projects” tab and fetches a 7-day weather forecast for each project from the Open-Meteo API using its latitude and longitude.
3. Loads supporting project data (budget/accounting, procurement, labor, site reports, and disputes) from other tabs in the same Google Sheets document.
4. Computes per-project schedule, procurement, labor, disputes, weather, reporting integrity, and budget risk metrics, then derives a rule-based decision (CONTINUE, INTERVENE, or STOP_REVIEW) plus the most impactful mitigation lever and deadline.
5. Sends the computed metrics to Google Gemini to produce a validated decision JSON (headline, reasons, critical action, and confidence) while enforcing guardrails on any decision override.
6. Appends the final decision record to a Google Sheets “Decision_Log” tab.
7. Emails the project manager via Gmail only when the decision is INTERVENE or STOP_REVIEW.

## Setup
1. Create and connect a Google Sheets Service Account credential with access to the spreadsheet, and update the spreadsheet ID and tab names (Projects, Budget_Accounting, Procurement, Labor, Site_Reports, Disputes, Decision_Log) to match your file.
2. Ensure your sheets contain the expected columns (for example project_id, status, latitude/longitude, planned and actual progress, procurement promised dates and critical_path, labor headcounts, dispute status/severity, and budget totals/spend/commitments).
3. Add a Google Gemini (PaLM) API credential for the Gemini chat model used in the decision step.
4. Add a Gmail OAuth2 credential and set the recipient(s) and email content fields as needed for your PM notifications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
