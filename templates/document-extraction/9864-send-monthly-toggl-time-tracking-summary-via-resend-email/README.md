# 🔬 Send monthly Toggl time tracking summary via Resend email

> ⚡ **166 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description
This workflow fetches Toggl Track summary data for the previous month, aggregates hours per client and project, and emails a clean HTML report via Resend.

## How it works
1) Compute previous month period.
2) Fetch Toggl summary (grouping=clients, sub_grouping=projects).
3) Fetch clients and projects for proper names.
4) Merge and aggregate seconds to hours.
5) Generate HTML raport. 
6) Send raport via Resend API.

## Requirements
- Toggl free account (Login, Pass, TOGGL_WORKSPACE_ID).
- Resend.com free account (RESEND_API_KEY).

## Customization
- Change trigger time in the Schedule Trigger node.
- Modify period calculation for weekly/quarterly in Get Toggle Summary node.
- Add archived projects by querying with active=false&archived=true and merging.

## Documentation
- [Toggle docs](https://engineering.toggl.com/docs/)
- [Resend.com docs](https://resend.com/docs/)

## Author
Krystian Syryca - [krsweb.pl](https://krsweb.pl/automatyzacja-raportow-toggl-w-n8n/)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
