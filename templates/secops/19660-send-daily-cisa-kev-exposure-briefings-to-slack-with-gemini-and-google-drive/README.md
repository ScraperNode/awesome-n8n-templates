# 🔒 Send daily CISA KEV exposure briefings to Slack with Gemini and Google Drive

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs daily to fetch new CISA KEV vulnerabilities, enrich them with NVD CVSS data, optionally match them against your RMM/EDR/network device inventory, and use Google Gemini plus Tavily Search to create a cybersecurity briefing that is posted to Slack and archived to Google Drive.

## How it works
1. Runs every day at 5:30pm (Asia/Bangkok) on a schedule trigger.
2. Loads configuration flags and, if enabled, fetches device inventory from your RMM, EDR, and network APIs (or generates a labeled demo fleet / not-configured summary).
3. Downloads the CISA Known Exploited Vulnerabilities (KEV) JSON feed, keeps the most recent items, and enriches each CVE with CVSS scores and affected version ranges from the NVD API.
4. Queries the Tavily Search API for recent cybersecurity news across several predefined categories and normalizes the returned articles for recency and relevance.
5. Deduplicates CVEs and URLs already reported in the last 30 days, computes a “top priority” CVE and recurring category trends, and matches KEV affected versions against installed software/firmware on your devices to produce exposure findings.
6. Sends the consolidated KEV, exposure, and news context to Google Gemini to generate a JSON briefing, then formats and posts the briefing (including a “Your Exposure” section when matches exist) to a Slack channel.
7. Saves the full daily briefing payload as a JSON file in Google Drive for archiving.

## Setup
1. Add credentials for Google Gemini (PaLM API), Slack (Bot Token), and Google Drive (OAuth2).
2. (Optional, for news sections) Add a Tavily Search API key via HTTP Header Auth.
3. (Optional, for exposure matching) Fill in the RMM/EDR/Network API base URLs and endpoint paths in the configuration, and attach three HTTP Header Auth credentials for those APIs.
4. Set your target Slack channel name in the configuration and optionally add a DEEP_DIVE_URL link to append to the Slack message.
5. Review the PROBE_MODE and DEMO_MODE flags (DEMO_MODE runs end-to-end with synthetic fleet/CVE data; PROBE_MODE halts with a probe report instead of posting).

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Stop and Error, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
