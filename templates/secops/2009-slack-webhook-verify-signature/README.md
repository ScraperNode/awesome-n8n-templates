# 🔒 Slack webhook - verify signature

> ⚡ **2,035 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Description
This template will help you verify that incoming calls from a Slack webhook actually come from Slack and not some unknown third-party services. 
It is mainly used to prevent attacks from malicious bots or individuals. This is a Sub-Workflow, so it should be used inside the main workflow that contains the webhook listening for Slack requests.

## How to Use
### What to Edit
You should set the Slack Signing Secret that you can find on your Slack App dashboard in the general tab. It should be located under the following URL:

**https://api.slack.com/apps/[SLACK_APP_ID]/general**

### Input
The input should be the received Slack request. This workflow should then be placed directly after the Slack Webhook.

### Outputs
#### Success Output
If the signature was verified successfully, we return a key `verified_signature` set to `true` along with data from the Slack request itself.

#### Error Output
When the signature could not be verified, we raise an error. You can handle this case in your main workflow by using an Error Workflow or by changing your node settings and choosing some actions in case of an error.

## Changelog
### Version 1.0.1 (2023-12-11)
- Changed `replace` by `replaceAll` in JS code in case of several arguments.
- Added some custom replacements that `encodeURIComponent` does not take into account

## 🔗 Nodes Used

Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
