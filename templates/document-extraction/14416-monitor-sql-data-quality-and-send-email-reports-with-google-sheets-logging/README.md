# 🔬 Monitor SQL data quality and send email reports with Google Sheets logging

> ⚡ **103 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automatically monitors and reports data quality for any SQL table using configurable checks and thresholds. It evaluates key metrics—including null values, duplicate records, row count anomalies, and outliers—and assigns a clear PASS, WARN, or FAIL status.

Designed for efficiency, the workflow dynamically injects table and column names from a central Config node, so you don’t need to edit SQL queries manually. All checks run in parallel, and results are consolidated into a structured HTML report with clear status indicators.

The report is automatically sent via email and logged into Google Sheets for historical tracking, auditing, and trend analysis.

⚙️ Setup
Update the Config node with your table name, column names, thresholds, and email recipient.
Connect your database credentials (Postgres/MySQL) in all query nodes.
Set up Gmail or SMTP credentials in the email node.
Connect your Google Sheets account and ensure required columns exist.
Activate the workflow (runs daily by default, can be customized).

This workflow is ideal for data analysts and analytics engineers who want a lightweight, automated solution to proactively monitor data quality without exporting large datasets or building complex pipelines.

## 🔗 Nodes Used

Google Sheets, Postgres, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
