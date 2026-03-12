# 🔬 Automated monthly energy reports with PostgreSQL, PDF.co & email delivery

> ⚡ **114 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Monthly Energy Generation Report (PostgreSQL → PDF → Email)


This workflow automatically collects monthly energy generation data from a PostgreSQL database, converts it into a structured PDF report and emails it to stakeholders. It eliminates manual report creation and ensures timely delivery of performance summaries.


## Who’s it for

* Energy companies monitoring solar, wind or hydro generation
* Operations & maintenance (O\&M) teams needing monthly summaries
* Managers and executives who require periodic performance reports
* Data analysts who want automated reporting instead of manual exports

## How it works

1. **Monthly Trigger** → Schedules the workflow to run once a month.
2. **Postgres Node** → Fetches energy data from the `energy_data` table.
3. **Code Node (Transform Data)** → Structures the raw records into JSON with metadata (`date_range`, `records`, `note`).
4. **HTTP Request (PDF.co API)** → Converts structured data into a formatted PDF report.
5. **Gmail Node (Send Report)** → Sends the PDF report (or link) via email to the configured recipient.

## How to set up

1. Import the workflow JSON into n8n.
2. Configure credentials:

	* PostgreSQL connection (DB host, user, password, database, schema).
	* Gmail OAuth2 credentials.
	* PDF.co API key (for HTML → PDF conversion).
3. Update:

	* Database table (`energy_data`).
	* Email recipients in the Gmail node.
	* PDF template (if custom formatting is required).
4. Activate workflow.

## Requirements

* n8n (self-hosted or cloud)
* PostgreSQL database with energy generation data
* PDF.co API account with valid API key
* Gmail account with OAuth2 access
* Internet access for API calls

## How to customize

* Change the **SQL query** in the Postgres node to filter specific plants or date ranges.
* Update the **Code node** to add extra fields (e.g., average power, anomalies).
* Modify the **PDF.co request body** to use a custom HTML template for branding.
* Replace Gmail with **Outlook, SMTP, or Slack** for distribution.

## Add-ons

* Add Slack/Teams node to notify teams when reports are sent.
* Store PDFs in Google Drive or S3 for archival.
* Add a dashboard (e.g., Grafana or Superset) that references the same DB for real-time view.
* Integrate with Jira to auto-create tasks for underperformance alerts.

## Use Case Examples

* Solar company emailing monthly reports to plant owners.
* Wind farm operator generating regulatory compliance reports.
* O&M teams automating KPI summaries for executives.
* Consulting firms monitoring multiple clients’ energy production.


## Common Troubleshooting

| Issue | Possible Cause | Solution |
| ------------------------------ | -------------------------------------- | ------------------------------------------------------- |
| Workflow does not trigger | Cron not set correctly | Verify `Schedule Trigger` node interval is monthly |
| No data returned from Postgres | Wrong schema/table or DB creds | Check DB connection and table name |
| PDF not generated | Invalid/missing PDF.co API key | Generate a new key in PDF.co dashboard |
| Email not sent | Gmail OAuth expired or wrong recipient | Reconnect Gmail credentials and confirm recipient email |
| PDF output malformed | Incorrect JSON → HTML conversion | Check Code node formatting and PDF.co request body |


## **Need Help?**

Our [n8n workflow automation](https://www.weblineindia.com/n8n-automation/) experts at WeblineIndia can help you:

* Set up the PostgreSQL connection securely, 
* Customize the PDF layout with your company branding, 
* Add more delivery channels (Slack, Teams, S3), 
* Extend reporting logic (KPIs, charts, anomaly detection), 
* And so much more.

## 🔗 Nodes Used

HTTP Request, Postgres, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
