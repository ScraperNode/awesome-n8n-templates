# ⚙️ Monitor if a page is alive and notify via Twilio SMS if not

> ⚡ **2,850 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Workflow Purpose

This workflow periodically checks a service's availability and sends an SMS notification if the service is down.

## High-Level Steps

Schedule Trigger: The workflow is triggered at a specified interval, such as every minute.
HTTP Request: An HTTP request is sent to the URL of the service being monitored.
If: The HTTP status code of the response is checked.
If the status code is 200 (OK), the workflow ends.
If the status code is not 200, indicating a potential issue, an SMS notification is sent using Twilio.

## Setup
Setting up this workflow is relatively straightforward and should only take a few minutes:

1. Create a new n8n workflow.
2. Add the nodes: Schedule Trigger, HTTP Request, If, and Twilio.
3. Configure the nodes:
- Schedule Trigger: Specify the desired interval.
- HTTP Request: Enter the URL of the service to be monitored.
- If: Set the condition to check for a status code other than 200.
4. Twilio: Enter the Twilio account credentials and the phone numbers for sending and receiving the SMS notification.
5. Connect the nodes: Connect the nodes as shown in the workflow diagram.
6. Activate the workflow: Save the workflow and activate it.


## Additional Notes

- The workflow can be customized by changing the interval, the URL, the Twilio credentials, and the SMS message.
- This workflow is a simple example, and more complex workflows can be created to meet specific needs.

## 🔗 Nodes Used

HTTP Request, Twilio, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
