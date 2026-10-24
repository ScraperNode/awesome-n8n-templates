# 🔒 Deduplicate security alerts into unified cases with Claude and Slack

> ⚡ **11 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow ingests SIEM, EDR, and cloud security alerts via webhooks, normalizes and buffers them, then runs a scheduled deduplication pass that uses Anthropic Claude only for ambiguous clusters before bulk upserting unified cases into a ticketing system and notifying a Slack channel.

## How it works
1. Receives incoming alerts from three sources via separate HTTP webhooks (SIEM, EDR, and cloud security tools).
2. Normalizes each alert into a shared schema and posts it to an external alert-buffer API for temporary storage.
3. Runs on a schedule and fetches all alerts from the alert-buffer API for the most recent processing window.
4. Fingerprints alerts by host, rule ID, and severity and pre-clusters obvious duplicates based on whether they occur within a tight time window.
5. Sends only the ambiguous clusters to Anthropic Claude to decide whether they should be merged as duplicates or kept as separate cases.
6. Builds unified security cases from the final clusters, then bulk creates or updates those cases in an external ticketing system.
7. Posts a summary message to a Slack channel with the number of unified cases created or updated for that cycle.

## Setup
1. Configure each security tool to send alerts to the corresponding n8n webhook URL (POST to /alerts/siem, /alerts/edr, and /alerts/cloud).
2. Add HTTP Header Auth credentials for the alert-buffer API and update the buffer endpoints if your service uses different URLs.
3. Add an Anthropic credential for Claude and select the model you want to use for semantic clustering.
4. Add HTTP Header Auth credentials for your ticketing system and update the bulk upsert endpoint URL to match your case API.
5. Add Slack credentials, ensure the target channel exists (for example, #security-alerts), and update the channel setting if needed.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
