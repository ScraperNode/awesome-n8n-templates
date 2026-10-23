# ⚙️ Send weekly SQL Server health reports via email

> ⚡ **275 views** · ⚙️ [DevOps & CI/CD](../)

## Description

#### Description

This workflow runs every Monday morning and automatically diagnoses the health of your SQL Server database across 4 dimensions — slow queries, missing indexes, index fragmentation, and server wait stats. It merges all results, scores each finding by severity, and sends a beautifully formatted HTML email report only when issues are found. Zero noise when everything is healthy.

#### Who it's for

SQL Server developers, DBAs, and backend engineers who manage production MSSQL databases and want weekly automated diagnostics delivered to their inbox — without manual querying or third-party monitoring tools.

### How it works:

1. Schedule Trigger fires every Monday at 7 AM.

2. 4 SQL nodes run in parallel — slow queries, missing indexes, index fragmentation, wait stats.

3. Merge node combines all results into a single stream.

4. Code node filters by field signature, scores severity (critical/warning), and builds the HTML email.

5. Send Email dispatches the report only when issues exist.


#### ⚙️ Setup required:

• Add MSSQL credential with VIEW SERVER STATE permission

• Add SMTP or Gmail credential for email

• Adjust severity thresholds in the Code node to match your workload

## 🔗 Nodes Used

Send Email, Microsoft SQL, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
