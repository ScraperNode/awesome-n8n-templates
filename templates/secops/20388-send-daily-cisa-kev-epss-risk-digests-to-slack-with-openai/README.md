# 🔒 Send daily CISA KEV EPSS risk digests to Slack with OpenAI

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow runs daily to monitor the CISA Known Exploited Vulnerabilities (KEV) catalog for CVEs matching your tech stack, enriches them with FIRST EPSS scores, uses OpenAI to generate a Slack-ready analyst digest, and posts the alert to a Slack channel.

## How it works
1. Runs every day at 8 AM on a schedule.
2. Downloads the latest CISA Known Exploited Vulnerabilities (KEV) JSON catalog and filters to entries added within your lookback window that match your configured vendors/products.
3. De-duplicates results by CVE ID across executions so each CVE is only alerted once.
4. Queries the FIRST EPSS API for each remaining CVE to retrieve exploitation probability data.
5. Calculates a Critical/High/Medium priority based on ransomware campaign use and EPSS thresholds, then sorts the CVEs by priority and score.
6. Uses OpenAI to write a Slack-formatted vulnerability digest from the structured CVE data and posts it to your selected Slack channel.

## Setup
1. Add an OpenAI API credential in the OpenAI Chat Model node.
2. Add a Slack credential and select the target channel in the Post Digest to Slack node.
3. Update the Configuration values (techStack, lookbackDays, epssHighThreshold) to match your environment, then run a test and activate the workflow.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
