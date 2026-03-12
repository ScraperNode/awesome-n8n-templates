# 🔒 Check phishing URL reputation with VirusTotal and log to Google Sheets

> ⚡ **69 views** · 🔒 [SecOps & Security Automation](../)

## Description

# 🐟 Phishing URL Reputation Checker with VirusTotal

This n8n template helps you automatically analyze URLs for phishing and malicious activity using VirusTotal’s multi-engine threat intelligence platform. It validates incoming URLs, submits them for scanning, polls for results, classifies risk, and logs verdicts for monitoring and incident response workflows.

Use cases include security automation, SOC alerting, phishing triage pipelines, chatbot URL validation, and email security enrichment. This template is ideal for blue teams, security engineers, and automation builders who want real-time URL reputation checks without building a full security pipeline from scratch.

## 💡 Good to know

- VirusTotal enforces API rate limits. For high-volume environments, consider increasing polling intervals or rotating API keys.

- The workflow defangs suspicious and malicious URLs to prevent accidental clicks during investigation.

- This template uses asynchronous polling because VirusTotal scans are not always immediately available.

## ⚙️ How it works

1. A webhook receives a URL from an API, form, chatbot, or automation trigger.
2. The URL is normalized and validated to ensure proper formatting.
3. Valid URLs are submitted to VirusTotal for reputation scanning.
4. The workflow polls VirusTotal until the analysis is completed or retries are exhausted.
5. Detection statistics are extracted and evaluated using threshold-based phishing logic.
6. URLs classified as suspicious or phishing are defanged for safe handling.
7. Results are returned and optionally logged to Google Sheets for auditing and tracking.

## 🧑‍💻 How to use

- Trigger the workflow using the webhook and send JSON like:
`{ "url": "example.com" }`

- Replace the webhook with other triggers such as email ingestion, Slack bots, or security tooling.

- Review the phishing verdict and risk level in the webhook response or Google Sheets log.

## 📋 Requirements

- VirusTotal API key (configured using HTTP Header Auth credentials)

- Google Sheets account for logging scan results

## 🧩 Customizing this workflow
- Send Slack, Microsoft Teams, or email alerts when the verdict is not SAFE.
- Extend the workflow with additional threat intelligence sources for stronger detection.
- Store scan results in databases like Airtable, PostgreSQL, or MySQL instead of Google Sheets for scalable logging and analytics.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
