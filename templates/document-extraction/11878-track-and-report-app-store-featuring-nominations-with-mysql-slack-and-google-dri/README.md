# 🔬 Track and report App Store featuring nominations with MySQL, Slack and Google Drive

> ⚡ **35 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Apple App Store Connect: Featuring Nominations Report

This workflow automates the process of tracking and reporting app nominations submitted to Apple for App Store featuring consideration. It connects to the App Store Connect API to fetch your list of apps and submitted nominations, stores the data in a MySQL database, and generates a report of all nominations. The report is then exported as a CSV file and can be automatically shared via Google Drive and Slack.

#### Key features
* Authenticates with App Store Connect using JWT.
* Fetches all apps and submitted nominations, including details and related in-app events (API documentation: https://developer.apple.com/documentation/appstoreconnectapi/featuring-nominations)
* Stores and updates app and nomination data in MySQL tables.
* Generates a comprehensive nominations report with app and nomination details.
* Exports the report as a CSV file.
* Shares the report automatically to Google Drive and Slack.
* Runs on a weekly schedule, but can be triggered manually as well.

#### Setup Instructions
* Obtain your App Store Connect API credentials (Issuer ID, Key ID, and private key) from your Apple Developer account.
* Set up a MySQL database and configure the connection details in the workflow’s MySQL node(s).
* (Optional) Connect your Google Drive and Slack accounts using the respective n8n nodes if you want to share the report automatically.
* Update any credentials in the workflow to match your setup.
* Activate the workflow and set the schedule as needed.


This template is ideal for teams who regularly submit apps or updates for featuring on the App Store and want to keep track of their nomination history and status in a structured, automated way.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, MySQL, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
