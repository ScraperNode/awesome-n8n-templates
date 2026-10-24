# 🔒 Triage new certificate transparency subdomains with Google Sheets, Slack, Gmail and OpenAI

> ⚡ **22 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow monitors certificate transparency for new subdomains on your apex domains via crt.name, records them in Google Sheets, probes a capped set over HTTPS, optionally refines triage with an OpenAI chat model, and sends an alert digest to Slack and Gmail.

## How it works
1. Runs on a daily schedule (or manually) and loads configuration such as apex domains, Google Sheet details, probe limits, and alert thresholds.
2. Ensures the Google Sheets tab has the expected header columns, then reads existing rows to build a baseline of already-known hostnames.
3. Queries crt.name for each apex domain and keeps only newly observed hostnames that are not yet in the Google Sheet and don’t match the configured ignore substrings.
4. Classifies each new hostname against an exposure policy and expected prefix list, then selects up to the configured probe cap of higher-priority names to probe.
5. Sends a single unauthenticated HTTPS request to selected hostnames, extracts evidence (status, server header, title), detects common products and possible subdomain takeover responses, and assigns a rules-based verdict.
6. If enabled, batches the probed findings into one prompt for an OpenAI chat model and applies the AI’s verdicts and explanations without allowing it to downgrade rule-based severity.
7. Writes all new hostnames (probed and unprobed) to Google Sheets and, for findings at or above the alert threshold, sends a grouped digest to Slack and an HTML email via Gmail.

## Setup
1. Create a Google Sheet with a tab matching the configured name (default "Subdomains") and provide a Google Sheets OAuth2 credential with access to it.
2. Update the Configuration values for your apex domains, the Google Sheet ID, expectedPrefixes/ignoreSubstrings, and alert recipients (Slack channel and email address).
3. Add Slack OAuth2 credentials for posting to your target channel and Gmail OAuth2 credentials for sending the email digest.
4. If you want AI triage, add an OpenAI-compatible API credential (via OpenRouter in this template) and keep aiEnabled set to true, or disable aiEnabled to run rules-only.
5. Review probeCap and probeTimeoutMs to control outbound HTTPS probing volume and timeouts for your environment.

## Additional info
Who it is for : Security teams, platform teams and anyone responsible for knowing what their organization has exposed to the internet. It closes the gap between "a certificate was issued" and "somebody noticed."

Important: only point this at domains your organization owns. The probe sends an unauthenticated HTTPS request to each hostname it reports on.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
