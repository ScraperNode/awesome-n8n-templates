# ⚙️ Monitor a file for changes and send an alert

> ⚡ **3,487 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This flow monitors a file for changes of its content. If changed, an alert is sent out and you receive it as push, SMS or voice call on [SIGNL4](https://www.signl4.com).

User cases:
- Log-file monitoring
- Monitoring of production data
- Integration with third-party systems via file interface
- Etc.

Sample file "alert-data.json":
```
{
    "Body": "Alert in building A2.",
    "Done": false,
    "eventId": "2518088743722201372_4ee5617b-2731-4d38-8e16-e4148b8fb8a0"
}
```

Body: The alert text to be sent.
Done: If false this is a new alert. If true this indicated the alert has been closed.
eventId: Last SIGNL4 event ID written by SIGNL4.

This flow can be easily adapted for database monitoring as well.

## 🔗 Nodes Used

Cron, Function, Read Binary File, Start, Write Binary File, Convert to/from binary data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
