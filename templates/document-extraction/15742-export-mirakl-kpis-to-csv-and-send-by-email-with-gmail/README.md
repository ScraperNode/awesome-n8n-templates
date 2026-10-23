# 🔬 Export Mirakl KPIs to CSV and send by email with Gmail

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Export automatique des KPI Mirakl par email (CSV)

### How it works

1. The workflow is triggered on a schedule.
2. Configuration variables like API URL and email are set.
3. Offers are fetched from the Mirakl API.
4. Fetched data is formatted into a spreadsheet.
5. The formatted data is emailed using Gmail.

### Setup steps

- [ ] Configure the Schedule Trigger to define when the workflow runs.
- [ ] Set the API URL, key, and email address in the configuration node.
- [ ] Configure Gmail credentials for email sending.

### Customization

The schedule for the workflow can be modified according to requirements. The destination email address can also be customized.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
