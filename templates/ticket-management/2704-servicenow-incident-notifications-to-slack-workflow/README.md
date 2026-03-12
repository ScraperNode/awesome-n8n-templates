# 🎫 ServiceNow incident notifications to Slack workflow

> ⚡ **3,205 views** · 🎫 [Ticket Management & Triage](../)

## Description

### Who is this for?

This workflow is ideal for IT operations teams or system administrators who use ServiceNow to track incidents and Slack for team communication. It provides real-time updates on new ServiceNow incidents directly in a designated Slack channel, ensuring timely response and collaboration.

### What problem is this workflow solving? / Use case

Manually monitoring ServiceNow for new incidents can be time-consuming and prone to delays. This workflow automates the process, ensuring that team members are instantly notified of new incidents, complete with all relevant details, in a Slack channel. It enhances operational efficiency and incident response time.

### What this workflow does

1. **Schedule or Manual Trigger**: The workflow can be triggered manually or set to run automatically every 5 minutes.
2. **Retrieve New Incidents**: Fetches incidents created in ServiceNow within the last 5 minutes.
3. **Error Handling**: Posts an error message in Slack if there are issues connecting to ServiceNow.
4. **Incident Processing**:
    - If new incidents are found, they are sorted in ascending order by their number.
    - Detailed incident information is formatted and sent to a specified Slack channel.
5. **No Incidents**: If no new incidents are found, the workflow does nothing.

### Setup

1. **ServiceNow API Credentials**: Configure ServiceNow Basic Authentication in the workflow to connect to your ServiceNow instance.
2. **Slack API Credentials**: Add your Slack API credentials to enable message posting.
3. **Slack Channel Configuration**:
    - Define the Slack channel where notifications should be sent.
    - Ensure the channel ID is correctly set in the Slack node.
4. **Adjust the Schedule**: Modify the schedule in the `Schedule Trigger` node to suit your requirements.

### How to customize this workflow to your needs

1. **Notification Format**:
    - Customize the Slack message format to include additional or fewer details.
    - Update the `Blocks` section in the Slack node for personalized messages.
2. **Incident Query Parameters**:
    - Adjust the `sysparm_query` parameter in the ServiceNow node to filter incidents based on specific criteria.
3. **Error Handling**:
    - Modify the error message in the Slack node for more detailed troubleshooting information.

### Features

- **Real-Time Notifications**: Immediate updates on new ServiceNow incidents.
- **Error Handling**: Alerts in Slack if the workflow encounters issues connecting to ServiceNow.
- **Customizable Notifications**: Flexibility to modify incident details sent to Slack.

This workflow streamlines incident management and fosters collaboration by delivering actionable updates directly to your team.

## 🔗 Nodes Used

Slack, ServiceNow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
