# 🔒 Scan URLs with urlscan.io and send results via Gmail

> ⚡ **245 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Overview
Receive a URL via Webhook, submit it to **urlscan.io**, **wait ~30 seconds** for artifacts (e.g., screenshot), then email a clean summary with links to the result page, screenshot, and API JSON.

## What this template does
- Ingests a URL from a POST request.
- Submits the URL to **urlscan.io** and captures the scan UUID.
- **Waits 30s** to give urlscan time to generate the screenshot and result artifacts.
- Sends a formatted HTML email via **Gmail** with all relevant links.

## Nodes used
- **Webhook** (POST `/urlscan`)
- **urlscan.io → Perform a scan**
- **Wait** (30 seconds; configurable)
- **Gmail → Send a message**

## Input
```json
{ "url": "https://example.com" }

## 🔗 Nodes Used

Webhook, Gmail, urlscan.io

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
