# 📊 Transfer Google Analytics data to Airtable database

> ⚡ **3,040 views** · 📊 [Market Research & Insights](../)

## Description

This workflow allows you to get analytics of a website and store it Airtable. In this workflow, we get the analytics for the sessions grouped by the country. Based on your use-case, you can select different Dimensions and set different Metrics.

![workflow-screenshot](fileId:382)

You can use the Cron node or the Interval node to trigger the workflow on a particular interval and fetch the analytics data regularly.

Based on your use-case, you might want to store the data returned by Google Analytics to a database or a Google Sheet. Replace the Airtable node with the appropriate node.

## 🔗 Nodes Used

Airtable, Start, Google Analytics

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
