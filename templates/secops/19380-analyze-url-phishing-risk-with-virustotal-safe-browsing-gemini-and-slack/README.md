# 🔒 Analyze URL phishing risk with VirusTotal, Safe Browsing, Gemini, and Slack

> ⚡ **27 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/ekCMYUeee6Y?si=fphlFmKkarUKUBKg

This workflow collects a URL via an n8n form, checks it against Google Safe Browsing and VirusTotal, enriches it with RDAP, crt.sh, and IP geolocation data, then uses Google Gemini to generate a plain-English verdict before logging results to Google Sheets and alerting Slack.

## How it works
1. Receives a URL submission through an n8n form.
2. Normalizes the input by extracting the domain and adding a scan timestamp.
3. Checks the submitted URL against Google Safe Browsing, then looks up hosting IP/geolocation data (ip-api.com), domain registration details (RDAP), and SSL certificate history (crt.sh).
4. Submits the URL to VirusTotal, waits briefly, and retrieves the VirusTotal analysis report.
5. Aggregates all signals into a 0–100 risk score with flags and a risk level (Low/Medium/High) based on Safe Browsing, VirusTotal detections, domain age, and certificate history.
6. Sends the aggregated threat data to Google Gemini (Gemini 3.1 Flash Lite) to produce a short verdict summary and one recommended next action.
7. Appends or updates the scan record in Google Sheets and posts the result to a Slack channel.

## Setup
1. Add API keys for Google Safe Browsing and VirusTotal, and replace the placeholder values in the HTTP request nodes.
2. Connect Google Sheets using a Google Service Account credential and set the target spreadsheet and sheet tab if you don’t want to use the included document.
3. Connect Slack using Slack OAuth credentials and choose the channel where alerts should be posted.
4. Add Google Gemini (Google PaLM) credentials for the Gemini 3.1 Flash Lite chat model.
5. Publish the n8n form and share its URL with users who should submit URLs for scanning.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Basic LLM Chain, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
