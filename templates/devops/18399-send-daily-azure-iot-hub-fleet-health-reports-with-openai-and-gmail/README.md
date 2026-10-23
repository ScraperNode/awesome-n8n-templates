# ⚙️ Send daily Azure IoT Hub fleet health reports with OpenAI and Gmail

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily at 9:00 AM to query your Azure IoT Hub device registry, classify fleet health (online, offline, stale, disabled), generate an HTML executive summary with OpenAI, and email the report through Gmail.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Builds a short-lived Azure IoT Hub SAS token from the provided IoT Hub connection string.
3. Calls the Azure IoT Hub device query REST API to retrieve device status, connection state, last activity time, and reported properties for the full fleet.
4. Classifies devices into online, offline, stale (inactive for over 24 hours), and disabled, and produces fleet totals plus a per-device snapshot.
5. Sends the fleet summary JSON to OpenAI to generate a concise HTML report with risks, top problem devices, and recommendations.
6. Emails the AI-generated HTML report to the configured recipients using Gmail.

## Setup
1. Create or choose an Azure IoT Hub shared access policy with registry read permissions (for example, `registryRead`) and paste its connection string into the workflow’s IoT Hub connection string placeholder.
2. Add an OpenAI API credential for the OpenAI step and select the model you want to use.
3. Add a Gmail OAuth2 credential and set the report recipient email address(es) in the email step.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
