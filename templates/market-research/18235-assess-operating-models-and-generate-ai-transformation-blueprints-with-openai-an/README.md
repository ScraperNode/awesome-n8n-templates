# 📊 Assess operating models and generate AI transformation blueprints with OpenAI and Google

> ⚡ **27 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs on demand to collect operating-model evidence from Google Drive and Google Sheets, analyzes inefficiencies and AI opportunities with OpenAI, and produces a target operating model, ROI scenarios, Mermaid diagrams, and an executive report saved back to Google Sheets and Google Drive.

## How it works
1. Starts manually (or optionally when a new client row is added to a Google Sheets queue).
2. Loads client configuration and sector guidance, then downloads source evidence from Google Drive and reads RACI, tools inventory, KPI snapshot, and benchmarks from Google Sheets.
3. Normalizes and scores the collected evidence into a single structured current-state dataset with basic data-quality signals.
4. Uses OpenAI to analyze inefficiencies and generate AI/automation recommendations aligned to the selected sector and compliance needs.
5. Uses OpenAI to generate a future-state target operating model (org design, technology architecture, roadmap, and a new RACI) and calculates cautious/hybrid/aggressive ROI scenarios.
6. Builds Mermaid diagrams and generates an executive transformation report plus an internal consultant rationale, then assembles a final payload.
7. Writes the structured outputs (models, recommendations, RACI, diagrams, audit summary, executive summary, KPI benchmarking/projections) to Google Sheets and uploads a consolidated text report to Google Drive.

## Setup
1. Add credentials for Google Drive, Google Sheets, and OpenAI (and Slack, Gmail, and Supabase only if you enable the optional modules).
2. In the client configuration, set the Google Drive source file ID, master Google Sheet ID, and the output Google Drive folder ID, plus optional notification email and Slack channel ID.
3. Create and name the required Google Sheets tabs referenced by the workflow (for example RACI_Matrix, Tools_Inventory, KPI_Snapshot, Benchmarks, Client_Models, Recommendations, RACI_Output.csv, Diagrams.csv, Audit_Master.csv, Executive_Summary.csv, Consultant_Rationale.csv, AI_Projections, KPI_Benchmarking.csv).
4. Review and adjust the financial assumptions and ADKAR/stakeholder inputs in the configuration so the ROI and change-readiness outputs reflect your context.
5. If using the optional queue trigger, update the queue spreadsheet ID and ensure the Clients_Queue sheet contains the required configuration columns before enabling the trigger and queue status updates.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, Supabase, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
