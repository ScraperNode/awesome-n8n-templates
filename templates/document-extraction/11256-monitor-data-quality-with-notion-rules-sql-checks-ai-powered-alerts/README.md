# 🔬 Monitor data quality with Notion rules, SQL checks & AI-powered alerts

> ⚡ **186 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description

This workflow continuously validates data quality using rules stored in Notion, runs anomaly checks against your SQL database, generates AI-powered diagnostics, and alerts your team only when real issues occur.

Notion holds all data quality rules (source, field, condition, severity).
n8n reads them on schedule, converts them into live SQL queries, and aggregates anomalies into a global run summary.

The workflow then scores data health, creates a Notion run record, optionally opens a Jira issue, and sends a Slack/email alert including AI-generated root cause & recommended fixes.

## Target users
Perfect for:
- DataOps
-  Analytics
-  Product Data
-  BI
-  Compliance
-  ETL/ELT pipelines
-  Platform reliability teams.

## Workflow steps
![image.png](fileId:3462)

## How it works
1) Notion → Rules Database
   Each entry defines a check (table, field, condition, severity).
2) n8n → Dynamic Query Execution
   Rules are converted into SQL and checked automatically.

3) Summary Engine
   Aggregates anomalies, computes data quality score.

4) AI Diagnostic Layer
   Root cause analysis + recommended fix plan.

5) Incident Handling
   Notion Run Page + optional Slack/Email/Jira escalation.
   Silent exit when no anomaly = zero noise.

## Setup Instructions 

- Create two Notion databases:
	- Data Quality Rules → source / field / rule / severity / owner
	![image.png](fileId:3460)

	- Data Quality Runs → run_id / timestamp / score / anomalies / trend / AI summary/recommendation
![image.png](fileId:3461)
- Connect SQL database (Postgres / Supabase / Redshift etc.)
- Add OpenAI credentials for AI analysis
- Connect Slack + Gmail + Jira for incident alerts
- Set your execution schedule (daily/weekly)

## Expected outcomes

- Fully automated, rule-based data quality monitoring with minimal maintenance and zero manual checking.
- When everything is healthy, runs remain silent.
- When data breaks, the team is notified instantly: with context, root cause insight, and a structured remediation output.

## Tutorial video
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=3FKUET16dVk)

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Postgres, Slack, Jira Software, Gmail, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
