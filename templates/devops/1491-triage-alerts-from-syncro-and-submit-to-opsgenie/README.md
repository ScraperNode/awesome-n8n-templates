# ⚙️ Triage alerts from Syncro and submit to OpsGenie

> ⚡ **1,421 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow will take an alert from Syncro, determine if it's an agent_offline_trigger type, then determine if it's a new alert or a close to an existing alert, and then submit it to OpsGenie. New alerts will create a new alert in OpsGenie and resolved alerts will close the alert in OpsGenie. It doesn't require any kind of Google Sheets because OpsGenie allows you to submit a unique ID (known as an alias) along with the alert, which can be referenced later when closing the alert. The trigger type can be changed to suit your needs. You will need to create an API integration in OpsGenie. In Syncro, in addition to setting up the appropriate notification to webhook, you will also need a script that closes the agent_offline_trigger alert and an automated remediation to trigger that script when the asset goes offline (the script is queued and run when the asset comes back online).

&gt; This workflow is part of an MSP collection, The original can be found here: https://github.com/bionemesis/n8nsyncro

## 🔗 Nodes Used

HTTP Request, Start, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
