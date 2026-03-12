# 📁 Airtable base backups to S3

> ⚡ **392 views** · 📁 [File Management](../)

## Description

This workflow exports every table in a base as its own CSV, saves the files in a time-stamped folder in Amazon S3, pings you on Slack, and optionally prunes older copies. You get an automated weekly backup that is easy to inspect or re-import as needed. You can easily swap the S3 node for the storage provider of your choice.

++How it works++

Weekly Backup
- Schedule trigger fires weekly
- Sets and formats the week ex. [2025-W12]
- Create a folder in S3 bucket with the week
- Loops through all tables in Airtable base creating CSVs and uploading to the new path
- Slack message is sent on completion

Monthly Prune
- Schedule trigger fires weekly
- Sets a cut-off date 4 weeks in the past
- Lists folders in S3
- Deletes all folders &gt; 4 weeks old

++Setup Steps++

1. Clone workflow
2. Swap credentials for Airtable, AWS, and Slack
	- Ensure AWS credential has appropriate IAM policy to manage bucket & objects
3. Set workflow to "Active"

## 🔗 Nodes Used

Airtable, Slack, AWS S3, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
