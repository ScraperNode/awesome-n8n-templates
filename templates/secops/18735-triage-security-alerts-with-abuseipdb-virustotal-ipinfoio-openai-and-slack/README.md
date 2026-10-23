# 🔒 Triage security alerts with AbuseIPDB, VirusTotal, ipinfo.io, OpenAI, and Slack

> ⚡ **13 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow receives security alerts via a webhook, normalizes and enriches them with AbuseIPDB, ipinfo.io, and VirusTotal lookups, then uses OpenAI to generate a SOC-style triage (severity, summary, and actions) and routes urgent alerts to Slack and a ticketing endpoint.

## How it works
1. Receives a security alert payload via an HTTP POST webhook.
2. Normalizes common alert fields (IDs, IPs, host, user, rule name, severity, and file hash) into a consistent JSON structure.
3. Enriches the source IP with reputation data from AbuseIPDB and geolocation/ASN data from ipinfo.io, and looks up the provided file hash in VirusTotal.
4. Consolidates the enrichment results into a single alert object and sends it to an OpenAI chat model to produce a structured JSON triage (severity, false-positive likelihood, summary, recommended actions, and confidence).
5. Parses the model output, builds a notification-friendly message, and returns the enriched alert plus triage JSON back to the webhook caller.
6. Posts high/critical alerts to an urgent Slack incoming-webhook channel and creates an incident via a configured ticketing HTTP endpoint, while routing other severities to a routine Slack logging channel.

## Setup
1. Configure your SIEM/EDR/IDS to POST alert JSON to the workflow’s webhook URL (path: /security-alert).
2. Add an OpenAI API credential for the OpenAI chat model used for triage.
3. Provide API keys for AbuseIPDB and VirusTotal (replace the placeholder header values or connect them via n8n credentials).
4. Set your Slack incoming webhook URLs for both the urgent and routine channels.
5. Replace the ticketing system incident creation URL with your own endpoint and adjust the JSON payload if your system requires different fields.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
