# 📊 Benchmark procurement KPIs with Google Sheets, Gmail, and Google Gemini

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs monthly to benchmark procurement KPI results stored in Google Sheets against external peer benchmarks, calculates gap and severity, uses Google Gemini to generate management-ready analysis, writes results back to Google Sheets, and emails leadership alerts and a consolidated monthly report via Gmail.

## How it works
1. Runs on a monthly schedule trigger.
2. Loads benchmarking settings and fetches all procurement KPI rows marked Ready from Google Sheets.
3. For each KPI, looks up the active KPI definition and active external benchmark in Google Sheets, and routes missing items to Review Required.
4. Builds a comparison context, validates numeric inputs, and calculates the benchmark gap percentage, performance status, and severity.
5. Sends the KPI context and calculated results to Google Gemini to generate a structured gap summary, likely causes, recommended actions, and a management comment.
6. Appends the completed benchmark result to a Google Sheets results sheet and marks the source KPI row as Processed.
7. Emails a leadership alert via Gmail when a KPI is below benchmark, and generates and emails an HTML monthly benchmark report summarizing all processed KPIs.

## Setup
1. Create and connect credentials for Google Sheets, Gmail, and Google Gemini (PaLM/AI Studio) in n8n.
2. Update the Google Sheets document and sheet tabs so they match the workflow’s expected structure (Procurement_KPIs, KPI_Definitions, External_Benchmarks, and Benchmark_Results) and ensure KPI rows have a status column.
3. Fill in recipient addresses (leadership_email and monthly_report_email) and adjust thresholds/status values in the workflow settings (near_benchmark_threshold_pct, warning/critical thresholds in KPI_Definitions, and active flags).
4. Ensure KPI_Definitions and External_Benchmarks contain active rows for each kpi_code you expect to process, and set at least one KPI row to Ready for testing.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
