# ⚙️ Scheduled website uptime monitor with Slack alert

> ⚡ **132 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview
This workflow periodically checks the status of a website. If the website is not reachable (returns an error or non-2xx status code), it sends an alert to a specified Slack channel.

Use Case: Monitor your website, client websites, or critical APIs for downtime and receive immediate notifications.

## How It Works
This workflow operates in four main steps:

Scheduled Trigger:

A Cron node is configured to run at regular intervals (e.g., every 15 minutes, hourly).

HTTP Request to Website:

An HTTP Request node attempts to make a GET request to the specified website URL.

It's set to ignore HTTP errors so that the workflow doesn't stop immediately if the site is down, allowing the "If" node to handle the status.

Check Website Status (If Node):

An If node checks the statusCode returned by the HTTP Request node.

If the statusCode is not in the 2xx range (indicating success), the workflow proceeds to the "Send Slack Alert" branch. Otherwise, it does nothing.

Send Slack Alert:

A Slack node sends a message to a predefined Slack channel, notifying you that the website is down and including details like the URL and status code.

## Setup Steps
To get this workflow up and running, follow these instructions:

Step 1: Create Slack API Credentials in n8n

In your n8n instance, click on Credentials in the left sidebar.

Click New Credential.

Search for and select "Slack API".

Follow the instructions to connect your Slack workspace. You'll likely need to create a Slack App and get a Bot User OAuth Token. Save the credential.

Make note of the Credential Name (e.g., "My 
Slack Account").
Schedule Monitor (Every Hour) Node:

"Mode": Set your desired polling interval (e.g., everyHour, every15Minutes, every5Minutes).

"Hour" / "Minute": Adjust if you want specific times for hourly/daily checks.

Check Website HTTP Status Node:

In the "URL" field, replace https://www.google.com with the actual URL of the website you want to monitor.

Send Slack Alert Node:

Select your Slack credential under the "Credentials" section.

In the "Channel" field, replace #website-alerts with the actual Slack channel where you want to receive alerts.

## 🔗 Nodes Used

Cron, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
