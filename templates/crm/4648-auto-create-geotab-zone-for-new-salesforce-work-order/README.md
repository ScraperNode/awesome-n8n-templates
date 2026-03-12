# 🤝 Auto-create Geotab zone for new Salesforce work order

> ⚡ **395 views** · 🤝 [CRM & Sales Operations](../)

## Description

### 📝 DESCRIPTION OF THE WORKFLOW

This workflow connects Salesforce and Geotab to streamline fleet tracking for field service jobs (Work Orders). When a new Work Order is created in Salesforce (with a 'New' status and valid coordinates), it creates a circular geofence zone in Geotab and updates the Work Order with the zone ID. If geolocation is missing, an alert email is sent to dedicated email.

The workflow uses a Salesforce Outbound Message to trigger an n8n webhook. It includes robust credential handling and optional logic to skip or notify on bad data.

**Use Cases:**

* Automating vehicle geofence setup for service visits
* Enhancing CRM-to-fleet system synchronisation
* Enforcing work orders data quality via alerts

**Integrations Used:**

* Salesforce
* Geotab API
* Microsoft Outlook (or any SMTP-compatible service)

**Tags:**
`geotab`, `salesforce`, `fleet management`, `gps tracking`, `field service`, `crm`, `automation`, `webhook`, `integration`

---

**ADDITIONAL RESOURCES**
#### 🔗 **Salesforce**

* [Salesforce Login](https://login.salesforce.com/)
* \[Salesforce Setup (Admin Console)]\([https://login.salesforce.com/](https://login.salesforce.com/) → click “Setup” gear icon)
* [Outbound Messages Documentation](https://help.salesforce.com/s/articleView?id=platform.workflow_managing_outbound_messages.htm)
* [Salesforce Developer Documentation](https://developer.salesforce.com/docs/)
* [Salesforce Workbench (API Testing Tool)](https://workbench.developerforce.com/)

---

#### 🔗 **Geotab**

* [Geotab Login (MyGeotab)](https://my.geotab.com/)
* [Geotab Developer Portal](https://developers.geotab.com/)
* [Geotab API Explorer](https://my.geotab.com/apiexplorer/)
* [Geotab SDK (JavaScript Samples)](https://developers.geotab.com/myGeotab/codeSamples/javascriptSamples)
* [Geotab Support Centre](https://support.geotab.com/)

---

## 🔗 Nodes Used

HTTP Request, Webhook, Salesforce, Microsoft Outlook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
