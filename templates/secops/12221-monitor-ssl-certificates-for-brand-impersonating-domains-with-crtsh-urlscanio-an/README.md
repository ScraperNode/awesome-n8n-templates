# 🔒 Monitor SSL certificates for brand-impersonating domains with crt.sh, Urlscan.io and Slack

> ⚡ **177 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Phishing Lookout (Typosquatting) and Brand Domain Monitor
This workflow monitors SSL certificate logs to find and scan new domains that might be impersonating your brand.

## Background
In modern cybersecurity, Brand Impersonation (or "Typosquatting") is quite common in phishing attacks. Attackers register domains that look nearly identical to a trusted brand—such as .input-n8n.io, n8n.i0, etc. instead of the legitimate— to deceive users into revealing sensitive credentials or downloading malware.

## How it works
Monitor: Checks crt.sh every hour for new SSL certificates matching your brand keywords.

Process: Uses a Split Out node to handle multi-domain certificates and a Filter node to ignore your own legitimate domains bringing only most recent certificates.

Scan: Automatically sends suspicious domains to Urlscan.io for a headless browser scan and screenshot.

Loop & Triage: Implements a 30-second Wait to allow the scan in loop to finish before fetching results.

Alert: Sends a Slack message with the domain name, report link, and an image of the supposedly suspicious site trying to mimic your site login page, etc. alerting potentially a phishing case.

## Setup Steps
Credentials: Connect your Urlscan.io API key and Slack bot token.

Configuration: Update the "Poll crt.sh" node. 
In URL https://crt.sh/?q=%.testdomain.com&output=json, use your specific brand name (e.g., %.yourbrand.com or .yourdomain.com instead of .testdomain.com).

Whitelist: Add your real domains to the myDomains list in the Filter & Deduplicate code node to prevent false alerts. Alternatively, you may also NOT opt to include your own domain for testing purposes to check how the Workflow behaves and outputs. In such case, obviously, your domain and sub-domains also are highlighted as Suspicious (as received in Slack Alerts)

Looping: Ensure the Alert Slack node output is connected back to the Split In Batches input to process all found domains.

![Phishing alert workflow image.png](fileId:3844)

## 🔗 Nodes Used

HTTP Request, Slack, urlscan.io, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
