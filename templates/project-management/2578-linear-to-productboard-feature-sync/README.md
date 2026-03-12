# 📋 Linear to Productboard feature sync

> ⚡ **660 views** · 📋 [Project Management](../)

## Description

### Linear Project/Issue Status and End Date to Productboard feature Sync

Sync project and issue data between Linear and Productboard to keep teams aligned. This workflow updates Productboard features with the status and end date from Linear projects or due date from Linear issues. It ensures consistent data and sends a Slack notification whenever changes are made.

## Features
1. Listens for updates in Linear projects/issues.
2. Maps Linear statuses to Productboard feature statuses.
3. Updates Productboard feature details including timeframe.
4. Sends a Slack notification summarizing the updates.

## Setup
1. **Linear Credentials**: Add your Linear API credentials in n8n.  
2. **Productboard Credentials**: Configure the Productboard API credentials in n8n.  
3. **Linear Projects or Issues**: Select the Linear project(s) or Issue(s) you want to monitor for updates.  
4. **Productboard Custom Field**: Create a custom field in Productboard named *"Linear"*. This field should store the URL of the Linear project or issue you want to sync. Retrieve the UUID of the custom field in Productboard and set it up in the "Get Productboard Feature ID" node.
5. **Slack Notification**: Update the Slack node with the desired Slack channel ID.  
6. **Activate the Workflow**: Enable the workflow to automatically sync data when triggered by updates in Linear.

## 🔗 Nodes Used

HTTP Request, Slack, Linear Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
