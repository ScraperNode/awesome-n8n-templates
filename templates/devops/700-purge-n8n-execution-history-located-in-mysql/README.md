# ⚙️ Purge n8n execution history located in Mysql

> ⚡ **2,418 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow is useful if you have lots of tasks running daily.

MySQL node (or the database used to save data shown in n8n - could be Mongo, Postgres, ... -) remove old entries from execution_entity table that contains the history of the executed workflows.

![workflow-screenshot](fileId:267)

If you have multiple tasks executed every minute, 1024 rows will be created every day (60 minutes x 24 hours) per every task. This will increase the table size fastly.

SQL query deletes entries older than 30 days taking stoppedAt column as a reference for date calculations.

![image.png](fileId:265)

You only have to setup Mysql connection properly and config cron to execute once per day in a low traffic hour, this way

![image.png](fileId:266)

## 🔗 Nodes Used

Cron, Start, MySQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
