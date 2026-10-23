# 👥 Generate and email daily AI-powered HR changes digest from SAP SuccessFactors EC with GPT-4o-mini and Gmail

> ⚡ **186 views** · 👥 [HR & Recruitment](../)

## Description

### How it works

1. Triggers daily or manually for execution.
2. Configures base URL and email settings for SAP SF.
3. Fetches HR change data from SuccessFactors.
4. Aggregates data and checks for errors or changes.
5. Processes results with AI and sends digest or error emails.

### Setup steps

- [ ] Ensure SAP SuccessFactors API credentials are set for data fetching.
- [ ] Configure email settings including recipient for digest and error reporting.
- [ ] Schedule the n8n workflow at an appropriate time, typically early morning.

### Customization

- [ ] Adjust the schedule time and email recipient as per organizational needs.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
