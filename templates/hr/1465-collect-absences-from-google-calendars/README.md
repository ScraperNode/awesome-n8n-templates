# 👥 Collect absences from Google Calendars

> ⚡ **3,870 views** · 👥 [HR & Recruitment](../)

## Description

This workflow checks a Google Calendar at 8am on the first of each month to get anything that has been marked as a Holiday or Illness. It then merges the count for each person and sends an email with the list.

To use this workflow you will need to set the credentials to use for the Google Calendar node and Send Email node. You will also need to select the calendar ID and fill out the information in the send email node.

This workflow searches for Events that contain "Holiday" or "Illness" in the summary. If you want to change this you can modify it in the Switch node.

## 🔗 Nodes Used

Cron, Send Email, Function, Start, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
