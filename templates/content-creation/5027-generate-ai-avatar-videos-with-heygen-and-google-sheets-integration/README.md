# 🎬 Generate AI avatar videos with HeyGen and Google Sheets integration

> ⚡ **3,171 views** · 🎬 [Content Creation & Video](../)

## Description

This template streamlines your AI Avatar Video Automation workflow by connecting Google sheets for Voice Text & AI Avatar Video Link storage, using HTTP Nodes for connecting Heygen API & AI Avatar/Voice Id for automated Video generation.

Pre-requisites
Before setting up this workflow, ensure you have:

A Google account with access to Google Sheets

A Heygen Account with API access in account's settings.



n8n.io account with workflow access

Setup Instructions

Configure Data Source
Create a Google Sheet with the following columns: Script/Voice Text & Final AI Avatar Video Link.

Connect Google Sheet
Add your Google sheet credentials in the “Google Sheet” node
Specify the folder path where your columns are stored.

Configure the node to retrieve files based on filenames from your Google Sheet

Set Up HTTP Node with Heygen API Credentials

Configure the node to generate AI Video based on Script/Voice Text.


Configure HTTP Node 2
Connect Heygen API Credentials
Set up the API node to Get the AI Avatar Video Link.

then finally setup Google sheet node again to get & upload the final AI Avatar video link in the column "the Final AI Avatar Video Link"

Workflow Automation Setup
Configure the scheduler node to run at your preferred frequency
Set up error handling to notify you of any posting failures


Execution Instructions
After completing all connections, test the workflow.

Monitor the execution in the n8n dashboard to ensure proper functioning

View the “Executions” tab to track successful  and troubleshoot any errors.

This template saves hours of manual AI Avatar video Creation Process. use this without the daily manual effort.


Details
Nodes used in workflow
Manual Trigger Node
Google Sheet Node 1
HTTP Node 1
HTTP Node 2
Google Sheets Node 2

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
