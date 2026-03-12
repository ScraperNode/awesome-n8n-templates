# ⚙️ AWS Azure GCP multi-cloud cost monitoring & alerts for budget control

> ⚡ **981 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This automated n8n workflow tracks hourly cloud spending across **AWS, Azure, and GCP**. It detects cost spikes or budget overruns in real time, tags affected resources, and sends alerts via email, WhatsApp, or Slack. This ensures proactive cost management and prevents budget breaches.

---

## **Good to Know**

* AWS, Azure, and GCP APIs must have read access to billing data.
* Use **secure credentials** for API keys or service accounts.
* The workflow runs **every hour** for near real-time cost tracking.
* Alerts can be sent to multiple channels (Email, WhatsApp, Slack).
* Tags are applied automatically to affected resources for easy tracking.

---

## **How It Works**

1. **Hourly Cron Trigger** – Starts the workflow every hour to fetch updated billing data.
2. **AWS Billing Fetch** – Retrieves latest cost and usage data via AWS Cost Explorer API.
3. **Azure Billing Fetch** – Retrieves subscription cost data from Azure Cost Management API.
4. **GCP Billing Fetch** – Retrieves project-level spend data using GCP Cloud Billing API.
5. **Data Parser** – Combines and cleans data from all three clouds into a unified format.
6. **Cost Spike Detector** – Identifies unusual spending patterns or budget overruns.
7. **Owner Identifier** – Matches resources to their respective owners or teams.
8. **Auto-Tag Resource** – Tags the affected resource for quick identification and follow-up.
9. **Alert Sender** – Sends notifications through Email, WhatsApp, and Slack with detailed cost reports.

---

## **How to Use**

1. Import the workflow into **n8n**.
2. Configure credentials for **AWS, Azure, and GCP** billing APIs.
3. Set your **budget threshold** in the Cost Spike Detector node.
4. Test the workflow to ensure all APIs fetch data correctly.
5. Adjust the Cron Trigger for your preferred monitoring frequency.
6. Monitor alert logs to track and manage cost spikes.

---

## **Requirements**

* AWS Access Key & Secret Key with Cost Explorer Read Permissions.
* Azure Client ID, Tenant ID, Client Secret with Cost Management Reader Role.
* GCP Service Account JSON Key with Billing Account Viewer Role.

---

## **Customizing This Workflow**

* Change the **trigger frequency** in the Cron node (e.g., every 15 min for faster alerts).
* Modify **alert channels** to include additional messaging platforms.
* Adjust **cost spike detection thresholds** to suit your organization’s budget rules.
* Extend the Data Parser to generate more detailed cost breakdowns.

---

Want a tailored workflow for your business? Our experts can craft it quickly [Contact our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

Cron, Send Email, HTTP Request, Slack, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
