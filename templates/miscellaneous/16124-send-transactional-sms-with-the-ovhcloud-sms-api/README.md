# 🔧 Send transactional SMS with the OVHcloud SMS API

> ⚡ **34 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow manually triggers an HTTP request to the OVHcloud SMS API, signing it with your OVH application credentials to send a transactional SMS to a specified phone number.

## How it works
1. Runs when you manually execute the workflow.
2. Sets the OVHcloud API credentials, SMS service name, sender, and target API region.
3. Defines the SMS recipient number and message text to send.
4. Generates the OVHcloud request URL, JSON body, timestamp, and SHA1-based X-Ovh-Signature headers.
5. Sends a POST request to the OVHcloud endpoint `/sms/{serviceName}/jobs` to create an SMS sending job.

## Setup
1. Create OVHcloud API application credentials (Application Key and Application Secret) and a Consumer Key with SMS permissions.
2. Replace the placeholder values for `APPLICATION_KEY`, `APPLICATION_SECRET`, `CONSUMER_KEY`, `SMS_SERVICE_NAME`, `SMS_SENDER`, and `OVH_REGION`.
3. Update the `receiver` (E.164 format) and `message` fields with the SMS details you want to send, and ensure your OVHcloud SMS account has available credits.

## Requirements
- OVH account
- SMS credits (API account)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
